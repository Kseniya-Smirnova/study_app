import { Routes, RouterModule } from '@angular/router';
import { CreateCourseComponent }    from './create-course.component';
import { AuthorizationGuard }  from '../../services/auth-guard.service';
// Route Configuration //зачем этот роутер - но без него не работает
const coursesRoutes: Routes = [
	{ path: 'courses/new', component: CreateCourseComponent, canActivate: [AuthorizationGuard] },
	{ path: 'courses/:id', component: CreateCourseComponent, canActivate: [AuthorizationGuard] }
];

export const routes = RouterModule.forChild(coursesRoutes);
