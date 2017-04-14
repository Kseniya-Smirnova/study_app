import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { CourseInstance } from '../core/entities/courseInstance';

@Injectable()
export class CoursesService {
	public courses: BehaviorSubject<CourseInstance[]>;
	constructor(private http: Http) {
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
			return data.json();
		}).subscribe((data) => this.courses.next(data));
	}

	public createCourse(course): void {
		this.courses.next(course);
	}

	public getCourse(id): CourseInstance {
		return _.find(this.courses['value'], {id});
	}

	public updateCourse(course): void {
		let innerCourses = this.courses['value'];
		let match = _.find(innerCourses, {id: course.id});

		if (match) {
			let index = _.indexOf(innerCourses, match);
			innerCourses.splice(index, 1, course);
		}
	}

	public removeCourse(course): void {
		_.remove(this.courses['value'], course);
	}
}
