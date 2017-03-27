import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { LoaderBlockService } from './loader-block.service';
// import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'loader-block',
	templateUrl: 'loader-block.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [require('./loader-block.component.scss')]
})
export class LoaderBlockComponent implements OnInit {
	public isShown: any;
	constructor(private loaderBlockService: LoaderBlockService, private cd: ChangeDetectorRef) {
		// loaderBlockService.hide();
	}

	public ngOnInit() {
		this.loaderBlockService.subscribeToShowBlock().subscribe(
			(value) => {
				// console.log('tested', value);
				this.isShown = value;
				this.cd.markForCheck();
			}
		);
		// this.loaderBlockService.hide();
	}
}
