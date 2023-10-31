import { serializeUsers } from '../schemas.generated.js';
import { deserializeUsers } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeUser } from '../schemas.generated.js';
import { deserializeUser } from '../schemas.generated.js';
import { serializeTrackingCode } from '../schemas.generated.js';
import { deserializeTrackingCode } from '../schemas.generated.js';
import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { Users } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { User } from '../schemas.generated.js';
import { TrackingCode } from '../schemas.generated.js';
import { UserFull } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export type GetUsersQueryParamsArgUserTypeField =
  | 'all'
  | 'managed'
  | 'external';
export interface GetUsersQueryParamsArg {
  readonly filterTerm?: string;
  readonly userType?: GetUsersQueryParamsArgUserTypeField;
  readonly externalAppUserId?: string;
  readonly fields?: readonly string[];
  readonly offset?: number;
  readonly limit?: number;
  readonly usemarker?: boolean;
  readonly marker?: string;
}
export class GetUsersHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUsersHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetUsersHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateUserRequestBodyArgRoleField = 'coadmin' | 'user';
export type CreateUserRequestBodyArgStatusField =
  | 'active'
  | 'inactive'
  | 'cannot_delete_edit'
  | 'cannot_delete_edit_upload';
export interface CreateUserRequestBodyArg {
  readonly name: string;
  readonly login?: string;
  readonly isPlatformAccessOnly?: boolean;
  readonly role?: CreateUserRequestBodyArgRoleField;
  readonly language?: string;
  readonly isSyncEnabled?: boolean;
  readonly jobTitle?: string;
  readonly phone?: string;
  readonly address?: string;
  readonly spaceAmount?: number;
  readonly trackingCodes?: readonly TrackingCode[];
  readonly canSeeManagedUsers?: boolean;
  readonly timezone?: string;
  readonly isExternalCollabRestricted?: boolean;
  readonly isExemptFromDeviceLimits?: boolean;
  readonly isExemptFromLoginVerification?: boolean;
  readonly status?: CreateUserRequestBodyArgStatusField;
  readonly externalAppUserId?: string;
}
export interface CreateUserQueryParamsArg {
  readonly fields?: readonly string[];
}
export class CreateUserHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateUserHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateUserHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetUserMeQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetUserMeHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUserMeHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetUserMeHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetUserByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class GetUserByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUserByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetUserByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateUserByIdRequestBodyArgRoleField = 'coadmin' | 'user';
export type UpdateUserByIdRequestBodyArgStatusField =
  | 'active'
  | 'inactive'
  | 'cannot_delete_edit'
  | 'cannot_delete_edit_upload';
