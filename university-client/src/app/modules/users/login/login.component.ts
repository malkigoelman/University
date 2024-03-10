
import { Component } from '@angular/core';
import { UserService } from '../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
  user: LoginModel = new LoginModel;

  userForm: FormGroup = new FormGroup({
    "name": new FormControl(this.user.name, [Validators.required]),
    "password": new FormControl(this.user.password, [Validators.required])
  })

  login()
  {
    console.log("begin login")
    const userExists = this._userService.login({ name: this.user.name, password: this.user.password })
  }

  constructor(private _userService: UserService) { }
}

