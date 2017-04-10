import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

import { CourseInstance } from '../../core/entities/courseInstance';

@Component({
	selector: 'create-course',
	template: require('./create-course.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [require('./create-course.component.scss')]
})
export class CreateCourseComponent {
	public course: CourseInstance;

	constructor() {
		this.course = {};
	}

	public createCourse(f: NgForm) {
		console.log('the course will be added with data' + JSON.stringify(f.value));
	}

	public addCourseDate(value) {
		// this.course.date = new Date(value);
		console.log(value);
	}
}
