import { Collaborations } from '../schemas/collaborations.generated.js';
import { CollaborationsOffsetPaginated } from '../schemas/collaborationsOffsetPaginated.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileCollaborationsOptionals {
    readonly queryParams: GetFileCollaborationsQueryParams;
    readonly headers: GetFileCollaborationsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileCollaborationsOptionalsInput {
    readonly queryParams?: GetFileCollaborationsQueryParams;
    readonly headers?: GetFileCollaborationsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderCollaborationsOptionals {
    readonly queryParams: GetFolderCollaborationsQueryParams;
    readonly headers: GetFolderCollaborationsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFolderCollaborationsOptionalsInput {
    readonly queryParams?: GetFolderCollaborationsQueryParams;
    readonly headers?: GetFolderCollaborationsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetCollaborationsOptionals {
    readonly headers: GetCollaborationsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollaborationsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetCollaborationsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetCollaborationsOptionalsInput {
    readonly headers?: GetCollaborationsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetGroupCollaborationsOptionals {
    readonly queryParams: GetGroupCollaborationsQueryParams;
    readonly headers: GetGroupCollaborationsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetGroupCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetGroupCollaborationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetGroupCollaborationsOptionalsInput {
    readonly queryParams?: GetGroupCollaborationsQueryParams;
    readonly headers?: GetGroupCollaborationsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFileCollaborationsQueryParams {
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
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
}
export declare class GetFileCollaborationsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileCollaborationsHeaders, 'extraHeaders'> & Partial<Pick<GetFileCollaborationsHeaders, 'extraHeaders'>>);
}
export interface GetFileCollaborationsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFolderCollaborationsQueryParams {
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
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
}
export declare class GetFolderCollaborationsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderCollaborationsHeaders, 'extraHeaders'> & Partial<Pick<GetFolderCollaborationsHeaders, 'extraHeaders'>>);
}
export interface GetFolderCollaborationsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetCollaborationsQueryParamsStatusField = 'pending' | string;
export interface GetCollaborationsQueryParams {
    /**
     * The status of the collaborations to retrieve. */
    readonly status: GetCollaborationsQueryParamsStatusField;
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
}
export declare class GetCollaborationsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationsHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationsHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetGroupCollaborationsQueryParams {
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
export declare class GetGroupCollaborationsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetGroupCollaborationsHeaders, 'extraHeaders'> & Partial<Pick<GetGroupCollaborationsHeaders, 'extraHeaders'>>);
}
export interface GetGroupCollaborationsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ListCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ListCollaborationsManager, 'networkSession' | 'getFileCollaborations' | 'getFolderCollaborations' | 'getCollaborations' | 'getGroupCollaborations'> & Partial<Pick<ListCollaborationsManager, 'networkSession'>>);
    /**
       * Retrieves a list of pending and active collaborations for a
       * file. This returns all the users that have access to the file
       * or have been invited to the file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileCollaborationsOptionalsInput} optionalsInput
       * @returns {Promise<Collaborations>}
       */
    getFileCollaborations(fileId: string, optionalsInput?: GetFileCollaborationsOptionalsInput): Promise<Collaborations>;
    /**
       * Retrieves a list of pending and active collaborations for a
       * folder. This returns all the users that have access to the folder
       * or have been invited to the folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      Example: "12345"
       * @param {GetFolderCollaborationsOptionalsInput} optionalsInput
       * @returns {Promise<Collaborations>}
       */
    getFolderCollaborations(folderId: string, optionalsInput?: GetFolderCollaborationsOptionalsInput): Promise<Collaborations>;
    /**
     * Retrieves all pending collaboration invites for this user.
     * @param {GetCollaborationsQueryParams} queryParams Query parameters of getCollaborations method
     * @param {GetCollaborationsOptionalsInput} optionalsInput
     * @returns {Promise<CollaborationsOffsetPaginated>}
     */
    getCollaborations(queryParams: GetCollaborationsQueryParams, optionalsInput?: GetCollaborationsOptionalsInput): Promise<CollaborationsOffsetPaginated>;
    /**
       * Retrieves all the collaborations for a group. The user
       * must have admin permissions to inspect enterprise's groups.
       *
       * Each collaboration object has details on which files or
       * folders the group has access to and with what role.
       * @param {string} groupId The ID of the group.
      Example: "57645"
       * @param {GetGroupCollaborationsOptionalsInput} optionalsInput
       * @returns {Promise<CollaborationsOffsetPaginated>}
       */
    getGroupCollaborations(groupId: string, optionalsInput?: GetGroupCollaborationsOptionalsInput): Promise<CollaborationsOffsetPaginated>;
}
export interface ListCollaborationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetCollaborationsQueryParamsStatusField(val: GetCollaborationsQueryParamsStatusField): SerializedData;
export declare function deserializeGetCollaborationsQueryParamsStatusField(val: SerializedData): GetCollaborationsQueryParamsStatusField;
//# sourceMappingURL=listCollaborations.generated.d.ts.map