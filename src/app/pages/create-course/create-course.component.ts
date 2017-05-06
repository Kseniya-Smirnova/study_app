import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CourseInstance } from '../../core/entities/courseInstance';
import { CoursesService } from '../../services/courses.service';

@Component({
	selector: 'create-course',
	template: require('./create-course.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [CoursesService],
	styles: [require('./create-course.component.scss')]
})
export class CreateCourseComponent implements OnInit {
	public course: CourseInstance;

	constructor(private route: ActivatedRoute, private coursesService: CoursesService, private cd: ChangeDetectorRef) {
		console.log('constructor');
	}

	public createCourse(f: NgForm) {
		console.log('the course will be added with data' + JSON.stringify(f.value));
	}

	public addCourseDate(value) {
		// this.course.date = new Date(value);
		console.log(value);
	}

	public ngOnInit() {
		console.log('ngOnInit');
		this.route.params
			.map((params: Params) => this.coursesService.getCourse(+params['id']))
			.subscribe((data) => console.log('data', data));

		this.coursesService.courses.subscribe((courses: CourseInstance[]) => {
			this.course = courses.length ? courses[0] : {};
			console.log(this.course);
			this.cd.markForCheck();
		});
	}
}
