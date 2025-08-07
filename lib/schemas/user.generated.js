"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
exports.serializeUserStatusField = serializeUserStatusField;
exports.deserializeUserStatusField = deserializeUserStatusField;
exports.serializeUserNotificationEmailField = serializeUserNotificationEmailField;
exports.deserializeUserNotificationEmailField = deserializeUserNotificationEmailField;
exports.serializeUser = serializeUser;
exports.deserializeUser = deserializeUser;
const userBase_generated_js_1 = require("./userBase.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
class User extends userMini_generated_js_2.UserMini {
    constructor(fields) {
        super(fields);
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
        if (fields.language !== undefined) {
            this.language = fields.language;
        }
        if (fields.timezone !== undefined) {
            this.timezone = fields.timezone;
        }
        if (fields.spaceAmount !== undefined) {
            this.spaceAmount = fields.spaceAmount;
        }
        if (fields.spaceUsed !== undefined) {
            this.spaceUsed = fields.spaceUsed;
        }
        if (fields.maxUploadSize !== undefined) {
            this.maxUploadSize = fields.maxUploadSize;
        }
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.jobTitle !== undefined) {
            this.jobTitle = fields.jobTitle;
        }
        if (fields.phone !== undefined) {
            this.phone = fields.phone;
        }
        if (fields.address !== undefined) {
            this.address = fields.address;
        }
        if (fields.avatarUrl !== undefined) {
            this.avatarUrl = fields.avatarUrl;
        }
        if (fields.notificationEmail !== undefined) {
            this.notificationEmail = fields.notificationEmail;
        }
    }
}
exports.User = User;
function serializeUserStatusField(val) {
    return val;
}
function deserializeUserStatusField(val) {
    if (val == 'active') {
        return val;
    }
    if (val == 'inactive') {
        return val;
    }
    if (val == 'cannot_delete_edit') {
        return val;
    }
    if (val == 'cannot_delete_edit_upload') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize UserStatusField" });
}
function serializeUserNotificationEmailField(val) {
    return { ['email']: val.email, ['is_confirmed']: val.isConfirmed };
}
function deserializeUserNotificationEmailField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UserNotificationEmailField"',
        });
    }
    if (!(val.email == void 0) && !(0, json_js_3.sdIsString)(val.email)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email" of type "UserNotificationEmailField"',
        });
    }
    const email = val.email == void 0 ? void 0 : val.email;
    if (!(val.is_confirmed == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_confirmed)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_confirmed" of type "UserNotificationEmailField"',
        });
    }
    const isConfirmed = val.is_confirmed == void 0 ? void 0 : val.is_confirmed;
    return {
        email: email,
        isConfirmed: isConfirmed,
    };
}
function serializeUser(val) {
    const base = (0, userMini_generated_js_1.serializeUserMini)(val);
    if (!(0, json_js_4.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "User"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['language']: val.language,
        ['timezone']: val.timezone,
        ['space_amount']: val.spaceAmount,
        ['space_used']: val.spaceUsed,
        ['max_upload_size']: val.maxUploadSize,
        ['status']: val.status == void 0
            ? val.status
            : serializeUserStatusField(val.status),
        ['job_title']: val.jobTitle,
        ['phone']: val.phone,
        ['address']: val.address,
        ['avatar_url']: val.avatarUrl,
        ['notification_email']: val.notificationEmail == void 0
            ? val.notificationEmail
            : serializeUserNotificationEmailField(val.notificationEmail),
    });
}
function deserializeUser(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "User"' });
    }
    if (!(val.created_at == void 0) && !(0, json_js_3.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "User"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_3.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "User"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.language == void 0) && !(0, json_js_3.sdIsString)(val.language)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "language" of type "User"',
        });
    }
    const language = val.language == void 0 ? void 0 : val.language;
    if (!(val.timezone == void 0) && !(0, json_js_3.sdIsString)(val.timezone)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "timezone" of type "User"',
        });
    }
    const timezone = val.timezone == void 0 ? void 0 : val.timezone;
    if (!(val.space_amount == void 0) && !(0, json_js_2.sdIsNumber)(val.space_amount)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "space_amount" of type "User"',
        });
    }
    const spaceAmount = val.space_amount == void 0 ? void 0 : val.space_amount;
    if (!(val.space_used == void 0) && !(0, json_js_2.sdIsNumber)(val.space_used)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "space_used" of type "User"',
        });
    }
    const spaceUsed = val.space_used == void 0 ? void 0 : val.space_used;
    if (!(val.max_upload_size == void 0) && !(0, json_js_2.sdIsNumber)(val.max_upload_size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "max_upload_size" of type "User"',
        });
    }
    const maxUploadSize = val.max_upload_size == void 0 ? void 0 : val.max_upload_size;
    const status = val.status == void 0 ? void 0 : deserializeUserStatusField(val.status);
    if (!(val.job_title == void 0) && !(0, json_js_3.sdIsString)(val.job_title)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "job_title" of type "User"',
        });
    }
    const jobTitle = val.job_title == void 0 ? void 0 : val.job_title;
    if (!(val.phone == void 0) && !(0, json_js_3.sdIsString)(val.phone)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "phone" of type "User"',
        });
    }
    const phone = val.phone == void 0 ? void 0 : val.phone;
    if (!(val.address == void 0) && !(0, json_js_3.sdIsString)(val.address)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "address" of type "User"',
        });
    }
    const address = val.address == void 0 ? void 0 : val.address;
    if (!(val.avatar_url == void 0) && !(0, json_js_3.sdIsString)(val.avatar_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "avatar_url" of type "User"',
        });
    }
    const avatarUrl = val.avatar_url == void 0 ? void 0 : val.avatar_url;
    const notificationEmail = val.notification_email == void 0
        ? void 0
        : deserializeUserNotificationEmailField(val.notification_email);
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "User"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.login == void 0) && !(0, json_js_3.sdIsString)(val.login)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "login" of type "User"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "User" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "User"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "User" to be defined',
        });
    }
    const type = (0, userBase_generated_js_1.deserializeUserBaseTypeField)(val.type);
    return {
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        language: language,
        timezone: timezone,
        spaceAmount: spaceAmount,
        spaceUsed: spaceUsed,
        maxUploadSize: maxUploadSize,
        status: status,
        jobTitle: jobTitle,
        phone: phone,
        address: address,
        avatarUrl: avatarUrl,
        notificationEmail: notificationEmail,
        name: name,
        login: login,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=user.generated.js.map