import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'date-input',
	templateUrl: 'date-input.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent {
	@Output() private createDate: EventEmitter<string>;
	@Input() public date: string;

	constructor() {
		console.log(this.date);
		this.createDate = new EventEmitter();
	}

	public updateDate(value) {
		this.createDate.emit(value);
	}
}
