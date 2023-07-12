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
exports.deserializeUpdateGroupByIdQueryParamsArg = exports.serializeUpdateGroupByIdQueryParamsArg = exports.deserializeUpdateGroupByIdRequestBodyArg = exports.serializeUpdateGroupByIdRequestBodyArg = exports.deserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = exports.serializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = exports.deserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField = exports.serializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField = exports.deserializeGetGroupByIdQueryParamsArg = exports.serializeGetGroupByIdQueryParamsArg = exports.deserializeCreateGroupQueryParamsArg = exports.serializeCreateGroupQueryParamsArg = exports.deserializeCreateGroupRequestBodyArg = exports.serializeCreateGroupRequestBodyArg = exports.deserializeCreateGroupRequestBodyArgMemberViewabilityLevelField = exports.serializeCreateGroupRequestBodyArgMemberViewabilityLevelField = exports.deserializeCreateGroupRequestBodyArgInvitabilityLevelField = exports.serializeCreateGroupRequestBodyArgInvitabilityLevelField = exports.deserializeGetGroupsQueryParamsArg = exports.serializeGetGroupsQueryParamsArg = exports.GroupsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class GroupsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getGroups(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeGroups)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createGroup(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups"), { method: "POST", params: (0, utils_js_1.prepareParams)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeGroup)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupById(groupId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeGroupFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateGroupById(groupId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId), { method: "PUT", params: (0, utils_js_1.prepareParams)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeGroupFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteGroupById(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.GroupsManager = GroupsManager;
function serializeGetGroupsQueryParamsArg(val) {
    return { ["filterTerm"]: val.filterTerm, ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.serializeGetGroupsQueryParamsArg = serializeGetGroupsQueryParamsArg;
function deserializeGetGroupsQueryParamsArg(val) {
    const filterTerm = (0, json_js_2.isJson)(val.filterTerm, "string") ? val.filterTerm : void 0;
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    return { filterTerm: filterTerm, fields: fields, limit: limit, offset: offset };
}
exports.deserializeGetGroupsQueryParamsArg = deserializeGetGroupsQueryParamsArg;
function serializeCreateGroupRequestBodyArgInvitabilityLevelField(val) {
    return val;
}
exports.serializeCreateGroupRequestBodyArgInvitabilityLevelField = serializeCreateGroupRequestBodyArgInvitabilityLevelField;
function deserializeCreateGroupRequestBodyArgInvitabilityLevelField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateGroupRequestBodyArgInvitabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateGroupRequestBodyArgInvitabilityLevelField = deserializeCreateGroupRequestBodyArgInvitabilityLevelField;
function serializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val) {
    return val;
}
exports.serializeCreateGroupRequestBodyArgMemberViewabilityLevelField = serializeCreateGroupRequestBodyArgMemberViewabilityLevelField;
function deserializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateGroupRequestBodyArgMemberViewabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateGroupRequestBodyArgMemberViewabilityLevelField = deserializeCreateGroupRequestBodyArgMemberViewabilityLevelField;
function serializeCreateGroupRequestBodyArg(val) {
    return { ["name"]: val.name, ["provenance"]: val.provenance, ["externalSyncIdentifier"]: val.externalSyncIdentifier, ["description"]: val.description, ["invitabilityLevel"]: val.invitabilityLevel == void 0 ? void 0 : serializeCreateGroupRequestBodyArgInvitabilityLevelField(val.invitabilityLevel), ["memberViewabilityLevel"]: val.memberViewabilityLevel == void 0 ? void 0 : serializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel) };
}
exports.serializeCreateGroupRequestBodyArg = serializeCreateGroupRequestBodyArg;
function deserializeCreateGroupRequestBodyArg(val) {
    const name = val.name;
    const provenance = (0, json_js_2.isJson)(val.provenance, "string") ? val.provenance : void 0;
    const externalSyncIdentifier = (0, json_js_2.isJson)(val.externalSyncIdentifier, "string") ? val.externalSyncIdentifier : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const invitabilityLevel = val.invitabilityLevel == void 0 ? void 0 : deserializeCreateGroupRequestBodyArgInvitabilityLevelField(val.invitabilityLevel);
    const memberViewabilityLevel = val.memberViewabilityLevel == void 0 ? void 0 : deserializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel);
    return { name: name, provenance: provenance, externalSyncIdentifier: externalSyncIdentifier, description: description, invitabilityLevel: invitabilityLevel, memberViewabilityLevel: memberViewabilityLevel };
}
exports.deserializeCreateGroupRequestBodyArg = deserializeCreateGroupRequestBodyArg;
function serializeCreateGroupQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeCreateGroupQueryParamsArg = serializeCreateGroupQueryParamsArg;
function deserializeCreateGroupQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeCreateGroupQueryParamsArg = deserializeCreateGroupQueryParamsArg;
function serializeGetGroupByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetGroupByIdQueryParamsArg = serializeGetGroupByIdQueryParamsArg;
function deserializeGetGroupByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetGroupByIdQueryParamsArg = deserializeGetGroupByIdQueryParamsArg;
function serializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val) {
    return val;
}
exports.serializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField = serializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField;
function deserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateGroupByIdRequestBodyArgInvitabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField = deserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField;
function serializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val) {
    return val;
}
exports.serializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = serializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField;
function deserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = deserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField;
function serializeUpdateGroupByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["provenance"]: val.provenance, ["externalSyncIdentifier"]: val.externalSyncIdentifier, ["description"]: val.description, ["invitabilityLevel"]: val.invitabilityLevel == void 0 ? void 0 : serializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val.invitabilityLevel), ["memberViewabilityLevel"]: val.memberViewabilityLevel == void 0 ? void 0 : serializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel) };
}
exports.serializeUpdateGroupByIdRequestBodyArg = serializeUpdateGroupByIdRequestBodyArg;
function deserializeUpdateGroupByIdRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const provenance = (0, json_js_2.isJson)(val.provenance, "string") ? val.provenance : void 0;
    const externalSyncIdentifier = (0, json_js_2.isJson)(val.externalSyncIdentifier, "string") ? val.externalSyncIdentifier : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const invitabilityLevel = val.invitabilityLevel == void 0 ? void 0 : deserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val.invitabilityLevel);
    const memberViewabilityLevel = val.memberViewabilityLevel == void 0 ? void 0 : deserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel);
    return { name: name, provenance: provenance, externalSyncIdentifier: externalSyncIdentifier, description: description, invitabilityLevel: invitabilityLevel, memberViewabilityLevel: memberViewabilityLevel };
}
exports.deserializeUpdateGroupByIdRequestBodyArg = deserializeUpdateGroupByIdRequestBodyArg;
function serializeUpdateGroupByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateGroupByIdQueryParamsArg = serializeUpdateGroupByIdQueryParamsArg;
function deserializeUpdateGroupByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeUpdateGroupByIdQueryParamsArg = deserializeUpdateGroupByIdQueryParamsArg;
//# sourceMappingURL=groups.generated.js.map