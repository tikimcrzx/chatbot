import { IngredientService } from '../services/ingredient.service';
import { CreateIngredientDTO } from '../input-dto/create-ingredient.dto';
import { RequestDecorator } from 'src/security/decorators/request.decorator';
import { Response } from 'express';
export declare class IngredientController {
    private readonly ingredientService;
    constructor(ingredientService: IngredientService);
    create(createIngredientDTO: CreateIngredientDTO, req: RequestDecorator, res: Response): Promise<void>;
    findAll(req: RequestDecorator, res: Response): Promise<void>;
    findById(id: string, res: Response): Promise<void>;
    delete(id: string, res: Response): Promise<void>;
    update(id: string, updateIngredient: CreateIngredientDTO, res: Response): Promise<void>;
}
