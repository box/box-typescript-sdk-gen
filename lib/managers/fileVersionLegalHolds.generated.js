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
exports.deserializeGetFileVersionLegalHoldsQueryParamsArg = exports.serializeGetFileVersionLegalHoldsQueryParamsArg = exports.FileVersionLegalHoldsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class FileVersionLegalHoldsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileVersionLegalHoldById(fileVersionLegalHoldId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_legal_holds/", fileVersionLegalHoldId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileVersionLegalHold)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileVersionLegalHolds(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_legal_holds"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFileVersionLegalHolds)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FileVersionLegalHoldsManager = FileVersionLegalHoldsManager;
function serializeGetFileVersionLegalHoldsQueryParamsArg(val) {
    return { ["policyId"]: val.policyId, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetFileVersionLegalHoldsQueryParamsArg = serializeGetFileVersionLegalHoldsQueryParamsArg;
function deserializeGetFileVersionLegalHoldsQueryParamsArg(val) {
    const policyId = val.policyId;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { policyId: policyId, marker: marker, limit: limit };
}
exports.deserializeGetFileVersionLegalHoldsQueryParamsArg = deserializeGetFileVersionLegalHoldsQueryParamsArg;
//# sourceMappingURL=fileVersionLegalHolds.generated.js.map