// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WindowRefService } from '../../services/window.service';

// routes
import { routes } from './courses.routes';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from '../../components/course-item/course-item.component';
import { SearchComponent } from '../../components/search/search.component';
import { DateHighlightDirective } from '../../core/directives/attribute/date-highlight.directive';
import { DurationLengthPipe } from '../../core/pipes/duration-length.pipe';
import { OrderByPipe } from '../../core/pipes/order-by.pipe';

@NgModule({
	declarations: [
		CoursesComponent,
		CourseItemComponent,
		SearchComponent,
		DateHighlightDirective,
		DurationLengthPipe,
		OrderByPipe
	],
	imports: [
		[routes, BrowserModule, FormsModule]
	],
	providers: [WindowRefService]
})
export class CoursesModule {
	constructor() {
	}
}
