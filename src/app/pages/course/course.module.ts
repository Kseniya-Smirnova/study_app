// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './course.routes';

// custom components
import { CourseComponent } from './course.component';

@NgModule({
	declarations: [
		CourseComponent
	],
	imports: [
		routes,
		CommonModule
	],
	providers: []
})
export class CourseModule {
	constructor() {
	}
}
