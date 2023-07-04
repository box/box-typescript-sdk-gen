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
exports.newDeserializeUpdateGroupByIdQueryParamsArg = exports.newSerializeUpdateGroupByIdQueryParamsArg = exports.newDeserializeUpdateGroupByIdRequestBodyArg = exports.newSerializeUpdateGroupByIdRequestBodyArg = exports.newDeserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = exports.newSerializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = exports.newDeserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField = exports.newSerializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField = exports.newDeserializeGetGroupByIdQueryParamsArg = exports.newSerializeGetGroupByIdQueryParamsArg = exports.newDeserializeCreateGroupQueryParamsArg = exports.newSerializeCreateGroupQueryParamsArg = exports.newDeserializeCreateGroupRequestBodyArg = exports.newSerializeCreateGroupRequestBodyArg = exports.newDeserializeCreateGroupRequestBodyArgMemberViewabilityLevelField = exports.newSerializeCreateGroupRequestBodyArgMemberViewabilityLevelField = exports.newDeserializeCreateGroupRequestBodyArgInvitabilityLevelField = exports.newSerializeCreateGroupRequestBodyArgInvitabilityLevelField = exports.newDeserializeGetGroupsQueryParamsArg = exports.newSerializeGetGroupsQueryParamsArg = exports.GroupsManager = void 0;
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
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeGroups)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createGroup(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeGroup)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getGroupById(groupId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.newDeserializeGroupFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateGroupById(groupId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/groups/", groupId), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.newDeserializeGroupFull)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeGetGroupsQueryParamsArg(val) {
    return { ["filterTerm"]: val.filterTerm, ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
exports.newSerializeGetGroupsQueryParamsArg = newSerializeGetGroupsQueryParamsArg;
function newDeserializeGetGroupsQueryParamsArg(val) {
    const filterTerm = (0, json_js_2.isJson)(val.filterTerm, "string") ? val.filterTerm : void 0;
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    return { filterTerm: filterTerm, fields: fields, limit: limit, offset: offset };
}
exports.newDeserializeGetGroupsQueryParamsArg = newDeserializeGetGroupsQueryParamsArg;
function newSerializeCreateGroupRequestBodyArgInvitabilityLevelField(val) {
    return val;
}
exports.newSerializeCreateGroupRequestBodyArgInvitabilityLevelField = newSerializeCreateGroupRequestBodyArgInvitabilityLevelField;
function newDeserializeCreateGroupRequestBodyArgInvitabilityLevelField(val) {
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
exports.newDeserializeCreateGroupRequestBodyArgInvitabilityLevelField = newDeserializeCreateGroupRequestBodyArgInvitabilityLevelField;
function newSerializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val) {
    return val;
}
exports.newSerializeCreateGroupRequestBodyArgMemberViewabilityLevelField = newSerializeCreateGroupRequestBodyArgMemberViewabilityLevelField;
function newDeserializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val) {
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
exports.newDeserializeCreateGroupRequestBodyArgMemberViewabilityLevelField = newDeserializeCreateGroupRequestBodyArgMemberViewabilityLevelField;
function newSerializeCreateGroupRequestBodyArg(val) {
    return { ["name"]: val.name, ["provenance"]: val.provenance, ["externalSyncIdentifier"]: val.externalSyncIdentifier, ["description"]: val.description, ["invitabilityLevel"]: val.invitabilityLevel == void 0 ? void 0 : newSerializeCreateGroupRequestBodyArgInvitabilityLevelField(val.invitabilityLevel), ["memberViewabilityLevel"]: val.memberViewabilityLevel == void 0 ? void 0 : newSerializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel) };
}
exports.newSerializeCreateGroupRequestBodyArg = newSerializeCreateGroupRequestBodyArg;
function newDeserializeCreateGroupRequestBodyArg(val) {
    const name = val.name;
    const provenance = (0, json_js_2.isJson)(val.provenance, "string") ? val.provenance : void 0;
    const externalSyncIdentifier = (0, json_js_2.isJson)(val.externalSyncIdentifier, "string") ? val.externalSyncIdentifier : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const invitabilityLevel = val.invitabilityLevel == void 0 ? void 0 : newDeserializeCreateGroupRequestBodyArgInvitabilityLevelField(val.invitabilityLevel);
    const memberViewabilityLevel = val.memberViewabilityLevel == void 0 ? void 0 : newDeserializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel);
    return { name: name, provenance: provenance, externalSyncIdentifier: externalSyncIdentifier, description: description, invitabilityLevel: invitabilityLevel, memberViewabilityLevel: memberViewabilityLevel };
}
exports.newDeserializeCreateGroupRequestBodyArg = newDeserializeCreateGroupRequestBodyArg;
function newSerializeCreateGroupQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeCreateGroupQueryParamsArg = newSerializeCreateGroupQueryParamsArg;
function newDeserializeCreateGroupQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeCreateGroupQueryParamsArg = newDeserializeCreateGroupQueryParamsArg;
function newSerializeGetGroupByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetGroupByIdQueryParamsArg = newSerializeGetGroupByIdQueryParamsArg;
function newDeserializeGetGroupByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetGroupByIdQueryParamsArg = newDeserializeGetGroupByIdQueryParamsArg;
function newSerializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val) {
    return val;
}
exports.newSerializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField = newSerializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField;
function newDeserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val) {
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
exports.newDeserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField = newDeserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField;
function newSerializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val) {
    return val;
}
exports.newSerializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = newSerializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField;
function newDeserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val) {
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
exports.newDeserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = newDeserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField;
function newSerializeUpdateGroupByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["provenance"]: val.provenance, ["externalSyncIdentifier"]: val.externalSyncIdentifier, ["description"]: val.description, ["invitabilityLevel"]: val.invitabilityLevel == void 0 ? void 0 : newSerializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val.invitabilityLevel), ["memberViewabilityLevel"]: val.memberViewabilityLevel == void 0 ? void 0 : newSerializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel) };
}
exports.newSerializeUpdateGroupByIdRequestBodyArg = newSerializeUpdateGroupByIdRequestBodyArg;
function newDeserializeUpdateGroupByIdRequestBodyArg(val) {
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const provenance = (0, json_js_2.isJson)(val.provenance, "string") ? val.provenance : void 0;
    const externalSyncIdentifier = (0, json_js_2.isJson)(val.externalSyncIdentifier, "string") ? val.externalSyncIdentifier : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const invitabilityLevel = val.invitabilityLevel == void 0 ? void 0 : newDeserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val.invitabilityLevel);
    const memberViewabilityLevel = val.memberViewabilityLevel == void 0 ? void 0 : newDeserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel);
    return { name: name, provenance: provenance, externalSyncIdentifier: externalSyncIdentifier, description: description, invitabilityLevel: invitabilityLevel, memberViewabilityLevel: memberViewabilityLevel };
}
exports.newDeserializeUpdateGroupByIdRequestBodyArg = newDeserializeUpdateGroupByIdRequestBodyArg;
function newSerializeUpdateGroupByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateGroupByIdQueryParamsArg = newSerializeUpdateGroupByIdQueryParamsArg;
function newDeserializeUpdateGroupByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeUpdateGroupByIdQueryParamsArg = newDeserializeUpdateGroupByIdQueryParamsArg;
//# sourceMappingURL=groups.generated.js.map