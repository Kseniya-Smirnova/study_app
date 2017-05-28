import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { HttpService } from './http.service';
import { LOGIN, LOGOUT } from '../core/reducers/authorization.reducer';

@Injectable()
export class AuthorizationService {
	public isLogged: BehaviorSubject<boolean>;

	constructor(private http: Http, private httpService: HttpService, private store: Store<any>, private router: Router) {
		this.isLogged = <BehaviorSubject<boolean>> new BehaviorSubject(false);
	}

	public checkIsLogged() {
		return this.isLogged;
	}

	public subscribeForLogin(): Observable<boolean> {
		return this.isLogged.asObservable();
	}

	public login(user): any {
		// не очень поняла практическое применения этого экстенда,
		// напрмиер для getUserInfo мы используем другие заголовки
		return this.httpService.post('http://localhost:3004/auth/login', user)
			.toPromise().then((response: Response) => {
				let tokenInfo = response.json();
				if (tokenInfo && tokenInfo.token) {
					localStorage.setItem('currentUser', tokenInfo.token);
					// this.getUserInfo(tokenInfo.token);
					// тут я запуталась - как между собой связать функции login и getUserInfp !!!!switchMap????
					// между ними надо как то переключаться?
				}

				this.store.dispatch({
					type: LOGIN
				});
				this.router.navigateByUrl('/courses');

				// console.log(this.store);
				// что правильно вернуть отсюда, если например запрос был саксес. но респонс не вернул токена
		});
	}

	public getUserName(user, options) {
		return this.http.post('http://localhost:3004/auth/userinfo', user, options)
			.map((response: Response) => {
				let userInfo = response.json().name;
				return userInfo;
			});
	}

	public getUserInfo(token) {
		if (token) {
			let user = {
					fakeToken: token
				};
			let headers = new Headers({Authorization: token});
			let options = new RequestOptions({ headers: headers });

			this.getUserName(user, options);
		}
	}

	public logout(): void {
		this.store.dispatch({
			type: LOGOUT,
			payload: false
		});
		localStorage.removeItem('currentUser');
	}
}
