import { serializeUserBaseTypeField } from './userBase.generated.js';
import { deserializeUserBaseTypeField } from './userBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { serializeUserStatusField } from './user.generated.js';
import { deserializeUserStatusField } from './user.generated.js';
import { serializeUserNotificationEmailField } from './user.generated.js';
import { deserializeUserNotificationEmailField } from './user.generated.js';
import { serializeUser } from './user.generated.js';
import { deserializeUser } from './user.generated.js';
import { serializeTrackingCode } from './trackingCode.generated.js';
import { deserializeTrackingCode } from './trackingCode.generated.js';
import { UserBaseTypeField } from './userBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { UserStatusField } from './user.generated.js';
import { UserNotificationEmailField } from './user.generated.js';
import { User } from './user.generated.js';
import { TrackingCode } from './trackingCode.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type UserFullRoleField = 'admin' | 'coadmin' | 'user';
export type UserFullEnterpriseTypeField = 'enterprise';
export interface UserFullEnterpriseField {
  readonly id?: string;
  readonly type?: UserFullEnterpriseTypeField;
  readonly name?: string;
}
export class UserFull extends User {
  readonly role?: UserFullRoleField;
  readonly trackingCodes?: readonly TrackingCode[];
  readonly canSeeManagedUsers?: boolean;
  readonly isSyncEnabled?: boolean;
  readonly isExternalCollabRestricted?: boolean;
  readonly isExemptFromDeviceLimits?: boolean;
  readonly isExemptFromLoginVerification?: boolean;
  readonly enterprise?: UserFullEnterpriseField;
  readonly myTags?: readonly string[];
  readonly hostname?: string;
  readonly isPlatformAccessOnly?: boolean;
  readonly externalAppUserId?: string;
  constructor(fields: UserFull) {
    super(fields);
  }
}
export function serializeUserFullRoleField(
  val: UserFullRoleField
): SerializedData {
  return val;
}
export function deserializeUserFullRoleField(val: any): UserFullRoleField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UserFullRoleField"',
    });
  }
  if (val == 'admin') {
    return 'admin';
  }
  if (val == 'coadmin') {
    return 'coadmin';
  }
  if (val == 'user') {
    return 'user';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUserFullEnterpriseTypeField(
  val: UserFullEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeUserFullEnterpriseTypeField(
  val: any
): UserFullEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UserFullEnterpriseTypeField"',
    });
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUserFullEnterpriseField(
  val: UserFullEnterpriseField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeUserFullEnterpriseTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeUserFullEnterpriseField(
  val: any
): UserFullEnterpriseField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | UserFullEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeUserFullEnterpriseTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return { id: id, type: type, name: name } satisfies UserFullEnterpriseField;
}
export function serializeUserFull(val: UserFull): SerializedData {
  const base: any = serializeUser(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "UserFull"' });
  }
  return {
    ...base,
    ...{
      ['role']:
        val.role == void 0 ? void 0 : serializeUserFullRoleField(val.role),
      ['tracking_codes']:
        val.trackingCodes == void 0
          ? void 0
          : (val.trackingCodes.map(function (
              item: TrackingCode
            ): SerializedData {
              return serializeTrackingCode(item);
            }) as readonly any[]),
      ['can_see_managed_users']:
        val.canSeeManagedUsers == void 0 ? void 0 : val.canSeeManagedUsers,
      ['is_sync_enabled']:
        val.isSyncEnabled == void 0 ? void 0 : val.isSyncEnabled,
      ['is_external_collab_restricted']:
        val.isExternalCollabRestricted == void 0
          ? void 0
          : val.isExternalCollabRestricted,
      ['is_exempt_from_device_limits']:
        val.isExemptFromDeviceLimits == void 0
          ? void 0
          : val.isExemptFromDeviceLimits,
      ['is_exempt_from_login_verification']:
        val.isExemptFromLoginVerification == void 0
          ? void 0
          : val.isExemptFromLoginVerification,
      ['enterprise']:
        val.enterprise == void 0
          ? void 0
          : serializeUserFullEnterpriseField(val.enterprise),
      ['my_tags']:
        val.myTags == void 0
          ? void 0
          : (val.myTags.map(function (item: string): SerializedData {
              return item;
            }) as readonly any[]),
      ['hostname']: val.hostname == void 0 ? void 0 : val.hostname,
      ['is_platform_access_only']:
        val.isPlatformAccessOnly == void 0 ? void 0 : val.isPlatformAccessOnly,
      ['external_app_user_id']:
        val.externalAppUserId == void 0 ? void 0 : val.externalAppUserId,
    },
  };
}
export function deserializeUserFull(val: any): UserFull {
  const role: undefined | UserFullRoleField =
    val.role == void 0 ? void 0 : deserializeUserFullRoleField(val.role);
  const trackingCodes: undefined | readonly TrackingCode[] =
    val.tracking_codes == void 0
      ? void 0
      : sdIsList(val.tracking_codes)
      ? (val.tracking_codes.map(function (itm: SerializedData): TrackingCode {
          return deserializeTrackingCode(itm);
        }) as readonly any[])
      : [];
  const canSeeManagedUsers: undefined | boolean =
    val.can_see_managed_users == void 0 ? void 0 : val.can_see_managed_users;
  const isSyncEnabled: undefined | boolean =
    val.is_sync_enabled == void 0 ? void 0 : val.is_sync_enabled;
  const isExternalCollabRestricted: undefined | boolean =
    val.is_external_collab_restricted == void 0
      ? void 0
      : val.is_external_collab_restricted;
  const isExemptFromDeviceLimits: undefined | boolean =
    val.is_exempt_from_device_limits == void 0
      ? void 0
      : val.is_exempt_from_device_limits;
  const isExemptFromLoginVerification: undefined | boolean =
    val.is_exempt_from_login_verification == void 0
      ? void 0
      : val.is_exempt_from_login_verification;
  const enterprise: undefined | UserFullEnterpriseField =
    val.enterprise == void 0
      ? void 0
      : deserializeUserFullEnterpriseField(val.enterprise);
  const myTags: undefined | readonly string[] =
    val.my_tags == void 0 ? void 0 : sdIsList(val.my_tags) ? val.my_tags : [];
  const hostname: undefined | string =
    val.hostname == void 0 ? void 0 : val.hostname;
  const isPlatformAccessOnly: undefined | boolean =
    val.is_platform_access_only == void 0
      ? void 0
      : val.is_platform_access_only;
  const externalAppUserId: undefined | string =
    val.external_app_user_id == void 0 ? void 0 : val.external_app_user_id;
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  const language: undefined | string =
    val.language == void 0 ? void 0 : val.language;
  const timezone: undefined | string =
    val.timezone == void 0 ? void 0 : val.timezone;
  const spaceAmount: undefined | number =
    val.space_amount == void 0 ? void 0 : val.space_amount;
  const spaceUsed: undefined | number =
    val.space_used == void 0 ? void 0 : val.space_used;
  const maxUploadSize: undefined | number =
    val.max_upload_size == void 0 ? void 0 : val.max_upload_size;
  const status: undefined | UserStatusField =
    val.status == void 0 ? void 0 : deserializeUserStatusField(val.status);
  const jobTitle: undefined | string =
    val.job_title == void 0 ? void 0 : val.job_title;
  const phone: undefined | string = val.phone == void 0 ? void 0 : val.phone;
  const address: undefined | string =
    val.address == void 0 ? void 0 : val.address;
  const avatarUrl: undefined | string =
    val.avatar_url == void 0 ? void 0 : val.avatar_url;
  const notificationEmail: undefined | UserNotificationEmailField =
    val.notification_email == void 0
      ? void 0
      : deserializeUserNotificationEmailField(val.notification_email);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const id: string = val.id;
  const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
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
  } satisfies UserFull;
}
