import { Ingredient, Size } from '../models';
export interface CreateDishDTO {
    readonly name: string;
    readonly ingredients: Ingredient;
    readonly size: Size;
    readonly category: string;
}
