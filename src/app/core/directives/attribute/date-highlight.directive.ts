import {Directive, ElementRef, Renderer, Input, OnInit} from '@angular/core';

@Directive({
	selector: '[dateHighlight]'
})
export class DateHighlightDirective  implements OnInit {
	@Input('dateHighlight') dateHighlight: Date;
	private className: string;
	constructor(private elementRef: ElementRef, private renderer: Renderer) {
		// renderer.setElementClass(elementRef.nativeElement, 'class1', this.checkDate());
	}

	private checkDate():boolean {
		let currentDate = new Date(),
			createdDate = new Date(this.dateHighlight),
			freshPointDate = new Date();

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

	public ngOnInit() {
		this.checkDate();
		this.renderer.setElementClass(this.elementRef.nativeElement, this.className, this.checkDate());
	}

}


