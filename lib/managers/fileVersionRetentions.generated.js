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
exports.FileVersionRetentionsManager = exports.GetFileVersionRetentionByIdHeadersArg = exports.GetFileVersionRetentionsHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class GetFileVersionRetentionsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileVersionRetentionsHeadersArg = GetFileVersionRetentionsHeadersArg;
class GetFileVersionRetentionByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileVersionRetentionByIdHeadersArg = GetFileVersionRetentionByIdHeadersArg;
class FileVersionRetentionsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileVersionRetentions(queryParams = {}, headers = new GetFileVersionRetentionsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["file_id"]: (0, utils_js_2.toString)(queryParams.fileId), ["file_version_id"]: (0, utils_js_2.toString)(queryParams.fileVersionId), ["policy_id"]: (0, utils_js_2.toString)(queryParams.policyId), ["disposition_action"]: (0, utils_js_2.toString)(queryParams.dispositionAction), ["disposition_before"]: (0, utils_js_2.toString)(queryParams.dispositionBefore), ["disposition_after"]: (0, utils_js_2.toString)(queryParams.dispositionAfter), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["marker"]: (0, utils_js_2.toString)(queryParams.marker) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_retentions"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileVersionRetentions)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileVersionRetentionById(fileVersionRetentionId, headers = new GetFileVersionRetentionByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_retentions/", fileVersionRetentionId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFileVersionRetention)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FileVersionRetentionsManager = FileVersionRetentionsManager;
//# sourceMappingURL=fileVersionRetentions.generated.js.map