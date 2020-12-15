import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserNgo } from 'src/app/models/userNgo.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserNgoService } from 'src/app/services/userNgo.service';
import { UserService } from 'src/app/services/userRegistration.service';

@Component({
  selector: 'app-status-step',
  templateUrl: './status-step.component.html',
  styleUrls: ['./status-step.component.css']
})
export class StatusStepComponent implements OnInit {

  userData: UserNgo;
  user: User;
  ngo: any;
  trainingsector: any;

  constructor(private service: AuthService, private userNgoService: UserNgoService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(this.service.getId()).subscribe(
      response => this.user = response
    );

    this.userNgoService.getUserNgo(this.service.getId()).subscribe(
      response => {
        this.userData = response;
        // console.log(JSON.stringify(response));
        // this.userData = JSON.parse(response);
        console.log(this.userData);
        // this.user = this.userData.primaryKey.user;
        this.ngo = this.userData.primaryKey.ngo;
        this.trainingsector = this.ngo.sector;
      }
    );
  }

}
