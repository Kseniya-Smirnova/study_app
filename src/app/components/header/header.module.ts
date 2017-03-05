import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@NgModule({
	declarations: [HeaderComponent, BreadcrumbsComponent],
	imports: [RouterModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
	constructor() {
	}
}
