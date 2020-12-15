import { Hostel } from "./hostel.model";
import { User } from "./user.model";

export class AccomodationUser {
  constructor(
    public hostel: Hostel,
    public user: User,
    public quota: string,
    public jobType: string
  ) { }
}