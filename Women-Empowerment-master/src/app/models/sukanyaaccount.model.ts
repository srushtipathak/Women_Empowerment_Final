import { User } from "./user.model";

export class SukanyaAccount {
    constructor(
    public accountId: number,
    public accountNumber: string,
    public accountType: string,
    public balance: number,
    public registrationDate: Date,
    public user: any
    ){}
  }