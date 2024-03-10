import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./models/user.model";

@Injectable({providedIn:'root'})
export class UserService {
    
    // private readonly _serviceName='University';

    login(user: {}): Promise<any> {
        return new Promise((res, rej) => {
            this._http.post(`University/login`, user)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    signin(user: User): Promise<any> {
        return this._http.post('University/signin', user).toPromise();
        // return new Promise((res, rej) => {
        //     this._http.post(`University/signin`, user)
        //         .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        // })
        console.log("נשלח")
    }

    constructor(private _http: HttpClient) { }
}