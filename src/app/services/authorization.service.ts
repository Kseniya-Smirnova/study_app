import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthorizationService {
	public isLogged: BehaviorSubject<boolean>;

	constructor(private http: Http) {
		// here will be checked token and the passed false or true
		this.isLogged = <BehaviorSubject<boolean>> new BehaviorSubject(false);
	}

	public subscribeForLogin(): Observable<boolean> {
		return this.isLogged.asObservable();
	}

	public login(user): Observable<Object> { //.subscribe((data) => {console.log(data)});
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post('http://localhost:3004/auth/login', user, options)
			.map((response: Response) => {
				let tokenInfo = response.json();
				if (tokenInfo && tokenInfo.token) {
					localStorage.setItem('currentUser', tokenInfo.token);
					// this.getUserInfo(tokenInfo.token);
					// тут я запуталась - как между собой связать функции login и getUserInfp !!!!switchMap????
					// между ними надо как то переключаться?
				}
				this.isLogged.next(true);
				return tokenInfo;

				//что правильно вернуть отсюда, если например запрос был саксес. но респонс не вернул токена
		});
	}

	public getUserInfo(token) {
		if (token) {
			let user = {
					fakeToken: token
				},
				headers = new Headers({'Authorization': token}),
				options = new RequestOptions({ headers: headers });

			return this.http.post('http://localhost:3004/auth/userinfo', user, options)
				.map((response: Response) => {
					let userInfo = response.json().name;
					return userInfo;
				})
		}
	}

	public logout(): void {
		this.isLogged.next(false);
		localStorage.removeItem('currentUser');
	}

	public isAuthenticated(): boolean {
		if (localStorage.getItem('user')) {
			return true;
		}

		return false;
	}

	// public getUserInfo(): string {
	// 	let user = localStorage.getItem('user');
	// 	return JSON.parse(user).username;
	// }
}
