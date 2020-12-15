import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SukanyaAccount } from 'src/app/models/sukanyaaccount.model';
import { AuthService } from 'src/app/services/auth.service';
import { SukanyaService } from 'src/app/services/sukanya.service';

@Component({
  selector: 'app-sukanya',
  templateUrl: './sukanya.component.html',
  styleUrls: ['./sukanya.component.css']
})
export class SukanyaComponent implements OnInit {

  registerForm: FormGroup;
  age: FormControl;
  accountType: FormControl;
  accountNumber: FormControl;
  balance: FormControl;

  submitted = false;

  constructor(private formBuilder: FormBuilder, private myservice: SukanyaService,
    private service: AuthService, private router: Router) {

    this.age = new FormControl("", Validators.compose([Validators.required, Validators.max(10)]));
    this.accountType = new FormControl("", Validators.required);
    this.accountNumber = new FormControl("", Validators.compose([Validators.required, Validators.min(100000000000), Validators.max(999999999999)]));
    this.balance = new FormControl("", Validators.compose([Validators.required, Validators.min(1000)]));

    this.registerForm = this.formBuilder.group({
      "age": this.age,
      "accountType": this.accountType,
      "accountNumber": this.accountNumber,
      "balance": this.balance
    });
  }

  ngOnInit() {
    this.myservice.getSukanyaDetails(this.service.getId()).subscribe({
      next: data => {
        this.router.navigate(['/sukanyaDetails'], {
          queryParams: {
            userId: data.user.userId
          }
        });
      },
      error: err => {
      }
    })
  }

  get f() { return this.registerForm.controls; }

  message: string;
  public receivedData: SukanyaAccount;

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      let addacc = new SukanyaAccount(
        null,
        this.accountNumber.value,
        this.accountType.value,
        parseInt(this.balance.value),
        null,
        {
          "userId": parseInt(this.service.getId())
        }
      );
      console.log(JSON.stringify(addacc));
      this.myservice.addSukanyaAccount(addacc).subscribe(
        data => {
          this.receivedData = data;
          console.log(this.receivedData);
          this.router.navigate(['/sukanyaDetails'], {
            queryParams: {
              userId: this.receivedData.user.userId
            }
          });
        });
      // this.registerForm.reset();
    }
  }
}
