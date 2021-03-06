import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Store } from '@ngrx/store';

import { GET_COURSES } from '../core/reducers/courses.reducer';
import { CourseInstance } from '../core/entities/courseInstance';

import { GET_COURSE } from '../core/reducers/course.reducer';

@Injectable()
export class CoursesService {
	public courses: BehaviorSubject<CourseInstance[]>;
	constructor(private http: Http, private store: Store<any>) {
		this.courses = new BehaviorSubject<CourseInstance[]>([]);
	}

	public getCourses(start, count, name) {
		let params = new URLSearchParams();
		params.set('start', start);
		params.set('count', count);
		params.set('name', name);

		this.http.get('http://localhost:3004/courses', {
			search: params
		}).map((data) => {
			this.store.dispatch({
				type: GET_COURSES,
				payload: data.json()
			});
		}).subscribe((data) => console.log(data));
	}

	public createCourse(course): void {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		this.http.post('http://localhost:3004/courses', course, options);
	}

	public getCourse(id) {
		let params = new URLSearchParams();
		params.set('id', id);

		this.http.get('http://localhost:3004/course', {
			search: params
		}).map((data) => {
			this.store.dispatch({
				type: GET_COURSE,
				payload: data.json()
			});
			return data.json();
		}).subscribe((data) => this.courses.next(data));
	}

	public updateCourse(course): void {
		let innerCourses = this.courses['value'];
		let match = _.find(innerCourses, {id: course.id});

		if (match) {
			let index = _.indexOf(innerCourses, match);
			innerCourses.splice(index, 1, course);
		}
	}

	public removeCourse(course, start, count, search): any {
		return this.http.delete('http://localhost:3004/courses/' + course.id)
			.map((data) => console.log(data)).subscribe(() => {
				this.getCourses(start, count, search);
			});
	}
}
