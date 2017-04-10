import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myDurationLength'})
export class DurationLengthPipe implements PipeTransform {
	public transform(value: number): string {
		let exp;
		let mins;
		let hours = value / 60;

		if (!value) {
			return '';
		}

		if (hours >= 1) {
			hours = Math.floor(hours);
			mins = value - 60 * hours;
			exp = hours.toString() + 'h ' + (mins > 0 ? (mins + 'min') : '');
		} else {
			exp = value + 'min';
		}

		return exp;
	}
}
