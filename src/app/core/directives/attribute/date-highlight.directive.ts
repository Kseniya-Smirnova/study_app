import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[dateHighlight]'
})
export class DateHighlightDirective  implements OnInit {
	@Input('dateHighlight') private dateHighlight: Date;

	private className: string;

	constructor(private elementRef: ElementRef, private renderer: Renderer) {
	}

	public ngOnInit() {
		this.checkDate();
		this.renderer.setElementClass(this.elementRef.nativeElement, this.className, this.checkDate());
	}

	private checkDate(): boolean {
		let currentDate = new Date();
		let createdDate = new Date(this.dateHighlight);
		let freshPointDate = new Date();

		freshPointDate.setDate(currentDate.getDate() - 14);

		if ((createdDate < currentDate) && (createdDate >= freshPointDate)) {
			this.className = 'course-fresh';
			return true;
		} else if (createdDate > currentDate) {
			this.className = 'course-upcoming';
			return true;
		} else {
			return false;
		}
	}
}
