import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ngo } from '../models/ngo.model';

@Injectable({
  providedIn: 'root'
})

export class AdminNgoService {

  updateNgo: Ngo;
  constructor(private httpService: HttpClient) { }
  public getAllNgo() {
    console.log("ins service get ngos");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    debugger
    return this.httpService.get<Ngo>("http://localhost:4321/ngo/listNgo");
  }
  public update(updateNgo: Ngo) {
    this.updateNgo = updateNgo;
  }
  public updateMethod() {
    return this.updateNgo;
  }
  public onUpdate(updateNgo: Ngo) {
    console.log("ins service update");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:4321/ngo/updateNgo", updateNgo, { headers, responseType: 'text' });
  }
  delete(ngoId) {
    console.log("ins service delete");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:4321/ngo/deleteNgo/" + ngoId);
  }
}