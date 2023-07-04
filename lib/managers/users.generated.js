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
exports.newDeserializeDeleteUserByIdQueryParamsArg = exports.newSerializeDeleteUserByIdQueryParamsArg = exports.newDeserializeUpdateUserByIdQueryParamsArg = exports.newSerializeUpdateUserByIdQueryParamsArg = exports.newDeserializeUpdateUserByIdRequestBodyArg = exports.newSerializeUpdateUserByIdRequestBodyArg = exports.newDeserializeUpdateUserByIdRequestBodyArgNotificationEmailField = exports.newSerializeUpdateUserByIdRequestBodyArgNotificationEmailField = exports.newDeserializeUpdateUserByIdRequestBodyArgStatusField = exports.newSerializeUpdateUserByIdRequestBodyArgStatusField = exports.newDeserializeUpdateUserByIdRequestBodyArgRoleField = exports.newSerializeUpdateUserByIdRequestBodyArgRoleField = exports.newDeserializeGetUserByIdQueryParamsArg = exports.newSerializeGetUserByIdQueryParamsArg = exports.newDeserializeGetUserMeQueryParamsArg = exports.newSerializeGetUserMeQueryParamsArg = exports.newDeserializeCreateUserQueryParamsArg = exports.newSerializeCreateUserQueryParamsArg = exports.newDeserializeCreateUserRequestBodyArg = exports.newSerializeCreateUserRequestBodyArg = exports.newDeserializeCreateUserRequestBodyArgStatusField = exports.newSerializeCreateUserRequestBodyArgStatusField = exports.newDeserializeCreateUserRequestBodyArgRoleField = exports.newSerializeCreateUserRequestBodyArgRoleField = exports.newDeserializeGetUsersQueryParamsArg = exports.newSerializeGetUsersQueryParamsArg = exports.newDeserializeGetUsersQueryParamsArgUserTypeField = exports.newSerializeGetUsersQueryParamsArgUserTypeField = exports.UsersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const schemas_generated_js_5 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class UsersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUsers(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeUsers)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createUser(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users"), { method: "POST", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeUser)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getUserMe(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/me"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_5.newDeserializeUserFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getUserById(userId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_5.newDeserializeUserFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateUserById(userId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "PUT", params: (0, utils_js_1.toMap)(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_5.newDeserializeUserFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteUserById(userId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "DELETE", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.UsersManager = UsersManager;
function newSerializeGetUsersQueryParamsArgUserTypeField(val) {
    return val;
}
exports.newSerializeGetUsersQueryParamsArgUserTypeField = newSerializeGetUsersQueryParamsArgUserTypeField;
function newDeserializeGetUsersQueryParamsArgUserTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetUsersQueryParamsArgUserTypeField\"";
    }
    if (val == "all") {
        return "all";
    }
    if (val == "managed") {
        return "managed";
    }
    if (val == "external") {
        return "external";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeGetUsersQueryParamsArgUserTypeField = newDeserializeGetUsersQueryParamsArgUserTypeField;
function newSerializeGetUsersQueryParamsArg(val) {
    return { ["filterTerm"]: val.filterTerm, ["userType"]: val.userType == void 0 ? void 0 : newSerializeGetUsersQueryParamsArgUserTypeField(val.userType), ["externalAppUserId"]: val.externalAppUserId, ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit, ["usemarker"]: val.usemarker, ["marker"]: val.marker };
}
exports.newSerializeGetUsersQueryParamsArg = newSerializeGetUsersQueryParamsArg;
function newDeserializeGetUsersQueryParamsArg(val) {
    const filterTerm = (0, json_js_2.isJson)(val.filterTerm, "string") ? val.filterTerm : void 0;
    const userType = val.userType == void 0 ? void 0 : newDeserializeGetUsersQueryParamsArgUserTypeField(val.userType);
    const externalAppUserId = (0, json_js_2.isJson)(val.externalAppUserId, "string") ? val.externalAppUserId : void 0;
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const offset = (0, json_js_2.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const usemarker = (0, json_js_2.isJson)(val.usemarker, "boolean") ? val.usemarker : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    return { filterTerm: filterTerm, userType: userType, externalAppUserId: externalAppUserId, fields: fields, offset: offset, limit: limit, usemarker: usemarker, marker: marker };
}
exports.newDeserializeGetUsersQueryParamsArg = newDeserializeGetUsersQueryParamsArg;
function newSerializeCreateUserRequestBodyArgRoleField(val) {
    return val;
}
exports.newSerializeCreateUserRequestBodyArgRoleField = newSerializeCreateUserRequestBodyArgRoleField;
function newDeserializeCreateUserRequestBodyArgRoleField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateUserRequestBodyArgRoleField\"";
    }
    if (val == "coadmin") {
        return "coadmin";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateUserRequestBodyArgRoleField = newDeserializeCreateUserRequestBodyArgRoleField;
function newSerializeCreateUserRequestBodyArgStatusField(val) {
    return val;
}
exports.newSerializeCreateUserRequestBodyArgStatusField = newSerializeCreateUserRequestBodyArgStatusField;
function newDeserializeCreateUserRequestBodyArgStatusField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateUserRequestBodyArgStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "inactive") {
        return "inactive";
    }
    if (val == "cannot_delete_edit") {
        return "cannot_delete_edit";
    }
    if (val == "cannot_delete_edit_upload") {
        return "cannot_delete_edit_upload";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateUserRequestBodyArgStatusField = newDeserializeCreateUserRequestBodyArgStatusField;
function newSerializeCreateUserRequestBodyArg(val) {
    return { ["name"]: val.name, ["login"]: val.login, ["isPlatformAccessOnly"]: val.isPlatformAccessOnly, ["role"]: val.role == void 0 ? void 0 : newSerializeCreateUserRequestBodyArgRoleField(val.role), ["language"]: val.language, ["isSyncEnabled"]: val.isSyncEnabled, ["jobTitle"]: val.jobTitle, ["phone"]: val.phone, ["address"]: val.address, ["spaceAmount"]: val.spaceAmount, ["trackingCodes"]: val.trackingCodes == void 0 ? void 0 : val.trackingCodes.map(function (item) {
            return (0, schemas_generated_js_3.newSerializeTrackingCode)(item);
        }), ["canSeeManagedUsers"]: val.canSeeManagedUsers, ["timezone"]: val.timezone, ["isExternalCollabRestricted"]: val.isExternalCollabRestricted, ["isExemptFromDeviceLimits"]: val.isExemptFromDeviceLimits, ["isExemptFromLoginVerification"]: val.isExemptFromLoginVerification, ["status"]: val.status == void 0 ? void 0 : newSerializeCreateUserRequestBodyArgStatusField(val.status), ["externalAppUserId"]: val.externalAppUserId };
}
exports.newSerializeCreateUserRequestBodyArg = newSerializeCreateUserRequestBodyArg;
function newDeserializeCreateUserRequestBodyArg(val) {
    const name = val.name;
    const login = (0, json_js_2.isJson)(val.login, "string") ? val.login : void 0;
    const isPlatformAccessOnly = (0, json_js_2.isJson)(val.isPlatformAccessOnly, "boolean") ? val.isPlatformAccessOnly : void 0;
    const role = val.role == void 0 ? void 0 : newDeserializeCreateUserRequestBodyArgRoleField(val.role);
    const language = (0, json_js_2.isJson)(val.language, "string") ? val.language : void 0;
    const isSyncEnabled = (0, json_js_2.isJson)(val.isSyncEnabled, "boolean") ? val.isSyncEnabled : void 0;
    const jobTitle = (0, json_js_2.isJson)(val.jobTitle, "string") ? val.jobTitle : void 0;
    const phone = (0, json_js_2.isJson)(val.phone, "string") ? val.phone : void 0;
    const address = (0, json_js_2.isJson)(val.address, "string") ? val.address : void 0;
    const spaceAmount = (0, json_js_2.isJson)(val.spaceAmount, "number") ? val.spaceAmount : void 0;
    const trackingCodes = (0, json_js_2.isJson)(val.trackingCodes, "array") ? val.trackingCodes.map(function (itm) {
        return (0, schemas_generated_js_4.newDeserializeTrackingCode)(itm);
    }) : void 0;
    const canSeeManagedUsers = (0, json_js_2.isJson)(val.canSeeManagedUsers, "boolean") ? val.canSeeManagedUsers : void 0;
    const timezone = (0, json_js_2.isJson)(val.timezone, "string") ? val.timezone : void 0;
    const isExternalCollabRestricted = (0, json_js_2.isJson)(val.isExternalCollabRestricted, "boolean") ? val.isExternalCollabRestricted : void 0;
    const isExemptFromDeviceLimits = (0, json_js_2.isJson)(val.isExemptFromDeviceLimits, "boolean") ? val.isExemptFromDeviceLimits : void 0;
    const isExemptFromLoginVerification = (0, json_js_2.isJson)(val.isExemptFromLoginVerification, "boolean") ? val.isExemptFromLoginVerification : void 0;
    const status = val.status == void 0 ? void 0 : newDeserializeCreateUserRequestBodyArgStatusField(val.status);
    const externalAppUserId = (0, json_js_2.isJson)(val.externalAppUserId, "string") ? val.externalAppUserId : void 0;
    return { name: name, login: login, isPlatformAccessOnly: isPlatformAccessOnly, role: role, language: language, isSyncEnabled: isSyncEnabled, jobTitle: jobTitle, phone: phone, address: address, spaceAmount: spaceAmount, trackingCodes: trackingCodes, canSeeManagedUsers: canSeeManagedUsers, timezone: timezone, isExternalCollabRestricted: isExternalCollabRestricted, isExemptFromDeviceLimits: isExemptFromDeviceLimits, isExemptFromLoginVerification: isExemptFromLoginVerification, status: status, externalAppUserId: externalAppUserId };
}
exports.newDeserializeCreateUserRequestBodyArg = newDeserializeCreateUserRequestBodyArg;
function newSerializeCreateUserQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeCreateUserQueryParamsArg = newSerializeCreateUserQueryParamsArg;
function newDeserializeCreateUserQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeCreateUserQueryParamsArg = newDeserializeCreateUserQueryParamsArg;
function newSerializeGetUserMeQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetUserMeQueryParamsArg = newSerializeGetUserMeQueryParamsArg;
function newDeserializeGetUserMeQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetUserMeQueryParamsArg = newDeserializeGetUserMeQueryParamsArg;
function newSerializeGetUserByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetUserByIdQueryParamsArg = newSerializeGetUserByIdQueryParamsArg;
function newDeserializeGetUserByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetUserByIdQueryParamsArg = newDeserializeGetUserByIdQueryParamsArg;
function newSerializeUpdateUserByIdRequestBodyArgRoleField(val) {
    return val;
}
exports.newSerializeUpdateUserByIdRequestBodyArgRoleField = newSerializeUpdateUserByIdRequestBodyArgRoleField;
function newDeserializeUpdateUserByIdRequestBodyArgRoleField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateUserByIdRequestBodyArgRoleField\"";
    }
    if (val == "coadmin") {
        return "coadmin";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeUpdateUserByIdRequestBodyArgRoleField = newDeserializeUpdateUserByIdRequestBodyArgRoleField;
function newSerializeUpdateUserByIdRequestBodyArgStatusField(val) {
    return val;
}
exports.newSerializeUpdateUserByIdRequestBodyArgStatusField = newSerializeUpdateUserByIdRequestBodyArgStatusField;
function newDeserializeUpdateUserByIdRequestBodyArgStatusField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateUserByIdRequestBodyArgStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "inactive") {
        return "inactive";
    }
    if (val == "cannot_delete_edit") {
        return "cannot_delete_edit";
    }
    if (val == "cannot_delete_edit_upload") {
        return "cannot_delete_edit_upload";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeUpdateUserByIdRequestBodyArgStatusField = newDeserializeUpdateUserByIdRequestBodyArgStatusField;
function newSerializeUpdateUserByIdRequestBodyArgNotificationEmailField(val) {
    return { ["email"]: val.email };
}
exports.newSerializeUpdateUserByIdRequestBodyArgNotificationEmailField = newSerializeUpdateUserByIdRequestBodyArgNotificationEmailField;
function newDeserializeUpdateUserByIdRequestBodyArgNotificationEmailField(val) {
    const email = (0, json_js_2.isJson)(val.email, "string") ? val.email : void 0;
    return { email: email };
}
exports.newDeserializeUpdateUserByIdRequestBodyArgNotificationEmailField = newDeserializeUpdateUserByIdRequestBodyArgNotificationEmailField;
function newSerializeUpdateUserByIdRequestBodyArg(val) {
    return { ["enterprise"]: val.enterprise, ["notify"]: val.notify, ["name"]: val.name, ["login"]: val.login, ["role"]: val.role == void 0 ? void 0 : newSerializeUpdateUserByIdRequestBodyArgRoleField(val.role), ["language"]: val.language, ["isSyncEnabled"]: val.isSyncEnabled, ["jobTitle"]: val.jobTitle, ["phone"]: val.phone, ["address"]: val.address, ["trackingCodes"]: val.trackingCodes == void 0 ? void 0 : val.trackingCodes.map(function (item) {
            return (0, schemas_generated_js_3.newSerializeTrackingCode)(item);
        }), ["canSeeManagedUsers"]: val.canSeeManagedUsers, ["timezone"]: val.timezone, ["isExternalCollabRestricted"]: val.isExternalCollabRestricted, ["isExemptFromDeviceLimits"]: val.isExemptFromDeviceLimits, ["isExemptFromLoginVerification"]: val.isExemptFromLoginVerification, ["isPasswordResetRequired"]: val.isPasswordResetRequired, ["status"]: val.status == void 0 ? void 0 : newSerializeUpdateUserByIdRequestBodyArgStatusField(val.status), ["spaceAmount"]: val.spaceAmount, ["notificationEmail"]: val.notificationEmail == void 0 ? void 0 : newSerializeUpdateUserByIdRequestBodyArgNotificationEmailField(val.notificationEmail), ["externalAppUserId"]: val.externalAppUserId };
}
exports.newSerializeUpdateUserByIdRequestBodyArg = newSerializeUpdateUserByIdRequestBodyArg;
function newDeserializeUpdateUserByIdRequestBodyArg(val) {
    const enterprise = (0, json_js_2.isJson)(val.enterprise, "string") ? val.enterprise : void 0;
    const notify = (0, json_js_2.isJson)(val.notify, "boolean") ? val.notify : void 0;
    const name = (0, json_js_2.isJson)(val.name, "string") ? val.name : void 0;
    const login = (0, json_js_2.isJson)(val.login, "string") ? val.login : void 0;
    const role = val.role == void 0 ? void 0 : newDeserializeUpdateUserByIdRequestBodyArgRoleField(val.role);
    const language = (0, json_js_2.isJson)(val.language, "string") ? val.language : void 0;
    const isSyncEnabled = (0, json_js_2.isJson)(val.isSyncEnabled, "boolean") ? val.isSyncEnabled : void 0;
    const jobTitle = (0, json_js_2.isJson)(val.jobTitle, "string") ? val.jobTitle : void 0;
    const phone = (0, json_js_2.isJson)(val.phone, "string") ? val.phone : void 0;
    const address = (0, json_js_2.isJson)(val.address, "string") ? val.address : void 0;
    const trackingCodes = (0, json_js_2.isJson)(val.trackingCodes, "array") ? val.trackingCodes.map(function (itm) {
        return (0, schemas_generated_js_4.newDeserializeTrackingCode)(itm);
    }) : void 0;
    const canSeeManagedUsers = (0, json_js_2.isJson)(val.canSeeManagedUsers, "boolean") ? val.canSeeManagedUsers : void 0;
    const timezone = (0, json_js_2.isJson)(val.timezone, "string") ? val.timezone : void 0;
    const isExternalCollabRestricted = (0, json_js_2.isJson)(val.isExternalCollabRestricted, "boolean") ? val.isExternalCollabRestricted : void 0;
    const isExemptFromDeviceLimits = (0, json_js_2.isJson)(val.isExemptFromDeviceLimits, "boolean") ? val.isExemptFromDeviceLimits : void 0;
    const isExemptFromLoginVerification = (0, json_js_2.isJson)(val.isExemptFromLoginVerification, "boolean") ? val.isExemptFromLoginVerification : void 0;
    const isPasswordResetRequired = (0, json_js_2.isJson)(val.isPasswordResetRequired, "boolean") ? val.isPasswordResetRequired : void 0;
    const status = val.status == void 0 ? void 0 : newDeserializeUpdateUserByIdRequestBodyArgStatusField(val.status);
    const spaceAmount = (0, json_js_2.isJson)(val.spaceAmount, "number") ? val.spaceAmount : void 0;
    const notificationEmail = val.notificationEmail == void 0 ? void 0 : newDeserializeUpdateUserByIdRequestBodyArgNotificationEmailField(val.notificationEmail);
    const externalAppUserId = (0, json_js_2.isJson)(val.externalAppUserId, "string") ? val.externalAppUserId : void 0;
    return { enterprise: enterprise, notify: notify, name: name, login: login, role: role, language: language, isSyncEnabled: isSyncEnabled, jobTitle: jobTitle, phone: phone, address: address, trackingCodes: trackingCodes, canSeeManagedUsers: canSeeManagedUsers, timezone: timezone, isExternalCollabRestricted: isExternalCollabRestricted, isExemptFromDeviceLimits: isExemptFromDeviceLimits, isExemptFromLoginVerification: isExemptFromLoginVerification, isPasswordResetRequired: isPasswordResetRequired, status: status, spaceAmount: spaceAmount, notificationEmail: notificationEmail, externalAppUserId: externalAppUserId };
}
exports.newDeserializeUpdateUserByIdRequestBodyArg = newDeserializeUpdateUserByIdRequestBodyArg;
function newSerializeUpdateUserByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeUpdateUserByIdQueryParamsArg = newSerializeUpdateUserByIdQueryParamsArg;
function newDeserializeUpdateUserByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeUpdateUserByIdQueryParamsArg = newDeserializeUpdateUserByIdQueryParamsArg;
function newSerializeDeleteUserByIdQueryParamsArg(val) {
    return { ["notify"]: val.notify, ["force"]: val.force };
}
exports.newSerializeDeleteUserByIdQueryParamsArg = newSerializeDeleteUserByIdQueryParamsArg;
function newDeserializeDeleteUserByIdQueryParamsArg(val) {
    const notify = (0, json_js_2.isJson)(val.notify, "boolean") ? val.notify : void 0;
    const force = (0, json_js_2.isJson)(val.force, "boolean") ? val.force : void 0;
    return { notify: notify, force: force };
}
exports.newDeserializeDeleteUserByIdQueryParamsArg = newDeserializeDeleteUserByIdQueryParamsArg;
//# sourceMappingURL=users.generated.js.map