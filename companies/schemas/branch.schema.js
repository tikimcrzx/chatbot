"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const branch_status_enum_1 = require("../enums/branch-status.enum");
const mongodb_1 = require("mongodb");
exports.BranchSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true, maxlength: 100 },
    status: { type: String, required: true, enum: branch_status_enum_1.getAllBranchStatus() },
    address: { type: String, required: true, unique: true },
    phoneNumbers: { type: [String], required: true },
    schedule: { type: String, required: true },
    homeService: { type: Boolean, required: true },
    company: { type: mongodb_1.ObjectId, ref: 'Company', required: true },
}, { timestamps: true });
//# sourceMappingURL=branch.schema.js.map