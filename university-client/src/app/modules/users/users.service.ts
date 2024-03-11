import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./models/user.model";

@Injectable({ providedIn: 'root' })
export class UserService {

    login(user: {}): Promise<any> {
        return new Promise((res, rej) => {
            this._http.post(`/University/login`, user)
                .subscribe({
                    next: (data) => {
                        res(data)
                    }
                    , error: (error) => {
                        console.log('in error');
                        rej(error)
                    }
                })
        })
    }

    signin(user: User): Promise<any> {
        console.log('in use service');
        return new Promise((res, rej) => {
            console.log('user', user);
            this._http.post(`/University/signin`, user)
                .subscribe({
                    next: (data) => {
                        localStorage.setItem("user", "user");
                        res(data)
                    }, error: (error) => {
                        console.log('in error');
                        rej(error)
                    }
                })
        })
    }

    constructor(private _http: HttpClient) { }
}