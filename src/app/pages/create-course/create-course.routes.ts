import { Routes, RouterModule } from '@angular/router';
import { CreateCourseComponent }    from './create-course.component';

// Route Configuration
const coursesRoutes: Routes = [
	{ path: 'create-course', component: CreateCourseComponent },
];

export const routes = RouterModule.forChild(coursesRoutes);
