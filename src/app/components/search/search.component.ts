import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'search',
	templateUrl: 'search.component.html',
	styles: [require('./search.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class SearchComponent {
	@Output() private findCourseValue: EventEmitter<string>;
	constructor() {
		this.findCourseValue = new EventEmitter();
	}

	public findCourse(value: string): void {
		this.findCourseValue.emit(value);
	}
}
