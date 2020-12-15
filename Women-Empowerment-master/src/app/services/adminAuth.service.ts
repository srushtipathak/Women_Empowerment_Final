import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { NgoAuthService } from "./ngoAuth.service";

@Injectable({
    providedIn: "root"
})
export class AdminAuthService {
    constructor() { }

    public save(adminId) {
        localStorage.setItem("isAdminLoggedIn", "true");
        localStorage.setItem("tokenAdmin", adminId);
        localStorage.setItem("isLoggedIn", "false");
        localStorage.removeItem("token");
        localStorage.setItem("isNgoLoggedIn", "false");
        localStorage.removeItem("tokenNgo");
    }

    public isLoggedIn() {
        if (localStorage.getItem("isAdminLoggedIn") == "true") {
            return true;
        } else {
            return false;
        }
    }

    public logout() {
        localStorage.setItem("isAdminLoggedIn", "false");
        localStorage.removeItem("tokenAdmin");
    }

    public getName(){
        return localStorage.getItem("tokenAdmin");
    }
}