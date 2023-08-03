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
exports.DevicePinnersManager = exports.GetEnterpriseDevicePinnersHeadersArg = exports.DeleteDevicePinnerByIdHeadersArg = exports.GetDevicePinnerByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class GetDevicePinnerByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetDevicePinnerByIdHeadersArg = GetDevicePinnerByIdHeadersArg;
class DeleteDevicePinnerByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteDevicePinnerByIdHeadersArg = DeleteDevicePinnerByIdHeadersArg;
class GetEnterpriseDevicePinnersHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetEnterpriseDevicePinnersHeadersArg = GetEnterpriseDevicePinnersHeadersArg;
class DevicePinnersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getDevicePinnerById(devicePinnerId, headers = new GetDevicePinnerByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeDevicePinner)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteDevicePinnerById(devicePinnerId, headers = new DeleteDevicePinnerByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/device_pinners/", devicePinnerId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    getEnterpriseDevicePinners(enterpriseId, queryParams = {}, headers = new GetEnterpriseDevicePinnersHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["direction"]: (0, utils_js_2.toString)(queryParams.direction) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/enterprises/", enterpriseId, "/device_pinners"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeDevicePinners)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.DevicePinnersManager = DevicePinnersManager;
//# sourceMappingURL=devicePinners.generated.js.map