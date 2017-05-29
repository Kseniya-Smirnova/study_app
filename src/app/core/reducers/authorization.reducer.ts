import { Action } from '@ngrx/store';

export const LOGIN = 'login';
export const LOGOUT = 'logout';

export function authorizationReducer(store: any, action: Action) {
	switch (action.type) {
		case LOGIN:
			return {
				user: action.payload
			};
		case LOGOUT:
			return {
				user: action.payload
			};
		default:
			return store;
	}
}
