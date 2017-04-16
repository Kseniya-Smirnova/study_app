import {
	Component,
	ChangeDetectionStrategy,
	OnInit,
	OnDestroy,
	Output,
	Input,
	EventEmitter
} from '@angular/core';
import { LoaderBlockService } from './loader-block.service';
import { CoursesService } from '../../services/courses.service';

@Component({
	selector: 'pagination',
	templateUrl: 'pagination.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [require('./pagination.component.scss')]
})
export class PaginationComponent implements OnInit, OnDestroy {
	private pages: Object[];
	@Output() private selectPageNumber: EventEmitter<string>;
	@Input() private countForPage: string;
	@Input() private defaultPageNumber: string;
	constructor(private courseServices: CoursesService) {
		// fake array, I didnt spend time on it, because the task is too big and crazy :(
		this.pages = [{text: 1}, {text: 2}, {text: 3}, {text: 4}, {text: 5}];
		this.selectPageNumber = new EventEmitter();
	}

	public selectPage(value: string): void {
		this.selectPageNumber.emit(value);
	}

	public ngOnInit() {

	}

	public ngOnDestroy() {

	}
}
