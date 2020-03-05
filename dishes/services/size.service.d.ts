import { Model } from 'mongoose';
import { Size } from '../models';
import { CreateSizeDTO } from '../input-dto/create-size.dto';
export declare class SizeService {
    private readonly sizeModel;
    constructor(sizeModel: Model<Size>);
    create(createSizeDTO: CreateSizeDTO): Promise<Size>;
}
