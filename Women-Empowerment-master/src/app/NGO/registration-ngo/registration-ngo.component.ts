import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { Ngo } from 'src/app/models/ngo.model';
import { TrainingSector } from 'src/app/models/trainingSector.model';
import { NGOService } from 'src/app/services/ngoService.service';

@Component({
  selector: 'app-registration-ngo',
  templateUrl: './registration-ngo.component.html',
  styleUrls: ['./registration-ngo.component.css']
})
export class RegistrationNGOComponent {
  
  error: boolean;
  registrationForm: FormGroup;
  nameControl: FormControl;
  address1Control: FormControl;
  address2Control: FormControl;
  descriptionControl: FormControl;
  cityControl: FormControl;
  stateControl: FormControl;
  zipcodeControl: FormControl;
  countryControl: FormControl;
  emailControl: FormControl;
  passwordControl: FormControl;
  contactControl: FormControl;
  sectornameControl: FormControl;
  sectorDescriptionControl: FormControl;
  startDateControl: FormControl;
  endDateControl: FormControl;
  seatsControl: FormControl;
  message: string;
  submitted: boolean = false;

  public ngos: Ngo[] = [];
  // ask for dependency: Angular will inject it...
  constructor(private ngoservice: NGOService, private router: Router, formBuilder: FormBuilder) {
    // create the control
    // this.nameControl = new FormControl("",Validators.required);
    //this.formDetails = new FormArray([]);
    this.nameControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)]));
    this.zipcodeControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)]));
    this.contactControl =
      new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)]));

    this.passwordControl =
      new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)]));

    this.descriptionControl =
      new FormControl("", Validators.compose([Validators.required, Validators.minLength(10)]));

    this.address1Control = new FormControl("", Validators.required);
    this.address2Control = new FormControl("", Validators.required);
    this.cityControl = new FormControl("", Validators.required);
    this.stateControl = new FormControl("", Validators.required);
    this.countryControl = new FormControl("", Validators.required);
    this.emailControl = new FormControl("", Validators.required);

    this.sectornameControl = new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)]));
    this.sectorDescriptionControl = new FormControl("", Validators.required);
    this.startDateControl = new FormControl("", Validators.required);
    this.endDateControl = new FormControl("", Validators.required);
    this.seatsControl = new FormControl("", Validators.required);


    // build the form
    this.registrationForm = formBuilder.group({
      // each form control needs to be provided an id
      "name": this.nameControl,
      "description": this.descriptionControl,
      "address1": this.address1Control,
      "address2": this.address2Control,
      "city": this.cityControl,
      "state": this.stateControl,
      "country": this.countryControl,
      "zipcode": this.zipcodeControl,
      "email": this.emailControl,
      "password": this.passwordControl,
      "contact": this.contactControl,
      "sectorname": this.sectornameControl,
      "sectorDescription": this.sectorDescriptionControl,
      "startDate": this.startDateControl,
      "endDate": this.endDateControl,
      "seats": this.seatsControl
    });

    this.error = false;


  }



  changeSectorName(e) {
    this.sectornameControl.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get f() { return this.registrationForm.controls; }

  onRegsubmit() {
    this.error = false;
    // check for validity
    if (!this.registrationForm.valid) {
      // show an error message
      this.error = true;
      return;
    }
    this.submitted = true;
    console.log(this.submitted);
    let testvalue: string = this.f.name.value;
    let addr: Address = new Address(this.f.address1.value, this.f.address2.value, this.f.city.value, this.f.state.value, parseInt(this.f.zipcode.value), this.f.country.value);
    let id: number = parseInt(this.f.sectorname.value);
    let sector: TrainingSector = new TrainingSector(id);
    let ngo_obj: Ngo = new Ngo(null,this.f.description.value, this.f.name.value, this.f.contact.value, addr, this.f.email.value, this.f.password.value,new Date(this.f.startDate.value), new Date(this.f.endDate.value),
      this.f.seats.value , false , sector);
    this.ngos.push(ngo_obj);
    this.ngoservice.addNgo(ngo_obj).subscribe(data => {
      this.message = data
    });
    this.registrationForm.reset();
    this.router.navigate(['/ngo/loginNgo']);
  }

}
