import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderBlockService } from './loader-block.service';
import { LoaderBlockComponent } from './loader-block.component';

@NgModule({
	declarations: [LoaderBlockComponent],
	imports: [CommonModule],
	exports: [LoaderBlockComponent],
	providers: [
		LoaderBlockService
	]
})
export class LoaderBlockModule {
	constructor() {
	}
}
