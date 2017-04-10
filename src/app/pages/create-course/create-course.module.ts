import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routes } from './create-course.routes';

import { DateInputComponent } from '../../components/date-input/date-input.component';
import { DurationInputComponent } from '../../components/duration-input/duration-input.component';

// custom components
import { CreateCourseComponent } from './create-course.component';

import { PipeModule } from '../../core/pipes/pipe.module';
// import { DurationLengthPipe } from '../../core/pipes/duration-length.pipe';

@NgModule({
	declarations: [
		CreateCourseComponent,
		DateInputComponent,
		DurationInputComponent
	],
	imports: [
		routes,
		CommonModule,
		PipeModule,
		// DurationLengthPipe,
		FormsModule
	],
	providers: []
})
export class CreateCourseModule {
	constructor() {
	}
}
