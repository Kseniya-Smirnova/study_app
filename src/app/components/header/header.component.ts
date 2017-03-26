import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.scss')],
	providers: [AuthorizationService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	public isLogged: boolean;

	constructor(private authorizationService: AuthorizationService, private cd: ChangeDetectorRef) {

	}

	public login(): void {
		this.authorizationService.login({});
		console.log('Here will be function with redirect to login page');
	}

	public logout(): void {
		this.authorizationService.logout();
	}

	private ngOnInit() {
		this.authorizationService.subscribeForLogin().subscribe(
			(value) => {
				this.isLogged = value;
				this.cd.markForCheck();
			}
		);
	}
}
