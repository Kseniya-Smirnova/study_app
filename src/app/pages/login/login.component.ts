import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthorizationService } from '../../services/authorization.service';
import { WindowRefService } from '../../services/window.service';
import { LoaderBlockService } from '../../components/loader-block/loader-block.service';

@Component({
	selector: 'login',
	template: require('./login.component.html')
})
export class LoginComponent implements OnInit, OnDestroy {
	private subscription: ISubscription;
	private subscriptionLogin: ISubscription;
	private isLogged: boolean;
	private login: string = '';
	private password: string = '';
	private window: Window;

	constructor(
		private authorizationService: AuthorizationService,
		window: WindowRefService,
		private loaderBlockService: LoaderBlockService,
		private router: Router,
		private store: Store<any>
	) {
		this.store.select('authorization').subscribe((data: any) => {
			console.log(data);
			if (data) {
				// this.router.navigate(['/courses']).then(() => this.loaderBlockService.hide());
			}
		});
		this.window = window.nativeWindow;
	}

	public ngOnInit() {
		this.subscription = this.authorizationService.subscribeForLogin().subscribe(
			(value) => {
				this.isLogged = value;
			}
		);
	}

	public logIn(f: NgForm) {
		this.loaderBlockService.show();
		this.authorizationService.login(f.value).then(() => {
			this.loaderBlockService.hide();
		});
	}

	public ngOnDestroy() {
		// this.subscription.unsubscribe(); //error???
		// this.subscriptionLogin.unsubscribe();
	}
}
