import {
	Component,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	OnInit,
	OnDestroy
} from '@angular/core';
import { LoaderBlockService } from './loader-block.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
	selector: 'loader-block',
	templateUrl: 'loader-block.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [require('./loader-block.component.scss')]
})
export class LoaderBlockComponent implements OnInit, OnDestroy {
	public isShown: boolean;
	private subscriber: ISubscription;
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

	public ngOnDestroy() {
		this.subscriber.unsubscribe();
	}
}
