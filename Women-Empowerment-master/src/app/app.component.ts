import { Component } from '@angular/core';
import { AdminAuthService } from './services/adminAuth.service';
import { AuthService } from './services/auth.service';
import { NgoAuthService } from './services/ngoAuth.service';
import { UserNgoService } from './services/userNgo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName:string = "";
  loggedIn: boolean = false;
  registeredNGO: boolean = false;
  registeredUser: boolean = false;

  constructor(public ngoAuthService:NgoAuthService,public adminAuthService: AdminAuthService,public authService: AuthService,
    private userNgoService:UserNgoService){
    if(authService.isLoggedIn()){
      this.loggedIn = true;
      this.userName = authService.getName();
      userNgoService.getUserNgo(authService.getId()).subscribe(
        response => {
          if(response!=null){
            this.registeredUser = true;
          }
        }
      )
    }else if(ngoAuthService.isLoggedIn()){
      this.loggedIn = true;
      this.userName = ngoAuthService.getName();
      this.registeredNGO = true;
    }else if(adminAuthService.isLoggedIn()){
      this.loggedIn = true;
      this.userName = adminAuthService.getName();
    }
  }

  public choice: string = "Home"; 
  public title: string = 'Ministry of Women & Child Development';

  public change(value) {
    this.choice = value;
    this.changeTitle();
  }

  changeTitle() {
    if(this.choice == "Home"){
      this.title = 'Ministry of Women & Child Development';
    }else if(this.choice == "STEP"){
      this.title = "Support to Training & Employment Programme for Women";
    } else if(this.choice=="NGO"){
      this.title = "Non Governmental Organizations";
    } else {
      this.title = "Admin";
    }
  }

  logout(){
    this.loggedIn = false;
    if(this.authService.isLoggedIn()){
      this.authService.logout();
    }else if(this.ngoAuthService.isLoggedIn()){
      this.ngoAuthService.logout();
    }else if(this.adminAuthService.isLoggedIn()){
      this.adminAuthService.logout();
    }
  }
}
