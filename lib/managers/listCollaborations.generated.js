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
exports.deserializeGetGroupCollaborationsQueryParamsArg = exports.serializeGetGroupCollaborationsQueryParamsArg = exports.deserializeGetCollaborationsQueryParamsArg = exports.serializeGetCollaborationsQueryParamsArg = exports.deserializeGetCollaborationsQueryParamsArgStatusField = exports.serializeGetCollaborationsQueryParamsArgStatusField = exports.deserializeGetFolderCollaborationsQueryParamsArg = exports.serializeGetFolderCollaborationsQueryParamsArg = exports.deserializeGetFileCollaborationsQueryParamsArg = exports.serializeGetFileCollaborationsQueryParamsArg = exports.ListCollaborationsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class ListCollaborationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileCollaborations(fileId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["marker"]: (0, utils_js_2.toString)(queryParams.marker) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/collaborations"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollaborations)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFolderCollaborations(folderId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/collaborations"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollaborations)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCollaborations(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["status"]: (0, utils_js_2.toString)(queryParams.status), ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollaborations)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupCollaborations(groupId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["offset"]: (0, utils_js_2.toString)(queryParams.offset) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId, "/collaborations"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollaborations)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ListCollaborationsManager = ListCollaborationsManager;
function serializeGetFileCollaborationsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["marker"]: val.marker };
}
exports.serializeGetFileCollaborationsQueryParamsArg = serializeGetFileCollaborationsQueryParamsArg;
function deserializeGetFileCollaborationsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    return { fields: fields, limit: limit, marker: marker };
}
exports.deserializeGetFileCollaborationsQueryParamsArg = deserializeGetFileCollaborationsQueryParamsArg;
function serializeGetFolderCollaborationsQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetFolderCollaborationsQueryParamsArg = serializeGetFolderCollaborationsQueryParamsArg;
function deserializeGetFolderCollaborationsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetFolderCollaborationsQueryParamsArg = deserializeGetFolderCollaborationsQueryParamsArg;
function serializeGetCollaborationsQueryParamsArgStatusField(val) {
    return val;
}
exports.serializeGetCollaborationsQueryParamsArgStatusField = serializeGetCollaborationsQueryParamsArgStatusField;
function deserializeGetCollaborationsQueryParamsArgStatusField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetCollaborationsQueryParamsArgStatusField\"";
    }
    if (val == "pending") {
        return "pending";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetCollaborationsQueryParamsArgStatusField = deserializeGetCollaborationsQueryParamsArgStatusField;
function serializeGetCollaborationsQueryParamsArg(val) {
    return { ["status"]: serializeGetCollaborationsQueryParamsArgStatusField(val.status), ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
exports.serializeGetCollaborationsQueryParamsArg = serializeGetCollaborationsQueryParamsArg;
function deserializeGetCollaborationsQueryParamsArg(val) {
    const status = deserializeGetCollaborationsQueryParamsArgStatusField(val.status);
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { status: status, fields: fields, offset: offset, limit: limit };
}
exports.deserializeGetCollaborationsQueryParamsArg = deserializeGetCollaborationsQueryParamsArg;
function serializeGetGroupCollaborationsQueryParamsArg(val) {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.serializeGetGroupCollaborationsQueryParamsArg = serializeGetGroupCollaborationsQueryParamsArg;
function deserializeGetGroupCollaborationsQueryParamsArg(val) {
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset };
}
exports.deserializeGetGroupCollaborationsQueryParamsArg = deserializeGetGroupCollaborationsQueryParamsArg;
//# sourceMappingURL=listCollaborations.generated.js.map