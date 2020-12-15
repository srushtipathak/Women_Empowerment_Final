import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ngo } from "../models/ngo.model";

@Injectable({
    providedIn: "root"
})
export class NGOService {
    ngoApi = "http://localhost:4321/ngo/getNGO";
    approvedNgoApi = "http://localhost:4321/ngo/approvedNgo";

    constructor(private http: HttpClient) { }

    getNGOListBySector(sectorName): Observable<any> {
        return this.http.get<any>(this.ngoApi + "/" + sectorName);
    }

    getApprovedNgo(): Observable<any> {
        return this.http.get<any>(this.approvedNgoApi);
    }

    public addNgo(addNgo: Ngo) {
        console.log("ins service add");
        console.log(addNgo);
        const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.http.post("http://localhost:4321/ngo/registerNgo", addNgo, { headers, responseType: 'text' });
    }

    public getNgo() {
        console.log("ins service get ngolist");
        const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.http.get<Ngo>("http://localhost:4321/ngo/listNgo");
    }

    public ngoLogin(email: string, password: string) {
        console.log("ins service get ngo login");
        const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.http.get<Ngo>("http://localhost:4321/ngo/ngologin?ngoEmailId=" + email + "&ngoPassword=" + password);
    }

    public getNgoById(ngo: Ngo) {
        console.log("ins service get ngo by id");
        const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
        return this.http.post<Ngo>("http://localhost:4321/ngo/getNgo", ngo, { headers, responseType: 'json' });
    }
}