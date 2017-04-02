import {
	Component, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';

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
export class CoursesComponent implements OnInit, OnChanges {
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

	public ngOnInit(): void {
		this.getCourses();
		this.courseServices.courses.subscribe((courses: CourseInstance[]) => {
			this.innerCourses = courses;
			this.courses = courses;
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
}
