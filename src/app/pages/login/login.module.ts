// angular modules
import { NgModule } from '@angular/core';

// routes
import { routes } from './login.routes';

// custom components
import { LoginComponent } from './login.component';

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		routes
	],
	providers: []
})
export class LoginModule {
	constructor() {
	}
}
