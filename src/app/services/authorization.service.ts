import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

	public saveUserInfo(username, token): void {
		localStorage.setItem('user', JSON.stringify({username, token}));
	}

	public login(user: Object): void {
		console.log('User has username and passsword:', user);
		// here will be request with { username: username, password: password }
		// after get response it will be something like
		// let token = response.json() && response.json().token;
		// this.saveUserInfo(username, token);
	}

	public logout(): void {
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
