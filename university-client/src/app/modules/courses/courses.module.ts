import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { courseRoutes } from "./courses.routes";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { HeaderInterceptor } from "./header.interceptor";

@NgModule({
    declarations: [CourseDetailsComponent, AllCoursesComponent/*, EditCourseComponent, AddCourseComponent*/],
    providers: [CoursesModule,{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(courseRoutes), HttpClientModule],
exports: [CourseDetailsComponent, AllCoursesComponent, RouterModule/*, EditCourseComponent, AddCourseComponent*/]
})
export class CoursesModule {

}
