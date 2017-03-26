import { Injectable, OnDestroy, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ZoneService implements OnDestroy {
	private onZoneStableSub: BehaviorSubject<any>;
	private onZoneUnstableSub: BehaviorSubject<any>;

	constructor(private ngZone: NgZone) {
		this.onZoneStableSub = this.ngZone.onStable.subscribe(this.onZoneStable);
		this.onZoneUnstableSub = this.ngZone.onUnstable.subscribe(this.onZoneUnstable);
	}

	public ngOnDestroy() {
		this.onZoneStableSub.unsubscribe();
		this.onZoneUnstableSub.unsubscribe();
	}

	private onZoneStable() {
		console.timeEnd('unstable phase duration');
		console.log('Now stable');
	}

	private onZoneUnstable() {
		console.log('The application start unstable');
		console.time('unstable phase duration');
	}
}
