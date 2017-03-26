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
import { LoaderBlockModule } from '../../components/loader-block';

@NgModule({
	declarations: [
		CoursesComponent,
		CourseItemComponent,
		SearchComponent
	],
	imports: [
		[routes, BrowserModule, FormsModule,
			LoaderBlockModule]
	],
	providers: [WindowRefService]
})
export class CoursesModule {
	constructor() {
	}
}
