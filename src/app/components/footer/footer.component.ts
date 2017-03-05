import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'main-footer',
	templateUrl: 'footer.template.html',
	styles: [require('./footer.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
	constructor() {

	}
}
