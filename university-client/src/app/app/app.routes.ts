import { Routes } from '@angular/router';
import { UsersModule } from '../modules/users/users.module';
import { RegisterComponent } from '../modules/users/register/register.component';

export const appRoutes: Routes = [
    { path: "user", loadChildren: () => import('../modules/users/users.module').then(m => m.UsersModule) },
    // { path: "user", component: UsersModule },
    // { path: "course", component: CoursesModule },
    { path: "course", loadChildren: () => import('../modules/courses/courses.module').then(c => c.CoursesModule) },
    // { path: "", component: HomePageComponent },
    { path: "**", component: RegisterComponent },
];
