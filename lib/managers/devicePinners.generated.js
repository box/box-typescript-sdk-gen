"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicePinnersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
class DevicePinnersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getDevicePinnerById(devicePinnerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId), { method: "GET", auth: this.auth });
            return (0, schemas_generated_js_1.deserializeDevicePinner)(deserializeJSON(response.text));
        });
    }
    deleteDevicePinnerById(devicePinnerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
    getEnterpriseDevicePinners(enterpriseId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/enterprises/", enterpriseId, "/device_pinners"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit, ["direction"]: options.direction }, auth: this.auth });
            return (0, schemas_generated_js_2.deserializeDevicePinners)(deserializeJSON(response.text));
        });
    }
}
exports.DevicePinnersManager = DevicePinnersManager;
//# sourceMappingURL=devicePinners.generated.js.map