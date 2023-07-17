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
exports.deserializePromoteFileVersionQueryParamsArg = exports.serializePromoteFileVersionQueryParamsArg = exports.deserializePromoteFileVersionRequestBodyArg = exports.serializePromoteFileVersionRequestBodyArg = exports.deserializePromoteFileVersionRequestBodyArgTypeField = exports.serializePromoteFileVersionRequestBodyArgTypeField = exports.deserializeDeleteFileVersionByIdHeadersArg = exports.serializeDeleteFileVersionByIdHeadersArg = exports.deserializeUpdateFileVersionByIdRequestBodyArg = exports.serializeUpdateFileVersionByIdRequestBodyArg = exports.deserializeGetFileVersionByIdQueryParamsArg = exports.serializeGetFileVersionByIdQueryParamsArg = exports.deserializeGetFileVersionsQueryParamsArg = exports.serializeGetFileVersionsQueryParamsArg = exports.FileVersionsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class FileVersionsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileVersions(fileId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetFileVersionsQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFileVersions)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileVersionById(fileId, fileVersionId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetFileVersionByIdQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFileVersionFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileVersionById(fileId, fileVersionId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId), { method: "PUT", body: (0, json_js_2.serializeJson)(serializeUpdateFileVersionByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFileVersionFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileVersionById(fileId, fileVersionId, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId), { method: "DELETE", headers: (0, utils_js_1.prepareParams)(serializeDeleteFileVersionByIdHeadersArg(headers)), auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    promoteFileVersion(fileId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/current"), { method: "POST", params: (0, utils_js_1.prepareParams)(serializePromoteFileVersionQueryParamsArg(queryParams)), body: (0, json_js_2.serializeJson)(serializePromoteFileVersionRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeFileVersionFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FileVersionsManager = FileVersionsManager;
function serializeGetFileVersionsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.serializeGetFileVersionsQueryParamsArg = serializeGetFileVersionsQueryParamsArg;
function deserializeGetFileVersionsQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_3.isJson)(val.offset, "number") ? val.offset : void 0;
    return { fields: fields, limit: limit, offset: offset };
}
exports.deserializeGetFileVersionsQueryParamsArg = deserializeGetFileVersionsQueryParamsArg;
function serializeGetFileVersionByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetFileVersionByIdQueryParamsArg = serializeGetFileVersionByIdQueryParamsArg;
function deserializeGetFileVersionByIdQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetFileVersionByIdQueryParamsArg = deserializeGetFileVersionByIdQueryParamsArg;
function serializeUpdateFileVersionByIdRequestBodyArg(val) {
    return { ["trashed_at"]: val.trashedAt };
}
exports.serializeUpdateFileVersionByIdRequestBodyArg = serializeUpdateFileVersionByIdRequestBodyArg;
function deserializeUpdateFileVersionByIdRequestBodyArg(val) {
    const trashedAt = (0, json_js_3.isJson)(val.trashed_at, "string") ? val.trashed_at : void 0;
    return { trashedAt: trashedAt };
}
exports.deserializeUpdateFileVersionByIdRequestBodyArg = deserializeUpdateFileVersionByIdRequestBodyArg;
function serializeDeleteFileVersionByIdHeadersArg(val) {
    return { ["if-match"]: val.ifMatch };
}
exports.serializeDeleteFileVersionByIdHeadersArg = serializeDeleteFileVersionByIdHeadersArg;
function deserializeDeleteFileVersionByIdHeadersArg(val) {
    const ifMatch = (0, json_js_3.isJson)(val["if-match"], "string") ? val["if-match"] : void 0;
    return { ifMatch: ifMatch };
}
exports.deserializeDeleteFileVersionByIdHeadersArg = deserializeDeleteFileVersionByIdHeadersArg;
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
function serializePromoteFileVersionQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializePromoteFileVersionQueryParamsArg = serializePromoteFileVersionQueryParamsArg;
function deserializePromoteFileVersionQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializePromoteFileVersionQueryParamsArg = deserializePromoteFileVersionQueryParamsArg;
//# sourceMappingURL=fileVersions.generated.js.map