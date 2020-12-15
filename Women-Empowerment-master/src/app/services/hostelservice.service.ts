import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccomodationUser } from '../models/accomodationUser.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccomodationService {

  constructor(private httpService: HttpClient) { }

  public addAcco(addAcco: AccomodationUser): Observable<AccomodationUser> {
    console.log("ins service add");
    return this.httpService.post<AccomodationUser>("http://localhost:4321/accomodation/registerAccomodation", addAcco);
  }

  public getAccomodation(userHostelId) {
    console.log("ins service get accomodation");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    console.log(headers.toString());
    return this.httpService.get<AccomodationUser>("http://localhost:4321/accomodation/getAccomodationDetails/" + userHostelId);
  }

  public getAccomodationByUserId(userId): Observable<any> {
    return this.httpService.get<AccomodationUser>("http://localhost:4321/accomodation/getAccomodationDetailsByUserId/" + userId);
  }
}