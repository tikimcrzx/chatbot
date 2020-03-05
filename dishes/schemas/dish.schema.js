"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
const dish_status_enum_1 = require("../enums/dish-status.enum");
exports.DishSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true, maxlength: 100 },
    status: {
        type: String,
        default: dish_status_enum_1.DishStatus.ENABLED,
        enum: dish_status_enum_1.getAllDishStatus(),
    },
    category: { type: String, required: true },
    ingredients: { type: [mongodb_1.ObjectId], ref: 'Ingredient', required: true },
    sizes: { type: [mongodb_1.ObjectId], ref: 'Size', required: true },
}, { timestamps: true });
//# sourceMappingURL=dish.schema.js.map