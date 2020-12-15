import { DatePipe } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { zip } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { Name } from 'src/app/models/name.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/userRegistration.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  navigateUrl:string="";

  userForm: FormGroup;

  firstNameControl: FormControl;
  middleNameControl: FormControl;
  lastNameControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;
  contactControl: FormControl;
  DOBControl: FormControl;
  address1Control: FormControl;
  address2Control: FormControl;
  cityControl: FormControl;
  stateControl: FormControl;
  zipControl: FormControl;
  countryControl: FormControl;

  constructor(formBuilder: FormBuilder,public datePipe:DatePipe, public userService: UserService,public router: Router,
    public route: ActivatedRoute) {
    this.firstNameControl = new FormControl("",Validators.compose([Validators.required]));
    this.middleNameControl = new FormControl("",Validators.compose([Validators.required]));
    this.lastNameControl = new FormControl("",Validators.compose([Validators.required]));
    this.emailControl = new FormControl("",Validators.compose([Validators.required]));
    this.passwordControl = new FormControl("",Validators.compose([Validators.required]));
    this.contactControl = new FormControl("",Validators.compose([Validators.required]));
    this.DOBControl = new FormControl("",Validators.compose([Validators.required]));
    this.address1Control = new FormControl("",Validators.compose([Validators.required]));
    this.address2Control = new FormControl("",Validators.compose([Validators.required]));
    this.cityControl = new FormControl("",Validators.compose([Validators.required]));
    this.stateControl = new FormControl("",Validators.compose([Validators.required]));
    this.zipControl = new FormControl("",Validators.compose([Validators.required]));
    this.countryControl = new FormControl("",Validators.compose([Validators.required]));

    this.userForm = formBuilder.group({
      "firstNameControl": this.firstNameControl,
      "middleNameControl": this.middleNameControl,
      "lastNameControl": this.lastNameControl,
      "emailControl": this.emailControl,
      "passwordControl":this.passwordControl,
      "contactControl":this.contactControl,
      "DOBControl":this.DOBControl,
      "address1Control":this.address1Control,
      "address2Control":this.address2Control,
      "cityControl":this.cityControl,
      "stateControl":this.stateControl,
      "zipControl":this.zipControl,
      "countryControl":this.countryControl
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=> this.navigateUrl = params['return']);
  }

  userRegister() {

    let username: Name = new Name(
      this.firstNameControl.value,
      this.middleNameControl.value,
      this.lastNameControl.value
    );

    let address: Address = new Address(
      this.address1Control.value,
      this.address2Control.value,
      this.cityControl.value,
      this.stateControl.value,
      parseInt(this.zipControl.value),
      this.countryControl.value
    );
    let user = new User (null,
      username,
      this.emailControl.value,
      this.passwordControl.value,
      this.contactControl.value,
      this.DOBControl.value,
      address,
      null,
      null
    );

    this.userService.userRegister(user).subscribe(
      response => {
        console.log("Registration Successfull");
        this.router.navigate(['/login'],{
          queryParams:{
            return:this.navigateUrl
          }
        });
      }
    );
  }

}