export interface UpdateUserByIdRequestBodyArgNotificationEmailField {
  readonly email?: string;
}
export interface UpdateUserByIdRequestBodyArg {
  readonly enterprise?: string;
  readonly notify?: boolean;
  readonly name?: string;
  readonly login?: string;
  readonly role?: UpdateUserByIdRequestBodyArgRoleField;
  readonly language?: string;
  readonly isSyncEnabled?: boolean;
  readonly jobTitle?: string;
  readonly phone?: string;
  readonly address?: string;
  readonly trackingCodes?: readonly TrackingCode[];
  readonly canSeeManagedUsers?: boolean;
  readonly timezone?: string;
  readonly isExternalCollabRestricted?: boolean;
  readonly isExemptFromDeviceLimits?: boolean;
  readonly isExemptFromLoginVerification?: boolean;
  readonly isPasswordResetRequired?: boolean;
  readonly status?: UpdateUserByIdRequestBodyArgStatusField;
  readonly spaceAmount?: number;
  readonly notificationEmail?: UpdateUserByIdRequestBodyArgNotificationEmailField;
  readonly externalAppUserId?: string;
}
export interface UpdateUserByIdQueryParamsArg {
  readonly fields?: readonly string[];
}
export class UpdateUserByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateUserByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateUserByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface DeleteUserByIdQueryParamsArg {
  readonly notify?: boolean;
  readonly force?: boolean;
}
export class DeleteUserByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteUserByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteUserByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class UsersManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      UsersManager,
      | 'getUsers'
      | 'createUser'
      | 'getUserMe'
      | 'getUserById'
      | 'updateUserById'
      | 'deleteUserById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getUsers(
    queryParams: GetUsersQueryParamsArg = {} satisfies GetUsersQueryParamsArg,
    headers: GetUsersHeadersArg = new GetUsersHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<Users> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['filter_term']: toString(queryParams.filterTerm) as string,
      ['user_type']: toString(queryParams.userType) as string,
      ['external_app_user_id']: toString(
        queryParams.externalAppUserId
      ) as string,
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['usemarker']: toString(queryParams.usemarker) as string,
      ['marker']: toString(queryParams.marker) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/users') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUsers(deserializeJson(response.text));
  }
  async createUser(
    requestBody: CreateUserRequestBodyArg,
    queryParams: CreateUserQueryParamsArg = {} satisfies CreateUserQueryParamsArg,
    headers: CreateUserHeadersArg = new CreateUserHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<User> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/users') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        body: serializeJson(serializeCreateUserRequestBodyArg(requestBody)),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUser(deserializeJson(response.text));
  }
  async getUserMe(
    queryParams: GetUserMeQueryParamsArg = {} satisfies GetUserMeQueryParamsArg,
    headers: GetUserMeHeadersArg = new GetUserMeHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<UserFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/users/me') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserFull(deserializeJson(response.text));
  }
  async getUserById(
    userId: string,
    queryParams: GetUserByIdQueryParamsArg = {} satisfies GetUserByIdQueryParamsArg,
    headers: GetUserByIdHeadersArg = new GetUserByIdHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<UserFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/users/',
        toString(userId) as string
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserFull(deserializeJson(response.text));
  }
  async updateUserById(
    userId: string,
    requestBody: UpdateUserByIdRequestBodyArg = {} satisfies UpdateUserByIdRequestBodyArg,
    queryParams: UpdateUserByIdQueryParamsArg = {} satisfies UpdateUserByIdQueryParamsArg,
    headers: UpdateUserByIdHeadersArg = new UpdateUserByIdHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<UserFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/users/',
        toString(userId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        body: serializeJson(serializeUpdateUserByIdRequestBodyArg(requestBody)),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserFull(deserializeJson(response.text));
  }
  async deleteUserById(
    userId: string,
    queryParams: DeleteUserByIdQueryParamsArg = {} satisfies DeleteUserByIdQueryParamsArg,
    headers: DeleteUserByIdHeadersArg = new DeleteUserByIdHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['notify']: toString(queryParams.notify) as string,
      ['force']: toString(queryParams.force) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/users/',
        toString(userId) as string
      ) as string,
      {
        method: 'DELETE',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeGetUsersQueryParamsArgUserTypeField(
  val: GetUsersQueryParamsArgUserTypeField
): Json {
  return val;
}
export function deserializeGetUsersQueryParamsArgUserTypeField(
  val: any
): GetUsersQueryParamsArgUserTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetUsersQueryParamsArgUserTypeField"';
  }
  if (val == 'all') {
    return 'all';
  }
  if (val == 'managed') {
    return 'managed';
  }
  if (val == 'external') {
    return 'external';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateUserRequestBodyArgRoleField(
  val: CreateUserRequestBodyArgRoleField
): Json {
  return val;
}
export function deserializeCreateUserRequestBodyArgRoleField(
  val: any
): CreateUserRequestBodyArgRoleField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateUserRequestBodyArgRoleField"';
  }
  if (val == 'coadmin') {
    return 'coadmin';
  }
  if (val == 'user') {
    return 'user';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateUserRequestBodyArgStatusField(
  val: CreateUserRequestBodyArgStatusField
): Json {
  return val;
}
export function deserializeCreateUserRequestBodyArgStatusField(
  val: any
): CreateUserRequestBodyArgStatusField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateUserRequestBodyArgStatusField"';
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
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateUserRequestBodyArg(
  val: CreateUserRequestBodyArg
): Json {
  return {
    ['name']: val.name,
    ['login']: val.login == void 0 ? void 0 : val.login,
    ['is_platform_access_only']:
      val.isPlatformAccessOnly == void 0 ? void 0 : val.isPlatformAccessOnly,
    ['role']:
      val.role == void 0
        ? void 0
        : serializeCreateUserRequestBodyArgRoleField(val.role),
    ['language']: val.language == void 0 ? void 0 : val.language,
    ['is_sync_enabled']:
      val.isSyncEnabled == void 0 ? void 0 : val.isSyncEnabled,
    ['job_title']: val.jobTitle == void 0 ? void 0 : val.jobTitle,
    ['phone']: val.phone == void 0 ? void 0 : val.phone,
    ['address']: val.address == void 0 ? void 0 : val.address,
    ['space_amount']: val.spaceAmount == void 0 ? void 0 : val.spaceAmount,
    ['tracking_codes']:
      val.trackingCodes == void 0
        ? void 0
        : (val.trackingCodes?.map(function (item: TrackingCode): any {
            return serializeTrackingCode(item);
          }) as readonly any[]),
    ['can_see_managed_users']:
      val.canSeeManagedUsers == void 0 ? void 0 : val.canSeeManagedUsers,
    ['timezone']: val.timezone == void 0 ? void 0 : val.timezone,
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
    ['status']:
      val.status == void 0
        ? void 0
        : serializeCreateUserRequestBodyArgStatusField(val.status),
    ['external_app_user_id']:
      val.externalAppUserId == void 0 ? void 0 : val.externalAppUserId,
  };
}
export function deserializeCreateUserRequestBodyArg(
  val: any
): CreateUserRequestBodyArg {
  const name: string = val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const isPlatformAccessOnly: undefined | boolean =
    val.is_platform_access_only == void 0
      ? void 0
      : val.is_platform_access_only;
  const role: undefined | CreateUserRequestBodyArgRoleField =
    val.role == void 0
      ? void 0
      : deserializeCreateUserRequestBodyArgRoleField(val.role);
  const language: undefined | string =
    val.language == void 0 ? void 0 : val.language;
  const isSyncEnabled: undefined | boolean =
    val.is_sync_enabled == void 0 ? void 0 : val.is_sync_enabled;
  const jobTitle: undefined | string =
    val.job_title == void 0 ? void 0 : val.job_title;
  const phone: undefined | string = val.phone == void 0 ? void 0 : val.phone;
  const address: undefined | string =
    val.address == void 0 ? void 0 : val.address;
  const spaceAmount: undefined | number =
    val.space_amount == void 0 ? void 0 : val.space_amount;
  const trackingCodes: undefined | readonly TrackingCode[] =
    val.tracking_codes == void 0
      ? void 0
      : isJson(val.tracking_codes, 'array')
      ? (val.tracking_codes?.map(function (itm: Json): any {
          return deserializeTrackingCode(itm);
        }) as readonly any[])
      : [];
  const canSeeManagedUsers: undefined | boolean =
    val.can_see_managed_users == void 0 ? void 0 : val.can_see_managed_users;
  const timezone: undefined | string =
    val.timezone == void 0 ? void 0 : val.timezone;
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
  const status: undefined | CreateUserRequestBodyArgStatusField =
    val.status == void 0
      ? void 0
      : deserializeCreateUserRequestBodyArgStatusField(val.status);
  const externalAppUserId: undefined | string =
    val.external_app_user_id == void 0 ? void 0 : val.external_app_user_id;
  return {
    name: name,
    login: login,
    isPlatformAccessOnly: isPlatformAccessOnly,
    role: role,
    language: language,
    isSyncEnabled: isSyncEnabled,
    jobTitle: jobTitle,
    phone: phone,
    address: address,
    spaceAmount: spaceAmount,
    trackingCodes: trackingCodes,
    canSeeManagedUsers: canSeeManagedUsers,
    timezone: timezone,
    isExternalCollabRestricted: isExternalCollabRestricted,
    isExemptFromDeviceLimits: isExemptFromDeviceLimits,
    isExemptFromLoginVerification: isExemptFromLoginVerification,
    status: status,
    externalAppUserId: externalAppUserId,
  } satisfies CreateUserRequestBodyArg;
}
export function serializeUpdateUserByIdRequestBodyArgRoleField(
  val: UpdateUserByIdRequestBodyArgRoleField
): Json {
  return val;
}
export function deserializeUpdateUserByIdRequestBodyArgRoleField(
  val: any
): UpdateUserByIdRequestBodyArgRoleField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateUserByIdRequestBodyArgRoleField"';
  }
  if (val == 'coadmin') {
    return 'coadmin';
  }
  if (val == 'user') {
    return 'user';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateUserByIdRequestBodyArgStatusField(
  val: UpdateUserByIdRequestBodyArgStatusField
): Json {
  return val;
}
export function deserializeUpdateUserByIdRequestBodyArgStatusField(
  val: any
): UpdateUserByIdRequestBodyArgStatusField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateUserByIdRequestBodyArgStatusField"';
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
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateUserByIdRequestBodyArgNotificationEmailField(
  val: UpdateUserByIdRequestBodyArgNotificationEmailField
): Json {
  return { ['email']: val.email == void 0 ? void 0 : val.email };
}
export function deserializeUpdateUserByIdRequestBodyArgNotificationEmailField(
  val: any
): UpdateUserByIdRequestBodyArgNotificationEmailField {
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  return {
    email: email,
  } satisfies UpdateUserByIdRequestBodyArgNotificationEmailField;
}
export function serializeUpdateUserByIdRequestBodyArg(
  val: UpdateUserByIdRequestBodyArg
): Json {
  return {
    ['enterprise']: val.enterprise == void 0 ? void 0 : val.enterprise,
    ['notify']: val.notify == void 0 ? void 0 : val.notify,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['login']: val.login == void 0 ? void 0 : val.login,
    ['role']:
      val.role == void 0
        ? void 0
        : serializeUpdateUserByIdRequestBodyArgRoleField(val.role),
    ['language']: val.language == void 0 ? void 0 : val.language,
    ['is_sync_enabled']:
      val.isSyncEnabled == void 0 ? void 0 : val.isSyncEnabled,
    ['job_title']: val.jobTitle == void 0 ? void 0 : val.jobTitle,
    ['phone']: val.phone == void 0 ? void 0 : val.phone,
    ['address']: val.address == void 0 ? void 0 : val.address,
    ['tracking_codes']:
      val.trackingCodes == void 0
        ? void 0
        : (val.trackingCodes?.map(function (item: TrackingCode): any {
            return serializeTrackingCode(item);
          }) as readonly any[]),
    ['can_see_managed_users']:
      val.canSeeManagedUsers == void 0 ? void 0 : val.canSeeManagedUsers,
    ['timezone']: val.timezone == void 0 ? void 0 : val.timezone,
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
    ['is_password_reset_required']:
      val.isPasswordResetRequired == void 0
        ? void 0
        : val.isPasswordResetRequired,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeUpdateUserByIdRequestBodyArgStatusField(val.status),
    ['space_amount']: val.spaceAmount == void 0 ? void 0 : val.spaceAmount,
    ['notification_email']:
      val.notificationEmail == void 0
        ? void 0
        : serializeUpdateUserByIdRequestBodyArgNotificationEmailField(
            val.notificationEmail
          ),
    ['external_app_user_id']:
      val.externalAppUserId == void 0 ? void 0 : val.externalAppUserId,
  };
}
export function deserializeUpdateUserByIdRequestBodyArg(
  val: any
): UpdateUserByIdRequestBodyArg {
  const enterprise: undefined | string =
    val.enterprise == void 0 ? void 0 : val.enterprise;
  const notify: undefined | boolean =
    val.notify == void 0 ? void 0 : val.notify;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const role: undefined | UpdateUserByIdRequestBodyArgRoleField =
    val.role == void 0
      ? void 0
      : deserializeUpdateUserByIdRequestBodyArgRoleField(val.role);
  const language: undefined | string =
    val.language == void 0 ? void 0 : val.language;
  const isSyncEnabled: undefined | boolean =
    val.is_sync_enabled == void 0 ? void 0 : val.is_sync_enabled;
  const jobTitle: undefined | string =
    val.job_title == void 0 ? void 0 : val.job_title;
  const phone: undefined | string = val.phone == void 0 ? void 0 : val.phone;
  const address: undefined | string =
    val.address == void 0 ? void 0 : val.address;
  const trackingCodes: undefined | readonly TrackingCode[] =
    val.tracking_codes == void 0
      ? void 0
      : isJson(val.tracking_codes, 'array')
      ? (val.tracking_codes?.map(function (itm: Json): any {
          return deserializeTrackingCode(itm);
        }) as readonly any[])
      : [];
  const canSeeManagedUsers: undefined | boolean =
    val.can_see_managed_users == void 0 ? void 0 : val.can_see_managed_users;
  const timezone: undefined | string =
    val.timezone == void 0 ? void 0 : val.timezone;
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
  const isPasswordResetRequired: undefined | boolean =
    val.is_password_reset_required == void 0
      ? void 0
      : val.is_password_reset_required;
  const status: undefined | UpdateUserByIdRequestBodyArgStatusField =
    val.status == void 0
      ? void 0
      : deserializeUpdateUserByIdRequestBodyArgStatusField(val.status);
  const spaceAmount: undefined | number =
    val.space_amount == void 0 ? void 0 : val.space_amount;
  const notificationEmail:
    | undefined
    | UpdateUserByIdRequestBodyArgNotificationEmailField =
    val.notification_email == void 0
      ? void 0
      : deserializeUpdateUserByIdRequestBodyArgNotificationEmailField(
          val.notification_email
        );
  const externalAppUserId: undefined | string =
    val.external_app_user_id == void 0 ? void 0 : val.external_app_user_id;
  return {
    enterprise: enterprise,
    notify: notify,
    name: name,
    login: login,
    role: role,
    language: language,
    isSyncEnabled: isSyncEnabled,
    jobTitle: jobTitle,
    phone: phone,
    address: address,
    trackingCodes: trackingCodes,
    canSeeManagedUsers: canSeeManagedUsers,
    timezone: timezone,
    isExternalCollabRestricted: isExternalCollabRestricted,
    isExemptFromDeviceLimits: isExemptFromDeviceLimits,
    isExemptFromLoginVerification: isExemptFromLoginVerification,
    isPasswordResetRequired: isPasswordResetRequired,
    status: status,
    spaceAmount: spaceAmount,
    notificationEmail: notificationEmail,
    externalAppUserId: externalAppUserId,
  } satisfies UpdateUserByIdRequestBodyArg;
}
