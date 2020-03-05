import { Document } from 'mongoose';
import { Ingredient } from './ingredient.model';
import { Size } from './size.model';
export interface Dish extends Document {
    _id: string;
    name: string;
    address: string;
    phoneNumbers: String[];
    schedule: string;
    homeService: string;
    ingredients: Ingredient;
    sizes: Size;
}
