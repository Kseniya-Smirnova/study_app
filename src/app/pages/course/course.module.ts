// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// routes
import { routes } from './course.routes';

// custom components
import { CourseComponent } from './course.component';
import { AuthorListComponent } from '../../components/author-list/author-list.component';
import { DurationFieldComponent } from '../../components/duration-field/duration-field.component';
import { DateFieldComponent } from '../../components/date-field/date-field.component';
import { PipeModule } from '../../core/pipes/pipe.module';

@NgModule({
	declarations: [
		CourseComponent,
		AuthorListComponent,
		DurationFieldComponent,
		DateFieldComponent
	],
	imports: [
		routes,
		CommonModule,
		ReactiveFormsModule,
		PipeModule
	],
	providers: []
})
export class CourseModule {
	constructor() {
	}
}
