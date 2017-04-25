import {
	Component,
	Input,
	HostBinding,
	forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as _ from 'lodash';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => AuthorListComponent),
	multi: true
};

@Component({
	selector: 'author-list',
	templateUrl: 'author-list.component.html',
	styles: [require('./author-list.component.scss')],
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AuthorListComponent implements ControlValueAccessor {
	@HostBinding('attr.class') public class = 'd-inline-block';
	@Input() public authors: string[];
	@Input() public nameOption: string;
	public currentValue: any;
	private options: string[] = [];
	constructor() {

	}

	public onChange = (_) => {};
	public onTouched = (_) => {};

	public setValue(author) {
		if (author.target.checked) {
			this.options.push(author.target.value);
		} else {
			this.options = _.remove(this.options, (n) => {
				return n !== author.target.value;
			});
		}
		this.onChange(this.options);
	}

	public writeValue(value: any) {
		console.log('value', value);
		this.currentValue = this.options;

	}

	public registerOnChange(fn: any) {
		this.onChange = fn;
	}

	public registerOnTouched (fn: any) {

	}
}
