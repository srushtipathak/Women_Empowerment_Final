import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/login';
import { LoginInfo } from 'src/app/models/loginInfo.model';
import { AuthService } from 'src/app/services/auth.service';
import { NgoAuthService } from 'src/app/services/ngoAuth.service';
import { NGOService } from 'src/app/services/ngoService.service';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {

  error: boolean;
  message: string;
  emailtest: string;
  passwordtest: string;
  loginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;
  submitted: boolean = false;
  logininfo: LoginInfo = null;
  model: ILogin = { email: "nikita@gmail.com", password: "12345" };
  returnUrl: string;
  constructor(formBuilder: FormBuilder, private router: Router,
    private ngoAuthService: NgoAuthService, private ngoservice: NGOService) {

    this.passwordControl = new FormControl("", Validators.required);
    this.emailControl = new FormControl("", Validators.required);

    this.loginForm = formBuilder.group({
      // each form control needs to be provided an id
      "email": this.emailControl,
      "password": this.passwordControl
    });

    this.error = false;
    this.returnUrl = '/ngo/statusNGO';
    this.ngoAuthService.logout();
  }

  ngOnInit(): void {

  }

  get f() { return this.loginForm.controls; }

  handleSuccessfullResponse(response) {
    console.log(response)
    //this.ngoTest=JSON.parse(response);
    //this.emailtest = response.ngoEmailId;
    //this.passwordtest = response.ngoPassword;
    //if (this.f.email.value == this.emailtest && this.f.password.value == this.passwordtest) 
    if (response != null) {
      let id: string = response.ngoId + "";
      console.log("Login successful");
      //this.authService.authLogin(this.model);  
      // localStorage.setItem('isLoggedIn', "true");
      // localStorage.setItem('token', id);
      this.ngoAuthService.save(id,response.ngoName);
      this.router.navigate([this.returnUrl]);
    }
    else {
      this.message = "Please check your email id and password";
    }
  }

  onLoginsubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.ngoservice.ngoLogin(this.f.email.value, this.f.password.value).subscribe(
        response => this.handleSuccessfullResponse(response),
      );
      console.log(this.emailtest);
      console.log(this.passwordtest);
    }
  }
}
