import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NGOService } from 'src/app/services/ngoService.service';
import { UserNgoService } from 'src/app/services/userNgo.service';

@Component({
  selector: 'app-ngo-choice',
  templateUrl: './ngo-choice.component.html',
  styleUrls: ['./ngo-choice.component.css']
})
export class NgoChoiceComponent implements OnInit {

  public sectorName:string;
  public ngoList: any[];

  constructor(public route: ActivatedRoute, public ngoService: NGOService, 
              public service: AuthService, public userNgoService: UserNgoService,
              public router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=> this.sectorName = params['sectorName']);
    this.ngoService.getNGOListBySector(this.sectorName).subscribe(
      response => {
        this.ngoList = response;
      }
    );
  }

  updateUserNGO(ngo) {
    let userNgo: any = {
      "primaryKey":{
        "user":{
          "userId": this.service.getId()
        },
        "ngo":{
          "ngoId":ngo.ngoId
        }
      }
    }
    this.userNgoService.userNgoRegister(userNgo).subscribe(
      response => {
        console.log(response.primaryKey.user.userId);
        console.log(response.primaryKey.ngo.ngoId);
        this.service.setRegister();
        this.router.navigate(['/step/statusStep']);
      }
    )
  }
}