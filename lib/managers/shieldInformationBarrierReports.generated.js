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
exports.ShieldInformationBarrierReportsManager = exports.GetShieldInformationBarrierReportByIdHeadersArg = exports.CreateShieldInformationBarrierReportHeadersArg = exports.GetShieldInformationBarrierReportsHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class GetShieldInformationBarrierReportsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetShieldInformationBarrierReportsHeadersArg = GetShieldInformationBarrierReportsHeadersArg;
class CreateShieldInformationBarrierReportHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateShieldInformationBarrierReportHeadersArg = CreateShieldInformationBarrierReportHeadersArg;
class GetShieldInformationBarrierReportByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetShieldInformationBarrierReportByIdHeadersArg = GetShieldInformationBarrierReportByIdHeadersArg;
class ShieldInformationBarrierReportsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarrierReports(queryParams, headers = new GetShieldInformationBarrierReportsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["shield_information_barrier_id"]: (0, utils_js_2.toString)(queryParams.shieldInformationBarrierId), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_reports"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createShieldInformationBarrierReport(requestBody, headers = new CreateShieldInformationBarrierReportHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_reports"), { method: "POST", headers: headersMap, body: (0, json_js_1.serializeJson)((0, schemas_generated_js_2.serializeShieldInformationBarrierReference)(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierReport)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getShieldInformationBarrierReportById(shieldInformationBarrierReportId, headers = new GetShieldInformationBarrierReportByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_reports/", shieldInformationBarrierReportId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierReport)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.ShieldInformationBarrierReportsManager = ShieldInformationBarrierReportsManager;
//# sourceMappingURL=shieldInformationBarrierReports.generated.js.map