import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

import { BreadcrumbService } from './breadcrumbs.service';

@Component({
	selector: 'breadcrumbs',
	templateUrl: 'breadcrumbs.template.html',
	styles: [require('./breadcrumbs.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsComponent {
	public breadcrumbs: any;

	constructor(breadcrumbService: BreadcrumbService, cd: ChangeDetectorRef) {
		breadcrumbService.breadcrumbs.subscribe((data) => {
			this.breadcrumbs = data;
			cd.markForCheck();
		});
	}
}
