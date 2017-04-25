import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseInstance } from '../../core/entities/courseInstance';
import { validateDate } from '../../core/validators/date.validator';

@Component({
	selector: 'course',
	templateUrl: 'course.component.html',
	styles: [require('./course.component.scss')]
})
export class CourseComponent implements OnInit {
	public courseForm: FormGroup;
	public course: CourseInstance = {};
	// fake authors, lets imagine it goes from server
	public authors: string[] = ['author1', 'author2', 'author3', 'author4'];

	constructor(private formBuilder: FormBuilder) {
	}

	public submit(form): void {
		console.log(form.value);
	}

	public ngOnInit() {
		this.courseForm = this.formBuilder.group({
			course: this.formBuilder.group({
				name: ['', [Validators.required, Validators.maxLength(50)]],
				description: ['', [Validators.required, Validators.maxLength(500)]],
				date: ['', [Validators.required, validateDate]],
				length: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
				author: [[], [Validators.required]]
			})
		});
	}

	public showValidateError(field) {
		return this.courseForm.get('course').get(field).invalid &&
		this.courseForm.get('course').get(field).dirty;
	}

}
