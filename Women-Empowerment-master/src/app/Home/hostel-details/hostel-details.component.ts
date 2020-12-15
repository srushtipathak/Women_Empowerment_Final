import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccomodationUser } from 'src/app/models/accomodationUser.model';
import { User } from 'src/app/models/user.model';
import { AccomodationService } from 'src/app/services/hostelservice.service';

@Component({
  selector: 'app-hostel-details',
  templateUrl: './hostel-details.component.html',
  styleUrls: ['./hostel-details.component.css']
})
export class HostelDetailsComponent implements OnInit {

  message: string;
  acc: any;
  userHostelId: any;
  user: User;

  constructor(private accoService: AccomodationService, private route: ActivatedRoute) { }

  ngOnInit(): any {
    this.route.queryParams.subscribe((params) => {
      this.userHostelId = params['userHostelId'];
    })
    this.accoService.getAccomodation(this.userHostelId).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.acc = response;
    this.user = this.acc.user;
  }

}
