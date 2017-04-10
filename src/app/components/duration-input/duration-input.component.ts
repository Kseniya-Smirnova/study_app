import { Component, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'duration-input',
	templateUrl: 'duration-input.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationInputComponent {
	// @Output() private createDate: EventEmitter<string>;
	public duration: number;

	constructor() {

	}
}
