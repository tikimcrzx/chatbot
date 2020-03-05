import { Model } from 'mongoose';
import { Dish, Size, Ingredient } from '../models';
import { CreateDishDTO } from '../input-dto/create-dish.dto';
export declare class DishService {
    private readonly dishModel;
    private readonly sizeModel;
    private readonly ingredientModel;
    constructor(dishModel: Model<Dish>, sizeModel: Model<Size>, ingredientModel: Model<Ingredient>);
    create(createDishDTO: CreateDishDTO): Promise<Dish>;
    findAll(): Promise<Dish[]>;
}
