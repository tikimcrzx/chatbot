import { Model } from 'mongoose';
import { Branch } from '../models';
import { CreateBrachDTO } from '../input-dto/create-brach.dto';
export declare class BranchesService {
    private readonly branchModel;
    constructor(branchModel: Model<Branch>);
    create(createBranchDTO: CreateBrachDTO): Promise<Branch>;
    update(id: string, updateBranchDTO: CreateBrachDTO): Promise<Branch>;
    findAll(): Promise<Branch[]>;
    findById(id: string): Promise<Branch>;
    findOne(name: string): Promise<Branch>;
    reponseBot(name: string, intent: string): Promise<{}>;
    delete(id: string): Promise<Branch>;
}
