import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/login';
import { AdminAuthService } from 'src/app/services/adminAuth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  error: boolean;
  message: string;
  adminLoginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;
  submitted: boolean = false;

  model: ILogin = { email: "admin@gmail.com", password: "12345" };
  returnUrl: string;

  constructor(formBuilder: FormBuilder, private router: Router,
    private adminAuthService: AdminAuthService) {
    this.passwordControl = new FormControl("", Validators.required);
    this.emailControl = new FormControl("", Validators.required);

    this.adminLoginForm = formBuilder.group({
      "email": this.emailControl,
      "password": this.passwordControl
    });

    this.error = false;
    this.returnUrl = '/admin/aboutusAdmin';
    this.adminAuthService.logout();
  }

  ngOnInit(): void {
  }

  get f() { return this.adminLoginForm.controls; }

  onAdminLoginsubmit() {

    if (this.adminLoginForm.invalid) {
      return;
    }
    else {
      if (this.f.email.value == this.model.email && this.f.password.value == this.model.password) {
        console.log("Login successful");
        this.adminAuthService.save(this.f.email.value);
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.message = "Please check your userid and password";
      }
    }
  }
}