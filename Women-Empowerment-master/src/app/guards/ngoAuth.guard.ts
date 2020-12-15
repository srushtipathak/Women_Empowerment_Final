import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgoAuthService } from '../services/ngoAuth.service';

@Injectable({
  providedIn: 'root'
})
export class NgoAuthGuard implements CanActivate {

  constructor(private ngoAuthService: NgoAuthService,private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.ngoAuthService.isLoggedIn()){
      return true;
    }
    this.router.navigate(['/ngo/loginNgo'],{
      queryParams:{
        return:state.url
      }
    });
    return false;
  }
}