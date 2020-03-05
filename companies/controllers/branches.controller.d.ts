import { Response } from 'express';
import { RequestDecorator } from '../../security/decorators/request.decorator';
import { BranchesService } from '../services/branches.service';
import { CreateBrachDTO } from '../input-dto/create-brach.dto';
import { IntentParameterstDTO } from 'src/home/input-dto';
export declare class BranchesController {
    private readonly branchesService;
    constructor(branchesService: BranchesService);
    findAll(req: RequestDecorator, res: Response): Promise<void>;
    location(parameters: IntentParameterstDTO, res: Response): Promise<void>;
    schedule(parameters: IntentParameterstDTO, res: Response): Promise<void>;
    findById(id: string, req: RequestDecorator, res: Response): Promise<void>;
    create(createBranchDTO: CreateBrachDTO, req: RequestDecorator, res: Response): Promise<void>;
    update(id: string, res: Response, updateBranch: CreateBrachDTO): Promise<void>;
    delete(id: string, res: Response): Promise<void>;
}
