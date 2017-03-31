import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'durationLength'})
export class DurationLengthPipe implements PipeTransform {
	transform(value: number): string {
		let exp,
			mins,
			hours = value / 60;

		if (hours >= 1) {
			hours = Math.floor(hours);
			mins = value - 60*hours;
			exp = hours.toString() + 'h ' + (mins > 0 ? (mins + 'min') : '');
		} else {
			exp = value + 'min';
		}

		return exp;
	}
}
