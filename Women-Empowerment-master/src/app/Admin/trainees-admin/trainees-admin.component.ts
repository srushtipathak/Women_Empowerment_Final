import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNgo } from 'src/app/models/userNgo.model';
import { TraineesAdminService } from 'src/app/services/trainees-adminservice';

@Component({
  selector: 'app-trainees-admin',
  templateUrl: './trainees-admin.component.html',
  styleUrls: ['./trainees-admin.component.css']
})
export class TraineesAdminComponent implements OnInit {

  message: string;
  UserNgo: UserNgo[];
  constructor(private myservice1: TraineesAdminService, private router: Router) {

  }

  ngOnInit(): any {
    this.myservice1.getAllAppliedUser().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.UserNgo = response;
  }
  update(updateTrainee: UserNgo) {
    updateTrainee.status = true;
    this.myservice1.onUpdate(updateTrainee).subscribe(response => { console.log("success") });
  }
  delete(deleteTrainee) {
    this.myservice1.delete(deleteTrainee.primaryKey.user.userId).subscribe(data => {
      console.log(data);
    });
  }

}
