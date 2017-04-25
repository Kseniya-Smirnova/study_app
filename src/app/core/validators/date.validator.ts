import { FormControl } from '@angular/forms';

export function validateDate(c: FormControl) {
	let DATE_REGEXP = /^\d{1,2}\.\d{1,2}\.\d{4}$/;

	return DATE_REGEXP.test(c.value) ? null : {
		validateDate: {
			valid: false
		}
	};
}
