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
const branches_service_1 = require("../services/branches.service");
const input_dto_1 = require("../../home/input-dto");
const parameters_location_dto_1 = require("../../home/input-dto/parameters-location.dto");
const intents_enum_1 = require("../../home/enums/intents.enum");
const parameters_schedule_dto_1 = require("../../home/input-dto/parameters-schedule.dto");
let BranchesController = class BranchesController {
    constructor(branchesService) {
        this.branchesService = branchesService;
    }
    async findAll(req, res) {
        const branches = await this.branchesService.findAll();
        res.status(common_1.HttpStatus.OK).json(branches);
    }
    async location(parameters, res) {
        const param = parameters.queryResult.parameters;
        const response = await this.branchesService.reponseBot(param.Restaurant, intents_enum_1.Intents.LOCATION_RESTAURANT);
        res.status(common_1.HttpStatus.OK).json(response);
    }
    async schedule(parameters, res) {
        const param = parameters.queryResult.parameters;
        const response = await this.branchesService.reponseBot(param.Schedule, intents_enum_1.Intents.SCHEDULE_RESTAURANT);
        res.status(common_1.HttpStatus.OK).json(response);
    }
    async findById(id, req, res) {
        const branch = await this.branchesService.findById(id);
        res.status(common_1.HttpStatus.OK).json(branch);
    }
    async create(createBranchDTO, req, res) {
        const brachSaved = await this.branchesService.create(createBranchDTO);
        res.status(common_1.HttpStatus.CREATED).json(brachSaved);
    }
    async update(id, res, updateBranch) {
        const branchUpdated = await this.branchesService.update(id, updateBranch);
        res.status(common_1.HttpStatus.OK).json(branchUpdated);
    }
    async delete(id, res) {
        const branchDeleted = await this.branchesService.delete(id);
        res.status(common_1.HttpStatus.OK).json(branchDeleted);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BranchesController.prototype, "findAll", null);
__decorate([
    common_1.Post('location'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BranchesController.prototype, "location", null);
__decorate([
    common_1.Post('schedule'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BranchesController.prototype, "schedule", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BranchesController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BranchesController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Req()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BranchesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BranchesController.prototype, "delete", null);
BranchesController = __decorate([
    common_1.Controller('branches'),
    __metadata("design:paramtypes", [branches_service_1.BranchesService])
], BranchesController);
exports.BranchesController = BranchesController;
//# sourceMappingURL=branches.controller.js.map