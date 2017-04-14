import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISubscription } from 'rxjs/Subscription';
import {Router} from '@angular/router';

import { AuthorizationService } from '../../services/authorization.service';
import { WindowRefService } from '../../services/window.service';
import { LoaderBlockService } from '../../components/loader-block/loader-block.service';

@Component({
	selector: 'login',
	template: require('./login.component.html')
})
export class LoginComponent implements OnInit, OnDestroy {
	private subscriber: ISubscription;
	private subscriptionLogin: ISubscription;
	private isLogged: boolean;
	private login: string = '';
	private password: string = '';
	private window: Window;

	constructor(
		private authorizationService: AuthorizationService,
		window: WindowRefService,
		private loaderBlockService: LoaderBlockService,
		private router: Router
	) {
		this.window = window.nativeWindow;
		console.log('router', router);
	}

	public ngOnInit() {
		this.subscriber = this.authorizationService.subscribeForLogin().subscribe(
			(value) => {
				this.isLogged = value;
			}
		);
	}

	public logIn(f: NgForm) {
		this.loaderBlockService.show();
		this.subscriptionLogin = this.authorizationService.login(f.value).subscribe(() => {
			this.router.navigate(['/courses']).then(() => this.loaderBlockService.hide());
		});
	}

	public ngOnDestroy() {
		this.subscriber.unsubscribe();
		// this.subscriptionLogin.unsubscribe(); //ругается на это :(
	}
}
