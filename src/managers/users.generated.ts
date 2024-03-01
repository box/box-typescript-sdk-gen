import { serializeUsers } from '../schemas.generated.js';
import { deserializeUsers } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeTrackingCode } from '../schemas.generated.js';
import { deserializeTrackingCode } from '../schemas.generated.js';
import { Users } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { UserFull } from '../schemas.generated.js';
import { TrackingCode } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type GetUsersQueryParamsUserTypeField = 'all' | 'managed' | 'external';
export interface GetUsersQueryParams {
  readonly filterTerm?: string;
  readonly userType?: GetUsersQueryParamsUserTypeField;
  readonly externalAppUserId?: string;
  readonly fields?: readonly string[];
  readonly offset?: number;
  readonly limit?: number;
  readonly usemarker?: boolean;
  readonly marker?: string;
}
export class GetUsersHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUsersHeaders, 'extraHeaders'>
      | Partial<Pick<GetUsersHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateUserRequestBodyRoleField = 'coadmin' | 'user';
export type CreateUserRequestBodyStatusField =
  | 'active'
  | 'inactive'
  | 'cannot_delete_edit'
  | 'cannot_delete_edit_upload';
export interface CreateUserRequestBody {
  readonly name: string;
  readonly login?: string;
  readonly isPlatformAccessOnly?: boolean;
  readonly role?: CreateUserRequestBodyRoleField;
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
  readonly status?: CreateUserRequestBodyStatusField;
  readonly externalAppUserId?: string;
}
export interface CreateUserQueryParams {
  readonly fields?: readonly string[];
}
export class CreateUserHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateUserHeaders, 'extraHeaders'>
      | Partial<Pick<CreateUserHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetUserMeQueryParams {
  readonly fields?: readonly string[];
}
export class GetUserMeHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUserMeHeaders, 'extraHeaders'>
      | Partial<Pick<GetUserMeHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetUserByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetUserByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUserByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetUserByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateUserByIdRequestBodyRoleField = 'coadmin' | 'user';
export type UpdateUserByIdRequestBodyStatusField =
  | 'active'
  | 'inactive'
  | 'cannot_delete_edit'
  | 'cannot_delete_edit_upload';
