import { Document } from 'mongoose';
export interface Size extends Document {
    _id: string;
    name: string;
    price: number;
}
