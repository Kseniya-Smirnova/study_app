import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { HttpService } from './http.service';

@Injectable()
export class AuthorizationService {
	public isLogged: BehaviorSubject<boolean>;

	constructor(private http: Http, private httpService: HttpService) {
		this.isLogged = <BehaviorSubject<boolean>> new BehaviorSubject(false);
	}

	public checkIsLogged() {
		return this.isLogged;
	}

	public subscribeForLogin(): Observable<boolean> {
		return this.isLogged.asObservable();
	}

	public login(user): Observable<Object> {
		// не очень поняла практическое применения этого экстенда,
		// напрмиер для getUserInfo мы используем другие заголовки
		return this.httpService.post('http://localhost:3004/auth/login', user)
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

				// что правильно вернуть отсюда, если например запрос был саксес. но респонс не вернул токена
		});
	}

	public getUserInfo(token) {
		if (token) {
			let user = {
					fakeToken: token
				};
			let headers = new Headers({Authorization: token});
			let options = new RequestOptions({ headers: headers });

			return this.http.post('http://localhost:3004/auth/userinfo', user, options)
				.map((response: Response) => {
					let userInfo = response.json().name;
					return userInfo;
				});
		}
	}

	public logout(): void {
		this.isLogged.next(false);
		localStorage.removeItem('currentUser');
	}
}
