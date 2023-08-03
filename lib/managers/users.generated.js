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
exports.deserializeUpdateUserByIdRequestBodyArg = exports.serializeUpdateUserByIdRequestBodyArg = exports.deserializeUpdateUserByIdRequestBodyArgNotificationEmailField = exports.serializeUpdateUserByIdRequestBodyArgNotificationEmailField = exports.deserializeUpdateUserByIdRequestBodyArgStatusField = exports.serializeUpdateUserByIdRequestBodyArgStatusField = exports.deserializeUpdateUserByIdRequestBodyArgRoleField = exports.serializeUpdateUserByIdRequestBodyArgRoleField = exports.deserializeCreateUserRequestBodyArg = exports.serializeCreateUserRequestBodyArg = exports.deserializeCreateUserRequestBodyArgStatusField = exports.serializeCreateUserRequestBodyArgStatusField = exports.deserializeCreateUserRequestBodyArgRoleField = exports.serializeCreateUserRequestBodyArgRoleField = exports.UsersManager = exports.DeleteUserByIdHeadersArg = exports.UpdateUserByIdHeadersArg = exports.GetUserByIdHeadersArg = exports.GetUserMeHeadersArg = exports.CreateUserHeadersArg = exports.GetUsersHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const schemas_generated_js_5 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetUsersHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetUsersHeadersArg = GetUsersHeadersArg;
class CreateUserHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateUserHeadersArg = CreateUserHeadersArg;
class GetUserMeHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetUserMeHeadersArg = GetUserMeHeadersArg;
class GetUserByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetUserByIdHeadersArg = GetUserByIdHeadersArg;
class UpdateUserByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateUserByIdHeadersArg = UpdateUserByIdHeadersArg;
class DeleteUserByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteUserByIdHeadersArg = DeleteUserByIdHeadersArg;
class UsersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUsers(queryParams = {}, headers = new GetUsersHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["filter_term"]: (0, utils_js_2.toString)(queryParams.filterTerm), ["user_type"]: (0, utils_js_2.toString)(queryParams.userType), ["external_app_user_id"]: (0, utils_js_2.toString)(queryParams.externalAppUserId), ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["offset"]: (0, utils_js_2.toString)(queryParams.offset), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["usemarker"]: (0, utils_js_2.toString)(queryParams.usemarker), ["marker"]: (0, utils_js_2.toString)(queryParams.marker) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUsers)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createUser(requestBody, queryParams = {}, headers = new CreateUserHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users"), { method: "POST", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateUserRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeUser)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getUserMe(queryParams = {}, headers = new GetUserMeHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/me"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_5.deserializeUserFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getUserById(userId, queryParams = {}, headers = new GetUserByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_5.deserializeUserFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateUserById(userId, requestBody, queryParams = {}, headers = new UpdateUserByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateUserByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_5.deserializeUserFull)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteUserById(userId, queryParams = {}, headers = new DeleteUserByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["notify"]: (0, utils_js_2.toString)(queryParams.notify), ["force"]: (0, utils_js_2.toString)(queryParams.force) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId), { method: "DELETE", params: queryParamsMap, headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.UsersManager = UsersManager;
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
//# sourceMappingURL=users.generated.js.map