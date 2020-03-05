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
const company_service_1 = require("../services/company.service");
const request_decorator_1 = require("../../security/decorators/request.decorator");
let CompanyController = class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async findAll(req, res) {
        const companies = await this.companyService.findAll();
        res.status(common_1.HttpStatus.OK).json(companies);
    }
    async findById(id, res) {
        const company = await this.companyService.findById(id);
        res.status(common_1.HttpStatus.OK).json(company);
    }
    async create(createCompanyDTO, req, res) {
        const companySaved = await this.companyService.create(createCompanyDTO);
        res.status(common_1.HttpStatus.CREATED).json(companySaved);
    }
    async prueba(createData, req, res) {
        res
            .status(common_1.HttpStatus.OK)
            .json(createData.queryResult.outputContexts[0].parameters);
    }
    async update(id, updateCompanyDto, res) {
        const companyUpdated = await this.companyService.update(id, updateCompanyDto);
        res.status(common_1.HttpStatus.OK).json(companyUpdated);
    }
    async delete(id, req, res) {
        const companyDeleted = await this.companyService.delete(id);
        console.log(companyDeleted);
        res.status(common_1.HttpStatus.OK).json(companyDeleted);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "create", null);
__decorate([
    common_1.Post('prueba'),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "prueba", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "delete", null);
CompanyController = __decorate([
    common_1.Controller('companies'),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map