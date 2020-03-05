import { Document } from 'mongoose';
import { CompanyStatus } from '../enums/company-status.enum';
export interface Company extends Document {
    _id: string;
    name?: string;
    status?: CompanyStatus;
}
