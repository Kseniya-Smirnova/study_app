import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@NgModule({
	declarations: [HeaderComponent, BreadcrumbsComponent],
	imports: [RouterModule, CommonModule],
	exports: [HeaderComponent, BrowserModule]
})
export class HeaderModule {
	constructor() {
	}
}
