
import { Component } from '@angular/core';
import { UserService } from '../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../models/login.model';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {

  user: LoginModel = new LoginModel;

  nameValid: boolean;
  nameValidValue: string;

  userForm: FormGroup = new FormGroup({
    "name": new FormControl(this.user.name, [Validators.required]),
    "password": new FormControl(this.user.password, [Validators.required])
  })

  login() {
    // this._userService.login(this.userForm.value).then(() => {
    //   // this._router.navigate(['/']);
    // }).catch((error) => {
    //   console.log('error', error);
    //   if (error.error.error === 'user') {
    //     console.log('user name is invalid');//swel
    //     this.nameValidValue= this.userForm.controls['userName'].value;
    //     this.nameValid = true;
    //     console.log(this.nameValid);
    //     console.log(this.nameValidValue);
    //   } else {
    //     console.log('password in not valid');//swel
    //     // this.passwordInvalidValue = this.userForm.controls['password'].value;
    //     // this.passwordInvalid = true;
    //   }
    // })
  }

  constructor(private _userService: UserService) { }
}

