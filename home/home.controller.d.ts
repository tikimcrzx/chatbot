import { IntentParameterstDTO } from './input-dto';
import { Response } from 'express';
export declare class HomeController {
    home(intentParametersDTO: IntentParameterstDTO, res: Response): Promise<void>;
}
