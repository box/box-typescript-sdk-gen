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
exports.deserializeDeleteUserByIdQueryParamsArg = exports.serializeDeleteUserByIdQueryParamsArg = exports.deserializeUpdateUserByIdQueryParamsArg = exports.serializeUpdateUserByIdQueryParamsArg = exports.deserializeUpdateUserByIdRequestBodyArg = exports.serializeUpdateUserByIdRequestBodyArg = exports.deserializeUpdateUserByIdRequestBodyArgNotificationEmailField = exports.serializeUpdateUserByIdRequestBodyArgNotificationEmailField = exports.deserializeUpdateUserByIdRequestBodyArgStatusField = exports.serializeUpdateUserByIdRequestBodyArgStatusField = exports.deserializeUpdateUserByIdRequestBodyArgRoleField = exports.serializeUpdateUserByIdRequestBodyArgRoleField = exports.deserializeGetUserByIdQueryParamsArg = exports.serializeGetUserByIdQueryParamsArg = exports.deserializeGetUserMeQueryParamsArg = exports.serializeGetUserMeQueryParamsArg = exports.deserializeCreateUserQueryParamsArg = exports.serializeCreateUserQueryParamsArg = exports.deserializeCreateUserRequestBodyArg = exports.serializeCreateUserRequestBodyArg = exports.deserializeCreateUserRequestBodyArgStatusField = exports.serializeCreateUserRequestBodyArgStatusField = exports.deserializeCreateUserRequestBodyArgRoleField = exports.serializeCreateUserRequestBodyArgRoleField = exports.deserializeGetUsersQueryParamsArg = exports.serializeGetUsersQueryParamsArg = exports.deserializeGetUsersQueryParamsArgUserTypeField = exports.serializeGetUsersQueryParamsArgUserTypeField = exports.UsersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const schemas_generated_js_5 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class UsersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUsers(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetUsersQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUsers)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createUser(requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users"), { method: "POST", params: (0, utils_js_1.prepareParams)(serializeCreateUserQueryParamsArg(queryParams)), body: (0, json_js_2.serializeJson)(serializeCreateUserRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeUser)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getUserMe(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/me"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetUserMeQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_5.deserializeUserFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getUserById(userId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetUserByIdQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_5.deserializeUserFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateUserById(userId, requestBody, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "PUT", params: (0, utils_js_1.prepareParams)(serializeUpdateUserByIdQueryParamsArg(queryParams)), body: (0, json_js_2.serializeJson)(serializeUpdateUserByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_5.deserializeUserFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteUserById(userId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "DELETE", params: (0, utils_js_1.prepareParams)(serializeDeleteUserByIdQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.UsersManager = UsersManager;
function serializeGetUsersQueryParamsArgUserTypeField(val) {
    return val;
}
exports.serializeGetUsersQueryParamsArgUserTypeField = serializeGetUsersQueryParamsArgUserTypeField;
function deserializeGetUsersQueryParamsArgUserTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
exports.deserializeGetUsersQueryParamsArgUserTypeField = deserializeGetUsersQueryParamsArgUserTypeField;
function serializeGetUsersQueryParamsArg(val) {
    return { ["filter_term"]: val.filterTerm, ["user_type"]: val.userType == void 0 ? void 0 : serializeGetUsersQueryParamsArgUserTypeField(val.userType), ["external_app_user_id"]: val.externalAppUserId, ["fields"]: val.fields, ["offset"]: val.offset, ["limit"]: val.limit, ["usemarker"]: val.usemarker, ["marker"]: val.marker };
}
exports.serializeGetUsersQueryParamsArg = serializeGetUsersQueryParamsArg;
function deserializeGetUsersQueryParamsArg(val) {
    const filterTerm = (0, json_js_3.isJson)(val.filter_term, "string") ? val.filter_term : void 0;
    const userType = val.user_type == void 0 ? void 0 : deserializeGetUsersQueryParamsArgUserTypeField(val.user_type);
    const externalAppUserId = (0, json_js_3.isJson)(val.external_app_user_id, "string") ? val.external_app_user_id : void 0;
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    const offset = (0, json_js_3.isJson)(val.offset, "number") ? val.offset : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    const usemarker = (0, json_js_3.isJson)(val.usemarker, "boolean") ? val.usemarker : void 0;
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    return { filterTerm: filterTerm, userType: userType, externalAppUserId: externalAppUserId, fields: fields, offset: offset, limit: limit, usemarker: usemarker, marker: marker };
}
exports.deserializeGetUsersQueryParamsArg = deserializeGetUsersQueryParamsArg;
function serializeCreateUserRequestBodyArgRoleField(val) {
    return val;
}
exports.serializeCreateUserRequestBodyArgRoleField = serializeCreateUserRequestBodyArgRoleField;
function deserializeCreateUserRequestBodyArgRoleField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
exports.deserializeCreateUserRequestBodyArgRoleField = deserializeCreateUserRequestBodyArgRoleField;
function serializeCreateUserRequestBodyArgStatusField(val) {
    return val;
}
exports.serializeCreateUserRequestBodyArgStatusField = serializeCreateUserRequestBodyArgStatusField;
function deserializeCreateUserRequestBodyArgStatusField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
exports.deserializeCreateUserRequestBodyArgStatusField = deserializeCreateUserRequestBodyArgStatusField;
function serializeCreateUserRequestBodyArg(val) {
    return { ["name"]: val.name, ["login"]: val.login, ["is_platform_access_only"]: val.isPlatformAccessOnly, ["role"]: val.role == void 0 ? void 0 : serializeCreateUserRequestBodyArgRoleField(val.role), ["language"]: val.language, ["is_sync_enabled"]: val.isSyncEnabled, ["job_title"]: val.jobTitle, ["phone"]: val.phone, ["address"]: val.address, ["space_amount"]: val.spaceAmount, ["tracking_codes"]: val.trackingCodes == void 0 ? void 0 : val.trackingCodes.map(function (item) {
            return (0, schemas_generated_js_3.serializeTrackingCode)(item);
        }), ["can_see_managed_users"]: val.canSeeManagedUsers, ["timezone"]: val.timezone, ["is_external_collab_restricted"]: val.isExternalCollabRestricted, ["is_exempt_from_device_limits"]: val.isExemptFromDeviceLimits, ["is_exempt_from_login_verification"]: val.isExemptFromLoginVerification, ["status"]: val.status == void 0 ? void 0 : serializeCreateUserRequestBodyArgStatusField(val.status), ["external_app_user_id"]: val.externalAppUserId };
}
exports.serializeCreateUserRequestBodyArg = serializeCreateUserRequestBodyArg;
function deserializeCreateUserRequestBodyArg(val) {
    const name = val.name;
    const login = (0, json_js_3.isJson)(val.login, "string") ? val.login : void 0;
    const isPlatformAccessOnly = (0, json_js_3.isJson)(val.is_platform_access_only, "boolean") ? val.is_platform_access_only : void 0;
    const role = val.role == void 0 ? void 0 : deserializeCreateUserRequestBodyArgRoleField(val.role);
    const language = (0, json_js_3.isJson)(val.language, "string") ? val.language : void 0;
    const isSyncEnabled = (0, json_js_3.isJson)(val.is_sync_enabled, "boolean") ? val.is_sync_enabled : void 0;
    const jobTitle = (0, json_js_3.isJson)(val.job_title, "string") ? val.job_title : void 0;
    const phone = (0, json_js_3.isJson)(val.phone, "string") ? val.phone : void 0;
    const address = (0, json_js_3.isJson)(val.address, "string") ? val.address : void 0;
    const spaceAmount = (0, json_js_3.isJson)(val.space_amount, "number") ? val.space_amount : void 0;
    const trackingCodes = (0, json_js_3.isJson)(val.tracking_codes, "array") ? val.tracking_codes.map(function (itm) {
        return (0, schemas_generated_js_4.deserializeTrackingCode)(itm);
    }) : void 0;
    const canSeeManagedUsers = (0, json_js_3.isJson)(val.can_see_managed_users, "boolean") ? val.can_see_managed_users : void 0;
    const timezone = (0, json_js_3.isJson)(val.timezone, "string") ? val.timezone : void 0;
    const isExternalCollabRestricted = (0, json_js_3.isJson)(val.is_external_collab_restricted, "boolean") ? val.is_external_collab_restricted : void 0;
    const isExemptFromDeviceLimits = (0, json_js_3.isJson)(val.is_exempt_from_device_limits, "boolean") ? val.is_exempt_from_device_limits : void 0;
    const isExemptFromLoginVerification = (0, json_js_3.isJson)(val.is_exempt_from_login_verification, "boolean") ? val.is_exempt_from_login_verification : void 0;
    const status = val.status == void 0 ? void 0 : deserializeCreateUserRequestBodyArgStatusField(val.status);
    const externalAppUserId = (0, json_js_3.isJson)(val.external_app_user_id, "string") ? val.external_app_user_id : void 0;
    return { name: name, login: login, isPlatformAccessOnly: isPlatformAccessOnly, role: role, language: language, isSyncEnabled: isSyncEnabled, jobTitle: jobTitle, phone: phone, address: address, spaceAmount: spaceAmount, trackingCodes: trackingCodes, canSeeManagedUsers: canSeeManagedUsers, timezone: timezone, isExternalCollabRestricted: isExternalCollabRestricted, isExemptFromDeviceLimits: isExemptFromDeviceLimits, isExemptFromLoginVerification: isExemptFromLoginVerification, status: status, externalAppUserId: externalAppUserId };
}
exports.deserializeCreateUserRequestBodyArg = deserializeCreateUserRequestBodyArg;
function serializeCreateUserQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeCreateUserQueryParamsArg = serializeCreateUserQueryParamsArg;
function deserializeCreateUserQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeCreateUserQueryParamsArg = deserializeCreateUserQueryParamsArg;
function serializeGetUserMeQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetUserMeQueryParamsArg = serializeGetUserMeQueryParamsArg;
function deserializeGetUserMeQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetUserMeQueryParamsArg = deserializeGetUserMeQueryParamsArg;
function serializeGetUserByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetUserByIdQueryParamsArg = serializeGetUserByIdQueryParamsArg;
function deserializeGetUserByIdQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetUserByIdQueryParamsArg = deserializeGetUserByIdQueryParamsArg;
function serializeUpdateUserByIdRequestBodyArgRoleField(val) {
    return val;
}
exports.serializeUpdateUserByIdRequestBodyArgRoleField = serializeUpdateUserByIdRequestBodyArgRoleField;
function deserializeUpdateUserByIdRequestBodyArgRoleField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
exports.deserializeUpdateUserByIdRequestBodyArgRoleField = deserializeUpdateUserByIdRequestBodyArgRoleField;
function serializeUpdateUserByIdRequestBodyArgStatusField(val) {
    return val;
}
exports.serializeUpdateUserByIdRequestBodyArgStatusField = serializeUpdateUserByIdRequestBodyArgStatusField;
function deserializeUpdateUserByIdRequestBodyArgStatusField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
exports.deserializeUpdateUserByIdRequestBodyArgStatusField = deserializeUpdateUserByIdRequestBodyArgStatusField;
function serializeUpdateUserByIdRequestBodyArgNotificationEmailField(val) {
    return { ["email"]: val.email };
}
exports.serializeUpdateUserByIdRequestBodyArgNotificationEmailField = serializeUpdateUserByIdRequestBodyArgNotificationEmailField;
function deserializeUpdateUserByIdRequestBodyArgNotificationEmailField(val) {
    const email = (0, json_js_3.isJson)(val.email, "string") ? val.email : void 0;
    return { email: email };
}
exports.deserializeUpdateUserByIdRequestBodyArgNotificationEmailField = deserializeUpdateUserByIdRequestBodyArgNotificationEmailField;
function serializeUpdateUserByIdRequestBodyArg(val) {
    return { ["enterprise"]: val.enterprise, ["notify"]: val.notify, ["name"]: val.name, ["login"]: val.login, ["role"]: val.role == void 0 ? void 0 : serializeUpdateUserByIdRequestBodyArgRoleField(val.role), ["language"]: val.language, ["is_sync_enabled"]: val.isSyncEnabled, ["job_title"]: val.jobTitle, ["phone"]: val.phone, ["address"]: val.address, ["tracking_codes"]: val.trackingCodes == void 0 ? void 0 : val.trackingCodes.map(function (item) {
            return (0, schemas_generated_js_3.serializeTrackingCode)(item);
        }), ["can_see_managed_users"]: val.canSeeManagedUsers, ["timezone"]: val.timezone, ["is_external_collab_restricted"]: val.isExternalCollabRestricted, ["is_exempt_from_device_limits"]: val.isExemptFromDeviceLimits, ["is_exempt_from_login_verification"]: val.isExemptFromLoginVerification, ["is_password_reset_required"]: val.isPasswordResetRequired, ["status"]: val.status == void 0 ? void 0 : serializeUpdateUserByIdRequestBodyArgStatusField(val.status), ["space_amount"]: val.spaceAmount, ["notification_email"]: val.notificationEmail == void 0 ? void 0 : serializeUpdateUserByIdRequestBodyArgNotificationEmailField(val.notificationEmail), ["external_app_user_id"]: val.externalAppUserId };
}
exports.serializeUpdateUserByIdRequestBodyArg = serializeUpdateUserByIdRequestBodyArg;
function deserializeUpdateUserByIdRequestBodyArg(val) {
    const enterprise = (0, json_js_3.isJson)(val.enterprise, "string") ? val.enterprise : void 0;
    const notify = (0, json_js_3.isJson)(val.notify, "boolean") ? val.notify : void 0;
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const login = (0, json_js_3.isJson)(val.login, "string") ? val.login : void 0;
    const role = val.role == void 0 ? void 0 : deserializeUpdateUserByIdRequestBodyArgRoleField(val.role);
    const language = (0, json_js_3.isJson)(val.language, "string") ? val.language : void 0;
    const isSyncEnabled = (0, json_js_3.isJson)(val.is_sync_enabled, "boolean") ? val.is_sync_enabled : void 0;
    const jobTitle = (0, json_js_3.isJson)(val.job_title, "string") ? val.job_title : void 0;
    const phone = (0, json_js_3.isJson)(val.phone, "string") ? val.phone : void 0;
    const address = (0, json_js_3.isJson)(val.address, "string") ? val.address : void 0;
    const trackingCodes = (0, json_js_3.isJson)(val.tracking_codes, "array") ? val.tracking_codes.map(function (itm) {
        return (0, schemas_generated_js_4.deserializeTrackingCode)(itm);
    }) : void 0;
    const canSeeManagedUsers = (0, json_js_3.isJson)(val.can_see_managed_users, "boolean") ? val.can_see_managed_users : void 0;
    const timezone = (0, json_js_3.isJson)(val.timezone, "string") ? val.timezone : void 0;
    const isExternalCollabRestricted = (0, json_js_3.isJson)(val.is_external_collab_restricted, "boolean") ? val.is_external_collab_restricted : void 0;
    const isExemptFromDeviceLimits = (0, json_js_3.isJson)(val.is_exempt_from_device_limits, "boolean") ? val.is_exempt_from_device_limits : void 0;
    const isExemptFromLoginVerification = (0, json_js_3.isJson)(val.is_exempt_from_login_verification, "boolean") ? val.is_exempt_from_login_verification : void 0;
    const isPasswordResetRequired = (0, json_js_3.isJson)(val.is_password_reset_required, "boolean") ? val.is_password_reset_required : void 0;
    const status = val.status == void 0 ? void 0 : deserializeUpdateUserByIdRequestBodyArgStatusField(val.status);
    const spaceAmount = (0, json_js_3.isJson)(val.space_amount, "number") ? val.space_amount : void 0;
    const notificationEmail = val.notification_email == void 0 ? void 0 : deserializeUpdateUserByIdRequestBodyArgNotificationEmailField(val.notification_email);
    const externalAppUserId = (0, json_js_3.isJson)(val.external_app_user_id, "string") ? val.external_app_user_id : void 0;
    return { enterprise: enterprise, notify: notify, name: name, login: login, role: role, language: language, isSyncEnabled: isSyncEnabled, jobTitle: jobTitle, phone: phone, address: address, trackingCodes: trackingCodes, canSeeManagedUsers: canSeeManagedUsers, timezone: timezone, isExternalCollabRestricted: isExternalCollabRestricted, isExemptFromDeviceLimits: isExemptFromDeviceLimits, isExemptFromLoginVerification: isExemptFromLoginVerification, isPasswordResetRequired: isPasswordResetRequired, status: status, spaceAmount: spaceAmount, notificationEmail: notificationEmail, externalAppUserId: externalAppUserId };
}
exports.deserializeUpdateUserByIdRequestBodyArg = deserializeUpdateUserByIdRequestBodyArg;
function serializeUpdateUserByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeUpdateUserByIdQueryParamsArg = serializeUpdateUserByIdQueryParamsArg;
function deserializeUpdateUserByIdQueryParamsArg(val) {
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeUpdateUserByIdQueryParamsArg = deserializeUpdateUserByIdQueryParamsArg;
function serializeDeleteUserByIdQueryParamsArg(val) {
    return { ["notify"]: val.notify, ["force"]: val.force };
}
exports.serializeDeleteUserByIdQueryParamsArg = serializeDeleteUserByIdQueryParamsArg;
function deserializeDeleteUserByIdQueryParamsArg(val) {
    const notify = (0, json_js_3.isJson)(val.notify, "boolean") ? val.notify : void 0;
    const force = (0, json_js_3.isJson)(val.force, "boolean") ? val.force : void 0;
    return { notify: notify, force: force };
}
exports.deserializeDeleteUserByIdQueryParamsArg = deserializeDeleteUserByIdQueryParamsArg;
//# sourceMappingURL=users.generated.js.map