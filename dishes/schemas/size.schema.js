"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const size_status_enum_1 = require("../enums/size-status.enum");
exports.SizeSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true, maxlength: 100 },
    price: { type: Number, required: true },
    status: {
        type: String,
        default: size_status_enum_1.SizeStatus.ENABLED,
        enum: size_status_enum_1.getAllSizeStatus(),
    },
}, { timestamps: true });
//# sourceMappingURL=size.schema.js.map