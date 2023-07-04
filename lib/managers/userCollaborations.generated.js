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
exports.newDeserializeCreateCollaborationQueryParamsArg = exports.newSerializeCreateCollaborationQueryParamsArg = exports.newDeserializeCreateCollaborationRequestBodyArg = exports.newSerializeCreateCollaborationRequestBodyArg = exports.newDeserializeCreateCollaborationRequestBodyArgRoleField = exports.newSerializeCreateCollaborationRequestBodyArgRoleField = exports.newDeserializeCreateCollaborationRequestBodyArgAccessibleByField = exports.newSerializeCreateCollaborationRequestBodyArgAccessibleByField = exports.newDeserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField = exports.newSerializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField = exports.newDeserializeCreateCollaborationRequestBodyArgItemField = exports.newSerializeCreateCollaborationRequestBodyArgItemField = exports.newDeserializeCreateCollaborationRequestBodyArgItemFieldTypeField = exports.newSerializeCreateCollaborationRequestBodyArgItemFieldTypeField = exports.newDeserializeUpdateCollaborationByIdRequestBodyArg = exports.newSerializeUpdateCollaborationByIdRequestBodyArg = exports.newDeserializeUpdateCollaborationByIdRequestBodyArgStatusField = exports.newSerializeUpdateCollaborationByIdRequestBodyArgStatusField = exports.newDeserializeUpdateCollaborationByIdRequestBodyArgRoleField = exports.newSerializeUpdateCollaborationByIdRequestBodyArgRoleField = exports.newDeserializeGetCollaborationByIdQueryParamsArg = exports.newSerializeGetCollaborationByIdQueryParamsArg = exports.UserCollaborationsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class UserCollaborationsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getCollaborationById(collaborationId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations/", collaborationId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeCollaboration)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateCollaborationById(collaborationId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations/", collaborationId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeCollaboration)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteCollaborationById(collaborationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations/", collaborationId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    createCollaboration(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/collaborations"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeCollaboration)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.UserCollaborationsManager = UserCollaborationsManager;
function newSerializeGetCollaborationByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetCollaborationByIdQueryParamsArg = newSerializeGetCollaborationByIdQueryParamsArg;
function newDeserializeGetCollaborationByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetCollaborationByIdQueryParamsArg = newDeserializeGetCollaborationByIdQueryParamsArg;
function newSerializeUpdateCollaborationByIdRequestBodyArgRoleField(val) {
    return val;
}
exports.newSerializeUpdateCollaborationByIdRequestBodyArgRoleField = newSerializeUpdateCollaborationByIdRequestBodyArgRoleField;
function newDeserializeUpdateCollaborationByIdRequestBodyArgRoleField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeUpdateCollaborationByIdRequestBodyArgRoleField = newDeserializeUpdateCollaborationByIdRequestBodyArgRoleField;
function newSerializeUpdateCollaborationByIdRequestBodyArgStatusField(val) {
    return val;
}
exports.newSerializeUpdateCollaborationByIdRequestBodyArgStatusField = newSerializeUpdateCollaborationByIdRequestBodyArgStatusField;
function newDeserializeUpdateCollaborationByIdRequestBodyArgStatusField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeUpdateCollaborationByIdRequestBodyArgStatusField = newDeserializeUpdateCollaborationByIdRequestBodyArgStatusField;
function newSerializeUpdateCollaborationByIdRequestBodyArg(val) {
    return { ["role"]: newSerializeUpdateCollaborationByIdRequestBodyArgRoleField(val.role), ["status"]: val.status == void 0 ? void 0 : newSerializeUpdateCollaborationByIdRequestBodyArgStatusField(val.status), ["expiresAt"]: val.expiresAt, ["canViewPath"]: val.canViewPath };
}
exports.newSerializeUpdateCollaborationByIdRequestBodyArg = newSerializeUpdateCollaborationByIdRequestBodyArg;
function newDeserializeUpdateCollaborationByIdRequestBodyArg(val) {
    const role = newDeserializeUpdateCollaborationByIdRequestBodyArgRoleField(val.role);
    const status = val.status == void 0 ? void 0 : newDeserializeUpdateCollaborationByIdRequestBodyArgStatusField(val.status);
    const expiresAt = (0, json_js_2.isJson)(val.expiresAt, "string") ? val.expiresAt : void 0;
    const canViewPath = (0, json_js_2.isJson)(val.canViewPath, "boolean") ? val.canViewPath : void 0;
    return { role: role, status: status, expiresAt: expiresAt, canViewPath: canViewPath };
}
exports.newDeserializeUpdateCollaborationByIdRequestBodyArg = newDeserializeUpdateCollaborationByIdRequestBodyArg;
function newSerializeCreateCollaborationRequestBodyArgItemFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateCollaborationRequestBodyArgItemFieldTypeField = newSerializeCreateCollaborationRequestBodyArgItemFieldTypeField;
function newDeserializeCreateCollaborationRequestBodyArgItemFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateCollaborationRequestBodyArgItemFieldTypeField = newDeserializeCreateCollaborationRequestBodyArgItemFieldTypeField;
function newSerializeCreateCollaborationRequestBodyArgItemField(val) {
    return { ["type"]: newSerializeCreateCollaborationRequestBodyArgItemFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeCreateCollaborationRequestBodyArgItemField = newSerializeCreateCollaborationRequestBodyArgItemField;
function newDeserializeCreateCollaborationRequestBodyArgItemField(val) {
    const type = newDeserializeCreateCollaborationRequestBodyArgItemFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.newDeserializeCreateCollaborationRequestBodyArgItemField = newDeserializeCreateCollaborationRequestBodyArgItemField;
function newSerializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField = newSerializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField;
function newDeserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField = newDeserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField;
function newSerializeCreateCollaborationRequestBodyArgAccessibleByField(val) {
    return { ["type"]: newSerializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val.type), ["id"]: val.id, ["login"]: val.login };
}
exports.newSerializeCreateCollaborationRequestBodyArgAccessibleByField = newSerializeCreateCollaborationRequestBodyArgAccessibleByField;
function newDeserializeCreateCollaborationRequestBodyArgAccessibleByField(val) {
    const type = newDeserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val.type);
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const login = (0, json_js_2.isJson)(val.login, "string") ? val.login : void 0;
    return { type: type, id: id, login: login };
}
exports.newDeserializeCreateCollaborationRequestBodyArgAccessibleByField = newDeserializeCreateCollaborationRequestBodyArgAccessibleByField;
function newSerializeCreateCollaborationRequestBodyArgRoleField(val) {
    return val;
}
exports.newSerializeCreateCollaborationRequestBodyArgRoleField = newSerializeCreateCollaborationRequestBodyArgRoleField;
function newDeserializeCreateCollaborationRequestBodyArgRoleField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateCollaborationRequestBodyArgRoleField = newDeserializeCreateCollaborationRequestBodyArgRoleField;
function newSerializeCreateCollaborationRequestBodyArg(val) {
    return { ["item"]: newSerializeCreateCollaborationRequestBodyArgItemField(val.item), ["accessibleBy"]: newSerializeCreateCollaborationRequestBodyArgAccessibleByField(val.accessibleBy), ["role"]: newSerializeCreateCollaborationRequestBodyArgRoleField(val.role), ["canViewPath"]: val.canViewPath, ["expiresAt"]: val.expiresAt };
}
exports.newSerializeCreateCollaborationRequestBodyArg = newSerializeCreateCollaborationRequestBodyArg;
function newDeserializeCreateCollaborationRequestBodyArg(val) {
    const item = newDeserializeCreateCollaborationRequestBodyArgItemField(val.item);
    const accessibleBy = newDeserializeCreateCollaborationRequestBodyArgAccessibleByField(val.accessibleBy);
    const role = newDeserializeCreateCollaborationRequestBodyArgRoleField(val.role);
    const canViewPath = (0, json_js_2.isJson)(val.canViewPath, "boolean") ? val.canViewPath : void 0;
    const expiresAt = (0, json_js_2.isJson)(val.expiresAt, "string") ? val.expiresAt : void 0;
    return { item: item, accessibleBy: accessibleBy, role: role, canViewPath: canViewPath, expiresAt: expiresAt };
}
exports.newDeserializeCreateCollaborationRequestBodyArg = newDeserializeCreateCollaborationRequestBodyArg;
function newSerializeCreateCollaborationQueryParamsArg(val) {
    return { ["fields"]: val.fields, ["notify"]: val.notify };
}
exports.newSerializeCreateCollaborationQueryParamsArg = newSerializeCreateCollaborationQueryParamsArg;
function newDeserializeCreateCollaborationQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const notify = (0, json_js_2.isJson)(val.notify, "boolean") ? val.notify : void 0;
    return { fields: fields, notify: notify };
}
exports.newDeserializeCreateCollaborationQueryParamsArg = newDeserializeCreateCollaborationQueryParamsArg;
//# sourceMappingURL=userCollaborations.generated.js.map