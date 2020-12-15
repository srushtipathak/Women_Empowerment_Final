import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn:"root"
})
export class UserService {

    constructor(private http: HttpClient) {}

    registerApi = "http://localhost:4321/step/userRegister";
    loginApi = "http://localhost:4321/step/userLogin";
    updateApi = "http://localhost:4321/step/userUpdate";
    getApi = "http://localhost:4321/step/getUser/";

    public userRegister(user) : Observable<User> {
        return this.http.post<User>(this.registerApi,user);
    }

    public userLogin(user): Observable<any> {
        return this.http.post<User>(this.loginApi,user);
    }

    public userUpdate(user) : Observable<User> {
        return this.http.post<User>(this.updateApi,user);
    }

    public getUser(userId) : Observable<User> {
        return this.http.get<User>(this.getApi+userId);
    }
}