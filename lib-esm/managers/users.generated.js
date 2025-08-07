import { deserializeUsers } from '../schemas/users.generated.js';
import { deserializeUserFull } from '../schemas/userFull.generated.js';
import { serializeTrackingCode } from '../schemas/trackingCode.generated.js';
import { deserializeTrackingCode } from '../schemas/trackingCode.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateUserOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new CreateUserHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetUserByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetUserByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateUserByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new UpdateUserByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteUserByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new DeleteUserByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetUsersHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateUserHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetUserMeHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetUserByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateUserByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteUserByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UsersManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
    /**
     * Returns a list of all users for the Enterprise along with their `user_id`,
     * `public_name`, and `login`.
     *
     * The application and the authenticated user need to
     * have the permission to look up users in the entire
     * enterprise.
     * @param {GetUsersQueryParams} queryParams Query parameters of getUsers method
     * @param {GetUsersHeadersInput} headersInput Headers of getUsers method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<Users>}
     */
    async getUsers(queryParams = {}, headersInput = new GetUsersHeaders({}), cancellationToken) {
        const headers = new GetUsersHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['filter_term']: toString(queryParams.filterTerm),
            ['user_type']: toString(queryParams.userType),
            ['external_app_user_id']: toString(queryParams.externalAppUserId),
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['offset']: toString(queryParams.offset),
            ['limit']: toString(queryParams.limit),
            ['usemarker']: toString(queryParams.usemarker),
            ['marker']: toString(queryParams.marker),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUsers(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a new managed user in an enterprise. This endpoint
     * is only available to users and applications with the right
     * admin permissions.
     * @param {CreateUserRequestBody} requestBody Request body of createUser method
     * @param {CreateUserOptionalsInput} optionalsInput
     * @returns {Promise<UserFull>}
     */
    async createUser(requestBody, optionalsInput = {}) {
        const optionals = new CreateUserOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users'),
            method: 'POST',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeCreateUserRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUserFull(response.data),
            rawData: response.data,
        };
    }
    /**
     * Retrieves information about the user who is currently authenticated.
     *
     * In the case of a client-side authenticated OAuth 2.0 application
     * this will be the user who authorized the app.
     *
     * In the case of a JWT, server-side authenticated application
     * this will be the service account that belongs to the application
     * by default.
     *
     * Use the `As-User` header to change who this API call is made on behalf of.
     * @param {GetUserMeQueryParams} queryParams Query parameters of getUserMe method
     * @param {GetUserMeHeadersInput} headersInput Headers of getUserMe method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<UserFull>}
     */
    async getUserMe(queryParams = {}, headersInput = new GetUserMeHeaders({}), cancellationToken) {
        const headers = new GetUserMeHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/me'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUserFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves information about a user in the enterprise.
       *
       * The application and the authenticated user need to
       * have the permission to look up users in the entire
       * enterprise.
       *
       * This endpoint also returns a limited set of information
       * for external users who are collaborated on content
       * owned by the enterprise for authenticated users with the
       * right scopes. In this case, disallowed fields will return
       * null instead.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {GetUserByIdOptionalsInput} optionalsInput
       * @returns {Promise<UserFull>}
       */
    async getUserById(userId, optionalsInput = {}) {
        const optionals = new GetUserByIdOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUserFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a managed or app user in an enterprise. This endpoint
       * is only available to users and applications with the right
       * admin permissions.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {UpdateUserByIdOptionalsInput} optionalsInput
       * @returns {Promise<UserFull>}
       */
    async updateUserById(userId, optionalsInput = {}) {
        const optionals = new UpdateUserByIdOptionals({
            requestBody: optionalsInput.requestBody,
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId)),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeUpdateUserByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUserFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes a user. By default this will fail if the user
       * still owns any content. Move their owned content first
       * before proceeding, or use the `force` field to delete
       * the user and their files.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {DeleteUserByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteUserById(userId, optionalsInput = {}) {
        const optionals = new DeleteUserByIdOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['notify']: toString(queryParams.notify),
            ['force']: toString(queryParams.force),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId)),
            method: 'DELETE',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
export function serializeGetUsersQueryParamsUserTypeField(val) {
    return val;
}
export function deserializeGetUsersQueryParamsUserTypeField(val) {
    if (val == 'all') {
        return val;
    }
    if (val == 'managed') {
        return val;
    }
    if (val == 'external') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetUsersQueryParamsUserTypeField",
    });
}
export function serializeCreateUserRequestBodyRoleField(val) {
    return val;
}
export function deserializeCreateUserRequestBodyRoleField(val) {
    if (val == 'coadmin') {
        return val;
    }
    if (val == 'user') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateUserRequestBodyRoleField",
    });
}
export function serializeCreateUserRequestBodyStatusField(val) {
    return val;
}
export function deserializeCreateUserRequestBodyStatusField(val) {
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
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateUserRequestBodyStatusField",
    });
}
export function serializeCreateUserRequestBody(val) {
    return {
        ['name']: val.name,
        ['login']: val.login,
        ['is_platform_access_only']: val.isPlatformAccessOnly,
        ['role']: val.role == void 0
            ? val.role
            : serializeCreateUserRequestBodyRoleField(val.role),
        ['language']: val.language,
        ['is_sync_enabled']: val.isSyncEnabled,
        ['job_title']: val.jobTitle,
        ['phone']: val.phone,
        ['address']: val.address,
        ['space_amount']: val.spaceAmount,
        ['tracking_codes']: val.trackingCodes == void 0
            ? val.trackingCodes
            : val.trackingCodes.map(function (item) {
                return serializeTrackingCode(item);
            }),
        ['can_see_managed_users']: val.canSeeManagedUsers,
        ['timezone']: val.timezone,
        ['is_external_collab_restricted']: val.isExternalCollabRestricted,
        ['is_exempt_from_device_limits']: val.isExemptFromDeviceLimits,
        ['is_exempt_from_login_verification']: val.isExemptFromLoginVerification,
        ['status']: val.status == void 0
            ? val.status
            : serializeCreateUserRequestBodyStatusField(val.status),
        ['external_app_user_id']: val.externalAppUserId,
    };
}
export function deserializeCreateUserRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateUserRequestBody"',
        });
    }
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "CreateUserRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CreateUserRequestBody"',
        });
    }
    const name = val.name;
    if (!(val.login == void 0) && !sdIsString(val.login)) {
        throw new BoxSdkError({
            message: 'Expecting string for "login" of type "CreateUserRequestBody"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    if (!(val.is_platform_access_only == void 0) &&
        !sdIsBoolean(val.is_platform_access_only)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_platform_access_only" of type "CreateUserRequestBody"',
        });
    }
    const isPlatformAccessOnly = val.is_platform_access_only == void 0
        ? void 0
        : val.is_platform_access_only;
    const role = val.role == void 0
        ? void 0
        : deserializeCreateUserRequestBodyRoleField(val.role);
    if (!(val.language == void 0) && !sdIsString(val.language)) {
        throw new BoxSdkError({
            message: 'Expecting string for "language" of type "CreateUserRequestBody"',
        });
    }
    const language = val.language == void 0 ? void 0 : val.language;
    if (!(val.is_sync_enabled == void 0) && !sdIsBoolean(val.is_sync_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_sync_enabled" of type "CreateUserRequestBody"',
        });
    }
    const isSyncEnabled = val.is_sync_enabled == void 0 ? void 0 : val.is_sync_enabled;
    if (!(val.job_title == void 0) && !sdIsString(val.job_title)) {
        throw new BoxSdkError({
            message: 'Expecting string for "job_title" of type "CreateUserRequestBody"',
        });
    }
    const jobTitle = val.job_title == void 0 ? void 0 : val.job_title;
    if (!(val.phone == void 0) && !sdIsString(val.phone)) {
        throw new BoxSdkError({
            message: 'Expecting string for "phone" of type "CreateUserRequestBody"',
        });
    }
    const phone = val.phone == void 0 ? void 0 : val.phone;
    if (!(val.address == void 0) && !sdIsString(val.address)) {
        throw new BoxSdkError({
            message: 'Expecting string for "address" of type "CreateUserRequestBody"',
        });
    }
    const address = val.address == void 0 ? void 0 : val.address;
    if (!(val.space_amount == void 0) && !sdIsNumber(val.space_amount)) {
        throw new BoxSdkError({
            message: 'Expecting number for "space_amount" of type "CreateUserRequestBody"',
        });
    }
    const spaceAmount = val.space_amount == void 0 ? void 0 : val.space_amount;
    if (!(val.tracking_codes == void 0) && !sdIsList(val.tracking_codes)) {
        throw new BoxSdkError({
            message: 'Expecting array for "tracking_codes" of type "CreateUserRequestBody"',
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
            message: 'Expecting boolean for "can_see_managed_users" of type "CreateUserRequestBody"',
        });
    }
    const canSeeManagedUsers = val.can_see_managed_users == void 0 ? void 0 : val.can_see_managed_users;
    if (!(val.timezone == void 0) && !sdIsString(val.timezone)) {
        throw new BoxSdkError({
            message: 'Expecting string for "timezone" of type "CreateUserRequestBody"',
        });
    }
    const timezone = val.timezone == void 0 ? void 0 : val.timezone;
    if (!(val.is_external_collab_restricted == void 0) &&
        !sdIsBoolean(val.is_external_collab_restricted)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_external_collab_restricted" of type "CreateUserRequestBody"',
        });
    }
    const isExternalCollabRestricted = val.is_external_collab_restricted == void 0
        ? void 0
        : val.is_external_collab_restricted;
    if (!(val.is_exempt_from_device_limits == void 0) &&
        !sdIsBoolean(val.is_exempt_from_device_limits)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_exempt_from_device_limits" of type "CreateUserRequestBody"',
        });
    }
    const isExemptFromDeviceLimits = val.is_exempt_from_device_limits == void 0
        ? void 0
        : val.is_exempt_from_device_limits;
    if (!(val.is_exempt_from_login_verification == void 0) &&
        !sdIsBoolean(val.is_exempt_from_login_verification)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_exempt_from_login_verification" of type "CreateUserRequestBody"',
        });
    }
    const isExemptFromLoginVerification = val.is_exempt_from_login_verification == void 0
        ? void 0
        : val.is_exempt_from_login_verification;
    const status = val.status == void 0
        ? void 0
        : deserializeCreateUserRequestBodyStatusField(val.status);
    if (!(val.external_app_user_id == void 0) &&
        !sdIsString(val.external_app_user_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "external_app_user_id" of type "CreateUserRequestBody"',
        });
    }
    const externalAppUserId = val.external_app_user_id == void 0 ? void 0 : val.external_app_user_id;
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
    };
}
export function serializeUpdateUserByIdRequestBodyRoleField(val) {
    return val;
}
export function deserializeUpdateUserByIdRequestBodyRoleField(val) {
    if (val == 'coadmin') {
        return val;
    }
    if (val == 'user') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateUserByIdRequestBodyRoleField",
    });
}
export function serializeUpdateUserByIdRequestBodyStatusField(val) {
    return val;
}
export function deserializeUpdateUserByIdRequestBodyStatusField(val) {
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
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateUserByIdRequestBodyStatusField",
    });
}
export function serializeUpdateUserByIdRequestBodyNotificationEmailField(val) {
    return { ['email']: val.email };
}
export function deserializeUpdateUserByIdRequestBodyNotificationEmailField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateUserByIdRequestBodyNotificationEmailField"',
        });
    }
    if (!(val.email == void 0) && !sdIsString(val.email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "email" of type "UpdateUserByIdRequestBodyNotificationEmailField"',
        });
    }
    const email = val.email == void 0 ? void 0 : val.email;
    return {
        email: email,
    };
}
export function serializeUpdateUserByIdRequestBody(val) {
    return {
        ['enterprise']: val.enterprise,
        ['notify']: val.notify,
        ['name']: val.name,
        ['login']: val.login,
        ['role']: val.role == void 0
            ? val.role
            : serializeUpdateUserByIdRequestBodyRoleField(val.role),
        ['language']: val.language,
        ['is_sync_enabled']: val.isSyncEnabled,
        ['job_title']: val.jobTitle,
        ['phone']: val.phone,
        ['address']: val.address,
        ['tracking_codes']: val.trackingCodes == void 0
            ? val.trackingCodes
            : val.trackingCodes.map(function (item) {
                return serializeTrackingCode(item);
            }),
        ['can_see_managed_users']: val.canSeeManagedUsers,
        ['timezone']: val.timezone,
        ['is_external_collab_restricted']: val.isExternalCollabRestricted,
        ['is_exempt_from_device_limits']: val.isExemptFromDeviceLimits,
        ['is_exempt_from_login_verification']: val.isExemptFromLoginVerification,
        ['is_password_reset_required']: val.isPasswordResetRequired,
        ['status']: val.status == void 0
            ? val.status
            : serializeUpdateUserByIdRequestBodyStatusField(val.status),
        ['space_amount']: val.spaceAmount,
        ['notification_email']: val.notificationEmail == void 0
            ? val.notificationEmail
            : serializeUpdateUserByIdRequestBodyNotificationEmailField(val.notificationEmail),
        ['external_app_user_id']: val.externalAppUserId,
    };
}
export function deserializeUpdateUserByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateUserByIdRequestBody"',
        });
    }
    if (!(val.enterprise == void 0) && !sdIsString(val.enterprise)) {
        throw new BoxSdkError({
            message: 'Expecting string for "enterprise" of type "UpdateUserByIdRequestBody"',
        });
    }
    const enterprise = val.enterprise == void 0 ? void 0 : val.enterprise;
    if (!(val.notify == void 0) && !sdIsBoolean(val.notify)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "notify" of type "UpdateUserByIdRequestBody"',
        });
    }
    const notify = val.notify == void 0 ? void 0 : val.notify;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UpdateUserByIdRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.login == void 0) && !sdIsString(val.login)) {
        throw new BoxSdkError({
            message: 'Expecting string for "login" of type "UpdateUserByIdRequestBody"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    const role = val.role == void 0
        ? void 0
        : deserializeUpdateUserByIdRequestBodyRoleField(val.role);
    if (!(val.language == void 0) && !sdIsString(val.language)) {
        throw new BoxSdkError({
            message: 'Expecting string for "language" of type "UpdateUserByIdRequestBody"',
        });
    }
    const language = val.language == void 0 ? void 0 : val.language;
    if (!(val.is_sync_enabled == void 0) && !sdIsBoolean(val.is_sync_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_sync_enabled" of type "UpdateUserByIdRequestBody"',
        });
    }
    const isSyncEnabled = val.is_sync_enabled == void 0 ? void 0 : val.is_sync_enabled;
    if (!(val.job_title == void 0) && !sdIsString(val.job_title)) {
        throw new BoxSdkError({
            message: 'Expecting string for "job_title" of type "UpdateUserByIdRequestBody"',
        });
    }
    const jobTitle = val.job_title == void 0 ? void 0 : val.job_title;
    if (!(val.phone == void 0) && !sdIsString(val.phone)) {
        throw new BoxSdkError({
            message: 'Expecting string for "phone" of type "UpdateUserByIdRequestBody"',
        });
    }
    const phone = val.phone == void 0 ? void 0 : val.phone;
    if (!(val.address == void 0) && !sdIsString(val.address)) {
        throw new BoxSdkError({
            message: 'Expecting string for "address" of type "UpdateUserByIdRequestBody"',
        });
    }
    const address = val.address == void 0 ? void 0 : val.address;
    if (!(val.tracking_codes == void 0) && !sdIsList(val.tracking_codes)) {
        throw new BoxSdkError({
            message: 'Expecting array for "tracking_codes" of type "UpdateUserByIdRequestBody"',
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
            message: 'Expecting boolean for "can_see_managed_users" of type "UpdateUserByIdRequestBody"',
        });
    }
    const canSeeManagedUsers = val.can_see_managed_users == void 0 ? void 0 : val.can_see_managed_users;
    if (!(val.timezone == void 0) && !sdIsString(val.timezone)) {
        throw new BoxSdkError({
            message: 'Expecting string for "timezone" of type "UpdateUserByIdRequestBody"',
        });
    }
    const timezone = val.timezone == void 0 ? void 0 : val.timezone;
    if (!(val.is_external_collab_restricted == void 0) &&
        !sdIsBoolean(val.is_external_collab_restricted)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_external_collab_restricted" of type "UpdateUserByIdRequestBody"',
        });
    }
    const isExternalCollabRestricted = val.is_external_collab_restricted == void 0
        ? void 0
        : val.is_external_collab_restricted;
    if (!(val.is_exempt_from_device_limits == void 0) &&
        !sdIsBoolean(val.is_exempt_from_device_limits)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_exempt_from_device_limits" of type "UpdateUserByIdRequestBody"',
        });
    }
    const isExemptFromDeviceLimits = val.is_exempt_from_device_limits == void 0
        ? void 0
        : val.is_exempt_from_device_limits;
    if (!(val.is_exempt_from_login_verification == void 0) &&
        !sdIsBoolean(val.is_exempt_from_login_verification)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_exempt_from_login_verification" of type "UpdateUserByIdRequestBody"',
        });
    }
    const isExemptFromLoginVerification = val.is_exempt_from_login_verification == void 0
        ? void 0
        : val.is_exempt_from_login_verification;
    if (!(val.is_password_reset_required == void 0) &&
        !sdIsBoolean(val.is_password_reset_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_password_reset_required" of type "UpdateUserByIdRequestBody"',
        });
    }
    const isPasswordResetRequired = val.is_password_reset_required == void 0
        ? void 0
        : val.is_password_reset_required;
    const status = val.status == void 0
        ? void 0
        : deserializeUpdateUserByIdRequestBodyStatusField(val.status);
    if (!(val.space_amount == void 0) && !sdIsNumber(val.space_amount)) {
        throw new BoxSdkError({
            message: 'Expecting number for "space_amount" of type "UpdateUserByIdRequestBody"',
        });
    }
    const spaceAmount = val.space_amount == void 0 ? void 0 : val.space_amount;
    const notificationEmail = val.notification_email == void 0
        ? void 0
        : deserializeUpdateUserByIdRequestBodyNotificationEmailField(val.notification_email);
    if (!(val.external_app_user_id == void 0) &&
        !sdIsString(val.external_app_user_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "external_app_user_id" of type "UpdateUserByIdRequestBody"',
        });
    }
    const externalAppUserId = val.external_app_user_id == void 0 ? void 0 : val.external_app_user_id;
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
    };
}
//# sourceMappingURL=users.generated.js.map