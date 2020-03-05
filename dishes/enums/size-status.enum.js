"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SizeStatus;
(function (SizeStatus) {
    SizeStatus["ENABLED"] = "enabled";
    SizeStatus["DISABLED"] = "disabled";
})(SizeStatus = exports.SizeStatus || (exports.SizeStatus = {}));
function getAllSizeStatus() {
    return [SizeStatus.ENABLED, SizeStatus.DISABLED];
}
exports.getAllSizeStatus = getAllSizeStatus;
//# sourceMappingURL=size-status.enum.js.map