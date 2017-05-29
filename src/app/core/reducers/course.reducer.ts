import { Action } from '@ngrx/store';

export const GET_COURSE = 'get_course';

export function courseReducer(state, action: Action) {

	if (action.type === GET_COURSE) {
		return action.payload;
	}
	return state;
}
