import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myOrderBy'})
export class OrderByPipe implements PipeTransform {
	public transform(array: Object[], args: string): Object[] {
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
