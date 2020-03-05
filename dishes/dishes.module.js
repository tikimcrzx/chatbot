"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const schemas_1 = require("./schemas");
const security_module_1 = require("../security/security.module");
const size_controller_1 = require("./controllers/size.controller");
const size_service_1 = require("./services/size.service");
const ingredient_controller_1 = require("./controllers/ingredient.controller");
const ingredient_service_1 = require("./services/ingredient.service");
const dish_controller_1 = require("./controllers/dish.controller");
const dish_service_1 = require("./services/dish.service");
let DishModule = class DishModule {
};
DishModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Size', schema: schemas_1.SizeSchema, collection: 'sizes' },
                {
                    name: 'Ingredient',
                    schema: schemas_1.IngredientSchema,
                    collection: 'ingredients',
                },
                { name: 'Dish', schema: schemas_1.DishSchema, collection: 'dishes' },
            ]),
            common_1.forwardRef(() => security_module_1.SecurityModule),
        ],
        controllers: [size_controller_1.SizeController, ingredient_controller_1.IngredientController, dish_controller_1.DishController],
        providers: [size_service_1.SizeService, ingredient_service_1.IngredientService, dish_service_1.DishService],
        exports: [mongoose_1.MongooseModule],
    })
], DishModule);
exports.DishModule = DishModule;
//# sourceMappingURL=dishes.module.js.map