import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthorizationService } from '../../services/authorization.service';
import { WindowRefService } from '../../services/window.service';

@Component({
	selector: 'login',
	template: require('./login.component.html'),
	providers: [AuthorizationService]
})
export class LoginComponent {
	private model: any = {};
	private window: Window;

	constructor(private authorizationService: AuthorizationService, window: WindowRefService) {
		this.window = window.nativeWindow;
		this.model = {};
	}

	public login(f: NgForm) {
		this.authorizationService.login(f.value);
	}
}
