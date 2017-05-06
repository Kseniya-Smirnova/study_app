import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'duration-input',
	templateUrl: 'duration-input.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationInputComponent {
	@Input() private duration: number;
	// public duration: number;

	constructor(private cd: ChangeDetectorRef) {
	}

	ngOnInit() {
		console.log(123, this.duration);
		this.cd.markForCheck();
		console.log(123, this.duration);
	}
}
