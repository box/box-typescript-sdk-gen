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
exports.FileVersionLegalHoldsManager = exports.GetFileVersionLegalHoldsHeadersArg = exports.GetFileVersionLegalHoldByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class GetFileVersionLegalHoldByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileVersionLegalHoldByIdHeadersArg = GetFileVersionLegalHoldByIdHeadersArg;
class GetFileVersionLegalHoldsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileVersionLegalHoldsHeadersArg = GetFileVersionLegalHoldsHeadersArg;
class FileVersionLegalHoldsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileVersionLegalHoldById(fileVersionLegalHoldId, headers = new GetFileVersionLegalHoldByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_legal_holds/", fileVersionLegalHoldId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileVersionLegalHold)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileVersionLegalHolds(queryParams, headers = new GetFileVersionLegalHoldsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["policy_id"]: (0, utils_js_2.toString)(queryParams.policyId), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_legal_holds"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFileVersionLegalHolds)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FileVersionLegalHoldsManager = FileVersionLegalHoldsManager;
//# sourceMappingURL=fileVersionLegalHolds.generated.js.map