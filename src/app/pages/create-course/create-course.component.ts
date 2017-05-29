import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CourseInstance } from '../../core/entities/courseInstance';
import { CoursesService } from '../../services/courses.service';
import { BreadcrumbService } from '../../components/breadcrumbs/breadcrumbs.service';

import { Store } from '@ngrx/store';

@Component({
	selector: 'create-course',
	template: require('./create-course.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [CoursesService],
	styles: [require('./create-course.component.scss')]
})
export class CreateCourseComponent implements OnInit {
	public course: CourseInstance;

	constructor(
		private route: ActivatedRoute,
		private coursesService: CoursesService,
		private cd: ChangeDetectorRef,
		private router: Router,
		private breadcrumbService: BreadcrumbService,
		private store: Store<any>) {}

	public createCourse(f: NgForm) {
		this.coursesService.createCourse(f.value);
		this.router.navigate(['/courses']);
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

		this.store.select('course').subscribe((courses: CourseInstance[]) => {
			if (courses && courses.length) {
				this.course = courses[0];
				this.breadcrumbService.push({name: this.course.name, path: '/#/courses/' + this.course.id});
			} else {
				this.course = {};
				this.breadcrumbService.push({name: 'New course', path: '/#/courses/new'});
			}
			this.cd.markForCheck();
		});
	}
}
