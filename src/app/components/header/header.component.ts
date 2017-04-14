import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.scss')],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	public isLogged: boolean;

	constructor(private authorizationService: AuthorizationService, private cd: ChangeDetectorRef) {

	}

	public logout(): void {
		this.authorizationService.logout();
	}

	public ngOnInit() {
		this.authorizationService.subscribeForLogin().subscribe(
			(value) => {
				this.isLogged = value;
				this.cd.markForCheck();
			}
		);
	}
}
