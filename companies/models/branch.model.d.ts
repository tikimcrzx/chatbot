import { BranchStatus } from '../enums/branch-status.enum';
import { Document } from 'mongoose';
import { Company } from './index';
export interface Branch extends Document {
    _id: string;
    name: string;
    status: BranchStatus;
    address: string;
    phoneNumbers: String[];
    schedule: string;
    homeService: boolean;
    company: Company;
}
