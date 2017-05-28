import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent }    from './courses.component';
import { AuthorizationGuard }  from '../../services/auth-guard.service';

// Route Configuration
const coursesRoutes: Routes = [
	{ path: 'courses', component: CoursesComponent, canActivate: [AuthorizationGuard] },
];

export const routes = RouterModule.forChild(coursesRoutes);
