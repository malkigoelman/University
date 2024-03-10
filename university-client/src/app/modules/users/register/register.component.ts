import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../users.service';
import { error } from 'console';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UserService]
})
export class RegisterComponent {
  user :User=new User;
  userForm: FormGroup;


  register(){
    console.log("begin register")
    if(this.userForm.valid){
      this._userService.signin(this.user).then(response => {
        console.log('Server response:', response);
      }).catch(error => {
        console.error('Error:', error);
      });
    }
  }

  constructor(private _userService :UserService) {
    this.userForm=new FormGroup({
      "name": new FormControl(this.user.name, [Validators.required]),
      "address": new FormControl(this.user.address, [Validators.required]),
      "password": new FormControl(this.user.password, [Validators.required]),
      "email": new FormControl(this.user.email, [Validators.required])
    });
   }
}
