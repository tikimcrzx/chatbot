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
const users_controller_1 = require("../companies/controllers/users.controller");
const users_service_1 = require("../companies/services/users.service");
const branches_controller_1 = require("./controllers/branches.controller");
const branches_service_1 = require("./services/branches.service");
const company_service_1 = require("./services/company.service");
const company_controller_1 = require("./controllers/company.controller");
let CompaniesModule = class CompaniesModule {
};
CompaniesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Company', schema: schemas_1.CompanySchema, collection: 'companies' },
                { name: 'Branch', schema: schemas_1.BranchSchema, collection: 'branches' },
                { name: 'User', schema: schemas_1.UserSchema, collection: 'users' },
            ]),
            common_1.forwardRef(() => security_module_1.SecurityModule),
        ],
        controllers: [users_controller_1.UsersController, branches_controller_1.BranchesController, company_controller_1.CompanyController],
        providers: [users_service_1.UsersService, branches_service_1.BranchesService, company_service_1.CompanyService],
        exports: [mongoose_1.MongooseModule],
    })
], CompaniesModule);
exports.CompaniesModule = CompaniesModule;
//# sourceMappingURL=companies.module.js.map