export interface UpdateUserByIdRequestBodyNotificationEmailField {
  readonly email?: string;
}
export interface UpdateUserByIdRequestBody {
  readonly enterprise?: string;
  readonly notify?: boolean;
  readonly name?: string;
  readonly login?: string;
  readonly role?: UpdateUserByIdRequestBodyRoleField;
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
  readonly status?: UpdateUserByIdRequestBodyStatusField;
  readonly spaceAmount?: number;
  readonly notificationEmail?: UpdateUserByIdRequestBodyNotificationEmailField;
  readonly externalAppUserId?: string;
}
export interface UpdateUserByIdQueryParams {
  readonly fields?: readonly string[];
}
export class UpdateUserByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateUserByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateUserByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface DeleteUserByIdQueryParams {
  readonly notify?: boolean;
  readonly force?: boolean;
}
export class DeleteUserByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteUserByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteUserByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class UsersManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          UsersManager,
          | 'networkSession'
          | 'getUsers'
          | 'createUser'
          | 'getUserMe'
          | 'getUserById'
          | 'updateUserById'
          | 'deleteUserById'
        >
      | Partial<Pick<UsersManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getUsers(
    queryParams: GetUsersQueryParams = {} satisfies GetUsersQueryParams,
    headers: GetUsersHeaders = new GetUsersHeaders({}),
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
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['usemarker']: toString(queryParams.usemarker) as string,
      ['marker']: toString(queryParams.marker) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/users') as string,
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
    return deserializeUsers(response.data);
  }
  async createUser(
    requestBody: CreateUserRequestBody,
    queryParams: CreateUserQueryParams = {} satisfies CreateUserQueryParams,
    headers: CreateUserHeaders = new CreateUserHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<UserFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/users') as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeCreateUserRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserFull(response.data);
  }
  async getUserMe(
    queryParams: GetUserMeQueryParams = {} satisfies GetUserMeQueryParams,
    headers: GetUserMeHeaders = new GetUserMeHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<UserFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/users/me') as string,
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
    return deserializeUserFull(response.data);
  }
  async getUserById(
    userId: string,
    queryParams: GetUserByIdQueryParams = {} satisfies GetUserByIdQueryParams,
    headers: GetUserByIdHeaders = new GetUserByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<UserFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/users/',
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
    return deserializeUserFull(response.data);
  }
  async updateUserById(
    userId: string,
    requestBody: UpdateUserByIdRequestBody = {} satisfies UpdateUserByIdRequestBody,
    queryParams: UpdateUserByIdQueryParams = {} satisfies UpdateUserByIdQueryParams,
    headers: UpdateUserByIdHeaders = new UpdateUserByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<UserFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/users/',
        toString(userId) as string
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeUpdateUserByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserFull(response.data);
  }
  async deleteUserById(
    userId: string,
    queryParams: DeleteUserByIdQueryParams = {} satisfies DeleteUserByIdQueryParams,
    headers: DeleteUserByIdHeaders = new DeleteUserByIdHeaders({}),
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
        this.networkSession.baseUrls.baseUrl,
        '/users/',
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
export function serializeGetUsersQueryParamsUserTypeField(
  val: GetUsersQueryParamsUserTypeField
): SerializedData {
  return val;
}
export function deserializeGetUsersQueryParamsUserTypeField(
  val: any
): GetUsersQueryParamsUserTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GetUsersQueryParamsUserTypeField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateUserRequestBodyRoleField(
  val: CreateUserRequestBodyRoleField
): SerializedData {
  return val;
}
export function deserializeCreateUserRequestBodyRoleField(
  val: any
): CreateUserRequestBodyRoleField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CreateUserRequestBodyRoleField"',
    });
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
export function serializeCreateUserRequestBodyStatusField(
  val: CreateUserRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeCreateUserRequestBodyStatusField(
  val: any
): CreateUserRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CreateUserRequestBodyStatusField"',
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
export function serializeCreateUserRequestBody(
  val: CreateUserRequestBody
): SerializedData {
  return {
    ['name']: val.name,
    ['login']: val.login == void 0 ? void 0 : val.login,
    ['is_platform_access_only']:
      val.isPlatformAccessOnly == void 0 ? void 0 : val.isPlatformAccessOnly,
    ['role']:
      val.role == void 0
        ? void 0
        : serializeCreateUserRequestBodyRoleField(val.role),
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
        : (val.trackingCodes.map(function (item: TrackingCode): any {
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
        : serializeCreateUserRequestBodyStatusField(val.status),
    ['external_app_user_id']:
      val.externalAppUserId == void 0 ? void 0 : val.externalAppUserId,
  };
}
export function deserializeCreateUserRequestBody(
  val: any
): CreateUserRequestBody {
  const name: string = val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const isPlatformAccessOnly: undefined | boolean =
    val.is_platform_access_only == void 0
      ? void 0
      : val.is_platform_access_only;
  const role: undefined | CreateUserRequestBodyRoleField =
    val.role == void 0
      ? void 0
      : deserializeCreateUserRequestBodyRoleField(val.role);
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
      : sdIsList(val.tracking_codes)
      ? (val.tracking_codes.map(function (itm: SerializedData): any {
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
  const status: undefined | CreateUserRequestBodyStatusField =
    val.status == void 0
      ? void 0
      : deserializeCreateUserRequestBodyStatusField(val.status);
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
  } satisfies CreateUserRequestBody;
}
export function serializeUpdateUserByIdRequestBodyRoleField(
  val: UpdateUserByIdRequestBodyRoleField
): SerializedData {
  return val;
}
export function deserializeUpdateUserByIdRequestBodyRoleField(
  val: any
): UpdateUserByIdRequestBodyRoleField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UpdateUserByIdRequestBodyRoleField"',
    });
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
export function serializeUpdateUserByIdRequestBodyStatusField(
  val: UpdateUserByIdRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateUserByIdRequestBodyStatusField(
  val: any
): UpdateUserByIdRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UpdateUserByIdRequestBodyStatusField"',
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
export function serializeUpdateUserByIdRequestBodyNotificationEmailField(
  val: UpdateUserByIdRequestBodyNotificationEmailField
): SerializedData {
  return { ['email']: val.email == void 0 ? void 0 : val.email };
}
export function deserializeUpdateUserByIdRequestBodyNotificationEmailField(
  val: any
): UpdateUserByIdRequestBodyNotificationEmailField {
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  return {
    email: email,
  } satisfies UpdateUserByIdRequestBodyNotificationEmailField;
}
export function serializeUpdateUserByIdRequestBody(
  val: UpdateUserByIdRequestBody
): SerializedData {
  return {
    ['enterprise']: val.enterprise == void 0 ? void 0 : val.enterprise,
    ['notify']: val.notify == void 0 ? void 0 : val.notify,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['login']: val.login == void 0 ? void 0 : val.login,
    ['role']:
      val.role == void 0
        ? void 0
        : serializeUpdateUserByIdRequestBodyRoleField(val.role),
    ['language']: val.language == void 0 ? void 0 : val.language,
    ['is_sync_enabled']:
      val.isSyncEnabled == void 0 ? void 0 : val.isSyncEnabled,
    ['job_title']: val.jobTitle == void 0 ? void 0 : val.jobTitle,
    ['phone']: val.phone == void 0 ? void 0 : val.phone,
    ['address']: val.address == void 0 ? void 0 : val.address,
    ['tracking_codes']:
      val.trackingCodes == void 0
        ? void 0
        : (val.trackingCodes.map(function (item: TrackingCode): any {
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
        : serializeUpdateUserByIdRequestBodyStatusField(val.status),
    ['space_amount']: val.spaceAmount == void 0 ? void 0 : val.spaceAmount,
    ['notification_email']:
      val.notificationEmail == void 0
        ? void 0
        : serializeUpdateUserByIdRequestBodyNotificationEmailField(
            val.notificationEmail
          ),
    ['external_app_user_id']:
      val.externalAppUserId == void 0 ? void 0 : val.externalAppUserId,
  };
}
export function deserializeUpdateUserByIdRequestBody(
  val: any
): UpdateUserByIdRequestBody {
  const enterprise: undefined | string =
    val.enterprise == void 0 ? void 0 : val.enterprise;
  const notify: undefined | boolean =
    val.notify == void 0 ? void 0 : val.notify;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const role: undefined | UpdateUserByIdRequestBodyRoleField =
    val.role == void 0
      ? void 0
      : deserializeUpdateUserByIdRequestBodyRoleField(val.role);
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
      : sdIsList(val.tracking_codes)
      ? (val.tracking_codes.map(function (itm: SerializedData): any {
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
  const status: undefined | UpdateUserByIdRequestBodyStatusField =
    val.status == void 0
      ? void 0
      : deserializeUpdateUserByIdRequestBodyStatusField(val.status);
  const spaceAmount: undefined | number =
    val.space_amount == void 0 ? void 0 : val.space_amount;
  const notificationEmail:
    | undefined
    | UpdateUserByIdRequestBodyNotificationEmailField =
    val.notification_email == void 0
      ? void 0
      : deserializeUpdateUserByIdRequestBodyNotificationEmailField(
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
  } satisfies UpdateUserByIdRequestBody;
}
