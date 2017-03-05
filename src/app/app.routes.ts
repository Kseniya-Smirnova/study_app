import { Routes } from '@angular/router';
import { NoContentComponent } from './pages/no-content';
import { CoursesComponent } from './pages/courses';
import { CourseComponent } from './pages/course';
import { LoginComponent } from './pages/login';

export const ROUTES: Routes = [
	{path: '', component: CoursesComponent},
	{path: '**', component: NoContentComponent},
	{path: 'courses', component: CoursesComponent},
	{path: 'course', component: CourseComponent},
	{path: 'login', component: LoginComponent}
];
