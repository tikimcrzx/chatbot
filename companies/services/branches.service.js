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
const branch_status_enum_1 = require("../enums/branch-status.enum");
const exceptions_1 = require("../../security/exceptions");
const intents_enum_1 = require("../../home/enums/intents.enum");
let BranchesService = class BranchesService {
    constructor(branchModel) {
        this.branchModel = branchModel;
    }
    async create(createBranchDTO) {
        const branch = new this.branchModel(createBranchDTO);
        const branchDuplicated = await this.branchModel.findOne({
            name: createBranchDTO.name,
        });
        let branchSaved = null;
        if (!branchDuplicated) {
            branchSaved = branch.save();
        }
        else if (branchDuplicated.status === branch_status_enum_1.BranchStatus.ENABLED) {
            throw new exceptions_1.BusinessRuleException(`Branch ${createBranchDTO.name} duplicated`);
        }
        else {
            branchDuplicated.status = branch_status_enum_1.BranchStatus.ENABLED;
            branchSaved = branchDuplicated.save();
        }
        return branchSaved;
    }
    async update(id, updateBranchDTO) {
        const branchUpdated = await this.branchModel.findById(id);
        if (!branchUpdated) {
            throw new common_1.NotFoundException(`Branch ${id} not found`);
        }
        branchUpdated.name = updateBranchDTO.name;
        branchUpdated.company = updateBranchDTO.company;
        branchUpdated.address = updateBranchDTO.address;
        branchUpdated.phoneNumbers = updateBranchDTO.phoneNumbers;
        branchUpdated.schedule = updateBranchDTO.schedule;
        branchUpdated.homeService = updateBranchDTO.homeService;
        branchUpdated.save();
        return branchUpdated;
    }
    async findAll() {
        const branches = await this.branchModel
            .find({ status: branch_status_enum_1.BranchStatus.ENABLED })
            .populate('company', '-status -__v -updatedAt -createdAt');
        return branches;
    }
    async findById(id) {
        const branch = await this.branchModel.findById(id);
        if (!branch || branch.status === branch_status_enum_1.BranchStatus.DISABLED) {
            throw new common_1.NotFoundException(`Branch ${id} not found`);
        }
        return branch;
    }
    async findOne(name) {
        const branch = await this.branchModel.findOne({ name });
        if (!branch || branch.status === branch_status_enum_1.BranchStatus.DISABLED) {
            throw new common_1.NotFoundException(`Branch ${name} not found`);
        }
        return branch;
    }
    async reponseBot(name, intent) {
        const branch = await this.findOne(name);
        let object = {};
        if (intent === intents_enum_1.Intents.LOCATION_RESTAURANT) {
            object = {
                fulfillmentText: `Hola estamos ubicados en la calle ${branch.address}`,
                source: 'restaurantLocation',
            };
        }
        else if (intent === intents_enum_1.Intents.SCHEDULE_RESTAURANT) {
            object = {
                fulfillmentText: `Hola nuestro horario es de ${branch.schedule}`,
                source: 'restaurantSchedule',
            };
        }
        return object;
    }
    async delete(id) {
        const branch = await this.branchModel.findById(id);
        if (!branch || branch.status === branch_status_enum_1.BranchStatus.DISABLED) {
            throw new common_1.NotFoundException(`Branch ${id} not found`);
        }
        branch.status = branch_status_enum_1.BranchStatus.DISABLED;
        branch.save();
        return branch;
    }
};
BranchesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Branch')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BranchesService);
exports.BranchesService = BranchesService;
//# sourceMappingURL=branches.service.js.map