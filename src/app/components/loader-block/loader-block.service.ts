import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoaderBlockService {
	public showBlock: BehaviorSubject<boolean>;
	constructor() {
		this.showBlock = <BehaviorSubject<boolean>> new BehaviorSubject(false);
	}

	public subscribeToShowBlock(): Observable<boolean> {
		return this.showBlock.asObservable();
	}

	public show(): void {
		this.showBlock.next(true);
	}

	public hide(): void {
		this.showBlock.next(false);
	}
}
