import { Component, Input, HostBinding, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DurationFieldComponent),
	multi: true
};

@Component({
	selector: 'duration-field',
	templateUrl: 'duration-field.component.html',
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DurationFieldComponent implements ControlValueAccessor {
	@HostBinding('attr.class') public class = 'd-inline-block';
	public duration: string = '';
	@Input() public c: any;
	constructor() {

	}

	public registerOnChange = (fn: any) => {
		this.propagateChange = fn;
	}

	public writeValue(obj: any): void {
		if (obj) {
			this.duration = obj;
		}
	}

	public registerOnTouched(fn: any): void {};

	private onChange(event) {
		this.duration = event.target.value;
		this.propagateChange(this.duration);
	}

	private propagateChange = (_: any) => { };

}
