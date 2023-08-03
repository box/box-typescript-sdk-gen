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
exports.deserializePromoteFileVersionRequestBodyArg = exports.serializePromoteFileVersionRequestBodyArg = exports.deserializePromoteFileVersionRequestBodyArgTypeField = exports.serializePromoteFileVersionRequestBodyArgTypeField = exports.deserializeUpdateFileVersionByIdRequestBodyArg = exports.serializeUpdateFileVersionByIdRequestBodyArg = exports.FileVersionsManager = exports.PromoteFileVersionHeadersArg = exports.DeleteFileVersionByIdHeadersArg = exports.UpdateFileVersionByIdHeadersArg = exports.GetFileVersionByIdHeadersArg = exports.GetFileVersionsHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetFileVersionsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileVersionsHeadersArg = GetFileVersionsHeadersArg;
class GetFileVersionByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileVersionByIdHeadersArg = GetFileVersionByIdHeadersArg;
class UpdateFileVersionByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateFileVersionByIdHeadersArg = UpdateFileVersionByIdHeadersArg;
class DeleteFileVersionByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteFileVersionByIdHeadersArg = DeleteFileVersionByIdHeadersArg;
class PromoteFileVersionHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.PromoteFileVersionHeadersArg = PromoteFileVersionHeadersArg;
class FileVersionsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileVersions(fileId, queryParams = {}, headers = new GetFileVersionsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["offset"]: (0, utils_js_2.toString)(queryParams.offset) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileVersions)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileVersionById(fileId, fileVersionId, queryParams = {}, headers = new GetFileVersionByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFileVersionFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileVersionById(fileId, fileVersionId, requestBody, headers = new UpdateFileVersionByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateFileVersionByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFileVersionFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileVersionById(fileId, fileVersionId, headers = new DeleteFileVersionByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ["if-match"]: (0, utils_js_2.toString)(headers.ifMatch) }, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    promoteFileVersion(fileId, requestBody, queryParams = {}, headers = new PromoteFileVersionHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/current"), { method: "POST", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializePromoteFileVersionRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFileVersionFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FileVersionsManager = FileVersionsManager;
function serializeUpdateFileVersionByIdRequestBodyArg(val) {
    return { ["trashed_at"]: val.trashedAt };
}
exports.serializeUpdateFileVersionByIdRequestBodyArg = serializeUpdateFileVersionByIdRequestBodyArg;
function deserializeUpdateFileVersionByIdRequestBodyArg(val) {
    const trashedAt = (0, json_js_3.isJson)(val.trashed_at, "string") ? val.trashed_at : void 0;
    return { trashedAt: trashedAt };
}
exports.deserializeUpdateFileVersionByIdRequestBodyArg = deserializeUpdateFileVersionByIdRequestBodyArg;
function serializePromoteFileVersionRequestBodyArgTypeField(val) {
    return val;
}
exports.serializePromoteFileVersionRequestBodyArgTypeField = serializePromoteFileVersionRequestBodyArgTypeField;
function deserializePromoteFileVersionRequestBodyArgTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"PromoteFileVersionRequestBodyArgTypeField\"";
    }
    if (val == "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializePromoteFileVersionRequestBodyArgTypeField = deserializePromoteFileVersionRequestBodyArgTypeField;
function serializePromoteFileVersionRequestBodyArg(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializePromoteFileVersionRequestBodyArgTypeField(val.type) };
}
exports.serializePromoteFileVersionRequestBodyArg = serializePromoteFileVersionRequestBodyArg;
function deserializePromoteFileVersionRequestBodyArg(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : deserializePromoteFileVersionRequestBodyArgTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializePromoteFileVersionRequestBodyArg = deserializePromoteFileVersionRequestBodyArg;
//# sourceMappingURL=fileVersions.generated.js.map