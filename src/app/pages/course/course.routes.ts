import { Routes, RouterModule } from '@angular/router';
import { CourseComponent }    from './course.component';

// Route Configuration
const courseRoutes: Routes = [
	{ path: 'course', component: CourseComponent },
];

export const routes = RouterModule.forChild(courseRoutes);
