/**
 * will be deleted in futire
 */

import { CourseInstance } from '../core/entities/courseInstance';

export const Courses: CourseInstance[] = [
	{
		id: 1,
		title: 'angular 1.5',
		date: new Date(2014, 0, 1),
		duration: 60,
		description: 'Here goes a lot of description',
		lecture: 'the best lecture'
	},
	{
		id: 2,
		title: 'angular 2.0',
		date: new Date(2017, 0, 1),
		duration: 60,
		description: 'Here goes again description',
		lecture: 'the best lecture'
	},
	{
		id: 3,
		title: 'angular 10.0',
		date: new Date(2020, 0, 1),
		duration: 60,
		description: 'And here description',
		lecture: 'the best lecture'
	}
];
