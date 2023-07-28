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
exports.deserializeUpdateGroupMembershipByIdQueryParamsArg = exports.serializeUpdateGroupMembershipByIdQueryParamsArg = exports.deserializeUpdateGroupMembershipByIdRequestBodyArg = exports.serializeUpdateGroupMembershipByIdRequestBodyArg = exports.deserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = exports.serializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = exports.deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField = exports.serializeUpdateGroupMembershipByIdRequestBodyArgRoleField = exports.deserializeGetGroupMembershipByIdQueryParamsArg = exports.serializeGetGroupMembershipByIdQueryParamsArg = exports.deserializeCreateGroupMembershipQueryParamsArg = exports.serializeCreateGroupMembershipQueryParamsArg = exports.deserializeCreateGroupMembershipRequestBodyArg = exports.serializeCreateGroupMembershipRequestBodyArg = exports.deserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField = exports.serializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField = exports.deserializeCreateGroupMembershipRequestBodyArgRoleField = exports.serializeCreateGroupMembershipRequestBodyArgRoleField = exports.deserializeCreateGroupMembershipRequestBodyArgGroupField = exports.serializeCreateGroupMembershipRequestBodyArgGroupField = exports.deserializeCreateGroupMembershipRequestBodyArgUserField = exports.serializeCreateGroupMembershipRequestBodyArgUserField = exports.deserializeGetGroupMembershipsQueryParamsArg = exports.serializeGetGroupMembershipsQueryParamsArg = exports.deserializeGetUserMembershipsQueryParamsArg = exports.serializeGetUserMembershipsQueryParamsArg = exports.MembershipsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class MembershipsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUserMemberships(userId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["offset"]: (0, utils_js_2.toString)(queryParams.offset) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/memberships"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeGroupMemberships)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupMemberships(groupId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["offset"]: (0, utils_js_2.toString)(queryParams.offset) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId, "/memberships"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeGroupMemberships)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createGroupMembership(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships"), { method: "POST", params: queryParamsMap, body: (0, json_js_2.serializeJson)(serializeCreateGroupMembershipRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeGroupMembership)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupMembershipById(groupMembershipId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeGroupMembership)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateGroupMembershipById(groupMembershipId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "PUT", params: queryParamsMap, body: (0, json_js_2.serializeJson)(serializeUpdateGroupMembershipByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeGroupMembership)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteGroupMembershipById(groupMembershipId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.MembershipsManager = MembershipsManager;
function serializeGetUserMembershipsQueryParamsArg(val) {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.serializeGetUserMembershipsQueryParamsArg = serializeGetUserMembershipsQueryParamsArg;
function deserializeGetUserMembershipsQueryParamsArg(val) {
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_3.isJson)(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset };
}
exports.deserializeGetUserMembershipsQueryParamsArg = deserializeGetUserMembershipsQueryParamsArg;
function serializeGetGroupMembershipsQueryParamsArg(val) {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.serializeGetGroupMembershipsQueryParamsArg = serializeGetGroupMembershipsQueryParamsArg;
function deserializeGetGroupMembershipsQueryParamsArg(val) {
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_3.isJson)(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset };
}
exports.deserializeGetGroupMembershipsQueryParamsArg = deserializeGetGroupMembershipsQueryParamsArg;
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
function serializeCreateGroupMembershipQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeCreateGroupMembershipQueryParamsArg = serializeCreateGroupMembershipQueryParamsArg;
function deserializeCreateGroupMembershipQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeCreateGroupMembershipQueryParamsArg = deserializeCreateGroupMembershipQueryParamsArg;
function serializeGetGroupMembershipByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetGroupMembershipByIdQueryParamsArg = serializeGetGroupMembershipByIdQueryParamsArg;
function deserializeGetGroupMembershipByIdQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetGroupMembershipByIdQueryParamsArg = deserializeGetGroupMembershipByIdQueryParamsArg;
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
function serializeUpdateGroupMembershipByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateGroupMembershipByIdQueryParamsArg = serializeUpdateGroupMembershipByIdQueryParamsArg;
function deserializeUpdateGroupMembershipByIdQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeUpdateGroupMembershipByIdQueryParamsArg = deserializeUpdateGroupMembershipByIdQueryParamsArg;
//# sourceMappingURL=memberships.generated.js.map