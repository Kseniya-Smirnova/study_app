import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'myFilterBy'})
export class FilterByPipe implements PipeTransform {
	public transform(array: any[], args: string): any[] {
		if (args) {
			array = _.filter(array, {title: args});
		}
		return array;
	}
}
