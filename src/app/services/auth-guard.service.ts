import { Injectable } from '@angular/core';
import {
	CanActivate, Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
}  from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
	public isLogged: boolean;
	constructor(private authorizationService: AuthorizationService, private router: Router) {
		this.authorizationService.subscribeForLogin().subscribe((value) => this.isLogged = value);
	}

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.checkLogin();
	}

	public checkLogin(): boolean {
		console.log(this.isLogged);
		if (this.isLogged) {
			return true;
		}

		this.router.navigate(['/login']);
		return false;
	}
}
