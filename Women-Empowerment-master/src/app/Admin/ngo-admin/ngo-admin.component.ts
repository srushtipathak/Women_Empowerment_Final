import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ngo } from 'src/app/models/ngo.model';
import { AdminNgoService } from 'src/app/services/admin-ngoservice';

@Component({
  selector: 'app-ngo-admin',
  templateUrl: './ngo-admin.component.html',
  styleUrls: ['./ngo-admin.component.css']
})
export class NgoAdminComponent implements OnInit {

  message: string;
  Ngo: Ngo[];
  constructor(private myservice: AdminNgoService, private router: Router) {

  }
  ngOnInit(): any {
    debugger
    this.myservice.getAllNgo().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.Ngo = response;
  }
  update(updateNgo: Ngo) {
    updateNgo.status = true;
    this.myservice.onUpdate(updateNgo).subscribe(response => { console.log("success") });
  }
  delete(deleteNgo) {
    this.myservice.delete(deleteNgo.ngoId).subscribe(data => {
      console.log(data);
    });
  }

}
