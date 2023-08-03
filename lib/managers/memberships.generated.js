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
exports.deserializeUpdateGroupMembershipByIdRequestBodyArg = exports.serializeUpdateGroupMembershipByIdRequestBodyArg = exports.deserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = exports.serializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = exports.deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField = exports.serializeUpdateGroupMembershipByIdRequestBodyArgRoleField = exports.deserializeCreateGroupMembershipRequestBodyArg = exports.serializeCreateGroupMembershipRequestBodyArg = exports.deserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField = exports.serializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField = exports.deserializeCreateGroupMembershipRequestBodyArgRoleField = exports.serializeCreateGroupMembershipRequestBodyArgRoleField = exports.deserializeCreateGroupMembershipRequestBodyArgGroupField = exports.serializeCreateGroupMembershipRequestBodyArgGroupField = exports.deserializeCreateGroupMembershipRequestBodyArgUserField = exports.serializeCreateGroupMembershipRequestBodyArgUserField = exports.MembershipsManager = exports.DeleteGroupMembershipByIdHeadersArg = exports.UpdateGroupMembershipByIdHeadersArg = exports.GetGroupMembershipByIdHeadersArg = exports.CreateGroupMembershipHeadersArg = exports.GetGroupMembershipsHeadersArg = exports.GetUserMembershipsHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetUserMembershipsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetUserMembershipsHeadersArg = GetUserMembershipsHeadersArg;
class GetGroupMembershipsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetGroupMembershipsHeadersArg = GetGroupMembershipsHeadersArg;
class CreateGroupMembershipHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateGroupMembershipHeadersArg = CreateGroupMembershipHeadersArg;
class GetGroupMembershipByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetGroupMembershipByIdHeadersArg = GetGroupMembershipByIdHeadersArg;
class UpdateGroupMembershipByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateGroupMembershipByIdHeadersArg = UpdateGroupMembershipByIdHeadersArg;
class DeleteGroupMembershipByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteGroupMembershipByIdHeadersArg = DeleteGroupMembershipByIdHeadersArg;
class MembershipsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUserMemberships(userId, queryParams = {}, headers = new GetUserMembershipsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["offset"]: (0, utils_js_2.toString)(queryParams.offset) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/memberships"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeGroupMemberships)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupMemberships(groupId, queryParams = {}, headers = new GetGroupMembershipsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["offset"]: (0, utils_js_2.toString)(queryParams.offset) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId, "/memberships"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeGroupMemberships)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createGroupMembership(requestBody, queryParams = {}, headers = new CreateGroupMembershipHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships"), { method: "POST", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateGroupMembershipRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeGroupMembership)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupMembershipById(groupMembershipId, queryParams = {}, headers = new GetGroupMembershipByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeGroupMembership)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateGroupMembershipById(groupMembershipId, requestBody, queryParams = {}, headers = new UpdateGroupMembershipByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateGroupMembershipByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeGroupMembership)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteGroupMembershipById(groupMembershipId, headers = new DeleteGroupMembershipByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.MembershipsManager = MembershipsManager;
function serializeCreateGroupMembershipRequestBodyArgUserField(val) {
    return { ["id"]: val.id };
}
exports.serializeCreateGroupMembershipRequestBodyArgUserField = serializeCreateGroupMembershipRequestBodyArgUserField;
function deserializeCreateGroupMembershipRequestBodyArgUserField(val) {
    const id = val.id;
    return { id: id };
}
exports.deserializeCreateGroupMembershipRequestBodyArgUserField = deserializeCreateGroupMembershipRequestBodyArgUserField;
function serializeCreateGroupMembershipRequestBodyArgGroupField(val) {
    return { ["id"]: val.id };
}
exports.serializeCreateGroupMembershipRequestBodyArgGroupField = serializeCreateGroupMembershipRequestBodyArgGroupField;
function deserializeCreateGroupMembershipRequestBodyArgGroupField(val) {
    const id = val.id;
    return { id: id };
}
exports.deserializeCreateGroupMembershipRequestBodyArgGroupField = deserializeCreateGroupMembershipRequestBodyArgGroupField;
function serializeCreateGroupMembershipRequestBodyArgRoleField(val) {
    return val;
}
exports.serializeCreateGroupMembershipRequestBodyArgRoleField = serializeCreateGroupMembershipRequestBodyArgRoleField;
function deserializeCreateGroupMembershipRequestBodyArgRoleField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateGroupMembershipRequestBodyArgRoleField\"";
    }
    if (val == "member") {
        return "member";
    }
    if (val == "admin") {
        return "admin";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateGroupMembershipRequestBodyArgRoleField = deserializeCreateGroupMembershipRequestBodyArgRoleField;
function serializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val) {
    return {};
}
exports.serializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField = serializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField;
function deserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val) {
    return {};
}
exports.deserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField = deserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField;
function serializeCreateGroupMembershipRequestBodyArg(val) {
    return { ["user"]: serializeCreateGroupMembershipRequestBodyArgUserField(val.user), ["group"]: serializeCreateGroupMembershipRequestBodyArgGroupField(val.group), ["role"]: val.role == void 0 ? void 0 : serializeCreateGroupMembershipRequestBodyArgRoleField(val.role), ["configurable_permissions"]: val.configurablePermissions == void 0 ? void 0 : serializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val.configurablePermissions) };
}
exports.serializeCreateGroupMembershipRequestBodyArg = serializeCreateGroupMembershipRequestBodyArg;
function deserializeCreateGroupMembershipRequestBodyArg(val) {
    const user = deserializeCreateGroupMembershipRequestBodyArgUserField(val.user);
    const group = deserializeCreateGroupMembershipRequestBodyArgGroupField(val.group);
    const role = val.role == void 0 ? void 0 : deserializeCreateGroupMembershipRequestBodyArgRoleField(val.role);
    const configurablePermissions = val.configurable_permissions == void 0 ? void 0 : deserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val.configurable_permissions);
    return { user: user, group: group, role: role, configurablePermissions: configurablePermissions };
}
exports.deserializeCreateGroupMembershipRequestBodyArg = deserializeCreateGroupMembershipRequestBodyArg;
function serializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val) {
    return val;
}
exports.serializeUpdateGroupMembershipByIdRequestBodyArgRoleField = serializeUpdateGroupMembershipByIdRequestBodyArgRoleField;
function deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateGroupMembershipByIdRequestBodyArgRoleField\"";
    }
    if (val == "member") {
        return "member";
    }
    if (val == "admin") {
        return "admin";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField = deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField;
function serializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val) {
    return {};
}
exports.serializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = serializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
function deserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val) {
    return {};
}
exports.deserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = deserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
function serializeUpdateGroupMembershipByIdRequestBodyArg(val) {
    return { ["role"]: val.role == void 0 ? void 0 : serializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val.role), ["configurable_permissions"]: val.configurablePermissions == void 0 ? void 0 : serializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val.configurablePermissions) };
}
exports.serializeUpdateGroupMembershipByIdRequestBodyArg = serializeUpdateGroupMembershipByIdRequestBodyArg;
function deserializeUpdateGroupMembershipByIdRequestBodyArg(val) {
    const role = val.role == void 0 ? void 0 : deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val.role);
    const configurablePermissions = val.configurable_permissions == void 0 ? void 0 : deserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val.configurable_permissions);
    return { role: role, configurablePermissions: configurablePermissions };
}
exports.deserializeUpdateGroupMembershipByIdRequestBodyArg = deserializeUpdateGroupMembershipByIdRequestBodyArg;
//# sourceMappingURL=memberships.generated.js.map