"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFull = void 0;
exports.serializeUserFullRoleField = serializeUserFullRoleField;
exports.deserializeUserFullRoleField = deserializeUserFullRoleField;
exports.serializeUserFullEnterpriseTypeField = serializeUserFullEnterpriseTypeField;
exports.deserializeUserFullEnterpriseTypeField = deserializeUserFullEnterpriseTypeField;
exports.serializeUserFullEnterpriseField = serializeUserFullEnterpriseField;
exports.deserializeUserFullEnterpriseField = deserializeUserFullEnterpriseField;
exports.serializeUserFull = serializeUserFull;
exports.deserializeUserFull = deserializeUserFull;
const userBase_generated_js_1 = require("./userBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const user_generated_js_1 = require("./user.generated.js");
const user_generated_js_2 = require("./user.generated.js");
const user_generated_js_3 = require("./user.generated.js");
const trackingCode_generated_js_1 = require("./trackingCode.generated.js");
const trackingCode_generated_js_2 = require("./trackingCode.generated.js");
const user_generated_js_4 = require("./user.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
class UserFull extends user_generated_js_4.User {
    constructor(fields) {
        super(fields);
        if (fields.role !== undefined) {
            this.role = fields.role;
        }
        if (fields.trackingCodes !== undefined) {
            this.trackingCodes = fields.trackingCodes;
        }
        if (fields.canSeeManagedUsers !== undefined) {
            this.canSeeManagedUsers = fields.canSeeManagedUsers;
        }
        if (fields.isSyncEnabled !== undefined) {
            this.isSyncEnabled = fields.isSyncEnabled;
        }
        if (fields.isExternalCollabRestricted !== undefined) {
            this.isExternalCollabRestricted = fields.isExternalCollabRestricted;
        }
        if (fields.isExemptFromDeviceLimits !== undefined) {
            this.isExemptFromDeviceLimits = fields.isExemptFromDeviceLimits;
        }
        if (fields.isExemptFromLoginVerification !== undefined) {
            this.isExemptFromLoginVerification = fields.isExemptFromLoginVerification;
        }
        if (fields.enterprise !== undefined) {
            this.enterprise = fields.enterprise;
        }
        if (fields.myTags !== undefined) {
            this.myTags = fields.myTags;
        }
        if (fields.hostname !== undefined) {
            this.hostname = fields.hostname;
        }
        if (fields.isPlatformAccessOnly !== undefined) {
            this.isPlatformAccessOnly = fields.isPlatformAccessOnly;
        }
        if (fields.externalAppUserId !== undefined) {
            this.externalAppUserId = fields.externalAppUserId;
        }
    }
}
exports.UserFull = UserFull;
function serializeUserFullRoleField(val) {
    return val;
}
function deserializeUserFullRoleField(val) {
    if (val == 'admin') {
        return val;
    }
    if (val == 'coadmin') {
        return val;
    }
    if (val == 'user') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize UserFullRoleField" });
}
function serializeUserFullEnterpriseTypeField(val) {
    return val;
}
function deserializeUserFullEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UserFullEnterpriseTypeField",
    });
}
function serializeUserFullEnterpriseField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeUserFullEnterpriseTypeField(val.type),
        ['name']: val.name,
    };
}
function deserializeUserFullEnterpriseField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UserFullEnterpriseField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UserFullEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeUserFullEnterpriseTypeField(val.type);
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UserFullEnterpriseField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return { id: id, type: type, name: name };
}
function serializeUserFull(val) {
    const base = (0, user_generated_js_3.serializeUser)(val);
    if (!(0, json_js_5.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UserFull"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['role']: val.role == void 0 ? val.role : serializeUserFullRoleField(val.role),
        ['tracking_codes']: val.trackingCodes == void 0
            ? val.trackingCodes
            : val.trackingCodes.map(function (item) {
                return (0, trackingCode_generated_js_1.serializeTrackingCode)(item);
            }),
        ['can_see_managed_users']: val.canSeeManagedUsers,
        ['is_sync_enabled']: val.isSyncEnabled,
        ['is_external_collab_restricted']: val.isExternalCollabRestricted,
        ['is_exempt_from_device_limits']: val.isExemptFromDeviceLimits,
        ['is_exempt_from_login_verification']: val.isExemptFromLoginVerification,
        ['enterprise']: val.enterprise == void 0
            ? val.enterprise
            : serializeUserFullEnterpriseField(val.enterprise),
        ['my_tags']: val.myTags == void 0
            ? val.myTags
            : val.myTags.map(function (item) {
                return item;
            }),
        ['hostname']: val.hostname,
        ['is_platform_access_only']: val.isPlatformAccessOnly,
        ['external_app_user_id']: val.externalAppUserId,
    });
}
function deserializeUserFull(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UserFull"' });
    }
    const role = val.role == void 0 ? void 0 : deserializeUserFullRoleField(val.role);
    if (!(val.tracking_codes == void 0) && !(0, json_js_4.sdIsList)(val.tracking_codes)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "tracking_codes" of type "UserFull"',
        });
    }
    const trackingCodes = val.tracking_codes == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.tracking_codes)
            ? val.tracking_codes.map(function (itm) {
                return (0, trackingCode_generated_js_2.deserializeTrackingCode)(itm);
            })
            : [];
    if (!(val.can_see_managed_users == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.can_see_managed_users)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_see_managed_users" of type "UserFull"',
        });
    }
    const canSeeManagedUsers = val.can_see_managed_users == void 0 ? void 0 : val.can_see_managed_users;
    if (!(val.is_sync_enabled == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_sync_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_sync_enabled" of type "UserFull"',
        });
    }
    const isSyncEnabled = val.is_sync_enabled == void 0 ? void 0 : val.is_sync_enabled;
    if (!(val.is_external_collab_restricted == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_external_collab_restricted)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_external_collab_restricted" of type "UserFull"',
        });
    }
    const isExternalCollabRestricted = val.is_external_collab_restricted == void 0
        ? void 0
        : val.is_external_collab_restricted;
    if (!(val.is_exempt_from_device_limits == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_exempt_from_device_limits)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_exempt_from_device_limits" of type "UserFull"',
        });
    }
    const isExemptFromDeviceLimits = val.is_exempt_from_device_limits == void 0
        ? void 0
        : val.is_exempt_from_device_limits;
    if (!(val.is_exempt_from_login_verification == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_exempt_from_login_verification)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_exempt_from_login_verification" of type "UserFull"',
        });
    }
    const isExemptFromLoginVerification = val.is_exempt_from_login_verification == void 0
        ? void 0
        : val.is_exempt_from_login_verification;
    const enterprise = val.enterprise == void 0
        ? void 0
        : deserializeUserFullEnterpriseField(val.enterprise);
    if (!(val.my_tags == void 0) && !(0, json_js_4.sdIsList)(val.my_tags)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "my_tags" of type "UserFull"',
        });
    }
    const myTags = val.my_tags == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.my_tags)
            ? val.my_tags.map(function (itm) {
                if (!(0, json_js_3.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "UserFull"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.hostname == void 0) && !(0, json_js_3.sdIsString)(val.hostname)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "hostname" of type "UserFull"',
        });
    }
    const hostname = val.hostname == void 0 ? void 0 : val.hostname;
    if (!(val.is_platform_access_only == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_platform_access_only)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_platform_access_only" of type "UserFull"',
        });
    }
    const isPlatformAccessOnly = val.is_platform_access_only == void 0
        ? void 0
        : val.is_platform_access_only;
    if (!(val.external_app_user_id == void 0) &&
        !(0, json_js_3.sdIsString)(val.external_app_user_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "external_app_user_id" of type "UserFull"',
        });
    }
    const externalAppUserId = val.external_app_user_id == void 0 ? void 0 : val.external_app_user_id;
    if (!(val.created_at == void 0) && !(0, json_js_3.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "UserFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_3.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "UserFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.modified_at);
    if (!(val.language == void 0) && !(0, json_js_3.sdIsString)(val.language)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "language" of type "UserFull"',
        });
    }
    const language = val.language == void 0 ? void 0 : val.language;
    if (!(val.timezone == void 0) && !(0, json_js_3.sdIsString)(val.timezone)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "timezone" of type "UserFull"',
        });
    }
    const timezone = val.timezone == void 0 ? void 0 : val.timezone;
    if (!(val.space_amount == void 0) && !(0, json_js_2.sdIsNumber)(val.space_amount)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "space_amount" of type "UserFull"',
        });
    }
    const spaceAmount = val.space_amount == void 0 ? void 0 : val.space_amount;
    if (!(val.space_used == void 0) && !(0, json_js_2.sdIsNumber)(val.space_used)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "space_used" of type "UserFull"',
        });
    }
    const spaceUsed = val.space_used == void 0 ? void 0 : val.space_used;
    if (!(val.max_upload_size == void 0) && !(0, json_js_2.sdIsNumber)(val.max_upload_size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "max_upload_size" of type "UserFull"',
        });
    }
    const maxUploadSize = val.max_upload_size == void 0 ? void 0 : val.max_upload_size;
    const status = val.status == void 0 ? void 0 : (0, user_generated_js_1.deserializeUserStatusField)(val.status);
    if (!(val.job_title == void 0) && !(0, json_js_3.sdIsString)(val.job_title)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "job_title" of type "UserFull"',
        });
    }
    const jobTitle = val.job_title == void 0 ? void 0 : val.job_title;
    if (!(val.phone == void 0) && !(0, json_js_3.sdIsString)(val.phone)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "phone" of type "UserFull"',
        });
    }
    const phone = val.phone == void 0 ? void 0 : val.phone;
    if (!(val.address == void 0) && !(0, json_js_3.sdIsString)(val.address)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "address" of type "UserFull"',
        });
    }
    const address = val.address == void 0 ? void 0 : val.address;
    if (!(val.avatar_url == void 0) && !(0, json_js_3.sdIsString)(val.avatar_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "avatar_url" of type "UserFull"',
        });
    }
    const avatarUrl = val.avatar_url == void 0 ? void 0 : val.avatar_url;
    const notificationEmail = val.notification_email == void 0
        ? void 0
        : (0, user_generated_js_2.deserializeUserNotificationEmailField)(val.notification_email);
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UserFull"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.login == void 0) && !(0, json_js_3.sdIsString)(val.login)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "login" of type "UserFull"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UserFull" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UserFull"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "UserFull" to be defined',
        });
    }
    const type = (0, userBase_generated_js_1.deserializeUserBaseTypeField)(val.type);
    return {
        role: role,
        trackingCodes: trackingCodes,
        canSeeManagedUsers: canSeeManagedUsers,
        isSyncEnabled: isSyncEnabled,
        isExternalCollabRestricted: isExternalCollabRestricted,
        isExemptFromDeviceLimits: isExemptFromDeviceLimits,
        isExemptFromLoginVerification: isExemptFromLoginVerification,
        enterprise: enterprise,
        myTags: myTags,
        hostname: hostname,
        isPlatformAccessOnly: isPlatformAccessOnly,
        externalAppUserId: externalAppUserId,
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
//# sourceMappingURL=userFull.generated.js.map