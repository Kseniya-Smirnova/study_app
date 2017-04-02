/**
 * will be deleted in futire
 */

import { CourseInstance } from '../core/entities/courseInstance';

export const Courses: CourseInstance[] = [
	{
		id: 1,
		title: 'angular 1.5',
		topRated: false,
		date: new Date(2017, 4, 4),
		duration: 60,
		description: 'Here goes a lot of description',
		lecture: 'the best lecture',
		createdDate: new Date(2016, 11, 11)
	},
	{
		id: 2,
		title: 'angular 2.0',
		topRated: false,
		date: new Date(2017, 2, 30),
		duration: 90,
		description: 'Here goes again description',
		lecture: 'the best lecture',
		createdDate: new Date(2014, 11, 11)
	},
	{
		id: 3,
		title: 'angular 10.0',
		topRated: true,
		date: new Date(2016, 0, 1),
		duration: 320,
		description: 'And here description',
		lecture: 'the best lecture',
		createdDate: new Date(2015, 11, 11)
	}
];
