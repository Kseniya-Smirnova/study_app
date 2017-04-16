import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

import {
	NgModule,
	ApplicationRef
} from '@angular/core';
import {
	removeNgStyles,
	createNewHosts,
} from '@angularclass/hmr';
import {
	RouterModule,
	PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { NoContentComponent } from './pages/no-content';
import { ZoneService } from './services/zone.service';
import { AuthorizationService } from './services/authorization.service';
import { LoaderBlockService } from './components/loader-block/loader-block.service';

// Components
import { FooterModule } from './components/footer';
import { HeaderModule } from './components/header';
import { LoaderBlockModule } from './components/loader-block';

// Pages
import { CoursesModule } from './pages/courses';
import { CourseModule } from './pages/course';
import { LoginModule } from './pages/login';
import { CreateCourseModule } from './pages/create-course';
import { PipeModule }    from './core/pipes/pipe.module';

import { HttpService } from './services/http.service';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		NoContentComponent
	],
	imports: [ // import Angular's modules
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules}),
		HeaderModule,
		FooterModule,
		CoursesModule,
		CourseModule,
		LoginModule,
		CreateCourseModule,
		LoaderBlockModule,
		PipeModule
		// is it possible to import pipe globally other more transparent way?
	],
	exports: [PipeModule],
	providers: [ // expose our Services and Providers into Angular's dependency injection
		ENV_PROVIDERS,
		ZoneService,
		AuthorizationService,
		LoaderBlockService,
		HttpService
	]
})
export class AppModule {

	constructor(public appRef: ApplicationRef) {
	}

	public hmrOnInit(store: any) {
		if (!store || !store.state) { return; }
		this.appRef.tick();
		delete store.state;
	}

	public hmrOnDestroy(store: any) {
		const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
		// recreate elements
		store.disposeOldHosts = createNewHosts(cmpLocation);
		// remove styles
		removeNgStyles();
	}

	public hmrAfterDestroy(store: any) {
		// display new elements
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}
}
