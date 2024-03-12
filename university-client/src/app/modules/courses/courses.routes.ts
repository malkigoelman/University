import { Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

export const courseRoutes: Routes = [
    { path: "all", component: AllCoursesComponent },
    { path: "CourseDetails", component: CourseDetailsComponent },
    { path: "edit/:id", component: EditCourseComponent },
    // { path: "CourseDetails", component: CourseDetailsComponent },
    // { path: "**", component: PageNotFoundComponent },
];
