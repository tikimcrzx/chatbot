import { Model } from 'mongoose';
import { Company } from '../models';
import { CreateCompanyDTO } from '../input-dto/create-company.dto';
export declare class CompanyService {
    private readonly companyModel;
    constructor(companyModel: Model<Company>);
    create(createCompanyDTO: CreateCompanyDTO): Promise<Company>;
    update(id: string, updatedCompanyDTO: CreateCompanyDTO): Promise<Company>;
    findAll(): Promise<Company[]>;
    findById(id: string): Promise<Company>;
    delete(id: string): Promise<Company>;
}
