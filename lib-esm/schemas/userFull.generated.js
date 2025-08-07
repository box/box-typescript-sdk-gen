import { deserializeUserBaseTypeField } from './userBase.generated.js';
import { deserializeDateTime } from '../internal/utils.js';
import { deserializeUserStatusField } from './user.generated.js';
import { deserializeUserNotificationEmailField } from './user.generated.js';
import { serializeUser } from './user.generated.js';
import { serializeTrackingCode } from './trackingCode.generated.js';
import { deserializeTrackingCode } from './trackingCode.generated.js';
import { User } from './user.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class UserFull extends User {
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
export function serializeUserFullRoleField(val) {
    return val;
}
export function deserializeUserFullRoleField(val) {
    if (val == 'admin') {
        return val;
    }
    if (val == 'coadmin') {
        return val;
    }
    if (val == 'user') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize UserFullRoleField" });
}
export function serializeUserFullEnterpriseTypeField(val) {
    return val;
}
export function deserializeUserFullEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UserFullEnterpriseTypeField",
    });
}
export function serializeUserFullEnterpriseField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeUserFullEnterpriseTypeField(val.type),
        ['name']: val.name,
    };
}
export function deserializeUserFullEnterpriseField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UserFullEnterpriseField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UserFullEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeUserFullEnterpriseTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UserFullEnterpriseField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return { id: id, type: type, name: name };
}
export function serializeUserFull(val) {
    const base = serializeUser(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UserFull"' });
    }
    return {
        ...base,
        ...{
            ['role']: val.role == void 0 ? val.role : serializeUserFullRoleField(val.role),
            ['tracking_codes']: val.trackingCodes == void 0
                ? val.trackingCodes
                : val.trackingCodes.map(function (item) {
                    return serializeTrackingCode(item);
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
        },
    };
}
export function deserializeUserFull(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UserFull"' });
    }
    const role = val.role == void 0 ? void 0 : deserializeUserFullRoleField(val.role);
    if (!(val.tracking_codes == void 0) && !sdIsList(val.tracking_codes)) {
        throw new BoxSdkError({
            message: 'Expecting array for "tracking_codes" of type "UserFull"',
        });
    }
    const trackingCodes = val.tracking_codes == void 0
        ? void 0
        : sdIsList(val.tracking_codes)
            ? val.tracking_codes.map(function (itm) {
                return deserializeTrackingCode(itm);
            })
            : [];
    if (!(val.can_see_managed_users == void 0) &&
        !sdIsBoolean(val.can_see_managed_users)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_see_managed_users" of type "UserFull"',
        });
    }
    const canSeeManagedUsers = val.can_see_managed_users == void 0 ? void 0 : val.can_see_managed_users;
    if (!(val.is_sync_enabled == void 0) && !sdIsBoolean(val.is_sync_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_sync_enabled" of type "UserFull"',
        });
    }
    const isSyncEnabled = val.is_sync_enabled == void 0 ? void 0 : val.is_sync_enabled;
    if (!(val.is_external_collab_restricted == void 0) &&
        !sdIsBoolean(val.is_external_collab_restricted)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_external_collab_restricted" of type "UserFull"',
        });
    }
    const isExternalCollabRestricted = val.is_external_collab_restricted == void 0
        ? void 0
        : val.is_external_collab_restricted;
    if (!(val.is_exempt_from_device_limits == void 0) &&
        !sdIsBoolean(val.is_exempt_from_device_limits)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_exempt_from_device_limits" of type "UserFull"',
        });
    }
    const isExemptFromDeviceLimits = val.is_exempt_from_device_limits == void 0
        ? void 0
        : val.is_exempt_from_device_limits;
    if (!(val.is_exempt_from_login_verification == void 0) &&
        !sdIsBoolean(val.is_exempt_from_login_verification)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_exempt_from_login_verification" of type "UserFull"',
        });
    }
    const isExemptFromLoginVerification = val.is_exempt_from_login_verification == void 0
        ? void 0
        : val.is_exempt_from_login_verification;
    const enterprise = val.enterprise == void 0
        ? void 0
        : deserializeUserFullEnterpriseField(val.enterprise);
    if (!(val.my_tags == void 0) && !sdIsList(val.my_tags)) {
        throw new BoxSdkError({
            message: 'Expecting array for "my_tags" of type "UserFull"',
        });
    }
    const myTags = val.my_tags == void 0
        ? void 0
        : sdIsList(val.my_tags)
            ? val.my_tags.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "UserFull"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.hostname == void 0) && !sdIsString(val.hostname)) {
        throw new BoxSdkError({
            message: 'Expecting string for "hostname" of type "UserFull"',
        });
    }
    const hostname = val.hostname == void 0 ? void 0 : val.hostname;
    if (!(val.is_platform_access_only == void 0) &&
        !sdIsBoolean(val.is_platform_access_only)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_platform_access_only" of type "UserFull"',
        });
    }
    const isPlatformAccessOnly = val.is_platform_access_only == void 0
        ? void 0
        : val.is_platform_access_only;
    if (!(val.external_app_user_id == void 0) &&
        !sdIsString(val.external_app_user_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "external_app_user_id" of type "UserFull"',
        });
    }
    const externalAppUserId = val.external_app_user_id == void 0 ? void 0 : val.external_app_user_id;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "UserFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "UserFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (!(val.language == void 0) && !sdIsString(val.language)) {
        throw new BoxSdkError({
            message: 'Expecting string for "language" of type "UserFull"',
        });
    }
    const language = val.language == void 0 ? void 0 : val.language;
    if (!(val.timezone == void 0) && !sdIsString(val.timezone)) {
        throw new BoxSdkError({
            message: 'Expecting string for "timezone" of type "UserFull"',
        });
    }
    const timezone = val.timezone == void 0 ? void 0 : val.timezone;
    if (!(val.space_amount == void 0) && !sdIsNumber(val.space_amount)) {
        throw new BoxSdkError({
            message: 'Expecting number for "space_amount" of type "UserFull"',
        });
    }
    const spaceAmount = val.space_amount == void 0 ? void 0 : val.space_amount;
    if (!(val.space_used == void 0) && !sdIsNumber(val.space_used)) {
        throw new BoxSdkError({
            message: 'Expecting number for "space_used" of type "UserFull"',
        });
    }
    const spaceUsed = val.space_used == void 0 ? void 0 : val.space_used;
    if (!(val.max_upload_size == void 0) && !sdIsNumber(val.max_upload_size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "max_upload_size" of type "UserFull"',
        });
    }
    const maxUploadSize = val.max_upload_size == void 0 ? void 0 : val.max_upload_size;
    const status = val.status == void 0 ? void 0 : deserializeUserStatusField(val.status);
    if (!(val.job_title == void 0) && !sdIsString(val.job_title)) {
        throw new BoxSdkError({
            message: 'Expecting string for "job_title" of type "UserFull"',
        });
    }
    const jobTitle = val.job_title == void 0 ? void 0 : val.job_title;
    if (!(val.phone == void 0) && !sdIsString(val.phone)) {
        throw new BoxSdkError({
            message: 'Expecting string for "phone" of type "UserFull"',
        });
    }
    const phone = val.phone == void 0 ? void 0 : val.phone;
    if (!(val.address == void 0) && !sdIsString(val.address)) {
        throw new BoxSdkError({
            message: 'Expecting string for "address" of type "UserFull"',
        });
    }
    const address = val.address == void 0 ? void 0 : val.address;
    if (!(val.avatar_url == void 0) && !sdIsString(val.avatar_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "avatar_url" of type "UserFull"',
        });
    }
    const avatarUrl = val.avatar_url == void 0 ? void 0 : val.avatar_url;
    const notificationEmail = val.notification_email == void 0
        ? void 0
        : deserializeUserNotificationEmailField(val.notification_email);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UserFull"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.login == void 0) && !sdIsString(val.login)) {
        throw new BoxSdkError({
            message: 'Expecting string for "login" of type "UserFull"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UserFull" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UserFull"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "UserFull" to be defined',
        });
    }
    const type = deserializeUserBaseTypeField(val.type);
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