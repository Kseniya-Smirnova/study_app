// angular modules
import { NgModule } from '@angular/core';

// routes
import { routes } from './courses.routes';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from '../../components/course-item/course-item.component';

@NgModule({
	declarations: [
		CoursesComponent,
		CourseItemComponent
	],
	imports: [
		routes
	],
	providers: []
})
export class CoursesModule {
	constructor() {
	}
}
