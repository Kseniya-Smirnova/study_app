import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CourseInstance } from '../../core/entities/courseInstance';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.template.html',
	styles: [require('./course-item.component.scss')]
})
export class CourseItemComponent {
	@Input() public course: CourseInstance;
	@Output() private deleteCourse: EventEmitter<CourseInstance>;

	constructor() {
		this.deleteCourse = new EventEmitter();
	}

	public deleteCourseAction(course: CourseInstance): void {
		this.deleteCourse.emit(course);
	}
}

// Also we can realize output and input other way
// and this way I like more, so I put it here in comments

// import { Component, EventEmitter } from '@angular/core';
// import { CourseInstance } from '../../core/entities/courseInstance';
//
// @Component({
// 	selector: 'course-item',
//  inputs: ['course'],
//  outputs: ['deleteCourse'],
// 	templateUrl: 'course-item.template.html',
// 	styles: [require('./course-item.component.scss')]
// })
// export class CourseItem {
// 	course: CourseInstance;
// 	deleteCourse: EventEmitter<CourseInstance>;
//
// 	constructor() {
// 		this.deleteCourse = new EventEmitter();
// 	}
//
// 	deleteCourseAction(course: CourseInstance): void {
// 		console.log(course);
// 		this.deleteCourse.emit(course);
// 	}
// }
