import { Injectable } from '@angular/core';
import {
	CanActivate, Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
}  from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Injectable()
export class AuthorizationGuard implements CanActivate {
	public isLogged: boolean;
	constructor(private authorizationService: AuthorizationService, private router: Router, private store: Store<any>) {
		this.authorizationService.subscribeForLogin().subscribe((value) => this.isLogged = value);
	}

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
		return this.store.select('authorization').map((isLogged:boolean) => {
			console.log(345, isLogged);
			if (isLogged) {
				return true;
			}
			this.router.navigate(['/login']);
			return false;
		});
	}

	public checkLogin(): boolean {
		if (this.isLogged) {
			return true;
		}

		this.router.navigate(['/login']);
		return false;
	}
}
