import { Users } from '../schemas/users.generated.js';
import { UserFull } from '../schemas/userFull.generated.js';
import { TrackingCode } from '../schemas/trackingCode.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateUserOptionals {
    readonly queryParams: CreateUserQueryParams;
    readonly headers: CreateUserHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateUserOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateUserOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateUserOptionalsInput {
    readonly queryParams?: CreateUserQueryParams;
    readonly headers?: CreateUserHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetUserByIdOptionals {
    readonly queryParams: GetUserByIdQueryParams;
    readonly headers: GetUserByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetUserByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetUserByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetUserByIdOptionalsInput {
    readonly queryParams?: GetUserByIdQueryParams;
    readonly headers?: GetUserByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateUserByIdOptionals {
    readonly requestBody: UpdateUserByIdRequestBody;
    readonly queryParams: UpdateUserByIdQueryParams;
    readonly headers: UpdateUserByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateUserByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateUserByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateUserByIdOptionalsInput {
    readonly requestBody?: UpdateUserByIdRequestBody;
    readonly queryParams?: UpdateUserByIdQueryParams;
    readonly headers?: UpdateUserByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteUserByIdOptionals {
    readonly queryParams: DeleteUserByIdQueryParams;
    readonly headers: DeleteUserByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteUserByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<DeleteUserByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface DeleteUserByIdOptionalsInput {
    readonly queryParams?: DeleteUserByIdQueryParams;
    readonly headers?: DeleteUserByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetUsersQueryParamsUserTypeField = 'all' | 'managed' | 'external' | string;
export interface GetUsersQueryParams {
    /**
     * Limits the results to only users who's `name` or
     * `login` start with the search term.
     *
     * For externally managed users, the search term needs
     * to completely match the in order to find the user, and
     * it will only return one user at a time. */
    readonly filterTerm?: string;
    /**
     * Limits the results to the kind of user specified.
     *
     * * `all` returns every kind of user for whom the
     *   `login` or `name` partially matches the
     *   `filter_term`. It will only return an external user
     *   if the login matches the `filter_term` completely,
     *   and in that case it will only return that user.
     * * `managed` returns all managed and app users for whom
     *   the `login` or `name` partially matches the
     *   `filter_term`.
     * * `external` returns all external users for whom the
     *   `login` matches the `filter_term` exactly. */
    readonly userType?: GetUsersQueryParamsUserTypeField;
    /**
     * Limits the results to app users with the given
     * `external_app_user_id` value.
     *
     * When creating an app user, an
     * `external_app_user_id` value can be set. This value can
     * then be used in this endpoint to find any users that
     * match that `external_app_user_id` value. */
    readonly externalAppUserId?: string;
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
    /**
     * The offset of the item at which to begin the response.
     *
     * Queries with offset parameter value
     * exceeding 10000 will be rejected
     * with a 400 response. */
    readonly offset?: number;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * Specifies whether to use marker-based pagination instead of
     * offset-based pagination. Only one pagination method can
     * be used at a time.
     *
     * By setting this value to true, the API will return a `marker` field
     * that can be passed as a parameter to this endpoint to get the next
     * page of the response. */
    readonly usemarker?: boolean;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
}
export declare class GetUsersHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUsersHeaders, 'extraHeaders'> & Partial<Pick<GetUsersHeaders, 'extraHeaders'>>);
}
export interface GetUsersHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateUserRequestBodyRoleField = 'coadmin' | 'user' | string;
export type CreateUserRequestBodyStatusField = 'active' | 'inactive' | 'cannot_delete_edit' | 'cannot_delete_edit_upload' | string;
export interface CreateUserRequestBody {
    /**
     * The name of the user. */
    readonly name: string;
    /**
     * The email address the user uses to log in
     *
     * Required, unless `is_platform_access_only`
     * is set to `true`. */
    readonly login?: string;
    /**
     * Specifies that the user is an app user. */
    readonly isPlatformAccessOnly?: boolean;
    /**
     * The user’s enterprise role. */
    readonly role?: CreateUserRequestBodyRoleField;
    /**
     * The language of the user, formatted in modified version of the
     * [ISO 639-1](/guides/api-calls/language-codes) format. */
    readonly language?: string;
    /**
     * Whether the user can use Box Sync. */
    readonly isSyncEnabled?: boolean;
    /**
     * The user’s job title. */
    readonly jobTitle?: string;
    /**
     * The user’s phone number. */
    readonly phone?: string;
    /**
     * The user’s address. */
    readonly address?: string;
    /**
     * The user’s total available space in bytes. Set this to `-1` to
     * indicate unlimited storage. */
    readonly spaceAmount?: number;
    /**
     * Tracking codes allow an admin to generate reports from the
     * admin console and assign an attribute to a specific group
     * of users. This setting must be enabled for an enterprise before it
     * can be used. */
    readonly trackingCodes?: readonly TrackingCode[];
    /**
     * Whether the user can see other enterprise users in their
     * contact list. */
    readonly canSeeManagedUsers?: boolean;
    /**
     * The user's timezone. */
    readonly timezone?: string;
    /**
     * Whether the user is allowed to collaborate with users outside
     * their enterprise. */
    readonly isExternalCollabRestricted?: boolean;
    /**
     * Whether to exempt the user from enterprise device limits. */
    readonly isExemptFromDeviceLimits?: boolean;
    /**
     * Whether the user must use two-factor authentication. */
    readonly isExemptFromLoginVerification?: boolean;
    /**
     * The user's account status. */
    readonly status?: CreateUserRequestBodyStatusField;
    /**
     * An external identifier for an app user, which can be used to look
     * up the user. This can be used to tie user IDs from external
     * identity providers to Box users. */
    readonly externalAppUserId?: string;
    readonly rawData?: SerializedData;
}
export interface CreateUserQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class CreateUserHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateUserHeaders, 'extraHeaders'> & Partial<Pick<CreateUserHeaders, 'extraHeaders'>>);
}
export interface CreateUserHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetUserMeQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class GetUserMeHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUserMeHeaders, 'extraHeaders'> & Partial<Pick<GetUserMeHeaders, 'extraHeaders'>>);
}
export interface GetUserMeHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetUserByIdQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class GetUserByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUserByIdHeaders, 'extraHeaders'> & Partial<Pick<GetUserByIdHeaders, 'extraHeaders'>>);
}
export interface GetUserByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateUserByIdRequestBodyRoleField = 'coadmin' | 'user' | string;
export type UpdateUserByIdRequestBodyStatusField = 'active' | 'inactive' | 'cannot_delete_edit' | 'cannot_delete_edit_upload' | string;
export interface UpdateUserByIdRequestBodyNotificationEmailField {
    /**
     * The email address to send the notifications to. */
    readonly email?: string;
    readonly rawData?: SerializedData;
}
export interface UpdateUserByIdRequestBody {
    /**
     * Set this to `null` to roll the user out of the enterprise
     * and make them a free user. */
    readonly enterprise?: string | null;
    /**
     * Whether the user should receive an email when they
     * are rolled out of an enterprise. */
    readonly notify?: boolean;
    /**
     * The name of the user. */
    readonly name?: string;
    /**
     * The email address the user uses to log in
     *
     * Note: If the target user's email is not confirmed, then the
     * primary login address cannot be changed. */
    readonly login?: string;
    /**
     * The user’s enterprise role. */
    readonly role?: UpdateUserByIdRequestBodyRoleField;
    /**
     * The language of the user, formatted in modified version of the
     * [ISO 639-1](/guides/api-calls/language-codes) format. */
    readonly language?: string;
    /**
     * Whether the user can use Box Sync. */
    readonly isSyncEnabled?: boolean;
    /**
     * The user’s job title. */
    readonly jobTitle?: string;
    /**
     * The user’s phone number. */
    readonly phone?: string;
    /**
     * The user’s address. */
    readonly address?: string;
    /**
     * Tracking codes allow an admin to generate reports from the
     * admin console and assign an attribute to a specific group
     * of users. This setting must be enabled for an enterprise before it
     * can be used. */
    readonly trackingCodes?: readonly TrackingCode[];
    /**
     * Whether the user can see other enterprise users in their
     * contact list. */
    readonly canSeeManagedUsers?: boolean;
    /**
     * The user's timezone. */
    readonly timezone?: string;
    /**
     * Whether the user is allowed to collaborate with users outside
     * their enterprise. */
    readonly isExternalCollabRestricted?: boolean;
    /**
     * Whether to exempt the user from enterprise device limits. */
    readonly isExemptFromDeviceLimits?: boolean;
    /**
     * Whether the user must use two-factor authentication. */
    readonly isExemptFromLoginVerification?: boolean;
    /**
     * Whether the user is required to reset their password. */
    readonly isPasswordResetRequired?: boolean;
    /**
     * The user's account status. */
    readonly status?: UpdateUserByIdRequestBodyStatusField;
    /**
     * The user’s total available space in bytes. Set this to `-1` to
     * indicate unlimited storage. */
    readonly spaceAmount?: number;
    /**
     * An alternate notification email address to which email
     * notifications are sent. When it's confirmed, this will be
     * the email address to which notifications are sent instead of
     * to the primary email address.
     *
     * Set this value to `null` to remove the notification email. */
    readonly notificationEmail?: UpdateUserByIdRequestBodyNotificationEmailField | null;
    /**
     * An external identifier for an app user, which can be used to look
     * up the user. This can be used to tie user IDs from external
     * identity providers to Box users.
     *
     * Note: In order to update this field, you need to request a token
     * using the application that created the app user. */
    readonly externalAppUserId?: string;
    readonly rawData?: SerializedData;
}
export interface UpdateUserByIdQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class UpdateUserByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateUserByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateUserByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateUserByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface DeleteUserByIdQueryParams {
    /**
     * Whether the user will receive email notification of
     * the deletion. */
    readonly notify?: boolean;
    /**
     * Whether the user should be deleted even if this user
     * still own files. */
    readonly force?: boolean;
}
export declare class DeleteUserByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteUserByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteUserByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteUserByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UsersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<UsersManager, 'networkSession' | 'getUsers' | 'createUser' | 'getUserMe' | 'getUserById' | 'updateUserById' | 'deleteUserById'> & Partial<Pick<UsersManager, 'networkSession'>>);
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
    getUsers(queryParams?: GetUsersQueryParams, headersInput?: GetUsersHeadersInput, cancellationToken?: CancellationToken): Promise<Users>;
    /**
     * Creates a new managed user in an enterprise. This endpoint
     * is only available to users and applications with the right
     * admin permissions.
     * @param {CreateUserRequestBody} requestBody Request body of createUser method
     * @param {CreateUserOptionalsInput} optionalsInput
     * @returns {Promise<UserFull>}
     */
    createUser(requestBody: CreateUserRequestBody, optionalsInput?: CreateUserOptionalsInput): Promise<UserFull>;
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
    getUserMe(queryParams?: GetUserMeQueryParams, headersInput?: GetUserMeHeadersInput, cancellationToken?: CancellationToken): Promise<UserFull>;
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
    getUserById(userId: string, optionalsInput?: GetUserByIdOptionalsInput): Promise<UserFull>;
    /**
       * Updates a managed or app user in an enterprise. This endpoint
       * is only available to users and applications with the right
       * admin permissions.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {UpdateUserByIdOptionalsInput} optionalsInput
       * @returns {Promise<UserFull>}
       */
    updateUserById(userId: string, optionalsInput?: UpdateUserByIdOptionalsInput): Promise<UserFull>;
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
    deleteUserById(userId: string, optionalsInput?: DeleteUserByIdOptionalsInput): Promise<undefined>;
}
export interface UsersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetUsersQueryParamsUserTypeField(val: GetUsersQueryParamsUserTypeField): SerializedData;
export declare function deserializeGetUsersQueryParamsUserTypeField(val: SerializedData): GetUsersQueryParamsUserTypeField;
export declare function serializeCreateUserRequestBodyRoleField(val: CreateUserRequestBodyRoleField): SerializedData;
export declare function deserializeCreateUserRequestBodyRoleField(val: SerializedData): CreateUserRequestBodyRoleField;
export declare function serializeCreateUserRequestBodyStatusField(val: CreateUserRequestBodyStatusField): SerializedData;
export declare function deserializeCreateUserRequestBodyStatusField(val: SerializedData): CreateUserRequestBodyStatusField;
export declare function serializeCreateUserRequestBody(val: CreateUserRequestBody): SerializedData;
export declare function deserializeCreateUserRequestBody(val: SerializedData): CreateUserRequestBody;
export declare function serializeUpdateUserByIdRequestBodyRoleField(val: UpdateUserByIdRequestBodyRoleField): SerializedData;
export declare function deserializeUpdateUserByIdRequestBodyRoleField(val: SerializedData): UpdateUserByIdRequestBodyRoleField;
export declare function serializeUpdateUserByIdRequestBodyStatusField(val: UpdateUserByIdRequestBodyStatusField): SerializedData;
export declare function deserializeUpdateUserByIdRequestBodyStatusField(val: SerializedData): UpdateUserByIdRequestBodyStatusField;
export declare function serializeUpdateUserByIdRequestBodyNotificationEmailField(val: UpdateUserByIdRequestBodyNotificationEmailField): SerializedData;
export declare function deserializeUpdateUserByIdRequestBodyNotificationEmailField(val: SerializedData): UpdateUserByIdRequestBodyNotificationEmailField;
export declare function serializeUpdateUserByIdRequestBody(val: UpdateUserByIdRequestBody): SerializedData;
export declare function deserializeUpdateUserByIdRequestBody(val: SerializedData): UpdateUserByIdRequestBody;
//# sourceMappingURL=users.generated.d.ts.map