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
exports.deserializeGetFileVersionRetentionsQueryParamsArg = exports.serializeGetFileVersionRetentionsQueryParamsArg = exports.deserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField = exports.serializeGetFileVersionRetentionsQueryParamsArgDispositionActionField = exports.FileVersionRetentionsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class FileVersionRetentionsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileVersionRetentions(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_retentions"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileVersionRetentions)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileVersionRetentionById(fileVersionRetentionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_retentions/", fileVersionRetentionId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFileVersionRetention)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FileVersionRetentionsManager = FileVersionRetentionsManager;
function serializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val) {
    return val;
}
exports.serializeGetFileVersionRetentionsQueryParamsArgDispositionActionField = serializeGetFileVersionRetentionsQueryParamsArgDispositionActionField;
function deserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetFileVersionRetentionsQueryParamsArgDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField = deserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField;
function serializeGetFileVersionRetentionsQueryParamsArg(val) {
    return { ["fileId"]: val.fileId, ["fileVersionId"]: val.fileVersionId, ["policyId"]: val.policyId, ["dispositionAction"]: val.dispositionAction == void 0 ? void 0 : serializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val.dispositionAction), ["dispositionBefore"]: val.dispositionBefore, ["dispositionAfter"]: val.dispositionAfter, ["limit"]: val.limit, ["marker"]: val.marker };
}
exports.serializeGetFileVersionRetentionsQueryParamsArg = serializeGetFileVersionRetentionsQueryParamsArg;
function deserializeGetFileVersionRetentionsQueryParamsArg(val) {
    const fileId = (0, json_js_2.isJson)(val.fileId, "string") ? val.fileId : void 0;
    const fileVersionId = (0, json_js_2.isJson)(val.fileVersionId, "string") ? val.fileVersionId : void 0;
    const policyId = (0, json_js_2.isJson)(val.policyId, "string") ? val.policyId : void 0;
    const dispositionAction = val.dispositionAction == void 0 ? void 0 : deserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val.dispositionAction);
    const dispositionBefore = (0, json_js_2.isJson)(val.dispositionBefore, "string") ? val.dispositionBefore : void 0;
    const dispositionAfter = (0, json_js_2.isJson)(val.dispositionAfter, "string") ? val.dispositionAfter : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    return { fileId: fileId, fileVersionId: fileVersionId, policyId: policyId, dispositionAction: dispositionAction, dispositionBefore: dispositionBefore, dispositionAfter: dispositionAfter, limit: limit, marker: marker };
}
exports.deserializeGetFileVersionRetentionsQueryParamsArg = deserializeGetFileVersionRetentionsQueryParamsArg;
//# sourceMappingURL=fileVersionRetentions.generated.js.map