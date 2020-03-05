"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DishStatus;
(function (DishStatus) {
    DishStatus["ENABLED"] = "enabled";
    DishStatus["DISABLED"] = "disabled";
})(DishStatus = exports.DishStatus || (exports.DishStatus = {}));
function getAllDishStatus() {
    return [DishStatus.ENABLED, DishStatus.DISABLED];
}
exports.getAllDishStatus = getAllDishStatus;
//# sourceMappingURL=dish-status.enum.js.map