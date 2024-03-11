import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routes";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(userRoutes), HttpClientModule],
    declarations: [LoginComponent],
    providers: [UsersModule],
    exports: [LoginComponent, RouterModule]
})
export class UsersModule {

}