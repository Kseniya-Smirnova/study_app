import { Routes } from '@angular/router';
import { NoContentComponent } from './pages/no-content';
import { CoursesComponent } from './pages/courses';
import { CourseComponent } from './pages/course';
import { LoginComponent } from './pages/login';
import { CreateCourseComponent } from './pages/create-course';
import { AuthorizationGuard }  from './services/auth-guard.service';

export const ROUTES: Routes = [
	{path: '', redirectTo: '/courses', pathMatch: 'full'},
	{path: '**', component: NoContentComponent},
	{path: 'courses', children: [
		{path: 'courses/new', component: CreateCourseComponent, canActivate: [AuthorizationGuard]},
		{path: 'courses/:id', component: CreateCourseComponent, canActivate: [AuthorizationGuard]}
	]},
	// {path: 'courses', component: CoursesComponent, canActivate: [AuthorizationGuard]},
	// {path: 'courses/new', component: CreateCourseComponent, canActivate: [AuthorizationGuard]},
	// {path: 'courses/:id', component: CreateCourseComponent, canActivate: [AuthorizationGuard]},
	{path: 'course', component: CourseComponent},
	{path: 'login', component: LoginComponent}
];
