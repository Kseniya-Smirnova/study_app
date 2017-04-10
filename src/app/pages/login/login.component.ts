import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISubscription } from 'rxjs/Subscription';

import { AuthorizationService } from '../../services/authorization.service';
import { WindowRefService } from '../../services/window.service';
import { LoaderBlockService } from '../../components/loader-block/loader-block.service';

@Component({
	selector: 'login',
	template: require('./login.component.html')
})
export class LoginComponent implements OnInit, OnDestroy {
	private subscriber: ISubscription;
	private isLogged: boolean;
	private model: any = {};
	private window: Window;

	constructor(
		private authorizationService: AuthorizationService,
		window: WindowRefService,
		private loaderBlockService: LoaderBlockService
	) {
		this.window = window.nativeWindow;
		this.model = {};
	}

	public ngOnInit() {
		this.subscriber = this.authorizationService.subscribeForLogin().subscribe(
			(value) => {
				this.isLogged = value;
			}
		);
	}

	public login(f: NgForm) {
		this.loaderBlockService.show();
		this.authorizationService.login(f.value);
	}

	public ngOnDestroy() {
		this.subscriber.unsubscribe();
	}
}
