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
exports.newDeserializeGetGroupCollaborationsQueryParamsArg = exports.newSerializeGetGroupCollaborationsQueryParamsArg = exports.newDeserializeGetCollaborationsQueryParamsArg = exports.newSerializeGetCollaborationsQueryParamsArg = exports.newDeserializeGetCollaborationsQueryParamsArgStatusField = exports.newSerializeGetCollaborationsQueryParamsArgStatusField = exports.newDeserializeGetFolderCollaborationsQueryParamsArg = exports.newSerializeGetFolderCollaborationsQueryParamsArg = exports.newDeserializeGetFileCollaborationsQueryParamsArg = exports.newSerializeGetFileCollaborationsQueryParamsArg = exports.ListCollaborationsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class ListCollaborationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileCollaborations(fileId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/collaborations"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeCollaborations)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getFolderCollaborations(folderId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/collaborations"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeCollaborations)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getCollaborations(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeCollaborations)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupCollaborations(groupId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId, "/collaborations"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeCollaborations)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ListCollaborationsManager = ListCollaborationsManager;
function newSerializeGetFileCollaborationsQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["limit"]: val.limit, ["marker"]: val.marker };
}
exports.newSerializeGetFileCollaborationsQueryParamsArg = newSerializeGetFileCollaborationsQueryParamsArg;
function newDeserializeGetFileCollaborationsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    return { fields: fields, limit: limit, marker: marker };
}
exports.newDeserializeGetFileCollaborationsQueryParamsArg = newDeserializeGetFileCollaborationsQueryParamsArg;
function newSerializeGetFolderCollaborationsQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetFolderCollaborationsQueryParamsArg = newSerializeGetFolderCollaborationsQueryParamsArg;
function newDeserializeGetFolderCollaborationsQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetFolderCollaborationsQueryParamsArg = newDeserializeGetFolderCollaborationsQueryParamsArg;
function newSerializeGetCollaborationsQueryParamsArgStatusField(val) {
    return val;
}
exports.newSerializeGetCollaborationsQueryParamsArgStatusField = newSerializeGetCollaborationsQueryParamsArgStatusField;
function newDeserializeGetCollaborationsQueryParamsArgStatusField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetCollaborationsQueryParamsArgStatusField\"";
    }
    if (val == "pending") {
        return "pending";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeGetCollaborationsQueryParamsArgStatusField = newDeserializeGetCollaborationsQueryParamsArgStatusField;
function newSerializeGetCollaborationsQueryParamsArg(val) {
    return { ["status"]: newSerializeGetCollaborationsQueryParamsArgStatusField(val.status), ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit };
}
exports.newSerializeGetCollaborationsQueryParamsArg = newSerializeGetCollaborationsQueryParamsArg;
function newDeserializeGetCollaborationsQueryParamsArg(val) {
    const status = newDeserializeGetCollaborationsQueryParamsArgStatusField(val.status);
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { status: status, fields: fields, offset: offset, limit: limit };
}
exports.newDeserializeGetCollaborationsQueryParamsArg = newDeserializeGetCollaborationsQueryParamsArg;
function newSerializeGetGroupCollaborationsQueryParamsArg(val) {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.newSerializeGetGroupCollaborationsQueryParamsArg = newSerializeGetGroupCollaborationsQueryParamsArg;
function newDeserializeGetGroupCollaborationsQueryParamsArg(val) {
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset };
}
exports.newDeserializeGetGroupCollaborationsQueryParamsArg = newDeserializeGetGroupCollaborationsQueryParamsArg;
//# sourceMappingURL=listCollaborations.generated.js.map