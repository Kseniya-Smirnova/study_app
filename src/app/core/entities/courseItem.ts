interface CourseItemInterface {
	makeComplete()
}

class CourseItem implements CourseItemInterface {
	makeComplete() {
		console.log('method to set status done');
	}

	constructor(title: string, lecture: string, startDate: Date, startEnd: Date) {

	}
}
