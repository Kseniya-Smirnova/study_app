// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routes
import { routes } from './courses.routes';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseItem } from '../../components/course-item/course-item.component';
import { SearchComponent } from '../../components/search/search.component';

@NgModule({
	declarations: [
		CoursesComponent,
		CourseItem,
		SearchComponent
	],
	imports: [
		[routes, BrowserModule]
	],
	providers: []
})
export class CoursesModule {
	constructor() {
	}
}
