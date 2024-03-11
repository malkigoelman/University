import { Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';

export const courseRoutes: Routes = [
    { path: "all", component: AllCoursesComponent },
    { path: "CourseDetails", component: CourseDetailsComponent },
    // { path: "**", component: PageNotFoundComponent },
];
