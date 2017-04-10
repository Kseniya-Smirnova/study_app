import {
	Component, OnInit, OnChanges, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';

import { ISubscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

import { WindowRefService } from '../../services/window.service';
import { CourseInstance } from '../../core/entities/courseInstance';
import { CoursesService } from '../../services/courses.service';
import { LoaderBlockService } from '../../components/loader-block/loader-block.service';
import { FilterByPipe } from '../../core/pipes/filter-by.pipe';

@Component({
	selector: 'courses',
	template: require('./courses.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [CoursesService],
	styles: [require('./courses.component.scss')]
})
export class CoursesComponent implements OnInit, OnChanges, OnDestroy {
	private subscriber: ISubscription;
	private courses: CourseInstance[];
	private innerCourses: CourseInstance[];
	private window: Window;

	constructor(
		private courseServices: CoursesService,
		window: WindowRefService,
		private loaderBlockService: LoaderBlockService,
		private cd: ChangeDetectorRef) {
		this.window = window.nativeWindow;
	}

	private filterCourse(course) {
		let currentDate = new Date();
		currentDate.setDate(currentDate.getDate() - 14);
		if (currentDate > new Date(course.date)) {
			return course;
		}
	}

	public ngOnInit(): void {
		this.getCourses();
		this.subscriber = this.courseServices.courses.subscribe((courses: CourseInstance[]) => {
			_.filter(courses, (o) => {
				let currentDate = new Date();
				currentDate.setDate(currentDate.getDate() - 14);
				return (currentDate < new Date(o.date));

			});
			this.courses = courses;
			this.innerCourses = courses;
			this.cd.markForCheck();
		});
	}

	public ngOnChanges() {
		console.log('search component: onChanges');
	}

	public getCourses(): void {
		this.courseServices.getCourses();
	}

	public deleteCourseComplete(course: CourseInstance): any {
		this.loaderBlockService.show();
		let confirm = this.window.confirm('Do you really want to delete course?');

		if (confirm) {
			this.courseServices.removeCourse(course);
			this.innerCourses = this.courses;
		}
		this.loaderBlockService.hide();
	}

	public sortCourses(value: string): void {
		let filterByPipe = new FilterByPipe();
		this.innerCourses = filterByPipe.transform(this.courses, value);
	}

	public ngOnDestroy() {
		this.subscriber.unsubscribe();
	}
}
