import { serializeUserBaseTypeField } from './userBase.generated.js';
import { deserializeUserBaseTypeField } from './userBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { UserBaseTypeField } from './userBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type UserStatusField =
  | 'active'
  | 'inactive'
  | 'cannot_delete_edit'
  | 'cannot_delete_edit_upload';
export interface UserNotificationEmailField {
  readonly email?: string;
  readonly isConfirmed?: boolean;
}
export class User extends UserMini {
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly language?: string;
  readonly timezone?: string;
  readonly spaceAmount?: number;
  readonly spaceUsed?: number;
  readonly maxUploadSize?: number;
  readonly status?: UserStatusField;
  readonly jobTitle?: string;
  readonly phone?: string;
  readonly address?: string;
  readonly avatarUrl?: string;
  readonly notificationEmail?: UserNotificationEmailField;
  constructor(fields: User) {
    super(fields);
  }
}
export function serializeUserStatusField(val: UserStatusField): SerializedData {
  return val;
}
export function deserializeUserStatusField(val: any): UserStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UserStatusField"',
    });
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'inactive') {
    return 'inactive';
  }
  if (val == 'cannot_delete_edit') {
    return 'cannot_delete_edit';
  }
  if (val == 'cannot_delete_edit_upload') {
    return 'cannot_delete_edit_upload';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUserNotificationEmailField(
  val: UserNotificationEmailField
): SerializedData {
  return {
    ['email']: val.email == void 0 ? void 0 : val.email,
    ['is_confirmed']: val.isConfirmed == void 0 ? void 0 : val.isConfirmed,
  };
}
export function deserializeUserNotificationEmailField(
  val: any
): UserNotificationEmailField {
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  const isConfirmed: undefined | boolean =
    val.is_confirmed == void 0 ? void 0 : val.is_confirmed;
  return {
    email: email,
    isConfirmed: isConfirmed,
  } satisfies UserNotificationEmailField;
}
export function serializeUser(val: User): SerializedData {
  const base: any = serializeUserMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "User"' });
  }
  return {
    ...base,
    ...{
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
      ['language']: val.language == void 0 ? void 0 : val.language,
      ['timezone']: val.timezone == void 0 ? void 0 : val.timezone,
      ['space_amount']: val.spaceAmount == void 0 ? void 0 : val.spaceAmount,
      ['space_used']: val.spaceUsed == void 0 ? void 0 : val.spaceUsed,
      ['max_upload_size']:
        val.maxUploadSize == void 0 ? void 0 : val.maxUploadSize,
      ['status']:
        val.status == void 0 ? void 0 : serializeUserStatusField(val.status),
      ['job_title']: val.jobTitle == void 0 ? void 0 : val.jobTitle,
      ['phone']: val.phone == void 0 ? void 0 : val.phone,
      ['address']: val.address == void 0 ? void 0 : val.address,
      ['avatar_url']: val.avatarUrl == void 0 ? void 0 : val.avatarUrl,
      ['notification_email']:
        val.notificationEmail == void 0
          ? void 0
          : serializeUserNotificationEmailField(val.notificationEmail),
    },
  };
}
export function deserializeUser(val: any): User {
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
  } satisfies User;
}
