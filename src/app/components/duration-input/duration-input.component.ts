import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'duration-input',
	templateUrl: 'duration-input.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationInputComponent {
	@Input() public duration: number;
	// public duration: number;

	constructor(private cd: ChangeDetectorRef) {
	}

	public ngOnInit() {
		this.cd.markForCheck();
	}
}
