import { Address } from './address.model';
import { Name } from './name.model';

export class User {
    constructor(
        public userId: number,
        public userName: Name,
        public userEmailId: string,
        public userPassword: string,
        public userContactNumber: string,
        public userDOB: Date,
        public userAddress: Address,
        public family: any,
        public userAadhar: string
    ) {}
}