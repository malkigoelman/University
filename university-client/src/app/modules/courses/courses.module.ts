import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { courseRoutes } from "./courses.routes";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CourseDetailsComponent } from "./course-details/course-details.component";

@NgModule({
    declarations: [CourseDetailsComponent],
    providers: [CoursesModule],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(courseRoutes), HttpClientModule],
    exports: [CourseDetailsComponent, RouterModule]
})
export class CoursesModule {

}

// @NgModule({
//     imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(userRoutes),HttpClientModule],
//     declarations: [LoginComponent],
//     providers: [UsersModule],
//     exports: [LoginComponent, RouterModule]
// })
// export class UsersModule {

// }