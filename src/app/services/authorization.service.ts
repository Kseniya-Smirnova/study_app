import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthorizationService {
	public isLogged: BehaviorSubject<boolean>;

	constructor() {
		// here will be checked token and the passed false or true
		this.isLogged = <BehaviorSubject<boolean>> new BehaviorSubject(true);
	}

	public subscribeForLogin(): Observable<boolean> {
		return this.isLogged.asObservable();
	}

	public saveUserInfo(username, token): void {
		localStorage.setItem('user', JSON.stringify({username, token}));
	}

	public login(user: Object): void {
		// if logged successfully
		this.isLogged.next(true);

		console.log('User has username and password:', user);
		// here will be request with { username: username, password: password }
		// after get response it will be something like
		// let token = response.json() && response.json().token;
		// this.saveUserInfo(username, token);
	}

	public logout(): void {
		this.isLogged.next(false);
		localStorage.removeItem('user');
	}

	public isAuthenticated(): boolean {
		if (localStorage.getItem('user')) {
			return true;
		}

		return false;
	}

	public getUserInfo(): string {
		let user = localStorage.getItem('user');
		return JSON.parse(user).username;
	}
}
