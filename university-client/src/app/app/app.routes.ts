import { Routes } from '@angular/router';
import { RegisterComponent } from '../modules/users/register/register.component';
import { HomePageComponent } from '../home-page/home-page.component';

export const appRoutes: Routes = [
    { path: "course", loadChildren: () => import('../modules/courses/courses.module').then(c => c.CoursesModule) },
    { path: "user", loadChildren: () => import('../modules/users/users.module').then(m => m.UsersModule) },
    { path: "", component: HomePageComponent },
    { path: "**", component: RegisterComponent },
];
