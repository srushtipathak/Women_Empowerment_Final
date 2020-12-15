import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AdminAuthService } from "../services/adminAuth.service";

@Injectable({
    providedIn: "root"
})
export class AdminAuthGuard implements CanActivate {

    constructor(public adminAuthService: AdminAuthService, public router:Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.adminAuthService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/admin/adminLogin'],{
            queryParams:{
                return : state.url
            }
        });
        return false;
    }

}