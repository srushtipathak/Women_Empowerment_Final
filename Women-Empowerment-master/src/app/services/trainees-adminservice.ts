import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserNgo } from "../models/userNgo.model";

@Injectable({
  providedIn: 'root'
})
export class TraineesAdminService {
  updateTrainee: UserNgo;

  constructor(private httpService: HttpClient) { }
  public getAllAppliedUser() {
    console.log("ins service get ngos");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    debugger
    return this.httpService.get<UserNgo>("http://localhost:4321/userngo/getTrainees");
  }
  public update(updateTrainee: UserNgo) {
    this.updateTrainee = updateTrainee;
  }
  public updateMethod() {
    return this.updateTrainee;
  }
  public onUpdate(updateTrainee: UserNgo) {
    console.log("ins service update");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:4321/userngo/updateUser", updateTrainee, { headers, responseType: 'text' });
  }
  delete(userId) {
    console.log("ins service delete");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:4321/userngo/deleteUser/" + userId);
  }

}
