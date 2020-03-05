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
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const company_status_enum_1 = require("../enums/company-status.enum");
const exceptions_1 = require("../../security/exceptions");
let CompanyService = class CompanyService {
    constructor(companyModel) {
        this.companyModel = companyModel;
    }
    async create(createCompanyDTO) {
        const company = new this.companyModel(createCompanyDTO);
        const checkCompanyDuplication = await this.companyModel.findOne({
            name: company.name,
        });
        let companySaved = null;
        if (!checkCompanyDuplication) {
            companySaved = await company.save();
        }
        else if (checkCompanyDuplication.status === company_status_enum_1.CompanyStatus.ENABLED) {
            throw new exceptions_1.BusinessRuleException(`Company ${createCompanyDTO.name} duplicated`);
        }
        else {
            checkCompanyDuplication.status = company_status_enum_1.CompanyStatus.ENABLED;
            companySaved = checkCompanyDuplication.save();
        }
        return companySaved;
    }
    async update(id, updatedCompanyDTO) {
        let companySaved = await this.companyModel.findById(id);
        if (!companySaved || companySaved.status === company_status_enum_1.CompanyStatus.DISABLED) {
            throw new common_1.NotFoundException(`Company not found`);
        }
        companySaved.name = updatedCompanyDTO.name;
        companySaved.save();
        return companySaved;
    }
    async findAll() {
        const companies = await this.companyModel.find({
            status: 'enabled',
        });
        return companies;
    }
    async findById(id) {
        const company = await this.companyModel.findById(id);
        if (!company || company.status === company_status_enum_1.CompanyStatus.DISABLED) {
            throw new common_1.NotFoundException(`Company ${id} not found`);
        }
        return company;
    }
    async delete(id) {
        const companyRemoved = await this.companyModel.findById(id);
        if (!companyRemoved || companyRemoved.status === company_status_enum_1.CompanyStatus.DISABLED) {
            throw new common_1.NotFoundException(`Company ${id} not found`);
        }
        companyRemoved.status = company_status_enum_1.CompanyStatus.DISABLED;
        companyRemoved.save();
        return companyRemoved;
    }
};
CompanyService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Company')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map