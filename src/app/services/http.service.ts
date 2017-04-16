import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http { // не очень поняла сути таска но на всякий случай сделала
	constructor (backend: XHRBackend, options: RequestOptions, private http: Http) {
		super(backend, options);
	}

	public post(url, data) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		console.log(this.http.post(url, data, options));
		return this.http.post(url, data, options);
	}
}
