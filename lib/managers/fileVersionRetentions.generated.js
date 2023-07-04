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
exports.newDeserializeGetFileVersionRetentionsQueryParamsArg = exports.newSerializeGetFileVersionRetentionsQueryParamsArg = exports.newDeserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField = exports.newSerializeGetFileVersionRetentionsQueryParamsArgDispositionActionField = exports.FileVersionRetentionsManager = void 0;
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
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_retentions"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileVersionRetentions)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileVersionRetentionById(fileVersionRetentionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_retentions/", fileVersionRetentionId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeFileVersionRetention)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FileVersionRetentionsManager = FileVersionRetentionsManager;
function newSerializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val) {
    return val;
}
exports.newSerializeGetFileVersionRetentionsQueryParamsArgDispositionActionField = newSerializeGetFileVersionRetentionsQueryParamsArgDispositionActionField;
function newDeserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val) {
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
exports.newDeserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField = newDeserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField;
function newSerializeGetFileVersionRetentionsQueryParamsArg(val) {
    return { ["fileId"]: val.fileId, ["fileVersionId"]: val.fileVersionId, ["policyId"]: val.policyId, ["dispositionAction"]: val.dispositionAction == void 0 ? void 0 : newSerializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val.dispositionAction), ["dispositionBefore"]: val.dispositionBefore, ["dispositionAfter"]: val.dispositionAfter, ["limit"]: val.limit, ["marker"]: val.marker };
}
exports.newSerializeGetFileVersionRetentionsQueryParamsArg = newSerializeGetFileVersionRetentionsQueryParamsArg;
function newDeserializeGetFileVersionRetentionsQueryParamsArg(val) {
    const fileId = (0, json_js_2.isJson)(val.fileId, "string") ? val.fileId : void 0;
    const fileVersionId = (0, json_js_2.isJson)(val.fileVersionId, "string") ? val.fileVersionId : void 0;
    const policyId = (0, json_js_2.isJson)(val.policyId, "string") ? val.policyId : void 0;
    const dispositionAction = val.dispositionAction == void 0 ? void 0 : newDeserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(val.dispositionAction);
    const dispositionBefore = (0, json_js_2.isJson)(val.dispositionBefore, "string") ? val.dispositionBefore : void 0;
    const dispositionAfter = (0, json_js_2.isJson)(val.dispositionAfter, "string") ? val.dispositionAfter : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    return { fileId: fileId, fileVersionId: fileVersionId, policyId: policyId, dispositionAction: dispositionAction, dispositionBefore: dispositionBefore, dispositionAfter: dispositionAfter, limit: limit, marker: marker };
}
exports.newDeserializeGetFileVersionRetentionsQueryParamsArg = newDeserializeGetFileVersionRetentionsQueryParamsArg;
//# sourceMappingURL=fileVersionRetentions.generated.js.map