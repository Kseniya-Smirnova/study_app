import { Component, OnInit, DoCheck, OnChanges } from '@angular/core';

import { WindowRefService } from '../../services/window.service';
import { CourseInstance } from '../../core/entities/courseInstance';
import { CoursesService } from '../../services/courses.service';

@Component({
	selector: 'courses',
	template: require('./courses.component.html'),
	providers: [CoursesService]
})
export class CoursesComponent implements OnInit, DoCheck, OnChanges {
	private courses: CourseInstance[];
	private window: Window;

	constructor(private courseServices: CoursesService, window: WindowRefService) {
		this.window = window.nativeWindow;
	}

	public ngOnInit(): void {
		this.getCourses();
	}

	public ngOnChanges() {
		console.log('search component: onChanges');
	}
	public ngDoCheck() {
		this.getCourses();
	}

	public getCourses(): void {
		this.courses = this.courseServices.getCourses();
	}

	public deleteCourseComplete(course: CourseInstance): void {
		let confirm = this.window.confirm('Do you really want to delete course?');

		if (confirm) {
			this.courseServices.removeCourse(course);
		}
	}
}
