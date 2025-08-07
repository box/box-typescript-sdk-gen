import { Groups } from '../schemas/groups.generated.js';
import { GroupFull } from '../schemas/groupFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateGroupOptionals {
    readonly queryParams: CreateGroupQueryParams;
    readonly headers: CreateGroupHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateGroupOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateGroupOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateGroupOptionalsInput {
    readonly queryParams?: CreateGroupQueryParams;
    readonly headers?: CreateGroupHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetGroupByIdOptionals {
    readonly queryParams: GetGroupByIdQueryParams;
    readonly headers: GetGroupByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetGroupByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetGroupByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetGroupByIdOptionalsInput {
    readonly queryParams?: GetGroupByIdQueryParams;
    readonly headers?: GetGroupByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateGroupByIdOptionals {
    readonly requestBody: UpdateGroupByIdRequestBody;
    readonly queryParams: UpdateGroupByIdQueryParams;
    readonly headers: UpdateGroupByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateGroupByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateGroupByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateGroupByIdOptionalsInput {
    readonly requestBody?: UpdateGroupByIdRequestBody;
    readonly queryParams?: UpdateGroupByIdQueryParams;
    readonly headers?: UpdateGroupByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteGroupByIdOptionals {
    readonly headers: DeleteGroupByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteGroupByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteGroupByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteGroupByIdOptionalsInput {
    readonly headers?: DeleteGroupByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetGroupsQueryParams {
    /**
     * Limits the results to only groups whose `name` starts
     * with the search term. */
    readonly filterTerm?: string;
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
export declare class GetGroupsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGroupsHeaders, 'extraHeaders'> & Partial<Pick<GetGroupsHeaders, 'extraHeaders'>>);
}
export interface GetGroupsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateGroupRequestBodyInvitabilityLevelField = 'admins_only' | 'admins_and_members' | 'all_managed_users' | string;
export type CreateGroupRequestBodyMemberViewabilityLevelField = 'admins_only' | 'admins_and_members' | 'all_managed_users' | string;
export interface CreateGroupRequestBody {
    /**
     * The name of the new group to be created. This name must be unique
     * within the enterprise. */
    readonly name: string;
    /**
     * Keeps track of which external source this group is
     * coming, for example `Active Directory`, or `Okta`.
     *
     * Setting this will also prevent Box admins from editing
     * the group name and its members directly via the Box
     * web application.
     *
     * This is desirable for one-way syncing of groups. */
    readonly provenance?: string;
    /**
     * An arbitrary identifier that can be used by
     * external group sync tools to link this Box Group to
     * an external group.
     *
     * Example values of this field
     * could be an **Active Directory Object ID** or a **Google
     * Group ID**.
     *
     * We recommend you use of this field in
     * order to avoid issues when group names are updated in
     * either Box or external systems. */
    readonly externalSyncIdentifier?: string;
    /**
     * A human readable description of the group. */
    readonly description?: string;
    /**
     * Specifies who can invite the group to collaborate
     * on folders.
     *
     * When set to `admins_only` the enterprise admin, co-admins,
     * and the group's admin can invite the group.
     *
     * When set to `admins_and_members` all the admins listed
     * above and group members can invite the group.
     *
     * When set to `all_managed_users` all managed users in the
     * enterprise can invite the group. */
    readonly invitabilityLevel?: CreateGroupRequestBodyInvitabilityLevelField;
    /**
     * Specifies who can see the members of the group.
     *
     * * `admins_only` - the enterprise admin, co-admins, group's
     *   group admin.
     * * `admins_and_members` - all admins and group members.
     * * `all_managed_users` - all managed users in the
     *   enterprise. */
    readonly memberViewabilityLevel?: CreateGroupRequestBodyMemberViewabilityLevelField;
    readonly rawData?: SerializedData;
}
export interface CreateGroupQueryParams {
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
export declare class CreateGroupHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateGroupHeaders, 'extraHeaders'> & Partial<Pick<CreateGroupHeaders, 'extraHeaders'>>);
}
export interface CreateGroupHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetGroupByIdQueryParams {
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
export declare class GetGroupByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGroupByIdHeaders, 'extraHeaders'> & Partial<Pick<GetGroupByIdHeaders, 'extraHeaders'>>);
}
export interface GetGroupByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateGroupByIdRequestBodyInvitabilityLevelField = 'admins_only' | 'admins_and_members' | 'all_managed_users' | string;
export type UpdateGroupByIdRequestBodyMemberViewabilityLevelField = 'admins_only' | 'admins_and_members' | 'all_managed_users' | string;
export interface UpdateGroupByIdRequestBody {
    /**
     * The name of the new group to be created. Must be unique within the
     * enterprise. */
    readonly name?: string;
    /**
     * Keeps track of which external source this group is
     * coming, for example `Active Directory`, or `Okta`.
     *
     * Setting this will also prevent Box admins from editing
     * the group name and its members directly via the Box
     * web application.
     *
     * This is desirable for one-way syncing of groups. */
    readonly provenance?: string;
    /**
     * An arbitrary identifier that can be used by
     * external group sync tools to link this Box Group to
     * an external group.
     *
     * Example values of this field
     * could be an **Active Directory Object ID** or a **Google
     * Group ID**.
     *
     * We recommend you use of this field in
     * order to avoid issues when group names are updated in
     * either Box or external systems. */
    readonly externalSyncIdentifier?: string;
    /**
     * A human readable description of the group. */
    readonly description?: string;
    /**
     * Specifies who can invite the group to collaborate
     * on folders.
     *
     * When set to `admins_only` the enterprise admin, co-admins,
     * and the group's admin can invite the group.
     *
     * When set to `admins_and_members` all the admins listed
     * above and group members can invite the group.
     *
     * When set to `all_managed_users` all managed users in the
     * enterprise can invite the group. */
    readonly invitabilityLevel?: UpdateGroupByIdRequestBodyInvitabilityLevelField;
    /**
     * Specifies who can see the members of the group.
     *
     * * `admins_only` - the enterprise admin, co-admins, group's
     *   group admin.
     * * `admins_and_members` - all admins and group members.
     * * `all_managed_users` - all managed users in the
     *   enterprise. */
    readonly memberViewabilityLevel?: UpdateGroupByIdRequestBodyMemberViewabilityLevelField;
    readonly rawData?: SerializedData;
}
export interface UpdateGroupByIdQueryParams {
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
export declare class UpdateGroupByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateGroupByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateGroupByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateGroupByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteGroupByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteGroupByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteGroupByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteGroupByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GroupsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<GroupsManager, 'networkSession' | 'getGroups' | 'createGroup' | 'getGroupById' | 'updateGroupById' | 'deleteGroupById'> & Partial<Pick<GroupsManager, 'networkSession'>>);
    /**
     * Retrieves all of the groups for a given enterprise. The user
     * must have admin permissions to inspect enterprise's groups.
     * @param {GetGroupsQueryParams} queryParams Query parameters of getGroups method
     * @param {GetGroupsHeadersInput} headersInput Headers of getGroups method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<Groups>}
     */
    getGroups(queryParams?: GetGroupsQueryParams, headersInput?: GetGroupsHeadersInput, cancellationToken?: CancellationToken): Promise<Groups>;
    /**
     * Creates a new group of users in an enterprise. Only users with admin
     * permissions can create new groups.
     * @param {CreateGroupRequestBody} requestBody Request body of createGroup method
     * @param {CreateGroupOptionalsInput} optionalsInput
     * @returns {Promise<GroupFull>}
     */
    createGroup(requestBody: CreateGroupRequestBody, optionalsInput?: CreateGroupOptionalsInput): Promise<GroupFull>;
    /**
       * Retrieves information about a group. Only members of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {GetGroupByIdOptionalsInput} optionalsInput
       * @returns {Promise<GroupFull>}
       */
    getGroupById(groupId: string, optionalsInput?: GetGroupByIdOptionalsInput): Promise<GroupFull>;
    /**
       * Updates a specific group. Only admins of this
       * group or users with admin-level permissions will be able to
       * use this API.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {UpdateGroupByIdOptionalsInput} optionalsInput
       * @returns {Promise<GroupFull>}
       */
    updateGroupById(groupId: string, optionalsInput?: UpdateGroupByIdOptionalsInput): Promise<GroupFull>;
    /**
       * Permanently deletes a group. Only users with
       * admin-level permissions will be able to use this API.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {DeleteGroupByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteGroupById(groupId: string, optionalsInput?: DeleteGroupByIdOptionalsInput): Promise<undefined>;
}
export interface GroupsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateGroupRequestBodyInvitabilityLevelField(val: CreateGroupRequestBodyInvitabilityLevelField): SerializedData;
export declare function deserializeCreateGroupRequestBodyInvitabilityLevelField(val: SerializedData): CreateGroupRequestBodyInvitabilityLevelField;
export declare function serializeCreateGroupRequestBodyMemberViewabilityLevelField(val: CreateGroupRequestBodyMemberViewabilityLevelField): SerializedData;
export declare function deserializeCreateGroupRequestBodyMemberViewabilityLevelField(val: SerializedData): CreateGroupRequestBodyMemberViewabilityLevelField;
export declare function serializeCreateGroupRequestBody(val: CreateGroupRequestBody): SerializedData;
export declare function deserializeCreateGroupRequestBody(val: SerializedData): CreateGroupRequestBody;
export declare function serializeUpdateGroupByIdRequestBodyInvitabilityLevelField(val: UpdateGroupByIdRequestBodyInvitabilityLevelField): SerializedData;
export declare function deserializeUpdateGroupByIdRequestBodyInvitabilityLevelField(val: SerializedData): UpdateGroupByIdRequestBodyInvitabilityLevelField;
export declare function serializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(val: UpdateGroupByIdRequestBodyMemberViewabilityLevelField): SerializedData;
export declare function deserializeUpdateGroupByIdRequestBodyMemberViewabilityLevelField(val: SerializedData): UpdateGroupByIdRequestBodyMemberViewabilityLevelField;
export declare function serializeUpdateGroupByIdRequestBody(val: UpdateGroupByIdRequestBody): SerializedData;
export declare function deserializeUpdateGroupByIdRequestBody(val: SerializedData): UpdateGroupByIdRequestBody;
//# sourceMappingURL=groups.generated.d.ts.map