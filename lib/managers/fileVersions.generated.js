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
exports.newDeserializePromoteFileVersionQueryParamsArg = exports.newSerializePromoteFileVersionQueryParamsArg = exports.newDeserializePromoteFileVersionRequestBodyArg = exports.newSerializePromoteFileVersionRequestBodyArg = exports.newDeserializePromoteFileVersionRequestBodyArgTypeField = exports.newSerializePromoteFileVersionRequestBodyArgTypeField = exports.newDeserializeDeleteFileVersionByIdHeadersArg = exports.newSerializeDeleteFileVersionByIdHeadersArg = exports.newDeserializeUpdateFileVersionByIdRequestBodyArg = exports.newSerializeUpdateFileVersionByIdRequestBodyArg = exports.newDeserializeGetFileVersionByIdQueryParamsArg = exports.newSerializeGetFileVersionByIdQueryParamsArg = exports.newDeserializeGetFileVersionsQueryParamsArg = exports.newSerializeGetFileVersionsQueryParamsArg = exports.FileVersionsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class FileVersionsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileVersions(fileId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeFileVersions)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFileVersionById(fileId, fileVersionId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeFileVersionFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateFileVersionById(fileId, fileVersionId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeFileVersionFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileVersionById(fileId, fileVersionId, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId), { method: "DELETE", headers: (0, utils_js_1.toMap)(headers), auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    promoteFileVersion(fileId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/versions/current"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeFileVersionFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.FileVersionsManager = FileVersionsManager;
function newSerializeGetFileVersionsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.newSerializeGetFileVersionsQueryParamsArg = newSerializeGetFileVersionsQueryParamsArg;
function newDeserializeGetFileVersionsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    return { fields: fields, limit: limit, offset: offset };
}
exports.newDeserializeGetFileVersionsQueryParamsArg = newDeserializeGetFileVersionsQueryParamsArg;
function newSerializeGetFileVersionByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetFileVersionByIdQueryParamsArg = newSerializeGetFileVersionByIdQueryParamsArg;
function newDeserializeGetFileVersionByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetFileVersionByIdQueryParamsArg = newDeserializeGetFileVersionByIdQueryParamsArg;
function newSerializeUpdateFileVersionByIdRequestBodyArg(val) {
    return { ["trashedAt"]: val.trashedAt };
}
exports.newSerializeUpdateFileVersionByIdRequestBodyArg = newSerializeUpdateFileVersionByIdRequestBodyArg;
function newDeserializeUpdateFileVersionByIdRequestBodyArg(val) {
    const trashedAt = (0, json_js_2.isJson)(val.trashedAt, "string") ? val.trashedAt : void 0;
    return { trashedAt: trashedAt };
}
exports.newDeserializeUpdateFileVersionByIdRequestBodyArg = newDeserializeUpdateFileVersionByIdRequestBodyArg;
function newSerializeDeleteFileVersionByIdHeadersArg(val) {
    return { ["ifMatch"]: val.ifMatch };
}
exports.newSerializeDeleteFileVersionByIdHeadersArg = newSerializeDeleteFileVersionByIdHeadersArg;
function newDeserializeDeleteFileVersionByIdHeadersArg(val) {
    const ifMatch = (0, json_js_2.isJson)(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch };
}
exports.newDeserializeDeleteFileVersionByIdHeadersArg = newDeserializeDeleteFileVersionByIdHeadersArg;
function newSerializePromoteFileVersionRequestBodyArgTypeField(val) {
    return val;
}
exports.newSerializePromoteFileVersionRequestBodyArgTypeField = newSerializePromoteFileVersionRequestBodyArgTypeField;
function newDeserializePromoteFileVersionRequestBodyArgTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"PromoteFileVersionRequestBodyArgTypeField\"";
    }
    if (val == "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializePromoteFileVersionRequestBodyArgTypeField = newDeserializePromoteFileVersionRequestBodyArgTypeField;
function newSerializePromoteFileVersionRequestBodyArg(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializePromoteFileVersionRequestBodyArgTypeField(val.type) };
}
exports.newSerializePromoteFileVersionRequestBodyArg = newSerializePromoteFileVersionRequestBodyArg;
function newDeserializePromoteFileVersionRequestBodyArg(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : newDeserializePromoteFileVersionRequestBodyArgTypeField(val.type);
    return { id: id, type: type };
}
exports.newDeserializePromoteFileVersionRequestBodyArg = newDeserializePromoteFileVersionRequestBodyArg;
function newSerializePromoteFileVersionQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializePromoteFileVersionQueryParamsArg = newSerializePromoteFileVersionQueryParamsArg;
function newDeserializePromoteFileVersionQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializePromoteFileVersionQueryParamsArg = newDeserializePromoteFileVersionQueryParamsArg;
//# sourceMappingURL=fileVersions.generated.js.map