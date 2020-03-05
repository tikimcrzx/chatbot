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
const dish_service_1 = require("../services/dish.service");
const request_decorator_1 = require("../../security/decorators/request.decorator");
let DishController = class DishController {
    constructor(dishService) {
        this.dishService = dishService;
    }
    async create(createDishDTO, req, res) {
        const entitySaved = await this.dishService.create(createDishDTO);
        res.status(common_1.HttpStatus.CREATED).json(entitySaved);
    }
    async findAll(req, res) {
        const entities = await this.dishService.findAll();
        res.status(common_1.HttpStatus.OK).json(entities);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DishController.prototype, "findAll", null);
DishController = __decorate([
    common_1.Controller('dishes'),
    __metadata("design:paramtypes", [dish_service_1.DishService])
], DishController);
exports.DishController = DishController;
//# sourceMappingURL=dish.controller.js.map