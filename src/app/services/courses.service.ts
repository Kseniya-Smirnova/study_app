import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { CourseInstance } from '../core/entities/courseInstance';
import { Courses } from './mock-courses';

@Injectable()
export class CoursesService {
	private courses: CourseInstance[];
	constructor() {
		this.courses = Courses;
	}

	public getCourses(): CourseInstance[] {
		return this.courses;
	}

	public createCourse(course): void {
		this.courses.push(course);
	}

	public getCourse(id): CourseInstance {
		return _.find(this.courses, {id});
	}

	public updateCourse(course): void {
		let match = _.find(this.courses, {id: course.id});

		if (match) {
			let index = _.indexOf(this.courses, match);
			this.courses.splice(index, 1, course);
		}
	}

	public removeCourse(course): void {
		_.remove(this.courses, course);
	}
}
