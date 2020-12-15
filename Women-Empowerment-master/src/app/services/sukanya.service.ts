import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SukanyaAccount } from '../models/sukanyaaccount.model';


@Injectable({
  providedIn: 'root'
})


export class SukanyaService {


  constructor(private httpService: HttpClient) { }

  public addSukanyaAccount(addAcc): Observable<SukanyaAccount> {
    console.log("ins service add");
    // console.log(addAcc);
    return this.httpService.post<SukanyaAccount>("http://localhost:4321/sukanyaAccount/insertAccount", addAcc);
  }

  public getSukanyaDetails(userId): Observable<SukanyaAccount> {
    console.log("ins service get employees");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<SukanyaAccount>("http://localhost:4321/sukanyaAccount/getAccount/"+userId);
  }

}