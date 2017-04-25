import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => DateFieldComponent),
	multi: true
};

@Component({
	selector: 'date-field',
	templateUrl: 'date-field.component.html',
	host: {class: 'd-inline-block'},
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DateFieldComponent implements ControlValueAccessor {
	public date: string = '';
	constructor() {
	}

	public registerOnChange = (fn: any) => {
		this.propagateChange = fn;
	}

	public writeValue(obj: any): void {
		if (obj) {
			this.date = obj;
		}
	}

	public registerOnTouched(fn: any): void {};

	public onChange(event) {
		this.date = event.target.value;
		this.propagateChange(this.date);
	}

	private propagateChange = (_: any) => { };
}
