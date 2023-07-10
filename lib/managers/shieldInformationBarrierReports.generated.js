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
exports.deserializeGetShieldInformationBarrierReportsQueryParamsArg = exports.serializeGetShieldInformationBarrierReportsQueryParamsArg = exports.ShieldInformationBarrierReportsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class ShieldInformationBarrierReportsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarrierReports(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_reports"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createShieldInformationBarrierReport(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_reports"), { method: "POST", body: (0, json_js_1.serializeJson)((0, schemas_generated_js_2.serializeShieldInformationBarrierReference)(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierReport)((0, json_js_2.deserializeJson)(response.text));
        });
    }
    getShieldInformationBarrierReportById(shieldInformationBarrierReportId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_reports/", shieldInformationBarrierReportId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierReport)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.ShieldInformationBarrierReportsManager = ShieldInformationBarrierReportsManager;
function serializeGetShieldInformationBarrierReportsQueryParamsArg(val) {
    return { ["shieldInformationBarrierId"]: val.shieldInformationBarrierId, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetShieldInformationBarrierReportsQueryParamsArg = serializeGetShieldInformationBarrierReportsQueryParamsArg;
function deserializeGetShieldInformationBarrierReportsQueryParamsArg(val) {
    const shieldInformationBarrierId = val.shieldInformationBarrierId;
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierId: shieldInformationBarrierId, marker: marker, limit: limit };
}
exports.deserializeGetShieldInformationBarrierReportsQueryParamsArg = deserializeGetShieldInformationBarrierReportsQueryParamsArg;
//# sourceMappingURL=shieldInformationBarrierReports.generated.js.map