import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
	transform(array: Array<any>, args: string): Array<any> {
		array.sort((a: any, b: any) => {
			if (new Date(a[args]) < new Date(b[args])) {
				return -1;
			} else if (new Date(b[args]) < new Date(a[args])) {
				return 1;
			} else {
				return 0;
			}
		});
		return array;
	}
}
