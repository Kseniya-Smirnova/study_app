import { Action } from '@ngrx/store';

export const GET_COURSES = 'get_courses';

export function coursesReducer(state, action: Action) {

	if (action.type === GET_COURSES) {
		return action.payload;
	}
	return state;
}
