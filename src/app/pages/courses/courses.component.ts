import { Component} from '@angular/core';
import { CourseInstance } from '../../core/entities/courseInstance'

@Component({
	selector: 'courses',
	template: require('./courses.template.html')
})
export class CoursesComponent {
	courses: CourseInstance[];

	constructor() {
		this.courses = [
			new CourseInstance(1, 'angular 1.5', new Date(2014, 0, 1), 60, 'Here goes a lot of description', 'the best lecture'),
			new CourseInstance(2, 'angular 2.0', new Date(2017, 0, 1), 60, 'Here goes again description', 'the best lecture'),
			new CourseInstance(3, 'angular 10.0', new Date(2020, 0, 1), 60, 'And here description', 'the best lecture')
		];
	}

	deleteCourseComplete(course: CourseInstance):void {
		console.log('course with this id will be removed', course.id);
	}
}
