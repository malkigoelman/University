import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./models/user.model";

@Injectable({ providedIn: 'root' })

export class UserService {

    private readonly _serviceName = "/university/";

    private setSessionStorage(data: string, name: string) {
        sessionStorage.setItem('userToken', 'Bearer ' + data)
        sessionStorage.setItem('userName', name)
    }

    login(user: { userName: "" }): Promise<any> {
        return new Promise((res, rej) => {
            this._http.post(this._serviceName + `login`, user)
                .subscribe({
                    next: (data: any) => {
                        this.setSessionStorage(data.token, user.userName)
                        res(data)
                    }, error: (error) => {
                        // alert("הסיסמה אינה חוקית")
                        //TODO alert here error of service
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

    signout(): void {
        sessionStorage.removeItem('userToken')
        sessionStorage.removeItem('userName')
    }

    constructor(private _http: HttpClient) { }
}