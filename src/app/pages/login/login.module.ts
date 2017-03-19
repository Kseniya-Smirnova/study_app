// angular modules
import { NgModule } from '@angular/core';
import { WindowRefService } from '../../services/window.service';
import { FormsModule } from '@angular/forms';

// routes
import { routes } from './login.routes';

// custom components
import { LoginComponent } from './login.component';

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		routes,
		FormsModule
	],
	providers: [WindowRefService]
})
export class LoginModule {
	constructor() {
	}
}
