import {
	Component, OnInit, DoCheck, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';

import { WindowRefService } from '../../services/window.service';
import { CourseInstance } from '../../core/entities/courseInstance';
import { CoursesService } from '../../services/courses.service';
import { LoaderBlockService } from '../../components/loader-block/loader-block.service';

@Component({
	selector: 'courses',
	template: require('./courses.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [CoursesService],
	styles: [require('./courses.component.scss')]
})
export class CoursesComponent implements OnInit, DoCheck, OnChanges {
	private courses: CourseInstance[];
	private window: Window;

	constructor(
		private courseServices: CoursesService,
		window: WindowRefService,
		private loaderBlockService: LoaderBlockService,
		private cd: ChangeDetectorRef) {
		this.window = window.nativeWindow;
	}

	public ngOnInit(): void {
		this.courseServices.courses.subscribe((courses: CourseInstance[]) => {
			console.log(this.courses);
			this.courses = courses;
			this.cd.markForCheck();
		});
	}

	public ngOnChanges() {
		console.log('search component: onChanges');
	}
	public ngDoCheck() {
		this.getCourses();
	}

	public getCourses(): void {
		this.courseServices.getCourses();
	}

	public deleteCourseComplete(course: CourseInstance): void {
		this.loaderBlockService.show();
		setTimeout(() => {
			let confirm = this.window.confirm('Do you really want to delete course?');

			if (confirm) {
				this.courseServices.removeCourse(course);
			}
			this.loaderBlockService.hide();
		}, 100);
	}
}
