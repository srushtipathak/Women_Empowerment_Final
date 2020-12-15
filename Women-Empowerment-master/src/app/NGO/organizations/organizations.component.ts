import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ngo } from 'src/app/models/ngo.model';
import { NGOService } from 'src/app/services/ngoService.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  message: string;
  ngolist: Ngo[] = [];
  constructor(private ngoservice: NGOService, private router: Router) {

  }

  ngOnInit(): any {
    this.ngoservice.getApprovedNgo().subscribe(
      response => this.handleSuccessfullResponse(response)
    );
  }

  handleSuccessfullResponse(response) {
    this.ngolist = response;
  }
}
