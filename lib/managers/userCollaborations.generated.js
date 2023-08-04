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
exports.deserializeCreateCollaborationRequestBodyArg = exports.serializeCreateCollaborationRequestBodyArg = exports.deserializeCreateCollaborationRequestBodyArgRoleField = exports.serializeCreateCollaborationRequestBodyArgRoleField = exports.deserializeCreateCollaborationRequestBodyArgAccessibleByField = exports.serializeCreateCollaborationRequestBodyArgAccessibleByField = exports.deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField = exports.serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField = exports.deserializeCreateCollaborationRequestBodyArgItemField = exports.serializeCreateCollaborationRequestBodyArgItemField = exports.deserializeCreateCollaborationRequestBodyArgItemFieldTypeField = exports.serializeCreateCollaborationRequestBodyArgItemFieldTypeField = exports.deserializeUpdateCollaborationByIdRequestBodyArg = exports.serializeUpdateCollaborationByIdRequestBodyArg = exports.deserializeUpdateCollaborationByIdRequestBodyArgStatusField = exports.serializeUpdateCollaborationByIdRequestBodyArgStatusField = exports.deserializeUpdateCollaborationByIdRequestBodyArgRoleField = exports.serializeUpdateCollaborationByIdRequestBodyArgRoleField = exports.UserCollaborationsManager = exports.CreateCollaborationHeadersArg = exports.DeleteCollaborationByIdHeadersArg = exports.UpdateCollaborationByIdHeadersArg = exports.GetCollaborationByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetCollaborationByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetCollaborationByIdHeadersArg = GetCollaborationByIdHeadersArg;
class UpdateCollaborationByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateCollaborationByIdHeadersArg = UpdateCollaborationByIdHeadersArg;
class DeleteCollaborationByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteCollaborationByIdHeadersArg = DeleteCollaborationByIdHeadersArg;
class CreateCollaborationHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateCollaborationHeadersArg = CreateCollaborationHeadersArg;
class UserCollaborationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getCollaborationById(collaborationId, queryParams = {}, headers = new GetCollaborationByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations/", collaborationId), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollaboration)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateCollaborationById(collaborationId, requestBody, headers = new UpdateCollaborationByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations/", collaborationId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateCollaborationByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollaboration)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteCollaborationById(collaborationId, headers = new DeleteCollaborationByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations/", collaborationId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createCollaboration(requestBody, queryParams = {}, headers = new CreateCollaborationHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["notify"]: (0, utils_js_2.toString)(queryParams.notify) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations"), { method: "POST", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateCollaborationRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeCollaboration)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.UserCollaborationsManager = UserCollaborationsManager;
function serializeUpdateCollaborationByIdRequestBodyArgRoleField(val) {
    return val;
}
exports.serializeUpdateCollaborationByIdRequestBodyArgRoleField = serializeUpdateCollaborationByIdRequestBodyArgRoleField;
function deserializeUpdateCollaborationByIdRequestBodyArgRoleField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateCollaborationByIdRequestBodyArgRoleField\"";
    }
    if (val == "editor") {
        return "editor";
    }
    if (val == "viewer") {
        return "viewer";
    }
    if (val == "previewer") {
        return "previewer";
    }
    if (val == "uploader") {
        return "uploader";
    }
    if (val == "previewer uploader") {
        return "previewer uploader";
    }
    if (val == "viewer uploader") {
        return "viewer uploader";
    }
    if (val == "co-owner") {
        return "co-owner";
    }
    if (val == "owner") {
        return "owner";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateCollaborationByIdRequestBodyArgRoleField = deserializeUpdateCollaborationByIdRequestBodyArgRoleField;
function serializeUpdateCollaborationByIdRequestBodyArgStatusField(val) {
    return val;
}
exports.serializeUpdateCollaborationByIdRequestBodyArgStatusField = serializeUpdateCollaborationByIdRequestBodyArgStatusField;
function deserializeUpdateCollaborationByIdRequestBodyArgStatusField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateCollaborationByIdRequestBodyArgStatusField\"";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "accepted") {
        return "accepted";
    }
    if (val == "rejected") {
        return "rejected";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateCollaborationByIdRequestBodyArgStatusField = deserializeUpdateCollaborationByIdRequestBodyArgStatusField;
function serializeUpdateCollaborationByIdRequestBodyArg(val) {
    return { ["role"]: serializeUpdateCollaborationByIdRequestBodyArgRoleField(val.role), ["status"]: val.status == void 0 ? void 0 : serializeUpdateCollaborationByIdRequestBodyArgStatusField(val.status), ["expires_at"]: val.expiresAt, ["can_view_path"]: val.canViewPath };
}
exports.serializeUpdateCollaborationByIdRequestBodyArg = serializeUpdateCollaborationByIdRequestBodyArg;
function deserializeUpdateCollaborationByIdRequestBodyArg(val) {
    const role = deserializeUpdateCollaborationByIdRequestBodyArgRoleField(val.role);
    const status = val.status == void 0 ? void 0 : deserializeUpdateCollaborationByIdRequestBodyArgStatusField(val.status);
    const expiresAt = (0, json_js_3.isJson)(val.expires_at, "string") ? val.expires_at : void 0;
    const canViewPath = (0, json_js_3.isJson)(val.can_view_path, "boolean") ? val.can_view_path : void 0;
    return { role: role, status: status, expiresAt: expiresAt, canViewPath: canViewPath };
}
exports.deserializeUpdateCollaborationByIdRequestBodyArg = deserializeUpdateCollaborationByIdRequestBodyArg;
function serializeCreateCollaborationRequestBodyArgItemFieldTypeField(val) {
    return val;
}
exports.serializeCreateCollaborationRequestBodyArgItemFieldTypeField = serializeCreateCollaborationRequestBodyArgItemFieldTypeField;
function deserializeCreateCollaborationRequestBodyArgItemFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateCollaborationRequestBodyArgItemFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateCollaborationRequestBodyArgItemFieldTypeField = deserializeCreateCollaborationRequestBodyArgItemFieldTypeField;
function serializeCreateCollaborationRequestBodyArgItemField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateCollaborationRequestBodyArgItemFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeCreateCollaborationRequestBodyArgItemField = serializeCreateCollaborationRequestBodyArgItemField;
function deserializeCreateCollaborationRequestBodyArgItemField(val) {
    const type = val.type == void 0 ? void 0 : deserializeCreateCollaborationRequestBodyArgItemFieldTypeField(val.type);
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.deserializeCreateCollaborationRequestBodyArgItemField = deserializeCreateCollaborationRequestBodyArgItemField;
function serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val) {
    return val;
}
exports.serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField = serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField;
function deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateCollaborationRequestBodyArgAccessibleByFieldTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    if (val == "group") {
        return "group";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField = deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField;
function serializeCreateCollaborationRequestBodyArgAccessibleByField(val) {
    return { ["type"]: serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val.type), ["id"]: val.id, ["login"]: val.login };
}
exports.serializeCreateCollaborationRequestBodyArgAccessibleByField = serializeCreateCollaborationRequestBodyArgAccessibleByField;
function deserializeCreateCollaborationRequestBodyArgAccessibleByField(val) {
    const type = deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val.type);
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const login = (0, json_js_3.isJson)(val.login, "string") ? val.login : void 0;
    return { type: type, id: id, login: login };
}
exports.deserializeCreateCollaborationRequestBodyArgAccessibleByField = deserializeCreateCollaborationRequestBodyArgAccessibleByField;
function serializeCreateCollaborationRequestBodyArgRoleField(val) {
    return val;
}
exports.serializeCreateCollaborationRequestBodyArgRoleField = serializeCreateCollaborationRequestBodyArgRoleField;
function deserializeCreateCollaborationRequestBodyArgRoleField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateCollaborationRequestBodyArgRoleField\"";
    }
    if (val == "editor") {
        return "editor";
    }
    if (val == "viewer") {
        return "viewer";
    }
    if (val == "previewer") {
        return "previewer";
    }
    if (val == "uploader") {
        return "uploader";
    }
    if (val == "previewer uploader") {
        return "previewer uploader";
    }
    if (val == "viewer uploader") {
        return "viewer uploader";
    }
    if (val == "co-owner") {
        return "co-owner";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateCollaborationRequestBodyArgRoleField = deserializeCreateCollaborationRequestBodyArgRoleField;
function serializeCreateCollaborationRequestBodyArg(val) {
    return { ["item"]: serializeCreateCollaborationRequestBodyArgItemField(val.item), ["accessible_by"]: serializeCreateCollaborationRequestBodyArgAccessibleByField(val.accessibleBy), ["role"]: serializeCreateCollaborationRequestBodyArgRoleField(val.role), ["can_view_path"]: val.canViewPath, ["expires_at"]: val.expiresAt };
}
exports.serializeCreateCollaborationRequestBodyArg = serializeCreateCollaborationRequestBodyArg;
function deserializeCreateCollaborationRequestBodyArg(val) {
    const item = deserializeCreateCollaborationRequestBodyArgItemField(val.item);
    const accessibleBy = deserializeCreateCollaborationRequestBodyArgAccessibleByField(val.accessible_by);
    const role = deserializeCreateCollaborationRequestBodyArgRoleField(val.role);
    const canViewPath = (0, json_js_3.isJson)(val.can_view_path, "boolean") ? val.can_view_path : void 0;
    const expiresAt = (0, json_js_3.isJson)(val.expires_at, "string") ? val.expires_at : void 0;
    return { item: item, accessibleBy: accessibleBy, role: role, canViewPath: canViewPath, expiresAt: expiresAt };
}
exports.deserializeCreateCollaborationRequestBodyArg = deserializeCreateCollaborationRequestBodyArg;
//# sourceMappingURL=userCollaborations.generated.js.map