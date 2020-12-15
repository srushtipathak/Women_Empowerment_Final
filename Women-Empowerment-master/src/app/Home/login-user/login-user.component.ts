import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/userRegistration.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent implements OnInit {

  error: boolean = false;

  navigateUrl: string = "";

  public loggedUser: User = null;
  loginForm: FormGroup;
  emailControl: FormControl;
  passwordControl: FormControl;

  constructor(public formBuilder: FormBuilder,
    public userService: UserService,
    public authService: AuthService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.emailControl = new FormControl("", Validators.compose([Validators.required]));
    this.passwordControl = new FormControl("", Validators.compose([Validators.required]));

    this.loginForm = formBuilder.group({
      "userEmail": this.emailControl,
      "userPassword": this.passwordControl
    })
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.navigateUrl = params['return']);
  }

  public userLogin() {
    let userEmailId: string = this.emailControl.value;
    let userPassword: string = this.passwordControl.value;
    let user = new User(null, null, userEmailId, userPassword, null, null, null, null, null);
    this.userService.userLogin(user).subscribe({
      next: response => {
          console.log("Login Successfull");
          console.log(response);
          this.loggedUser = response;
          this.authService.saveUser(this.loggedUser.userId, this.loggedUser.userName.firstName);
          this.router.navigateByUrl(this.navigateUrl);
      },
      error: error => {
        this.error = error.message;
      }
    });
  }

  public register() {
    this.router.navigate(['/registration'], {
      queryParams: {
        return: this.navigateUrl
      }
    })
  }
}
