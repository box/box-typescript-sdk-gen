import { Collaboration } from '../schemas/collaboration.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class GetCollaborationByIdOptionals {
    readonly queryParams: GetCollaborationByIdQueryParams;
    readonly headers: GetCollaborationByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollaborationByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetCollaborationByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetCollaborationByIdOptionalsInput {
    readonly queryParams?: GetCollaborationByIdQueryParams;
    readonly headers?: GetCollaborationByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateCollaborationByIdOptionals {
    readonly headers: UpdateCollaborationByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateCollaborationByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateCollaborationByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateCollaborationByIdOptionalsInput {
    readonly headers?: UpdateCollaborationByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteCollaborationByIdOptionals {
    readonly headers: DeleteCollaborationByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteCollaborationByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteCollaborationByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteCollaborationByIdOptionalsInput {
    readonly headers?: DeleteCollaborationByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateCollaborationOptionals {
    readonly queryParams: CreateCollaborationQueryParams;
    readonly headers: CreateCollaborationHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateCollaborationOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateCollaborationOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateCollaborationOptionalsInput {
    readonly queryParams?: CreateCollaborationQueryParams;
    readonly headers?: CreateCollaborationHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetCollaborationByIdQueryParams {
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
export declare class GetCollaborationByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationByIdHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationByIdHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateCollaborationByIdRequestBodyRoleField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner' | 'owner' | string;
export type UpdateCollaborationByIdRequestBodyStatusField = 'pending' | 'accepted' | 'rejected' | string;
export interface UpdateCollaborationByIdRequestBody {
    /**
     * The level of access granted. */
    readonly role: UpdateCollaborationByIdRequestBodyRoleField;
    /**
     * Set the status of a `pending` collaboration invitation,
     * effectively accepting, or rejecting the invite. */
    readonly status?: UpdateCollaborationByIdRequestBodyStatusField;
    /**
     * Update the expiration date for the collaboration. At this date,
     * the collaboration will be automatically removed from the item.
     *
     * This feature will only work if the **Automatically remove invited
     * collaborators: Allow folder owners to extend the expiry date**
     * setting has been enabled in the **Enterprise Settings**
     * of the **Admin Console**. When the setting is not enabled,
     * collaborations can not have an expiry date and a value for this
     * field will be result in an error.
     *
     * Additionally, a collaboration can only be given an
     * expiration if it was created after the **Automatically remove
     * invited collaborator** setting was enabled. */
    readonly expiresAt?: DateTime;
    /**
     * Determines if the invited users can see the entire parent path to
     * the associated folder. The user will not gain privileges in any
     * parent folder and therefore can not see content the user is not
     * collaborated on.
     *
     * Be aware that this meaningfully increases the time required to load the
     * invitee's **All Files** page. We recommend you limit the number of
     * collaborations with `can_view_path` enabled to 1,000 per user.
     *
     * Only owner or co-owners can invite collaborators with a `can_view_path` of
     * `true`.
     *
     * `can_view_path` can only be used for folder collaborations. */
    readonly canViewPath?: boolean;
    readonly rawData?: SerializedData;
}
export declare class UpdateCollaborationByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateCollaborationByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateCollaborationByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateCollaborationByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteCollaborationByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteCollaborationByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteCollaborationByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteCollaborationByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateCollaborationRequestBodyItemTypeField = 'file' | 'folder';
export interface CreateCollaborationRequestBodyItemField {
    /**
     * The type of the item that this collaboration will be
     * granted access to. */
    readonly type?: CreateCollaborationRequestBodyItemTypeField;
    /**
     * The ID of the item that will be granted access to. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export type CreateCollaborationRequestBodyAccessibleByTypeField = 'user' | 'group';
export interface CreateCollaborationRequestBodyAccessibleByField {
    /**
     * The type of collaborator to invite. */
    readonly type: CreateCollaborationRequestBodyAccessibleByTypeField;
    /**
     * The ID of the user or group.
     *
     * Alternatively, use `login` to specify a user by email
     * address. */
    readonly id?: string;
    /**
     * The email address of the user to grant access to the item.
     *
     * Alternatively, use `id` to specify a user by user ID. */
    readonly login?: string;
    readonly rawData?: SerializedData;
}
export type CreateCollaborationRequestBodyRoleField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner' | string;
export interface CreateCollaborationRequestBody {
    /**
     * The item to attach the comment to. */
    readonly item: CreateCollaborationRequestBodyItemField;
    /**
     * The user or group to give access to the item. */
    readonly accessibleBy: CreateCollaborationRequestBodyAccessibleByField;
    /**
     * The level of access granted. */
    readonly role: CreateCollaborationRequestBodyRoleField;
    /**
     * If set to `true`, collaborators have access to
     * shared items, but such items won't be visible in the
     * All Files list. Additionally, collaborators won't
     * see the the path to the root folder for the
     * shared item. */
    readonly isAccessOnly?: boolean;
    /**
     * Determines if the invited users can see the entire parent path to
     * the associated folder. The user will not gain privileges in any
     * parent folder and therefore can not see content the user is not
     * collaborated on.
     *
     * Be aware that this meaningfully increases the time required to load the
     * invitee's **All Files** page. We recommend you limit the number of
     * collaborations with `can_view_path` enabled to 1,000 per user.
     *
     * Only owner or co-owners can invite collaborators with a `can_view_path` of
     * `true`.
     *
     * `can_view_path` can only be used for folder collaborations. */
    readonly canViewPath?: boolean;
    /**
     * Set the expiration date for the collaboration. At this date, the
     * collaboration will be automatically removed from the item.
     *
     * This feature will only work if the **Automatically remove invited
     * collaborators: Allow folder owners to extend the expiry date**
     * setting has been enabled in the **Enterprise Settings**
     * of the **Admin Console**. When the setting is not enabled,
     * collaborations can not have an expiry date and a value for this
     * field will be result in an error. */
    readonly expiresAt?: DateTime;
    readonly rawData?: SerializedData;
}
export interface CreateCollaborationQueryParams {
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
     * Determines if users should receive email notification
     * for the action performed. */
    readonly notify?: boolean;
}
export declare class CreateCollaborationHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateCollaborationHeaders, 'extraHeaders'> & Partial<Pick<CreateCollaborationHeaders, 'extraHeaders'>>);
}
export interface CreateCollaborationHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UserCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<UserCollaborationsManager, 'networkSession' | 'getCollaborationById' | 'updateCollaborationById' | 'deleteCollaborationById' | 'createCollaboration'> & Partial<Pick<UserCollaborationsManager, 'networkSession'>>);
    /**
       * Retrieves a single collaboration.
       * @param {string} collaborationId The ID of the collaboration.
      Example: "1234"
       * @param {GetCollaborationByIdOptionalsInput} optionalsInput
       * @returns {Promise<Collaboration>}
       */
    getCollaborationById(collaborationId: string, optionalsInput?: GetCollaborationByIdOptionalsInput): Promise<Collaboration>;
    /**
       * Updates a collaboration.
       * Can be used to change the owner of an item, or to
       * accept collaboration invites.
       * @param {string} collaborationId The ID of the collaboration.
      Example: "1234"
       * @param {UpdateCollaborationByIdRequestBody} requestBody Request body of updateCollaborationById method
       * @param {UpdateCollaborationByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined | Collaboration>}
       */
    updateCollaborationById(collaborationId: string, requestBody: UpdateCollaborationByIdRequestBody, optionalsInput?: UpdateCollaborationByIdOptionalsInput): Promise<undefined | Collaboration>;
    /**
       * Deletes a single collaboration.
       * @param {string} collaborationId The ID of the collaboration.
      Example: "1234"
       * @param {DeleteCollaborationByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteCollaborationById(collaborationId: string, optionalsInput?: DeleteCollaborationByIdOptionalsInput): Promise<undefined>;
    /**
     * Adds a collaboration for a single user or a single group to a file
     * or folder.
     *
     * Collaborations can be created using email address, user IDs, or a
     * group IDs.
     *
     * If a collaboration is being created with a group, access to
     * this endpoint is dependent on the group's ability to be invited.
     *
     * If collaboration is in `pending` status, the following fields
     * are redacted:
     * - `login` and `name` are hidden if a collaboration was created
     * using `user_id`,
     * -  `name` is hidden if a collaboration was created using `login`.
     * @param {CreateCollaborationRequestBody} requestBody Request body of createCollaboration method
     * @param {CreateCollaborationOptionalsInput} optionalsInput
     * @returns {Promise<Collaboration>}
     */
    createCollaboration(requestBody: CreateCollaborationRequestBody, optionalsInput?: CreateCollaborationOptionalsInput): Promise<Collaboration>;
}
export interface UserCollaborationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateCollaborationByIdRequestBodyRoleField(val: UpdateCollaborationByIdRequestBodyRoleField): SerializedData;
export declare function deserializeUpdateCollaborationByIdRequestBodyRoleField(val: SerializedData): UpdateCollaborationByIdRequestBodyRoleField;
export declare function serializeUpdateCollaborationByIdRequestBodyStatusField(val: UpdateCollaborationByIdRequestBodyStatusField): SerializedData;
export declare function deserializeUpdateCollaborationByIdRequestBodyStatusField(val: SerializedData): UpdateCollaborationByIdRequestBodyStatusField;
export declare function serializeUpdateCollaborationByIdRequestBody(val: UpdateCollaborationByIdRequestBody): SerializedData;
export declare function deserializeUpdateCollaborationByIdRequestBody(val: SerializedData): UpdateCollaborationByIdRequestBody;
export declare function serializeCreateCollaborationRequestBodyItemTypeField(val: CreateCollaborationRequestBodyItemTypeField): SerializedData;
export declare function deserializeCreateCollaborationRequestBodyItemTypeField(val: SerializedData): CreateCollaborationRequestBodyItemTypeField;
export declare function serializeCreateCollaborationRequestBodyItemField(val: CreateCollaborationRequestBodyItemField): SerializedData;
export declare function deserializeCreateCollaborationRequestBodyItemField(val: SerializedData): CreateCollaborationRequestBodyItemField;
export declare function serializeCreateCollaborationRequestBodyAccessibleByTypeField(val: CreateCollaborationRequestBodyAccessibleByTypeField): SerializedData;
export declare function deserializeCreateCollaborationRequestBodyAccessibleByTypeField(val: SerializedData): CreateCollaborationRequestBodyAccessibleByTypeField;
export declare function serializeCreateCollaborationRequestBodyAccessibleByField(val: CreateCollaborationRequestBodyAccessibleByField): SerializedData;
export declare function deserializeCreateCollaborationRequestBodyAccessibleByField(val: SerializedData): CreateCollaborationRequestBodyAccessibleByField;
export declare function serializeCreateCollaborationRequestBodyRoleField(val: CreateCollaborationRequestBodyRoleField): SerializedData;
export declare function deserializeCreateCollaborationRequestBodyRoleField(val: SerializedData): CreateCollaborationRequestBodyRoleField;
export declare function serializeCreateCollaborationRequestBody(val: CreateCollaborationRequestBody): SerializedData;
export declare function deserializeCreateCollaborationRequestBody(val: SerializedData): CreateCollaborationRequestBody;
