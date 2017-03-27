import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CourseInstance } from '../core/entities/courseInstance';
import { Courses } from './mock-courses';

@Injectable()
export class CoursesService {
	public courses: BehaviorSubject<CourseInstance[]>;
	constructor() {
		this.courses = new BehaviorSubject<CourseInstance[]>([]);
	}

	public getCourses() {
		this.courses.next(Courses);
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
