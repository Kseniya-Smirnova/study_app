import { Component, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.scss')],
	providers: [AuthorizationService],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
	public loggedUser: boolean;
	constructor(private authorizationService: AuthorizationService) {
		this.loggedUser = this.authorizationService.isAuthenticated();
	}

	public login(): void {
		console.log('Here will be function with redirect to login page');
	}

	public logout(): void {
		console.log('Logout function');
		this.authorizationService.logout();
	}
}
