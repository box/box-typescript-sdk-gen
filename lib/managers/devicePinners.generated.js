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
exports.deserializeGetEnterpriseDevicePinnersQueryParamsArg = exports.serializeGetEnterpriseDevicePinnersQueryParamsArg = exports.deserializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField = exports.serializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField = exports.DevicePinnersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class DevicePinnersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getDevicePinnerById(devicePinnerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeDevicePinner)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteDevicePinnerById(devicePinnerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getEnterpriseDevicePinners(enterpriseId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/enterprises/", enterpriseId, "/device_pinners"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeDevicePinners)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.DevicePinnersManager = DevicePinnersManager;
function serializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(val) {
    return val;
}
exports.serializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField = serializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField;
function deserializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetEnterpriseDevicePinnersQueryParamsArgDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField = deserializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField;
function serializeGetEnterpriseDevicePinnersQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit, ["direction"]: val.direction == void 0 ? void 0 : serializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(val.direction) };
}
exports.serializeGetEnterpriseDevicePinnersQueryParamsArg = serializeGetEnterpriseDevicePinnersQueryParamsArg;
function deserializeGetEnterpriseDevicePinnersQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const direction = val.direction == void 0 ? void 0 : deserializeGetEnterpriseDevicePinnersQueryParamsArgDirectionField(val.direction);
    return { marker: marker, limit: limit, direction: direction };
}
exports.deserializeGetEnterpriseDevicePinnersQueryParamsArg = deserializeGetEnterpriseDevicePinnersQueryParamsArg;
//# sourceMappingURL=devicePinners.generated.js.map