import { NgModule }      from '@angular/core';
import { DurationLengthPipe }  from './duration-length/duration-length.pipe';

@NgModule({
	imports:        [],
	declarations:   [DurationLengthPipe],
	exports:        [DurationLengthPipe],
})

export class PipeModule {

	private forRoot() {
		return {
			ngModule: PipeModule,
			providers: [],
		};
	}
}
