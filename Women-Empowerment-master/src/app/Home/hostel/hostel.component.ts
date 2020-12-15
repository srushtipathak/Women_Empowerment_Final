import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccomodationUser } from 'src/app/models/accomodationUser.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { AccomodationService } from 'src/app/services/hostelservice.service';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.css']
})
export class HostelComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  hostelNameControl: FormControl;
  quotaControl: FormControl;
  jobTypeControl: FormControl;
  childControl: FormControl;
  childGenderControl: FormControl;
  childAgeControl: FormControl;
  grossAmountControl: FormControl;
  cityControl: FormControl;

  constructor(private formBuilder: FormBuilder, private accoService: AccomodationService,
    private router: Router, private authService: AuthService) {
    this.hostelNameControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)]));
    this.quotaControl = new FormControl("", Validators.required);
    this.jobTypeControl = new FormControl("", Validators.required);
    this.childControl = new FormControl("");
    this.childGenderControl = new FormControl("");
    this.childAgeControl = new FormControl("");
    this.grossAmountControl = new FormControl("", Validators.required);
    this.cityControl = new FormControl("");

    this.registerForm = this.formBuilder.group({
      "quota": this.quotaControl,
      "jobType": this.jobTypeControl,
      "hostel": this.hostelNameControl,
      "child": this.childControl,
      "childGender": [null],
      "childAge": [null],
      "city": this.cityControl,
      "grossAmount": this.grossAmountControl
    });
  }

  ngOnInit(): void {
    this.formControlValueChanged();
    this.accoService.getAccomodationByUserId(this.authService.getId()).subscribe({
      next: data => {
        this.router.navigate(['/hostelDetails'], {
          queryParams: {
            userHostelId: data.userHostelId
          }
        });
      },
      error: err => {

      }
    }
    );
  }

  changeHostelName(e) {
    this.hostelNameControl.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get f() { return this.registerForm.controls; }

  formControlValueChanged() {
    const cityControl = this.registerForm.get('grossAmount');
    this.registerForm.get('city').valueChanges.subscribe(
      (mode: string) => {
        console.log(mode);
        if (mode === 'cityYes') {
          cityControl.setValidators([Validators.max(50000)]);
        }
        else if (mode === 'cityNo') {
          cityControl.setValidators([Validators.max(35000)]);
        }
        cityControl.updateValueAndValidity();
      });

    const childGenderControl = this.registerForm.get('childGender');
    const childAgeControl = this.registerForm.get('childAge');
    this.registerForm.get('child').valueChanges.subscribe(
      (mode: string) => {
        console.log(mode);
        if (mode === 'childYes') {
          childGenderControl.setValidators([Validators.required]);
        }
        else if (mode === 'childNo') {
          childGenderControl.clearValidators();
        }
        childGenderControl.updateValueAndValidity();
      });

    this.registerForm.get('childGender').valueChanges.subscribe(
      (mode: string) => {
        console.log(mode);
        if (mode === 'Daughter') {
          childAgeControl.setValidators([Validators.max(18)]);
        }
        else if (mode === 'Son') {
          childAgeControl.setValidators([Validators.max(5)]);
        }
        childAgeControl.updateValueAndValidity();
      });
  }

  message: string;
  accoDetails: any;
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      let user = new User(parseInt(this.authService.getId()), null, null, null, null, null, null, null, null);
      // let id : number = parseInt (this.f.sectorname.value);
      let accoUser = new AccomodationUser(
        {
          "hostelId": parseInt(this.hostelNameControl.value)
        },
        user,
        this.quotaControl.value,
        this.jobTypeControl.value
      );
      console.log(accoUser);
      this.accoService.addAcco(accoUser).subscribe(
        data => {
          this.accoDetails = data
          console.log(this.accoDetails);
          this.registerForm.reset();
          this.router.navigate(['/hostelDetails'], {
            queryParams: {
              userHostelId: this.accoDetails.userHostelId
            }
          });
        });

      // this.router.navigate(['/schemeDetails'],{
      //   queryParams: {
      //     userHostelId: this.accoDetails.userHostelId
      //   }
      // });

      //alert('SUCCESSFULLY Registered!! \n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
  }


  private selectedLink: string = "childYes";
  setradio(e: string): void {
    this.selectedLink = e;
  }

  isSelected(name: string): boolean {
    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }
    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }

  private selectedCity: string = "cityYes";
  setcity(e: string): void {
    this.selectedCity = e;
  }

  isSelectedCity(name: string): boolean {
    if (!this.selectedCity) {
      return false;
    }
    return (this.selectedCity === name);
  }

}
