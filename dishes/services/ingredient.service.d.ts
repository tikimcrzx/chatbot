import { Model } from 'mongoose';
import { Ingredient } from '../models';
import { CreateIngredientDTO } from '../input-dto/create-ingredient.dto';
export declare class IngredientService {
    private readonly ingredientModel;
    constructor(ingredientModel: Model<Ingredient>);
    create(createIngredientDTO: CreateIngredientDTO): Promise<CreateIngredientDTO>;
    update(id: string, createIngredientDTO: CreateIngredientDTO): Promise<CreateIngredientDTO>;
    findAll(): Promise<Ingredient[]>;
    findById(id: string): Promise<Ingredient>;
    delete(id: string): Promise<Ingredient>;
}
