import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Store } from '@ngrx/store';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	public isLogged: any;

	constructor(private authorizationService: AuthorizationService,
				private cd: ChangeDetectorRef,
				private store: Store<any>) {
		this.store.select('authorization').subscribe((isLogged) => {
			this.isLogged = isLogged;
		});
	}

	public logout(): void {
		this.authorizationService.logout();
	}

	public ngOnInit() {
		// this.authorizationService.subscribeForLogin().subscribe(
		// 	(value) => {
		// 		this.isLogged = value;
		// 		this.cd.markForCheck();
		// 	}
		// );
	}
}
