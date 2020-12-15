import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ngo } from 'src/app/models/ngo.model';
import { NgoAuthService } from 'src/app/services/ngoAuth.service';
import { NGOService } from 'src/app/services/ngoService.service';

@Component({
  selector: 'app-status-ngo',
  templateUrl: './status-ngo.component.html',
  styleUrls: ['./status-ngo.component.css']
})
export class StatusNGOComponent implements OnInit {

  id: string;
  ngo: Ngo;
  ngoresponse: Ngo;
  sectorname: string;
  constructor(private router: Router, private ngoAuthService: NgoAuthService, private ngoservice: NGOService) { }

  ngOnInit() {
    this.id = this.ngoAuthService.getId();
    this.ngo = new Ngo(null, null, null, null, null, null, null, null, null, null, null,null);
    this.ngo.ngoId = parseInt(this.id);
    this.ngoservice.getNgoById(this.ngo).subscribe(response => this.handleSuccessfullResponse(response),
    );
  }

  handleSuccessfullResponse(response) {
    this.testresponse(response);
  }

  testresponse(response) {
    this.ngoresponse = new Ngo(null,response.ngoDescription, response.ngoName, response.ngoContactNumber, response.ngoAddress, response.ngoEmailId, response.password,response.startDate, response.endDate,  response.trainingSeats,response.status,response.trainingSector);
    let id: number = response.sector.sectorId;
    console.log(id);
    switch (id) {
      case 101:
        this.sectorname = "Agriculture";
        break;
      case 102:
        this.sectorname = "Animal Husbandary";
        break;
      case 103:
        this.sectorname = "Dairying";
        break;
      case 104:
        this.sectorname = "Fisheries";
        break;
      case 105:
        this.sectorname = "Handlooms";
        break;
      case 106:
        this.sectorname = "Handicrafts";
        break;
      default:
        this.sectorname = "none";
        break;
    }
  }
}
