import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const initBreadcrumb = {path: '/#/courses', name: 'Courses'};

@Injectable()
export class BreadcrumbService {
	public breadcrumbs: BehaviorSubject<any>;

	constructor() {
		this.breadcrumbs = new BehaviorSubject([initBreadcrumb]);
	}

	public push(item): void {
		this.breadcrumbs.next([initBreadcrumb, item]);
	}

	public initBreadcrumbs(item): void {
		this.breadcrumbs.next([item]);
	}
}
