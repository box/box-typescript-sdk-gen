import { GroupMemberships } from '../schemas/groupMemberships.generated.js';
import { GroupMembership } from '../schemas/groupMembership.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetUserMembershipsOptionals {
    readonly queryParams: GetUserMembershipsQueryParams;
    readonly headers: GetUserMembershipsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetUserMembershipsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetUserMembershipsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetUserMembershipsOptionalsInput {
    readonly queryParams?: GetUserMembershipsQueryParams;
    readonly headers?: GetUserMembershipsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetGroupMembershipsOptionals {
    readonly queryParams: GetGroupMembershipsQueryParams;
    readonly headers: GetGroupMembershipsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetGroupMembershipsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetGroupMembershipsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetGroupMembershipsOptionalsInput {
    readonly queryParams?: GetGroupMembershipsQueryParams;
    readonly headers?: GetGroupMembershipsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateGroupMembershipOptionals {
    readonly queryParams: CreateGroupMembershipQueryParams;
    readonly headers: CreateGroupMembershipHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateGroupMembershipOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateGroupMembershipOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateGroupMembershipOptionalsInput {
    readonly queryParams?: CreateGroupMembershipQueryParams;
    readonly headers?: CreateGroupMembershipHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetGroupMembershipByIdOptionals {
    readonly queryParams: GetGroupMembershipByIdQueryParams;
    readonly headers: GetGroupMembershipByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetGroupMembershipByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetGroupMembershipByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetGroupMembershipByIdOptionalsInput {
    readonly queryParams?: GetGroupMembershipByIdQueryParams;
    readonly headers?: GetGroupMembershipByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateGroupMembershipByIdOptionals {
    readonly requestBody: UpdateGroupMembershipByIdRequestBody;
    readonly queryParams: UpdateGroupMembershipByIdQueryParams;
    readonly headers: UpdateGroupMembershipByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateGroupMembershipByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateGroupMembershipByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateGroupMembershipByIdOptionalsInput {
    readonly requestBody?: UpdateGroupMembershipByIdRequestBody;
    readonly queryParams?: UpdateGroupMembershipByIdQueryParams;
    readonly headers?: UpdateGroupMembershipByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteGroupMembershipByIdOptionals {
    readonly headers: DeleteGroupMembershipByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteGroupMembershipByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteGroupMembershipByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteGroupMembershipByIdOptionalsInput {
    readonly headers?: DeleteGroupMembershipByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetUserMembershipsQueryParams {
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * The offset of the item at which to begin the response.
     *
     * Queries with offset parameter value
     * exceeding 10000 will be rejected
     * with a 400 response. */
    readonly offset?: number;
}
export declare class GetUserMembershipsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUserMembershipsHeaders, 'extraHeaders'> & Partial<Pick<GetUserMembershipsHeaders, 'extraHeaders'>>);
}
export interface GetUserMembershipsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetGroupMembershipsQueryParams {
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * The offset of the item at which to begin the response.
     *
     * Queries with offset parameter value
     * exceeding 10000 will be rejected
     * with a 400 response. */
    readonly offset?: number;
}
export declare class GetGroupMembershipsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGroupMembershipsHeaders, 'extraHeaders'> & Partial<Pick<GetGroupMembershipsHeaders, 'extraHeaders'>>);
}
export interface GetGroupMembershipsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateGroupMembershipRequestBodyUserField {
    /**
     * The ID of the user to add to the group. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface CreateGroupMembershipRequestBodyGroupField {
    /**
     * The ID of the group to add the user to. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export type CreateGroupMembershipRequestBodyRoleField = 'member' | 'admin' | string;
export interface CreateGroupMembershipRequestBody {
    /**
     * The user to add to the group. */
    readonly user: CreateGroupMembershipRequestBodyUserField;
    /**
     * The group to add the user to. */
    readonly group: CreateGroupMembershipRequestBodyGroupField;
    /**
     * The role of the user in the group. */
    readonly role?: CreateGroupMembershipRequestBodyRoleField;
    /**
     * Custom configuration for the permissions an admin
     * if a group will receive. This option has no effect
     * on members with a role of `member`.
     *
     * Setting these permissions overwrites the default
     * access levels of an admin.
     *
     * Specifying a value of `null` for this object will disable
     * all configurable permissions. Specifying permissions will set
     * them accordingly, omitted permissions will be enabled by default. */
    readonly configurablePermissions?: {
        readonly [key: string]: boolean;
    } | null;
    readonly rawData?: SerializedData;
}
export interface CreateGroupMembershipQueryParams {
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
export declare class CreateGroupMembershipHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateGroupMembershipHeaders, 'extraHeaders'> & Partial<Pick<CreateGroupMembershipHeaders, 'extraHeaders'>>);
}
export interface CreateGroupMembershipHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetGroupMembershipByIdQueryParams {
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
export declare class GetGroupMembershipByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGroupMembershipByIdHeaders, 'extraHeaders'> & Partial<Pick<GetGroupMembershipByIdHeaders, 'extraHeaders'>>);
}
export interface GetGroupMembershipByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateGroupMembershipByIdRequestBodyRoleField = 'member' | 'admin' | string;
export interface UpdateGroupMembershipByIdRequestBody {
    /**
     * The role of the user in the group. */
    readonly role?: UpdateGroupMembershipByIdRequestBodyRoleField;
    /**
     * Custom configuration for the permissions an admin
     * if a group will receive. This option has no effect
     * on members with a role of `member`.
     *
     * Setting these permissions overwrites the default
     * access levels of an admin.
     *
     * Specifying a value of `null` for this object will disable
     * all configurable permissions. Specifying permissions will set
     * them accordingly, omitted permissions will be enabled by default. */
    readonly configurablePermissions?: {
        readonly [key: string]: boolean;
    } | null;
    readonly rawData?: SerializedData;
}
export interface UpdateGroupMembershipByIdQueryParams {
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
export declare class UpdateGroupMembershipByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateGroupMembershipByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateGroupMembershipByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateGroupMembershipByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteGroupMembershipByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteGroupMembershipByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteGroupMembershipByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteGroupMembershipByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class MembershipsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<MembershipsManager, 'networkSession' | 'getUserMemberships' | 'getGroupMemberships' | 'createGroupMembership' | 'getGroupMembershipById' | 'updateGroupMembershipById' | 'deleteGroupMembershipById'> & Partial<Pick<MembershipsManager, 'networkSession'>>);
    /**
       * Retrieves all the groups for a user. Only members of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {GetUserMembershipsOptionalsInput} optionalsInput
       * @returns {Promise<GroupMemberships>}
       */
    getUserMemberships(userId: string, optionalsInput?: GetUserMembershipsOptionalsInput): Promise<GroupMemberships>;
    /**
       * Retrieves all the members for a group. Only members of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {GetGroupMembershipsOptionalsInput} optionalsInput
       * @returns {Promise<GroupMemberships>}
       */
    getGroupMemberships(groupId: string, optionalsInput?: GetGroupMembershipsOptionalsInput): Promise<GroupMemberships>;
    /**
     * Creates a group membership. Only users with
     * admin-level permissions will be able to use this API.
     * @param {CreateGroupMembershipRequestBody} requestBody Request body of createGroupMembership method
     * @param {CreateGroupMembershipOptionalsInput} optionalsInput
     * @returns {Promise<GroupMembership>}
     */
    createGroupMembership(requestBody: CreateGroupMembershipRequestBody, optionalsInput?: CreateGroupMembershipOptionalsInput): Promise<GroupMembership>;
    /**
       * Retrieves a specific group membership. Only admins of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupMembershipId The ID of the group membership.
      Example: "434534"
       * @param {GetGroupMembershipByIdOptionalsInput} optionalsInput
       * @returns {Promise<GroupMembership>}
       */
    getGroupMembershipById(groupMembershipId: string, optionalsInput?: GetGroupMembershipByIdOptionalsInput): Promise<GroupMembership>;
    /**
       * Updates a user's group membership. Only admins of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupMembershipId The ID of the group membership.
      Example: "434534"
       * @param {UpdateGroupMembershipByIdOptionalsInput} optionalsInput
       * @returns {Promise<GroupMembership>}
       */
    updateGroupMembershipById(groupMembershipId: string, optionalsInput?: UpdateGroupMembershipByIdOptionalsInput): Promise<GroupMembership>;
    /**
       * Deletes a specific group membership. Only admins of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupMembershipId The ID of the group membership.
      Example: "434534"
       * @param {DeleteGroupMembershipByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteGroupMembershipById(groupMembershipId: string, optionalsInput?: DeleteGroupMembershipByIdOptionalsInput): Promise<undefined>;
}
export interface MembershipsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateGroupMembershipRequestBodyUserField(val: CreateGroupMembershipRequestBodyUserField): SerializedData;
export declare function deserializeCreateGroupMembershipRequestBodyUserField(val: SerializedData): CreateGroupMembershipRequestBodyUserField;
export declare function serializeCreateGroupMembershipRequestBodyGroupField(val: CreateGroupMembershipRequestBodyGroupField): SerializedData;
export declare function deserializeCreateGroupMembershipRequestBodyGroupField(val: SerializedData): CreateGroupMembershipRequestBodyGroupField;
export declare function serializeCreateGroupMembershipRequestBodyRoleField(val: CreateGroupMembershipRequestBodyRoleField): SerializedData;
export declare function deserializeCreateGroupMembershipRequestBodyRoleField(val: SerializedData): CreateGroupMembershipRequestBodyRoleField;
export declare function serializeCreateGroupMembershipRequestBody(val: CreateGroupMembershipRequestBody): SerializedData;
export declare function deserializeCreateGroupMembershipRequestBody(val: SerializedData): CreateGroupMembershipRequestBody;
export declare function serializeUpdateGroupMembershipByIdRequestBodyRoleField(val: UpdateGroupMembershipByIdRequestBodyRoleField): SerializedData;
export declare function deserializeUpdateGroupMembershipByIdRequestBodyRoleField(val: SerializedData): UpdateGroupMembershipByIdRequestBodyRoleField;
export declare function serializeUpdateGroupMembershipByIdRequestBody(val: UpdateGroupMembershipByIdRequestBody): SerializedData;
export declare function deserializeUpdateGroupMembershipByIdRequestBody(val: SerializedData): UpdateGroupMembershipByIdRequestBody;
