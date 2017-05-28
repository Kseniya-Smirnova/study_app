import { Action } from '@ngrx/store';

export const LOGIN='login';
export const LOGOUT='logout';

export function AuthorizationReducer(store: boolean = false, action: Action) {
	switch (action.type) {
		case LOGIN:
			return true;
		case LOGOUT:
			return false;
		default:
			return store;
	}
}
