import { BranchStatus } from '../enums/branch-status.enum';
import { Company } from '../models';
export interface CreateBrachDTO {
    readonly name: string;
    readonly status: BranchStatus;
    readonly address: string;
    readonly phoneNumbers: [string];
    readonly schedule: string;
    readonly homeService: boolean;
    readonly company: Company;
}
