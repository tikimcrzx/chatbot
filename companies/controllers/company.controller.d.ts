import { CompanyService } from '../services/company.service';
import { CreateCompanyDTO } from '../input-dto/create-company.dto';
import { Response } from 'express';
import { RequestDecorator } from 'src/security/decorators/request.decorator';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    findAll(req: RequestDecorator, res: Response): Promise<void>;
    findById(id: string, res: Response): Promise<void>;
    create(createCompanyDTO: CreateCompanyDTO, req: RequestDecorator, res: Response): Promise<void>;
    prueba(createData: any, req: RequestDecorator, res: Response): Promise<void>;
    update(id: string, updateCompanyDto: CreateCompanyDTO, res: Response): Promise<void>;
    delete(id: string, req: RequestDecorator, res: Response): Promise<void>;
}
