import { Component, OnInit } from '@angular/core';
import { NGOService } from 'src/app/services/ngoService.service';

@Component({
  selector: 'app-ngo-step',
  templateUrl: './ngo-step.component.html',
  styleUrls: ['./ngo-step.component.css']
})
export class NgoStepComponent implements OnInit {

  ngoList: any[];

  constructor(private ngoService:NGOService) { }

  ngOnInit(): void {
    this.ngoService.getApprovedNgo().subscribe(
      resp => {
        this.ngoList = resp;
      }
    )
  }

}
