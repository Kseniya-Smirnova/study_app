interface CourseItemInterface {

}

export class CourseInstance implements CourseItemInterface {
	constructor(
		public id: number,
		public title: string,
		public date: Date,
		public duration: number,
		public description: string,
		public lecture: string,
		public createdDate: Date) {
	}
}
