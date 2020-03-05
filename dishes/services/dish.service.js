"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DishService = class DishService {
    constructor(dishModel, sizeModel, ingredientModel) {
        this.dishModel = dishModel;
        this.sizeModel = sizeModel;
        this.ingredientModel = ingredientModel;
    }
    async create(createDishDTO) {
        const dish = new this.dishModel(createDishDTO);
        const dishSaved = await dish.save();
        return dishSaved;
    }
    async findAll() {
        const dishes = await this.dishModel
            .find()
            .populate({ path: 'sizes', model: this.sizeModel })
            .populate({ path: 'ingredients', model: this.ingredientModel })
            .exec();
        return dishes;
    }
};
DishService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Dish')),
    __param(1, mongoose_1.InjectModel('Size')),
    __param(2, mongoose_1.InjectModel('Ingredient')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], DishService);
exports.DishService = DishService;
//# sourceMappingURL=dish.service.js.map