import { SizeService } from '../services/size.service';
import { CreateSizeDTO } from '../input-dto/create-size.dto';
import { Response } from 'express';
import { RequestDecorator } from 'src/security/decorators/request.decorator';
export declare class SizeController {
    private readonly sizeService;
    constructor(sizeService: SizeService);
    create(createSizeDTO: CreateSizeDTO, req: RequestDecorator, res: Response): Promise<void>;
}
