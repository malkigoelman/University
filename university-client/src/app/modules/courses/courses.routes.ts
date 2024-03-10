import { Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';

export const courseRoutes: Routes = [
    { path: "CourseDetails", component: CourseDetailsComponent },
    // { path: "**", component: PageNotFoundComponent },
];
