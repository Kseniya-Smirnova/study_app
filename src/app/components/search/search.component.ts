import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'search',
	templateUrl: 'search.component.html',
	styles: [require('./search.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class SearchComponent {

	constructor() {

	}

	// ngOnInit() {
	// 	console.log('search component: onInit');
	// }
	// ngOnChanges() {
	// 	console.log('search component: onChanges');
	// }
	// ngDoCheck() {
	// 	console.log('search component: doCheck');
	// }
	// ngAfterContentInit() {
	// 	console.log('search component: afterContentInit');
	// };
	// ngAfterContentClicked() {
	// 	console.log('search component: afterContentClicked');
	// };
	// ngAfterViewInit() {
	// 	console.log('search component: afterViewInit');
	// };
	// ngAfterViewChecked() {
	// 	console.log('search component: afterViewChecked');
	// };
	// ngOnDestroy() {
	// 	console.log('search component: onDestroy');
	// };
    //
    //
	public findCourse(element: string): void {
		console.log(element);
	}
}
