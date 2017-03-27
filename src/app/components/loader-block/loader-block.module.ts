import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderBlockComponent } from './loader-block.component';

@NgModule({
	declarations: [LoaderBlockComponent],
	imports: [CommonModule],
	exports: [LoaderBlockComponent]
})
export class LoaderBlockModule {
	constructor() {
	}
}
