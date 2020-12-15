import { Address } from "./address.model";

export class Ngo {
    constructor(
    public ngoId: number,
    public ngoDescription: string,
    public ngoName: string,
    public ngoContactNumber: string,
    public ngoAddress: Address,
    public ngoEmailId: string,
    public ngoPassword: string,
    public startDate: Date,
    public endDate: Date,
    public trainingSeats: number,
    public status: boolean,
    public sector: any){}
}