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
exports.newDeserializeUpdateGroupMembershipByIdQueryParamsArg = exports.newSerializeUpdateGroupMembershipByIdQueryParamsArg = exports.newDeserializeUpdateGroupMembershipByIdRequestBodyArg = exports.newSerializeUpdateGroupMembershipByIdRequestBodyArg = exports.newDeserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = exports.newSerializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = exports.newDeserializeUpdateGroupMembershipByIdRequestBodyArgRoleField = exports.newSerializeUpdateGroupMembershipByIdRequestBodyArgRoleField = exports.newDeserializeGetGroupMembershipByIdQueryParamsArg = exports.newSerializeGetGroupMembershipByIdQueryParamsArg = exports.newDeserializeCreateGroupMembershipQueryParamsArg = exports.newSerializeCreateGroupMembershipQueryParamsArg = exports.newDeserializeCreateGroupMembershipRequestBodyArg = exports.newSerializeCreateGroupMembershipRequestBodyArg = exports.newDeserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField = exports.newSerializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField = exports.newDeserializeCreateGroupMembershipRequestBodyArgRoleField = exports.newSerializeCreateGroupMembershipRequestBodyArgRoleField = exports.newDeserializeCreateGroupMembershipRequestBodyArgGroupField = exports.newSerializeCreateGroupMembershipRequestBodyArgGroupField = exports.newDeserializeCreateGroupMembershipRequestBodyArgUserField = exports.newSerializeCreateGroupMembershipRequestBodyArgUserField = exports.newDeserializeGetGroupMembershipsQueryParamsArg = exports.newSerializeGetGroupMembershipsQueryParamsArg = exports.newDeserializeGetUserMembershipsQueryParamsArg = exports.newSerializeGetUserMembershipsQueryParamsArg = exports.MembershipsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class MembershipsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUserMemberships(userId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/memberships"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeGroupMemberships)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupMemberships(groupId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId, "/memberships"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeGroupMemberships)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createGroupMembership(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeGroupMembership)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupMembershipById(groupMembershipId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeGroupMembership)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateGroupMembershipById(groupMembershipId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeGroupMembership)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeGetUserMembershipsQueryParamsArg(val) {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.newSerializeGetUserMembershipsQueryParamsArg = newSerializeGetUserMembershipsQueryParamsArg;
function newDeserializeGetUserMembershipsQueryParamsArg(val) {
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset };
}
exports.newDeserializeGetUserMembershipsQueryParamsArg = newDeserializeGetUserMembershipsQueryParamsArg;
function newSerializeGetGroupMembershipsQueryParamsArg(val) {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.newSerializeGetGroupMembershipsQueryParamsArg = newSerializeGetGroupMembershipsQueryParamsArg;
function newDeserializeGetGroupMembershipsQueryParamsArg(val) {
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset };
}
exports.newDeserializeGetGroupMembershipsQueryParamsArg = newDeserializeGetGroupMembershipsQueryParamsArg;
function newSerializeCreateGroupMembershipRequestBodyArgUserField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeCreateGroupMembershipRequestBodyArgUserField = newSerializeCreateGroupMembershipRequestBodyArgUserField;
function newDeserializeCreateGroupMembershipRequestBodyArgUserField(val) {
    const id = val.id;
    return { id: id };
}
exports.newDeserializeCreateGroupMembershipRequestBodyArgUserField = newDeserializeCreateGroupMembershipRequestBodyArgUserField;
function newSerializeCreateGroupMembershipRequestBodyArgGroupField(val) {
    return { ["id"]: val.id };
}
exports.newSerializeCreateGroupMembershipRequestBodyArgGroupField = newSerializeCreateGroupMembershipRequestBodyArgGroupField;
function newDeserializeCreateGroupMembershipRequestBodyArgGroupField(val) {
    const id = val.id;
    return { id: id };
}
exports.newDeserializeCreateGroupMembershipRequestBodyArgGroupField = newDeserializeCreateGroupMembershipRequestBodyArgGroupField;
function newSerializeCreateGroupMembershipRequestBodyArgRoleField(val) {
    return val;
}
exports.newSerializeCreateGroupMembershipRequestBodyArgRoleField = newSerializeCreateGroupMembershipRequestBodyArgRoleField;
function newDeserializeCreateGroupMembershipRequestBodyArgRoleField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateGroupMembershipRequestBodyArgRoleField = newDeserializeCreateGroupMembershipRequestBodyArgRoleField;
function newSerializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val) {
    return {};
}
exports.newSerializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField = newSerializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField;
function newDeserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val) {
    return {};
}
exports.newDeserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField = newDeserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField;
function newSerializeCreateGroupMembershipRequestBodyArg(val) {
    return { ["user"]: newSerializeCreateGroupMembershipRequestBodyArgUserField(val.user), ["group"]: newSerializeCreateGroupMembershipRequestBodyArgGroupField(val.group), ["role"]: val.role == void 0 ? void 0 : newSerializeCreateGroupMembershipRequestBodyArgRoleField(val.role), ["configurablePermissions"]: val.configurablePermissions == void 0 ? void 0 : newSerializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val.configurablePermissions) };
}
exports.newSerializeCreateGroupMembershipRequestBodyArg = newSerializeCreateGroupMembershipRequestBodyArg;
function newDeserializeCreateGroupMembershipRequestBodyArg(val) {
    const user = newDeserializeCreateGroupMembershipRequestBodyArgUserField(val.user);
    const group = newDeserializeCreateGroupMembershipRequestBodyArgGroupField(val.group);
    const role = val.role == void 0 ? void 0 : newDeserializeCreateGroupMembershipRequestBodyArgRoleField(val.role);
    const configurablePermissions = val.configurablePermissions == void 0 ? void 0 : newDeserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val.configurablePermissions);
    return { user: user, group: group, role: role, configurablePermissions: configurablePermissions };
}
exports.newDeserializeCreateGroupMembershipRequestBodyArg = newDeserializeCreateGroupMembershipRequestBodyArg;
function newSerializeCreateGroupMembershipQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeCreateGroupMembershipQueryParamsArg = newSerializeCreateGroupMembershipQueryParamsArg;
function newDeserializeCreateGroupMembershipQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeCreateGroupMembershipQueryParamsArg = newDeserializeCreateGroupMembershipQueryParamsArg;
function newSerializeGetGroupMembershipByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetGroupMembershipByIdQueryParamsArg = newSerializeGetGroupMembershipByIdQueryParamsArg;
function newDeserializeGetGroupMembershipByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetGroupMembershipByIdQueryParamsArg = newDeserializeGetGroupMembershipByIdQueryParamsArg;
function newSerializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val) {
    return val;
}
exports.newSerializeUpdateGroupMembershipByIdRequestBodyArgRoleField = newSerializeUpdateGroupMembershipByIdRequestBodyArgRoleField;
function newDeserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeUpdateGroupMembershipByIdRequestBodyArgRoleField = newDeserializeUpdateGroupMembershipByIdRequestBodyArgRoleField;
function newSerializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val) {
    return {};
}
exports.newSerializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = newSerializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
function newDeserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val) {
    return {};
}
exports.newDeserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = newDeserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
function newSerializeUpdateGroupMembershipByIdRequestBodyArg(val) {
    return { ["role"]: val.role == void 0 ? void 0 : newSerializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val.role), ["configurablePermissions"]: val.configurablePermissions == void 0 ? void 0 : newSerializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val.configurablePermissions) };
}
exports.newSerializeUpdateGroupMembershipByIdRequestBodyArg = newSerializeUpdateGroupMembershipByIdRequestBodyArg;
function newDeserializeUpdateGroupMembershipByIdRequestBodyArg(val) {
    const role = val.role == void 0 ? void 0 : newDeserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val.role);
    const configurablePermissions = val.configurablePermissions == void 0 ? void 0 : newDeserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val.configurablePermissions);
    return { role: role, configurablePermissions: configurablePermissions };
}
exports.newDeserializeUpdateGroupMembershipByIdRequestBodyArg = newDeserializeUpdateGroupMembershipByIdRequestBodyArg;
function newSerializeUpdateGroupMembershipByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateGroupMembershipByIdQueryParamsArg = newSerializeUpdateGroupMembershipByIdQueryParamsArg;
function newDeserializeUpdateGroupMembershipByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeUpdateGroupMembershipByIdQueryParamsArg = newDeserializeUpdateGroupMembershipByIdQueryParamsArg;
//# sourceMappingURL=memberships.generated.js.map