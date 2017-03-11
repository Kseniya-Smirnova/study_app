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
			new CourseInstance(1, 'angular', new Date(2011, 0, 1), 60, 'bla lala', 'the best lecture'),
			new CourseInstance(1, 'angular', new Date(2011, 0, 1), 60, 'bla lala', 'the best lecture'),
			new CourseInstance(1, 'angular', new Date(2011, 0, 1), 60, 'bla lala', 'the best lecture')
		];
	}

	deleteCourseComplete(course: CourseInstance):void {
		console.log('course with this id will be removed', course.id);
	}
}
