import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.template.html',
	styles: [require('./course-item.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CourseItemComponent {
	constructor() {

	}
}
