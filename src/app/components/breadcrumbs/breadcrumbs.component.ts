import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'breadcrumbs',
	templateUrl: 'breadcrumbs.template.html',
	styles: [require('./breadcrumbs.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsComponent {
	constructor() {

	}
}
