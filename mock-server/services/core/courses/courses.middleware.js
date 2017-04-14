const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true),
			query = url_parts.query,
			from = query.start,
			to = +query.start + +query.count,
			sort = query.sort,
			queryStr = query.query,
			courses = server.db.getState().courses,
			new_courses = [];

		if(!query.name || query.name === '') {
			new_courses = courses;
		} else {
			courses.find((course) => {
				// var test = course.name.toUpperCase().indexOf(query.name.toUpperCase());
				if(course.name.toUpperCase().indexOf(query.name.toUpperCase()) >= 0) {
				new_courses.push(course);
				}
			});
		}

		if (new_courses.length < to) {
			to = new_courses.length;
		}
		console.log(new_courses);
		new_courses = new_courses.slice(from, to);

		res.json(new_courses);
	});

	return router;
};
