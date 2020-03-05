import { DishService } from '../services/dish.service';
import { CreateDishDTO } from '../input-dto/create-dish.dto';
import { RequestDecorator } from 'src/security/decorators/request.decorator';
import { Response } from 'express';
export declare class DishController {
    private readonly dishService;
    constructor(dishService: DishService);
    create(createDishDTO: CreateDishDTO, req: RequestDecorator, res: Response): Promise<void>;
    findAll(req: RequestDecorator, res: Response): Promise<void>;
}
