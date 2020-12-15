import { Injectable } from '@angular/core';
import { AdminAuthService } from './adminAuth.service';
import { NgoAuthService } from './ngoAuth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public saveUser(userId,userName){
    localStorage.setItem("isLoggedIn","true");
    localStorage.setItem("tokenUserId",userId);
    localStorage.setItem("tokenUserName",userName);
    localStorage.setItem("isAdminLoggedIn", "false");
    localStorage.removeItem("tokenAdmin");
    localStorage.setItem("isNgoLoggedIn", "false");
    localStorage.removeItem("tokenNgo");
  }

  public isLoggedIn(){
    if(localStorage.getItem("isLoggedIn") == "true"){
      return true;
    }else{
      return false;
    }
  }

  public logout() {
    localStorage.setItem("isLoggedIn","false");
    localStorage.removeItem("token");
  }

  public getName(){
    return localStorage.getItem("tokenUserName");
  }

  public getId() {
    return localStorage.getItem("tokenUserId");
  }

  public setRegister() {
    localStorage.setItem("registered","true");
  }
  public getRegister() {
    return localStorage.getItem("registered");
  }
}
