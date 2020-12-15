export class LoginInfo{
    ngoid:number;
    email:string;
    constructor(id:number,emailid:string){
        this.ngoid=id;
        this.email=emailid;
    }
}