import { Injectable } from "@angular/core";
import { AdminAuthService } from "./adminAuth.service";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:"root"
})
export class NgoAuthService {
    constructor() { }

    public save(ngoId,ngoName){
        localStorage.setItem("isNgoLoggedIn","true");
        localStorage.setItem("tokenNgo",ngoId);
        localStorage.setItem("tokenNgoName",ngoName);
        localStorage.setItem("isAdminLoggedIn", "false");
        localStorage.removeItem("tokenAdmin");
        localStorage.setItem("isLoggedIn", "false");
        localStorage.removeItem("token");
    }

    public isLoggedIn(){
        if(localStorage.getItem("isNgoLoggedIn") == "true"){
        return true;
        }else{
        return false;
        }
    }

    public logout() {
        localStorage.setItem("isNgoLoggedIn","false");
        localStorage.removeItem("tokenNgo");
    }

    public getName(){
        return localStorage.getItem("tokenNgoName");
    }

    public getId() {
        return localStorage.getItem("tokenNgo");
    }
}