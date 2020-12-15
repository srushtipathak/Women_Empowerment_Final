import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/userRegistration.service';

@Component({
  selector: 'app-registration-step',
  templateUrl: './registration-step.component.html',
  styleUrls: ['./registration-step.component.css']
})
export class RegistrationStepComponent implements OnInit {

  public sectorNames: string[] = ['Agriculture', 'Animal Husbandary', 'Dairying', 'Fisheries', 'Handlooms', 'Handicrafts'];

  StepForm: FormGroup;

  fatherNameControl: FormControl;
  fatherContactControl: FormControl;
  fatherDOBControl: FormControl;
  fatherOccupationControl: FormControl;
  fatherSalaryControl: FormControl;

  motherNameControl: FormControl;
  motherContactControl: FormControl;
  motherDOBControl: FormControl;
  motherOccupationControl: FormControl;
  motherSalaryControl: FormControl;

  aadharControl: FormControl;
  sectorNameControl: FormControl;

  constructor(public formBuilder: FormBuilder, public authService: AuthService,
              public userService: UserService, public router: Router) {
    this.fatherNameControl = new FormControl("", Validators.compose([Validators.required]));
    this.fatherContactControl = new FormControl("", Validators.compose([Validators.required]));
    this.fatherDOBControl = new FormControl("", Validators.compose([Validators.required]));
    this.fatherOccupationControl = new FormControl("", Validators.compose([Validators.required]));
    this.fatherSalaryControl = new FormControl("", Validators.compose([Validators.required]));
    this.motherNameControl = new FormControl("", Validators.compose([Validators.required]));
    this.motherContactControl = new FormControl("", Validators.compose([Validators.required]));
    this.motherDOBControl = new FormControl("", Validators.compose([Validators.required]));
    this.motherOccupationControl = new FormControl("", Validators.compose([Validators.required]));
    this.motherSalaryControl = new FormControl("", Validators.compose([Validators.required]));
    this.aadharControl = new FormControl("", Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(12)]));
    this.sectorNameControl = new FormControl("", Validators.compose([Validators.required]));

    this.StepForm = formBuilder.group({
      "fNameControl": this.fatherNameControl,
      "fContactControl": this.fatherContactControl,
      "fDOBControl": this.fatherDOBControl,
      "fOccupControl": this.fatherOccupationControl,
      "fSalControl": this.fatherSalaryControl,
      "MNameControl": this.motherNameControl,
      "MContactControl": this.motherContactControl,
      "MDOBControl": this.motherDOBControl,
      "MOccupControl": this.motherOccupationControl,
      "MSalControl": this.motherSalaryControl,
      "aadharControl": this.aadharControl,
      "sectorNameControl": this.sectorNameControl
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.StepForm.controls; }

  changeSectorName(event) {
    this.sectorNameControl.setValue(event.target.value, {
      onlySelf: true
    })
  }
  updateUser() {
    let user = new User(parseInt(this.authService.getId()), null, null, null, null, null, null,
      {
        "fatherName": this.fatherNameControl.value,
        "fatherPhoneNumber": this.fatherContactControl.value,
        "fatherDOB": this.fatherDOBControl.value,
        "fatherOccupation": this.fatherOccupationControl.value,
        "fatherSalary": this.fatherSalaryControl.value,
        "motherName": this.motherNameControl.value,
        "motherPhoneNumber": this.motherContactControl.value,
        "motherDOB": this.motherDOBControl.value,
        "motherOccupation": this.motherOccupationControl.value,
        "motherSalary": this.motherSalaryControl.value
      }, this.aadharControl.value);
    
    this.userService.userUpdate(user).subscribe(
      response=>{
        console.log("Registration Successfull"+response.userId+response.userEmailId);
      }
    );
    this.router.navigate(['/step/ngoChoice'],{
      queryParams: {
        sectorName: this.sectorNameControl.value
      }
    })
  }
}
