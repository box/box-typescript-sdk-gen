import { isJson } from "./json.js";
import { Json } from "./json.js";
export type PostOAuth2TokenGrantTypeField = "authorization_code" | "refresh_token" | "client_credentials" | "urn:ietf:params:oauth:grant-type:jwt-bearer" | "urn:ietf:params:oauth:grant-type:token-exchange";
export function deserializePostOAuth2TokenGrantTypeField(val: any): PostOAuth2TokenGrantTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PostOAuth2TokenGrantTypeField\"";
    }
    if (val == "authorization_code") {
        return "authorization_code";
    }
    if (val == "refresh_token") {
        return "refresh_token";
    }
    if (val == "client_credentials") {
        return "client_credentials";
    }
    if (val == "urn:ietf:params:oauth:grant-type:jwt-bearer") {
        return "urn:ietf:params:oauth:grant-type:jwt-bearer";
    }
    if (val == "urn:ietf:params:oauth:grant-type:token-exchange") {
        return "urn:ietf:params:oauth:grant-type:token-exchange";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializePostOAuth2TokenGrantTypeField(val: PostOAuth2TokenGrantTypeField): Json {
    return val;
}
export type PostOAuth2TokenSubjectTokenTypeField = "urn:ietf:params:oauth:token-type:access_token";
export function deserializePostOAuth2TokenSubjectTokenTypeField(val: any): PostOAuth2TokenSubjectTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PostOAuth2TokenSubjectTokenTypeField\"";
    }
    if (val == "urn:ietf:params:oauth:token-type:access_token") {
        return "urn:ietf:params:oauth:token-type:access_token";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializePostOAuth2TokenSubjectTokenTypeField(val: PostOAuth2TokenSubjectTokenTypeField): Json {
    return val;
}
export type PostOAuth2TokenActorTokenTypeField = "urn:ietf:params:oauth:token-type:id_token";
export function deserializePostOAuth2TokenActorTokenTypeField(val: any): PostOAuth2TokenActorTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PostOAuth2TokenActorTokenTypeField\"";
    }
    if (val == "urn:ietf:params:oauth:token-type:id_token") {
        return "urn:ietf:params:oauth:token-type:id_token";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializePostOAuth2TokenActorTokenTypeField(val: PostOAuth2TokenActorTokenTypeField): Json {
    return val;
}
export type PostOAuth2TokenBoxSubjectTypeField = "enterprise" | "user";
export function deserializePostOAuth2TokenBoxSubjectTypeField(val: any): PostOAuth2TokenBoxSubjectTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PostOAuth2TokenBoxSubjectTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializePostOAuth2TokenBoxSubjectTypeField(val: PostOAuth2TokenBoxSubjectTypeField): Json {
    return val;
}
export interface PostOAuth2Token {
    readonly grantType: PostOAuth2TokenGrantTypeField;
    readonly clientId?: string;
    readonly clientSecret?: string;
    readonly code?: string;
    readonly refreshToken?: string;
    readonly assertion?: string;
    readonly subjectToken?: string;
    readonly subjectTokenType?: PostOAuth2TokenSubjectTokenTypeField;
    readonly actorToken?: string;
    readonly actorTokenType?: PostOAuth2TokenActorTokenTypeField;
    readonly scope?: string;
    readonly resource?: string;
    readonly boxSubjectType?: PostOAuth2TokenBoxSubjectTypeField;
    readonly boxSubjectId?: string;
    readonly boxSharedLink?: string;
}
export function deserializePostOAuth2Token(val: any): PostOAuth2Token {
    const grantType: PostOAuth2TokenGrantTypeField = deserializePostOAuth2TokenGrantTypeField(val.grant_type);
    const clientId: undefined | string = isJson(val.client_id, "string") ? val.client_id : void 0;
    const clientSecret: undefined | string = isJson(val.client_secret, "string") ? val.client_secret : void 0;
    const code: undefined | string = isJson(val.code, "string") ? val.code : void 0;
    const refreshToken: undefined | string = isJson(val.refresh_token, "string") ? val.refresh_token : void 0;
    const assertion: undefined | string = isJson(val.assertion, "string") ? val.assertion : void 0;
    const subjectToken: undefined | string = isJson(val.subject_token, "string") ? val.subject_token : void 0;
    const subjectTokenType: undefined | PostOAuth2TokenSubjectTokenTypeField = val.subject_token_type == void 0 ? void 0 : deserializePostOAuth2TokenSubjectTokenTypeField(val.subject_token_type);
    const actorToken: undefined | string = isJson(val.actor_token, "string") ? val.actor_token : void 0;
    const actorTokenType: undefined | PostOAuth2TokenActorTokenTypeField = val.actor_token_type == void 0 ? void 0 : deserializePostOAuth2TokenActorTokenTypeField(val.actor_token_type);
    const scope: undefined | string = isJson(val.scope, "string") ? val.scope : void 0;
    const resource: undefined | string = isJson(val.resource, "string") ? val.resource : void 0;
    const boxSubjectType: undefined | PostOAuth2TokenBoxSubjectTypeField = val.box_subject_type == void 0 ? void 0 : deserializePostOAuth2TokenBoxSubjectTypeField(val.box_subject_type);
    const boxSubjectId: undefined | string = isJson(val.box_subject_id, "string") ? val.box_subject_id : void 0;
    const boxSharedLink: undefined | string = isJson(val.box_shared_link, "string") ? val.box_shared_link : void 0;
    return { grantType: grantType, clientId: clientId, clientSecret: clientSecret, code: code, refreshToken: refreshToken, assertion: assertion, subjectToken: subjectToken, subjectTokenType: subjectTokenType, actorToken: actorToken, actorTokenType: actorTokenType, scope: scope, resource: resource, boxSubjectType: boxSubjectType, boxSubjectId: boxSubjectId, boxSharedLink: boxSharedLink } satisfies PostOAuth2Token;
}
export function serializePostOAuth2Token(val: PostOAuth2Token): Json {
    return { ["grant_type"]: serializePostOAuth2TokenGrantTypeField(val.grantType), ["client_id"]: val.clientId, ["client_secret"]: val.clientSecret, ["code"]: val.code, ["refresh_token"]: val.refreshToken, ["assertion"]: val.assertion, ["subject_token"]: val.subjectToken, ["subject_token_type"]: val.subjectTokenType == void 0 ? void 0 : serializePostOAuth2TokenSubjectTokenTypeField(val.subjectTokenType), ["actor_token"]: val.actorToken, ["actor_token_type"]: val.actorTokenType == void 0 ? void 0 : serializePostOAuth2TokenActorTokenTypeField(val.actorTokenType), ["scope"]: val.scope, ["resource"]: val.resource, ["box_subject_type"]: val.boxSubjectType == void 0 ? void 0 : serializePostOAuth2TokenBoxSubjectTypeField(val.boxSubjectType), ["box_subject_id"]: val.boxSubjectId, ["box_shared_link"]: val.boxSharedLink };
}
export type PostOAuth2TokenRefreshAccessTokenGrantTypeField = "refresh_token";
export function deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: any): PostOAuth2TokenRefreshAccessTokenGrantTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PostOAuth2TokenRefreshAccessTokenGrantTypeField\"";
    }
    if (val == "refresh_token") {
        return "refresh_token";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: PostOAuth2TokenRefreshAccessTokenGrantTypeField): Json {
    return val;
}
export interface PostOAuth2TokenRefreshAccessToken {
    readonly grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField;
    readonly clientId: string;
    readonly clientSecret: string;
    readonly refreshToken: string;
}
export function deserializePostOAuth2TokenRefreshAccessToken(val: any): PostOAuth2TokenRefreshAccessToken {
    const grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField = deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grant_type);
    const clientId: string = val.client_id;
    const clientSecret: string = val.client_secret;
    const refreshToken: string = val.refresh_token;
    return { grantType: grantType, clientId: clientId, clientSecret: clientSecret, refreshToken: refreshToken } satisfies PostOAuth2TokenRefreshAccessToken;
}
export function serializePostOAuth2TokenRefreshAccessToken(val: PostOAuth2TokenRefreshAccessToken): Json {
    return { ["grant_type"]: serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grantType), ["client_id"]: val.clientId, ["client_secret"]: val.clientSecret, ["refresh_token"]: val.refreshToken };
}
export interface PostOAuth2Revoke {
    readonly clientId?: string;
    readonly clientSecret?: string;
    readonly token?: string;
}
export function deserializePostOAuth2Revoke(val: any): PostOAuth2Revoke {
    const clientId: undefined | string = isJson(val.client_id, "string") ? val.client_id : void 0;
    const clientSecret: undefined | string = isJson(val.client_secret, "string") ? val.client_secret : void 0;
    const token: undefined | string = isJson(val.token, "string") ? val.token : void 0;
    return { clientId: clientId, clientSecret: clientSecret, token: token } satisfies PostOAuth2Revoke;
}
export function serializePostOAuth2Revoke(val: PostOAuth2Revoke): Json {
    return { ["client_id"]: val.clientId, ["client_secret"]: val.clientSecret, ["token"]: val.token };
}
export type ZipDownloadRequestItemsFieldTypeField = "file" | "folder.";
export function deserializeZipDownloadRequestItemsFieldTypeField(val: any): ZipDownloadRequestItemsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ZipDownloadRequestItemsFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder.") {
        return "folder.";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeZipDownloadRequestItemsFieldTypeField(val: ZipDownloadRequestItemsFieldTypeField): Json {
    return val;
}
export interface ZipDownloadRequestItemsField {
    readonly type: ZipDownloadRequestItemsFieldTypeField;
    readonly id: string;
}
export function deserializeZipDownloadRequestItemsField(val: any): ZipDownloadRequestItemsField {
    const type: ZipDownloadRequestItemsFieldTypeField = deserializeZipDownloadRequestItemsFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies ZipDownloadRequestItemsField;
}
export function serializeZipDownloadRequestItemsField(val: ZipDownloadRequestItemsField): Json {
    return { ["type"]: serializeZipDownloadRequestItemsFieldTypeField(val.type), ["id"]: val.id };
}
export interface ZipDownloadRequest {
    readonly items: readonly ZipDownloadRequestItemsField[];
    readonly downloadFileName?: string;
}
export function deserializeZipDownloadRequest(val: any): ZipDownloadRequest {
    const items: readonly ZipDownloadRequestItemsField[] = val.items.map(function (itm: Json): any {
        return deserializeZipDownloadRequestItemsField(itm);
    }) as readonly any[];
    const downloadFileName: undefined | string = isJson(val.download_file_name, "string") ? val.download_file_name : void 0;
    return { items: items, downloadFileName: downloadFileName } satisfies ZipDownloadRequest;
}
export function serializeZipDownloadRequest(val: ZipDownloadRequest): Json {
    return { ["items"]: val.items.map(function (item: ZipDownloadRequestItemsField): any {
            return serializeZipDownloadRequestItemsField(item);
        }) as readonly any[], ["download_file_name"]: val.downloadFileName };
}
export interface MetadataQueryQueryParamsField {
}
export function deserializeMetadataQueryQueryParamsField(val: any): MetadataQueryQueryParamsField {
    return {} satisfies MetadataQueryQueryParamsField;
}
export function serializeMetadataQueryQueryParamsField(val: MetadataQueryQueryParamsField): Json {
    return {};
}
export type MetadataQueryOrderByFieldDirectionField = "ASC" | "DESC" | "asc" | "desc";
export function deserializeMetadataQueryOrderByFieldDirectionField(val: any): MetadataQueryOrderByFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataQueryOrderByFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    if (val == "asc") {
        return "asc";
    }
    if (val == "desc") {
        return "desc";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeMetadataQueryOrderByFieldDirectionField(val: MetadataQueryOrderByFieldDirectionField): Json {
    return val;
}
export interface MetadataQueryOrderByField {
    readonly fieldKey?: string;
    readonly direction?: MetadataQueryOrderByFieldDirectionField;
}
export function deserializeMetadataQueryOrderByField(val: any): MetadataQueryOrderByField {
    const fieldKey: undefined | string = isJson(val.field_key, "string") ? val.field_key : void 0;
    const direction: undefined | MetadataQueryOrderByFieldDirectionField = val.direction == void 0 ? void 0 : deserializeMetadataQueryOrderByFieldDirectionField(val.direction);
    return { fieldKey: fieldKey, direction: direction } satisfies MetadataQueryOrderByField;
}
export function serializeMetadataQueryOrderByField(val: MetadataQueryOrderByField): Json {
    return { ["field_key"]: val.fieldKey, ["direction"]: val.direction == void 0 ? void 0 : serializeMetadataQueryOrderByFieldDirectionField(val.direction) };
}
export interface MetadataQuery {
    readonly from: string;
    readonly query?: string;
    readonly queryParams?: MetadataQueryQueryParamsField;
    readonly ancestorFolderId: string;
    readonly orderBy?: readonly MetadataQueryOrderByField[];
    readonly limit?: number;
    readonly marker?: string;
    readonly fields?: readonly string[];
}
export function deserializeMetadataQuery(val: any): MetadataQuery {
    const from: string = val.from;
    const query: undefined | string = isJson(val.query, "string") ? val.query : void 0;
    const queryParams: undefined | MetadataQueryQueryParamsField = val.query_params == void 0 ? void 0 : deserializeMetadataQueryQueryParamsField(val.query_params);
    const ancestorFolderId: string = val.ancestor_folder_id;
    const orderBy: undefined | readonly MetadataQueryOrderByField[] = isJson(val.order_by, "array") ? val.order_by.map(function (itm: Json): any {
        return deserializeMetadataQueryOrderByField(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const fields: undefined | readonly string[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    return { from: from, query: query, queryParams: queryParams, ancestorFolderId: ancestorFolderId, orderBy: orderBy, limit: limit, marker: marker, fields: fields } satisfies MetadataQuery;
}
export function serializeMetadataQuery(val: MetadataQuery): Json {
    return { ["from"]: val.from, ["query"]: val.query, ["query_params"]: val.queryParams == void 0 ? void 0 : serializeMetadataQueryQueryParamsField(val.queryParams), ["ancestor_folder_id"]: val.ancestorFolderId, ["order_by"]: val.orderBy == void 0 ? void 0 : val.orderBy.map(function (item: MetadataQueryOrderByField): any {
            return serializeMetadataQueryOrderByField(item);
        }) as readonly any[], ["limit"]: val.limit, ["marker"]: val.marker, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: string): undefined {
            return void 0;
        }) as readonly any[] };
}
export type FileRequestUpdateRequestStatusField = "active" | "inactive";
export function deserializeFileRequestUpdateRequestStatusField(val: any): FileRequestUpdateRequestStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileRequestUpdateRequestStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "inactive") {
        return "inactive";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileRequestUpdateRequestStatusField(val: FileRequestUpdateRequestStatusField): Json {
    return val;
}
export interface FileRequestUpdateRequest {
    readonly title?: string;
    readonly description?: string;
    readonly status?: FileRequestUpdateRequestStatusField;
    readonly isEmailRequired?: boolean;
    readonly isDescriptionRequired?: boolean;
    readonly expiresAt?: string;
}
export function deserializeFileRequestUpdateRequest(val: any): FileRequestUpdateRequest {
    const title: undefined | string = isJson(val.title, "string") ? val.title : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const status: undefined | FileRequestUpdateRequestStatusField = val.status == void 0 ? void 0 : deserializeFileRequestUpdateRequestStatusField(val.status);
    const isEmailRequired: undefined | boolean = isJson(val.is_email_required, "boolean") ? val.is_email_required : void 0;
    const isDescriptionRequired: undefined | boolean = isJson(val.is_description_required, "boolean") ? val.is_description_required : void 0;
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    return { title: title, description: description, status: status, isEmailRequired: isEmailRequired, isDescriptionRequired: isDescriptionRequired, expiresAt: expiresAt } satisfies FileRequestUpdateRequest;
}
export function serializeFileRequestUpdateRequest(val: FileRequestUpdateRequest): Json {
    return { ["title"]: val.title, ["description"]: val.description, ["status"]: val.status == void 0 ? void 0 : serializeFileRequestUpdateRequestStatusField(val.status), ["is_email_required"]: val.isEmailRequired, ["is_description_required"]: val.isDescriptionRequired, ["expires_at"]: val.expiresAt };
}
export type FileRequestCopyRequestFolderFieldTypeField = "folder";
export function deserializeFileRequestCopyRequestFolderFieldTypeField(val: any): FileRequestCopyRequestFolderFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileRequestCopyRequestFolderFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileRequestCopyRequestFolderFieldTypeField(val: FileRequestCopyRequestFolderFieldTypeField): Json {
    return val;
}
export interface FileRequestCopyRequestFolderField {
    readonly type?: FileRequestCopyRequestFolderFieldTypeField;
    readonly id: string;
}
export function deserializeFileRequestCopyRequestFolderField(val: any): FileRequestCopyRequestFolderField {
    const type: undefined | FileRequestCopyRequestFolderFieldTypeField = val.type == void 0 ? void 0 : deserializeFileRequestCopyRequestFolderFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies FileRequestCopyRequestFolderField;
}
export function serializeFileRequestCopyRequestFolderField(val: FileRequestCopyRequestFolderField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeFileRequestCopyRequestFolderFieldTypeField(val.type), ["id"]: val.id };
}
export type FileRequestCopyRequest = FileRequestUpdateRequest & {
    /**
     * The folder to associate the new file request to. */
    readonly folder: FileRequestCopyRequestFolderField;
};
export function deserializeFileRequestCopyRequest(val: any): FileRequestCopyRequest {
    const folder: FileRequestCopyRequestFolderField = deserializeFileRequestCopyRequestFolderField(val.folder);
    const title: undefined | string = isJson(val.title, "string") ? val.title : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const status: undefined | FileRequestUpdateRequestStatusField = val.status == void 0 ? void 0 : deserializeFileRequestUpdateRequestStatusField(val.status);
    const isEmailRequired: undefined | boolean = isJson(val.is_email_required, "boolean") ? val.is_email_required : void 0;
    const isDescriptionRequired: undefined | boolean = isJson(val.is_description_required, "boolean") ? val.is_description_required : void 0;
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    return { folder: folder, title: title, description: description, status: status, isEmailRequired: isEmailRequired, isDescriptionRequired: isDescriptionRequired, expiresAt: expiresAt } satisfies FileRequestCopyRequest;
}
export function serializeFileRequestCopyRequest(val: FileRequestCopyRequest): Json {
    const base: any = serializeFileRequestUpdateRequest(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileRequestCopyRequest\"";
    }
    return { ...base, ...{ ["folder"]: serializeFileRequestCopyRequestFolderField(val.folder) } };
}
export interface IntegrationMappingSlackCreateRequestPartnerItemField {
}
export function deserializeIntegrationMappingSlackCreateRequestPartnerItemField(val: any): IntegrationMappingSlackCreateRequestPartnerItemField {
    return {} satisfies IntegrationMappingSlackCreateRequestPartnerItemField;
}
export function serializeIntegrationMappingSlackCreateRequestPartnerItemField(val: IntegrationMappingSlackCreateRequestPartnerItemField): Json {
    return {};
}
export interface IntegrationMappingSlackCreateRequestBoxItemField {
}
export function deserializeIntegrationMappingSlackCreateRequestBoxItemField(val: any): IntegrationMappingSlackCreateRequestBoxItemField {
    return {} satisfies IntegrationMappingSlackCreateRequestBoxItemField;
}
export function serializeIntegrationMappingSlackCreateRequestBoxItemField(val: IntegrationMappingSlackCreateRequestBoxItemField): Json {
    return {};
}
export interface IntegrationMappingSlackCreateRequestOptionsField {
}
export function deserializeIntegrationMappingSlackCreateRequestOptionsField(val: any): IntegrationMappingSlackCreateRequestOptionsField {
    return {} satisfies IntegrationMappingSlackCreateRequestOptionsField;
}
export function serializeIntegrationMappingSlackCreateRequestOptionsField(val: IntegrationMappingSlackCreateRequestOptionsField): Json {
    return {};
}
export interface IntegrationMappingSlackCreateRequest {
    readonly partnerItem: IntegrationMappingSlackCreateRequestPartnerItemField;
    readonly boxItem: IntegrationMappingSlackCreateRequestBoxItemField;
    readonly options?: IntegrationMappingSlackCreateRequestOptionsField;
}
export function deserializeIntegrationMappingSlackCreateRequest(val: any): IntegrationMappingSlackCreateRequest {
    const partnerItem: IntegrationMappingSlackCreateRequestPartnerItemField = deserializeIntegrationMappingSlackCreateRequestPartnerItemField(val.partner_item);
    const boxItem: IntegrationMappingSlackCreateRequestBoxItemField = deserializeIntegrationMappingSlackCreateRequestBoxItemField(val.box_item);
    const options: undefined | IntegrationMappingSlackCreateRequestOptionsField = val.options == void 0 ? void 0 : deserializeIntegrationMappingSlackCreateRequestOptionsField(val.options);
    return { partnerItem: partnerItem, boxItem: boxItem, options: options } satisfies IntegrationMappingSlackCreateRequest;
}
export function serializeIntegrationMappingSlackCreateRequest(val: IntegrationMappingSlackCreateRequest): Json {
    return { ["partner_item"]: serializeIntegrationMappingSlackCreateRequestPartnerItemField(val.partnerItem), ["box_item"]: serializeIntegrationMappingSlackCreateRequestBoxItemField(val.boxItem), ["options"]: val.options == void 0 ? void 0 : serializeIntegrationMappingSlackCreateRequestOptionsField(val.options) };
}
export type ClientErrorTypeField = "error";
export function deserializeClientErrorTypeField(val: any): ClientErrorTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClientErrorTypeField\"";
    }
    if (val == "error") {
        return "error";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClientErrorTypeField(val: ClientErrorTypeField): Json {
    return val;
}
export type ClientErrorCodeField = "created" | "accepted" | "no_content" | "redirect" | "not_modified" | "bad_request" | "unauthorized" | "forbidden" | "not_found" | "method_not_allowed" | "conflict" | "precondition_failed" | "too_many_requests" | "internal_server_error" | "unavailable" | "item_name_invalid" | "insufficient_scope";
export function deserializeClientErrorCodeField(val: any): ClientErrorCodeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClientErrorCodeField\"";
    }
    if (val == "created") {
        return "created";
    }
    if (val == "accepted") {
        return "accepted";
    }
    if (val == "no_content") {
        return "no_content";
    }
    if (val == "redirect") {
        return "redirect";
    }
    if (val == "not_modified") {
        return "not_modified";
    }
    if (val == "bad_request") {
        return "bad_request";
    }
    if (val == "unauthorized") {
        return "unauthorized";
    }
    if (val == "forbidden") {
        return "forbidden";
    }
    if (val == "not_found") {
        return "not_found";
    }
    if (val == "method_not_allowed") {
        return "method_not_allowed";
    }
    if (val == "conflict") {
        return "conflict";
    }
    if (val == "precondition_failed") {
        return "precondition_failed";
    }
    if (val == "too_many_requests") {
        return "too_many_requests";
    }
    if (val == "internal_server_error") {
        return "internal_server_error";
    }
    if (val == "unavailable") {
        return "unavailable";
    }
    if (val == "item_name_invalid") {
        return "item_name_invalid";
    }
    if (val == "insufficient_scope") {
        return "insufficient_scope";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClientErrorCodeField(val: ClientErrorCodeField): Json {
    return val;
}
export interface ClientErrorContextInfoField {
    readonly message?: string;
}
export function deserializeClientErrorContextInfoField(val: any): ClientErrorContextInfoField {
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    return { message: message } satisfies ClientErrorContextInfoField;
}
export function serializeClientErrorContextInfoField(val: ClientErrorContextInfoField): Json {
    return { ["message"]: val.message };
}
export interface ClientError {
    readonly type?: ClientErrorTypeField;
    readonly status?: number;
    readonly code?: ClientErrorCodeField;
    readonly message?: string;
    readonly contextInfo?: ClientErrorContextInfoField;
    readonly helpUrl?: string;
    readonly requestId?: string;
}
export function deserializeClientError(val: any): ClientError {
    const type: undefined | ClientErrorTypeField = val.type == void 0 ? void 0 : deserializeClientErrorTypeField(val.type);
    const status: undefined | number = isJson(val.status, "number") ? val.status : void 0;
    const code: undefined | ClientErrorCodeField = val.code == void 0 ? void 0 : deserializeClientErrorCodeField(val.code);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const contextInfo: undefined | ClientErrorContextInfoField = val.context_info == void 0 ? void 0 : deserializeClientErrorContextInfoField(val.context_info);
    const helpUrl: undefined | string = isJson(val.help_url, "string") ? val.help_url : void 0;
    const requestId: undefined | string = isJson(val.request_id, "string") ? val.request_id : void 0;
    return { type: type, status: status, code: code, message: message, contextInfo: contextInfo, helpUrl: helpUrl, requestId: requestId } satisfies ClientError;
}
export function serializeClientError(val: ClientError): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeClientErrorTypeField(val.type), ["status"]: val.status, ["code"]: val.code == void 0 ? void 0 : serializeClientErrorCodeField(val.code), ["message"]: val.message, ["context_info"]: val.contextInfo == void 0 ? void 0 : serializeClientErrorContextInfoField(val.contextInfo), ["help_url"]: val.helpUrl, ["request_id"]: val.requestId };
}
export interface OAuth2Error {
    readonly error?: string;
    readonly errorDescription?: string;
}
export function deserializeOAuth2Error(val: any): OAuth2Error {
    const error: undefined | string = isJson(val.error, "string") ? val.error : void 0;
    const errorDescription: undefined | string = isJson(val.error_description, "string") ? val.error_description : void 0;
    return { error: error, errorDescription: errorDescription } satisfies OAuth2Error;
}
export function serializeOAuth2Error(val: OAuth2Error): Json {
    return { ["error"]: val.error, ["error_description"]: val.errorDescription };
}
export type SkillInvocationTypeField = "skill_invocation";
export function deserializeSkillInvocationTypeField(val: any): SkillInvocationTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationTypeField\"";
    }
    if (val == "skill_invocation") {
        return "skill_invocation";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSkillInvocationTypeField(val: SkillInvocationTypeField): Json {
    return val;
}
export type SkillInvocationSkillFieldTypeField = "skill";
export function deserializeSkillInvocationSkillFieldTypeField(val: any): SkillInvocationSkillFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationSkillFieldTypeField\"";
    }
    if (val == "skill") {
        return "skill";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSkillInvocationSkillFieldTypeField(val: SkillInvocationSkillFieldTypeField): Json {
    return val;
}
export interface SkillInvocationSkillField {
    readonly id?: string;
    readonly type?: SkillInvocationSkillFieldTypeField;
    readonly name?: string;
    readonly apiKey?: string;
}
export function deserializeSkillInvocationSkillField(val: any): SkillInvocationSkillField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | SkillInvocationSkillFieldTypeField = val.type == void 0 ? void 0 : deserializeSkillInvocationSkillFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const apiKey: undefined | string = isJson(val.api_key, "string") ? val.api_key : void 0;
    return { id: id, type: type, name: name, apiKey: apiKey } satisfies SkillInvocationSkillField;
}
export function serializeSkillInvocationSkillField(val: SkillInvocationSkillField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeSkillInvocationSkillFieldTypeField(val.type), ["name"]: val.name, ["api_key"]: val.apiKey };
}
export type SkillInvocationTokenFieldReadFieldTokenTypeField = "bearer";
export function deserializeSkillInvocationTokenFieldReadFieldTokenTypeField(val: any): SkillInvocationTokenFieldReadFieldTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationTokenFieldReadFieldTokenTypeField\"";
    }
    if (val == "bearer") {
        return "bearer";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSkillInvocationTokenFieldReadFieldTokenTypeField(val: SkillInvocationTokenFieldReadFieldTokenTypeField): Json {
    return val;
}
export interface SkillInvocationTokenFieldReadField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: SkillInvocationTokenFieldReadFieldTokenTypeField;
    readonly restrictedTo?: string;
}
export function deserializeSkillInvocationTokenFieldReadField(val: any): SkillInvocationTokenFieldReadField {
    const accessToken: undefined | string = isJson(val.access_token, "string") ? val.access_token : void 0;
    const expiresIn: undefined | number = isJson(val.expires_in, "number") ? val.expires_in : void 0;
    const tokenType: undefined | SkillInvocationTokenFieldReadFieldTokenTypeField = val.token_type == void 0 ? void 0 : deserializeSkillInvocationTokenFieldReadFieldTokenTypeField(val.token_type);
    const restrictedTo: undefined | string = isJson(val.restricted_to, "string") ? val.restricted_to : void 0;
    return { accessToken: accessToken, expiresIn: expiresIn, tokenType: tokenType, restrictedTo: restrictedTo } satisfies SkillInvocationTokenFieldReadField;
}
export function serializeSkillInvocationTokenFieldReadField(val: SkillInvocationTokenFieldReadField): Json {
    return { ["access_token"]: val.accessToken, ["expires_in"]: val.expiresIn, ["token_type"]: val.tokenType == void 0 ? void 0 : serializeSkillInvocationTokenFieldReadFieldTokenTypeField(val.tokenType), ["restricted_to"]: val.restrictedTo };
}
export type SkillInvocationTokenFieldWriteFieldTokenTypeField = "bearer";
export function deserializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val: any): SkillInvocationTokenFieldWriteFieldTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationTokenFieldWriteFieldTokenTypeField\"";
    }
    if (val == "bearer") {
        return "bearer";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val: SkillInvocationTokenFieldWriteFieldTokenTypeField): Json {
    return val;
}
export interface SkillInvocationTokenFieldWriteField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: SkillInvocationTokenFieldWriteFieldTokenTypeField;
    readonly restrictedTo?: string;
}
export function deserializeSkillInvocationTokenFieldWriteField(val: any): SkillInvocationTokenFieldWriteField {
    const accessToken: undefined | string = isJson(val.access_token, "string") ? val.access_token : void 0;
    const expiresIn: undefined | number = isJson(val.expires_in, "number") ? val.expires_in : void 0;
    const tokenType: undefined | SkillInvocationTokenFieldWriteFieldTokenTypeField = val.token_type == void 0 ? void 0 : deserializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val.token_type);
    const restrictedTo: undefined | string = isJson(val.restricted_to, "string") ? val.restricted_to : void 0;
    return { accessToken: accessToken, expiresIn: expiresIn, tokenType: tokenType, restrictedTo: restrictedTo } satisfies SkillInvocationTokenFieldWriteField;
}
export function serializeSkillInvocationTokenFieldWriteField(val: SkillInvocationTokenFieldWriteField): Json {
    return { ["access_token"]: val.accessToken, ["expires_in"]: val.expiresIn, ["token_type"]: val.tokenType == void 0 ? void 0 : serializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val.tokenType), ["restricted_to"]: val.restrictedTo };
}
export interface SkillInvocationTokenField {
    readonly read?: SkillInvocationTokenFieldReadField;
    readonly write?: SkillInvocationTokenFieldWriteField;
}
export function deserializeSkillInvocationTokenField(val: any): SkillInvocationTokenField {
    const read: undefined | SkillInvocationTokenFieldReadField = val.read == void 0 ? void 0 : deserializeSkillInvocationTokenFieldReadField(val.read);
    const write: undefined | SkillInvocationTokenFieldWriteField = val.write == void 0 ? void 0 : deserializeSkillInvocationTokenFieldWriteField(val.write);
    return { read: read, write: write } satisfies SkillInvocationTokenField;
}
export function serializeSkillInvocationTokenField(val: SkillInvocationTokenField): Json {
    return { ["read"]: val.read == void 0 ? void 0 : serializeSkillInvocationTokenFieldReadField(val.read), ["write"]: val.write == void 0 ? void 0 : serializeSkillInvocationTokenFieldWriteField(val.write) };
}
export type SkillInvocationStatusFieldStateField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export function deserializeSkillInvocationStatusFieldStateField(val: any): SkillInvocationStatusFieldStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationStatusFieldStateField\"";
    }
    if (val == "invoked") {
        return "invoked";
    }
    if (val == "processing") {
        return "processing";
    }
    if (val == "success") {
        return "success";
    }
    if (val == "transient_failure") {
        return "transient_failure";
    }
    if (val == "permanent_failure") {
        return "permanent_failure";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSkillInvocationStatusFieldStateField(val: SkillInvocationStatusFieldStateField): Json {
    return val;
}
export interface SkillInvocationStatusField {
    readonly state?: SkillInvocationStatusFieldStateField;
    readonly message?: string;
    readonly errorCode?: string;
    readonly additionalInfo?: string;
}
export function deserializeSkillInvocationStatusField(val: any): SkillInvocationStatusField {
    const state: undefined | SkillInvocationStatusFieldStateField = val.state == void 0 ? void 0 : deserializeSkillInvocationStatusFieldStateField(val.state);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const errorCode: undefined | string = isJson(val.error_code, "string") ? val.error_code : void 0;
    const additionalInfo: undefined | string = isJson(val.additional_info, "string") ? val.additional_info : void 0;
    return { state: state, message: message, errorCode: errorCode, additionalInfo: additionalInfo } satisfies SkillInvocationStatusField;
}
export function serializeSkillInvocationStatusField(val: SkillInvocationStatusField): Json {
    return { ["state"]: val.state == void 0 ? void 0 : serializeSkillInvocationStatusFieldStateField(val.state), ["message"]: val.message, ["error_code"]: val.errorCode, ["additional_info"]: val.additionalInfo };
}
export type SkillInvocationEnterpriseFieldTypeField = "enterprise";
export function deserializeSkillInvocationEnterpriseFieldTypeField(val: any): SkillInvocationEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSkillInvocationEnterpriseFieldTypeField(val: SkillInvocationEnterpriseFieldTypeField): Json {
    return val;
}
export interface SkillInvocationEnterpriseField {
    readonly id?: string;
    readonly type?: SkillInvocationEnterpriseFieldTypeField;
    readonly name?: string;
}
export function deserializeSkillInvocationEnterpriseField(val: any): SkillInvocationEnterpriseField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | SkillInvocationEnterpriseFieldTypeField = val.type == void 0 ? void 0 : deserializeSkillInvocationEnterpriseFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies SkillInvocationEnterpriseField;
}
export function serializeSkillInvocationEnterpriseField(val: SkillInvocationEnterpriseField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeSkillInvocationEnterpriseFieldTypeField(val.type), ["name"]: val.name };
}
export type WebhookInvocationTypeField = "webhook_event";
export function deserializeWebhookInvocationTypeField(val: any): WebhookInvocationTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebhookInvocationTypeField\"";
    }
    if (val == "webhook_event") {
        return "webhook_event";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWebhookInvocationTypeField(val: WebhookInvocationTypeField): Json {
    return val;
}
export type WebhookInvocationTriggerField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED" | "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
export function deserializeWebhookInvocationTriggerField(val: any): WebhookInvocationTriggerField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebhookInvocationTriggerField\"";
    }
    if (val == "FILE.UPLOADED") {
        return "FILE.UPLOADED";
    }
    if (val == "FILE.PREVIEWED") {
        return "FILE.PREVIEWED";
    }
    if (val == "FILE.DOWNLOADED") {
        return "FILE.DOWNLOADED";
    }
    if (val == "FILE.TRASHED") {
        return "FILE.TRASHED";
    }
    if (val == "FILE.DELETED") {
        return "FILE.DELETED";
    }
    if (val == "FILE.RESTORED") {
        return "FILE.RESTORED";
    }
    if (val == "FILE.COPIED") {
        return "FILE.COPIED";
    }
    if (val == "FILE.MOVED") {
        return "FILE.MOVED";
    }
    if (val == "FILE.LOCKED") {
        return "FILE.LOCKED";
    }
    if (val == "FILE.UNLOCKED") {
        return "FILE.UNLOCKED";
    }
    if (val == "FILE.RENAMED") {
        return "FILE.RENAMED";
    }
    if (val == "COMMENT.CREATED") {
        return "COMMENT.CREATED";
    }
    if (val == "COMMENT.UPDATED") {
        return "COMMENT.UPDATED";
    }
    if (val == "COMMENT.DELETED") {
        return "COMMENT.DELETED";
    }
    if (val == "TASK_ASSIGNMENT.CREATED") {
        return "TASK_ASSIGNMENT.CREATED";
    }
    if (val == "TASK_ASSIGNMENT.UPDATED") {
        return "TASK_ASSIGNMENT.UPDATED";
    }
    if (val == "METADATA_INSTANCE.CREATED") {
        return "METADATA_INSTANCE.CREATED";
    }
    if (val == "METADATA_INSTANCE.UPDATED") {
        return "METADATA_INSTANCE.UPDATED";
    }
    if (val == "METADATA_INSTANCE.DELETED") {
        return "METADATA_INSTANCE.DELETED";
    }
    if (val == "FOLDER.CREATED") {
        return "FOLDER.CREATED";
    }
    if (val == "FOLDER.RENAMED") {
        return "FOLDER.RENAMED";
    }
    if (val == "FOLDER.DOWNLOADED") {
        return "FOLDER.DOWNLOADED";
    }
    if (val == "FOLDER.RESTORED") {
        return "FOLDER.RESTORED";
    }
    if (val == "FOLDER.DELETED") {
        return "FOLDER.DELETED";
    }
    if (val == "FOLDER.COPIED") {
        return "FOLDER.COPIED";
    }
    if (val == "FOLDER.MOVED") {
        return "FOLDER.MOVED";
    }
    if (val == "FOLDER.TRASHED") {
        return "FOLDER.TRASHED";
    }
    if (val == "WEBHOOK.DELETED") {
        return "WEBHOOK.DELETED";
    }
    if (val == "COLLABORATION.CREATED") {
        return "COLLABORATION.CREATED";
    }
    if (val == "COLLABORATION.ACCEPTED") {
        return "COLLABORATION.ACCEPTED";
    }
    if (val == "COLLABORATION.REJECTED") {
        return "COLLABORATION.REJECTED";
    }
    if (val == "COLLABORATION.REMOVED") {
        return "COLLABORATION.REMOVED";
    }
    if (val == "COLLABORATION.UPDATED") {
        return "COLLABORATION.UPDATED";
    }
    if (val == "SHARED_LINK.DELETED") {
        return "SHARED_LINK.DELETED";
    }
    if (val == "SHARED_LINK.CREATED") {
        return "SHARED_LINK.CREATED";
    }
    if (val == "SHARED_LINK.UPDATED") {
        return "SHARED_LINK.UPDATED";
    }
    if (val == "SIGN_REQUEST.COMPLETED") {
        return "SIGN_REQUEST.COMPLETED";
    }
    if (val == "SIGN_REQUEST.DECLINED") {
        return "SIGN_REQUEST.DECLINED";
    }
    if (val == "SIGN_REQUEST.EXPIRED") {
        return "SIGN_REQUEST.EXPIRED";
    }
    if (val == "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED") {
        return "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWebhookInvocationTriggerField(val: WebhookInvocationTriggerField): Json {
    return val;
}
export type AccessTokenTokenTypeField = "bearer";
export function deserializeAccessTokenTokenTypeField(val: any): AccessTokenTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"AccessTokenTokenTypeField\"";
    }
    if (val == "bearer") {
        return "bearer";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeAccessTokenTokenTypeField(val: AccessTokenTokenTypeField): Json {
    return val;
}
export type AccessTokenIssuedTokenTypeField = "urn:ietf:params:oauth:token-type:access_token";
export function deserializeAccessTokenIssuedTokenTypeField(val: any): AccessTokenIssuedTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"AccessTokenIssuedTokenTypeField\"";
    }
    if (val == "urn:ietf:params:oauth:token-type:access_token") {
        return "urn:ietf:params:oauth:token-type:access_token";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeAccessTokenIssuedTokenTypeField(val: AccessTokenIssuedTokenTypeField): Json {
    return val;
}
export type ClassificationTemplateField = "securityClassification-6VMVochwUWo";
export function deserializeClassificationTemplateField(val: any): ClassificationTemplateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateField\"";
    }
    if (val == "securityClassification-6VMVochwUWo") {
        return "securityClassification-6VMVochwUWo";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClassificationTemplateField(val: ClassificationTemplateField): Json {
    return val;
}
export interface Classification {
    readonly boxSecurityClassificationKey?: string;
    readonly parent?: string;
    readonly template?: ClassificationTemplateField;
    readonly scope?: string;
    readonly version?: number;
    readonly type?: string;
    readonly typeVersion?: number;
    readonly canEdit?: boolean;
}
export function deserializeClassification(val: any): Classification {
    const boxSecurityClassificationKey: undefined | string = isJson(val.Box__Security__Classification__Key, "string") ? val.Box__Security__Classification__Key : void 0;
    const parent: undefined | string = isJson(val.$parent, "string") ? val.$parent : void 0;
    const template: undefined | ClassificationTemplateField = val.$template == void 0 ? void 0 : deserializeClassificationTemplateField(val.$template);
    const scope: undefined | string = isJson(val.$scope, "string") ? val.$scope : void 0;
    const version: undefined | number = isJson(val.$version, "number") ? val.$version : void 0;
    const type: undefined | string = isJson(val.$type, "string") ? val.$type : void 0;
    const typeVersion: undefined | number = isJson(val.$typeVersion, "number") ? val.$typeVersion : void 0;
    const canEdit: undefined | boolean = isJson(val.$canEdit, "boolean") ? val.$canEdit : void 0;
    return { boxSecurityClassificationKey: boxSecurityClassificationKey, parent: parent, template: template, scope: scope, version: version, type: type, typeVersion: typeVersion, canEdit: canEdit } satisfies Classification;
}
export function serializeClassification(val: Classification): Json {
    return { ["Box__Security__Classification__Key"]: val.boxSecurityClassificationKey, ["$parent"]: val.parent, ["$template"]: val.template == void 0 ? void 0 : serializeClassificationTemplateField(val.template), ["$scope"]: val.scope, ["$version"]: val.version, ["$type"]: val.type, ["$typeVersion"]: val.typeVersion, ["$canEdit"]: val.canEdit };
}
export type ClassificationTemplateTypeField = "metadata_template";
export function deserializeClassificationTemplateTypeField(val: any): ClassificationTemplateTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateTypeField\"";
    }
    if (val == "metadata_template") {
        return "metadata_template";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClassificationTemplateTypeField(val: ClassificationTemplateTypeField): Json {
    return val;
}
export type ClassificationTemplateTemplateKeyField = "securityClassification-6VMVochwUWo";
export function deserializeClassificationTemplateTemplateKeyField(val: any): ClassificationTemplateTemplateKeyField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateTemplateKeyField\"";
    }
    if (val == "securityClassification-6VMVochwUWo") {
        return "securityClassification-6VMVochwUWo";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClassificationTemplateTemplateKeyField(val: ClassificationTemplateTemplateKeyField): Json {
    return val;
}
export type ClassificationTemplateDisplayNameField = "Classification";
export function deserializeClassificationTemplateDisplayNameField(val: any): ClassificationTemplateDisplayNameField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClassificationTemplateDisplayNameField(val: ClassificationTemplateDisplayNameField): Json {
    return val;
}
export type ClassificationTemplateFieldsFieldTypeField = "enum";
export function deserializeClassificationTemplateFieldsFieldTypeField(val: any): ClassificationTemplateFieldsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateFieldsFieldTypeField\"";
    }
    if (val == "enum") {
        return "enum";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClassificationTemplateFieldsFieldTypeField(val: ClassificationTemplateFieldsFieldTypeField): Json {
    return val;
}
export type ClassificationTemplateFieldsFieldKeyField = "Box__Security__Classification__Key";
export function deserializeClassificationTemplateFieldsFieldKeyField(val: any): ClassificationTemplateFieldsFieldKeyField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateFieldsFieldKeyField\"";
    }
    if (val == "Box__Security__Classification__Key") {
        return "Box__Security__Classification__Key";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClassificationTemplateFieldsFieldKeyField(val: ClassificationTemplateFieldsFieldKeyField): Json {
    return val;
}
export type ClassificationTemplateFieldsFieldDisplayNameField = "Classification";
export function deserializeClassificationTemplateFieldsFieldDisplayNameField(val: any): ClassificationTemplateFieldsFieldDisplayNameField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateFieldsFieldDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeClassificationTemplateFieldsFieldDisplayNameField(val: ClassificationTemplateFieldsFieldDisplayNameField): Json {
    return val;
}
export interface ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
    readonly classificationDefinition?: string;
    readonly colorId?: number;
}
export function deserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: any): ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
    const classificationDefinition: undefined | string = isJson(val.classificationDefinition, "string") ? val.classificationDefinition : void 0;
    const colorId: undefined | number = isJson(val.colorID, "number") ? val.colorID : void 0;
    return { classificationDefinition: classificationDefinition, colorId: colorId } satisfies ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export function serializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField): Json {
    return { ["classificationDefinition"]: val.classificationDefinition, ["colorID"]: val.colorId };
}
export interface ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField {
    readonly classification?: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export function deserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val: any): ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField {
    const classification: undefined | ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField = val.classification == void 0 ? void 0 : deserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification);
    return { classification: classification } satisfies ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField;
}
export function serializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField): Json {
    return { ["classification"]: val.classification == void 0 ? void 0 : serializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification) };
}
export interface ClassificationTemplateFieldsFieldOptionsField {
    readonly id?: string;
    readonly key?: string;
    readonly staticConfig?: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField;
}
export function deserializeClassificationTemplateFieldsFieldOptionsField(val: any): ClassificationTemplateFieldsFieldOptionsField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const key: undefined | string = isJson(val.key, "string") ? val.key : void 0;
    const staticConfig: undefined | ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField = val.staticConfig == void 0 ? void 0 : deserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val.staticConfig);
    return { id: id, key: key, staticConfig: staticConfig } satisfies ClassificationTemplateFieldsFieldOptionsField;
}
export function serializeClassificationTemplateFieldsFieldOptionsField(val: ClassificationTemplateFieldsFieldOptionsField): Json {
    return { ["id"]: val.id, ["key"]: val.key, ["staticConfig"]: val.staticConfig == void 0 ? void 0 : serializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val.staticConfig) };
}
export interface ClassificationTemplateFieldsField {
    readonly id?: string;
    readonly type?: ClassificationTemplateFieldsFieldTypeField;
    readonly key?: ClassificationTemplateFieldsFieldKeyField;
    readonly displayName?: ClassificationTemplateFieldsFieldDisplayNameField;
    readonly hidden?: boolean;
    readonly options?: readonly ClassificationTemplateFieldsFieldOptionsField[];
}
export function deserializeClassificationTemplateFieldsField(val: any): ClassificationTemplateFieldsField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ClassificationTemplateFieldsFieldTypeField = val.type == void 0 ? void 0 : deserializeClassificationTemplateFieldsFieldTypeField(val.type);
    const key: undefined | ClassificationTemplateFieldsFieldKeyField = val.key == void 0 ? void 0 : deserializeClassificationTemplateFieldsFieldKeyField(val.key);
    const displayName: undefined | ClassificationTemplateFieldsFieldDisplayNameField = val.displayName == void 0 ? void 0 : deserializeClassificationTemplateFieldsFieldDisplayNameField(val.displayName);
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const options: undefined | readonly ClassificationTemplateFieldsFieldOptionsField[] = isJson(val.options, "array") ? val.options.map(function (itm: Json): any {
        return deserializeClassificationTemplateFieldsFieldOptionsField(itm);
    }) as readonly any[] : void 0;
    return { id: id, type: type, key: key, displayName: displayName, hidden: hidden, options: options } satisfies ClassificationTemplateFieldsField;
}
export function serializeClassificationTemplateFieldsField(val: ClassificationTemplateFieldsField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeClassificationTemplateFieldsFieldTypeField(val.type), ["key"]: val.key == void 0 ? void 0 : serializeClassificationTemplateFieldsFieldKeyField(val.key), ["displayName"]: val.displayName == void 0 ? void 0 : serializeClassificationTemplateFieldsFieldDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["options"]: val.options == void 0 ? void 0 : val.options.map(function (item: ClassificationTemplateFieldsFieldOptionsField): any {
            return serializeClassificationTemplateFieldsFieldOptionsField(item);
        }) as readonly any[] };
}
export interface ClassificationTemplate {
    readonly id?: string;
    readonly type: ClassificationTemplateTypeField;
    readonly scope?: string;
    readonly templateKey?: ClassificationTemplateTemplateKeyField;
    readonly displayName?: ClassificationTemplateDisplayNameField;
    readonly hidden?: boolean;
    readonly copyInstanceOnItemCopy?: boolean;
    readonly fields?: readonly ClassificationTemplateFieldsField[];
}
export function deserializeClassificationTemplate(val: any): ClassificationTemplate {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: ClassificationTemplateTypeField = deserializeClassificationTemplateTypeField(val.type);
    const scope: undefined | string = isJson(val.scope, "string") ? val.scope : void 0;
    const templateKey: undefined | ClassificationTemplateTemplateKeyField = val.templateKey == void 0 ? void 0 : deserializeClassificationTemplateTemplateKeyField(val.templateKey);
    const displayName: undefined | ClassificationTemplateDisplayNameField = val.displayName == void 0 ? void 0 : deserializeClassificationTemplateDisplayNameField(val.displayName);
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const copyInstanceOnItemCopy: undefined | boolean = isJson(val.copyInstanceOnItemCopy, "boolean") ? val.copyInstanceOnItemCopy : void 0;
    const fields: undefined | readonly ClassificationTemplateFieldsField[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): any {
        return deserializeClassificationTemplateFieldsField(itm);
    }) as readonly any[] : void 0;
    return { id: id, type: type, scope: scope, templateKey: templateKey, displayName: displayName, hidden: hidden, copyInstanceOnItemCopy: copyInstanceOnItemCopy, fields: fields } satisfies ClassificationTemplate;
}
export function serializeClassificationTemplate(val: ClassificationTemplate): Json {
    return { ["id"]: val.id, ["type"]: serializeClassificationTemplateTypeField(val.type), ["scope"]: val.scope, ["templateKey"]: val.templateKey == void 0 ? void 0 : serializeClassificationTemplateTemplateKeyField(val.templateKey), ["displayName"]: val.displayName == void 0 ? void 0 : serializeClassificationTemplateDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["copyInstanceOnItemCopy"]: val.copyInstanceOnItemCopy, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: ClassificationTemplateFieldsField): any {
            return serializeClassificationTemplateFieldsField(item);
        }) as readonly any[] };
}
export type CollaborationTypeField = "collaboration";
export function deserializeCollaborationTypeField(val: any): CollaborationTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationTypeField\"";
    }
    if (val == "collaboration") {
        return "collaboration";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollaborationTypeField(val: CollaborationTypeField): Json {
    return val;
}
export type CollaborationRoleField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner" | "owner";
export function deserializeCollaborationRoleField(val: any): CollaborationRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationRoleField\"";
    }
    if (val == "editor") {
        return "editor";
    }
    if (val == "viewer") {
        return "viewer";
    }
    if (val == "previewer") {
        return "previewer";
    }
    if (val == "uploader") {
        return "uploader";
    }
    if (val == "previewer uploader") {
        return "previewer uploader";
    }
    if (val == "viewer uploader") {
        return "viewer uploader";
    }
    if (val == "co-owner") {
        return "co-owner";
    }
    if (val == "owner") {
        return "owner";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollaborationRoleField(val: CollaborationRoleField): Json {
    return val;
}
export type CollaborationStatusField = "accepted" | "pending" | "rejected";
export function deserializeCollaborationStatusField(val: any): CollaborationStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationStatusField\"";
    }
    if (val == "accepted") {
        return "accepted";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "rejected") {
        return "rejected";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollaborationStatusField(val: CollaborationStatusField): Json {
    return val;
}
export interface CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField {
    readonly enterpriseHasStrongPasswordRequiredForExternalUsers?: boolean;
    readonly userHasStrongPassword?: boolean;
}
export function deserializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val: any): CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField {
    const enterpriseHasStrongPasswordRequiredForExternalUsers: undefined | boolean = isJson(val.enterprise_has_strong_password_required_for_external_users, "boolean") ? val.enterprise_has_strong_password_required_for_external_users : void 0;
    const userHasStrongPassword: undefined | boolean = isJson(val.user_has_strong_password, "boolean") ? val.user_has_strong_password : void 0;
    return { enterpriseHasStrongPasswordRequiredForExternalUsers: enterpriseHasStrongPasswordRequiredForExternalUsers, userHasStrongPassword: userHasStrongPassword } satisfies CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField;
}
export function serializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField): Json {
    return { ["enterprise_has_strong_password_required_for_external_users"]: val.enterpriseHasStrongPasswordRequiredForExternalUsers, ["user_has_strong_password"]: val.userHasStrongPassword };
}
export interface CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField {
    readonly enterpriseHasTwoFactorAuthEnabled?: boolean;
    readonly userHasTwoFactorAuthenticationEnabled?: boolean;
}
export function deserializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val: any): CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField {
    const enterpriseHasTwoFactorAuthEnabled: undefined | boolean = isJson(val.enterprise_has_two_factor_auth_enabled, "boolean") ? val.enterprise_has_two_factor_auth_enabled : void 0;
    const userHasTwoFactorAuthenticationEnabled: undefined | boolean = isJson(val.user_has_two_factor_authentication_enabled, "boolean") ? val.user_has_two_factor_authentication_enabled : void 0;
    return { enterpriseHasTwoFactorAuthEnabled: enterpriseHasTwoFactorAuthEnabled, userHasTwoFactorAuthenticationEnabled: userHasTwoFactorAuthenticationEnabled } satisfies CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField;
}
export function serializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField): Json {
    return { ["enterprise_has_two_factor_auth_enabled"]: val.enterpriseHasTwoFactorAuthEnabled, ["user_has_two_factor_authentication_enabled"]: val.userHasTwoFactorAuthenticationEnabled };
}
export type CollaborationsOrderFieldDirectionField = "ASC" | "DESC";
export function deserializeCollaborationsOrderFieldDirectionField(val: any): CollaborationsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollaborationsOrderFieldDirectionField(val: CollaborationsOrderFieldDirectionField): Json {
    return val;
}
export interface CollaborationsOrderField {
    readonly by?: string;
    readonly direction?: CollaborationsOrderFieldDirectionField;
}
export function deserializeCollaborationsOrderField(val: any): CollaborationsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | CollaborationsOrderFieldDirectionField = val.direction == void 0 ? void 0 : deserializeCollaborationsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies CollaborationsOrderField;
}
export function serializeCollaborationsOrderField(val: CollaborationsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : serializeCollaborationsOrderFieldDirectionField(val.direction) };
}
export type CollaborationAllowlistEntryTypeField = "collaboration_whitelist_entry";
export function deserializeCollaborationAllowlistEntryTypeField(val: any): CollaborationAllowlistEntryTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistEntryTypeField\"";
    }
    if (val == "collaboration_whitelist_entry") {
        return "collaboration_whitelist_entry";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollaborationAllowlistEntryTypeField(val: CollaborationAllowlistEntryTypeField): Json {
    return val;
}
export type CollaborationAllowlistEntryDirectionField = "inbound" | "outbound" | "both";
export function deserializeCollaborationAllowlistEntryDirectionField(val: any): CollaborationAllowlistEntryDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistEntryDirectionField\"";
    }
    if (val == "inbound") {
        return "inbound";
    }
    if (val == "outbound") {
        return "outbound";
    }
    if (val == "both") {
        return "both";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollaborationAllowlistEntryDirectionField(val: CollaborationAllowlistEntryDirectionField): Json {
    return val;
}
export type CollaborationAllowlistEntryEnterpriseFieldTypeField = "enterprise";
export function deserializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val: any): CollaborationAllowlistEntryEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistEntryEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val: CollaborationAllowlistEntryEnterpriseFieldTypeField): Json {
    return val;
}
export interface CollaborationAllowlistEntryEnterpriseField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistEntryEnterpriseFieldTypeField;
    readonly name?: string;
}
export function deserializeCollaborationAllowlistEntryEnterpriseField(val: any): CollaborationAllowlistEntryEnterpriseField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationAllowlistEntryEnterpriseFieldTypeField = val.type == void 0 ? void 0 : deserializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies CollaborationAllowlistEntryEnterpriseField;
}
export function serializeCollaborationAllowlistEntryEnterpriseField(val: CollaborationAllowlistEntryEnterpriseField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val.type), ["name"]: val.name };
}
export interface CollaborationAllowlistEntry {
    readonly id?: string;
    readonly type?: CollaborationAllowlistEntryTypeField;
    readonly domain?: string;
    readonly direction?: CollaborationAllowlistEntryDirectionField;
    readonly enterprise?: CollaborationAllowlistEntryEnterpriseField;
    readonly createdAt?: string;
}
export function deserializeCollaborationAllowlistEntry(val: any): CollaborationAllowlistEntry {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationAllowlistEntryTypeField = val.type == void 0 ? void 0 : deserializeCollaborationAllowlistEntryTypeField(val.type);
    const domain: undefined | string = isJson(val.domain, "string") ? val.domain : void 0;
    const direction: undefined | CollaborationAllowlistEntryDirectionField = val.direction == void 0 ? void 0 : deserializeCollaborationAllowlistEntryDirectionField(val.direction);
    const enterprise: undefined | CollaborationAllowlistEntryEnterpriseField = val.enterprise == void 0 ? void 0 : deserializeCollaborationAllowlistEntryEnterpriseField(val.enterprise);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    return { id: id, type: type, domain: domain, direction: direction, enterprise: enterprise, createdAt: createdAt } satisfies CollaborationAllowlistEntry;
}
export function serializeCollaborationAllowlistEntry(val: CollaborationAllowlistEntry): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCollaborationAllowlistEntryTypeField(val.type), ["domain"]: val.domain, ["direction"]: val.direction == void 0 ? void 0 : serializeCollaborationAllowlistEntryDirectionField(val.direction), ["enterprise"]: val.enterprise == void 0 ? void 0 : serializeCollaborationAllowlistEntryEnterpriseField(val.enterprise), ["created_at"]: val.createdAt };
}
export interface CollaborationAllowlistEntries {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly CollaborationAllowlistEntry[];
}
export function deserializeCollaborationAllowlistEntries(val: any): CollaborationAllowlistEntries {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly CollaborationAllowlistEntry[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeCollaborationAllowlistEntry(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies CollaborationAllowlistEntries;
}
export function serializeCollaborationAllowlistEntries(val: CollaborationAllowlistEntries): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: CollaborationAllowlistEntry): any {
            return serializeCollaborationAllowlistEntry(item);
        }) as readonly any[] };
}
export type CollaborationAllowlistExemptTargetTypeField = "collaboration_whitelist";
export function deserializeCollaborationAllowlistExemptTargetTypeField(val: any): CollaborationAllowlistExemptTargetTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistExemptTargetTypeField\"";
    }
    if (val == "collaboration_whitelist") {
        return "collaboration_whitelist";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollaborationAllowlistExemptTargetTypeField(val: CollaborationAllowlistExemptTargetTypeField): Json {
    return val;
}
export type CollaborationAllowlistExemptTargetEnterpriseFieldTypeField = "enterprise";
export function deserializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val: any): CollaborationAllowlistExemptTargetEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistExemptTargetEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val: CollaborationAllowlistExemptTargetEnterpriseFieldTypeField): Json {
    return val;
}
export interface CollaborationAllowlistExemptTargetEnterpriseField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetEnterpriseFieldTypeField;
    readonly name?: string;
}
export function deserializeCollaborationAllowlistExemptTargetEnterpriseField(val: any): CollaborationAllowlistExemptTargetEnterpriseField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationAllowlistExemptTargetEnterpriseFieldTypeField = val.type == void 0 ? void 0 : deserializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies CollaborationAllowlistExemptTargetEnterpriseField;
}
export function serializeCollaborationAllowlistExemptTargetEnterpriseField(val: CollaborationAllowlistExemptTargetEnterpriseField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val.type), ["name"]: val.name };
}
export type CollaborationAllowlistExemptTargetUserFieldTypeField = "enterprise";
export function deserializeCollaborationAllowlistExemptTargetUserFieldTypeField(val: any): CollaborationAllowlistExemptTargetUserFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistExemptTargetUserFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollaborationAllowlistExemptTargetUserFieldTypeField(val: CollaborationAllowlistExemptTargetUserFieldTypeField): Json {
    return val;
}
export interface CollaborationAllowlistExemptTargetUserField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetUserFieldTypeField;
    readonly name?: string;
}
export function deserializeCollaborationAllowlistExemptTargetUserField(val: any): CollaborationAllowlistExemptTargetUserField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationAllowlistExemptTargetUserFieldTypeField = val.type == void 0 ? void 0 : deserializeCollaborationAllowlistExemptTargetUserFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies CollaborationAllowlistExemptTargetUserField;
}
export function serializeCollaborationAllowlistExemptTargetUserField(val: CollaborationAllowlistExemptTargetUserField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCollaborationAllowlistExemptTargetUserFieldTypeField(val.type), ["name"]: val.name };
}
export interface CollaborationAllowlistExemptTarget {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetTypeField;
    readonly enterprise?: CollaborationAllowlistExemptTargetEnterpriseField;
    readonly user?: CollaborationAllowlistExemptTargetUserField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export function deserializeCollaborationAllowlistExemptTarget(val: any): CollaborationAllowlistExemptTarget {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationAllowlistExemptTargetTypeField = val.type == void 0 ? void 0 : deserializeCollaborationAllowlistExemptTargetTypeField(val.type);
    const enterprise: undefined | CollaborationAllowlistExemptTargetEnterpriseField = val.enterprise == void 0 ? void 0 : deserializeCollaborationAllowlistExemptTargetEnterpriseField(val.enterprise);
    const user: undefined | CollaborationAllowlistExemptTargetUserField = val.user == void 0 ? void 0 : deserializeCollaborationAllowlistExemptTargetUserField(val.user);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    return { id: id, type: type, enterprise: enterprise, user: user, createdAt: createdAt, modifiedAt: modifiedAt } satisfies CollaborationAllowlistExemptTarget;
}
export function serializeCollaborationAllowlistExemptTarget(val: CollaborationAllowlistExemptTarget): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCollaborationAllowlistExemptTargetTypeField(val.type), ["enterprise"]: val.enterprise == void 0 ? void 0 : serializeCollaborationAllowlistExemptTargetEnterpriseField(val.enterprise), ["user"]: val.user == void 0 ? void 0 : serializeCollaborationAllowlistExemptTargetUserField(val.user), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt };
}
export interface CollaborationAllowlistExemptTargets {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly CollaborationAllowlistExemptTarget[];
}
export function deserializeCollaborationAllowlistExemptTargets(val: any): CollaborationAllowlistExemptTargets {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly CollaborationAllowlistExemptTarget[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeCollaborationAllowlistExemptTarget(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies CollaborationAllowlistExemptTargets;
}
export function serializeCollaborationAllowlistExemptTargets(val: CollaborationAllowlistExemptTargets): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: CollaborationAllowlistExemptTarget): any {
            return serializeCollaborationAllowlistExemptTarget(item);
        }) as readonly any[] };
}
export type CollectionTypeField = "collection";
export function deserializeCollectionTypeField(val: any): CollectionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollectionTypeField\"";
    }
    if (val == "collection") {
        return "collection";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollectionTypeField(val: CollectionTypeField): Json {
    return val;
}
export type CollectionNameField = "Favorites";
export function deserializeCollectionNameField(val: any): CollectionNameField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollectionNameField\"";
    }
    if (val == "Favorites") {
        return "Favorites";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollectionNameField(val: CollectionNameField): Json {
    return val;
}
export type CollectionCollectionTypeField = "favorites";
export function deserializeCollectionCollectionTypeField(val: any): CollectionCollectionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollectionCollectionTypeField\"";
    }
    if (val == "favorites") {
        return "favorites";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollectionCollectionTypeField(val: CollectionCollectionTypeField): Json {
    return val;
}
export interface Collection {
    readonly id?: string;
    readonly type?: CollectionTypeField;
    readonly name?: CollectionNameField;
    readonly collectionType?: CollectionCollectionTypeField;
}
export function deserializeCollection(val: any): Collection {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollectionTypeField = val.type == void 0 ? void 0 : deserializeCollectionTypeField(val.type);
    const name: undefined | CollectionNameField = val.name == void 0 ? void 0 : deserializeCollectionNameField(val.name);
    const collectionType: undefined | CollectionCollectionTypeField = val.collection_type == void 0 ? void 0 : deserializeCollectionCollectionTypeField(val.collection_type);
    return { id: id, type: type, name: name, collectionType: collectionType } satisfies Collection;
}
export function serializeCollection(val: Collection): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCollectionTypeField(val.type), ["name"]: val.name == void 0 ? void 0 : serializeCollectionNameField(val.name), ["collection_type"]: val.collectionType == void 0 ? void 0 : serializeCollectionCollectionTypeField(val.collectionType) };
}
export type CollectionsOrderFieldDirectionField = "ASC" | "DESC";
export function deserializeCollectionsOrderFieldDirectionField(val: any): CollectionsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollectionsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCollectionsOrderFieldDirectionField(val: CollectionsOrderFieldDirectionField): Json {
    return val;
}
export interface CollectionsOrderField {
    readonly by?: string;
    readonly direction?: CollectionsOrderFieldDirectionField;
}
export function deserializeCollectionsOrderField(val: any): CollectionsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | CollectionsOrderFieldDirectionField = val.direction == void 0 ? void 0 : deserializeCollectionsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies CollectionsOrderField;
}
export function serializeCollectionsOrderField(val: CollectionsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : serializeCollectionsOrderFieldDirectionField(val.direction) };
}
export interface Collections {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CollectionsOrderField[];
    readonly entries?: readonly Collection[];
}
export function deserializeCollections(val: any): Collections {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly CollectionsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return deserializeCollectionsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly Collection[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeCollection(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Collections;
}
export function serializeCollections(val: Collections): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: CollectionsOrderField): any {
            return serializeCollectionsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Collection): any {
            return serializeCollection(item);
        }) as readonly any[] };
}
export interface CommentItemField {
    readonly id?: string;
    readonly type?: string;
}
export function deserializeCommentItemField(val: any): CommentItemField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    return { id: id, type: type } satisfies CommentItemField;
}
export function serializeCommentItemField(val: CommentItemField): Json {
    return { ["id"]: val.id, ["type"]: val.type };
}
export type CommentsOrderFieldDirectionField = "ASC" | "DESC";
export function deserializeCommentsOrderFieldDirectionField(val: any): CommentsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CommentsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCommentsOrderFieldDirectionField(val: CommentsOrderFieldDirectionField): Json {
    return val;
}
export interface CommentsOrderField {
    readonly by?: string;
    readonly direction?: CommentsOrderFieldDirectionField;
}
export function deserializeCommentsOrderField(val: any): CommentsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | CommentsOrderFieldDirectionField = val.direction == void 0 ? void 0 : deserializeCommentsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies CommentsOrderField;
}
export function serializeCommentsOrderField(val: CommentsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : serializeCommentsOrderFieldDirectionField(val.direction) };
}
export type CommentBaseTypeField = "comment";
export function deserializeCommentBaseTypeField(val: any): CommentBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CommentBaseTypeField\"";
    }
    if (val == "comment") {
        return "comment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCommentBaseTypeField(val: CommentBaseTypeField): Json {
    return val;
}
export interface CommentBase {
    readonly id?: string;
    readonly type?: CommentBaseTypeField;
}
export function deserializeCommentBase(val: any): CommentBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CommentBaseTypeField = val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
    return { id: id, type: type } satisfies CommentBase;
}
export function serializeCommentBase(val: CommentBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCommentBaseTypeField(val.type) };
}
export type DevicePinnerTypeField = "device_pinner";
export function deserializeDevicePinnerTypeField(val: any): DevicePinnerTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"DevicePinnerTypeField\"";
    }
    if (val == "device_pinner") {
        return "device_pinner";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeDevicePinnerTypeField(val: DevicePinnerTypeField): Json {
    return val;
}
export type DevicePinnersOrderFieldByField = "id";
export function deserializeDevicePinnersOrderFieldByField(val: any): DevicePinnersOrderFieldByField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"DevicePinnersOrderFieldByField\"";
    }
    if (val == "id") {
        return "id";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeDevicePinnersOrderFieldByField(val: DevicePinnersOrderFieldByField): Json {
    return val;
}
export type DevicePinnersOrderFieldDirectionField = "asc" | "desc";
export function deserializeDevicePinnersOrderFieldDirectionField(val: any): DevicePinnersOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"DevicePinnersOrderFieldDirectionField\"";
    }
    if (val == "asc") {
        return "asc";
    }
    if (val == "desc") {
        return "desc";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeDevicePinnersOrderFieldDirectionField(val: DevicePinnersOrderFieldDirectionField): Json {
    return val;
}
export interface DevicePinnersOrderField {
    readonly by?: DevicePinnersOrderFieldByField;
    readonly direction?: DevicePinnersOrderFieldDirectionField;
}
export function deserializeDevicePinnersOrderField(val: any): DevicePinnersOrderField {
    const by: undefined | DevicePinnersOrderFieldByField = val.by == void 0 ? void 0 : deserializeDevicePinnersOrderFieldByField(val.by);
    const direction: undefined | DevicePinnersOrderFieldDirectionField = val.direction == void 0 ? void 0 : deserializeDevicePinnersOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies DevicePinnersOrderField;
}
export function serializeDevicePinnersOrderField(val: DevicePinnersOrderField): Json {
    return { ["by"]: val.by == void 0 ? void 0 : serializeDevicePinnersOrderFieldByField(val.by), ["direction"]: val.direction == void 0 ? void 0 : serializeDevicePinnersOrderFieldDirectionField(val.direction) };
}
export type EmailAliasTypeField = "email_alias";
export function deserializeEmailAliasTypeField(val: any): EmailAliasTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"EmailAliasTypeField\"";
    }
    if (val == "email_alias") {
        return "email_alias";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeEmailAliasTypeField(val: EmailAliasTypeField): Json {
    return val;
}
export interface EmailAlias {
    readonly id?: string;
    readonly type?: EmailAliasTypeField;
    readonly email?: string;
    readonly isConfirmed?: boolean;
}
export function deserializeEmailAlias(val: any): EmailAlias {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | EmailAliasTypeField = val.type == void 0 ? void 0 : deserializeEmailAliasTypeField(val.type);
    const email: undefined | string = isJson(val.email, "string") ? val.email : void 0;
    const isConfirmed: undefined | boolean = isJson(val.is_confirmed, "boolean") ? val.is_confirmed : void 0;
    return { id: id, type: type, email: email, isConfirmed: isConfirmed } satisfies EmailAlias;
}
export function serializeEmailAlias(val: EmailAlias): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeEmailAliasTypeField(val.type), ["email"]: val.email, ["is_confirmed"]: val.isConfirmed };
}
export interface EmailAliases {
    readonly totalCount?: number;
    readonly entries?: readonly EmailAlias[];
}
export function deserializeEmailAliases(val: any): EmailAliases {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly EmailAlias[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeEmailAlias(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies EmailAliases;
}
export function serializeEmailAliases(val: EmailAliases): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: EmailAlias): any {
            return serializeEmailAlias(item);
        }) as readonly any[] };
}
export type EnterpriseBaseTypeField = "enterprise";
export function deserializeEnterpriseBaseTypeField(val: any): EnterpriseBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"EnterpriseBaseTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeEnterpriseBaseTypeField(val: EnterpriseBaseTypeField): Json {
    return val;
}
export interface EnterpriseBase {
    readonly id?: string;
    readonly type?: EnterpriseBaseTypeField;
}
export function deserializeEnterpriseBase(val: any): EnterpriseBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | EnterpriseBaseTypeField = val.type == void 0 ? void 0 : deserializeEnterpriseBaseTypeField(val.type);
    return { id: id, type: type } satisfies EnterpriseBase;
}
export function serializeEnterpriseBase(val: EnterpriseBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeEnterpriseBaseTypeField(val.type) };
}
export type EventEventTypeField = "ACCESS_GRANTED" | "ACCESS_REVOKED" | "ADD_DEVICE_ASSOCIATION" | "ADD_LOGIN_ACTIVITY_DEVICE" | "ADMIN_LOGIN" | "APPLICATION_CREATED" | "APPLICATION_PUBLIC_KEY_ADDED" | "APPLICATION_PUBLIC_KEY_DELETED" | "CHANGE_ADMIN_ROLE" | "CHANGE_FOLDER_PERMISSION" | "COLLABORATION_ACCEPT" | "COLLABORATION_EXPIRATION" | "COLLABORATION_INVITE" | "COLLABORATION_REMOVE" | "COLLABORATION_ROLE_CHANGE" | "COLLAB_ADD_COLLABORATOR" | "COLLAB_INVITE_COLLABORATOR" | "COLLAB_REMOVE_COLLABORATOR" | "COLLAB_ROLE_CHANGE" | "COMMENT_CREATE" | "COMMENT_DELETE" | "CONTENT_ACCESS" | "CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY" | "CONTENT_WORKFLOW_AUTOMATION_ADD" | "CONTENT_WORKFLOW_AUTOMATION_DELETE" | "CONTENT_WORKFLOW_POLICY_ADD" | "CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION" | "CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION" | "COPY" | "DATA_RETENTION_CREATE_RETENTION" | "DATA_RETENTION_REMOVE_RETENTION" | "DELETE" | "DELETE_USER" | "DEVICE_TRUST_CHECK_FAILED" | "DOWNLOAD" | "EDIT" | "EDIT_USER" | "EMAIL_ALIAS_CONFIRM" | "EMAIL_ALIAS_REMOVE" | "ENABLE_TWO_FACTOR_AUTH" | "ENTERPRISE_APP_AUTHORIZATION_UPDATE" | "FAILED_LOGIN" | "FILE_MARKED_MALICIOUS" | "FILE_WATERMARKED_DOWNLOAD" | "GROUP_ADD_ITEM" | "GROUP_ADD_USER" | "GROUP_CREATION" | "GROUP_DELETION" | "GROUP_EDITED" | "GROUP_REMOVE_ITEM" | "GROUP_REMOVE_USER" | "ITEM_COPY" | "ITEM_CREATE" | "ITEM_DOWNLOAD" | "ITEM_MAKE_CURRENT_VERSION" | "ITEM_MODIFY" | "ITEM_MOVE" | "ITEM_OPEN" | "ITEM_PREVIEW" | "ITEM_RENAME" | "ITEM_SHARED" | "ITEM_SHARED_CREATE" | "ITEM_SHARED_UNSHARE" | "ITEM_SHARED_UPDATE" | "ITEM_SYNC" | "ITEM_TRASH" | "ITEM_UNDELETE_VIA_TRASH" | "ITEM_UNSYNC" | "ITEM_UPLOAD" | "LEGAL_HOLD_ASSIGNMENT_CREATE" | "LEGAL_HOLD_ASSIGNMENT_DELETE" | "LEGAL_HOLD_POLICY_CREATE" | "LEGAL_HOLD_POLICY_DELETE" | "LEGAL_HOLD_POLICY_UPDATE" | "LOCK" | "LOCK_CREATE" | "LOCK_DESTROY" | "LOGIN" | "MASTER_INVITE_ACCEPT" | "MASTER_INVITE_REJECT" | "METADATA_INSTANCE_CREATE" | "METADATA_INSTANCE_DELETE" | "METADATA_INSTANCE_UPDATE" | "METADATA_TEMPLATE_CREATE" | "METADATA_TEMPLATE_DELETE" | "METADATA_TEMPLATE_UPDATE" | "MOVE" | "NEW_USER" | "PREVIEW" | "REMOVE_DEVICE_ASSOCIATION" | "REMOVE_LOGIN_ACTIVITY_DEVICE" | "RENAME" | "RETENTION_POLICY_ASSIGNMENT_ADD" | "SHARE" | "SHARE_EXPIRATION" | "SHIELD_ALERT" | "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED" | "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION" | "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED" | "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION" | "SHIELD_JUSTIFICATION_APPROVAL" | "SHIELD_SHARED_LINK_ACCESS_BLOCKED" | "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE" | "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE" | "SIGN_DOCUMENT_ASSIGNED" | "SIGN_DOCUMENT_CANCELLED" | "SIGN_DOCUMENT_COMPLETED" | "SIGN_DOCUMENT_CONVERTED" | "SIGN_DOCUMENT_CREATED" | "SIGN_DOCUMENT_DECLINED" | "SIGN_DOCUMENT_EXPIRED" | "SIGN_DOCUMENT_SIGNED" | "SIGN_DOCUMENT_VIEWED_BY_SIGNED" | "SIGNER_DOWNLOADED" | "SIGNER_FORWARDED" | "STORAGE_EXPIRATION" | "TAG_ITEM_CREATE" | "TASK_ASSIGNMENT_CREATE" | "TASK_ASSIGNMENT_DELETE" | "TASK_ASSIGNMENT_UPDATE" | "TASK_CREATE" | "TASK_UPDATE" | "TERMS_OF_SERVICE_ACCEPT" | "TERMS_OF_SERVICE_REJECT" | "UNDELETE" | "UNLOCK" | "UNSHARE" | "UPDATE_COLLABORATION_EXPIRATION" | "UPDATE_SHARE_EXPIRATION" | "UPLOAD" | "USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE" | "WATERMARK_LABEL_CREATE" | "WATERMARK_LABEL_DELETE";
export function deserializeEventEventTypeField(val: any): EventEventTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"EventEventTypeField\"";
    }
    if (val == "ACCESS_GRANTED") {
        return "ACCESS_GRANTED";
    }
    if (val == "ACCESS_REVOKED") {
        return "ACCESS_REVOKED";
    }
    if (val == "ADD_DEVICE_ASSOCIATION") {
        return "ADD_DEVICE_ASSOCIATION";
    }
    if (val == "ADD_LOGIN_ACTIVITY_DEVICE") {
        return "ADD_LOGIN_ACTIVITY_DEVICE";
    }
    if (val == "ADMIN_LOGIN") {
        return "ADMIN_LOGIN";
    }
    if (val == "APPLICATION_CREATED") {
        return "APPLICATION_CREATED";
    }
    if (val == "APPLICATION_PUBLIC_KEY_ADDED") {
        return "APPLICATION_PUBLIC_KEY_ADDED";
    }
    if (val == "APPLICATION_PUBLIC_KEY_DELETED") {
        return "APPLICATION_PUBLIC_KEY_DELETED";
    }
    if (val == "CHANGE_ADMIN_ROLE") {
        return "CHANGE_ADMIN_ROLE";
    }
    if (val == "CHANGE_FOLDER_PERMISSION") {
        return "CHANGE_FOLDER_PERMISSION";
    }
    if (val == "COLLABORATION_ACCEPT") {
        return "COLLABORATION_ACCEPT";
    }
    if (val == "COLLABORATION_EXPIRATION") {
        return "COLLABORATION_EXPIRATION";
    }
    if (val == "COLLABORATION_INVITE") {
        return "COLLABORATION_INVITE";
    }
    if (val == "COLLABORATION_REMOVE") {
        return "COLLABORATION_REMOVE";
    }
    if (val == "COLLABORATION_ROLE_CHANGE") {
        return "COLLABORATION_ROLE_CHANGE";
    }
    if (val == "COLLAB_ADD_COLLABORATOR") {
        return "COLLAB_ADD_COLLABORATOR";
    }
    if (val == "COLLAB_INVITE_COLLABORATOR") {
        return "COLLAB_INVITE_COLLABORATOR";
    }
    if (val == "COLLAB_REMOVE_COLLABORATOR") {
        return "COLLAB_REMOVE_COLLABORATOR";
    }
    if (val == "COLLAB_ROLE_CHANGE") {
        return "COLLAB_ROLE_CHANGE";
    }
    if (val == "COMMENT_CREATE") {
        return "COMMENT_CREATE";
    }
    if (val == "COMMENT_DELETE") {
        return "COMMENT_DELETE";
    }
    if (val == "CONTENT_ACCESS") {
        return "CONTENT_ACCESS";
    }
    if (val == "CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY") {
        return "CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY";
    }
    if (val == "CONTENT_WORKFLOW_AUTOMATION_ADD") {
        return "CONTENT_WORKFLOW_AUTOMATION_ADD";
    }
    if (val == "CONTENT_WORKFLOW_AUTOMATION_DELETE") {
        return "CONTENT_WORKFLOW_AUTOMATION_DELETE";
    }
    if (val == "CONTENT_WORKFLOW_POLICY_ADD") {
        return "CONTENT_WORKFLOW_POLICY_ADD";
    }
    if (val == "CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION") {
        return "CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION";
    }
    if (val == "CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION") {
        return "CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION";
    }
    if (val == "COPY") {
        return "COPY";
    }
    if (val == "DATA_RETENTION_CREATE_RETENTION") {
        return "DATA_RETENTION_CREATE_RETENTION";
    }
    if (val == "DATA_RETENTION_REMOVE_RETENTION") {
        return "DATA_RETENTION_REMOVE_RETENTION";
    }
    if (val == "DELETE") {
        return "DELETE";
    }
    if (val == "DELETE_USER") {
        return "DELETE_USER";
    }
    if (val == "DEVICE_TRUST_CHECK_FAILED") {
        return "DEVICE_TRUST_CHECK_FAILED";
    }
    if (val == "DOWNLOAD") {
        return "DOWNLOAD";
    }
    if (val == "EDIT") {
        return "EDIT";
    }
    if (val == "EDIT_USER") {
        return "EDIT_USER";
    }
    if (val == "EMAIL_ALIAS_CONFIRM") {
        return "EMAIL_ALIAS_CONFIRM";
    }
    if (val == "EMAIL_ALIAS_REMOVE") {
        return "EMAIL_ALIAS_REMOVE";
    }
    if (val == "ENABLE_TWO_FACTOR_AUTH") {
        return "ENABLE_TWO_FACTOR_AUTH";
    }
    if (val == "ENTERPRISE_APP_AUTHORIZATION_UPDATE") {
        return "ENTERPRISE_APP_AUTHORIZATION_UPDATE";
    }
    if (val == "FAILED_LOGIN") {
        return "FAILED_LOGIN";
    }
    if (val == "FILE_MARKED_MALICIOUS") {
        return "FILE_MARKED_MALICIOUS";
    }
    if (val == "FILE_WATERMARKED_DOWNLOAD") {
        return "FILE_WATERMARKED_DOWNLOAD";
    }
    if (val == "GROUP_ADD_ITEM") {
        return "GROUP_ADD_ITEM";
    }
    if (val == "GROUP_ADD_USER") {
        return "GROUP_ADD_USER";
    }
    if (val == "GROUP_CREATION") {
        return "GROUP_CREATION";
    }
    if (val == "GROUP_DELETION") {
        return "GROUP_DELETION";
    }
    if (val == "GROUP_EDITED") {
        return "GROUP_EDITED";
    }
    if (val == "GROUP_REMOVE_ITEM") {
        return "GROUP_REMOVE_ITEM";
    }
    if (val == "GROUP_REMOVE_USER") {
        return "GROUP_REMOVE_USER";
    }
    if (val == "ITEM_COPY") {
        return "ITEM_COPY";
    }
    if (val == "ITEM_CREATE") {
        return "ITEM_CREATE";
    }
    if (val == "ITEM_DOWNLOAD") {
        return "ITEM_DOWNLOAD";
    }
    if (val == "ITEM_MAKE_CURRENT_VERSION") {
        return "ITEM_MAKE_CURRENT_VERSION";
    }
    if (val == "ITEM_MODIFY") {
        return "ITEM_MODIFY";
    }
    if (val == "ITEM_MOVE") {
        return "ITEM_MOVE";
    }
    if (val == "ITEM_OPEN") {
        return "ITEM_OPEN";
    }
    if (val == "ITEM_PREVIEW") {
        return "ITEM_PREVIEW";
    }
    if (val == "ITEM_RENAME") {
        return "ITEM_RENAME";
    }
    if (val == "ITEM_SHARED") {
        return "ITEM_SHARED";
    }
    if (val == "ITEM_SHARED_CREATE") {
        return "ITEM_SHARED_CREATE";
    }
    if (val == "ITEM_SHARED_UNSHARE") {
        return "ITEM_SHARED_UNSHARE";
    }
    if (val == "ITEM_SHARED_UPDATE") {
        return "ITEM_SHARED_UPDATE";
    }
    if (val == "ITEM_SYNC") {
        return "ITEM_SYNC";
    }
    if (val == "ITEM_TRASH") {
        return "ITEM_TRASH";
    }
    if (val == "ITEM_UNDELETE_VIA_TRASH") {
        return "ITEM_UNDELETE_VIA_TRASH";
    }
    if (val == "ITEM_UNSYNC") {
        return "ITEM_UNSYNC";
    }
    if (val == "ITEM_UPLOAD") {
        return "ITEM_UPLOAD";
    }
    if (val == "LEGAL_HOLD_ASSIGNMENT_CREATE") {
        return "LEGAL_HOLD_ASSIGNMENT_CREATE";
    }
    if (val == "LEGAL_HOLD_ASSIGNMENT_DELETE") {
        return "LEGAL_HOLD_ASSIGNMENT_DELETE";
    }
    if (val == "LEGAL_HOLD_POLICY_CREATE") {
        return "LEGAL_HOLD_POLICY_CREATE";
    }
    if (val == "LEGAL_HOLD_POLICY_DELETE") {
        return "LEGAL_HOLD_POLICY_DELETE";
    }
    if (val == "LEGAL_HOLD_POLICY_UPDATE") {
        return "LEGAL_HOLD_POLICY_UPDATE";
    }
    if (val == "LOCK") {
        return "LOCK";
    }
    if (val == "LOCK_CREATE") {
        return "LOCK_CREATE";
    }
    if (val == "LOCK_DESTROY") {
        return "LOCK_DESTROY";
    }
    if (val == "LOGIN") {
        return "LOGIN";
    }
    if (val == "MASTER_INVITE_ACCEPT") {
        return "MASTER_INVITE_ACCEPT";
    }
    if (val == "MASTER_INVITE_REJECT") {
        return "MASTER_INVITE_REJECT";
    }
    if (val == "METADATA_INSTANCE_CREATE") {
        return "METADATA_INSTANCE_CREATE";
    }
    if (val == "METADATA_INSTANCE_DELETE") {
        return "METADATA_INSTANCE_DELETE";
    }
    if (val == "METADATA_INSTANCE_UPDATE") {
        return "METADATA_INSTANCE_UPDATE";
    }
    if (val == "METADATA_TEMPLATE_CREATE") {
        return "METADATA_TEMPLATE_CREATE";
    }
    if (val == "METADATA_TEMPLATE_DELETE") {
        return "METADATA_TEMPLATE_DELETE";
    }
    if (val == "METADATA_TEMPLATE_UPDATE") {
        return "METADATA_TEMPLATE_UPDATE";
    }
    if (val == "MOVE") {
        return "MOVE";
    }
    if (val == "NEW_USER") {
        return "NEW_USER";
    }
    if (val == "PREVIEW") {
        return "PREVIEW";
    }
    if (val == "REMOVE_DEVICE_ASSOCIATION") {
        return "REMOVE_DEVICE_ASSOCIATION";
    }
    if (val == "REMOVE_LOGIN_ACTIVITY_DEVICE") {
        return "REMOVE_LOGIN_ACTIVITY_DEVICE";
    }
    if (val == "RENAME") {
        return "RENAME";
    }
    if (val == "RETENTION_POLICY_ASSIGNMENT_ADD") {
        return "RETENTION_POLICY_ASSIGNMENT_ADD";
    }
    if (val == "SHARE") {
        return "SHARE";
    }
    if (val == "SHARE_EXPIRATION") {
        return "SHARE_EXPIRATION";
    }
    if (val == "SHIELD_ALERT") {
        return "SHIELD_ALERT";
    }
    if (val == "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED") {
        return "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED";
    }
    if (val == "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION") {
        return "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION";
    }
    if (val == "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED") {
        return "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED";
    }
    if (val == "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION") {
        return "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION";
    }
    if (val == "SHIELD_JUSTIFICATION_APPROVAL") {
        return "SHIELD_JUSTIFICATION_APPROVAL";
    }
    if (val == "SHIELD_SHARED_LINK_ACCESS_BLOCKED") {
        return "SHIELD_SHARED_LINK_ACCESS_BLOCKED";
    }
    if (val == "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE") {
        return "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE";
    }
    if (val == "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE") {
        return "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE";
    }
    if (val == "SIGN_DOCUMENT_ASSIGNED") {
        return "SIGN_DOCUMENT_ASSIGNED";
    }
    if (val == "SIGN_DOCUMENT_CANCELLED") {
        return "SIGN_DOCUMENT_CANCELLED";
    }
    if (val == "SIGN_DOCUMENT_COMPLETED") {
        return "SIGN_DOCUMENT_COMPLETED";
    }
    if (val == "SIGN_DOCUMENT_CONVERTED") {
        return "SIGN_DOCUMENT_CONVERTED";
    }
    if (val == "SIGN_DOCUMENT_CREATED") {
        return "SIGN_DOCUMENT_CREATED";
    }
    if (val == "SIGN_DOCUMENT_DECLINED") {
        return "SIGN_DOCUMENT_DECLINED";
    }
    if (val == "SIGN_DOCUMENT_EXPIRED") {
        return "SIGN_DOCUMENT_EXPIRED";
    }
    if (val == "SIGN_DOCUMENT_SIGNED") {
        return "SIGN_DOCUMENT_SIGNED";
    }
    if (val == "SIGN_DOCUMENT_VIEWED_BY_SIGNED") {
        return "SIGN_DOCUMENT_VIEWED_BY_SIGNED";
    }
    if (val == "SIGNER_DOWNLOADED") {
        return "SIGNER_DOWNLOADED";
    }
    if (val == "SIGNER_FORWARDED") {
        return "SIGNER_FORWARDED";
    }
    if (val == "STORAGE_EXPIRATION") {
        return "STORAGE_EXPIRATION";
    }
    if (val == "TAG_ITEM_CREATE") {
        return "TAG_ITEM_CREATE";
    }
    if (val == "TASK_ASSIGNMENT_CREATE") {
        return "TASK_ASSIGNMENT_CREATE";
    }
    if (val == "TASK_ASSIGNMENT_DELETE") {
        return "TASK_ASSIGNMENT_DELETE";
    }
    if (val == "TASK_ASSIGNMENT_UPDATE") {
        return "TASK_ASSIGNMENT_UPDATE";
    }
    if (val == "TASK_CREATE") {
        return "TASK_CREATE";
    }
    if (val == "TASK_UPDATE") {
        return "TASK_UPDATE";
    }
    if (val == "TERMS_OF_SERVICE_ACCEPT") {
        return "TERMS_OF_SERVICE_ACCEPT";
    }
    if (val == "TERMS_OF_SERVICE_REJECT") {
        return "TERMS_OF_SERVICE_REJECT";
    }
    if (val == "UNDELETE") {
        return "UNDELETE";
    }
    if (val == "UNLOCK") {
        return "UNLOCK";
    }
    if (val == "UNSHARE") {
        return "UNSHARE";
    }
    if (val == "UPDATE_COLLABORATION_EXPIRATION") {
        return "UPDATE_COLLABORATION_EXPIRATION";
    }
    if (val == "UPDATE_SHARE_EXPIRATION") {
        return "UPDATE_SHARE_EXPIRATION";
    }
    if (val == "UPLOAD") {
        return "UPLOAD";
    }
    if (val == "USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE") {
        return "USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE";
    }
    if (val == "WATERMARK_LABEL_CREATE") {
        return "WATERMARK_LABEL_CREATE";
    }
    if (val == "WATERMARK_LABEL_DELETE") {
        return "WATERMARK_LABEL_DELETE";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeEventEventTypeField(val: EventEventTypeField): Json {
    return val;
}
export interface EventAdditionalDetailsField {
}
export function deserializeEventAdditionalDetailsField(val: any): EventAdditionalDetailsField {
    return {} satisfies EventAdditionalDetailsField;
}
export function serializeEventAdditionalDetailsField(val: EventAdditionalDetailsField): Json {
    return {};
}
export type FileSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export function deserializeFileSharedLinkFieldAccessField(val: any): FileSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileSharedLinkFieldAccessField(val: FileSharedLinkFieldAccessField): Json {
    return val;
}
export type FileSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export function deserializeFileSharedLinkFieldEffectiveAccessField(val: any): FileSharedLinkFieldEffectiveAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileSharedLinkFieldEffectiveAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileSharedLinkFieldEffectiveAccessField(val: FileSharedLinkFieldEffectiveAccessField): Json {
    return val;
}
export type FileSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export function deserializeFileSharedLinkFieldEffectivePermissionField(val: any): FileSharedLinkFieldEffectivePermissionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileSharedLinkFieldEffectivePermissionField\"";
    }
    if (val == "can_edit") {
        return "can_edit";
    }
    if (val == "can_download") {
        return "can_download";
    }
    if (val == "can_preview") {
        return "can_preview";
    }
    if (val == "no_access") {
        return "no_access";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileSharedLinkFieldEffectivePermissionField(val: FileSharedLinkFieldEffectivePermissionField): Json {
    return val;
}
export interface FileSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export function deserializeFileSharedLinkFieldPermissionsField(val: any): FileSharedLinkFieldPermissionsField {
    const canDownload: boolean = val.can_download;
    const canPreview: boolean = val.can_preview;
    const canEdit: boolean = val.can_edit;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies FileSharedLinkFieldPermissionsField;
}
export function serializeFileSharedLinkFieldPermissionsField(val: FileSharedLinkFieldPermissionsField): Json {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export interface FileSharedLinkField {
    readonly url: string;
    readonly downloadUrl?: string;
    readonly vanityUrl?: string;
    readonly vanityName?: string;
    readonly access?: FileSharedLinkFieldAccessField;
    readonly effectiveAccess: FileSharedLinkFieldEffectiveAccessField;
    readonly effectivePermission: FileSharedLinkFieldEffectivePermissionField;
    readonly unsharedAt?: string;
    readonly isPasswordEnabled: boolean;
    readonly permissions?: FileSharedLinkFieldPermissionsField;
    readonly downloadCount: number;
    readonly previewCount: number;
}
export function deserializeFileSharedLinkField(val: any): FileSharedLinkField {
    const url: string = val.url;
    const downloadUrl: undefined | string = isJson(val.download_url, "string") ? val.download_url : void 0;
    const vanityUrl: undefined | string = isJson(val.vanity_url, "string") ? val.vanity_url : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const access: undefined | FileSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeFileSharedLinkFieldAccessField(val.access);
    const effectiveAccess: FileSharedLinkFieldEffectiveAccessField = deserializeFileSharedLinkFieldEffectiveAccessField(val.effective_access);
    const effectivePermission: FileSharedLinkFieldEffectivePermissionField = deserializeFileSharedLinkFieldEffectivePermissionField(val.effective_permission);
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    const isPasswordEnabled: boolean = val.is_password_enabled;
    const permissions: undefined | FileSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeFileSharedLinkFieldPermissionsField(val.permissions);
    const downloadCount: number = val.download_count;
    const previewCount: number = val.preview_count;
    return { url: url, downloadUrl: downloadUrl, vanityUrl: vanityUrl, vanityName: vanityName, access: access, effectiveAccess: effectiveAccess, effectivePermission: effectivePermission, unsharedAt: unsharedAt, isPasswordEnabled: isPasswordEnabled, permissions: permissions, downloadCount: downloadCount, previewCount: previewCount } satisfies FileSharedLinkField;
}
export function serializeFileSharedLinkField(val: FileSharedLinkField): Json {
    return { ["url"]: val.url, ["download_url"]: val.downloadUrl, ["vanity_url"]: val.vanityUrl, ["vanity_name"]: val.vanityName, ["access"]: val.access == void 0 ? void 0 : serializeFileSharedLinkFieldAccessField(val.access), ["effective_access"]: serializeFileSharedLinkFieldEffectiveAccessField(val.effectiveAccess), ["effective_permission"]: serializeFileSharedLinkFieldEffectivePermissionField(val.effectivePermission), ["unshared_at"]: val.unsharedAt, ["is_password_enabled"]: val.isPasswordEnabled, ["permissions"]: val.permissions == void 0 ? void 0 : serializeFileSharedLinkFieldPermissionsField(val.permissions), ["download_count"]: val.downloadCount, ["preview_count"]: val.previewCount };
}
export type FileItemStatusField = "active" | "trashed" | "deleted";
export function deserializeFileItemStatusField(val: any): FileItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileItemStatusField(val: FileItemStatusField): Json {
    return val;
}
export interface FileFullPermissionsField {
    readonly canDelete: boolean;
    readonly canDownload: boolean;
    readonly canInviteCollaborator: boolean;
    readonly canRename: boolean;
    readonly canSetShareAccess: boolean;
    readonly canShare: boolean;
    readonly canAnnotate?: boolean;
    readonly canComment?: boolean;
    readonly canPreview?: boolean;
    readonly canUpload?: boolean;
    readonly canViewAnnotationsAll?: boolean;
    readonly canViewAnnotationsSelf?: boolean;
}
export function deserializeFileFullPermissionsField(val: any): FileFullPermissionsField {
    const canDelete: boolean = val.can_delete;
    const canDownload: boolean = val.can_download;
    const canInviteCollaborator: boolean = val.can_invite_collaborator;
    const canRename: boolean = val.can_rename;
    const canSetShareAccess: boolean = val.can_set_share_access;
    const canShare: boolean = val.can_share;
    const canAnnotate: undefined | boolean = isJson(val.can_annotate, "boolean") ? val.can_annotate : void 0;
    const canComment: undefined | boolean = isJson(val.can_comment, "boolean") ? val.can_comment : void 0;
    const canPreview: undefined | boolean = isJson(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canUpload: undefined | boolean = isJson(val.can_upload, "boolean") ? val.can_upload : void 0;
    const canViewAnnotationsAll: undefined | boolean = isJson(val.can_view_annotations_all, "boolean") ? val.can_view_annotations_all : void 0;
    const canViewAnnotationsSelf: undefined | boolean = isJson(val.can_view_annotations_self, "boolean") ? val.can_view_annotations_self : void 0;
    return { canDelete: canDelete, canDownload: canDownload, canInviteCollaborator: canInviteCollaborator, canRename: canRename, canSetShareAccess: canSetShareAccess, canShare: canShare, canAnnotate: canAnnotate, canComment: canComment, canPreview: canPreview, canUpload: canUpload, canViewAnnotationsAll: canViewAnnotationsAll, canViewAnnotationsSelf: canViewAnnotationsSelf } satisfies FileFullPermissionsField;
}
export function serializeFileFullPermissionsField(val: FileFullPermissionsField): Json {
    return { ["can_delete"]: val.canDelete, ["can_download"]: val.canDownload, ["can_invite_collaborator"]: val.canInviteCollaborator, ["can_rename"]: val.canRename, ["can_set_share_access"]: val.canSetShareAccess, ["can_share"]: val.canShare, ["can_annotate"]: val.canAnnotate, ["can_comment"]: val.canComment, ["can_preview"]: val.canPreview, ["can_upload"]: val.canUpload, ["can_view_annotations_all"]: val.canViewAnnotationsAll, ["can_view_annotations_self"]: val.canViewAnnotationsSelf };
}
export type FileFullLockFieldTypeField = "lock";
export function deserializeFileFullLockFieldTypeField(val: any): FileFullLockFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullLockFieldTypeField\"";
    }
    if (val == "lock") {
        return "lock";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileFullLockFieldTypeField(val: FileFullLockFieldTypeField): Json {
    return val;
}
export type FileFullLockFieldAppTypeField = "gsuite" | "office_wopi" | "office_wopiplus" | "other";
export function deserializeFileFullLockFieldAppTypeField(val: any): FileFullLockFieldAppTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullLockFieldAppTypeField\"";
    }
    if (val == "gsuite") {
        return "gsuite";
    }
    if (val == "office_wopi") {
        return "office_wopi";
    }
    if (val == "office_wopiplus") {
        return "office_wopiplus";
    }
    if (val == "other") {
        return "other";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileFullLockFieldAppTypeField(val: FileFullLockFieldAppTypeField): Json {
    return val;
}
export type FileFullExpiringEmbedLinkFieldTokenTypeField = "bearer";
export function deserializeFileFullExpiringEmbedLinkFieldTokenTypeField(val: any): FileFullExpiringEmbedLinkFieldTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullExpiringEmbedLinkFieldTokenTypeField\"";
    }
    if (val == "bearer") {
        return "bearer";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileFullExpiringEmbedLinkFieldTokenTypeField(val: FileFullExpiringEmbedLinkFieldTokenTypeField): Json {
    return val;
}
export interface FileFullWatermarkInfoField {
    readonly isWatermarked?: boolean;
}
export function deserializeFileFullWatermarkInfoField(val: any): FileFullWatermarkInfoField {
    const isWatermarked: undefined | boolean = isJson(val.is_watermarked, "boolean") ? val.is_watermarked : void 0;
    return { isWatermarked: isWatermarked } satisfies FileFullWatermarkInfoField;
}
export function serializeFileFullWatermarkInfoField(val: FileFullWatermarkInfoField): Json {
    return { ["is_watermarked"]: val.isWatermarked };
}
export type FileFullAllowedInviteeRolesField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner";
export function deserializeFileFullAllowedInviteeRolesField(val: any): FileFullAllowedInviteeRolesField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullAllowedInviteeRolesField\"";
    }
    if (val == "editor") {
        return "editor";
    }
    if (val == "viewer") {
        return "viewer";
    }
    if (val == "previewer") {
        return "previewer";
    }
    if (val == "uploader") {
        return "uploader";
    }
    if (val == "previewer uploader") {
        return "previewer uploader";
    }
    if (val == "viewer uploader") {
        return "viewer uploader";
    }
    if (val == "co-owner") {
        return "co-owner";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileFullAllowedInviteeRolesField(val: FileFullAllowedInviteeRolesField): Json {
    return val;
}
export interface FileFullMetadataField {
}
export function deserializeFileFullMetadataField(val: any): FileFullMetadataField {
    return {} satisfies FileFullMetadataField;
}
export function serializeFileFullMetadataField(val: FileFullMetadataField): Json {
    return {};
}
export interface FileFullRepresentationsFieldEntriesFieldContentField {
    readonly urlTemplate?: string;
}
export function deserializeFileFullRepresentationsFieldEntriesFieldContentField(val: any): FileFullRepresentationsFieldEntriesFieldContentField {
    const urlTemplate: undefined | string = isJson(val.url_template, "string") ? val.url_template : void 0;
    return { urlTemplate: urlTemplate } satisfies FileFullRepresentationsFieldEntriesFieldContentField;
}
export function serializeFileFullRepresentationsFieldEntriesFieldContentField(val: FileFullRepresentationsFieldEntriesFieldContentField): Json {
    return { ["url_template"]: val.urlTemplate };
}
export interface FileFullRepresentationsFieldEntriesFieldInfoField {
    readonly url?: string;
}
export function deserializeFileFullRepresentationsFieldEntriesFieldInfoField(val: any): FileFullRepresentationsFieldEntriesFieldInfoField {
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    return { url: url } satisfies FileFullRepresentationsFieldEntriesFieldInfoField;
}
export function serializeFileFullRepresentationsFieldEntriesFieldInfoField(val: FileFullRepresentationsFieldEntriesFieldInfoField): Json {
    return { ["url"]: val.url };
}
export interface FileFullRepresentationsFieldEntriesFieldPropertiesField {
    readonly dimensions?: string;
    readonly paged?: boolean;
    readonly thumb?: boolean;
}
export function deserializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val: any): FileFullRepresentationsFieldEntriesFieldPropertiesField {
    const dimensions: undefined | string = isJson(val.dimensions, "string") ? val.dimensions : void 0;
    const paged: undefined | boolean = isJson(val.paged, "boolean") ? val.paged : void 0;
    const thumb: undefined | boolean = isJson(val.thumb, "boolean") ? val.thumb : void 0;
    return { dimensions: dimensions, paged: paged, thumb: thumb } satisfies FileFullRepresentationsFieldEntriesFieldPropertiesField;
}
export function serializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val: FileFullRepresentationsFieldEntriesFieldPropertiesField): Json {
    return { ["dimensions"]: val.dimensions, ["paged"]: val.paged, ["thumb"]: val.thumb };
}
export type FileFullRepresentationsFieldEntriesFieldStatusFieldStateField = "success" | "viewable" | "pending" | "none";
export function deserializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val: any): FileFullRepresentationsFieldEntriesFieldStatusFieldStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullRepresentationsFieldEntriesFieldStatusFieldStateField\"";
    }
    if (val == "success") {
        return "success";
    }
    if (val == "viewable") {
        return "viewable";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "none") {
        return "none";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val: FileFullRepresentationsFieldEntriesFieldStatusFieldStateField): Json {
    return val;
}
export interface FileFullRepresentationsFieldEntriesFieldStatusField {
    readonly state?: FileFullRepresentationsFieldEntriesFieldStatusFieldStateField;
}
export function deserializeFileFullRepresentationsFieldEntriesFieldStatusField(val: any): FileFullRepresentationsFieldEntriesFieldStatusField {
    const state: undefined | FileFullRepresentationsFieldEntriesFieldStatusFieldStateField = val.state == void 0 ? void 0 : deserializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val.state);
    return { state: state } satisfies FileFullRepresentationsFieldEntriesFieldStatusField;
}
export function serializeFileFullRepresentationsFieldEntriesFieldStatusField(val: FileFullRepresentationsFieldEntriesFieldStatusField): Json {
    return { ["state"]: val.state == void 0 ? void 0 : serializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val.state) };
}
export interface FileFullRepresentationsFieldEntriesField {
    readonly content?: FileFullRepresentationsFieldEntriesFieldContentField;
    readonly info?: FileFullRepresentationsFieldEntriesFieldInfoField;
    readonly properties?: FileFullRepresentationsFieldEntriesFieldPropertiesField;
    readonly representation?: string;
    readonly status?: FileFullRepresentationsFieldEntriesFieldStatusField;
}
export function deserializeFileFullRepresentationsFieldEntriesField(val: any): FileFullRepresentationsFieldEntriesField {
    const content: undefined | FileFullRepresentationsFieldEntriesFieldContentField = val.content == void 0 ? void 0 : deserializeFileFullRepresentationsFieldEntriesFieldContentField(val.content);
    const info: undefined | FileFullRepresentationsFieldEntriesFieldInfoField = val.info == void 0 ? void 0 : deserializeFileFullRepresentationsFieldEntriesFieldInfoField(val.info);
    const properties: undefined | FileFullRepresentationsFieldEntriesFieldPropertiesField = val.properties == void 0 ? void 0 : deserializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val.properties);
    const representation: undefined | string = isJson(val.representation, "string") ? val.representation : void 0;
    const status: undefined | FileFullRepresentationsFieldEntriesFieldStatusField = val.status == void 0 ? void 0 : deserializeFileFullRepresentationsFieldEntriesFieldStatusField(val.status);
    return { content: content, info: info, properties: properties, representation: representation, status: status } satisfies FileFullRepresentationsFieldEntriesField;
}
export function serializeFileFullRepresentationsFieldEntriesField(val: FileFullRepresentationsFieldEntriesField): Json {
    return { ["content"]: val.content == void 0 ? void 0 : serializeFileFullRepresentationsFieldEntriesFieldContentField(val.content), ["info"]: val.info == void 0 ? void 0 : serializeFileFullRepresentationsFieldEntriesFieldInfoField(val.info), ["properties"]: val.properties == void 0 ? void 0 : serializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val.properties), ["representation"]: val.representation, ["status"]: val.status == void 0 ? void 0 : serializeFileFullRepresentationsFieldEntriesFieldStatusField(val.status) };
}
export interface FileFullRepresentationsField {
    readonly entries?: readonly FileFullRepresentationsFieldEntriesField[];
}
export function deserializeFileFullRepresentationsField(val: any): FileFullRepresentationsField {
    const entries: undefined | readonly FileFullRepresentationsFieldEntriesField[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeFileFullRepresentationsFieldEntriesField(itm);
    }) as readonly any[] : void 0;
    return { entries: entries } satisfies FileFullRepresentationsField;
}
export function serializeFileFullRepresentationsField(val: FileFullRepresentationsField): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileFullRepresentationsFieldEntriesField): any {
            return serializeFileFullRepresentationsFieldEntriesField(item);
        }) as readonly any[] };
}
export interface FileFullClassificationField {
    readonly name?: string;
    readonly definition?: string;
    readonly color?: string;
}
export function deserializeFileFullClassificationField(val: any): FileFullClassificationField {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const definition: undefined | string = isJson(val.definition, "string") ? val.definition : void 0;
    const color: undefined | string = isJson(val.color, "string") ? val.color : void 0;
    return { name: name, definition: definition, color: color } satisfies FileFullClassificationField;
}
export function serializeFileFullClassificationField(val: FileFullClassificationField): Json {
    return { ["name"]: val.name, ["definition"]: val.definition, ["color"]: val.color };
}
export type FileFullSharedLinkPermissionOptionsField = "can_preview" | "can_download" | "can_edit";
export function deserializeFileFullSharedLinkPermissionOptionsField(val: any): FileFullSharedLinkPermissionOptionsField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullSharedLinkPermissionOptionsField\"";
    }
    if (val == "can_preview") {
        return "can_preview";
    }
    if (val == "can_download") {
        return "can_download";
    }
    if (val == "can_edit") {
        return "can_edit";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileFullSharedLinkPermissionOptionsField(val: FileFullSharedLinkPermissionOptionsField): Json {
    return val;
}
export type FileBaseTypeField = "file";
export function deserializeFileBaseTypeField(val: any): FileBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileBaseTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileBaseTypeField(val: FileBaseTypeField): Json {
    return val;
}
export interface FileBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FileBaseTypeField;
}
export function deserializeFileBase(val: any): FileBase {
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
    return { id: id, etag: etag, type: type } satisfies FileBase;
}
export function serializeFileBase(val: FileBase): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeFileBaseTypeField(val.type) };
}
export type FileRequestTypeField = "file_request";
export function deserializeFileRequestTypeField(val: any): FileRequestTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileRequestTypeField\"";
    }
    if (val == "file_request") {
        return "file_request";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileRequestTypeField(val: FileRequestTypeField): Json {
    return val;
}
export type FileRequestStatusField = "active" | "inactive";
export function deserializeFileRequestStatusField(val: any): FileRequestStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileRequestStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "inactive") {
        return "inactive";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileRequestStatusField(val: FileRequestStatusField): Json {
    return val;
}
export type FileVersionBaseTypeField = "file_version";
export function deserializeFileVersionBaseTypeField(val: any): FileVersionBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileVersionBaseTypeField\"";
    }
    if (val == "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileVersionBaseTypeField(val: FileVersionBaseTypeField): Json {
    return val;
}
export interface FileVersionBase {
    readonly id: string;
    readonly type: FileVersionBaseTypeField;
}
export function deserializeFileVersionBase(val: any): FileVersionBase {
    const id: string = val.id;
    const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(val.type);
    return { id: id, type: type } satisfies FileVersionBase;
}
export function serializeFileVersionBase(val: FileVersionBase): Json {
    return { ["id"]: val.id, ["type"]: serializeFileVersionBaseTypeField(val.type) };
}
export type FileVersionMini = FileVersionBase & {
    /**
     * The SHA1 hash of this version of the file. */
    readonly sha1?: string;
};
export function deserializeFileVersionMini(val: any): FileVersionMini {
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const id: string = val.id;
    const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(val.type);
    return { sha1: sha1, id: id, type: type } satisfies FileVersionMini;
}
export function serializeFileVersionMini(val: FileVersionMini): Json {
    const base: any = serializeFileVersionBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileVersionMini\"";
    }
    return { ...base, ...{ ["sha1"]: val.sha1 } };
}
export type FileMini = FileBase & {
    readonly sequenceId?: string;
    /**
     * The name of the file */
    readonly name?: string;
    /**
     * The SHA1 hash of the file. This can be used to compare the contents
     * of a file on Box with a local file. */
    readonly sha1?: string;
    readonly fileVersion?: FileVersionMini;
};
export function deserializeFileMini(val: any): FileMini {
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
    return { sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, id: id, etag: etag, type: type } satisfies FileMini;
}
export function serializeFileMini(val: FileMini): Json {
    const base: any = serializeFileBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileMini\"";
    }
    return { ...base, ...{ ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["sha1"]: val.sha1, ["file_version"]: val.fileVersion == void 0 ? void 0 : serializeFileVersionMini(val.fileVersion) } };
}
export interface SignRequestSignFilesField {
    readonly files?: readonly FileMini[];
    readonly isReadyForDownload?: boolean;
}
export function deserializeSignRequestSignFilesField(val: any): SignRequestSignFilesField {
    const files: undefined | readonly FileMini[] = isJson(val.files, "array") ? val.files.map(function (itm: Json): any {
        return deserializeFileMini(itm);
    }) as readonly any[] : void 0;
    const isReadyForDownload: undefined | boolean = isJson(val.is_ready_for_download, "boolean") ? val.is_ready_for_download : void 0;
    return { files: files, isReadyForDownload: isReadyForDownload } satisfies SignRequestSignFilesField;
}
export function serializeSignRequestSignFilesField(val: SignRequestSignFilesField): Json {
    return { ["files"]: val.files == void 0 ? void 0 : val.files.map(function (item: FileMini): any {
            return serializeFileMini(item);
        }) as readonly any[], ["is_ready_for_download"]: val.isReadyForDownload };
}
export interface FilesUnderRetention {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileMini[];
}
export function deserializeFilesUnderRetention(val: any): FilesUnderRetention {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly FileMini[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeFileMini(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies FilesUnderRetention;
}
export function serializeFilesUnderRetention(val: FilesUnderRetention): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileMini): any {
            return serializeFileMini(item);
        }) as readonly any[] };
}
export type FileConflict = FileMini & {
    /**
     * The SHA1 hash of the file. */
    readonly sha1?: string;
    readonly fileVersion?: FileVersionMini;
};
export function deserializeFileConflict(val: any): FileConflict {
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
    return { sha1: sha1, fileVersion: fileVersion, sequenceId: sequenceId, name: name, id: id, etag: etag, type: type } satisfies FileConflict;
}
export function serializeFileConflict(val: FileConflict): Json {
    const base: any = serializeFileMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileConflict\"";
    }
    return { ...base, ...{ ["sha1"]: val.sha1, ["file_version"]: val.fileVersion == void 0 ? void 0 : serializeFileVersionMini(val.fileVersion) } };
}
export interface ConflictErrorContextInfoField {
    readonly conflicts?: readonly FileConflict[];
}
export function deserializeConflictErrorContextInfoField(val: any): ConflictErrorContextInfoField {
    const conflicts: undefined | readonly FileConflict[] = isJson(val.conflicts, "array") ? val.conflicts.map(function (itm: Json): any {
        return deserializeFileConflict(itm);
    }) as readonly any[] : void 0;
    return { conflicts: conflicts } satisfies ConflictErrorContextInfoField;
}
export function serializeConflictErrorContextInfoField(val: ConflictErrorContextInfoField): Json {
    return { ["conflicts"]: val.conflicts == void 0 ? void 0 : val.conflicts.map(function (item: FileConflict): any {
            return serializeFileConflict(item);
        }) as readonly any[] };
}
export type ConflictError = ClientError & {
    readonly contextInfo?: ConflictErrorContextInfoField;
};
export function deserializeConflictError(val: any): ConflictError {
    const contextInfo: undefined | ClientErrorContextInfoField = val.context_info == void 0 ? void 0 : deserializeClientErrorContextInfoField(val.context_info);
    const type: undefined | ClientErrorTypeField = val.type == void 0 ? void 0 : deserializeClientErrorTypeField(val.type);
    const status: undefined | number = isJson(val.status, "number") ? val.status : void 0;
    const code: undefined | ClientErrorCodeField = val.code == void 0 ? void 0 : deserializeClientErrorCodeField(val.code);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const helpUrl: undefined | string = isJson(val.help_url, "string") ? val.help_url : void 0;
    const requestId: undefined | string = isJson(val.request_id, "string") ? val.request_id : void 0;
    return { contextInfo: contextInfo, type: type, status: status, code: code, message: message, helpUrl: helpUrl, requestId: requestId } satisfies ConflictError;
}
export function serializeConflictError(val: ConflictError): Json {
    const base: any = serializeClientError(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ConflictError\"";
    }
    return { ...base, ...{ ["context_info"]: val.contextInfo == void 0 ? void 0 : serializeConflictErrorContextInfoField(val.contextInfo) } };
}
export type FileVersionsOrderFieldDirectionField = "ASC" | "DESC";
export function deserializeFileVersionsOrderFieldDirectionField(val: any): FileVersionsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileVersionsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileVersionsOrderFieldDirectionField(val: FileVersionsOrderFieldDirectionField): Json {
    return val;
}
export interface FileVersionsOrderField {
    readonly by?: string;
    readonly direction?: FileVersionsOrderFieldDirectionField;
}
export function deserializeFileVersionsOrderField(val: any): FileVersionsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | FileVersionsOrderFieldDirectionField = val.direction == void 0 ? void 0 : deserializeFileVersionsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies FileVersionsOrderField;
}
export function serializeFileVersionsOrderField(val: FileVersionsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : serializeFileVersionsOrderFieldDirectionField(val.direction) };
}
export type FileVersionLegalHoldTypeField = "file_version_legal_hold";
export function deserializeFileVersionLegalHoldTypeField(val: any): FileVersionLegalHoldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileVersionLegalHoldTypeField\"";
    }
    if (val == "file_version_legal_hold") {
        return "file_version_legal_hold";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileVersionLegalHoldTypeField(val: FileVersionLegalHoldTypeField): Json {
    return val;
}
export type FileVersionRetentionTypeField = "file_version_retention";
export function deserializeFileVersionRetentionTypeField(val: any): FileVersionRetentionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileVersionRetentionTypeField\"";
    }
    if (val == "file_version_retention") {
        return "file_version_retention";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileVersionRetentionTypeField(val: FileVersionRetentionTypeField): Json {
    return val;
}
export type FolderSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export function deserializeFolderSharedLinkFieldAccessField(val: any): FolderSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFolderSharedLinkFieldAccessField(val: FolderSharedLinkFieldAccessField): Json {
    return val;
}
export type FolderSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export function deserializeFolderSharedLinkFieldEffectiveAccessField(val: any): FolderSharedLinkFieldEffectiveAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderSharedLinkFieldEffectiveAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFolderSharedLinkFieldEffectiveAccessField(val: FolderSharedLinkFieldEffectiveAccessField): Json {
    return val;
}
export type FolderSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export function deserializeFolderSharedLinkFieldEffectivePermissionField(val: any): FolderSharedLinkFieldEffectivePermissionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderSharedLinkFieldEffectivePermissionField\"";
    }
    if (val == "can_edit") {
        return "can_edit";
    }
    if (val == "can_download") {
        return "can_download";
    }
    if (val == "can_preview") {
        return "can_preview";
    }
    if (val == "no_access") {
        return "no_access";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFolderSharedLinkFieldEffectivePermissionField(val: FolderSharedLinkFieldEffectivePermissionField): Json {
    return val;
}
export interface FolderSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export function deserializeFolderSharedLinkFieldPermissionsField(val: any): FolderSharedLinkFieldPermissionsField {
    const canDownload: boolean = val.can_download;
    const canPreview: boolean = val.can_preview;
    const canEdit: boolean = val.can_edit;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies FolderSharedLinkFieldPermissionsField;
}
export function serializeFolderSharedLinkFieldPermissionsField(val: FolderSharedLinkFieldPermissionsField): Json {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export interface FolderSharedLinkField {
    readonly url: string;
    readonly downloadUrl?: string;
    readonly vanityUrl?: string;
    readonly vanityName?: string;
    readonly access?: FolderSharedLinkFieldAccessField;
    readonly effectiveAccess: FolderSharedLinkFieldEffectiveAccessField;
    readonly effectivePermission: FolderSharedLinkFieldEffectivePermissionField;
    readonly unsharedAt?: string;
    readonly isPasswordEnabled: boolean;
    readonly permissions?: FolderSharedLinkFieldPermissionsField;
    readonly downloadCount: number;
    readonly previewCount: number;
}
export function deserializeFolderSharedLinkField(val: any): FolderSharedLinkField {
    const url: string = val.url;
    const downloadUrl: undefined | string = isJson(val.download_url, "string") ? val.download_url : void 0;
    const vanityUrl: undefined | string = isJson(val.vanity_url, "string") ? val.vanity_url : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const access: undefined | FolderSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeFolderSharedLinkFieldAccessField(val.access);
    const effectiveAccess: FolderSharedLinkFieldEffectiveAccessField = deserializeFolderSharedLinkFieldEffectiveAccessField(val.effective_access);
    const effectivePermission: FolderSharedLinkFieldEffectivePermissionField = deserializeFolderSharedLinkFieldEffectivePermissionField(val.effective_permission);
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    const isPasswordEnabled: boolean = val.is_password_enabled;
    const permissions: undefined | FolderSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeFolderSharedLinkFieldPermissionsField(val.permissions);
    const downloadCount: number = val.download_count;
    const previewCount: number = val.preview_count;
    return { url: url, downloadUrl: downloadUrl, vanityUrl: vanityUrl, vanityName: vanityName, access: access, effectiveAccess: effectiveAccess, effectivePermission: effectivePermission, unsharedAt: unsharedAt, isPasswordEnabled: isPasswordEnabled, permissions: permissions, downloadCount: downloadCount, previewCount: previewCount } satisfies FolderSharedLinkField;
}
export function serializeFolderSharedLinkField(val: FolderSharedLinkField): Json {
    return { ["url"]: val.url, ["download_url"]: val.downloadUrl, ["vanity_url"]: val.vanityUrl, ["vanity_name"]: val.vanityName, ["access"]: val.access == void 0 ? void 0 : serializeFolderSharedLinkFieldAccessField(val.access), ["effective_access"]: serializeFolderSharedLinkFieldEffectiveAccessField(val.effectiveAccess), ["effective_permission"]: serializeFolderSharedLinkFieldEffectivePermissionField(val.effectivePermission), ["unshared_at"]: val.unsharedAt, ["is_password_enabled"]: val.isPasswordEnabled, ["permissions"]: val.permissions == void 0 ? void 0 : serializeFolderSharedLinkFieldPermissionsField(val.permissions), ["download_count"]: val.downloadCount, ["preview_count"]: val.previewCount };
}
export type FolderFolderUploadEmailFieldAccessField = "open" | "collaborators";
export function deserializeFolderFolderUploadEmailFieldAccessField(val: any): FolderFolderUploadEmailFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderFolderUploadEmailFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFolderFolderUploadEmailFieldAccessField(val: FolderFolderUploadEmailFieldAccessField): Json {
    return val;
}
export interface FolderFolderUploadEmailField {
    readonly access?: FolderFolderUploadEmailFieldAccessField;
    readonly email?: string;
}
export function deserializeFolderFolderUploadEmailField(val: any): FolderFolderUploadEmailField {
    const access: undefined | FolderFolderUploadEmailFieldAccessField = val.access == void 0 ? void 0 : deserializeFolderFolderUploadEmailFieldAccessField(val.access);
    const email: undefined | string = isJson(val.email, "string") ? val.email : void 0;
    return { access: access, email: email } satisfies FolderFolderUploadEmailField;
}
export function serializeFolderFolderUploadEmailField(val: FolderFolderUploadEmailField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeFolderFolderUploadEmailFieldAccessField(val.access), ["email"]: val.email };
}
export type FolderItemStatusField = "active" | "trashed" | "deleted";
export function deserializeFolderItemStatusField(val: any): FolderItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFolderItemStatusField(val: FolderItemStatusField): Json {
    return val;
}
export type FolderFullSyncStateField = "synced" | "not_synced" | "partially_synced";
export function deserializeFolderFullSyncStateField(val: any): FolderFullSyncStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderFullSyncStateField\"";
    }
    if (val == "synced") {
        return "synced";
    }
    if (val == "not_synced") {
        return "not_synced";
    }
    if (val == "partially_synced") {
        return "partially_synced";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFolderFullSyncStateField(val: FolderFullSyncStateField): Json {
    return val;
}
export interface FolderFullPermissionsField {
    readonly canDelete: boolean;
    readonly canDownload: boolean;
    readonly canInviteCollaborator: boolean;
    readonly canRename: boolean;
    readonly canSetShareAccess: boolean;
    readonly canShare: boolean;
    readonly canUpload?: boolean;
}
export function deserializeFolderFullPermissionsField(val: any): FolderFullPermissionsField {
    const canDelete: boolean = val.can_delete;
    const canDownload: boolean = val.can_download;
    const canInviteCollaborator: boolean = val.can_invite_collaborator;
    const canRename: boolean = val.can_rename;
    const canSetShareAccess: boolean = val.can_set_share_access;
    const canShare: boolean = val.can_share;
    const canUpload: undefined | boolean = isJson(val.can_upload, "boolean") ? val.can_upload : void 0;
    return { canDelete: canDelete, canDownload: canDownload, canInviteCollaborator: canInviteCollaborator, canRename: canRename, canSetShareAccess: canSetShareAccess, canShare: canShare, canUpload: canUpload } satisfies FolderFullPermissionsField;
}
export function serializeFolderFullPermissionsField(val: FolderFullPermissionsField): Json {
    return { ["can_delete"]: val.canDelete, ["can_download"]: val.canDownload, ["can_invite_collaborator"]: val.canInviteCollaborator, ["can_rename"]: val.canRename, ["can_set_share_access"]: val.canSetShareAccess, ["can_share"]: val.canShare, ["can_upload"]: val.canUpload };
}
export interface FolderFullMetadataField {
}
export function deserializeFolderFullMetadataField(val: any): FolderFullMetadataField {
    return {} satisfies FolderFullMetadataField;
}
export function serializeFolderFullMetadataField(val: FolderFullMetadataField): Json {
    return {};
}
export type FolderFullAllowedSharedLinkAccessLevelsField = "open" | "company" | "collaborators";
export function deserializeFolderFullAllowedSharedLinkAccessLevelsField(val: any): FolderFullAllowedSharedLinkAccessLevelsField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderFullAllowedSharedLinkAccessLevelsField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFolderFullAllowedSharedLinkAccessLevelsField(val: FolderFullAllowedSharedLinkAccessLevelsField): Json {
    return val;
}
export type FolderFullAllowedInviteeRolesField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner";
export function deserializeFolderFullAllowedInviteeRolesField(val: any): FolderFullAllowedInviteeRolesField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderFullAllowedInviteeRolesField\"";
    }
    if (val == "editor") {
        return "editor";
    }
    if (val == "viewer") {
        return "viewer";
    }
    if (val == "previewer") {
        return "previewer";
    }
    if (val == "uploader") {
        return "uploader";
    }
    if (val == "previewer uploader") {
        return "previewer uploader";
    }
    if (val == "viewer uploader") {
        return "viewer uploader";
    }
    if (val == "co-owner") {
        return "co-owner";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFolderFullAllowedInviteeRolesField(val: FolderFullAllowedInviteeRolesField): Json {
    return val;
}
export interface FolderFullWatermarkInfoField {
    readonly isWatermarked?: boolean;
}
export function deserializeFolderFullWatermarkInfoField(val: any): FolderFullWatermarkInfoField {
    const isWatermarked: undefined | boolean = isJson(val.is_watermarked, "boolean") ? val.is_watermarked : void 0;
    return { isWatermarked: isWatermarked } satisfies FolderFullWatermarkInfoField;
}
export function serializeFolderFullWatermarkInfoField(val: FolderFullWatermarkInfoField): Json {
    return { ["is_watermarked"]: val.isWatermarked };
}
export interface FolderFullClassificationField {
    readonly name?: string;
    readonly definition?: string;
    readonly color?: string;
}
export function deserializeFolderFullClassificationField(val: any): FolderFullClassificationField {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const definition: undefined | string = isJson(val.definition, "string") ? val.definition : void 0;
    const color: undefined | string = isJson(val.color, "string") ? val.color : void 0;
    return { name: name, definition: definition, color: color } satisfies FolderFullClassificationField;
}
export function serializeFolderFullClassificationField(val: FolderFullClassificationField): Json {
    return { ["name"]: val.name, ["definition"]: val.definition, ["color"]: val.color };
}
export type FolderBaseTypeField = "folder";
export function deserializeFolderBaseTypeField(val: any): FolderBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderBaseTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFolderBaseTypeField(val: FolderBaseTypeField): Json {
    return val;
}
export interface FolderBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FolderBaseTypeField;
}
export function deserializeFolderBase(val: any): FolderBase {
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
    return { id: id, etag: etag, type: type } satisfies FolderBase;
}
export function serializeFolderBase(val: FolderBase): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeFolderBaseTypeField(val.type) };
}
export type FolderMini = FolderBase & {
    /**
     * The name of the folder. */
    readonly name?: string;
    /**
     * A numeric identifier that represents the most recent user event
     * that has been applied to this item.
     * 
     * This can be used in combination with the `GET /events`-endpoint
     * to filter out user events that would have occurred before this
     * identifier was read.
     * 
     * An example would be where a Box Drive-like application
     * would fetch an item via the API, and then listen to incoming
     * user events for changes to the item. The application would
     * ignore any user events where the `sequence_id` in the event
     * is smaller than or equal to the `sequence_id` in the originally
     * fetched resource. */
    readonly sequenceId?: string;
};
export function deserializeFolderMini(val: any): FolderMini {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
    return { name: name, sequenceId: sequenceId, id: id, etag: etag, type: type } satisfies FolderMini;
}
export function serializeFolderMini(val: FolderMini): Json {
    const base: any = serializeFolderBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FolderMini\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["sequence_id"]: val.sequenceId } };
}
export interface WebLinkPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export function deserializeWebLinkPathCollectionField(val: any): WebLinkPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return deserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies WebLinkPathCollectionField;
}
export function serializeWebLinkPathCollectionField(val: WebLinkPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return serializeFolderMini(item);
        }) as readonly any[] };
}
export interface TrashWebLinkRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export function deserializeTrashWebLinkRestoredPathCollectionField(val: any): TrashWebLinkRestoredPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return deserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashWebLinkRestoredPathCollectionField;
}
export function serializeTrashWebLinkRestoredPathCollectionField(val: TrashWebLinkRestoredPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return serializeFolderMini(item);
        }) as readonly any[] };
}
export interface TrashFolderRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export function deserializeTrashFolderRestoredPathCollectionField(val: any): TrashFolderRestoredPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return deserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashFolderRestoredPathCollectionField;
}
export function serializeTrashFolderRestoredPathCollectionField(val: TrashFolderRestoredPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return serializeFolderMini(item);
        }) as readonly any[] };
}
export interface TrashFileRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export function deserializeTrashFileRestoredPathCollectionField(val: any): TrashFileRestoredPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return deserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashFileRestoredPathCollectionField;
}
export function serializeTrashFileRestoredPathCollectionField(val: TrashFileRestoredPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return serializeFolderMini(item);
        }) as readonly any[] };
}
export interface FolderPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export function deserializeFolderPathCollectionField(val: any): FolderPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return deserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies FolderPathCollectionField;
}
export function serializeFolderPathCollectionField(val: FolderPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return serializeFolderMini(item);
        }) as readonly any[] };
}
export interface FilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export function deserializeFilePathCollectionField(val: any): FilePathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return deserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies FilePathCollectionField;
}
export function serializeFilePathCollectionField(val: FilePathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return serializeFolderMini(item);
        }) as readonly any[] };
}
export interface FolderLockLockedOperationsField {
    readonly move: boolean;
    readonly delete: boolean;
}
export function deserializeFolderLockLockedOperationsField(val: any): FolderLockLockedOperationsField {
    const move: boolean = val.move;
    const _delete: boolean = val.delete;
    return { move: move, delete: _delete } satisfies FolderLockLockedOperationsField;
}
export function serializeFolderLockLockedOperationsField(val: FolderLockLockedOperationsField): Json {
    return { ["move"]: val.move, ["delete"]: val.delete };
}
export type IntegrationMappingTypeField = "integration_mapping";
export function deserializeIntegrationMappingTypeField(val: any): IntegrationMappingTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingTypeField\"";
    }
    if (val == "integration_mapping") {
        return "integration_mapping";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeIntegrationMappingTypeField(val: IntegrationMappingTypeField): Json {
    return val;
}
export interface IntegrationMappingBoxItemField {
}
export function deserializeIntegrationMappingBoxItemField(val: any): IntegrationMappingBoxItemField {
    return {} satisfies IntegrationMappingBoxItemField;
}
export function serializeIntegrationMappingBoxItemField(val: IntegrationMappingBoxItemField): Json {
    return {};
}
export interface IntegrationMappingOptionsField {
}
export function deserializeIntegrationMappingOptionsField(val: any): IntegrationMappingOptionsField {
    return {} satisfies IntegrationMappingOptionsField;
}
export function serializeIntegrationMappingOptionsField(val: IntegrationMappingOptionsField): Json {
    return {};
}
export interface IntegrationMappingCreatedByField {
}
export function deserializeIntegrationMappingCreatedByField(val: any): IntegrationMappingCreatedByField {
    return {} satisfies IntegrationMappingCreatedByField;
}
export function serializeIntegrationMappingCreatedByField(val: IntegrationMappingCreatedByField): Json {
    return {};
}
export interface IntegrationMappingModifiedByField {
}
export function deserializeIntegrationMappingModifiedByField(val: any): IntegrationMappingModifiedByField {
    return {} satisfies IntegrationMappingModifiedByField;
}
export function serializeIntegrationMappingModifiedByField(val: IntegrationMappingModifiedByField): Json {
    return {};
}
export type IntegrationMappingBaseIntegrationTypeField = "slack";
export function deserializeIntegrationMappingBaseIntegrationTypeField(val: any): IntegrationMappingBaseIntegrationTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingBaseIntegrationTypeField\"";
    }
    if (val == "slack") {
        return "slack";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeIntegrationMappingBaseIntegrationTypeField(val: IntegrationMappingBaseIntegrationTypeField): Json {
    return val;
}
export interface IntegrationMappingBase {
    readonly id?: string;
    readonly integrationType?: IntegrationMappingBaseIntegrationTypeField;
}
export function deserializeIntegrationMappingBase(val: any): IntegrationMappingBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const integrationType: undefined | IntegrationMappingBaseIntegrationTypeField = val.integration_type == void 0 ? void 0 : deserializeIntegrationMappingBaseIntegrationTypeField(val.integration_type);
    return { id: id, integrationType: integrationType } satisfies IntegrationMappingBase;
}
export function serializeIntegrationMappingBase(val: IntegrationMappingBase): Json {
    return { ["id"]: val.id, ["integration_type"]: val.integrationType == void 0 ? void 0 : serializeIntegrationMappingBaseIntegrationTypeField(val.integrationType) };
}
export type IntegrationMappingMiniPartnerItemTypeField = "channel";
export function deserializeIntegrationMappingMiniPartnerItemTypeField(val: any): IntegrationMappingMiniPartnerItemTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingMiniPartnerItemTypeField\"";
    }
    if (val == "channel") {
        return "channel";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeIntegrationMappingMiniPartnerItemTypeField(val: IntegrationMappingMiniPartnerItemTypeField): Json {
    return val;
}
export type IntegrationMappingMiniBoxItemTypeField = "folder";
export function deserializeIntegrationMappingMiniBoxItemTypeField(val: any): IntegrationMappingMiniBoxItemTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingMiniBoxItemTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeIntegrationMappingMiniBoxItemTypeField(val: IntegrationMappingMiniBoxItemTypeField): Json {
    return val;
}
export type IntegrationMappingMini = IntegrationMappingBase & {
    /**
     * ID of the mapped partner item */
    readonly partnerItemId?: string;
    /**
     * Domain-specific type of the mapped partner item */
    readonly partnerItemType?: IntegrationMappingMiniPartnerItemTypeField;
    /**
     * ID of the Box item mapped to the object referenced in `partner_item_id` */
    readonly boxItemId?: string;
    /**
     * Type of the Box object referenced in `box_item_id` */
    readonly boxItemType?: IntegrationMappingMiniBoxItemTypeField;
};
export function deserializeIntegrationMappingMini(val: any): IntegrationMappingMini {
    const partnerItemId: undefined | string = isJson(val.partner_item_id, "string") ? val.partner_item_id : void 0;
    const partnerItemType: undefined | IntegrationMappingMiniPartnerItemTypeField = val.partner_item_type == void 0 ? void 0 : deserializeIntegrationMappingMiniPartnerItemTypeField(val.partner_item_type);
    const boxItemId: undefined | string = isJson(val.box_item_id, "string") ? val.box_item_id : void 0;
    const boxItemType: undefined | IntegrationMappingMiniBoxItemTypeField = val.box_item_type == void 0 ? void 0 : deserializeIntegrationMappingMiniBoxItemTypeField(val.box_item_type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const integrationType: undefined | IntegrationMappingBaseIntegrationTypeField = val.integration_type == void 0 ? void 0 : deserializeIntegrationMappingBaseIntegrationTypeField(val.integration_type);
    return { partnerItemId: partnerItemId, partnerItemType: partnerItemType, boxItemId: boxItemId, boxItemType: boxItemType, id: id, integrationType: integrationType } satisfies IntegrationMappingMini;
}
export function serializeIntegrationMappingMini(val: IntegrationMappingMini): Json {
    const base: any = serializeIntegrationMappingBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"IntegrationMappingMini\"";
    }
    return { ...base, ...{ ["partner_item_id"]: val.partnerItemId, ["partner_item_type"]: val.partnerItemType == void 0 ? void 0 : serializeIntegrationMappingMiniPartnerItemTypeField(val.partnerItemType), ["box_item_id"]: val.boxItemId, ["box_item_type"]: val.boxItemType == void 0 ? void 0 : serializeIntegrationMappingMiniBoxItemTypeField(val.boxItemType) } };
}
export type GroupsOrderFieldDirectionField = "ASC" | "DESC";
export function deserializeGroupsOrderFieldDirectionField(val: any): GroupsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGroupsOrderFieldDirectionField(val: GroupsOrderFieldDirectionField): Json {
    return val;
}
export interface GroupsOrderField {
    readonly by?: string;
    readonly direction?: GroupsOrderFieldDirectionField;
}
export function deserializeGroupsOrderField(val: any): GroupsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | GroupsOrderFieldDirectionField = val.direction == void 0 ? void 0 : deserializeGroupsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies GroupsOrderField;
}
export function serializeGroupsOrderField(val: GroupsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : serializeGroupsOrderFieldDirectionField(val.direction) };
}
export type GroupBaseTypeField = "group";
export function deserializeGroupBaseTypeField(val: any): GroupBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupBaseTypeField\"";
    }
    if (val == "group") {
        return "group";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGroupBaseTypeField(val: GroupBaseTypeField): Json {
    return val;
}
export interface GroupBase {
    readonly id?: string;
    readonly type?: GroupBaseTypeField;
}
export function deserializeGroupBase(val: any): GroupBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | GroupBaseTypeField = val.type == void 0 ? void 0 : deserializeGroupBaseTypeField(val.type);
    return { id: id, type: type } satisfies GroupBase;
}
export function serializeGroupBase(val: GroupBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeGroupBaseTypeField(val.type) };
}
export type GroupFullInvitabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export function deserializeGroupFullInvitabilityLevelField(val: any): GroupFullInvitabilityLevelField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupFullInvitabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGroupFullInvitabilityLevelField(val: GroupFullInvitabilityLevelField): Json {
    return val;
}
export type GroupFullMemberViewabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export function deserializeGroupFullMemberViewabilityLevelField(val: any): GroupFullMemberViewabilityLevelField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupFullMemberViewabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGroupFullMemberViewabilityLevelField(val: GroupFullMemberViewabilityLevelField): Json {
    return val;
}
export interface GroupFullPermissionsField {
    readonly canInviteAsCollaborator?: boolean;
}
export function deserializeGroupFullPermissionsField(val: any): GroupFullPermissionsField {
    const canInviteAsCollaborator: undefined | boolean = isJson(val.can_invite_as_collaborator, "boolean") ? val.can_invite_as_collaborator : void 0;
    return { canInviteAsCollaborator: canInviteAsCollaborator } satisfies GroupFullPermissionsField;
}
export function serializeGroupFullPermissionsField(val: GroupFullPermissionsField): Json {
    return { ["can_invite_as_collaborator"]: val.canInviteAsCollaborator };
}
export type GroupMiniGroupTypeField = "managed_group" | "all_users_group";
export function deserializeGroupMiniGroupTypeField(val: any): GroupMiniGroupTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupMiniGroupTypeField\"";
    }
    if (val == "managed_group") {
        return "managed_group";
    }
    if (val == "all_users_group") {
        return "all_users_group";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGroupMiniGroupTypeField(val: GroupMiniGroupTypeField): Json {
    return val;
}
export type GroupMini = GroupBase & {
    /**
     * The name of the group */
    readonly name?: string;
    /**
     * The type of the group. */
    readonly groupType?: GroupMiniGroupTypeField;
};
export function deserializeGroupMini(val: any): GroupMini {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const groupType: undefined | GroupMiniGroupTypeField = val.group_type == void 0 ? void 0 : deserializeGroupMiniGroupTypeField(val.group_type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | GroupBaseTypeField = val.type == void 0 ? void 0 : deserializeGroupBaseTypeField(val.type);
    return { name: name, groupType: groupType, id: id, type: type } satisfies GroupMini;
}
export function serializeGroupMini(val: GroupMini): Json {
    const base: any = serializeGroupBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"GroupMini\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["group_type"]: val.groupType == void 0 ? void 0 : serializeGroupMiniGroupTypeField(val.groupType) } };
}
export interface Groups {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly GroupsOrderField[];
    readonly entries?: readonly GroupMini[];
}
export function deserializeGroups(val: any): Groups {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly GroupsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return deserializeGroupsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly GroupMini[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeGroupMini(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Groups;
}
export function serializeGroups(val: Groups): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: GroupsOrderField): any {
            return serializeGroupsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: GroupMini): any {
            return serializeGroupMini(item);
        }) as readonly any[] };
}
export type Group = GroupMini & {
    /**
     * When the group object was created */
    readonly createdAt?: string;
    /**
     * When the group object was last modified */
    readonly modifiedAt?: string;
};
export function deserializeGroup(val: any): Group {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const groupType: undefined | GroupMiniGroupTypeField = val.group_type == void 0 ? void 0 : deserializeGroupMiniGroupTypeField(val.group_type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | GroupBaseTypeField = val.type == void 0 ? void 0 : deserializeGroupBaseTypeField(val.type);
    return { createdAt: createdAt, modifiedAt: modifiedAt, name: name, groupType: groupType, id: id, type: type } satisfies Group;
}
export function serializeGroup(val: Group): Json {
    const base: any = serializeGroupMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"Group\"";
    }
    return { ...base, ...{ ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt } };
}
export type GroupFull = Group & {
    /**
     * Keeps track of which external source this group is
     * coming from (e.g. "Active Directory", "Google Groups",
     * "Facebook Groups").  Setting this will
     * also prevent Box users from editing the group name
     * and its members directly via the Box web application.
     * This is desirable for one-way syncing of groups. */
    readonly provenance?: string;
    /**
     * An arbitrary identifier that can be used by
     * external group sync tools to link this Box Group to
     * an external group. Example values of this field
     * could be an Active Directory Object ID or a Google
     * Group ID.  We recommend you use of this field in
     * order to avoid issues when group names are updated in
     * either Box or external systems. */
    readonly externalSyncIdentifier?: string;
    /**
     * Human readable description of the group. */
    readonly description?: string;
    /**
     * Specifies who can invite the group to collaborate
     * on items.
     * 
     * When set to `admins_only` the enterprise admin, co-admins,
     * and the group's admin can invite the group.
     * 
     * When set to `admins_and_members` all the admins listed
     * above and group members can invite the group.
     * 
     * When set to `all_managed_users` all managed users in the
     * enterprise can invite the group. */
    readonly invitabilityLevel?: GroupFullInvitabilityLevelField;
    /**
     * Specifies who can view the members of the group
     * (Get Memberships for Group).
     * 
     * * `admins_only` - the enterprise admin, co-admins, group's
     *   group admin
     * * `admins_and_members` - all admins and group members
     * * `all_managed_users` - all managed users in the
     *   enterprise */
    readonly memberViewabilityLevel?: GroupFullMemberViewabilityLevelField;
    readonly permissions?: GroupFullPermissionsField;
};
export function deserializeGroupFull(val: any): GroupFull {
    const provenance: undefined | string = isJson(val.provenance, "string") ? val.provenance : void 0;
    const externalSyncIdentifier: undefined | string = isJson(val.external_sync_identifier, "string") ? val.external_sync_identifier : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const invitabilityLevel: undefined | GroupFullInvitabilityLevelField = val.invitability_level == void 0 ? void 0 : deserializeGroupFullInvitabilityLevelField(val.invitability_level);
    const memberViewabilityLevel: undefined | GroupFullMemberViewabilityLevelField = val.member_viewability_level == void 0 ? void 0 : deserializeGroupFullMemberViewabilityLevelField(val.member_viewability_level);
    const permissions: undefined | GroupFullPermissionsField = val.permissions == void 0 ? void 0 : deserializeGroupFullPermissionsField(val.permissions);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const groupType: undefined | GroupMiniGroupTypeField = val.group_type == void 0 ? void 0 : deserializeGroupMiniGroupTypeField(val.group_type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | GroupBaseTypeField = val.type == void 0 ? void 0 : deserializeGroupBaseTypeField(val.type);
    return { provenance: provenance, externalSyncIdentifier: externalSyncIdentifier, description: description, invitabilityLevel: invitabilityLevel, memberViewabilityLevel: memberViewabilityLevel, permissions: permissions, createdAt: createdAt, modifiedAt: modifiedAt, name: name, groupType: groupType, id: id, type: type } satisfies GroupFull;
}
export function serializeGroupFull(val: GroupFull): Json {
    const base: any = serializeGroup(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"GroupFull\"";
    }
    return { ...base, ...{ ["provenance"]: val.provenance, ["external_sync_identifier"]: val.externalSyncIdentifier, ["description"]: val.description, ["invitability_level"]: val.invitabilityLevel == void 0 ? void 0 : serializeGroupFullInvitabilityLevelField(val.invitabilityLevel), ["member_viewability_level"]: val.memberViewabilityLevel == void 0 ? void 0 : serializeGroupFullMemberViewabilityLevelField(val.memberViewabilityLevel), ["permissions"]: val.permissions == void 0 ? void 0 : serializeGroupFullPermissionsField(val.permissions) } };
}
export type GroupMembershipTypeField = "group_membership";
export function deserializeGroupMembershipTypeField(val: any): GroupMembershipTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupMembershipTypeField\"";
    }
    if (val == "group_membership") {
        return "group_membership";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGroupMembershipTypeField(val: GroupMembershipTypeField): Json {
    return val;
}
export type GroupMembershipRoleField = "member" | "admin";
export function deserializeGroupMembershipRoleField(val: any): GroupMembershipRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupMembershipRoleField\"";
    }
    if (val == "member") {
        return "member";
    }
    if (val == "admin") {
        return "admin";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGroupMembershipRoleField(val: GroupMembershipRoleField): Json {
    return val;
}
export type GroupMembershipsOrderFieldDirectionField = "ASC" | "DESC";
export function deserializeGroupMembershipsOrderFieldDirectionField(val: any): GroupMembershipsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupMembershipsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGroupMembershipsOrderFieldDirectionField(val: GroupMembershipsOrderFieldDirectionField): Json {
    return val;
}
export interface GroupMembershipsOrderField {
    readonly by?: string;
    readonly direction?: GroupMembershipsOrderFieldDirectionField;
}
export function deserializeGroupMembershipsOrderField(val: any): GroupMembershipsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | GroupMembershipsOrderFieldDirectionField = val.direction == void 0 ? void 0 : deserializeGroupMembershipsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies GroupMembershipsOrderField;
}
export function serializeGroupMembershipsOrderField(val: GroupMembershipsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : serializeGroupMembershipsOrderFieldDirectionField(val.direction) };
}
export type InviteTypeField = "invite";
export function deserializeInviteTypeField(val: any): InviteTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"InviteTypeField\"";
    }
    if (val == "invite") {
        return "invite";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeInviteTypeField(val: InviteTypeField): Json {
    return val;
}
export type InviteInvitedToFieldTypeField = "enterprise";
export function deserializeInviteInvitedToFieldTypeField(val: any): InviteInvitedToFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"InviteInvitedToFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeInviteInvitedToFieldTypeField(val: InviteInvitedToFieldTypeField): Json {
    return val;
}
export interface InviteInvitedToField {
    readonly id?: string;
    readonly type?: InviteInvitedToFieldTypeField;
    readonly name?: string;
}
export function deserializeInviteInvitedToField(val: any): InviteInvitedToField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | InviteInvitedToFieldTypeField = val.type == void 0 ? void 0 : deserializeInviteInvitedToFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies InviteInvitedToField;
}
export function serializeInviteInvitedToField(val: InviteInvitedToField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeInviteInvitedToFieldTypeField(val.type), ["name"]: val.name };
}
export type ItemsOrderFieldDirectionField = "ASC" | "DESC";
export function deserializeItemsOrderFieldDirectionField(val: any): ItemsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ItemsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeItemsOrderFieldDirectionField(val: ItemsOrderFieldDirectionField): Json {
    return val;
}
export interface ItemsOrderField {
    readonly by?: string;
    readonly direction?: ItemsOrderFieldDirectionField;
}
export function deserializeItemsOrderField(val: any): ItemsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | ItemsOrderFieldDirectionField = val.direction == void 0 ? void 0 : deserializeItemsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies ItemsOrderField;
}
export function serializeItemsOrderField(val: ItemsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : serializeItemsOrderFieldDirectionField(val.direction) };
}
export type LegalHoldPolicyStatusField = "active" | "applying" | "releasing" | "released";
export function deserializeLegalHoldPolicyStatusField(val: any): LegalHoldPolicyStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"LegalHoldPolicyStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "applying") {
        return "applying";
    }
    if (val == "releasing") {
        return "releasing";
    }
    if (val == "released") {
        return "released";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeLegalHoldPolicyStatusField(val: LegalHoldPolicyStatusField): Json {
    return val;
}
export interface LegalHoldPolicyAssignmentCountsField {
    readonly user?: number;
    readonly folder?: number;
    readonly file?: number;
    readonly fileVersion?: number;
}
export function deserializeLegalHoldPolicyAssignmentCountsField(val: any): LegalHoldPolicyAssignmentCountsField {
    const user: undefined | number = isJson(val.user, "number") ? val.user : void 0;
    const folder: undefined | number = isJson(val.folder, "number") ? val.folder : void 0;
    const file: undefined | number = isJson(val.file, "number") ? val.file : void 0;
    const fileVersion: undefined | number = isJson(val.file_version, "number") ? val.file_version : void 0;
    return { user: user, folder: folder, file: file, fileVersion: fileVersion } satisfies LegalHoldPolicyAssignmentCountsField;
}
export function serializeLegalHoldPolicyAssignmentCountsField(val: LegalHoldPolicyAssignmentCountsField): Json {
    return { ["user"]: val.user, ["folder"]: val.folder, ["file"]: val.file, ["file_version"]: val.fileVersion };
}
export type LegalHoldPolicyMiniTypeField = "legal_hold_policy";
export function deserializeLegalHoldPolicyMiniTypeField(val: any): LegalHoldPolicyMiniTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"LegalHoldPolicyMiniTypeField\"";
    }
    if (val == "legal_hold_policy") {
        return "legal_hold_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeLegalHoldPolicyMiniTypeField(val: LegalHoldPolicyMiniTypeField): Json {
    return val;
}
export interface LegalHoldPolicyMini {
    readonly id?: string;
    readonly type?: LegalHoldPolicyMiniTypeField;
}
export function deserializeLegalHoldPolicyMini(val: any): LegalHoldPolicyMini {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | LegalHoldPolicyMiniTypeField = val.type == void 0 ? void 0 : deserializeLegalHoldPolicyMiniTypeField(val.type);
    return { id: id, type: type } satisfies LegalHoldPolicyMini;
}
export function serializeLegalHoldPolicyMini(val: LegalHoldPolicyMini): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeLegalHoldPolicyMiniTypeField(val.type) };
}
export type LegalHoldPolicyAssignmentBaseTypeField = "legal_hold_policy_assignment";
export function deserializeLegalHoldPolicyAssignmentBaseTypeField(val: any): LegalHoldPolicyAssignmentBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"LegalHoldPolicyAssignmentBaseTypeField\"";
    }
    if (val == "legal_hold_policy_assignment") {
        return "legal_hold_policy_assignment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeLegalHoldPolicyAssignmentBaseTypeField(val: LegalHoldPolicyAssignmentBaseTypeField): Json {
    return val;
}
export interface LegalHoldPolicyAssignmentBase {
    readonly id?: string;
    readonly type?: LegalHoldPolicyAssignmentBaseTypeField;
}
export function deserializeLegalHoldPolicyAssignmentBase(val: any): LegalHoldPolicyAssignmentBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | LegalHoldPolicyAssignmentBaseTypeField = val.type == void 0 ? void 0 : deserializeLegalHoldPolicyAssignmentBaseTypeField(val.type);
    return { id: id, type: type } satisfies LegalHoldPolicyAssignmentBase;
}
export function serializeLegalHoldPolicyAssignmentBase(val: LegalHoldPolicyAssignmentBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeLegalHoldPolicyAssignmentBaseTypeField(val.type) };
}
export interface LegalHoldPolicyAssignments {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly LegalHoldPolicyAssignmentBase[];
}
export function deserializeLegalHoldPolicyAssignments(val: any): LegalHoldPolicyAssignments {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly LegalHoldPolicyAssignmentBase[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeLegalHoldPolicyAssignmentBase(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies LegalHoldPolicyAssignments;
}
export function serializeLegalHoldPolicyAssignments(val: LegalHoldPolicyAssignments): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: LegalHoldPolicyAssignmentBase): any {
            return serializeLegalHoldPolicyAssignmentBase(item);
        }) as readonly any[] };
}
export interface Metadata {
}
export function deserializeMetadata(val: any): Metadata {
    return {} satisfies Metadata;
}
export function serializeMetadata(val: Metadata): Json {
    return {};
}
export interface Metadatas {
    readonly entries?: readonly Metadata[];
    readonly limit?: number;
}
export function deserializeMetadatas(val: any): Metadatas {
    const entries: undefined | readonly Metadata[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeMetadata(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { entries: entries, limit: limit } satisfies Metadatas;
}
export function serializeMetadatas(val: Metadatas): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Metadata): any {
            return serializeMetadata(item);
        }) as readonly any[], ["limit"]: val.limit };
}
export type MetadataFull = Metadata & {
    /**
     * Whether the user can edit this metadata instance. */
    readonly canEdit?: boolean;
    /**
     * A UUID to identify the metadata instance. */
    readonly id?: string;
    /**
     * A unique identifier for the "type" of this instance. This is an
     * internal system property and should not be used by a client
     * application. */
    readonly type?: string;
    /**
     * The last-known version of the template of the object. This is an
     * internal system property and should not be used by a client
     * application. */
    readonly typeVersion?: number;
};
export function deserializeMetadataFull(val: any): MetadataFull {
    const canEdit: undefined | boolean = isJson(val.$canEdit, "boolean") ? val.$canEdit : void 0;
    const id: undefined | string = isJson(val.$id, "string") ? val.$id : void 0;
    const type: undefined | string = isJson(val.$type, "string") ? val.$type : void 0;
    const typeVersion: undefined | number = isJson(val.$typeVersion, "number") ? val.$typeVersion : void 0;
    return { canEdit: canEdit, id: id, type: type, typeVersion: typeVersion } satisfies MetadataFull;
}
export function serializeMetadataFull(val: MetadataFull): Json {
    const base: any = serializeMetadata(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"MetadataFull\"";
    }
    return { ...base, ...{ ["$canEdit"]: val.canEdit, ["$id"]: val.id, ["$type"]: val.type, ["$typeVersion"]: val.typeVersion } };
}
export interface MetadataBase {
    readonly parent?: string;
    readonly template?: string;
    readonly scope?: string;
    readonly version?: number;
}
export function deserializeMetadataBase(val: any): MetadataBase {
    const parent: undefined | string = isJson(val.$parent, "string") ? val.$parent : void 0;
    const template: undefined | string = isJson(val.$template, "string") ? val.$template : void 0;
    const scope: undefined | string = isJson(val.$scope, "string") ? val.$scope : void 0;
    const version: undefined | number = isJson(val.$version, "number") ? val.$version : void 0;
    return { parent: parent, template: template, scope: scope, version: version } satisfies MetadataBase;
}
export function serializeMetadataBase(val: MetadataBase): Json {
    return { ["$parent"]: val.parent, ["$template"]: val.template, ["$scope"]: val.scope, ["$version"]: val.version };
}
export type MetadataCascadePolicyTypeField = "metadata_cascade_policy";
export function deserializeMetadataCascadePolicyTypeField(val: any): MetadataCascadePolicyTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataCascadePolicyTypeField\"";
    }
    if (val == "metadata_cascade_policy") {
        return "metadata_cascade_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeMetadataCascadePolicyTypeField(val: MetadataCascadePolicyTypeField): Json {
    return val;
}
export type MetadataCascadePolicyOwnerEnterpriseFieldTypeField = "enterprise";
export function deserializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val: any): MetadataCascadePolicyOwnerEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataCascadePolicyOwnerEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val: MetadataCascadePolicyOwnerEnterpriseFieldTypeField): Json {
    return val;
}
export interface MetadataCascadePolicyOwnerEnterpriseField {
    readonly type?: MetadataCascadePolicyOwnerEnterpriseFieldTypeField;
    readonly id?: string;
}
export function deserializeMetadataCascadePolicyOwnerEnterpriseField(val: any): MetadataCascadePolicyOwnerEnterpriseField {
    const type: undefined | MetadataCascadePolicyOwnerEnterpriseFieldTypeField = val.type == void 0 ? void 0 : deserializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies MetadataCascadePolicyOwnerEnterpriseField;
}
export function serializeMetadataCascadePolicyOwnerEnterpriseField(val: MetadataCascadePolicyOwnerEnterpriseField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val.type), ["id"]: val.id };
}
export type MetadataCascadePolicyParentFieldTypeField = "folder";
export function deserializeMetadataCascadePolicyParentFieldTypeField(val: any): MetadataCascadePolicyParentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataCascadePolicyParentFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeMetadataCascadePolicyParentFieldTypeField(val: MetadataCascadePolicyParentFieldTypeField): Json {
    return val;
}
export interface MetadataCascadePolicyParentField {
    readonly type?: MetadataCascadePolicyParentFieldTypeField;
    readonly id?: string;
}
export function deserializeMetadataCascadePolicyParentField(val: any): MetadataCascadePolicyParentField {
    const type: undefined | MetadataCascadePolicyParentFieldTypeField = val.type == void 0 ? void 0 : deserializeMetadataCascadePolicyParentFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies MetadataCascadePolicyParentField;
}
export function serializeMetadataCascadePolicyParentField(val: MetadataCascadePolicyParentField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeMetadataCascadePolicyParentFieldTypeField(val.type), ["id"]: val.id };
}
export type MetadataCascadePolicyScopeField = "global" | "enterprise_*";
export function deserializeMetadataCascadePolicyScopeField(val: any): MetadataCascadePolicyScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataCascadePolicyScopeField\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise_*") {
        return "enterprise_*";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeMetadataCascadePolicyScopeField(val: MetadataCascadePolicyScopeField): Json {
    return val;
}
export interface MetadataCascadePolicy {
    readonly id?: string;
    readonly type?: MetadataCascadePolicyTypeField;
    readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
    readonly parent?: MetadataCascadePolicyParentField;
    readonly scope?: MetadataCascadePolicyScopeField;
    readonly templateKey?: string;
}
export function deserializeMetadataCascadePolicy(val: any): MetadataCascadePolicy {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | MetadataCascadePolicyTypeField = val.type == void 0 ? void 0 : deserializeMetadataCascadePolicyTypeField(val.type);
    const ownerEnterprise: undefined | MetadataCascadePolicyOwnerEnterpriseField = val.owner_enterprise == void 0 ? void 0 : deserializeMetadataCascadePolicyOwnerEnterpriseField(val.owner_enterprise);
    const parent: undefined | MetadataCascadePolicyParentField = val.parent == void 0 ? void 0 : deserializeMetadataCascadePolicyParentField(val.parent);
    const scope: undefined | MetadataCascadePolicyScopeField = val.scope == void 0 ? void 0 : deserializeMetadataCascadePolicyScopeField(val.scope);
    const templateKey: undefined | string = isJson(val.templateKey, "string") ? val.templateKey : void 0;
    return { id: id, type: type, ownerEnterprise: ownerEnterprise, parent: parent, scope: scope, templateKey: templateKey } satisfies MetadataCascadePolicy;
}
export function serializeMetadataCascadePolicy(val: MetadataCascadePolicy): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeMetadataCascadePolicyTypeField(val.type), ["owner_enterprise"]: val.ownerEnterprise == void 0 ? void 0 : serializeMetadataCascadePolicyOwnerEnterpriseField(val.ownerEnterprise), ["parent"]: val.parent == void 0 ? void 0 : serializeMetadataCascadePolicyParentField(val.parent), ["scope"]: val.scope == void 0 ? void 0 : serializeMetadataCascadePolicyScopeField(val.scope), ["templateKey"]: val.templateKey };
}
export interface MetadataCascadePolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly MetadataCascadePolicy[];
}
export function deserializeMetadataCascadePolicies(val: any): MetadataCascadePolicies {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly MetadataCascadePolicy[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeMetadataCascadePolicy(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies MetadataCascadePolicies;
}
export function serializeMetadataCascadePolicies(val: MetadataCascadePolicies): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: MetadataCascadePolicy): any {
            return serializeMetadataCascadePolicy(item);
        }) as readonly any[] };
}
export type MetadataQueryIndexStatusField = "building" | "active" | "disabled";
export function deserializeMetadataQueryIndexStatusField(val: any): MetadataQueryIndexStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataQueryIndexStatusField\"";
    }
    if (val == "building") {
        return "building";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "disabled") {
        return "disabled";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeMetadataQueryIndexStatusField(val: MetadataQueryIndexStatusField): Json {
    return val;
}
export type MetadataQueryIndexFieldsFieldSortDirectionField = "asc" | "desc";
export function deserializeMetadataQueryIndexFieldsFieldSortDirectionField(val: any): MetadataQueryIndexFieldsFieldSortDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataQueryIndexFieldsFieldSortDirectionField\"";
    }
    if (val == "asc") {
        return "asc";
    }
    if (val == "desc") {
        return "desc";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeMetadataQueryIndexFieldsFieldSortDirectionField(val: MetadataQueryIndexFieldsFieldSortDirectionField): Json {
    return val;
}
export interface MetadataQueryIndexFieldsField {
    readonly key?: string;
    readonly sortDirection?: MetadataQueryIndexFieldsFieldSortDirectionField;
}
export function deserializeMetadataQueryIndexFieldsField(val: any): MetadataQueryIndexFieldsField {
    const key: undefined | string = isJson(val.key, "string") ? val.key : void 0;
    const sortDirection: undefined | MetadataQueryIndexFieldsFieldSortDirectionField = val.sort_direction == void 0 ? void 0 : deserializeMetadataQueryIndexFieldsFieldSortDirectionField(val.sort_direction);
    return { key: key, sortDirection: sortDirection } satisfies MetadataQueryIndexFieldsField;
}
export function serializeMetadataQueryIndexFieldsField(val: MetadataQueryIndexFieldsField): Json {
    return { ["key"]: val.key, ["sort_direction"]: val.sortDirection == void 0 ? void 0 : serializeMetadataQueryIndexFieldsFieldSortDirectionField(val.sortDirection) };
}
export interface MetadataQueryIndex {
    readonly id?: string;
    readonly type: string;
    readonly status: MetadataQueryIndexStatusField;
    readonly fields?: readonly MetadataQueryIndexFieldsField[];
}
export function deserializeMetadataQueryIndex(val: any): MetadataQueryIndex {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: string = val.type;
    const status: MetadataQueryIndexStatusField = deserializeMetadataQueryIndexStatusField(val.status);
    const fields: undefined | readonly MetadataQueryIndexFieldsField[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): any {
        return deserializeMetadataQueryIndexFieldsField(itm);
    }) as readonly any[] : void 0;
    return { id: id, type: type, status: status, fields: fields } satisfies MetadataQueryIndex;
}
export function serializeMetadataQueryIndex(val: MetadataQueryIndex): Json {
    return { ["id"]: val.id, ["type"]: val.type, ["status"]: serializeMetadataQueryIndexStatusField(val.status), ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: MetadataQueryIndexFieldsField): any {
            return serializeMetadataQueryIndexFieldsField(item);
        }) as readonly any[] };
}
export interface MetadataQueryIndices {
    readonly entries?: readonly MetadataQueryIndex[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export function deserializeMetadataQueryIndices(val: any): MetadataQueryIndices {
    const entries: undefined | readonly MetadataQueryIndex[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeMetadataQueryIndex(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | string = isJson(val.next_marker, "string") ? val.next_marker : void 0;
    return { entries: entries, limit: limit, nextMarker: nextMarker } satisfies MetadataQueryIndices;
}
export function serializeMetadataQueryIndices(val: MetadataQueryIndices): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: MetadataQueryIndex): any {
            return serializeMetadataQueryIndex(item);
        }) as readonly any[], ["limit"]: val.limit, ["next_marker"]: val.nextMarker };
}
export type MetadataTemplateTypeField = "metadata_template";
export function deserializeMetadataTemplateTypeField(val: any): MetadataTemplateTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataTemplateTypeField\"";
    }
    if (val == "metadata_template") {
        return "metadata_template";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeMetadataTemplateTypeField(val: MetadataTemplateTypeField): Json {
    return val;
}
export type MetadataTemplateFieldsFieldTypeField = "string" | "float" | "date" | "enum" | "multiSelect";
export function deserializeMetadataTemplateFieldsFieldTypeField(val: any): MetadataTemplateFieldsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataTemplateFieldsFieldTypeField\"";
    }
    if (val == "string") {
        return "string";
    }
    if (val == "float") {
        return "float";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "enum") {
        return "enum";
    }
    if (val == "multiSelect") {
        return "multiSelect";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeMetadataTemplateFieldsFieldTypeField(val: MetadataTemplateFieldsFieldTypeField): Json {
    return val;
}
export interface MetadataTemplateFieldsFieldOptionsField {
    readonly key: string;
    readonly id?: string;
}
export function deserializeMetadataTemplateFieldsFieldOptionsField(val: any): MetadataTemplateFieldsFieldOptionsField {
    const key: string = val.key;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { key: key, id: id } satisfies MetadataTemplateFieldsFieldOptionsField;
}
export function serializeMetadataTemplateFieldsFieldOptionsField(val: MetadataTemplateFieldsFieldOptionsField): Json {
    return { ["key"]: val.key, ["id"]: val.id };
}
export interface MetadataTemplateFieldsField {
    readonly type: MetadataTemplateFieldsFieldTypeField;
    readonly key: string;
    readonly displayName: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly options?: readonly MetadataTemplateFieldsFieldOptionsField[];
    readonly id?: string;
}
export function deserializeMetadataTemplateFieldsField(val: any): MetadataTemplateFieldsField {
    const type: MetadataTemplateFieldsFieldTypeField = deserializeMetadataTemplateFieldsFieldTypeField(val.type);
    const key: string = val.key;
    const displayName: string = val.displayName;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const options: undefined | readonly MetadataTemplateFieldsFieldOptionsField[] = isJson(val.options, "array") ? val.options.map(function (itm: Json): any {
        return deserializeMetadataTemplateFieldsFieldOptionsField(itm);
    }) as readonly any[] : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, key: key, displayName: displayName, description: description, hidden: hidden, options: options, id: id } satisfies MetadataTemplateFieldsField;
}
export function serializeMetadataTemplateFieldsField(val: MetadataTemplateFieldsField): Json {
    return { ["type"]: serializeMetadataTemplateFieldsFieldTypeField(val.type), ["key"]: val.key, ["displayName"]: val.displayName, ["description"]: val.description, ["hidden"]: val.hidden, ["options"]: val.options == void 0 ? void 0 : val.options.map(function (item: MetadataTemplateFieldsFieldOptionsField): any {
            return serializeMetadataTemplateFieldsFieldOptionsField(item);
        }) as readonly any[], ["id"]: val.id };
}
export interface MetadataTemplate {
    readonly id?: string;
    readonly type: MetadataTemplateTypeField;
    readonly scope?: string;
    readonly templateKey?: string;
    readonly displayName?: string;
    readonly hidden?: boolean;
    readonly fields?: readonly MetadataTemplateFieldsField[];
    readonly copyInstanceOnItemCopy?: boolean;
}
export function deserializeMetadataTemplate(val: any): MetadataTemplate {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: MetadataTemplateTypeField = deserializeMetadataTemplateTypeField(val.type);
    const scope: undefined | string = isJson(val.scope, "string") ? val.scope : void 0;
    const templateKey: undefined | string = isJson(val.templateKey, "string") ? val.templateKey : void 0;
    const displayName: undefined | string = isJson(val.displayName, "string") ? val.displayName : void 0;
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const fields: undefined | readonly MetadataTemplateFieldsField[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): any {
        return deserializeMetadataTemplateFieldsField(itm);
    }) as readonly any[] : void 0;
    const copyInstanceOnItemCopy: undefined | boolean = isJson(val.copyInstanceOnItemCopy, "boolean") ? val.copyInstanceOnItemCopy : void 0;
    return { id: id, type: type, scope: scope, templateKey: templateKey, displayName: displayName, hidden: hidden, fields: fields, copyInstanceOnItemCopy: copyInstanceOnItemCopy } satisfies MetadataTemplate;
}
export function serializeMetadataTemplate(val: MetadataTemplate): Json {
    return { ["id"]: val.id, ["type"]: serializeMetadataTemplateTypeField(val.type), ["scope"]: val.scope, ["templateKey"]: val.templateKey, ["displayName"]: val.displayName, ["hidden"]: val.hidden, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: MetadataTemplateFieldsField): any {
            return serializeMetadataTemplateFieldsField(item);
        }) as readonly any[], ["copyInstanceOnItemCopy"]: val.copyInstanceOnItemCopy };
}
export interface MetadataTemplates {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly MetadataTemplate[];
}
export function deserializeMetadataTemplates(val: any): MetadataTemplates {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly MetadataTemplate[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeMetadataTemplate(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies MetadataTemplates;
}
export function serializeMetadataTemplates(val: MetadataTemplates): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: MetadataTemplate): any {
            return serializeMetadataTemplate(item);
        }) as readonly any[] };
}
export interface RealtimeServer {
    readonly type?: string;
    readonly url?: string;
    readonly ttl?: number;
    readonly maxRetries?: number;
    readonly retryTimeout?: number;
}
export function deserializeRealtimeServer(val: any): RealtimeServer {
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const ttl: undefined | number = isJson(val.ttl, "number") ? val.ttl : void 0;
    const maxRetries: undefined | number = isJson(val.max_retries, "number") ? val.max_retries : void 0;
    const retryTimeout: undefined | number = isJson(val.retry_timeout, "number") ? val.retry_timeout : void 0;
    return { type: type, url: url, ttl: ttl, maxRetries: maxRetries, retryTimeout: retryTimeout } satisfies RealtimeServer;
}
export function serializeRealtimeServer(val: RealtimeServer): Json {
    return { ["type"]: val.type, ["url"]: val.url, ["ttl"]: val.ttl, ["max_retries"]: val.maxRetries, ["retry_timeout"]: val.retryTimeout };
}
export interface RealtimeServers {
    readonly chunkSize?: number;
    readonly entries?: readonly RealtimeServer[];
}
export function deserializeRealtimeServers(val: any): RealtimeServers {
    const chunkSize: undefined | number = isJson(val.chunk_size, "number") ? val.chunk_size : void 0;
    const entries: undefined | readonly RealtimeServer[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeRealtimeServer(itm);
    }) as readonly any[] : void 0;
    return { chunkSize: chunkSize, entries: entries } satisfies RealtimeServers;
}
export function serializeRealtimeServers(val: RealtimeServers): Json {
    return { ["chunk_size"]: val.chunkSize, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: RealtimeServer): any {
            return serializeRealtimeServer(item);
        }) as readonly any[] };
}
export type RecentItemInteractionTypeField = "item_preview" | "item_upload" | "item_comment" | "item_open" | "item_modify";
export function deserializeRecentItemInteractionTypeField(val: any): RecentItemInteractionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RecentItemInteractionTypeField\"";
    }
    if (val == "item_preview") {
        return "item_preview";
    }
    if (val == "item_upload") {
        return "item_upload";
    }
    if (val == "item_comment") {
        return "item_comment";
    }
    if (val == "item_open") {
        return "item_open";
    }
    if (val == "item_modify") {
        return "item_modify";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeRecentItemInteractionTypeField(val: RecentItemInteractionTypeField): Json {
    return val;
}
export type RetentionPolicyPolicyTypeField = "finite" | "indefinite";
export function deserializeRetentionPolicyPolicyTypeField(val: any): RetentionPolicyPolicyTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyPolicyTypeField\"";
    }
    if (val == "finite") {
        return "finite";
    }
    if (val == "indefinite") {
        return "indefinite";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeRetentionPolicyPolicyTypeField(val: RetentionPolicyPolicyTypeField): Json {
    return val;
}
export type RetentionPolicyRetentionTypeField = "modifiable" | "non-modifiable";
export function deserializeRetentionPolicyRetentionTypeField(val: any): RetentionPolicyRetentionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyRetentionTypeField\"";
    }
    if (val == "modifiable") {
        return "modifiable";
    }
    if (val == "non-modifiable") {
        return "non-modifiable";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeRetentionPolicyRetentionTypeField(val: RetentionPolicyRetentionTypeField): Json {
    return val;
}
export type RetentionPolicyStatusField = "active" | "retired";
export function deserializeRetentionPolicyStatusField(val: any): RetentionPolicyStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "retired") {
        return "retired";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeRetentionPolicyStatusField(val: RetentionPolicyStatusField): Json {
    return val;
}
export interface RetentionPolicyAssignmentCountsField {
    readonly enterprise?: number;
    readonly folder?: number;
    readonly metadataTemplate?: number;
}
export function deserializeRetentionPolicyAssignmentCountsField(val: any): RetentionPolicyAssignmentCountsField {
    const enterprise: undefined | number = isJson(val.enterprise, "number") ? val.enterprise : void 0;
    const folder: undefined | number = isJson(val.folder, "number") ? val.folder : void 0;
    const metadataTemplate: undefined | number = isJson(val.metadata_template, "number") ? val.metadata_template : void 0;
    return { enterprise: enterprise, folder: folder, metadataTemplate: metadataTemplate } satisfies RetentionPolicyAssignmentCountsField;
}
export function serializeRetentionPolicyAssignmentCountsField(val: RetentionPolicyAssignmentCountsField): Json {
    return { ["enterprise"]: val.enterprise, ["folder"]: val.folder, ["metadata_template"]: val.metadataTemplate };
}
export type RetentionPolicyMiniDispositionActionField = "permanently_delete" | "remove_retention";
export function deserializeRetentionPolicyMiniDispositionActionField(val: any): RetentionPolicyMiniDispositionActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyMiniDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeRetentionPolicyMiniDispositionActionField(val: RetentionPolicyMiniDispositionActionField): Json {
    return val;
}
export type RetentionPolicyBaseTypeField = "retention_policy";
export function deserializeRetentionPolicyBaseTypeField(val: any): RetentionPolicyBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyBaseTypeField\"";
    }
    if (val == "retention_policy") {
        return "retention_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeRetentionPolicyBaseTypeField(val: RetentionPolicyBaseTypeField): Json {
    return val;
}
export interface RetentionPolicyBase {
    readonly id: string;
    readonly type: RetentionPolicyBaseTypeField;
}
export function deserializeRetentionPolicyBase(val: any): RetentionPolicyBase {
    const id: string = val.id;
    const type: RetentionPolicyBaseTypeField = deserializeRetentionPolicyBaseTypeField(val.type);
    return { id: id, type: type } satisfies RetentionPolicyBase;
}
export function serializeRetentionPolicyBase(val: RetentionPolicyBase): Json {
    return { ["id"]: val.id, ["type"]: serializeRetentionPolicyBaseTypeField(val.type) };
}
export type RetentionPolicyMini = RetentionPolicyBase & {
    /**
     * The name given to the retention policy. */
    readonly policyName?: string;
    /**
     * The length of the retention policy. This value
     * specifies the duration in days that the retention
     * policy will be active for after being assigned to
     * content.  If the policy has a `policy_type` of
     * `indefinite`, the `retention_length` will also be
     * `indefinite`. */
    readonly retentionLength?: string;
    /**
     * The disposition action of the retention policy.
     * This action can be `permanently_delete`, which
     * will cause the content retained by the policy
     * to be permanently deleted, or `remove_retention`,
     * which will lift the retention policy from the content,
     * allowing it to be deleted by users,
     * once the retention policy has expired. */
    readonly dispositionAction?: RetentionPolicyMiniDispositionActionField;
};
export function deserializeRetentionPolicyMini(val: any): RetentionPolicyMini {
    const policyName: undefined | string = isJson(val.policy_name, "string") ? val.policy_name : void 0;
    const retentionLength: undefined | string = isJson(val.retention_length, "string") ? val.retention_length : void 0;
    const dispositionAction: undefined | RetentionPolicyMiniDispositionActionField = val.disposition_action == void 0 ? void 0 : deserializeRetentionPolicyMiniDispositionActionField(val.disposition_action);
    const id: string = val.id;
    const type: RetentionPolicyBaseTypeField = deserializeRetentionPolicyBaseTypeField(val.type);
    return { policyName: policyName, retentionLength: retentionLength, dispositionAction: dispositionAction, id: id, type: type } satisfies RetentionPolicyMini;
}
export function serializeRetentionPolicyMini(val: RetentionPolicyMini): Json {
    const base: any = serializeRetentionPolicyBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"RetentionPolicyMini\"";
    }
    return { ...base, ...{ ["policy_name"]: val.policyName, ["retention_length"]: val.retentionLength, ["disposition_action"]: val.dispositionAction == void 0 ? void 0 : serializeRetentionPolicyMiniDispositionActionField(val.dispositionAction) } };
}
export interface RetentionPolicies {
    readonly entries?: readonly RetentionPolicyMini[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export function deserializeRetentionPolicies(val: any): RetentionPolicies {
    const entries: undefined | readonly RetentionPolicyMini[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeRetentionPolicyMini(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | string = isJson(val.next_marker, "string") ? val.next_marker : void 0;
    return { entries: entries, limit: limit, nextMarker: nextMarker } satisfies RetentionPolicies;
}
export function serializeRetentionPolicies(val: RetentionPolicies): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: RetentionPolicyMini): any {
            return serializeRetentionPolicyMini(item);
        }) as readonly any[], ["limit"]: val.limit, ["next_marker"]: val.nextMarker };
}
export interface FileVersionRetention {
    readonly id?: string;
    readonly type?: FileVersionRetentionTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    readonly appliedAt?: string;
    readonly dispositionAt?: string;
    readonly winningRetentionPolicy?: RetentionPolicyMini;
}
export function deserializeFileVersionRetention(val: any): FileVersionRetention {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | FileVersionRetentionTypeField = val.type == void 0 ? void 0 : deserializeFileVersionRetentionTypeField(val.type);
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    const file: undefined | FileMini = val.file == void 0 ? void 0 : deserializeFileMini(val.file);
    const appliedAt: undefined | string = isJson(val.applied_at, "string") ? val.applied_at : void 0;
    const dispositionAt: undefined | string = isJson(val.disposition_at, "string") ? val.disposition_at : void 0;
    const winningRetentionPolicy: undefined | RetentionPolicyMini = val.winning_retention_policy == void 0 ? void 0 : deserializeRetentionPolicyMini(val.winning_retention_policy);
    return { id: id, type: type, fileVersion: fileVersion, file: file, appliedAt: appliedAt, dispositionAt: dispositionAt, winningRetentionPolicy: winningRetentionPolicy } satisfies FileVersionRetention;
}
export function serializeFileVersionRetention(val: FileVersionRetention): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeFileVersionRetentionTypeField(val.type), ["file_version"]: val.fileVersion == void 0 ? void 0 : serializeFileVersionMini(val.fileVersion), ["file"]: val.file == void 0 ? void 0 : serializeFileMini(val.file), ["applied_at"]: val.appliedAt, ["disposition_at"]: val.dispositionAt, ["winning_retention_policy"]: val.winningRetentionPolicy == void 0 ? void 0 : serializeRetentionPolicyMini(val.winningRetentionPolicy) };
}
export interface FileVersionRetentions {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileVersionRetention[];
}
export function deserializeFileVersionRetentions(val: any): FileVersionRetentions {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly FileVersionRetention[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeFileVersionRetention(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies FileVersionRetentions;
}
export function serializeFileVersionRetentions(val: FileVersionRetentions): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileVersionRetention): any {
            return serializeFileVersionRetention(item);
        }) as readonly any[] };
}
export type RetentionPolicyAssignmentBaseTypeField = "retention_policy_assignment";
export function deserializeRetentionPolicyAssignmentBaseTypeField(val: any): RetentionPolicyAssignmentBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyAssignmentBaseTypeField\"";
    }
    if (val == "retention_policy_assignment") {
        return "retention_policy_assignment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeRetentionPolicyAssignmentBaseTypeField(val: RetentionPolicyAssignmentBaseTypeField): Json {
    return val;
}
export interface RetentionPolicyAssignmentBase {
    readonly id: string;
    readonly type: RetentionPolicyAssignmentBaseTypeField;
}
export function deserializeRetentionPolicyAssignmentBase(val: any): RetentionPolicyAssignmentBase {
    const id: string = val.id;
    const type: RetentionPolicyAssignmentBaseTypeField = deserializeRetentionPolicyAssignmentBaseTypeField(val.type);
    return { id: id, type: type } satisfies RetentionPolicyAssignmentBase;
}
export function serializeRetentionPolicyAssignmentBase(val: RetentionPolicyAssignmentBase): Json {
    return { ["id"]: val.id, ["type"]: serializeRetentionPolicyAssignmentBaseTypeField(val.type) };
}
export interface RetentionPolicyAssignments {
    readonly entries?: readonly RetentionPolicyAssignmentBase[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export function deserializeRetentionPolicyAssignments(val: any): RetentionPolicyAssignments {
    const entries: undefined | readonly RetentionPolicyAssignmentBase[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeRetentionPolicyAssignmentBase(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | string = isJson(val.next_marker, "string") ? val.next_marker : void 0;
    return { entries: entries, limit: limit, nextMarker: nextMarker } satisfies RetentionPolicyAssignments;
}
export function serializeRetentionPolicyAssignments(val: RetentionPolicyAssignments): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: RetentionPolicyAssignmentBase): any {
            return serializeRetentionPolicyAssignmentBase(item);
        }) as readonly any[], ["limit"]: val.limit, ["next_marker"]: val.nextMarker };
}
export type RetentionPolicyAssignmentTypeField = "retention_policy_assignment";
export function deserializeRetentionPolicyAssignmentTypeField(val: any): RetentionPolicyAssignmentTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyAssignmentTypeField\"";
    }
    if (val == "retention_policy_assignment") {
        return "retention_policy_assignment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeRetentionPolicyAssignmentTypeField(val: RetentionPolicyAssignmentTypeField): Json {
    return val;
}
export type RetentionPolicyAssignmentAssignedToFieldTypeField = "folder" | "enterprise" | "metadata_template";
export function deserializeRetentionPolicyAssignmentAssignedToFieldTypeField(val: any): RetentionPolicyAssignmentAssignedToFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyAssignmentAssignedToFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    if (val == "metadata_template") {
        return "metadata_template";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeRetentionPolicyAssignmentAssignedToFieldTypeField(val: RetentionPolicyAssignmentAssignedToFieldTypeField): Json {
    return val;
}
export interface RetentionPolicyAssignmentAssignedToField {
    readonly id?: string;
    readonly type?: RetentionPolicyAssignmentAssignedToFieldTypeField;
}
export function deserializeRetentionPolicyAssignmentAssignedToField(val: any): RetentionPolicyAssignmentAssignedToField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | RetentionPolicyAssignmentAssignedToFieldTypeField = val.type == void 0 ? void 0 : deserializeRetentionPolicyAssignmentAssignedToFieldTypeField(val.type);
    return { id: id, type: type } satisfies RetentionPolicyAssignmentAssignedToField;
}
export function serializeRetentionPolicyAssignmentAssignedToField(val: RetentionPolicyAssignmentAssignedToField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeRetentionPolicyAssignmentAssignedToFieldTypeField(val.type) };
}
export interface RetentionPolicyAssignmentFilterFieldsField {
    readonly field?: string;
    readonly value?: string;
}
export function deserializeRetentionPolicyAssignmentFilterFieldsField(val: any): RetentionPolicyAssignmentFilterFieldsField {
    const field: undefined | string = isJson(val.field, "string") ? val.field : void 0;
    const value: undefined | string = isJson(val.value, "string") ? val.value : void 0;
    return { field: field, value: value } satisfies RetentionPolicyAssignmentFilterFieldsField;
}
export function serializeRetentionPolicyAssignmentFilterFieldsField(val: RetentionPolicyAssignmentFilterFieldsField): Json {
    return { ["field"]: val.field, ["value"]: val.value };
}
export type ShieldInformationBarrierTypeField = "shield_information_barrier";
export function deserializeShieldInformationBarrierTypeField(val: any): ShieldInformationBarrierTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierTypeField\"";
    }
    if (val == "shield_information_barrier") {
        return "shield_information_barrier";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierTypeField(val: ShieldInformationBarrierTypeField): Json {
    return val;
}
export type ShieldInformationBarrierStatusField = "draft" | "pending" | "disabled" | "enabled" | "invalid";
export function deserializeShieldInformationBarrierStatusField(val: any): ShieldInformationBarrierStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierStatusField\"";
    }
    if (val == "draft") {
        return "draft";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "disabled") {
        return "disabled";
    }
    if (val == "enabled") {
        return "enabled";
    }
    if (val == "invalid") {
        return "invalid";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierStatusField(val: ShieldInformationBarrierStatusField): Json {
    return val;
}
export type ShieldInformationBarrierBaseTypeField = "shield_information_barrier";
export function deserializeShieldInformationBarrierBaseTypeField(val: any): ShieldInformationBarrierBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierBaseTypeField\"";
    }
    if (val == "shield_information_barrier") {
        return "shield_information_barrier";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierBaseTypeField(val: ShieldInformationBarrierBaseTypeField): Json {
    return val;
}
export interface ShieldInformationBarrierBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierBaseTypeField;
}
export function deserializeShieldInformationBarrierBase(val: any): ShieldInformationBarrierBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierBaseTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierBaseTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierBase;
}
export function serializeShieldInformationBarrierBase(val: ShieldInformationBarrierBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeShieldInformationBarrierBaseTypeField(val.type) };
}
export interface ShieldInformationBarrierReference {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
}
export function deserializeShieldInformationBarrierReference(val: any): ShieldInformationBarrierReference {
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shield_information_barrier == void 0 ? void 0 : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    return { shieldInformationBarrier: shieldInformationBarrier } satisfies ShieldInformationBarrierReference;
}
export function serializeShieldInformationBarrierReference(val: ShieldInformationBarrierReference): Json {
    return { ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : serializeShieldInformationBarrierBase(val.shieldInformationBarrier) };
}
export interface ShieldInformationBarrierReportShieldInformationBarrierField {
}
export function deserializeShieldInformationBarrierReportShieldInformationBarrierField(val: any): ShieldInformationBarrierReportShieldInformationBarrierField {
    return {} satisfies ShieldInformationBarrierReportShieldInformationBarrierField;
}
export function serializeShieldInformationBarrierReportShieldInformationBarrierField(val: ShieldInformationBarrierReportShieldInformationBarrierField): Json {
    return {};
}
export type ShieldInformationBarrierReportStatusField = "pending" | "error" | "done" | "cancelled";
export function deserializeShieldInformationBarrierReportStatusField(val: any): ShieldInformationBarrierReportStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierReportStatusField\"";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "error") {
        return "error";
    }
    if (val == "done") {
        return "done";
    }
    if (val == "cancelled") {
        return "cancelled";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierReportStatusField(val: ShieldInformationBarrierReportStatusField): Json {
    return val;
}
export interface ShieldInformationBarrierReportDetailsField {
}
export function deserializeShieldInformationBarrierReportDetailsField(val: any): ShieldInformationBarrierReportDetailsField {
    return {} satisfies ShieldInformationBarrierReportDetailsField;
}
export function serializeShieldInformationBarrierReportDetailsField(val: ShieldInformationBarrierReportDetailsField): Json {
    return {};
}
export type ShieldInformationBarrierReportBaseTypeField = "shield_information_barrier_report";
export function deserializeShieldInformationBarrierReportBaseTypeField(val: any): ShieldInformationBarrierReportBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierReportBaseTypeField\"";
    }
    if (val == "shield_information_barrier_report") {
        return "shield_information_barrier_report";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierReportBaseTypeField(val: ShieldInformationBarrierReportBaseTypeField): Json {
    return val;
}
export interface ShieldInformationBarrierReportBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierReportBaseTypeField;
}
export function deserializeShieldInformationBarrierReportBase(val: any): ShieldInformationBarrierReportBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierReportBaseTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierReportBaseTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierReportBase;
}
export function serializeShieldInformationBarrierReportBase(val: ShieldInformationBarrierReportBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeShieldInformationBarrierReportBaseTypeField(val.type) };
}
export type ShieldInformationBarrierSegmentTypeField = "shield_information_barrier_segment";
export function deserializeShieldInformationBarrierSegmentTypeField(val: any): ShieldInformationBarrierSegmentTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierSegmentTypeField(val: ShieldInformationBarrierSegmentTypeField): Json {
    return val;
}
export type ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val: any): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField): Json {
    return val;
}
export interface ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField;
}
export function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: any): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
}
export function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
export type ShieldInformationBarrierSegmentMemberBaseTypeField = "shield_information_barrier_segment_member";
export function deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val: any): ShieldInformationBarrierSegmentMemberBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentMemberBaseTypeField\"";
    }
    if (val == "shield_information_barrier_segment_member") {
        return "shield_information_barrier_segment_member";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierSegmentMemberBaseTypeField(val: ShieldInformationBarrierSegmentMemberBaseTypeField): Json {
    return val;
}
export interface ShieldInformationBarrierSegmentMemberBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentMemberBaseTypeField;
}
export function deserializeShieldInformationBarrierSegmentMemberBase(val: any): ShieldInformationBarrierSegmentMemberBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierSegmentMemberBase;
}
export function serializeShieldInformationBarrierSegmentMemberBase(val: ShieldInformationBarrierSegmentMemberBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type) };
}
export type ShieldInformationBarrierSegmentRestrictionBaseTypeField = "shield_information_barrier_segment_restriction";
export function deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: any): ShieldInformationBarrierSegmentRestrictionBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentRestrictionBaseTypeField\"";
    }
    if (val == "shield_information_barrier_segment_restriction") {
        return "shield_information_barrier_segment_restriction";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: ShieldInformationBarrierSegmentRestrictionBaseTypeField): Json {
    return val;
}
export interface ShieldInformationBarrierSegmentRestrictionBase {
    readonly type?: ShieldInformationBarrierSegmentRestrictionBaseTypeField;
    readonly id?: string;
}
export function deserializeShieldInformationBarrierSegmentRestrictionBase(val: any): ShieldInformationBarrierSegmentRestrictionBase {
    const type: undefined | ShieldInformationBarrierSegmentRestrictionBaseTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies ShieldInformationBarrierSegmentRestrictionBase;
}
export function serializeShieldInformationBarrierSegmentRestrictionBase(val: ShieldInformationBarrierSegmentRestrictionBase): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type), ["id"]: val.id };
}
export type ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val: any): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField): Json {
    return val;
}
export interface ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField;
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: any): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
export type ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField = "shield_information_barrier_segment";
export function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val: any): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField): Json {
    return val;
}
export interface ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField;
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: any): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val.type) };
}
export type ShieldInformationBarrierSegmentRestrictionMini = ShieldInformationBarrierSegmentRestrictionBase & {
    /**
     * The `type` and `id` of the
     * requested shield information barrier segment. */
    readonly shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
    /**
     * The `type` and `id` of the
     * restricted shield information barrier segment. */
    readonly restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
};
export function deserializeShieldInformationBarrierSegmentRestrictionMini(val: any): ShieldInformationBarrierSegmentRestrictionMini {
    const shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField = deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    const restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField = deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restricted_segment);
    const type: undefined | ShieldInformationBarrierSegmentRestrictionBaseTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { shieldInformationBarrierSegment: shieldInformationBarrierSegment, restrictedSegment: restrictedSegment, type: type, id: id } satisfies ShieldInformationBarrierSegmentRestrictionMini;
}
export function serializeShieldInformationBarrierSegmentRestrictionMini(val: ShieldInformationBarrierSegmentRestrictionMini): Json {
    const base: any = serializeShieldInformationBarrierSegmentRestrictionBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ShieldInformationBarrierSegmentRestrictionMini\"";
    }
    return { ...base, ...{ ["shield_information_barrier_segment"]: serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["restricted_segment"]: serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restrictedSegment) } };
}
export interface SessionTerminationMessage {
    readonly message?: string;
}
export function deserializeSessionTerminationMessage(val: any): SessionTerminationMessage {
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    return { message: message } satisfies SessionTerminationMessage;
}
export function serializeSessionTerminationMessage(val: SessionTerminationMessage): Json {
    return { ["message"]: val.message };
}
export type StoragePolicyMiniTypeField = "storage_policy";
export function deserializeStoragePolicyMiniTypeField(val: any): StoragePolicyMiniTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StoragePolicyMiniTypeField\"";
    }
    if (val == "storage_policy") {
        return "storage_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeStoragePolicyMiniTypeField(val: StoragePolicyMiniTypeField): Json {
    return val;
}
export interface StoragePolicyMini {
    readonly id?: string;
    readonly type?: StoragePolicyMiniTypeField;
}
export function deserializeStoragePolicyMini(val: any): StoragePolicyMini {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | StoragePolicyMiniTypeField = val.type == void 0 ? void 0 : deserializeStoragePolicyMiniTypeField(val.type);
    return { id: id, type: type } satisfies StoragePolicyMini;
}
export function serializeStoragePolicyMini(val: StoragePolicyMini): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeStoragePolicyMiniTypeField(val.type) };
}
export type StoragePolicy = StoragePolicyMini & {
    /**
     * A descriptive name of the region */
    readonly name?: string;
};
export function deserializeStoragePolicy(val: any): StoragePolicy {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | StoragePolicyMiniTypeField = val.type == void 0 ? void 0 : deserializeStoragePolicyMiniTypeField(val.type);
    return { name: name, id: id, type: type } satisfies StoragePolicy;
}
export function serializeStoragePolicy(val: StoragePolicy): Json {
    const base: any = serializeStoragePolicyMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"StoragePolicy\"";
    }
    return { ...base, ...{ ["name"]: val.name } };
}
export interface StoragePolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly StoragePolicy[];
}
export function deserializeStoragePolicies(val: any): StoragePolicies {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly StoragePolicy[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeStoragePolicy(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies StoragePolicies;
}
export function serializeStoragePolicies(val: StoragePolicies): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: StoragePolicy): any {
            return serializeStoragePolicy(item);
        }) as readonly any[] };
}
export interface StoragePolicyAssignmentAssignedToField {
    readonly id?: string;
    readonly type?: string;
}
export function deserializeStoragePolicyAssignmentAssignedToField(val: any): StoragePolicyAssignmentAssignedToField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    return { id: id, type: type } satisfies StoragePolicyAssignmentAssignedToField;
}
export function serializeStoragePolicyAssignmentAssignedToField(val: StoragePolicyAssignmentAssignedToField): Json {
    return { ["id"]: val.id, ["type"]: val.type };
}
export interface StoragePolicyAssignment {
    readonly storagePolicy?: StoragePolicyMini;
    readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
}
export function deserializeStoragePolicyAssignment(val: any): StoragePolicyAssignment {
    const storagePolicy: undefined | StoragePolicyMini = val.storage_policy == void 0 ? void 0 : deserializeStoragePolicyMini(val.storage_policy);
    const assignedTo: undefined | StoragePolicyAssignmentAssignedToField = val.assigned_to == void 0 ? void 0 : deserializeStoragePolicyAssignmentAssignedToField(val.assigned_to);
    return { storagePolicy: storagePolicy, assignedTo: assignedTo } satisfies StoragePolicyAssignment;
}
export function serializeStoragePolicyAssignment(val: StoragePolicyAssignment): Json {
    return { ["storage_policy"]: val.storagePolicy == void 0 ? void 0 : serializeStoragePolicyMini(val.storagePolicy), ["assigned_to"]: val.assignedTo == void 0 ? void 0 : serializeStoragePolicyAssignmentAssignedToField(val.assignedTo) };
}
export interface StoragePolicyAssignments {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly StoragePolicyAssignment[];
}
export function deserializeStoragePolicyAssignments(val: any): StoragePolicyAssignments {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly StoragePolicyAssignment[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeStoragePolicyAssignment(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies StoragePolicyAssignments;
}
export function serializeStoragePolicyAssignments(val: StoragePolicyAssignments): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: StoragePolicyAssignment): any {
            return serializeStoragePolicyAssignment(item);
        }) as readonly any[] };
}
export type TaskTypeField = "task";
export function deserializeTaskTypeField(val: any): TaskTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TaskTypeField\"";
    }
    if (val == "task") {
        return "task";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTaskTypeField(val: TaskTypeField): Json {
    return val;
}
export type TaskActionField = "review" | "complete";
export function deserializeTaskActionField(val: any): TaskActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TaskActionField\"";
    }
    if (val == "review") {
        return "review";
    }
    if (val == "complete") {
        return "complete";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTaskActionField(val: TaskActionField): Json {
    return val;
}
export type TaskCompletionRuleField = "all_assignees" | "any_assignee";
export function deserializeTaskCompletionRuleField(val: any): TaskCompletionRuleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TaskCompletionRuleField\"";
    }
    if (val == "all_assignees") {
        return "all_assignees";
    }
    if (val == "any_assignee") {
        return "any_assignee";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTaskCompletionRuleField(val: TaskCompletionRuleField): Json {
    return val;
}
export type TaskAssignmentTypeField = "task_assignment";
export function deserializeTaskAssignmentTypeField(val: any): TaskAssignmentTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TaskAssignmentTypeField\"";
    }
    if (val == "task_assignment") {
        return "task_assignment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTaskAssignmentTypeField(val: TaskAssignmentTypeField): Json {
    return val;
}
export type TaskAssignmentResolutionStateField = "completed" | "incomplete" | "approved" | "rejected";
export function deserializeTaskAssignmentResolutionStateField(val: any): TaskAssignmentResolutionStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TaskAssignmentResolutionStateField\"";
    }
    if (val == "completed") {
        return "completed";
    }
    if (val == "incomplete") {
        return "incomplete";
    }
    if (val == "approved") {
        return "approved";
    }
    if (val == "rejected") {
        return "rejected";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTaskAssignmentResolutionStateField(val: TaskAssignmentResolutionStateField): Json {
    return val;
}
export type TermsOfServiceStatusField = "enabled" | "disabled";
export function deserializeTermsOfServiceStatusField(val: any): TermsOfServiceStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TermsOfServiceStatusField\"";
    }
    if (val == "enabled") {
        return "enabled";
    }
    if (val == "disabled") {
        return "disabled";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTermsOfServiceStatusField(val: TermsOfServiceStatusField): Json {
    return val;
}
export type TermsOfServiceEnterpriseFieldTypeField = "enterprise";
export function deserializeTermsOfServiceEnterpriseFieldTypeField(val: any): TermsOfServiceEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TermsOfServiceEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTermsOfServiceEnterpriseFieldTypeField(val: TermsOfServiceEnterpriseFieldTypeField): Json {
    return val;
}
export interface TermsOfServiceEnterpriseField {
    readonly id?: string;
    readonly type?: TermsOfServiceEnterpriseFieldTypeField;
    readonly name?: string;
}
export function deserializeTermsOfServiceEnterpriseField(val: any): TermsOfServiceEnterpriseField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TermsOfServiceEnterpriseFieldTypeField = val.type == void 0 ? void 0 : deserializeTermsOfServiceEnterpriseFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies TermsOfServiceEnterpriseField;
}
export function serializeTermsOfServiceEnterpriseField(val: TermsOfServiceEnterpriseField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeTermsOfServiceEnterpriseFieldTypeField(val.type), ["name"]: val.name };
}
export type TermsOfServiceTosTypeField = "managed" | "external";
export function deserializeTermsOfServiceTosTypeField(val: any): TermsOfServiceTosTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TermsOfServiceTosTypeField\"";
    }
    if (val == "managed") {
        return "managed";
    }
    if (val == "external") {
        return "external";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTermsOfServiceTosTypeField(val: TermsOfServiceTosTypeField): Json {
    return val;
}
export type TermsOfServiceBaseTypeField = "terms_of_service";
export function deserializeTermsOfServiceBaseTypeField(val: any): TermsOfServiceBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TermsOfServiceBaseTypeField\"";
    }
    if (val == "terms_of_service") {
        return "terms_of_service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTermsOfServiceBaseTypeField(val: TermsOfServiceBaseTypeField): Json {
    return val;
}
export interface TermsOfServiceBase {
    readonly id?: string;
    readonly type?: TermsOfServiceBaseTypeField;
}
export function deserializeTermsOfServiceBase(val: any): TermsOfServiceBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TermsOfServiceBaseTypeField = val.type == void 0 ? void 0 : deserializeTermsOfServiceBaseTypeField(val.type);
    return { id: id, type: type } satisfies TermsOfServiceBase;
}
export function serializeTermsOfServiceBase(val: TermsOfServiceBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeTermsOfServiceBaseTypeField(val.type) };
}
export type TermsOfService = TermsOfServiceBase & {
    /**
     * Whether these terms are enabled or not */
    readonly status?: TermsOfServiceStatusField;
    readonly enterprise?: TermsOfServiceEnterpriseField;
    /**
     * Whether to apply these terms to managed users or external users */
    readonly tosType?: TermsOfServiceTosTypeField;
    /**
     * The text for your terms and conditions. This text could be
     * empty if the `status` is set to `disabled`. */
    readonly text?: string;
    /**
     * When the legal item was created */
    readonly createdAt?: string;
    /**
     * When the legal item was modified. */
    readonly modifiedAt?: string;
};
export function deserializeTermsOfService(val: any): TermsOfService {
    const status: undefined | TermsOfServiceStatusField = val.status == void 0 ? void 0 : deserializeTermsOfServiceStatusField(val.status);
    const enterprise: undefined | TermsOfServiceEnterpriseField = val.enterprise == void 0 ? void 0 : deserializeTermsOfServiceEnterpriseField(val.enterprise);
    const tosType: undefined | TermsOfServiceTosTypeField = val.tos_type == void 0 ? void 0 : deserializeTermsOfServiceTosTypeField(val.tos_type);
    const text: undefined | string = isJson(val.text, "string") ? val.text : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TermsOfServiceBaseTypeField = val.type == void 0 ? void 0 : deserializeTermsOfServiceBaseTypeField(val.type);
    return { status: status, enterprise: enterprise, tosType: tosType, text: text, createdAt: createdAt, modifiedAt: modifiedAt, id: id, type: type } satisfies TermsOfService;
}
export function serializeTermsOfService(val: TermsOfService): Json {
    const base: any = serializeTermsOfServiceBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"TermsOfService\"";
    }
    return { ...base, ...{ ["status"]: val.status == void 0 ? void 0 : serializeTermsOfServiceStatusField(val.status), ["enterprise"]: val.enterprise == void 0 ? void 0 : serializeTermsOfServiceEnterpriseField(val.enterprise), ["tos_type"]: val.tosType == void 0 ? void 0 : serializeTermsOfServiceTosTypeField(val.tosType), ["text"]: val.text, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt } };
}
export interface TermsOfServices {
    readonly totalCount?: number;
    readonly entries?: readonly TermsOfService[];
}
export function deserializeTermsOfServices(val: any): TermsOfServices {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly TermsOfService[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeTermsOfService(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies TermsOfServices;
}
export function serializeTermsOfServices(val: TermsOfServices): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: TermsOfService): any {
            return serializeTermsOfService(item);
        }) as readonly any[] };
}
export interface CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField {
    readonly isAccepted?: boolean;
    readonly termsOfService?: TermsOfServiceBase;
}
export function deserializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val: any): CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField {
    const isAccepted: undefined | boolean = isJson(val.is_accepted, "boolean") ? val.is_accepted : void 0;
    const termsOfService: undefined | TermsOfServiceBase = val.terms_of_service == void 0 ? void 0 : deserializeTermsOfServiceBase(val.terms_of_service);
    return { isAccepted: isAccepted, termsOfService: termsOfService } satisfies CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField;
}
export function serializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField): Json {
    return { ["is_accepted"]: val.isAccepted, ["terms_of_service"]: val.termsOfService == void 0 ? void 0 : serializeTermsOfServiceBase(val.termsOfService) };
}
export interface CollaborationAcceptanceRequirementsStatusField {
    readonly termsOfServiceRequirement?: CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField;
    readonly strongPasswordRequirement?: CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField;
    readonly twoFactorAuthenticationRequirement?: CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField;
}
export function deserializeCollaborationAcceptanceRequirementsStatusField(val: any): CollaborationAcceptanceRequirementsStatusField {
    const termsOfServiceRequirement: undefined | CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField = val.terms_of_service_requirement == void 0 ? void 0 : deserializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val.terms_of_service_requirement);
    const strongPasswordRequirement: undefined | CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField = val.strong_password_requirement == void 0 ? void 0 : deserializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val.strong_password_requirement);
    const twoFactorAuthenticationRequirement: undefined | CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField = val.two_factor_authentication_requirement == void 0 ? void 0 : deserializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val.two_factor_authentication_requirement);
    return { termsOfServiceRequirement: termsOfServiceRequirement, strongPasswordRequirement: strongPasswordRequirement, twoFactorAuthenticationRequirement: twoFactorAuthenticationRequirement } satisfies CollaborationAcceptanceRequirementsStatusField;
}
export function serializeCollaborationAcceptanceRequirementsStatusField(val: CollaborationAcceptanceRequirementsStatusField): Json {
    return { ["terms_of_service_requirement"]: val.termsOfServiceRequirement == void 0 ? void 0 : serializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val.termsOfServiceRequirement), ["strong_password_requirement"]: val.strongPasswordRequirement == void 0 ? void 0 : serializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val.strongPasswordRequirement), ["two_factor_authentication_requirement"]: val.twoFactorAuthenticationRequirement == void 0 ? void 0 : serializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val.twoFactorAuthenticationRequirement) };
}
export type TermsOfServiceUserStatusTypeField = "terms_of_service_user_status";
export function deserializeTermsOfServiceUserStatusTypeField(val: any): TermsOfServiceUserStatusTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TermsOfServiceUserStatusTypeField\"";
    }
    if (val == "terms_of_service_user_status") {
        return "terms_of_service_user_status";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTermsOfServiceUserStatusTypeField(val: TermsOfServiceUserStatusTypeField): Json {
    return val;
}
export type SignTemplateAdditionalInfoFieldNonEditableField = "email_subject" | "email_message" | "name" | "days_valid" | "signers" | "source_files";
export function deserializeSignTemplateAdditionalInfoFieldNonEditableField(val: any): SignTemplateAdditionalInfoFieldNonEditableField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignTemplateAdditionalInfoFieldNonEditableField\"";
    }
    if (val == "email_subject") {
        return "email_subject";
    }
    if (val == "email_message") {
        return "email_message";
    }
    if (val == "name") {
        return "name";
    }
    if (val == "days_valid") {
        return "days_valid";
    }
    if (val == "signers") {
        return "signers";
    }
    if (val == "source_files") {
        return "source_files";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSignTemplateAdditionalInfoFieldNonEditableField(val: SignTemplateAdditionalInfoFieldNonEditableField): Json {
    return val;
}
export type SignTemplateAdditionalInfoFieldRequiredFieldSignersField = "email";
export function deserializeSignTemplateAdditionalInfoFieldRequiredFieldSignersField(val: any): SignTemplateAdditionalInfoFieldRequiredFieldSignersField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignTemplateAdditionalInfoFieldRequiredFieldSignersField\"";
    }
    if (val == "email") {
        return "email";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSignTemplateAdditionalInfoFieldRequiredFieldSignersField(val: SignTemplateAdditionalInfoFieldRequiredFieldSignersField): Json {
    return val;
}
export interface SignTemplateAdditionalInfoFieldRequiredField {
    readonly signers?: readonly (readonly SignTemplateAdditionalInfoFieldRequiredFieldSignersField[])[];
}
export function deserializeSignTemplateAdditionalInfoFieldRequiredField(val: any): SignTemplateAdditionalInfoFieldRequiredField {
    const signers: undefined | readonly (readonly SignTemplateAdditionalInfoFieldRequiredFieldSignersField[])[] = isJson(val.signers, "array") ? val.signers.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    return { signers: signers } satisfies SignTemplateAdditionalInfoFieldRequiredField;
}
export function serializeSignTemplateAdditionalInfoFieldRequiredField(val: SignTemplateAdditionalInfoFieldRequiredField): Json {
    return { ["signers"]: val.signers == void 0 ? void 0 : val.signers.map(function (item: readonly SignTemplateAdditionalInfoFieldRequiredFieldSignersField[]): undefined {
            return void 0;
        }) as readonly any[] };
}
export interface SignTemplateAdditionalInfoField {
    readonly nonEditable?: readonly SignTemplateAdditionalInfoFieldNonEditableField[];
    readonly required?: SignTemplateAdditionalInfoFieldRequiredField;
}
export function deserializeSignTemplateAdditionalInfoField(val: any): SignTemplateAdditionalInfoField {
    const nonEditable: undefined | readonly SignTemplateAdditionalInfoFieldNonEditableField[] = isJson(val.non_editable, "array") ? val.non_editable.map(function (itm: Json): any {
        return deserializeSignTemplateAdditionalInfoFieldNonEditableField(itm);
    }) as readonly any[] : void 0;
    const required: undefined | SignTemplateAdditionalInfoFieldRequiredField = val.required == void 0 ? void 0 : deserializeSignTemplateAdditionalInfoFieldRequiredField(val.required);
    return { nonEditable: nonEditable, required: required } satisfies SignTemplateAdditionalInfoField;
}
export function serializeSignTemplateAdditionalInfoField(val: SignTemplateAdditionalInfoField): Json {
    return { ["non_editable"]: val.nonEditable == void 0 ? void 0 : val.nonEditable.map(function (item: SignTemplateAdditionalInfoFieldNonEditableField): any {
            return serializeSignTemplateAdditionalInfoFieldNonEditableField(item);
        }) as readonly any[], ["required"]: val.required == void 0 ? void 0 : serializeSignTemplateAdditionalInfoFieldRequiredField(val.required) };
}
export interface SignTemplateReadySignLinkField {
    readonly url?: string;
    readonly name?: string;
    readonly instructions?: string;
    readonly folderId?: string;
    readonly isNotificationDisabled?: boolean;
    readonly isActive?: boolean;
}
export function deserializeSignTemplateReadySignLinkField(val: any): SignTemplateReadySignLinkField {
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const instructions: undefined | string = isJson(val.instructions, "string") ? val.instructions : void 0;
    const folderId: undefined | string = isJson(val.folder_id, "string") ? val.folder_id : void 0;
    const isNotificationDisabled: undefined | boolean = isJson(val.is_notification_disabled, "boolean") ? val.is_notification_disabled : void 0;
    const isActive: undefined | boolean = isJson(val.is_active, "boolean") ? val.is_active : void 0;
    return { url: url, name: name, instructions: instructions, folderId: folderId, isNotificationDisabled: isNotificationDisabled, isActive: isActive } satisfies SignTemplateReadySignLinkField;
}
export function serializeSignTemplateReadySignLinkField(val: SignTemplateReadySignLinkField): Json {
    return { ["url"]: val.url, ["name"]: val.name, ["instructions"]: val.instructions, ["folder_id"]: val.folderId, ["is_notification_disabled"]: val.isNotificationDisabled, ["is_active"]: val.isActive };
}
export interface SignTemplateCustomBrandingField {
    readonly companyName?: string;
    readonly logoUri?: string;
    readonly brandingColor?: string;
    readonly emailFooterText?: string;
}
export function deserializeSignTemplateCustomBrandingField(val: any): SignTemplateCustomBrandingField {
    const companyName: undefined | string = isJson(val.company_name, "string") ? val.company_name : void 0;
    const logoUri: undefined | string = isJson(val.logo_uri, "string") ? val.logo_uri : void 0;
    const brandingColor: undefined | string = isJson(val.branding_color, "string") ? val.branding_color : void 0;
    const emailFooterText: undefined | string = isJson(val.email_footer_text, "string") ? val.email_footer_text : void 0;
    return { companyName: companyName, logoUri: logoUri, brandingColor: brandingColor, emailFooterText: emailFooterText } satisfies SignTemplateCustomBrandingField;
}
export function serializeSignTemplateCustomBrandingField(val: SignTemplateCustomBrandingField): Json {
    return { ["company_name"]: val.companyName, ["logo_uri"]: val.logoUri, ["branding_color"]: val.brandingColor, ["email_footer_text"]: val.emailFooterText };
}
export interface SignTemplates {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
}
export function deserializeSignTemplates(val: any): SignTemplates {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | string = isJson(val.next_marker, "string") ? val.next_marker : void 0;
    const prevMarker: undefined | string = isJson(val.prev_marker, "string") ? val.prev_marker : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker } satisfies SignTemplates;
}
export function serializeSignTemplates(val: SignTemplates): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker };
}
export type TemplateSignerRoleField = "signer" | "approver" | "final_copy_reader";
export function deserializeTemplateSignerRoleField(val: any): TemplateSignerRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TemplateSignerRoleField\"";
    }
    if (val == "signer") {
        return "signer";
    }
    if (val == "approver") {
        return "approver";
    }
    if (val == "final_copy_reader") {
        return "final_copy_reader";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTemplateSignerRoleField(val: TemplateSignerRoleField): Json {
    return val;
}
export type TemplateSignerInputTypeField = "signature" | "date" | "text" | "checkbox" | "radio" | "dropdown";
export function deserializeTemplateSignerInputTypeField(val: any): TemplateSignerInputTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TemplateSignerInputTypeField\"";
    }
    if (val == "signature") {
        return "signature";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "text") {
        return "text";
    }
    if (val == "checkbox") {
        return "checkbox";
    }
    if (val == "radio") {
        return "radio";
    }
    if (val == "dropdown") {
        return "dropdown";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTemplateSignerInputTypeField(val: TemplateSignerInputTypeField): Json {
    return val;
}
export type TemplateSignerInputContentTypeField = "signature" | "initial" | "stamp" | "date" | "checkbox" | "text" | "full_name" | "first_name" | "last_name" | "company" | "title" | "email" | "attachment" | "radio" | "dropdown";
export function deserializeTemplateSignerInputContentTypeField(val: any): TemplateSignerInputContentTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TemplateSignerInputContentTypeField\"";
    }
    if (val == "signature") {
        return "signature";
    }
    if (val == "initial") {
        return "initial";
    }
    if (val == "stamp") {
        return "stamp";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "checkbox") {
        return "checkbox";
    }
    if (val == "text") {
        return "text";
    }
    if (val == "full_name") {
        return "full_name";
    }
    if (val == "first_name") {
        return "first_name";
    }
    if (val == "last_name") {
        return "last_name";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "title") {
        return "title";
    }
    if (val == "email") {
        return "email";
    }
    if (val == "attachment") {
        return "attachment";
    }
    if (val == "radio") {
        return "radio";
    }
    if (val == "dropdown") {
        return "dropdown";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTemplateSignerInputContentTypeField(val: TemplateSignerInputContentTypeField): Json {
    return val;
}
export interface TemplateSignerInputCoordinatesField {
    readonly x?: number;
    readonly y?: number;
}
export function deserializeTemplateSignerInputCoordinatesField(val: any): TemplateSignerInputCoordinatesField {
    const x: undefined | number = isJson(val.x, "number") ? val.x : void 0;
    const y: undefined | number = isJson(val.y, "number") ? val.y : void 0;
    return { x: x, y: y } satisfies TemplateSignerInputCoordinatesField;
}
export function serializeTemplateSignerInputCoordinatesField(val: TemplateSignerInputCoordinatesField): Json {
    return { ["x"]: val.x, ["y"]: val.y };
}
export interface TemplateSignerInputDimensionsField {
    readonly width?: number;
    readonly height?: number;
}
export function deserializeTemplateSignerInputDimensionsField(val: any): TemplateSignerInputDimensionsField {
    const width: undefined | number = isJson(val.width, "number") ? val.width : void 0;
    const height: undefined | number = isJson(val.height, "number") ? val.height : void 0;
    return { width: width, height: height } satisfies TemplateSignerInputDimensionsField;
}
export function serializeTemplateSignerInputDimensionsField(val: TemplateSignerInputDimensionsField): Json {
    return { ["width"]: val.width, ["height"]: val.height };
}
export type TrashFileTypeField = "file";
export function deserializeTrashFileTypeField(val: any): TrashFileTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFileTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFileTypeField(val: TrashFileTypeField): Json {
    return val;
}
export type TrashFilePathCollectionFieldEntriesFieldTypeField = "folder";
export function deserializeTrashFilePathCollectionFieldEntriesFieldTypeField(val: any): TrashFilePathCollectionFieldEntriesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFilePathCollectionFieldEntriesFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFilePathCollectionFieldEntriesFieldTypeField(val: TrashFilePathCollectionFieldEntriesFieldTypeField): Json {
    return val;
}
export interface TrashFilePathCollectionFieldEntriesField {
    readonly type?: TrashFilePathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export function deserializeTrashFilePathCollectionFieldEntriesField(val: any): TrashFilePathCollectionFieldEntriesField {
    const type: undefined | TrashFilePathCollectionFieldEntriesFieldTypeField = val.type == void 0 ? void 0 : deserializeTrashFilePathCollectionFieldEntriesFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { type: type, id: id, sequenceId: sequenceId, etag: etag, name: name } satisfies TrashFilePathCollectionFieldEntriesField;
}
export function serializeTrashFilePathCollectionFieldEntriesField(val: TrashFilePathCollectionFieldEntriesField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeTrashFilePathCollectionFieldEntriesFieldTypeField(val.type), ["id"]: val.id, ["sequence_id"]: val.sequenceId, ["etag"]: val.etag, ["name"]: val.name };
}
export interface TrashFilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashFilePathCollectionFieldEntriesField[];
}
export function deserializeTrashFilePathCollectionField(val: any): TrashFilePathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly TrashFilePathCollectionFieldEntriesField[] = val.entries.map(function (itm: Json): any {
        return deserializeTrashFilePathCollectionFieldEntriesField(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashFilePathCollectionField;
}
export function serializeTrashFilePathCollectionField(val: TrashFilePathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: TrashFilePathCollectionFieldEntriesField): any {
            return serializeTrashFilePathCollectionFieldEntriesField(item);
        }) as readonly any[] };
}
export type TrashFileItemStatusField = "active" | "trashed" | "deleted";
export function deserializeTrashFileItemStatusField(val: any): TrashFileItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFileItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFileItemStatusField(val: TrashFileItemStatusField): Json {
    return val;
}
export type TrashFolderTypeField = "folder";
export function deserializeTrashFolderTypeField(val: any): TrashFolderTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFolderTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFolderTypeField(val: TrashFolderTypeField): Json {
    return val;
}
export type TrashFolderPathCollectionFieldEntriesFieldTypeField = "folder";
export function deserializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val: any): TrashFolderPathCollectionFieldEntriesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFolderPathCollectionFieldEntriesFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val: TrashFolderPathCollectionFieldEntriesFieldTypeField): Json {
    return val;
}
export interface TrashFolderPathCollectionFieldEntriesField {
    readonly type?: TrashFolderPathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export function deserializeTrashFolderPathCollectionFieldEntriesField(val: any): TrashFolderPathCollectionFieldEntriesField {
    const type: undefined | TrashFolderPathCollectionFieldEntriesFieldTypeField = val.type == void 0 ? void 0 : deserializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { type: type, id: id, sequenceId: sequenceId, etag: etag, name: name } satisfies TrashFolderPathCollectionFieldEntriesField;
}
export function serializeTrashFolderPathCollectionFieldEntriesField(val: TrashFolderPathCollectionFieldEntriesField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val.type), ["id"]: val.id, ["sequence_id"]: val.sequenceId, ["etag"]: val.etag, ["name"]: val.name };
}
export interface TrashFolderPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashFolderPathCollectionFieldEntriesField[];
}
export function deserializeTrashFolderPathCollectionField(val: any): TrashFolderPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly TrashFolderPathCollectionFieldEntriesField[] = val.entries.map(function (itm: Json): any {
        return deserializeTrashFolderPathCollectionFieldEntriesField(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashFolderPathCollectionField;
}
export function serializeTrashFolderPathCollectionField(val: TrashFolderPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: TrashFolderPathCollectionFieldEntriesField): any {
            return serializeTrashFolderPathCollectionFieldEntriesField(item);
        }) as readonly any[] };
}
export type TrashFolderItemStatusField = "active" | "trashed" | "deleted";
export function deserializeTrashFolderItemStatusField(val: any): TrashFolderItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFolderItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFolderItemStatusField(val: TrashFolderItemStatusField): Json {
    return val;
}
export type TrashWebLinkTypeField = "web_link";
export function deserializeTrashWebLinkTypeField(val: any): TrashWebLinkTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashWebLinkTypeField\"";
    }
    if (val == "web_link") {
        return "web_link";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashWebLinkTypeField(val: TrashWebLinkTypeField): Json {
    return val;
}
export type TrashWebLinkPathCollectionFieldEntriesFieldTypeField = "folder";
export function deserializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val: any): TrashWebLinkPathCollectionFieldEntriesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashWebLinkPathCollectionFieldEntriesFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val: TrashWebLinkPathCollectionFieldEntriesFieldTypeField): Json {
    return val;
}
export interface TrashWebLinkPathCollectionFieldEntriesField {
    readonly type?: TrashWebLinkPathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export function deserializeTrashWebLinkPathCollectionFieldEntriesField(val: any): TrashWebLinkPathCollectionFieldEntriesField {
    const type: undefined | TrashWebLinkPathCollectionFieldEntriesFieldTypeField = val.type == void 0 ? void 0 : deserializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { type: type, id: id, sequenceId: sequenceId, etag: etag, name: name } satisfies TrashWebLinkPathCollectionFieldEntriesField;
}
export function serializeTrashWebLinkPathCollectionFieldEntriesField(val: TrashWebLinkPathCollectionFieldEntriesField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val.type), ["id"]: val.id, ["sequence_id"]: val.sequenceId, ["etag"]: val.etag, ["name"]: val.name };
}
export interface TrashWebLinkPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashWebLinkPathCollectionFieldEntriesField[];
}
export function deserializeTrashWebLinkPathCollectionField(val: any): TrashWebLinkPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly TrashWebLinkPathCollectionFieldEntriesField[] = val.entries.map(function (itm: Json): any {
        return deserializeTrashWebLinkPathCollectionFieldEntriesField(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashWebLinkPathCollectionField;
}
export function serializeTrashWebLinkPathCollectionField(val: TrashWebLinkPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: TrashWebLinkPathCollectionFieldEntriesField): any {
            return serializeTrashWebLinkPathCollectionFieldEntriesField(item);
        }) as readonly any[] };
}
export type TrashWebLinkItemStatusField = "active" | "trashed" | "deleted";
export function deserializeTrashWebLinkItemStatusField(val: any): TrashWebLinkItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashWebLinkItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashWebLinkItemStatusField(val: TrashWebLinkItemStatusField): Json {
    return val;
}
export type TrashFileRestoredTypeField = "file";
export function deserializeTrashFileRestoredTypeField(val: any): TrashFileRestoredTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFileRestoredTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFileRestoredTypeField(val: TrashFileRestoredTypeField): Json {
    return val;
}
export type TrashFileRestoredItemStatusField = "active" | "trashed" | "deleted";
export function deserializeTrashFileRestoredItemStatusField(val: any): TrashFileRestoredItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFileRestoredItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFileRestoredItemStatusField(val: TrashFileRestoredItemStatusField): Json {
    return val;
}
export type TrashFolderRestoredTypeField = "folder";
export function deserializeTrashFolderRestoredTypeField(val: any): TrashFolderRestoredTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFolderRestoredTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFolderRestoredTypeField(val: TrashFolderRestoredTypeField): Json {
    return val;
}
export type TrashFolderRestoredItemStatusField = "active" | "trashed" | "deleted";
export function deserializeTrashFolderRestoredItemStatusField(val: any): TrashFolderRestoredItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFolderRestoredItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashFolderRestoredItemStatusField(val: TrashFolderRestoredItemStatusField): Json {
    return val;
}
export type TrashWebLinkRestoredTypeField = "web_link";
export function deserializeTrashWebLinkRestoredTypeField(val: any): TrashWebLinkRestoredTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashWebLinkRestoredTypeField\"";
    }
    if (val == "web_link") {
        return "web_link";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashWebLinkRestoredTypeField(val: TrashWebLinkRestoredTypeField): Json {
    return val;
}
export type TrashWebLinkRestoredItemStatusField = "active" | "trashed" | "deleted";
export function deserializeTrashWebLinkRestoredItemStatusField(val: any): TrashWebLinkRestoredItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashWebLinkRestoredItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrashWebLinkRestoredItemStatusField(val: TrashWebLinkRestoredItemStatusField): Json {
    return val;
}
export interface UploadPartMini {
    readonly partId?: string;
    readonly offset?: number;
    readonly size?: number;
}
export function deserializeUploadPartMini(val: any): UploadPartMini {
    const partId: undefined | string = isJson(val.part_id, "string") ? val.part_id : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    return { partId: partId, offset: offset, size: size } satisfies UploadPartMini;
}
export function serializeUploadPartMini(val: UploadPartMini): Json {
    return { ["part_id"]: val.partId, ["offset"]: val.offset, ["size"]: val.size };
}
export type UploadPart = UploadPartMini & {
    /**
     * The SHA1 hash of the chunk. */
    readonly sha1?: string;
};
export function deserializeUploadPart(val: any): UploadPart {
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const partId: undefined | string = isJson(val.part_id, "string") ? val.part_id : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    return { sha1: sha1, partId: partId, offset: offset, size: size } satisfies UploadPart;
}
export function serializeUploadPart(val: UploadPart): Json {
    const base: any = serializeUploadPartMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"UploadPart\"";
    }
    return { ...base, ...{ ["sha1"]: val.sha1 } };
}
export interface UploadedPart {
    readonly part?: UploadPart;
}
export function deserializeUploadedPart(val: any): UploadedPart {
    const part: undefined | UploadPart = val.part == void 0 ? void 0 : deserializeUploadPart(val.part);
    return { part: part } satisfies UploadedPart;
}
export function serializeUploadedPart(val: UploadedPart): Json {
    return { ["part"]: val.part == void 0 ? void 0 : serializeUploadPart(val.part) };
}
export type UploadPartsOrderFieldDirectionField = "ASC" | "DESC";
export function deserializeUploadPartsOrderFieldDirectionField(val: any): UploadPartsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UploadPartsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUploadPartsOrderFieldDirectionField(val: UploadPartsOrderFieldDirectionField): Json {
    return val;
}
export interface UploadPartsOrderField {
    readonly by?: string;
    readonly direction?: UploadPartsOrderFieldDirectionField;
}
export function deserializeUploadPartsOrderField(val: any): UploadPartsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | UploadPartsOrderFieldDirectionField = val.direction == void 0 ? void 0 : deserializeUploadPartsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies UploadPartsOrderField;
}
export function serializeUploadPartsOrderField(val: UploadPartsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : serializeUploadPartsOrderFieldDirectionField(val.direction) };
}
export interface UploadParts {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly UploadPartsOrderField[];
    readonly entries?: readonly UploadPart[];
}
export function deserializeUploadParts(val: any): UploadParts {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly UploadPartsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return deserializeUploadPartsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly UploadPart[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeUploadPart(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies UploadParts;
}
export function serializeUploadParts(val: UploadParts): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: UploadPartsOrderField): any {
            return serializeUploadPartsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: UploadPart): any {
            return serializeUploadPart(item);
        }) as readonly any[] };
}
export type UploadSessionTypeField = "upload_session";
export function deserializeUploadSessionTypeField(val: any): UploadSessionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UploadSessionTypeField\"";
    }
    if (val == "upload_session") {
        return "upload_session";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUploadSessionTypeField(val: UploadSessionTypeField): Json {
    return val;
}
export interface UploadSessionSessionEndpointsField {
    readonly uploadPart?: string;
    readonly commit?: string;
    readonly abort?: string;
    readonly listParts?: string;
    readonly status?: string;
    readonly logEvent?: string;
}
export function deserializeUploadSessionSessionEndpointsField(val: any): UploadSessionSessionEndpointsField {
    const uploadPart: undefined | string = isJson(val.upload_part, "string") ? val.upload_part : void 0;
    const commit: undefined | string = isJson(val.commit, "string") ? val.commit : void 0;
    const abort: undefined | string = isJson(val.abort, "string") ? val.abort : void 0;
    const listParts: undefined | string = isJson(val.list_parts, "string") ? val.list_parts : void 0;
    const status: undefined | string = isJson(val.status, "string") ? val.status : void 0;
    const logEvent: undefined | string = isJson(val.log_event, "string") ? val.log_event : void 0;
    return { uploadPart: uploadPart, commit: commit, abort: abort, listParts: listParts, status: status, logEvent: logEvent } satisfies UploadSessionSessionEndpointsField;
}
export function serializeUploadSessionSessionEndpointsField(val: UploadSessionSessionEndpointsField): Json {
    return { ["upload_part"]: val.uploadPart, ["commit"]: val.commit, ["abort"]: val.abort, ["list_parts"]: val.listParts, ["status"]: val.status, ["log_event"]: val.logEvent };
}
export interface UploadSession {
    readonly id?: string;
    readonly type?: UploadSessionTypeField;
    readonly sessionExpiresAt?: string;
    readonly partSize?: number;
    readonly totalParts?: number;
    readonly numPartsProcessed?: number;
    readonly sessionEndpoints?: UploadSessionSessionEndpointsField;
}
export function deserializeUploadSession(val: any): UploadSession {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | UploadSessionTypeField = val.type == void 0 ? void 0 : deserializeUploadSessionTypeField(val.type);
    const sessionExpiresAt: undefined | string = isJson(val.session_expires_at, "string") ? val.session_expires_at : void 0;
    const partSize: undefined | number = isJson(val.part_size, "number") ? val.part_size : void 0;
    const totalParts: undefined | number = isJson(val.total_parts, "number") ? val.total_parts : void 0;
    const numPartsProcessed: undefined | number = isJson(val.num_parts_processed, "number") ? val.num_parts_processed : void 0;
    const sessionEndpoints: undefined | UploadSessionSessionEndpointsField = val.session_endpoints == void 0 ? void 0 : deserializeUploadSessionSessionEndpointsField(val.session_endpoints);
    return { id: id, type: type, sessionExpiresAt: sessionExpiresAt, partSize: partSize, totalParts: totalParts, numPartsProcessed: numPartsProcessed, sessionEndpoints: sessionEndpoints } satisfies UploadSession;
}
export function serializeUploadSession(val: UploadSession): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeUploadSessionTypeField(val.type), ["session_expires_at"]: val.sessionExpiresAt, ["part_size"]: val.partSize, ["total_parts"]: val.totalParts, ["num_parts_processed"]: val.numPartsProcessed, ["session_endpoints"]: val.sessionEndpoints == void 0 ? void 0 : serializeUploadSessionSessionEndpointsField(val.sessionEndpoints) };
}
export interface UploadUrl {
    readonly uploadUrl?: string;
    readonly uploadToken?: string;
}
export function deserializeUploadUrl(val: any): UploadUrl {
    const uploadUrl: undefined | string = isJson(val.upload_url, "string") ? val.upload_url : void 0;
    const uploadToken: undefined | string = isJson(val.upload_token, "string") ? val.upload_token : void 0;
    return { uploadUrl: uploadUrl, uploadToken: uploadToken } satisfies UploadUrl;
}
export function serializeUploadUrl(val: UploadUrl): Json {
    return { ["upload_url"]: val.uploadUrl, ["upload_token"]: val.uploadToken };
}
export type UserStatusField = "active" | "inactive" | "cannot_delete_edit" | "cannot_delete_edit_upload";
export function deserializeUserStatusField(val: any): UserStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UserStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "inactive") {
        return "inactive";
    }
    if (val == "cannot_delete_edit") {
        return "cannot_delete_edit";
    }
    if (val == "cannot_delete_edit_upload") {
        return "cannot_delete_edit_upload";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUserStatusField(val: UserStatusField): Json {
    return val;
}
export interface UserNotificationEmailField {
    readonly email?: string;
    readonly isConfirmed?: boolean;
}
export function deserializeUserNotificationEmailField(val: any): UserNotificationEmailField {
    const email: undefined | string = isJson(val.email, "string") ? val.email : void 0;
    const isConfirmed: undefined | boolean = isJson(val.is_confirmed, "boolean") ? val.is_confirmed : void 0;
    return { email: email, isConfirmed: isConfirmed } satisfies UserNotificationEmailField;
}
export function serializeUserNotificationEmailField(val: UserNotificationEmailField): Json {
    return { ["email"]: val.email, ["is_confirmed"]: val.isConfirmed };
}
export interface UserAvatarPicUrlsField {
    readonly small?: string;
    readonly large?: string;
    readonly preview?: string;
}
export function deserializeUserAvatarPicUrlsField(val: any): UserAvatarPicUrlsField {
    const small: undefined | string = isJson(val.small, "string") ? val.small : void 0;
    const large: undefined | string = isJson(val.large, "string") ? val.large : void 0;
    const preview: undefined | string = isJson(val.preview, "string") ? val.preview : void 0;
    return { small: small, large: large, preview: preview } satisfies UserAvatarPicUrlsField;
}
export function serializeUserAvatarPicUrlsField(val: UserAvatarPicUrlsField): Json {
    return { ["small"]: val.small, ["large"]: val.large, ["preview"]: val.preview };
}
export interface UserAvatar {
    readonly picUrls?: UserAvatarPicUrlsField;
}
export function deserializeUserAvatar(val: any): UserAvatar {
    const picUrls: undefined | UserAvatarPicUrlsField = val.pic_urls == void 0 ? void 0 : deserializeUserAvatarPicUrlsField(val.pic_urls);
    return { picUrls: picUrls } satisfies UserAvatar;
}
export function serializeUserAvatar(val: UserAvatar): Json {
    return { ["pic_urls"]: val.picUrls == void 0 ? void 0 : serializeUserAvatarPicUrlsField(val.picUrls) };
}
export type UsersOrderFieldDirectionField = "ASC" | "DESC";
export function deserializeUsersOrderFieldDirectionField(val: any): UsersOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UsersOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUsersOrderFieldDirectionField(val: UsersOrderFieldDirectionField): Json {
    return val;
}
export interface UsersOrderField {
    readonly by?: string;
    readonly direction?: UsersOrderFieldDirectionField;
}
export function deserializeUsersOrderField(val: any): UsersOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | UsersOrderFieldDirectionField = val.direction == void 0 ? void 0 : deserializeUsersOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies UsersOrderField;
}
export function serializeUsersOrderField(val: UsersOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : serializeUsersOrderFieldDirectionField(val.direction) };
}
export type UserFullRoleField = "admin" | "coadmin" | "user";
export function deserializeUserFullRoleField(val: any): UserFullRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UserFullRoleField\"";
    }
    if (val == "admin") {
        return "admin";
    }
    if (val == "coadmin") {
        return "coadmin";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUserFullRoleField(val: UserFullRoleField): Json {
    return val;
}
export type UserFullEnterpriseFieldTypeField = "enterprise";
export function deserializeUserFullEnterpriseFieldTypeField(val: any): UserFullEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UserFullEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUserFullEnterpriseFieldTypeField(val: UserFullEnterpriseFieldTypeField): Json {
    return val;
}
export interface UserFullEnterpriseField {
    readonly id?: string;
    readonly type?: UserFullEnterpriseFieldTypeField;
    readonly name?: string;
}
export function deserializeUserFullEnterpriseField(val: any): UserFullEnterpriseField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | UserFullEnterpriseFieldTypeField = val.type == void 0 ? void 0 : deserializeUserFullEnterpriseFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies UserFullEnterpriseField;
}
export function serializeUserFullEnterpriseField(val: UserFullEnterpriseField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeUserFullEnterpriseFieldTypeField(val.type), ["name"]: val.name };
}
export type UserBaseTypeField = "user";
export function deserializeUserBaseTypeField(val: any): UserBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UserBaseTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUserBaseTypeField(val: UserBaseTypeField): Json {
    return val;
}
export interface UserBase {
    readonly id?: string;
    readonly type: UserBaseTypeField;
}
export function deserializeUserBase(val: any): UserBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
    return { id: id, type: type } satisfies UserBase;
}
export function serializeUserBase(val: UserBase): Json {
    return { ["id"]: val.id, ["type"]: serializeUserBaseTypeField(val.type) };
}
export type UserIntegrationMappings = UserBase & {
    /**
     * The display name of this user */
    readonly name?: string;
    /**
     * The primary email address of this user */
    readonly login?: string;
};
export function deserializeUserIntegrationMappings(val: any): UserIntegrationMappings {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
    return { name: name, login: login, id: id, type: type } satisfies UserIntegrationMappings;
}
export function serializeUserIntegrationMappings(val: UserIntegrationMappings): Json {
    const base: any = serializeUserBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"UserIntegrationMappings\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["login"]: val.login } };
}
export type UserCollaborations = UserBase & {
    /**
     * The display name of this user. If the collaboration status is `pending`, an empty string is returned. */
    readonly name?: string;
    /**
     * The primary email address of this user. If the collaboration status is `pending`, an empty string is returned. */
    readonly login?: string;
};
export function deserializeUserCollaborations(val: any): UserCollaborations {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
    return { name: name, login: login, id: id, type: type } satisfies UserCollaborations;
}
export function serializeUserCollaborations(val: UserCollaborations): Json {
    const base: any = serializeUserBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"UserCollaborations\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["login"]: val.login } };
}
export type UserMini = UserBase & {
    /**
     * The display name of this user */
    readonly name?: string;
    /**
     * The primary email address of this user */
    readonly login?: string;
};
export function deserializeUserMini(val: any): UserMini {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
    return { name: name, login: login, id: id, type: type } satisfies UserMini;
}
export function serializeUserMini(val: UserMini): Json {
    const base: any = serializeUserBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"UserMini\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["login"]: val.login } };
}
export type User = UserMini & {
    /**
     * When the user object was created */
    readonly createdAt?: string;
    /**
     * When the user object was last modified */
    readonly modifiedAt?: string;
    /**
     * The language of the user, formatted in modified version of the
     * [ISO 639-1](/guides/api-calls/language-codes) format. */
    readonly language?: string;
    /**
     * The user's timezone */
    readonly timezone?: string;
    /**
     * The user’s total available space amount in bytes */
    readonly spaceAmount?: number;
    /**
     * The amount of space in use by the user */
    readonly spaceUsed?: number;
    /**
     * The maximum individual file size in bytes the user can have */
    readonly maxUploadSize?: number;
    /**
     * The user's account status */
    readonly status?: UserStatusField;
    /**
     * The user’s job title */
    readonly jobTitle?: string;
    /**
     * The user’s phone number */
    readonly phone?: string;
    /**
     * The user’s address */
    readonly address?: string;
    /**
     * URL of the user’s avatar image */
    readonly avatarUrl?: string;
    /**
     * An alternate notification email address to which email
     * notifications are sent. When it's confirmed, this will be
     * the email address to which notifications are sent instead of
     * to the primary email address. */
    readonly notificationEmail?: UserNotificationEmailField;
};
export function deserializeUser(val: any): User {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const language: undefined | string = isJson(val.language, "string") ? val.language : void 0;
    const timezone: undefined | string = isJson(val.timezone, "string") ? val.timezone : void 0;
    const spaceAmount: undefined | number = isJson(val.space_amount, "number") ? val.space_amount : void 0;
    const spaceUsed: undefined | number = isJson(val.space_used, "number") ? val.space_used : void 0;
    const maxUploadSize: undefined | number = isJson(val.max_upload_size, "number") ? val.max_upload_size : void 0;
    const status: undefined | UserStatusField = val.status == void 0 ? void 0 : deserializeUserStatusField(val.status);
    const jobTitle: undefined | string = isJson(val.job_title, "string") ? val.job_title : void 0;
    const phone: undefined | string = isJson(val.phone, "string") ? val.phone : void 0;
    const address: undefined | string = isJson(val.address, "string") ? val.address : void 0;
    const avatarUrl: undefined | string = isJson(val.avatar_url, "string") ? val.avatar_url : void 0;
    const notificationEmail: undefined | UserNotificationEmailField = val.notification_email == void 0 ? void 0 : deserializeUserNotificationEmailField(val.notification_email);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
    return { createdAt: createdAt, modifiedAt: modifiedAt, language: language, timezone: timezone, spaceAmount: spaceAmount, spaceUsed: spaceUsed, maxUploadSize: maxUploadSize, status: status, jobTitle: jobTitle, phone: phone, address: address, avatarUrl: avatarUrl, notificationEmail: notificationEmail, name: name, login: login, id: id, type: type } satisfies User;
}
export function serializeUser(val: User): Json {
    const base: any = serializeUserMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"User\"";
    }
    return { ...base, ...{ ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["language"]: val.language, ["timezone"]: val.timezone, ["space_amount"]: val.spaceAmount, ["space_used"]: val.spaceUsed, ["max_upload_size"]: val.maxUploadSize, ["status"]: val.status == void 0 ? void 0 : serializeUserStatusField(val.status), ["job_title"]: val.jobTitle, ["phone"]: val.phone, ["address"]: val.address, ["avatar_url"]: val.avatarUrl, ["notification_email"]: val.notificationEmail == void 0 ? void 0 : serializeUserNotificationEmailField(val.notificationEmail) } };
}
export interface Users {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly UsersOrderField[];
    readonly entries?: readonly User[];
}
export function deserializeUsers(val: any): Users {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly UsersOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return deserializeUsersOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly User[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeUser(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Users;
}
export function serializeUsers(val: Users): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: UsersOrderField): any {
            return serializeUsersOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: User): any {
            return serializeUser(item);
        }) as readonly any[] };
}
export interface TrashWebLinkRestored {
    readonly type?: TrashWebLinkRestoredTypeField;
    readonly id?: string;
    readonly sequenceId: string;
    readonly etag?: string;
    readonly name?: string;
    readonly url?: string;
    readonly parent?: FolderMini;
    readonly description?: string;
    readonly pathCollection: TrashWebLinkRestoredPathCollectionField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: string;
    readonly itemStatus?: TrashWebLinkRestoredItemStatusField;
}
export function deserializeTrashWebLinkRestored(val: any): TrashWebLinkRestored {
    const type: undefined | TrashWebLinkRestoredTypeField = val.type == void 0 ? void 0 : deserializeTrashWebLinkRestoredTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const sequenceId: string = val.sequence_id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const pathCollection: TrashWebLinkRestoredPathCollectionField = deserializeTrashWebLinkRestoredPathCollectionField(val.path_collection);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const itemStatus: undefined | TrashWebLinkRestoredItemStatusField = val.item_status == void 0 ? void 0 : deserializeTrashWebLinkRestoredItemStatusField(val.item_status);
    return { type: type, id: id, sequenceId: sequenceId, etag: etag, name: name, url: url, parent: parent, description: description, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, itemStatus: itemStatus } satisfies TrashWebLinkRestored;
}
export function serializeTrashWebLinkRestored(val: TrashWebLinkRestored): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeTrashWebLinkRestoredTypeField(val.type), ["id"]: val.id, ["sequence_id"]: val.sequenceId, ["etag"]: val.etag, ["name"]: val.name, ["url"]: val.url, ["parent"]: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent), ["description"]: val.description, ["path_collection"]: serializeTrashWebLinkRestoredPathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy), ["owned_by"]: val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["item_status"]: val.itemStatus == void 0 ? void 0 : serializeTrashWebLinkRestoredItemStatusField(val.itemStatus) };
}
export interface TrashFolderRestored {
    readonly id?: string;
    readonly etag?: string;
    readonly type?: TrashFolderRestoredTypeField;
    readonly sequenceId?: string;
    readonly name?: string;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
    readonly description?: string;
    readonly size?: number;
    readonly pathCollection?: TrashFolderRestoredPathCollectionField;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly contentCreatedAt?: string;
    readonly contentModifiedAt?: string;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: string;
    readonly folderUploadEmail?: string;
    readonly parent?: FolderMini;
    readonly itemStatus?: TrashFolderRestoredItemStatusField;
}
export function deserializeTrashFolderRestored(val: any): TrashFolderRestored {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: undefined | TrashFolderRestoredTypeField = val.type == void 0 ? void 0 : deserializeTrashFolderRestoredTypeField(val.type);
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const pathCollection: undefined | TrashFolderRestoredPathCollectionField = val.path_collection == void 0 ? void 0 : deserializeTrashFolderRestoredPathCollectionField(val.path_collection);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const folderUploadEmail: undefined | string = isJson(val.folder_upload_email, "string") ? val.folder_upload_email : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus: undefined | TrashFolderRestoredItemStatusField = val.item_status == void 0 ? void 0 : deserializeTrashFolderRestoredItemStatusField(val.item_status);
    return { id: id, etag: etag, type: type, sequenceId: sequenceId, name: name, createdAt: createdAt, modifiedAt: modifiedAt, description: description, size: size, pathCollection: pathCollection, createdBy: createdBy, modifiedBy: modifiedBy, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, ownedBy: ownedBy, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, parent: parent, itemStatus: itemStatus } satisfies TrashFolderRestored;
}
export function serializeTrashFolderRestored(val: TrashFolderRestored): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: val.type == void 0 ? void 0 : serializeTrashFolderRestoredTypeField(val.type), ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["description"]: val.description, ["size"]: val.size, ["path_collection"]: val.pathCollection == void 0 ? void 0 : serializeTrashFolderRestoredPathCollectionField(val.pathCollection), ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy), ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["owned_by"]: val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["folder_upload_email"]: val.folderUploadEmail, ["parent"]: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent), ["item_status"]: val.itemStatus == void 0 ? void 0 : serializeTrashFolderRestoredItemStatusField(val.itemStatus) };
}
export interface TrashFileRestored {
    readonly id: string;
    readonly etag?: string;
    readonly type: TrashFileRestoredTypeField;
    readonly sequenceId: string;
    readonly name?: string;
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFileRestoredPathCollectionField;
    readonly createdAt: string;
    readonly modifiedAt: string;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly contentCreatedAt?: string;
    readonly contentModifiedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFileRestoredItemStatusField;
}
export function deserializeTrashFileRestored(val: any): TrashFileRestored {
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: TrashFileRestoredTypeField = deserializeTrashFileRestoredTypeField(val.type);
    const sequenceId: string = val.sequence_id;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sha1: string = val.sha1;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    const description: string = val.description;
    const size: number = val.size;
    const pathCollection: TrashFileRestoredPathCollectionField = deserializeTrashFileRestoredPathCollectionField(val.path_collection);
    const createdAt: string = val.created_at;
    const modifiedAt: string = val.modified_at;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
    const ownedBy: UserMini = deserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus: TrashFileRestoredItemStatusField = deserializeTrashFileRestoredItemStatusField(val.item_status);
    return { id: id, etag: etag, type: type, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus } satisfies TrashFileRestored;
}
export function serializeTrashFileRestored(val: TrashFileRestored): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeTrashFileRestoredTypeField(val.type), ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["sha1"]: val.sha1, ["file_version"]: val.fileVersion == void 0 ? void 0 : serializeFileVersionMini(val.fileVersion), ["description"]: val.description, ["size"]: val.size, ["path_collection"]: serializeTrashFileRestoredPathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: serializeUserMini(val.modifiedBy), ["owned_by"]: serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["parent"]: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent), ["item_status"]: serializeTrashFileRestoredItemStatusField(val.itemStatus) };
}
export interface TrashWebLink {
    readonly type?: TrashWebLinkTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
    readonly url?: string;
    readonly parent?: FolderMini;
    readonly description?: string;
    readonly pathCollection?: TrashWebLinkPathCollectionField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: string;
    readonly itemStatus?: TrashWebLinkItemStatusField;
}
export function deserializeTrashWebLink(val: any): TrashWebLink {
    const type: undefined | TrashWebLinkTypeField = val.type == void 0 ? void 0 : deserializeTrashWebLinkTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const pathCollection: undefined | TrashWebLinkPathCollectionField = val.path_collection == void 0 ? void 0 : deserializeTrashWebLinkPathCollectionField(val.path_collection);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const itemStatus: undefined | TrashWebLinkItemStatusField = val.item_status == void 0 ? void 0 : deserializeTrashWebLinkItemStatusField(val.item_status);
    return { type: type, id: id, sequenceId: sequenceId, etag: etag, name: name, url: url, parent: parent, description: description, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, itemStatus: itemStatus } satisfies TrashWebLink;
}
export function serializeTrashWebLink(val: TrashWebLink): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeTrashWebLinkTypeField(val.type), ["id"]: val.id, ["sequence_id"]: val.sequenceId, ["etag"]: val.etag, ["name"]: val.name, ["url"]: val.url, ["parent"]: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent), ["description"]: val.description, ["path_collection"]: val.pathCollection == void 0 ? void 0 : serializeTrashWebLinkPathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy), ["owned_by"]: val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["item_status"]: val.itemStatus == void 0 ? void 0 : serializeTrashWebLinkItemStatusField(val.itemStatus) };
}
export interface TrashFolder {
    readonly id: string;
    readonly etag?: string;
    readonly type: TrashFolderTypeField;
    readonly sequenceId?: string;
    readonly name: string;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFolderPathCollectionField;
    readonly createdBy: UserMini;
    readonly modifiedBy: UserMini;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly contentCreatedAt?: string;
    readonly contentModifiedAt?: string;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly folderUploadEmail?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFolderItemStatusField;
}
export function deserializeTrashFolder(val: any): TrashFolder {
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: TrashFolderTypeField = deserializeTrashFolderTypeField(val.type);
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: string = val.name;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const description: string = val.description;
    const size: number = val.size;
    const pathCollection: TrashFolderPathCollectionField = deserializeTrashFolderPathCollectionField(val.path_collection);
    const createdBy: UserMini = deserializeUserMini(val.created_by);
    const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const ownedBy: UserMini = deserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const folderUploadEmail: undefined | string = isJson(val.folder_upload_email, "string") ? val.folder_upload_email : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus: TrashFolderItemStatusField = deserializeTrashFolderItemStatusField(val.item_status);
    return { id: id, etag: etag, type: type, sequenceId: sequenceId, name: name, createdAt: createdAt, modifiedAt: modifiedAt, description: description, size: size, pathCollection: pathCollection, createdBy: createdBy, modifiedBy: modifiedBy, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, ownedBy: ownedBy, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, parent: parent, itemStatus: itemStatus } satisfies TrashFolder;
}
export function serializeTrashFolder(val: TrashFolder): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeTrashFolderTypeField(val.type), ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["description"]: val.description, ["size"]: val.size, ["path_collection"]: serializeTrashFolderPathCollectionField(val.pathCollection), ["created_by"]: serializeUserMini(val.createdBy), ["modified_by"]: serializeUserMini(val.modifiedBy), ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["owned_by"]: serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["folder_upload_email"]: val.folderUploadEmail, ["parent"]: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent), ["item_status"]: serializeTrashFolderItemStatusField(val.itemStatus) };
}
export interface TrashFile {
    readonly id: string;
    readonly etag?: string;
    readonly type: TrashFileTypeField;
    readonly sequenceId: string;
    readonly name?: string;
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFilePathCollectionField;
    readonly createdAt: string;
    readonly modifiedAt: string;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly contentCreatedAt?: string;
    readonly contentModifiedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFileItemStatusField;
}
export function deserializeTrashFile(val: any): TrashFile {
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: TrashFileTypeField = deserializeTrashFileTypeField(val.type);
    const sequenceId: string = val.sequence_id;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sha1: string = val.sha1;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    const description: string = val.description;
    const size: number = val.size;
    const pathCollection: TrashFilePathCollectionField = deserializeTrashFilePathCollectionField(val.path_collection);
    const createdAt: string = val.created_at;
    const modifiedAt: string = val.modified_at;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
    const ownedBy: UserMini = deserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus: TrashFileItemStatusField = deserializeTrashFileItemStatusField(val.item_status);
    return { id: id, etag: etag, type: type, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus } satisfies TrashFile;
}
export function serializeTrashFile(val: TrashFile): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: serializeTrashFileTypeField(val.type), ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["sha1"]: val.sha1, ["file_version"]: val.fileVersion == void 0 ? void 0 : serializeFileVersionMini(val.fileVersion), ["description"]: val.description, ["size"]: val.size, ["path_collection"]: serializeTrashFilePathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: serializeUserMini(val.modifiedBy), ["owned_by"]: serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["parent"]: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent), ["item_status"]: serializeTrashFileItemStatusField(val.itemStatus) };
}
export interface TermsOfServiceUserStatus {
    readonly id?: string;
    readonly type?: TermsOfServiceUserStatusTypeField;
    readonly tos?: TermsOfServiceBase;
    readonly user?: UserMini;
    readonly isAccepted?: boolean;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export function deserializeTermsOfServiceUserStatus(val: any): TermsOfServiceUserStatus {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TermsOfServiceUserStatusTypeField = val.type == void 0 ? void 0 : deserializeTermsOfServiceUserStatusTypeField(val.type);
    const tos: undefined | TermsOfServiceBase = val.tos == void 0 ? void 0 : deserializeTermsOfServiceBase(val.tos);
    const user: undefined | UserMini = val.user == void 0 ? void 0 : deserializeUserMini(val.user);
    const isAccepted: undefined | boolean = isJson(val.is_accepted, "boolean") ? val.is_accepted : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    return { id: id, type: type, tos: tos, user: user, isAccepted: isAccepted, createdAt: createdAt, modifiedAt: modifiedAt } satisfies TermsOfServiceUserStatus;
}
export function serializeTermsOfServiceUserStatus(val: TermsOfServiceUserStatus): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeTermsOfServiceUserStatusTypeField(val.type), ["tos"]: val.tos == void 0 ? void 0 : serializeTermsOfServiceBase(val.tos), ["user"]: val.user == void 0 ? void 0 : serializeUserMini(val.user), ["is_accepted"]: val.isAccepted, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt };
}
export interface TermsOfServiceUserStatuses {
    readonly totalCount?: number;
    readonly entries?: readonly TermsOfServiceUserStatus[];
}
export function deserializeTermsOfServiceUserStatuses(val: any): TermsOfServiceUserStatuses {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly TermsOfServiceUserStatus[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeTermsOfServiceUserStatus(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies TermsOfServiceUserStatuses;
}
export function serializeTermsOfServiceUserStatuses(val: TermsOfServiceUserStatuses): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: TermsOfServiceUserStatus): any {
            return serializeTermsOfServiceUserStatus(item);
        }) as readonly any[] };
}
export interface TaskAssignment {
    readonly id?: string;
    readonly type?: TaskAssignmentTypeField;
    readonly item?: FileMini;
    readonly assignedTo?: UserMini;
    readonly message?: string;
    readonly completedAt?: string;
    readonly assignedAt?: string;
    readonly remindedAt?: string;
    readonly resolutionState?: TaskAssignmentResolutionStateField;
    readonly assignedBy?: UserMini;
}
export function deserializeTaskAssignment(val: any): TaskAssignment {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TaskAssignmentTypeField = val.type == void 0 ? void 0 : deserializeTaskAssignmentTypeField(val.type);
    const item: undefined | FileMini = val.item == void 0 ? void 0 : deserializeFileMini(val.item);
    const assignedTo: undefined | UserMini = val.assigned_to == void 0 ? void 0 : deserializeUserMini(val.assigned_to);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const completedAt: undefined | string = isJson(val.completed_at, "string") ? val.completed_at : void 0;
    const assignedAt: undefined | string = isJson(val.assigned_at, "string") ? val.assigned_at : void 0;
    const remindedAt: undefined | string = isJson(val.reminded_at, "string") ? val.reminded_at : void 0;
    const resolutionState: undefined | TaskAssignmentResolutionStateField = val.resolution_state == void 0 ? void 0 : deserializeTaskAssignmentResolutionStateField(val.resolution_state);
    const assignedBy: undefined | UserMini = val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
    return { id: id, type: type, item: item, assignedTo: assignedTo, message: message, completedAt: completedAt, assignedAt: assignedAt, remindedAt: remindedAt, resolutionState: resolutionState, assignedBy: assignedBy } satisfies TaskAssignment;
}
export function serializeTaskAssignment(val: TaskAssignment): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeTaskAssignmentTypeField(val.type), ["item"]: val.item == void 0 ? void 0 : serializeFileMini(val.item), ["assigned_to"]: val.assignedTo == void 0 ? void 0 : serializeUserMini(val.assignedTo), ["message"]: val.message, ["completed_at"]: val.completedAt, ["assigned_at"]: val.assignedAt, ["reminded_at"]: val.remindedAt, ["resolution_state"]: val.resolutionState == void 0 ? void 0 : serializeTaskAssignmentResolutionStateField(val.resolutionState), ["assigned_by"]: val.assignedBy == void 0 ? void 0 : serializeUserMini(val.assignedBy) };
}
export interface TaskAssignments {
    readonly totalCount?: number;
    readonly entries?: readonly TaskAssignment[];
}
export function deserializeTaskAssignments(val: any): TaskAssignments {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly TaskAssignment[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeTaskAssignment(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies TaskAssignments;
}
export function serializeTaskAssignments(val: TaskAssignments): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: TaskAssignment): any {
            return serializeTaskAssignment(item);
        }) as readonly any[] };
}
export interface Task {
    readonly id?: string;
    readonly type?: TaskTypeField;
    readonly item?: FileMini;
    readonly dueAt?: string;
    readonly action?: TaskActionField;
    readonly message?: string;
    readonly taskAssignmentCollection?: TaskAssignments;
    readonly isCompleted?: boolean;
    readonly createdBy?: UserMini;
    readonly createdAt?: string;
    readonly completionRule?: TaskCompletionRuleField;
}
export function deserializeTask(val: any): Task {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TaskTypeField = val.type == void 0 ? void 0 : deserializeTaskTypeField(val.type);
    const item: undefined | FileMini = val.item == void 0 ? void 0 : deserializeFileMini(val.item);
    const dueAt: undefined | string = isJson(val.due_at, "string") ? val.due_at : void 0;
    const action: undefined | TaskActionField = val.action == void 0 ? void 0 : deserializeTaskActionField(val.action);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const taskAssignmentCollection: undefined | TaskAssignments = val.task_assignment_collection == void 0 ? void 0 : deserializeTaskAssignments(val.task_assignment_collection);
    const isCompleted: undefined | boolean = isJson(val.is_completed, "boolean") ? val.is_completed : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const completionRule: undefined | TaskCompletionRuleField = val.completion_rule == void 0 ? void 0 : deserializeTaskCompletionRuleField(val.completion_rule);
    return { id: id, type: type, item: item, dueAt: dueAt, action: action, message: message, taskAssignmentCollection: taskAssignmentCollection, isCompleted: isCompleted, createdBy: createdBy, createdAt: createdAt, completionRule: completionRule } satisfies Task;
}
export function serializeTask(val: Task): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeTaskTypeField(val.type), ["item"]: val.item == void 0 ? void 0 : serializeFileMini(val.item), ["due_at"]: val.dueAt, ["action"]: val.action == void 0 ? void 0 : serializeTaskActionField(val.action), ["message"]: val.message, ["task_assignment_collection"]: val.taskAssignmentCollection == void 0 ? void 0 : serializeTaskAssignments(val.taskAssignmentCollection), ["is_completed"]: val.isCompleted, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["completion_rule"]: val.completionRule == void 0 ? void 0 : serializeTaskCompletionRuleField(val.completionRule) };
}
export interface Tasks {
    readonly totalCount?: number;
    readonly entries?: readonly Task[];
}
export function deserializeTasks(val: any): Tasks {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly Task[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeTask(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies Tasks;
}
export function serializeTasks(val: Tasks): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Task): any {
            return serializeTask(item);
        }) as readonly any[] };
}
export interface RetentionPolicyAssignment {
    readonly id?: string;
    readonly type?: RetentionPolicyAssignmentTypeField;
    readonly retentionPolicy?: RetentionPolicyMini;
    readonly assignedTo?: RetentionPolicyAssignmentAssignedToField;
    readonly filterFields?: readonly RetentionPolicyAssignmentFilterFieldsField[];
    readonly assignedBy?: UserMini;
    readonly assignedAt?: string;
    readonly startDateField?: string;
}
export function deserializeRetentionPolicyAssignment(val: any): RetentionPolicyAssignment {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | RetentionPolicyAssignmentTypeField = val.type == void 0 ? void 0 : deserializeRetentionPolicyAssignmentTypeField(val.type);
    const retentionPolicy: undefined | RetentionPolicyMini = val.retention_policy == void 0 ? void 0 : deserializeRetentionPolicyMini(val.retention_policy);
    const assignedTo: undefined | RetentionPolicyAssignmentAssignedToField = val.assigned_to == void 0 ? void 0 : deserializeRetentionPolicyAssignmentAssignedToField(val.assigned_to);
    const filterFields: undefined | readonly RetentionPolicyAssignmentFilterFieldsField[] = isJson(val.filter_fields, "array") ? val.filter_fields.map(function (itm: Json): any {
        return deserializeRetentionPolicyAssignmentFilterFieldsField(itm);
    }) as readonly any[] : void 0;
    const assignedBy: undefined | UserMini = val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
    const assignedAt: undefined | string = isJson(val.assigned_at, "string") ? val.assigned_at : void 0;
    const startDateField: undefined | string = isJson(val.start_date_field, "string") ? val.start_date_field : void 0;
    return { id: id, type: type, retentionPolicy: retentionPolicy, assignedTo: assignedTo, filterFields: filterFields, assignedBy: assignedBy, assignedAt: assignedAt, startDateField: startDateField } satisfies RetentionPolicyAssignment;
}
export function serializeRetentionPolicyAssignment(val: RetentionPolicyAssignment): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeRetentionPolicyAssignmentTypeField(val.type), ["retention_policy"]: val.retentionPolicy == void 0 ? void 0 : serializeRetentionPolicyMini(val.retentionPolicy), ["assigned_to"]: val.assignedTo == void 0 ? void 0 : serializeRetentionPolicyAssignmentAssignedToField(val.assignedTo), ["filter_fields"]: val.filterFields == void 0 ? void 0 : val.filterFields.map(function (item: RetentionPolicyAssignmentFilterFieldsField): any {
            return serializeRetentionPolicyAssignmentFilterFieldsField(item);
        }) as readonly any[], ["assigned_by"]: val.assignedBy == void 0 ? void 0 : serializeUserMini(val.assignedBy), ["assigned_at"]: val.assignedAt, ["start_date_field"]: val.startDateField };
}
export type RetentionPolicy = RetentionPolicyMini & {
    /**
     * The additional text description of the retention policy. */
    readonly description?: string;
    /**
     * The type of the retention policy. A retention
     * policy type can either be `finite`, where a
     * specific amount of time to retain the content is known
     * upfront, or `indefinite`, where the amount of time
     * to retain the content is still unknown. */
    readonly policyType?: RetentionPolicyPolicyTypeField;
    /**
     * Specifies the retention type:
     * 
     * * `modifiable`: You can modify the retention policy. For example,
     *  you can add or remove folders, shorten or lengthen
     *  the policy duration, or delete the assignment.
     *  Use this type if your retention policy
     *  is not related to any regulatory purposes.
     * 
     * * `non-modifiable`: You can modify the retention policy
     *  only in a limited way: add a folder, lengthen the duration,
     *  retire the policy, change the disposition action
     *  or notification settings. You cannot perform other actions,
     *  such as deleting the assignment or shortening the
     *  policy duration. Use this type to ensure
     *  compliance with regulatory retention policies. */
    readonly retentionType?: RetentionPolicyRetentionTypeField;
    /**
     * The status of the retention policy. The status of
     * a policy will be `active`, unless explicitly retired by an
     * administrator, in which case the status will be `retired`.
     * Once a policy has been retired, it cannot become
     * active again. */
    readonly status?: RetentionPolicyStatusField;
    readonly createdBy?: UserMini;
    /**
     * When the retention policy object was created. */
    readonly createdAt?: string;
    /**
     * When the retention policy object was last modified. */
    readonly modifiedAt?: string;
    /**
     * Determines if the owner of items under the policy
     * can extend the retention when the original
     * retention duration is about to end. */
    readonly canOwnerExtendRetention?: boolean;
    /**
     * Determines if owners and co-owners of items
     * under the policy are notified when
     * the retention duration is about to end. */
    readonly areOwnersNotified?: boolean;
    /**
     * A list of users notified when the retention policy duration is about to end. */
    readonly customNotificationRecipients?: readonly UserMini[];
    /**
     * Counts the retention policy assignments for each item type. */
    readonly assignmentCounts?: RetentionPolicyAssignmentCountsField;
};
export function deserializeRetentionPolicy(val: any): RetentionPolicy {
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const policyType: undefined | RetentionPolicyPolicyTypeField = val.policy_type == void 0 ? void 0 : deserializeRetentionPolicyPolicyTypeField(val.policy_type);
    const retentionType: undefined | RetentionPolicyRetentionTypeField = val.retention_type == void 0 ? void 0 : deserializeRetentionPolicyRetentionTypeField(val.retention_type);
    const status: undefined | RetentionPolicyStatusField = val.status == void 0 ? void 0 : deserializeRetentionPolicyStatusField(val.status);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const canOwnerExtendRetention: undefined | boolean = isJson(val.can_owner_extend_retention, "boolean") ? val.can_owner_extend_retention : void 0;
    const areOwnersNotified: undefined | boolean = isJson(val.are_owners_notified, "boolean") ? val.are_owners_notified : void 0;
    const customNotificationRecipients: undefined | readonly UserMini[] = isJson(val.custom_notification_recipients, "array") ? val.custom_notification_recipients.map(function (itm: Json): any {
        return deserializeUserMini(itm);
    }) as readonly any[] : void 0;
    const assignmentCounts: undefined | RetentionPolicyAssignmentCountsField = val.assignment_counts == void 0 ? void 0 : deserializeRetentionPolicyAssignmentCountsField(val.assignment_counts);
    const policyName: undefined | string = isJson(val.policy_name, "string") ? val.policy_name : void 0;
    const retentionLength: undefined | string = isJson(val.retention_length, "string") ? val.retention_length : void 0;
    const dispositionAction: undefined | RetentionPolicyMiniDispositionActionField = val.disposition_action == void 0 ? void 0 : deserializeRetentionPolicyMiniDispositionActionField(val.disposition_action);
    const id: string = val.id;
    const type: RetentionPolicyBaseTypeField = deserializeRetentionPolicyBaseTypeField(val.type);
    return { description: description, policyType: policyType, retentionType: retentionType, status: status, createdBy: createdBy, createdAt: createdAt, modifiedAt: modifiedAt, canOwnerExtendRetention: canOwnerExtendRetention, areOwnersNotified: areOwnersNotified, customNotificationRecipients: customNotificationRecipients, assignmentCounts: assignmentCounts, policyName: policyName, retentionLength: retentionLength, dispositionAction: dispositionAction, id: id, type: type } satisfies RetentionPolicy;
}
export function serializeRetentionPolicy(val: RetentionPolicy): Json {
    const base: any = serializeRetentionPolicyMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"RetentionPolicy\"";
    }
    return { ...base, ...{ ["description"]: val.description, ["policy_type"]: val.policyType == void 0 ? void 0 : serializeRetentionPolicyPolicyTypeField(val.policyType), ["retention_type"]: val.retentionType == void 0 ? void 0 : serializeRetentionPolicyRetentionTypeField(val.retentionType), ["status"]: val.status == void 0 ? void 0 : serializeRetentionPolicyStatusField(val.status), ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["can_owner_extend_retention"]: val.canOwnerExtendRetention, ["are_owners_notified"]: val.areOwnersNotified, ["custom_notification_recipients"]: val.customNotificationRecipients == void 0 ? void 0 : val.customNotificationRecipients.map(function (item: UserMini): any {
                return serializeUserMini(item);
            }) as readonly any[], ["assignment_counts"]: val.assignmentCounts == void 0 ? void 0 : serializeRetentionPolicyAssignmentCountsField(val.assignmentCounts) } };
}
export type LegalHoldPolicy = LegalHoldPolicyMini & {
    /**
     * Name of the legal hold policy. */
    readonly policyName?: string;
    /**
     * Description of the legal hold policy. Optional
     * property with a 500 character limit. */
    readonly description?: string;
    /**
     * * 'active' - the policy is not in a transition state
     * * 'applying' - that the policy is in the process of
     *   being applied
     * * 'releasing' - that the process is in the process
     *   of being released
     * * 'released' - the policy is no longer active */
    readonly status?: LegalHoldPolicyStatusField;
    /**
     * Counts of assignments within this a legal hold policy by item type */
    readonly assignmentCounts?: LegalHoldPolicyAssignmentCountsField;
    readonly createdBy?: UserMini;
    /**
     * When the legal hold policy object was created */
    readonly createdAt?: string;
    /**
     * When the legal hold policy object was modified.
     * Does not update when assignments are added or removed. */
    readonly modifiedAt?: string;
    /**
     * When the policy release request was sent. (Because
     * it can take time for a policy to fully delete, this
     * isn't quite the same time that the policy is fully deleted).
     * 
     * If `null`, the policy was not deleted. */
    readonly deletedAt?: string;
    /**
     * User-specified, optional date filter applies to
     * Custodian assignments only */
    readonly filterStartedAt?: string;
    /**
     * User-specified, optional date filter applies to
     * Custodian assignments only */
    readonly filterEndedAt?: string;
    /**
     * Optional notes about why the policy was created. */
    readonly releaseNotes?: string;
};
export function deserializeLegalHoldPolicy(val: any): LegalHoldPolicy {
    const policyName: undefined | string = isJson(val.policy_name, "string") ? val.policy_name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const status: undefined | LegalHoldPolicyStatusField = val.status == void 0 ? void 0 : deserializeLegalHoldPolicyStatusField(val.status);
    const assignmentCounts: undefined | LegalHoldPolicyAssignmentCountsField = val.assignment_counts == void 0 ? void 0 : deserializeLegalHoldPolicyAssignmentCountsField(val.assignment_counts);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const deletedAt: undefined | string = isJson(val.deleted_at, "string") ? val.deleted_at : void 0;
    const filterStartedAt: undefined | string = isJson(val.filter_started_at, "string") ? val.filter_started_at : void 0;
    const filterEndedAt: undefined | string = isJson(val.filter_ended_at, "string") ? val.filter_ended_at : void 0;
    const releaseNotes: undefined | string = isJson(val.release_notes, "string") ? val.release_notes : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | LegalHoldPolicyMiniTypeField = val.type == void 0 ? void 0 : deserializeLegalHoldPolicyMiniTypeField(val.type);
    return { policyName: policyName, description: description, status: status, assignmentCounts: assignmentCounts, createdBy: createdBy, createdAt: createdAt, modifiedAt: modifiedAt, deletedAt: deletedAt, filterStartedAt: filterStartedAt, filterEndedAt: filterEndedAt, releaseNotes: releaseNotes, id: id, type: type } satisfies LegalHoldPolicy;
}
export function serializeLegalHoldPolicy(val: LegalHoldPolicy): Json {
    const base: any = serializeLegalHoldPolicyMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"LegalHoldPolicy\"";
    }
    return { ...base, ...{ ["policy_name"]: val.policyName, ["description"]: val.description, ["status"]: val.status == void 0 ? void 0 : serializeLegalHoldPolicyStatusField(val.status), ["assignment_counts"]: val.assignmentCounts == void 0 ? void 0 : serializeLegalHoldPolicyAssignmentCountsField(val.assignmentCounts), ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["deleted_at"]: val.deletedAt, ["filter_started_at"]: val.filterStartedAt, ["filter_ended_at"]: val.filterEndedAt, ["release_notes"]: val.releaseNotes } };
}
export interface LegalHoldPolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly LegalHoldPolicy[];
}
export function deserializeLegalHoldPolicies(val: any): LegalHoldPolicies {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly LegalHoldPolicy[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeLegalHoldPolicy(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies LegalHoldPolicies;
}
export function serializeLegalHoldPolicies(val: LegalHoldPolicies): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: LegalHoldPolicy): any {
            return serializeLegalHoldPolicy(item);
        }) as readonly any[] };
}
export interface Invite {
    readonly id?: string;
    readonly type?: InviteTypeField;
    readonly invitedTo?: InviteInvitedToField;
    readonly actionableBy?: UserMini;
    readonly invitedBy?: UserMini;
    readonly status?: string;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export function deserializeInvite(val: any): Invite {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | InviteTypeField = val.type == void 0 ? void 0 : deserializeInviteTypeField(val.type);
    const invitedTo: undefined | InviteInvitedToField = val.invited_to == void 0 ? void 0 : deserializeInviteInvitedToField(val.invited_to);
    const actionableBy: undefined | UserMini = val.actionable_by == void 0 ? void 0 : deserializeUserMini(val.actionable_by);
    const invitedBy: undefined | UserMini = val.invited_by == void 0 ? void 0 : deserializeUserMini(val.invited_by);
    const status: undefined | string = isJson(val.status, "string") ? val.status : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    return { id: id, type: type, invitedTo: invitedTo, actionableBy: actionableBy, invitedBy: invitedBy, status: status, createdAt: createdAt, modifiedAt: modifiedAt } satisfies Invite;
}
export function serializeInvite(val: Invite): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeInviteTypeField(val.type), ["invited_to"]: val.invitedTo == void 0 ? void 0 : serializeInviteInvitedToField(val.invitedTo), ["actionable_by"]: val.actionableBy == void 0 ? void 0 : serializeUserMini(val.actionableBy), ["invited_by"]: val.invitedBy == void 0 ? void 0 : serializeUserMini(val.invitedBy), ["status"]: val.status, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt };
}
export interface GroupMembership {
    readonly id?: string;
    readonly type?: GroupMembershipTypeField;
    readonly user?: UserMini;
    readonly group?: GroupMini;
    readonly role?: GroupMembershipRoleField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export function deserializeGroupMembership(val: any): GroupMembership {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | GroupMembershipTypeField = val.type == void 0 ? void 0 : deserializeGroupMembershipTypeField(val.type);
    const user: undefined | UserMini = val.user == void 0 ? void 0 : deserializeUserMini(val.user);
    const group: undefined | GroupMini = val.group == void 0 ? void 0 : deserializeGroupMini(val.group);
    const role: undefined | GroupMembershipRoleField = val.role == void 0 ? void 0 : deserializeGroupMembershipRoleField(val.role);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    return { id: id, type: type, user: user, group: group, role: role, createdAt: createdAt, modifiedAt: modifiedAt } satisfies GroupMembership;
}
export function serializeGroupMembership(val: GroupMembership): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeGroupMembershipTypeField(val.type), ["user"]: val.user == void 0 ? void 0 : serializeUserMini(val.user), ["group"]: val.group == void 0 ? void 0 : serializeGroupMini(val.group), ["role"]: val.role == void 0 ? void 0 : serializeGroupMembershipRoleField(val.role), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt };
}
export interface GroupMemberships {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly GroupMembershipsOrderField[];
    readonly entries?: readonly GroupMembership[];
}
export function deserializeGroupMemberships(val: any): GroupMemberships {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly GroupMembershipsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return deserializeGroupMembershipsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly GroupMembership[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeGroupMembership(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies GroupMemberships;
}
export function serializeGroupMemberships(val: GroupMemberships): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: GroupMembershipsOrderField): any {
            return serializeGroupMembershipsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: GroupMembership): any {
            return serializeGroupMembership(item);
        }) as readonly any[] };
}
export type FileVersion = FileVersionMini & {
    /**
     * The name of the file version */
    readonly name?: string;
    /**
     * Size of the file version in bytes */
    readonly size?: number;
    /**
     * When the file version object was created */
    readonly createdAt?: string;
    /**
     * When the file version object was last updated */
    readonly modifiedAt?: string;
    readonly modifiedBy?: UserMini;
    /**
     * When the file version object was trashed. */
    readonly trashedAt?: string;
    readonly trashedBy?: UserMini;
    /**
     * When the file version was restored from the trash. */
    readonly restoredAt?: string;
    readonly restoredBy?: UserMini;
    /**
     * When the file version object will be permanently deleted. */
    readonly purgedAt?: string;
    readonly uploaderDisplayName?: string;
};
export function deserializeFileVersion(val: any): FileVersion {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const trashedBy: undefined | UserMini = val.trashed_by == void 0 ? void 0 : deserializeUserMini(val.trashed_by);
    const restoredAt: undefined | string = isJson(val.restored_at, "string") ? val.restored_at : void 0;
    const restoredBy: undefined | UserMini = val.restored_by == void 0 ? void 0 : deserializeUserMini(val.restored_by);
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const uploaderDisplayName: undefined | string = isJson(val.uploader_display_name, "string") ? val.uploader_display_name : void 0;
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const id: string = val.id;
    const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(val.type);
    return { name: name, size: size, createdAt: createdAt, modifiedAt: modifiedAt, modifiedBy: modifiedBy, trashedAt: trashedAt, trashedBy: trashedBy, restoredAt: restoredAt, restoredBy: restoredBy, purgedAt: purgedAt, uploaderDisplayName: uploaderDisplayName, sha1: sha1, id: id, type: type } satisfies FileVersion;
}
export function serializeFileVersion(val: FileVersion): Json {
    const base: any = serializeFileVersionMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileVersion\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["size"]: val.size, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["modified_by"]: val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy), ["trashed_at"]: val.trashedAt, ["trashed_by"]: val.trashedBy == void 0 ? void 0 : serializeUserMini(val.trashedBy), ["restored_at"]: val.restoredAt, ["restored_by"]: val.restoredBy == void 0 ? void 0 : serializeUserMini(val.restoredBy), ["purged_at"]: val.purgedAt, ["uploader_display_name"]: val.uploaderDisplayName } };
}
export interface FileVersions {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly FileVersionsOrderField[];
    readonly entries?: readonly FileVersion[];
}
export function deserializeFileVersions(val: any): FileVersions {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly FileVersionsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return deserializeFileVersionsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly FileVersion[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeFileVersion(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies FileVersions;
}
export function serializeFileVersions(val: FileVersions): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: FileVersionsOrderField): any {
            return serializeFileVersionsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileVersion): any {
            return serializeFileVersion(item);
        }) as readonly any[] };
}
export type FileVersionFull = FileVersion & {
    /**
     * The version number of this file version */
    readonly versionNumber?: string;
};
export function deserializeFileVersionFull(val: any): FileVersionFull {
    const versionNumber: undefined | string = isJson(val.version_number, "string") ? val.version_number : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const trashedBy: undefined | UserMini = val.trashed_by == void 0 ? void 0 : deserializeUserMini(val.trashed_by);
    const restoredAt: undefined | string = isJson(val.restored_at, "string") ? val.restored_at : void 0;
    const restoredBy: undefined | UserMini = val.restored_by == void 0 ? void 0 : deserializeUserMini(val.restored_by);
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const uploaderDisplayName: undefined | string = isJson(val.uploader_display_name, "string") ? val.uploader_display_name : void 0;
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const id: string = val.id;
    const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(val.type);
    return { versionNumber: versionNumber, name: name, size: size, createdAt: createdAt, modifiedAt: modifiedAt, modifiedBy: modifiedBy, trashedAt: trashedAt, trashedBy: trashedBy, restoredAt: restoredAt, restoredBy: restoredBy, purgedAt: purgedAt, uploaderDisplayName: uploaderDisplayName, sha1: sha1, id: id, type: type } satisfies FileVersionFull;
}
export function serializeFileVersionFull(val: FileVersionFull): Json {
    const base: any = serializeFileVersion(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileVersionFull\"";
    }
    return { ...base, ...{ ["version_number"]: val.versionNumber } };
}
export interface FileRequest {
    readonly id?: string;
    readonly type?: FileRequestTypeField;
    readonly title?: string;
    readonly description?: string;
    readonly status?: FileRequestStatusField;
    readonly isEmailRequired?: boolean;
    readonly isDescriptionRequired?: boolean;
    readonly expiresAt?: string;
    readonly folder: FolderMini;
    readonly url?: string;
    readonly etag?: string;
    readonly createdBy?: UserMini;
    readonly createdAt: string;
    readonly updatedBy?: UserMini;
    readonly updatedAt: string;
}
export function deserializeFileRequest(val: any): FileRequest {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | FileRequestTypeField = val.type == void 0 ? void 0 : deserializeFileRequestTypeField(val.type);
    const title: undefined | string = isJson(val.title, "string") ? val.title : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const status: undefined | FileRequestStatusField = val.status == void 0 ? void 0 : deserializeFileRequestStatusField(val.status);
    const isEmailRequired: undefined | boolean = isJson(val.is_email_required, "boolean") ? val.is_email_required : void 0;
    const isDescriptionRequired: undefined | boolean = isJson(val.is_description_required, "boolean") ? val.is_description_required : void 0;
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    const folder: FolderMini = deserializeFolderMini(val.folder);
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const createdAt: string = val.created_at;
    const updatedBy: undefined | UserMini = val.updated_by == void 0 ? void 0 : deserializeUserMini(val.updated_by);
    const updatedAt: string = val.updated_at;
    return { id: id, type: type, title: title, description: description, status: status, isEmailRequired: isEmailRequired, isDescriptionRequired: isDescriptionRequired, expiresAt: expiresAt, folder: folder, url: url, etag: etag, createdBy: createdBy, createdAt: createdAt, updatedBy: updatedBy, updatedAt: updatedAt } satisfies FileRequest;
}
export function serializeFileRequest(val: FileRequest): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeFileRequestTypeField(val.type), ["title"]: val.title, ["description"]: val.description, ["status"]: val.status == void 0 ? void 0 : serializeFileRequestStatusField(val.status), ["is_email_required"]: val.isEmailRequired, ["is_description_required"]: val.isDescriptionRequired, ["expires_at"]: val.expiresAt, ["folder"]: serializeFolderMini(val.folder), ["url"]: val.url, ["etag"]: val.etag, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["updated_by"]: val.updatedBy == void 0 ? void 0 : serializeUserMini(val.updatedBy), ["updated_at"]: val.updatedAt };
}
export interface FileFullLockField {
    readonly id?: string;
    readonly type?: FileFullLockFieldTypeField;
    readonly createdBy?: UserMini;
    readonly createdAt?: string;
    readonly expiredAt?: string;
    readonly isDownloadPrevented?: boolean;
    readonly appType?: FileFullLockFieldAppTypeField;
}
export function deserializeFileFullLockField(val: any): FileFullLockField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | FileFullLockFieldTypeField = val.type == void 0 ? void 0 : deserializeFileFullLockFieldTypeField(val.type);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const expiredAt: undefined | string = isJson(val.expired_at, "string") ? val.expired_at : void 0;
    const isDownloadPrevented: undefined | boolean = isJson(val.is_download_prevented, "boolean") ? val.is_download_prevented : void 0;
    const appType: undefined | FileFullLockFieldAppTypeField = val.app_type == void 0 ? void 0 : deserializeFileFullLockFieldAppTypeField(val.app_type);
    return { id: id, type: type, createdBy: createdBy, createdAt: createdAt, expiredAt: expiredAt, isDownloadPrevented: isDownloadPrevented, appType: appType } satisfies FileFullLockField;
}
export function serializeFileFullLockField(val: FileFullLockField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeFileFullLockFieldTypeField(val.type), ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["expired_at"]: val.expiredAt, ["is_download_prevented"]: val.isDownloadPrevented, ["app_type"]: val.appType == void 0 ? void 0 : serializeFileFullLockFieldAppTypeField(val.appType) };
}
export type File = FileMini & {
    /**
     * The optional description of this file */
    readonly description?: string;
    /**
     * The file size in bytes. Be careful parsing this integer as it can
     * get very large and cause an integer overflow. */
    readonly size?: number;
    readonly pathCollection?: FilePathCollectionField;
    /**
     * The date and time when the file was created on Box. */
    readonly createdAt?: string;
    /**
     * The date and time when the file was last updated on Box. */
    readonly modifiedAt?: string;
    /**
     * The time at which this file was put in the trash. */
    readonly trashedAt?: string;
    /**
     * The time at which this file is expected to be purged
     * from the trash. */
    readonly purgedAt?: string;
    /**
     * The date and time at which this file was originally
     * created, which might be before it was uploaded to Box. */
    readonly contentCreatedAt?: string;
    /**
     * The date and time at which this file was last updated,
     * which might be before it was uploaded to Box. */
    readonly contentModifiedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: FileSharedLinkField;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     * 
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus?: FileItemStatusField;
};
export function deserializeFile(val: any): File {
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const pathCollection: undefined | FilePathCollectionField = val.path_collection == void 0 ? void 0 : deserializeFilePathCollectionField(val.path_collection);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink: undefined | FileSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeFileSharedLinkField(val.shared_link);
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus: undefined | FileItemStatusField = val.item_status == void 0 ? void 0 : deserializeFileItemStatusField(val.item_status);
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
    return { description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, id: id, etag: etag, type: type } satisfies File;
}
export function serializeFile(val: File): Json {
    const base: any = serializeFileMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"File\"";
    }
    return { ...base, ...{ ["description"]: val.description, ["size"]: val.size, ["path_collection"]: val.pathCollection == void 0 ? void 0 : serializeFilePathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy), ["owned_by"]: val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeFileSharedLinkField(val.sharedLink), ["parent"]: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent), ["item_status"]: val.itemStatus == void 0 ? void 0 : serializeFileItemStatusField(val.itemStatus) } };
}
export interface Files {
    readonly totalCount?: number;
    readonly entries?: readonly File[];
}
export function deserializeFiles(val: any): Files {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly File[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeFile(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies Files;
}
export function serializeFiles(val: Files): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: File): any {
            return serializeFile(item);
        }) as readonly any[] };
}
export interface DevicePinner {
    readonly id?: string;
    readonly type?: DevicePinnerTypeField;
    readonly ownedBy?: UserMini;
    readonly productName?: string;
}
export function deserializeDevicePinner(val: any): DevicePinner {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | DevicePinnerTypeField = val.type == void 0 ? void 0 : deserializeDevicePinnerTypeField(val.type);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const productName: undefined | string = isJson(val.product_name, "string") ? val.product_name : void 0;
    return { id: id, type: type, ownedBy: ownedBy, productName: productName } satisfies DevicePinner;
}
export function serializeDevicePinner(val: DevicePinner): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeDevicePinnerTypeField(val.type), ["owned_by"]: val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy), ["product_name"]: val.productName };
}
export interface DevicePinners {
    readonly entries?: readonly DevicePinner[];
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly order?: readonly DevicePinnersOrderField[];
}
export function deserializeDevicePinners(val: any): DevicePinners {
    const entries: undefined | readonly DevicePinner[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeDevicePinner(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const order: undefined | readonly DevicePinnersOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return deserializeDevicePinnersOrderField(itm);
    }) as readonly any[] : void 0;
    return { entries: entries, limit: limit, nextMarker: nextMarker, order: order } satisfies DevicePinners;
}
export function serializeDevicePinners(val: DevicePinners): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: DevicePinner): any {
            return serializeDevicePinner(item);
        }) as readonly any[], ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: DevicePinnersOrderField): any {
            return serializeDevicePinnersOrderField(item);
        }) as readonly any[] };
}
export type Comment = CommentBase & {
    /**
     * Whether or not this comment is a reply to another
     * comment */
    readonly isReplyComment?: boolean;
    /**
     * The text of the comment, as provided by the user */
    readonly message?: string;
    readonly createdBy?: UserMini;
    /**
     * The time this comment was created */
    readonly createdAt?: string;
    /**
     * The time this comment was last modified */
    readonly modifiedAt?: string;
    readonly item?: CommentItemField;
};
export function deserializeComment(val: any): Comment {
    const isReplyComment: undefined | boolean = isJson(val.is_reply_comment, "boolean") ? val.is_reply_comment : void 0;
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const item: undefined | CommentItemField = val.item == void 0 ? void 0 : deserializeCommentItemField(val.item);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CommentBaseTypeField = val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
    return { isReplyComment: isReplyComment, message: message, createdBy: createdBy, createdAt: createdAt, modifiedAt: modifiedAt, item: item, id: id, type: type } satisfies Comment;
}
export function serializeComment(val: Comment): Json {
    const base: any = serializeCommentBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"Comment\"";
    }
    return { ...base, ...{ ["is_reply_comment"]: val.isReplyComment, ["message"]: val.message, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["item"]: val.item == void 0 ? void 0 : serializeCommentItemField(val.item) } };
}
export type CommentFull = Comment & {
    /**
     * The string representing the comment text with
     * @mentions included. @mention format is @[id:username]
     * where `id` is user's Box ID and `username` is
     * their display name. */
    readonly taggedMessage?: string;
};
export function deserializeCommentFull(val: any): CommentFull {
    const taggedMessage: undefined | string = isJson(val.tagged_message, "string") ? val.tagged_message : void 0;
    const isReplyComment: undefined | boolean = isJson(val.is_reply_comment, "boolean") ? val.is_reply_comment : void 0;
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const item: undefined | CommentItemField = val.item == void 0 ? void 0 : deserializeCommentItemField(val.item);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CommentBaseTypeField = val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
    return { taggedMessage: taggedMessage, isReplyComment: isReplyComment, message: message, createdBy: createdBy, createdAt: createdAt, modifiedAt: modifiedAt, item: item, id: id, type: type } satisfies CommentFull;
}
export function serializeCommentFull(val: CommentFull): Json {
    const base: any = serializeComment(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"CommentFull\"";
    }
    return { ...base, ...{ ["tagged_message"]: val.taggedMessage } };
}
export interface Comments {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CommentsOrderField[];
    readonly entries?: readonly Comment[];
}
export function deserializeComments(val: any): Comments {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly CommentsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return deserializeCommentsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly Comment[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeComment(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Comments;
}
export function serializeComments(val: Comments): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: CommentsOrderField): any {
            return serializeCommentsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Comment): any {
            return serializeComment(item);
        }) as readonly any[] };
}
export type ShieldInformationBarrierSegmentRestriction = ShieldInformationBarrierSegmentRestrictionMini & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    /**
     * ISO date time string when this
     * shield information barrier
     * Segment Restriction object was created. */
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this
     * shield information barrier segment
     * Restriction was updated. */
    readonly updatedAt?: string;
    readonly updatedBy?: UserBase;
};
export function deserializeShieldInformationBarrierSegmentRestriction(val: any): ShieldInformationBarrierSegmentRestriction {
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shield_information_barrier == void 0 ? void 0 : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    const updatedAt: undefined | string = isJson(val.updated_at, "string") ? val.updated_at : void 0;
    const updatedBy: undefined | UserBase = val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
    const shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField = deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    const restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField = deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restricted_segment);
    const type: undefined | ShieldInformationBarrierSegmentRestrictionBaseTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { shieldInformationBarrier: shieldInformationBarrier, createdAt: createdAt, createdBy: createdBy, updatedAt: updatedAt, updatedBy: updatedBy, shieldInformationBarrierSegment: shieldInformationBarrierSegment, restrictedSegment: restrictedSegment, type: type, id: id } satisfies ShieldInformationBarrierSegmentRestriction;
}
export function serializeShieldInformationBarrierSegmentRestriction(val: ShieldInformationBarrierSegmentRestriction): Json {
    const base: any = serializeShieldInformationBarrierSegmentRestrictionMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ShieldInformationBarrierSegmentRestriction\"";
    }
    return { ...base, ...{ ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : serializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy), ["updated_at"]: val.updatedAt, ["updated_by"]: val.updatedBy == void 0 ? void 0 : serializeUserBase(val.updatedBy) } };
}
export type ShieldInformationBarrierSegmentMemberMini = ShieldInformationBarrierSegmentMemberBase & {
    readonly user?: UserBase;
};
export function deserializeShieldInformationBarrierSegmentMemberMini(val: any): ShieldInformationBarrierSegmentMemberMini {
    const user: undefined | UserBase = val.user == void 0 ? void 0 : deserializeUserBase(val.user);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
    return { user: user, id: id, type: type } satisfies ShieldInformationBarrierSegmentMemberMini;
}
export function serializeShieldInformationBarrierSegmentMemberMini(val: ShieldInformationBarrierSegmentMemberMini): Json {
    const base: any = serializeShieldInformationBarrierSegmentMemberBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ShieldInformationBarrierSegmentMemberMini\"";
    }
    return { ...base, ...{ ["user"]: val.user == void 0 ? void 0 : serializeUserBase(val.user) } };
}
export type ShieldInformationBarrierSegmentMember = ShieldInformationBarrierSegmentMemberMini & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    /**
     * The `type` and `id` of the requested
     * shield information barrier segment. */
    readonly shieldInformationBarrierSegment?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
    readonly user?: UserBase;
    /**
     * ISO date time string when this shield
     * information barrier object was created. */
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this
     * shield information barrier segment Member was updated. */
    readonly updatedAt?: string;
    readonly updatedBy?: UserBase;
};
export function deserializeShieldInformationBarrierSegmentMember(val: any): ShieldInformationBarrierSegmentMember {
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shield_information_barrier == void 0 ? void 0 : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    const shieldInformationBarrierSegment: undefined | ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField = val.shield_information_barrier_segment == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    const user: undefined | UserBase = val.user == void 0 ? void 0 : deserializeUserBase(val.user);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    const updatedAt: undefined | string = isJson(val.updated_at, "string") ? val.updated_at : void 0;
    const updatedBy: undefined | UserBase = val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
    return { shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, user: user, createdAt: createdAt, createdBy: createdBy, updatedAt: updatedAt, updatedBy: updatedBy, id: id, type: type } satisfies ShieldInformationBarrierSegmentMember;
}
export function serializeShieldInformationBarrierSegmentMember(val: ShieldInformationBarrierSegmentMember): Json {
    const base: any = serializeShieldInformationBarrierSegmentMemberMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ShieldInformationBarrierSegmentMember\"";
    }
    return { ...base, ...{ ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : serializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["shield_information_barrier_segment"]: val.shieldInformationBarrierSegment == void 0 ? void 0 : serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["user"]: val.user == void 0 ? void 0 : serializeUserBase(val.user), ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy), ["updated_at"]: val.updatedAt, ["updated_by"]: val.updatedBy == void 0 ? void 0 : serializeUserBase(val.updatedBy) } };
}
export interface ShieldInformationBarrierSegment {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly name?: string;
    readonly description?: string;
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    readonly updatedAt?: string;
    readonly updatedBy?: UserBase;
}
export function deserializeShieldInformationBarrierSegment(val: any): ShieldInformationBarrierSegment {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierSegmentTypeField(val.type);
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shield_information_barrier == void 0 ? void 0 : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    const updatedAt: undefined | string = isJson(val.updated_at, "string") ? val.updated_at : void 0;
    const updatedBy: undefined | UserBase = val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
    return { id: id, type: type, shieldInformationBarrier: shieldInformationBarrier, name: name, description: description, createdAt: createdAt, createdBy: createdBy, updatedAt: updatedAt, updatedBy: updatedBy } satisfies ShieldInformationBarrierSegment;
}
export function serializeShieldInformationBarrierSegment(val: ShieldInformationBarrierSegment): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeShieldInformationBarrierSegmentTypeField(val.type), ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : serializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["name"]: val.name, ["description"]: val.description, ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy), ["updated_at"]: val.updatedAt, ["updated_by"]: val.updatedBy == void 0 ? void 0 : serializeUserBase(val.updatedBy) };
}
export type ShieldInformationBarrierReport = ShieldInformationBarrierReportBase & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierReportShieldInformationBarrierField;
    /**
     * Status of the shield information report */
    readonly status?: ShieldInformationBarrierReportStatusField;
    readonly details?: ShieldInformationBarrierReportDetailsField;
    /**
     * ISO date time string when this
     * shield information barrier report object was created. */
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this
     * shield information barrier report was updated. */
    readonly updatedAt?: string;
};
export function deserializeShieldInformationBarrierReport(val: any): ShieldInformationBarrierReport {
    const shieldInformationBarrier: undefined | ShieldInformationBarrierReportShieldInformationBarrierField = val.shield_information_barrier == void 0 ? void 0 : deserializeShieldInformationBarrierReportShieldInformationBarrierField(val.shield_information_barrier);
    const status: undefined | ShieldInformationBarrierReportStatusField = val.status == void 0 ? void 0 : deserializeShieldInformationBarrierReportStatusField(val.status);
    const details: undefined | ShieldInformationBarrierReportDetailsField = val.details == void 0 ? void 0 : deserializeShieldInformationBarrierReportDetailsField(val.details);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    const updatedAt: undefined | string = isJson(val.updated_at, "string") ? val.updated_at : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierReportBaseTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierReportBaseTypeField(val.type);
    return { shieldInformationBarrier: shieldInformationBarrier, status: status, details: details, createdAt: createdAt, createdBy: createdBy, updatedAt: updatedAt, id: id, type: type } satisfies ShieldInformationBarrierReport;
}
export function serializeShieldInformationBarrierReport(val: ShieldInformationBarrierReport): Json {
    const base: any = serializeShieldInformationBarrierReportBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ShieldInformationBarrierReport\"";
    }
    return { ...base, ...{ ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : serializeShieldInformationBarrierReportShieldInformationBarrierField(val.shieldInformationBarrier), ["status"]: val.status == void 0 ? void 0 : serializeShieldInformationBarrierReportStatusField(val.status), ["details"]: val.details == void 0 ? void 0 : serializeShieldInformationBarrierReportDetailsField(val.details), ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy), ["updated_at"]: val.updatedAt } };
}
export interface ShieldInformationBarrier {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierTypeField;
    readonly enterprise?: EnterpriseBase;
    readonly status?: ShieldInformationBarrierStatusField;
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    readonly updatedAt?: string;
    readonly updatedBy?: UserBase;
    readonly enabledAt?: string;
    readonly enabledBy?: UserBase;
}
export function deserializeShieldInformationBarrier(val: any): ShieldInformationBarrier {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierTypeField = val.type == void 0 ? void 0 : deserializeShieldInformationBarrierTypeField(val.type);
    const enterprise: undefined | EnterpriseBase = val.enterprise == void 0 ? void 0 : deserializeEnterpriseBase(val.enterprise);
    const status: undefined | ShieldInformationBarrierStatusField = val.status == void 0 ? void 0 : deserializeShieldInformationBarrierStatusField(val.status);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    const updatedAt: undefined | string = isJson(val.updated_at, "string") ? val.updated_at : void 0;
    const updatedBy: undefined | UserBase = val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
    const enabledAt: undefined | string = isJson(val.enabled_at, "string") ? val.enabled_at : void 0;
    const enabledBy: undefined | UserBase = val.enabled_by == void 0 ? void 0 : deserializeUserBase(val.enabled_by);
    return { id: id, type: type, enterprise: enterprise, status: status, createdAt: createdAt, createdBy: createdBy, updatedAt: updatedAt, updatedBy: updatedBy, enabledAt: enabledAt, enabledBy: enabledBy } satisfies ShieldInformationBarrier;
}
export function serializeShieldInformationBarrier(val: ShieldInformationBarrier): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeShieldInformationBarrierTypeField(val.type), ["enterprise"]: val.enterprise == void 0 ? void 0 : serializeEnterpriseBase(val.enterprise), ["status"]: val.status == void 0 ? void 0 : serializeShieldInformationBarrierStatusField(val.status), ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy), ["updated_at"]: val.updatedAt, ["updated_by"]: val.updatedBy == void 0 ? void 0 : serializeUserBase(val.updatedBy), ["enabled_at"]: val.enabledAt, ["enabled_by"]: val.enabledBy == void 0 ? void 0 : serializeUserBase(val.enabledBy) };
}
export interface FolderLock {
    readonly folder?: FolderMini;
    readonly id?: string;
    readonly type?: string;
    readonly createdBy?: UserBase;
    readonly createdAt?: string;
    readonly lockedOperations?: FolderLockLockedOperationsField;
    readonly lockType?: string;
}
export function deserializeFolderLock(val: any): FolderLock {
    const folder: undefined | FolderMini = val.folder == void 0 ? void 0 : deserializeFolderMini(val.folder);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const lockedOperations: undefined | FolderLockLockedOperationsField = val.locked_operations == void 0 ? void 0 : deserializeFolderLockLockedOperationsField(val.locked_operations);
    const lockType: undefined | string = isJson(val.lock_type, "string") ? val.lock_type : void 0;
    return { folder: folder, id: id, type: type, createdBy: createdBy, createdAt: createdAt, lockedOperations: lockedOperations, lockType: lockType } satisfies FolderLock;
}
export function serializeFolderLock(val: FolderLock): Json {
    return { ["folder"]: val.folder == void 0 ? void 0 : serializeFolderMini(val.folder), ["id"]: val.id, ["type"]: val.type, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy), ["created_at"]: val.createdAt, ["locked_operations"]: val.lockedOperations == void 0 ? void 0 : serializeFolderLockLockedOperationsField(val.lockedOperations), ["lock_type"]: val.lockType };
}
export interface FolderLocks {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FolderLock[];
}
export function deserializeFolderLocks(val: any): FolderLocks {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly FolderLock[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeFolderLock(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies FolderLocks;
}
export function serializeFolderLocks(val: FolderLocks): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FolderLock): any {
            return serializeFolderLock(item);
        }) as readonly any[] };
}
export interface WatermarkWatermarkField {
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export function deserializeWatermarkWatermarkField(val: any): WatermarkWatermarkField {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    return { createdAt: createdAt, modifiedAt: modifiedAt } satisfies WatermarkWatermarkField;
}
export function serializeWatermarkWatermarkField(val: WatermarkWatermarkField): Json {
    return { ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt };
}
export interface Watermark {
    readonly watermark?: WatermarkWatermarkField;
}
export function deserializeWatermark(val: any): Watermark {
    const watermark: undefined | WatermarkWatermarkField = val.watermark == void 0 ? void 0 : deserializeWatermarkWatermarkField(val.watermark);
    return { watermark: watermark } satisfies Watermark;
}
export function serializeWatermark(val: Watermark): Json {
    return { ["watermark"]: val.watermark == void 0 ? void 0 : serializeWatermarkWatermarkField(val.watermark) };
}
export type WebhookTriggersField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED" | "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
export function deserializeWebhookTriggersField(val: any): WebhookTriggersField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebhookTriggersField\"";
    }
    if (val == "FILE.UPLOADED") {
        return "FILE.UPLOADED";
    }
    if (val == "FILE.PREVIEWED") {
        return "FILE.PREVIEWED";
    }
    if (val == "FILE.DOWNLOADED") {
        return "FILE.DOWNLOADED";
    }
    if (val == "FILE.TRASHED") {
        return "FILE.TRASHED";
    }
    if (val == "FILE.DELETED") {
        return "FILE.DELETED";
    }
    if (val == "FILE.RESTORED") {
        return "FILE.RESTORED";
    }
    if (val == "FILE.COPIED") {
        return "FILE.COPIED";
    }
    if (val == "FILE.MOVED") {
        return "FILE.MOVED";
    }
    if (val == "FILE.LOCKED") {
        return "FILE.LOCKED";
    }
    if (val == "FILE.UNLOCKED") {
        return "FILE.UNLOCKED";
    }
    if (val == "FILE.RENAMED") {
        return "FILE.RENAMED";
    }
    if (val == "COMMENT.CREATED") {
        return "COMMENT.CREATED";
    }
    if (val == "COMMENT.UPDATED") {
        return "COMMENT.UPDATED";
    }
    if (val == "COMMENT.DELETED") {
        return "COMMENT.DELETED";
    }
    if (val == "TASK_ASSIGNMENT.CREATED") {
        return "TASK_ASSIGNMENT.CREATED";
    }
    if (val == "TASK_ASSIGNMENT.UPDATED") {
        return "TASK_ASSIGNMENT.UPDATED";
    }
    if (val == "METADATA_INSTANCE.CREATED") {
        return "METADATA_INSTANCE.CREATED";
    }
    if (val == "METADATA_INSTANCE.UPDATED") {
        return "METADATA_INSTANCE.UPDATED";
    }
    if (val == "METADATA_INSTANCE.DELETED") {
        return "METADATA_INSTANCE.DELETED";
    }
    if (val == "FOLDER.CREATED") {
        return "FOLDER.CREATED";
    }
    if (val == "FOLDER.RENAMED") {
        return "FOLDER.RENAMED";
    }
    if (val == "FOLDER.DOWNLOADED") {
        return "FOLDER.DOWNLOADED";
    }
    if (val == "FOLDER.RESTORED") {
        return "FOLDER.RESTORED";
    }
    if (val == "FOLDER.DELETED") {
        return "FOLDER.DELETED";
    }
    if (val == "FOLDER.COPIED") {
        return "FOLDER.COPIED";
    }
    if (val == "FOLDER.MOVED") {
        return "FOLDER.MOVED";
    }
    if (val == "FOLDER.TRASHED") {
        return "FOLDER.TRASHED";
    }
    if (val == "WEBHOOK.DELETED") {
        return "WEBHOOK.DELETED";
    }
    if (val == "COLLABORATION.CREATED") {
        return "COLLABORATION.CREATED";
    }
    if (val == "COLLABORATION.ACCEPTED") {
        return "COLLABORATION.ACCEPTED";
    }
    if (val == "COLLABORATION.REJECTED") {
        return "COLLABORATION.REJECTED";
    }
    if (val == "COLLABORATION.REMOVED") {
        return "COLLABORATION.REMOVED";
    }
    if (val == "COLLABORATION.UPDATED") {
        return "COLLABORATION.UPDATED";
    }
    if (val == "SHARED_LINK.DELETED") {
        return "SHARED_LINK.DELETED";
    }
    if (val == "SHARED_LINK.CREATED") {
        return "SHARED_LINK.CREATED";
    }
    if (val == "SHARED_LINK.UPDATED") {
        return "SHARED_LINK.UPDATED";
    }
    if (val == "SIGN_REQUEST.COMPLETED") {
        return "SIGN_REQUEST.COMPLETED";
    }
    if (val == "SIGN_REQUEST.DECLINED") {
        return "SIGN_REQUEST.DECLINED";
    }
    if (val == "SIGN_REQUEST.EXPIRED") {
        return "SIGN_REQUEST.EXPIRED";
    }
    if (val == "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED") {
        return "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWebhookTriggersField(val: WebhookTriggersField): Json {
    return val;
}
export type WebhookMiniTypeField = "webhook";
export function deserializeWebhookMiniTypeField(val: any): WebhookMiniTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebhookMiniTypeField\"";
    }
    if (val == "webhook") {
        return "webhook";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWebhookMiniTypeField(val: WebhookMiniTypeField): Json {
    return val;
}
export type WebhookMiniTargetFieldTypeField = "file" | "folder";
export function deserializeWebhookMiniTargetFieldTypeField(val: any): WebhookMiniTargetFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebhookMiniTargetFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWebhookMiniTargetFieldTypeField(val: WebhookMiniTargetFieldTypeField): Json {
    return val;
}
export interface WebhookMiniTargetField {
    readonly id?: string;
    readonly type?: WebhookMiniTargetFieldTypeField;
}
export function deserializeWebhookMiniTargetField(val: any): WebhookMiniTargetField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WebhookMiniTargetFieldTypeField = val.type == void 0 ? void 0 : deserializeWebhookMiniTargetFieldTypeField(val.type);
    return { id: id, type: type } satisfies WebhookMiniTargetField;
}
export function serializeWebhookMiniTargetField(val: WebhookMiniTargetField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeWebhookMiniTargetFieldTypeField(val.type) };
}
export interface WebhookMini {
    readonly id?: string;
    readonly type?: WebhookMiniTypeField;
    readonly target?: WebhookMiniTargetField;
}
export function deserializeWebhookMini(val: any): WebhookMini {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WebhookMiniTypeField = val.type == void 0 ? void 0 : deserializeWebhookMiniTypeField(val.type);
    const target: undefined | WebhookMiniTargetField = val.target == void 0 ? void 0 : deserializeWebhookMiniTargetField(val.target);
    return { id: id, type: type, target: target } satisfies WebhookMini;
}
export function serializeWebhookMini(val: WebhookMini): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeWebhookMiniTypeField(val.type), ["target"]: val.target == void 0 ? void 0 : serializeWebhookMiniTargetField(val.target) };
}
export interface Webhooks {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly WebhookMini[];
}
export function deserializeWebhooks(val: any): Webhooks {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly WebhookMini[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeWebhookMini(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies Webhooks;
}
export function serializeWebhooks(val: Webhooks): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: WebhookMini): any {
            return serializeWebhookMini(item);
        }) as readonly any[] };
}
export type Webhook = WebhookMini & {
    readonly createdBy?: UserMini;
    /**
     * A timestamp identifying the time that
     * the webhook was created. */
    readonly createdAt?: string;
    /**
     * The URL that is notified by this webhook */
    readonly address?: string;
    /**
     * An array of event names that this webhook is
     * to be triggered for */
    readonly triggers?: readonly WebhookTriggersField[];
};
export function deserializeWebhook(val: any): Webhook {
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const address: undefined | string = isJson(val.address, "string") ? val.address : void 0;
    const triggers: undefined | readonly WebhookTriggersField[] = isJson(val.triggers, "array") ? val.triggers.map(function (itm: Json): any {
        return deserializeWebhookTriggersField(itm);
    }) as readonly any[] : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WebhookMiniTypeField = val.type == void 0 ? void 0 : deserializeWebhookMiniTypeField(val.type);
    const target: undefined | WebhookMiniTargetField = val.target == void 0 ? void 0 : deserializeWebhookMiniTargetField(val.target);
    return { createdBy: createdBy, createdAt: createdAt, address: address, triggers: triggers, id: id, type: type, target: target } satisfies Webhook;
}
export function serializeWebhook(val: Webhook): Json {
    const base: any = serializeWebhookMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"Webhook\"";
    }
    return { ...base, ...{ ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["address"]: val.address, ["triggers"]: val.triggers == void 0 ? void 0 : val.triggers.map(function (item: WebhookTriggersField): any {
                return serializeWebhookTriggersField(item);
            }) as readonly any[] } };
}
export type WebLinkSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export function deserializeWebLinkSharedLinkFieldAccessField(val: any): WebLinkSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebLinkSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWebLinkSharedLinkFieldAccessField(val: WebLinkSharedLinkFieldAccessField): Json {
    return val;
}
export type WebLinkSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export function deserializeWebLinkSharedLinkFieldEffectiveAccessField(val: any): WebLinkSharedLinkFieldEffectiveAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebLinkSharedLinkFieldEffectiveAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWebLinkSharedLinkFieldEffectiveAccessField(val: WebLinkSharedLinkFieldEffectiveAccessField): Json {
    return val;
}
export type WebLinkSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export function deserializeWebLinkSharedLinkFieldEffectivePermissionField(val: any): WebLinkSharedLinkFieldEffectivePermissionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebLinkSharedLinkFieldEffectivePermissionField\"";
    }
    if (val == "can_edit") {
        return "can_edit";
    }
    if (val == "can_download") {
        return "can_download";
    }
    if (val == "can_preview") {
        return "can_preview";
    }
    if (val == "no_access") {
        return "no_access";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWebLinkSharedLinkFieldEffectivePermissionField(val: WebLinkSharedLinkFieldEffectivePermissionField): Json {
    return val;
}
export interface WebLinkSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export function deserializeWebLinkSharedLinkFieldPermissionsField(val: any): WebLinkSharedLinkFieldPermissionsField {
    const canDownload: boolean = val.can_download;
    const canPreview: boolean = val.can_preview;
    const canEdit: boolean = val.can_edit;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies WebLinkSharedLinkFieldPermissionsField;
}
export function serializeWebLinkSharedLinkFieldPermissionsField(val: WebLinkSharedLinkFieldPermissionsField): Json {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export interface WebLinkSharedLinkField {
    readonly url: string;
    readonly downloadUrl?: string;
    readonly vanityUrl?: string;
    readonly vanityName?: string;
    readonly access?: WebLinkSharedLinkFieldAccessField;
    readonly effectiveAccess: WebLinkSharedLinkFieldEffectiveAccessField;
    readonly effectivePermission: WebLinkSharedLinkFieldEffectivePermissionField;
    readonly unsharedAt?: string;
    readonly isPasswordEnabled: boolean;
    readonly permissions?: WebLinkSharedLinkFieldPermissionsField;
    readonly downloadCount: number;
    readonly previewCount: number;
}
export function deserializeWebLinkSharedLinkField(val: any): WebLinkSharedLinkField {
    const url: string = val.url;
    const downloadUrl: undefined | string = isJson(val.download_url, "string") ? val.download_url : void 0;
    const vanityUrl: undefined | string = isJson(val.vanity_url, "string") ? val.vanity_url : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const access: undefined | WebLinkSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeWebLinkSharedLinkFieldAccessField(val.access);
    const effectiveAccess: WebLinkSharedLinkFieldEffectiveAccessField = deserializeWebLinkSharedLinkFieldEffectiveAccessField(val.effective_access);
    const effectivePermission: WebLinkSharedLinkFieldEffectivePermissionField = deserializeWebLinkSharedLinkFieldEffectivePermissionField(val.effective_permission);
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    const isPasswordEnabled: boolean = val.is_password_enabled;
    const permissions: undefined | WebLinkSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeWebLinkSharedLinkFieldPermissionsField(val.permissions);
    const downloadCount: number = val.download_count;
    const previewCount: number = val.preview_count;
    return { url: url, downloadUrl: downloadUrl, vanityUrl: vanityUrl, vanityName: vanityName, access: access, effectiveAccess: effectiveAccess, effectivePermission: effectivePermission, unsharedAt: unsharedAt, isPasswordEnabled: isPasswordEnabled, permissions: permissions, downloadCount: downloadCount, previewCount: previewCount } satisfies WebLinkSharedLinkField;
}
export function serializeWebLinkSharedLinkField(val: WebLinkSharedLinkField): Json {
    return { ["url"]: val.url, ["download_url"]: val.downloadUrl, ["vanity_url"]: val.vanityUrl, ["vanity_name"]: val.vanityName, ["access"]: val.access == void 0 ? void 0 : serializeWebLinkSharedLinkFieldAccessField(val.access), ["effective_access"]: serializeWebLinkSharedLinkFieldEffectiveAccessField(val.effectiveAccess), ["effective_permission"]: serializeWebLinkSharedLinkFieldEffectivePermissionField(val.effectivePermission), ["unshared_at"]: val.unsharedAt, ["is_password_enabled"]: val.isPasswordEnabled, ["permissions"]: val.permissions == void 0 ? void 0 : serializeWebLinkSharedLinkFieldPermissionsField(val.permissions), ["download_count"]: val.downloadCount, ["preview_count"]: val.previewCount };
}
export type WebLinkItemStatusField = "active" | "trashed" | "deleted";
export function deserializeWebLinkItemStatusField(val: any): WebLinkItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebLinkItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWebLinkItemStatusField(val: WebLinkItemStatusField): Json {
    return val;
}
export type WebLinkBaseTypeField = "web_link";
export function deserializeWebLinkBaseTypeField(val: any): WebLinkBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebLinkBaseTypeField\"";
    }
    if (val == "web_link") {
        return "web_link";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWebLinkBaseTypeField(val: WebLinkBaseTypeField): Json {
    return val;
}
export interface WebLinkBase {
    readonly id: string;
    readonly type: WebLinkBaseTypeField;
    readonly etag?: string;
}
export function deserializeWebLinkBase(val: any): WebLinkBase {
    const id: string = val.id;
    const type: WebLinkBaseTypeField = deserializeWebLinkBaseTypeField(val.type);
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    return { id: id, type: type, etag: etag } satisfies WebLinkBase;
}
export function serializeWebLinkBase(val: WebLinkBase): Json {
    return { ["id"]: val.id, ["type"]: serializeWebLinkBaseTypeField(val.type), ["etag"]: val.etag };
}
export type WebLinkMini = WebLinkBase & {
    /**
     * The URL this web link points to */
    readonly url?: string;
    readonly sequenceId?: string;
    /**
     * The name of the web link */
    readonly name?: string;
};
export function deserializeWebLinkMini(val: any): WebLinkMini {
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const id: string = val.id;
    const type: WebLinkBaseTypeField = deserializeWebLinkBaseTypeField(val.type);
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    return { url: url, sequenceId: sequenceId, name: name, id: id, type: type, etag: etag } satisfies WebLinkMini;
}
export function serializeWebLinkMini(val: WebLinkMini): Json {
    const base: any = serializeWebLinkBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"WebLinkMini\"";
    }
    return { ...base, ...{ ["url"]: val.url, ["sequence_id"]: val.sequenceId, ["name"]: val.name } };
}
export type FileMiniOrFolderMiniOrWebLinkMini = FileMini | FolderMini | WebLinkMini;
export function deserializeFileMiniOrFolderMiniOrWebLinkMini(val: any): FileMiniOrFolderMiniOrWebLinkMini {
    if (!isJson(val, "object")) {
        throw "Expecting an object for \"FileMiniOrFolderMiniOrWebLinkMini\"";
    }
    if (val.type == "file") {
        return deserializeFileMini(val);
    }
    if (val.type == "folder") {
        return deserializeFolderMini(val);
    }
    if (val.type == "web_link") {
        return deserializeWebLinkMini(val);
    }
    throw "unknown type";
}
export function serializeFileMiniOrFolderMiniOrWebLinkMini(val: FileMiniOrFolderMiniOrWebLinkMini): Json {
    if (val.type == "file") {
        return serializeFileMini(val);
    }
    if (val.type == "folder") {
        return serializeFolderMini(val);
    }
    if (val.type == "web_link") {
        return serializeWebLinkMini(val);
    }
    throw "unknown type";
}
export interface Items {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly ItemsOrderField[];
    readonly entries?: readonly FileMiniOrFolderMiniOrWebLinkMini[];
}
export function deserializeItems(val: any): Items {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly ItemsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return deserializeItemsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly FileMiniOrFolderMiniOrWebLinkMini[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeFileMiniOrFolderMiniOrWebLinkMini(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Items;
}
export function serializeItems(val: Items): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: ItemsOrderField): any {
            return serializeItemsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileMiniOrFolderMiniOrWebLinkMini): any {
            return serializeFileMiniOrFolderMiniOrWebLinkMini(item);
        }) as readonly any[] };
}
export type Folder = FolderMini & {
    /**
     * The date and time when the folder was created. This value may
     * be `null` for some folders such as the root folder or the trash
     * folder. */
    readonly createdAt?: string;
    /**
     * The date and time when the folder was last updated. This value may
     * be `null` for some folders such as the root folder or the trash
     * folder. */
    readonly modifiedAt?: string;
    readonly description?: string;
    /**
     * The folder size in bytes.
     * 
     * Be careful parsing this integer as its
     * value can get very large. */
    readonly size?: number;
    readonly pathCollection?: FolderPathCollectionField;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    /**
     * The time at which this folder was put in the trash. */
    readonly trashedAt?: string;
    /**
     * The time at which this folder is expected to be purged
     * from the trash. */
    readonly purgedAt?: string;
    /**
     * The date and time at which this folder was originally
     * created. */
    readonly contentCreatedAt?: string;
    /**
     * The date and time at which this folder was last updated. */
    readonly contentModifiedAt?: string;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: FolderSharedLinkField;
    readonly folderUploadEmail?: FolderFolderUploadEmailField;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     * 
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus?: FolderItemStatusField;
    readonly itemCollection?: Items;
};
export function deserializeFolder(val: any): Folder {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const pathCollection: undefined | FolderPathCollectionField = val.path_collection == void 0 ? void 0 : deserializeFolderPathCollectionField(val.path_collection);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink: undefined | FolderSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeFolderSharedLinkField(val.shared_link);
    const folderUploadEmail: undefined | FolderFolderUploadEmailField = val.folder_upload_email == void 0 ? void 0 : deserializeFolderFolderUploadEmailField(val.folder_upload_email);
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus: undefined | FolderItemStatusField = val.item_status == void 0 ? void 0 : deserializeFolderItemStatusField(val.item_status);
    const itemCollection: undefined | Items = val.item_collection == void 0 ? void 0 : deserializeItems(val.item_collection);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
    return { createdAt: createdAt, modifiedAt: modifiedAt, description: description, size: size, pathCollection: pathCollection, createdBy: createdBy, modifiedBy: modifiedBy, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, ownedBy: ownedBy, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, parent: parent, itemStatus: itemStatus, itemCollection: itemCollection, name: name, sequenceId: sequenceId, id: id, etag: etag, type: type } satisfies Folder;
}
export function serializeFolder(val: Folder): Json {
    const base: any = serializeFolderMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"Folder\"";
    }
    return { ...base, ...{ ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["description"]: val.description, ["size"]: val.size, ["path_collection"]: val.pathCollection == void 0 ? void 0 : serializeFolderPathCollectionField(val.pathCollection), ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy), ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["owned_by"]: val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeFolderSharedLinkField(val.sharedLink), ["folder_upload_email"]: val.folderUploadEmail == void 0 ? void 0 : serializeFolderFolderUploadEmailField(val.folderUploadEmail), ["parent"]: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent), ["item_status"]: val.itemStatus == void 0 ? void 0 : serializeFolderItemStatusField(val.itemStatus), ["item_collection"]: val.itemCollection == void 0 ? void 0 : serializeItems(val.itemCollection) } };
}
export type FileOrFolder = File | Folder;
export function deserializeFileOrFolder(val: any): FileOrFolder {
    if (!isJson(val, "object")) {
        throw "Expecting an object for \"FileOrFolder\"";
    }
    if (val.type == "file") {
        return deserializeFile(val);
    }
    if (val.type == "folder") {
        return deserializeFolder(val);
    }
    throw "unknown type";
}
export function serializeFileOrFolder(val: FileOrFolder): Json {
    if (val.type == "file") {
        return serializeFile(val);
    }
    if (val.type == "folder") {
        return serializeFolder(val);
    }
    throw "unknown type";
}
export interface MetadataQueryResults {
    readonly entries?: readonly FileOrFolder[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export function deserializeMetadataQueryResults(val: any): MetadataQueryResults {
    const entries: undefined | readonly FileOrFolder[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeFileOrFolder(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | string = isJson(val.next_marker, "string") ? val.next_marker : void 0;
    return { entries: entries, limit: limit, nextMarker: nextMarker } satisfies MetadataQueryResults;
}
export function serializeMetadataQueryResults(val: MetadataQueryResults): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileOrFolder): any {
            return serializeFileOrFolder(item);
        }) as readonly any[], ["limit"]: val.limit, ["next_marker"]: val.nextMarker };
}
export interface WebhookInvocation {
    readonly id?: string;
    readonly type?: WebhookInvocationTypeField;
    readonly webhook?: Webhook;
    readonly createdBy?: UserMini;
    readonly createdAt?: string;
    readonly trigger?: WebhookInvocationTriggerField;
    readonly source?: FileOrFolder;
}
export function deserializeWebhookInvocation(val: any): WebhookInvocation {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WebhookInvocationTypeField = val.type == void 0 ? void 0 : deserializeWebhookInvocationTypeField(val.type);
    const webhook: undefined | Webhook = val.webhook == void 0 ? void 0 : deserializeWebhook(val.webhook);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const trigger: undefined | WebhookInvocationTriggerField = val.trigger == void 0 ? void 0 : deserializeWebhookInvocationTriggerField(val.trigger);
    const source: undefined | FileOrFolder = val.source == void 0 ? void 0 : deserializeFileOrFolder(val.source);
    return { id: id, type: type, webhook: webhook, createdBy: createdBy, createdAt: createdAt, trigger: trigger, source: source } satisfies WebhookInvocation;
}
export function serializeWebhookInvocation(val: WebhookInvocation): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeWebhookInvocationTypeField(val.type), ["webhook"]: val.webhook == void 0 ? void 0 : serializeWebhook(val.webhook), ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["trigger"]: val.trigger == void 0 ? void 0 : serializeWebhookInvocationTriggerField(val.trigger), ["source"]: val.source == void 0 ? void 0 : serializeFileOrFolder(val.source) };
}
export type FolderFull = Folder & {
    readonly syncState?: FolderFullSyncStateField;
    /**
     * Specifies if this folder has any other collaborators. */
    readonly hasCollaborations?: boolean;
    readonly permissions?: FolderFullPermissionsField;
    readonly tags?: readonly string[];
    readonly canNonOwnersInvite?: boolean;
    /**
     * Specifies if this folder is owned by a user outside of the
     * authenticated enterprise. */
    readonly isExternallyOwned?: boolean;
    readonly metadata?: FolderFullMetadataField;
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    /**
     * A list of access levels that are available
     * for this folder.
     * 
     * For some folders, like the root folder, this will always
     * be an empty list as sharing is not allowed at that level. */
    readonly allowedSharedLinkAccessLevels?: readonly FolderFullAllowedSharedLinkAccessLevelsField[];
    /**
     * A list of the types of roles that user can be invited at
     * when sharing this folder. */
    readonly allowedInviteeRoles?: readonly FolderFullAllowedInviteeRolesField[];
    readonly watermarkInfo?: FolderFullWatermarkInfoField;
    /**
     * Specifies if the folder can be accessed
     * with the direct shared link or a shared link
     * to a parent folder. */
    readonly isAccessibleViaSharedLink?: boolean;
    /**
     * Specifies if collaborators who are not owners
     * of this folder are restricted from viewing other
     * collaborations on this folder.
     * 
     * It also restricts non-owners from inviting new
     * collaborators. */
    readonly canNonOwnersViewCollaborators?: boolean;
    readonly classification?: FolderFullClassificationField;
};
export function deserializeFolderFull(val: any): FolderFull {
    const syncState: undefined | FolderFullSyncStateField = val.sync_state == void 0 ? void 0 : deserializeFolderFullSyncStateField(val.sync_state);
    const hasCollaborations: undefined | boolean = isJson(val.has_collaborations, "boolean") ? val.has_collaborations : void 0;
    const permissions: undefined | FolderFullPermissionsField = val.permissions == void 0 ? void 0 : deserializeFolderFullPermissionsField(val.permissions);
    const tags: undefined | readonly string[] = isJson(val.tags, "array") ? val.tags.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    const canNonOwnersInvite: undefined | boolean = isJson(val.can_non_owners_invite, "boolean") ? val.can_non_owners_invite : void 0;
    const isExternallyOwned: undefined | boolean = isJson(val.is_externally_owned, "boolean") ? val.is_externally_owned : void 0;
    const metadata: undefined | FolderFullMetadataField = val.metadata == void 0 ? void 0 : deserializeFolderFullMetadataField(val.metadata);
    const isCollaborationRestrictedToEnterprise: undefined | boolean = isJson(val.is_collaboration_restricted_to_enterprise, "boolean") ? val.is_collaboration_restricted_to_enterprise : void 0;
    const allowedSharedLinkAccessLevels: undefined | readonly FolderFullAllowedSharedLinkAccessLevelsField[] = isJson(val.allowed_shared_link_access_levels, "array") ? val.allowed_shared_link_access_levels.map(function (itm: Json): any {
        return deserializeFolderFullAllowedSharedLinkAccessLevelsField(itm);
    }) as readonly any[] : void 0;
    const allowedInviteeRoles: undefined | readonly FolderFullAllowedInviteeRolesField[] = isJson(val.allowed_invitee_roles, "array") ? val.allowed_invitee_roles.map(function (itm: Json): any {
        return deserializeFolderFullAllowedInviteeRolesField(itm);
    }) as readonly any[] : void 0;
    const watermarkInfo: undefined | FolderFullWatermarkInfoField = val.watermark_info == void 0 ? void 0 : deserializeFolderFullWatermarkInfoField(val.watermark_info);
    const isAccessibleViaSharedLink: undefined | boolean = isJson(val.is_accessible_via_shared_link, "boolean") ? val.is_accessible_via_shared_link : void 0;
    const canNonOwnersViewCollaborators: undefined | boolean = isJson(val.can_non_owners_view_collaborators, "boolean") ? val.can_non_owners_view_collaborators : void 0;
    const classification: undefined | FolderFullClassificationField = val.classification == void 0 ? void 0 : deserializeFolderFullClassificationField(val.classification);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const pathCollection: undefined | FolderPathCollectionField = val.path_collection == void 0 ? void 0 : deserializeFolderPathCollectionField(val.path_collection);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink: undefined | FolderSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeFolderSharedLinkField(val.shared_link);
    const folderUploadEmail: undefined | FolderFolderUploadEmailField = val.folder_upload_email == void 0 ? void 0 : deserializeFolderFolderUploadEmailField(val.folder_upload_email);
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus: undefined | FolderItemStatusField = val.item_status == void 0 ? void 0 : deserializeFolderItemStatusField(val.item_status);
    const itemCollection: undefined | Items = val.item_collection == void 0 ? void 0 : deserializeItems(val.item_collection);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
    return { syncState: syncState, hasCollaborations: hasCollaborations, permissions: permissions, tags: tags, canNonOwnersInvite: canNonOwnersInvite, isExternallyOwned: isExternallyOwned, metadata: metadata, isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise, allowedSharedLinkAccessLevels: allowedSharedLinkAccessLevels, allowedInviteeRoles: allowedInviteeRoles, watermarkInfo: watermarkInfo, isAccessibleViaSharedLink: isAccessibleViaSharedLink, canNonOwnersViewCollaborators: canNonOwnersViewCollaborators, classification: classification, createdAt: createdAt, modifiedAt: modifiedAt, description: description, size: size, pathCollection: pathCollection, createdBy: createdBy, modifiedBy: modifiedBy, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, ownedBy: ownedBy, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, parent: parent, itemStatus: itemStatus, itemCollection: itemCollection, name: name, sequenceId: sequenceId, id: id, etag: etag, type: type } satisfies FolderFull;
}
export function serializeFolderFull(val: FolderFull): Json {
    const base: any = serializeFolder(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FolderFull\"";
    }
    return { ...base, ...{ ["sync_state"]: val.syncState == void 0 ? void 0 : serializeFolderFullSyncStateField(val.syncState), ["has_collaborations"]: val.hasCollaborations, ["permissions"]: val.permissions == void 0 ? void 0 : serializeFolderFullPermissionsField(val.permissions), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item: string): undefined {
                return void 0;
            }) as readonly any[], ["can_non_owners_invite"]: val.canNonOwnersInvite, ["is_externally_owned"]: val.isExternallyOwned, ["metadata"]: val.metadata == void 0 ? void 0 : serializeFolderFullMetadataField(val.metadata), ["is_collaboration_restricted_to_enterprise"]: val.isCollaborationRestrictedToEnterprise, ["allowed_shared_link_access_levels"]: val.allowedSharedLinkAccessLevels == void 0 ? void 0 : val.allowedSharedLinkAccessLevels.map(function (item: FolderFullAllowedSharedLinkAccessLevelsField): any {
                return serializeFolderFullAllowedSharedLinkAccessLevelsField(item);
            }) as readonly any[], ["allowed_invitee_roles"]: val.allowedInviteeRoles == void 0 ? void 0 : val.allowedInviteeRoles.map(function (item: FolderFullAllowedInviteeRolesField): any {
                return serializeFolderFullAllowedInviteeRolesField(item);
            }) as readonly any[], ["watermark_info"]: val.watermarkInfo == void 0 ? void 0 : serializeFolderFullWatermarkInfoField(val.watermarkInfo), ["is_accessible_via_shared_link"]: val.isAccessibleViaSharedLink, ["can_non_owners_view_collaborators"]: val.canNonOwnersViewCollaborators, ["classification"]: val.classification == void 0 ? void 0 : serializeFolderFullClassificationField(val.classification) } };
}
export type WebLink = WebLinkMini & {
    readonly parent?: FolderMini;
    /**
     * The description accompanying the web link. This is
     * visible within the Box web application. */
    readonly description?: string;
    readonly pathCollection?: WebLinkPathCollectionField;
    /**
     * When this file was created on Box’s servers. */
    readonly createdAt?: string;
    /**
     * When this file was last updated on the Box
     * servers. */
    readonly modifiedAt?: string;
    /**
     * When this file was moved to the trash. */
    readonly trashedAt?: string;
    /**
     * When this file will be permanently deleted. */
    readonly purgedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: WebLinkSharedLinkField;
    /**
     * Whether this item is deleted or not. Values include `active`,
     * `trashed` if the file has been moved to the trash, and `deleted` if
     * the file has been permanently deleted */
    readonly itemStatus?: WebLinkItemStatusField;
};
export function deserializeWebLink(val: any): WebLink {
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const pathCollection: undefined | WebLinkPathCollectionField = val.path_collection == void 0 ? void 0 : deserializeWebLinkPathCollectionField(val.path_collection);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink: undefined | WebLinkSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeWebLinkSharedLinkField(val.shared_link);
    const itemStatus: undefined | WebLinkItemStatusField = val.item_status == void 0 ? void 0 : deserializeWebLinkItemStatusField(val.item_status);
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const id: string = val.id;
    const type: WebLinkBaseTypeField = deserializeWebLinkBaseTypeField(val.type);
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    return { parent: parent, description: description, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, itemStatus: itemStatus, url: url, sequenceId: sequenceId, name: name, id: id, type: type, etag: etag } satisfies WebLink;
}
export function serializeWebLink(val: WebLink): Json {
    const base: any = serializeWebLinkMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"WebLink\"";
    }
    return { ...base, ...{ ["parent"]: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent), ["description"]: val.description, ["path_collection"]: val.pathCollection == void 0 ? void 0 : serializeWebLinkPathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy), ["owned_by"]: val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeWebLinkSharedLinkField(val.sharedLink), ["item_status"]: val.itemStatus == void 0 ? void 0 : serializeWebLinkItemStatusField(val.itemStatus) } };
}
export type FileOrFolderOrWebLink = File | Folder | WebLink;
export function deserializeFileOrFolderOrWebLink(val: any): FileOrFolderOrWebLink {
    if (!isJson(val, "object")) {
        throw "Expecting an object for \"FileOrFolderOrWebLink\"";
    }
    if (val.type == "file") {
        return deserializeFile(val);
    }
    if (val.type == "folder") {
        return deserializeFolder(val);
    }
    if (val.type == "web_link") {
        return deserializeWebLink(val);
    }
    throw "unknown type";
}
export function serializeFileOrFolderOrWebLink(val: FileOrFolderOrWebLink): Json {
    if (val.type == "file") {
        return serializeFile(val);
    }
    if (val.type == "folder") {
        return serializeFolder(val);
    }
    if (val.type == "web_link") {
        return serializeWebLink(val);
    }
    throw "unknown type";
}
export interface SearchResultWithSharedLink {
    readonly accessibleViaSharedLink?: string;
    readonly item?: FileOrFolderOrWebLink;
    readonly type?: string;
}
export function deserializeSearchResultWithSharedLink(val: any): SearchResultWithSharedLink {
    const accessibleViaSharedLink: undefined | string = isJson(val.accessible_via_shared_link, "string") ? val.accessible_via_shared_link : void 0;
    const item: undefined | FileOrFolderOrWebLink = val.item == void 0 ? void 0 : deserializeFileOrFolderOrWebLink(val.item);
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    return { accessibleViaSharedLink: accessibleViaSharedLink, item: item, type: type } satisfies SearchResultWithSharedLink;
}
export function serializeSearchResultWithSharedLink(val: SearchResultWithSharedLink): Json {
    return { ["accessible_via_shared_link"]: val.accessibleViaSharedLink, ["item"]: val.item == void 0 ? void 0 : serializeFileOrFolderOrWebLink(val.item), ["type"]: val.type };
}
export interface SearchResultsWithSharedLinks {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly entries?: readonly SearchResultWithSharedLink[];
}
export function deserializeSearchResultsWithSharedLinks(val: any): SearchResultsWithSharedLinks {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const entries: undefined | readonly SearchResultWithSharedLink[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeSearchResultWithSharedLink(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, entries: entries } satisfies SearchResultsWithSharedLinks;
}
export function serializeSearchResultsWithSharedLinks(val: SearchResultsWithSharedLinks): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: SearchResultWithSharedLink): any {
            return serializeSearchResultWithSharedLink(item);
        }) as readonly any[] };
}
export interface SearchResults {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly entries?: readonly FileOrFolderOrWebLink[];
}
export function deserializeSearchResults(val: any): SearchResults {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const entries: undefined | readonly FileOrFolderOrWebLink[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeFileOrFolderOrWebLink(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, entries: entries } satisfies SearchResults;
}
export function serializeSearchResults(val: SearchResults): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileOrFolderOrWebLink): any {
            return serializeFileOrFolderOrWebLink(item);
        }) as readonly any[] };
}
export type SearchResultsOrSearchResultsWithSharedLinks = SearchResults | SearchResultsWithSharedLinks;
export function deserializeSearchResultsOrSearchResultsWithSharedLinks(val: any): SearchResultsOrSearchResultsWithSharedLinks {
    throw "Can't deserialize SearchResultsOrSearchResultsWithSharedLinks";
}
export function serializeSearchResultsOrSearchResultsWithSharedLinks(val: SearchResultsOrSearchResultsWithSharedLinks): Json {
    throw "Can't serialize SearchResultsOrSearchResultsWithSharedLinks";
}
export interface RecentItem {
    readonly type?: string;
    readonly item?: FileOrFolderOrWebLink;
    readonly interactionType?: RecentItemInteractionTypeField;
    readonly interactedAt?: string;
    readonly interactionSharedLink?: string;
}
export function deserializeRecentItem(val: any): RecentItem {
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    const item: undefined | FileOrFolderOrWebLink = val.item == void 0 ? void 0 : deserializeFileOrFolderOrWebLink(val.item);
    const interactionType: undefined | RecentItemInteractionTypeField = val.interaction_type == void 0 ? void 0 : deserializeRecentItemInteractionTypeField(val.interaction_type);
    const interactedAt: undefined | string = isJson(val.interacted_at, "string") ? val.interacted_at : void 0;
    const interactionSharedLink: undefined | string = isJson(val.interaction_shared_link, "string") ? val.interaction_shared_link : void 0;
    return { type: type, item: item, interactionType: interactionType, interactedAt: interactedAt, interactionSharedLink: interactionSharedLink } satisfies RecentItem;
}
export function serializeRecentItem(val: RecentItem): Json {
    return { ["type"]: val.type, ["item"]: val.item == void 0 ? void 0 : serializeFileOrFolderOrWebLink(val.item), ["interaction_type"]: val.interactionType == void 0 ? void 0 : serializeRecentItemInteractionTypeField(val.interactionType), ["interacted_at"]: val.interactedAt, ["interaction_shared_link"]: val.interactionSharedLink };
}
export interface RecentItems {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly RecentItem[];
}
export function deserializeRecentItems(val: any): RecentItems {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly RecentItem[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeRecentItem(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies RecentItems;
}
export function serializeRecentItems(val: RecentItems): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: RecentItem): any {
            return serializeRecentItem(item);
        }) as readonly any[] };
}
export type LegalHoldPolicyAssignment = LegalHoldPolicyAssignmentBase & {
    readonly legalHoldPolicy?: LegalHoldPolicyMini;
    readonly assignedTo?: FileOrFolderOrWebLink;
    readonly assignedBy?: UserMini;
    /**
     * When the legal hold policy assignment object was
     * created */
    readonly assignedAt?: string;
    /**
     * When the assignment release request was sent.
     * (Because it can take time for an assignment to fully
     * delete, this isn't quite the same time that the
     * assignment is fully deleted). If null, Assignment
     * was not deleted. */
    readonly deletedAt?: string;
};
export function deserializeLegalHoldPolicyAssignment(val: any): LegalHoldPolicyAssignment {
    const legalHoldPolicy: undefined | LegalHoldPolicyMini = val.legal_hold_policy == void 0 ? void 0 : deserializeLegalHoldPolicyMini(val.legal_hold_policy);
    const assignedTo: undefined | FileOrFolderOrWebLink = val.assigned_to == void 0 ? void 0 : deserializeFileOrFolderOrWebLink(val.assigned_to);
    const assignedBy: undefined | UserMini = val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
    const assignedAt: undefined | string = isJson(val.assigned_at, "string") ? val.assigned_at : void 0;
    const deletedAt: undefined | string = isJson(val.deleted_at, "string") ? val.deleted_at : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | LegalHoldPolicyAssignmentBaseTypeField = val.type == void 0 ? void 0 : deserializeLegalHoldPolicyAssignmentBaseTypeField(val.type);
    return { legalHoldPolicy: legalHoldPolicy, assignedTo: assignedTo, assignedBy: assignedBy, assignedAt: assignedAt, deletedAt: deletedAt, id: id, type: type } satisfies LegalHoldPolicyAssignment;
}
export function serializeLegalHoldPolicyAssignment(val: LegalHoldPolicyAssignment): Json {
    const base: any = serializeLegalHoldPolicyAssignmentBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"LegalHoldPolicyAssignment\"";
    }
    return { ...base, ...{ ["legal_hold_policy"]: val.legalHoldPolicy == void 0 ? void 0 : serializeLegalHoldPolicyMini(val.legalHoldPolicy), ["assigned_to"]: val.assignedTo == void 0 ? void 0 : serializeFileOrFolderOrWebLink(val.assignedTo), ["assigned_by"]: val.assignedBy == void 0 ? void 0 : serializeUserMini(val.assignedBy), ["assigned_at"]: val.assignedAt, ["deleted_at"]: val.deletedAt } };
}
export interface FileVersionLegalHold {
    readonly id?: string;
    readonly type?: FileVersionLegalHoldTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    readonly legalHoldPolicyAssignments?: readonly LegalHoldPolicyAssignment[];
    readonly deletedAt?: string;
}
export function deserializeFileVersionLegalHold(val: any): FileVersionLegalHold {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | FileVersionLegalHoldTypeField = val.type == void 0 ? void 0 : deserializeFileVersionLegalHoldTypeField(val.type);
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    const file: undefined | FileMini = val.file == void 0 ? void 0 : deserializeFileMini(val.file);
    const legalHoldPolicyAssignments: undefined | readonly LegalHoldPolicyAssignment[] = isJson(val.legal_hold_policy_assignments, "array") ? val.legal_hold_policy_assignments.map(function (itm: Json): any {
        return deserializeLegalHoldPolicyAssignment(itm);
    }) as readonly any[] : void 0;
    const deletedAt: undefined | string = isJson(val.deleted_at, "string") ? val.deleted_at : void 0;
    return { id: id, type: type, fileVersion: fileVersion, file: file, legalHoldPolicyAssignments: legalHoldPolicyAssignments, deletedAt: deletedAt } satisfies FileVersionLegalHold;
}
export function serializeFileVersionLegalHold(val: FileVersionLegalHold): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeFileVersionLegalHoldTypeField(val.type), ["file_version"]: val.fileVersion == void 0 ? void 0 : serializeFileVersionMini(val.fileVersion), ["file"]: val.file == void 0 ? void 0 : serializeFileMini(val.file), ["legal_hold_policy_assignments"]: val.legalHoldPolicyAssignments == void 0 ? void 0 : val.legalHoldPolicyAssignments.map(function (item: LegalHoldPolicyAssignment): any {
            return serializeLegalHoldPolicyAssignment(item);
        }) as readonly any[], ["deleted_at"]: val.deletedAt };
}
export interface FileVersionLegalHolds {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileVersionLegalHold[];
}
export function deserializeFileVersionLegalHolds(val: any): FileVersionLegalHolds {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly FileVersionLegalHold[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeFileVersionLegalHold(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies FileVersionLegalHolds;
}
export function serializeFileVersionLegalHolds(val: FileVersionLegalHolds): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileVersionLegalHold): any {
            return serializeFileVersionLegalHold(item);
        }) as readonly any[] };
}
export interface Collaboration {
    readonly id?: string;
    readonly type?: CollaborationTypeField;
    readonly item?: FileOrFolderOrWebLink;
    readonly accessibleBy?: UserCollaborations;
    readonly inviteEmail?: string;
    readonly role?: CollaborationRoleField;
    readonly expiresAt?: string;
    readonly status?: CollaborationStatusField;
    readonly acknowledgedAt?: string;
    readonly createdBy?: UserCollaborations;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
    readonly acceptanceRequirementsStatus?: CollaborationAcceptanceRequirementsStatusField;
}
export function deserializeCollaboration(val: any): Collaboration {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationTypeField = val.type == void 0 ? void 0 : deserializeCollaborationTypeField(val.type);
    const item: undefined | FileOrFolderOrWebLink = val.item == void 0 ? void 0 : deserializeFileOrFolderOrWebLink(val.item);
    const accessibleBy: undefined | UserCollaborations = val.accessible_by == void 0 ? void 0 : deserializeUserCollaborations(val.accessible_by);
    const inviteEmail: undefined | string = isJson(val.invite_email, "string") ? val.invite_email : void 0;
    const role: undefined | CollaborationRoleField = val.role == void 0 ? void 0 : deserializeCollaborationRoleField(val.role);
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    const status: undefined | CollaborationStatusField = val.status == void 0 ? void 0 : deserializeCollaborationStatusField(val.status);
    const acknowledgedAt: undefined | string = isJson(val.acknowledged_at, "string") ? val.acknowledged_at : void 0;
    const createdBy: undefined | UserCollaborations = val.created_by == void 0 ? void 0 : deserializeUserCollaborations(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const acceptanceRequirementsStatus: undefined | CollaborationAcceptanceRequirementsStatusField = val.acceptance_requirements_status == void 0 ? void 0 : deserializeCollaborationAcceptanceRequirementsStatusField(val.acceptance_requirements_status);
    return { id: id, type: type, item: item, accessibleBy: accessibleBy, inviteEmail: inviteEmail, role: role, expiresAt: expiresAt, status: status, acknowledgedAt: acknowledgedAt, createdBy: createdBy, createdAt: createdAt, modifiedAt: modifiedAt, acceptanceRequirementsStatus: acceptanceRequirementsStatus } satisfies Collaboration;
}
export function serializeCollaboration(val: Collaboration): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCollaborationTypeField(val.type), ["item"]: val.item == void 0 ? void 0 : serializeFileOrFolderOrWebLink(val.item), ["accessible_by"]: val.accessibleBy == void 0 ? void 0 : serializeUserCollaborations(val.accessibleBy), ["invite_email"]: val.inviteEmail, ["role"]: val.role == void 0 ? void 0 : serializeCollaborationRoleField(val.role), ["expires_at"]: val.expiresAt, ["status"]: val.status == void 0 ? void 0 : serializeCollaborationStatusField(val.status), ["acknowledged_at"]: val.acknowledgedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserCollaborations(val.createdBy), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["acceptance_requirements_status"]: val.acceptanceRequirementsStatus == void 0 ? void 0 : serializeCollaborationAcceptanceRequirementsStatusField(val.acceptanceRequirementsStatus) };
}
export interface Collaborations {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CollaborationsOrderField[];
    readonly entries?: readonly Collaboration[];
}
export function deserializeCollaborations(val: any): Collaborations {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly CollaborationsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return deserializeCollaborationsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly Collaboration[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeCollaboration(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Collaborations;
}
export function serializeCollaborations(val: Collaborations): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: CollaborationsOrderField): any {
            return serializeCollaborationsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Collaboration): any {
            return serializeCollaboration(item);
        }) as readonly any[] };
}
export type WorkflowFlowsFieldTypeField = "flow";
export function deserializeWorkflowFlowsFieldTypeField(val: any): WorkflowFlowsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldTypeField\"";
    }
    if (val == "flow") {
        return "flow";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWorkflowFlowsFieldTypeField(val: WorkflowFlowsFieldTypeField): Json {
    return val;
}
export type WorkflowFlowsFieldTriggerFieldTypeField = "trigger";
export function deserializeWorkflowFlowsFieldTriggerFieldTypeField(val: any): WorkflowFlowsFieldTriggerFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldTriggerFieldTypeField\"";
    }
    if (val == "trigger") {
        return "trigger";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWorkflowFlowsFieldTriggerFieldTypeField(val: WorkflowFlowsFieldTriggerFieldTypeField): Json {
    return val;
}
export type WorkflowFlowsFieldTriggerFieldTriggerTypeField = "WORKFLOW_MANUAL_START";
export function deserializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val: any): WorkflowFlowsFieldTriggerFieldTriggerTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldTriggerFieldTriggerTypeField\"";
    }
    if (val == "WORKFLOW_MANUAL_START") {
        return "WORKFLOW_MANUAL_START";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val: WorkflowFlowsFieldTriggerFieldTriggerTypeField): Json {
    return val;
}
export type WorkflowFlowsFieldTriggerFieldScopeFieldTypeField = "trigger_scope";
export function deserializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val: any): WorkflowFlowsFieldTriggerFieldScopeFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldTriggerFieldScopeFieldTypeField\"";
    }
    if (val == "trigger_scope") {
        return "trigger_scope";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val: WorkflowFlowsFieldTriggerFieldScopeFieldTypeField): Json {
    return val;
}
export type WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField = "folder";
export function deserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val: any): WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val: WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField): Json {
    return val;
}
export interface WorkflowFlowsFieldTriggerFieldScopeFieldObjectField {
    readonly type?: WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField;
    readonly id?: string;
}
export function deserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val: any): WorkflowFlowsFieldTriggerFieldScopeFieldObjectField {
    const type: undefined | WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField = val.type == void 0 ? void 0 : deserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies WorkflowFlowsFieldTriggerFieldScopeFieldObjectField;
}
export function serializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val: WorkflowFlowsFieldTriggerFieldScopeFieldObjectField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val.type), ["id"]: val.id };
}
export interface WorkflowFlowsFieldTriggerFieldScopeField {
    readonly type?: WorkflowFlowsFieldTriggerFieldScopeFieldTypeField;
    readonly ref?: string;
    readonly object?: WorkflowFlowsFieldTriggerFieldScopeFieldObjectField;
}
export function deserializeWorkflowFlowsFieldTriggerFieldScopeField(val: any): WorkflowFlowsFieldTriggerFieldScopeField {
    const type: undefined | WorkflowFlowsFieldTriggerFieldScopeFieldTypeField = val.type == void 0 ? void 0 : deserializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val.type);
    const ref: undefined | string = isJson(val.ref, "string") ? val.ref : void 0;
    const object: undefined | WorkflowFlowsFieldTriggerFieldScopeFieldObjectField = val.object == void 0 ? void 0 : deserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val.object);
    return { type: type, ref: ref, object: object } satisfies WorkflowFlowsFieldTriggerFieldScopeField;
}
export function serializeWorkflowFlowsFieldTriggerFieldScopeField(val: WorkflowFlowsFieldTriggerFieldScopeField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val.type), ["ref"]: val.ref, ["object"]: val.object == void 0 ? void 0 : serializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val.object) };
}
export interface WorkflowFlowsFieldTriggerField {
    readonly type?: WorkflowFlowsFieldTriggerFieldTypeField;
    readonly triggerType?: WorkflowFlowsFieldTriggerFieldTriggerTypeField;
    readonly scope?: readonly WorkflowFlowsFieldTriggerFieldScopeField[];
}
export function deserializeWorkflowFlowsFieldTriggerField(val: any): WorkflowFlowsFieldTriggerField {
    const type: undefined | WorkflowFlowsFieldTriggerFieldTypeField = val.type == void 0 ? void 0 : deserializeWorkflowFlowsFieldTriggerFieldTypeField(val.type);
    const triggerType: undefined | WorkflowFlowsFieldTriggerFieldTriggerTypeField = val.trigger_type == void 0 ? void 0 : deserializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val.trigger_type);
    const scope: undefined | readonly WorkflowFlowsFieldTriggerFieldScopeField[] = isJson(val.scope, "array") ? val.scope.map(function (itm: Json): any {
        return deserializeWorkflowFlowsFieldTriggerFieldScopeField(itm);
    }) as readonly any[] : void 0;
    return { type: type, triggerType: triggerType, scope: scope } satisfies WorkflowFlowsFieldTriggerField;
}
export function serializeWorkflowFlowsFieldTriggerField(val: WorkflowFlowsFieldTriggerField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeWorkflowFlowsFieldTriggerFieldTypeField(val.type), ["trigger_type"]: val.triggerType == void 0 ? void 0 : serializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val.triggerType), ["scope"]: val.scope == void 0 ? void 0 : val.scope.map(function (item: WorkflowFlowsFieldTriggerFieldScopeField): any {
            return serializeWorkflowFlowsFieldTriggerFieldScopeField(item);
        }) as readonly any[] };
}
export type WorkflowFlowsFieldOutcomesFieldTypeField = "outcome";
export function deserializeWorkflowFlowsFieldOutcomesFieldTypeField(val: any): WorkflowFlowsFieldOutcomesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldOutcomesFieldTypeField\"";
    }
    if (val == "outcome") {
        return "outcome";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWorkflowFlowsFieldOutcomesFieldTypeField(val: WorkflowFlowsFieldOutcomesFieldTypeField): Json {
    return val;
}
export type WorkflowFlowsFieldOutcomesFieldActionTypeField = "add_metadata" | "assign_task" | "copy_file" | "copy_folder" | "create_folder" | "delete_file" | "delete_folder" | "lock_file" | "move_file" | "move_folder" | "remove_watermark_file" | "rename_folder" | "restore_folder" | "share_file" | "share_folder" | "unlock_file" | "upload_file" | "wait_for_task" | "watermark_file" | "go_back_to_step" | "apply_file_classification" | "apply_folder_classification" | "send_notification";
export function deserializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val: any): WorkflowFlowsFieldOutcomesFieldActionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldOutcomesFieldActionTypeField\"";
    }
    if (val == "add_metadata") {
        return "add_metadata";
    }
    if (val == "assign_task") {
        return "assign_task";
    }
    if (val == "copy_file") {
        return "copy_file";
    }
    if (val == "copy_folder") {
        return "copy_folder";
    }
    if (val == "create_folder") {
        return "create_folder";
    }
    if (val == "delete_file") {
        return "delete_file";
    }
    if (val == "delete_folder") {
        return "delete_folder";
    }
    if (val == "lock_file") {
        return "lock_file";
    }
    if (val == "move_file") {
        return "move_file";
    }
    if (val == "move_folder") {
        return "move_folder";
    }
    if (val == "remove_watermark_file") {
        return "remove_watermark_file";
    }
    if (val == "rename_folder") {
        return "rename_folder";
    }
    if (val == "restore_folder") {
        return "restore_folder";
    }
    if (val == "share_file") {
        return "share_file";
    }
    if (val == "share_folder") {
        return "share_folder";
    }
    if (val == "unlock_file") {
        return "unlock_file";
    }
    if (val == "upload_file") {
        return "upload_file";
    }
    if (val == "wait_for_task") {
        return "wait_for_task";
    }
    if (val == "watermark_file") {
        return "watermark_file";
    }
    if (val == "go_back_to_step") {
        return "go_back_to_step";
    }
    if (val == "apply_file_classification") {
        return "apply_file_classification";
    }
    if (val == "apply_folder_classification") {
        return "apply_folder_classification";
    }
    if (val == "send_notification") {
        return "send_notification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val: WorkflowFlowsFieldOutcomesFieldActionTypeField): Json {
    return val;
}
export type WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField = "outcome";
export function deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val: any): WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField\"";
    }
    if (val == "outcome") {
        return "outcome";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField): Json {
    return val;
}
export type WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField = "add_metadata" | "assign_task" | "copy_file" | "copy_folder" | "create_folder" | "delete_file" | "delete_folder" | "lock_file" | "move_file" | "move_folder" | "remove_watermark_file" | "rename_folder" | "restore_folder" | "share_file" | "share_folder" | "unlock_file" | "upload_file" | "wait_for_task" | "watermark_file" | "go_back_to_step" | "apply_file_classification" | "apply_folder_classification" | "send_notification";
export function deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val: any): WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField\"";
    }
    if (val == "add_metadata") {
        return "add_metadata";
    }
    if (val == "assign_task") {
        return "assign_task";
    }
    if (val == "copy_file") {
        return "copy_file";
    }
    if (val == "copy_folder") {
        return "copy_folder";
    }
    if (val == "create_folder") {
        return "create_folder";
    }
    if (val == "delete_file") {
        return "delete_file";
    }
    if (val == "delete_folder") {
        return "delete_folder";
    }
    if (val == "lock_file") {
        return "lock_file";
    }
    if (val == "move_file") {
        return "move_file";
    }
    if (val == "move_folder") {
        return "move_folder";
    }
    if (val == "remove_watermark_file") {
        return "remove_watermark_file";
    }
    if (val == "rename_folder") {
        return "rename_folder";
    }
    if (val == "restore_folder") {
        return "restore_folder";
    }
    if (val == "share_file") {
        return "share_file";
    }
    if (val == "share_folder") {
        return "share_folder";
    }
    if (val == "unlock_file") {
        return "unlock_file";
    }
    if (val == "upload_file") {
        return "upload_file";
    }
    if (val == "wait_for_task") {
        return "wait_for_task";
    }
    if (val == "watermark_file") {
        return "watermark_file";
    }
    if (val == "go_back_to_step") {
        return "go_back_to_step";
    }
    if (val == "apply_file_classification") {
        return "apply_file_classification";
    }
    if (val == "apply_folder_classification") {
        return "apply_folder_classification";
    }
    if (val == "send_notification") {
        return "send_notification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField): Json {
    return val;
}
export interface WorkflowFlowsFieldOutcomesFieldIfRejectedField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField;
    readonly name?: string;
    readonly actionType?: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField;
}
export function deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(val: any): WorkflowFlowsFieldOutcomesFieldIfRejectedField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField = val.type == void 0 ? void 0 : deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const actionType: undefined | WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField = val.action_type == void 0 ? void 0 : deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val.action_type);
    return { id: id, type: type, name: name, actionType: actionType } satisfies WorkflowFlowsFieldOutcomesFieldIfRejectedField;
}
export function serializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val.type), ["name"]: val.name, ["action_type"]: val.actionType == void 0 ? void 0 : serializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val.actionType) };
}
export interface WorkflowFlowsFieldOutcomesField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldOutcomesFieldTypeField;
    readonly name?: string;
    readonly actionType?: WorkflowFlowsFieldOutcomesFieldActionTypeField;
    readonly ifRejected?: readonly WorkflowFlowsFieldOutcomesFieldIfRejectedField[];
}
export function deserializeWorkflowFlowsFieldOutcomesField(val: any): WorkflowFlowsFieldOutcomesField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowFlowsFieldOutcomesFieldTypeField = val.type == void 0 ? void 0 : deserializeWorkflowFlowsFieldOutcomesFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const actionType: undefined | WorkflowFlowsFieldOutcomesFieldActionTypeField = val.action_type == void 0 ? void 0 : deserializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val.action_type);
    const ifRejected: undefined | readonly WorkflowFlowsFieldOutcomesFieldIfRejectedField[] = isJson(val.if_rejected, "array") ? val.if_rejected.map(function (itm: Json): any {
        return deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(itm);
    }) as readonly any[] : void 0;
    return { id: id, type: type, name: name, actionType: actionType, ifRejected: ifRejected } satisfies WorkflowFlowsFieldOutcomesField;
}
export function serializeWorkflowFlowsFieldOutcomesField(val: WorkflowFlowsFieldOutcomesField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeWorkflowFlowsFieldOutcomesFieldTypeField(val.type), ["name"]: val.name, ["action_type"]: val.actionType == void 0 ? void 0 : serializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val.actionType), ["if_rejected"]: val.ifRejected == void 0 ? void 0 : val.ifRejected.map(function (item: WorkflowFlowsFieldOutcomesFieldIfRejectedField): any {
            return serializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(item);
        }) as readonly any[] };
}
export interface WorkflowFlowsField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldTypeField;
    readonly trigger?: WorkflowFlowsFieldTriggerField;
    readonly outcomes?: readonly WorkflowFlowsFieldOutcomesField[];
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
}
export function deserializeWorkflowFlowsField(val: any): WorkflowFlowsField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowFlowsFieldTypeField = val.type == void 0 ? void 0 : deserializeWorkflowFlowsFieldTypeField(val.type);
    const trigger: undefined | WorkflowFlowsFieldTriggerField = val.trigger == void 0 ? void 0 : deserializeWorkflowFlowsFieldTriggerField(val.trigger);
    const outcomes: undefined | readonly WorkflowFlowsFieldOutcomesField[] = isJson(val.outcomes, "array") ? val.outcomes.map(function (itm: Json): any {
        return deserializeWorkflowFlowsFieldOutcomesField(itm);
    }) as readonly any[] : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    return { id: id, type: type, trigger: trigger, outcomes: outcomes, createdAt: createdAt, createdBy: createdBy } satisfies WorkflowFlowsField;
}
export function serializeWorkflowFlowsField(val: WorkflowFlowsField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeWorkflowFlowsFieldTypeField(val.type), ["trigger"]: val.trigger == void 0 ? void 0 : serializeWorkflowFlowsFieldTriggerField(val.trigger), ["outcomes"]: val.outcomes == void 0 ? void 0 : val.outcomes.map(function (item: WorkflowFlowsFieldOutcomesField): any {
            return serializeWorkflowFlowsFieldOutcomesField(item);
        }) as readonly any[], ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy) };
}
export type WorkflowMiniTypeField = "workflow";
export function deserializeWorkflowMiniTypeField(val: any): WorkflowMiniTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowMiniTypeField\"";
    }
    if (val == "workflow") {
        return "workflow";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeWorkflowMiniTypeField(val: WorkflowMiniTypeField): Json {
    return val;
}
export interface WorkflowMini {
    readonly id?: string;
    readonly type?: WorkflowMiniTypeField;
    readonly name?: string;
    readonly description?: string;
    readonly isEnabled?: boolean;
}
export function deserializeWorkflowMini(val: any): WorkflowMini {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowMiniTypeField = val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const isEnabled: undefined | boolean = isJson(val.is_enabled, "boolean") ? val.is_enabled : void 0;
    return { id: id, type: type, name: name, description: description, isEnabled: isEnabled } satisfies WorkflowMini;
}
export function serializeWorkflowMini(val: WorkflowMini): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeWorkflowMiniTypeField(val.type), ["name"]: val.name, ["description"]: val.description, ["is_enabled"]: val.isEnabled };
}
export type Workflow = WorkflowMini & {
    /**
     * A list of flows assigned to a workflow. */
    readonly flows?: readonly WorkflowFlowsField[];
};
export function deserializeWorkflow(val: any): Workflow {
    const flows: undefined | readonly WorkflowFlowsField[] = isJson(val.flows, "array") ? val.flows.map(function (itm: Json): any {
        return deserializeWorkflowFlowsField(itm);
    }) as readonly any[] : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowMiniTypeField = val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const isEnabled: undefined | boolean = isJson(val.is_enabled, "boolean") ? val.is_enabled : void 0;
    return { flows: flows, id: id, type: type, name: name, description: description, isEnabled: isEnabled } satisfies Workflow;
}
export function serializeWorkflow(val: Workflow): Json {
    const base: any = serializeWorkflowMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"Workflow\"";
    }
    return { ...base, ...{ ["flows"]: val.flows == void 0 ? void 0 : val.flows.map(function (item: WorkflowFlowsField): any {
                return serializeWorkflowFlowsField(item);
            }) as readonly any[] } };
}
export interface Workflows {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly Workflow[];
}
export function deserializeWorkflows(val: any): Workflows {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly Workflow[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeWorkflow(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies Workflows;
}
export function serializeWorkflows(val: Workflows): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Workflow): any {
            return serializeWorkflow(item);
        }) as readonly any[] };
}
export type WorkflowFull = Workflow & {
    /**
     * The date and time when the workflow was created on Box */
    readonly createdAt?: string;
    /**
     * The date and time when the workflow was last updated on Box */
    readonly modifiedAt?: string;
    readonly createdBy?: UserBase;
    readonly modifiedBy?: UserBase;
};
export function deserializeWorkflowFull(val: any): WorkflowFull {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    const modifiedBy: undefined | UserBase = val.modified_by == void 0 ? void 0 : deserializeUserBase(val.modified_by);
    const flows: undefined | readonly WorkflowFlowsField[] = isJson(val.flows, "array") ? val.flows.map(function (itm: Json): any {
        return deserializeWorkflowFlowsField(itm);
    }) as readonly any[] : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowMiniTypeField = val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const isEnabled: undefined | boolean = isJson(val.is_enabled, "boolean") ? val.is_enabled : void 0;
    return { createdAt: createdAt, modifiedAt: modifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, flows: flows, id: id, type: type, name: name, description: description, isEnabled: isEnabled } satisfies WorkflowFull;
}
export function serializeWorkflowFull(val: WorkflowFull): Json {
    const base: any = serializeWorkflow(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"WorkflowFull\"";
    }
    return { ...base, ...{ ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : serializeUserBase(val.modifiedBy) } };
}
export type ZipDownloadNameConflictsFieldTypeField = "file" | "folder";
export function deserializeZipDownloadNameConflictsFieldTypeField(val: any): ZipDownloadNameConflictsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ZipDownloadNameConflictsFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeZipDownloadNameConflictsFieldTypeField(val: ZipDownloadNameConflictsFieldTypeField): Json {
    return val;
}
export interface ZipDownloadNameConflictsField {
    readonly id?: string;
    readonly type?: ZipDownloadNameConflictsFieldTypeField;
    readonly originalName?: string;
    readonly downloadName?: string;
}
export function deserializeZipDownloadNameConflictsField(val: any): ZipDownloadNameConflictsField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ZipDownloadNameConflictsFieldTypeField = val.type == void 0 ? void 0 : deserializeZipDownloadNameConflictsFieldTypeField(val.type);
    const originalName: undefined | string = isJson(val.original_name, "string") ? val.original_name : void 0;
    const downloadName: undefined | string = isJson(val.download_name, "string") ? val.download_name : void 0;
    return { id: id, type: type, originalName: originalName, downloadName: downloadName } satisfies ZipDownloadNameConflictsField;
}
export function serializeZipDownloadNameConflictsField(val: ZipDownloadNameConflictsField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeZipDownloadNameConflictsFieldTypeField(val.type), ["original_name"]: val.originalName, ["download_name"]: val.downloadName };
}
export interface ZipDownload {
    readonly downloadUrl?: string;
    readonly statusUrl?: string;
    readonly expiresAt?: string;
    readonly nameConflicts?: readonly (readonly ZipDownloadNameConflictsField[])[];
}
export function deserializeZipDownload(val: any): ZipDownload {
    const downloadUrl: undefined | string = isJson(val.download_url, "string") ? val.download_url : void 0;
    const statusUrl: undefined | string = isJson(val.status_url, "string") ? val.status_url : void 0;
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    const nameConflicts: undefined | readonly (readonly ZipDownloadNameConflictsField[])[] = isJson(val.name_conflicts, "array") ? val.name_conflicts.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    return { downloadUrl: downloadUrl, statusUrl: statusUrl, expiresAt: expiresAt, nameConflicts: nameConflicts } satisfies ZipDownload;
}
export function serializeZipDownload(val: ZipDownload): Json {
    return { ["download_url"]: val.downloadUrl, ["status_url"]: val.statusUrl, ["expires_at"]: val.expiresAt, ["name_conflicts"]: val.nameConflicts == void 0 ? void 0 : val.nameConflicts.map(function (item: readonly ZipDownloadNameConflictsField[]): undefined {
            return void 0;
        }) as readonly any[] };
}
export type ZipDownloadStatusStateField = "in_progress" | "failed" | "success";
export function deserializeZipDownloadStatusStateField(val: any): ZipDownloadStatusStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ZipDownloadStatusStateField\"";
    }
    if (val == "in_progress") {
        return "in_progress";
    }
    if (val == "failed") {
        return "failed";
    }
    if (val == "success") {
        return "success";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeZipDownloadStatusStateField(val: ZipDownloadStatusStateField): Json {
    return val;
}
export interface ZipDownloadStatus {
    readonly totalFileCount?: number;
    readonly downloadedFileCount?: number;
    readonly skippedFileCount?: number;
    readonly skippedFolderCount?: number;
    readonly state?: ZipDownloadStatusStateField;
}
export function deserializeZipDownloadStatus(val: any): ZipDownloadStatus {
    const totalFileCount: undefined | number = isJson(val.total_file_count, "number") ? val.total_file_count : void 0;
    const downloadedFileCount: undefined | number = isJson(val.downloaded_file_count, "number") ? val.downloaded_file_count : void 0;
    const skippedFileCount: undefined | number = isJson(val.skipped_file_count, "number") ? val.skipped_file_count : void 0;
    const skippedFolderCount: undefined | number = isJson(val.skipped_folder_count, "number") ? val.skipped_folder_count : void 0;
    const state: undefined | ZipDownloadStatusStateField = val.state == void 0 ? void 0 : deserializeZipDownloadStatusStateField(val.state);
    return { totalFileCount: totalFileCount, downloadedFileCount: downloadedFileCount, skippedFileCount: skippedFileCount, skippedFolderCount: skippedFolderCount, state: state } satisfies ZipDownloadStatus;
}
export function serializeZipDownloadStatus(val: ZipDownloadStatus): Json {
    return { ["total_file_count"]: val.totalFileCount, ["downloaded_file_count"]: val.downloadedFileCount, ["skipped_file_count"]: val.skippedFileCount, ["skipped_folder_count"]: val.skippedFolderCount, ["state"]: val.state == void 0 ? void 0 : serializeZipDownloadStatusStateField(val.state) };
}
export type SignRequestTypeField = "sign-request";
export function deserializeSignRequestTypeField(val: any): SignRequestTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestTypeField\"";
    }
    if (val == "sign-request") {
        return "sign-request";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSignRequestTypeField(val: SignRequestTypeField): Json {
    return val;
}
export type SignRequestStatusField = "converting" | "created" | "sent" | "viewed" | "signed" | "cancelled" | "declined" | "error_converting" | "error_sending" | "expired";
export function deserializeSignRequestStatusField(val: any): SignRequestStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestStatusField\"";
    }
    if (val == "converting") {
        return "converting";
    }
    if (val == "created") {
        return "created";
    }
    if (val == "sent") {
        return "sent";
    }
    if (val == "viewed") {
        return "viewed";
    }
    if (val == "signed") {
        return "signed";
    }
    if (val == "cancelled") {
        return "cancelled";
    }
    if (val == "declined") {
        return "declined";
    }
    if (val == "error_converting") {
        return "error_converting";
    }
    if (val == "error_sending") {
        return "error_sending";
    }
    if (val == "expired") {
        return "expired";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSignRequestStatusField(val: SignRequestStatusField): Json {
    return val;
}
export type FileScopeScopeField = "annotation_edit" | "annotation_view_all" | "annotation_view_self" | "base_explorer" | "base_picker" | "base_preview" | "base_upload" | "item_delete" | "item_download" | "item_preview" | "item_rename" | "item_share";
export function deserializeFileScopeScopeField(val: any): FileScopeScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileScopeScopeField\"";
    }
    if (val == "annotation_edit") {
        return "annotation_edit";
    }
    if (val == "annotation_view_all") {
        return "annotation_view_all";
    }
    if (val == "annotation_view_self") {
        return "annotation_view_self";
    }
    if (val == "base_explorer") {
        return "base_explorer";
    }
    if (val == "base_picker") {
        return "base_picker";
    }
    if (val == "base_preview") {
        return "base_preview";
    }
    if (val == "base_upload") {
        return "base_upload";
    }
    if (val == "item_delete") {
        return "item_delete";
    }
    if (val == "item_download") {
        return "item_download";
    }
    if (val == "item_preview") {
        return "item_preview";
    }
    if (val == "item_rename") {
        return "item_rename";
    }
    if (val == "item_share") {
        return "item_share";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeFileScopeScopeField(val: FileScopeScopeField): Json {
    return val;
}
export interface FileScope {
    readonly scope?: FileScopeScopeField;
    readonly object?: FileMini;
}
export function deserializeFileScope(val: any): FileScope {
    const scope: undefined | FileScopeScopeField = val.scope == void 0 ? void 0 : deserializeFileScopeScopeField(val.scope);
    const object: undefined | FileMini = val.object == void 0 ? void 0 : deserializeFileMini(val.object);
    return { scope: scope, object: object } satisfies FileScope;
}
export function serializeFileScope(val: FileScope): Json {
    return { ["scope"]: val.scope == void 0 ? void 0 : serializeFileScopeScopeField(val.scope), ["object"]: val.object == void 0 ? void 0 : serializeFileMini(val.object) };
}
export interface FileFullExpiringEmbedLinkField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: FileFullExpiringEmbedLinkFieldTokenTypeField;
    readonly restrictedTo?: readonly FileScope[];
    readonly url?: string;
}
export function deserializeFileFullExpiringEmbedLinkField(val: any): FileFullExpiringEmbedLinkField {
    const accessToken: undefined | string = isJson(val.access_token, "string") ? val.access_token : void 0;
    const expiresIn: undefined | number = isJson(val.expires_in, "number") ? val.expires_in : void 0;
    const tokenType: undefined | FileFullExpiringEmbedLinkFieldTokenTypeField = val.token_type == void 0 ? void 0 : deserializeFileFullExpiringEmbedLinkFieldTokenTypeField(val.token_type);
    const restrictedTo: undefined | readonly FileScope[] = isJson(val.restricted_to, "array") ? val.restricted_to.map(function (itm: Json): any {
        return deserializeFileScope(itm);
    }) as readonly any[] : void 0;
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    return { accessToken: accessToken, expiresIn: expiresIn, tokenType: tokenType, restrictedTo: restrictedTo, url: url } satisfies FileFullExpiringEmbedLinkField;
}
export function serializeFileFullExpiringEmbedLinkField(val: FileFullExpiringEmbedLinkField): Json {
    return { ["access_token"]: val.accessToken, ["expires_in"]: val.expiresIn, ["token_type"]: val.tokenType == void 0 ? void 0 : serializeFileFullExpiringEmbedLinkFieldTokenTypeField(val.tokenType), ["restricted_to"]: val.restrictedTo == void 0 ? void 0 : val.restrictedTo.map(function (item: FileScope): any {
            return serializeFileScope(item);
        }) as readonly any[], ["url"]: val.url };
}
export type FileFull = File & {
    /**
     * The version number of this file */
    readonly versionNumber?: string;
    /**
     * The number of comments on this file */
    readonly commentCount?: number;
    readonly permissions?: FileFullPermissionsField;
    readonly tags?: readonly string[];
    readonly lock?: FileFullLockField;
    /**
     * Indicates the (optional) file extension for this file. By default,
     * this is set to an empty string. */
    readonly extension?: string;
    /**
     * Indicates if the file is a package. Packages are commonly used
     * by Mac Applications and can include iWork files. */
    readonly isPackage?: boolean;
    readonly expiringEmbedLink?: FileFullExpiringEmbedLinkField;
    readonly watermarkInfo?: FileFullWatermarkInfoField;
    /**
     * Specifies if the file can be accessed
     * via the direct shared link or a shared link
     * to a parent folder. */
    readonly isAccessibleViaSharedLink?: boolean;
    /**
     * A list of the types of roles that user can be invited at
     * when sharing this file. */
    readonly allowedInviteeRoles?: readonly FileFullAllowedInviteeRolesField[];
    /**
     * Specifies if this file is owned by a user outside of the
     * authenticated enterprise. */
    readonly isExternallyOwned?: boolean;
    /**
     * Specifies if this file has any other collaborators. */
    readonly hasCollaborations?: boolean;
    readonly metadata?: FileFullMetadataField;
    /**
     * When the file will automatically be deleted */
    readonly expiresAt?: string;
    readonly representations?: FileFullRepresentationsField;
    readonly classification?: FileFullClassificationField;
    readonly uploaderDisplayName?: string;
    /**
     * The retention expiration timestamp for the given file */
    readonly dispositionAt?: string;
    /**
     * A list of the types of roles that user can be invited at
     * when sharing this file. */
    readonly sharedLinkPermissionOptions?: readonly FileFullSharedLinkPermissionOptionsField[];
};
export function deserializeFileFull(val: any): FileFull {
    const versionNumber: undefined | string = isJson(val.version_number, "string") ? val.version_number : void 0;
    const commentCount: undefined | number = isJson(val.comment_count, "number") ? val.comment_count : void 0;
    const permissions: undefined | FileFullPermissionsField = val.permissions == void 0 ? void 0 : deserializeFileFullPermissionsField(val.permissions);
    const tags: undefined | readonly string[] = isJson(val.tags, "array") ? val.tags.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    const lock: undefined | FileFullLockField = val.lock == void 0 ? void 0 : deserializeFileFullLockField(val.lock);
    const extension: undefined | string = isJson(val.extension, "string") ? val.extension : void 0;
    const isPackage: undefined | boolean = isJson(val.is_package, "boolean") ? val.is_package : void 0;
    const expiringEmbedLink: undefined | FileFullExpiringEmbedLinkField = val.expiring_embed_link == void 0 ? void 0 : deserializeFileFullExpiringEmbedLinkField(val.expiring_embed_link);
    const watermarkInfo: undefined | FileFullWatermarkInfoField = val.watermark_info == void 0 ? void 0 : deserializeFileFullWatermarkInfoField(val.watermark_info);
    const isAccessibleViaSharedLink: undefined | boolean = isJson(val.is_accessible_via_shared_link, "boolean") ? val.is_accessible_via_shared_link : void 0;
    const allowedInviteeRoles: undefined | readonly FileFullAllowedInviteeRolesField[] = isJson(val.allowed_invitee_roles, "array") ? val.allowed_invitee_roles.map(function (itm: Json): any {
        return deserializeFileFullAllowedInviteeRolesField(itm);
    }) as readonly any[] : void 0;
    const isExternallyOwned: undefined | boolean = isJson(val.is_externally_owned, "boolean") ? val.is_externally_owned : void 0;
    const hasCollaborations: undefined | boolean = isJson(val.has_collaborations, "boolean") ? val.has_collaborations : void 0;
    const metadata: undefined | FileFullMetadataField = val.metadata == void 0 ? void 0 : deserializeFileFullMetadataField(val.metadata);
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    const representations: undefined | FileFullRepresentationsField = val.representations == void 0 ? void 0 : deserializeFileFullRepresentationsField(val.representations);
    const classification: undefined | FileFullClassificationField = val.classification == void 0 ? void 0 : deserializeFileFullClassificationField(val.classification);
    const uploaderDisplayName: undefined | string = isJson(val.uploader_display_name, "string") ? val.uploader_display_name : void 0;
    const dispositionAt: undefined | string = isJson(val.disposition_at, "string") ? val.disposition_at : void 0;
    const sharedLinkPermissionOptions: undefined | readonly FileFullSharedLinkPermissionOptionsField[] = isJson(val.shared_link_permission_options, "array") ? val.shared_link_permission_options.map(function (itm: Json): any {
        return deserializeFileFullSharedLinkPermissionOptionsField(itm);
    }) as readonly any[] : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const pathCollection: undefined | FilePathCollectionField = val.path_collection == void 0 ? void 0 : deserializeFilePathCollectionField(val.path_collection);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink: undefined | FileSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeFileSharedLinkField(val.shared_link);
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus: undefined | FileItemStatusField = val.item_status == void 0 ? void 0 : deserializeFileItemStatusField(val.item_status);
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : deserializeFileVersionMini(val.file_version);
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
    return { versionNumber: versionNumber, commentCount: commentCount, permissions: permissions, tags: tags, lock: lock, extension: extension, isPackage: isPackage, expiringEmbedLink: expiringEmbedLink, watermarkInfo: watermarkInfo, isAccessibleViaSharedLink: isAccessibleViaSharedLink, allowedInviteeRoles: allowedInviteeRoles, isExternallyOwned: isExternallyOwned, hasCollaborations: hasCollaborations, metadata: metadata, expiresAt: expiresAt, representations: representations, classification: classification, uploaderDisplayName: uploaderDisplayName, dispositionAt: dispositionAt, sharedLinkPermissionOptions: sharedLinkPermissionOptions, description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, id: id, etag: etag, type: type } satisfies FileFull;
}
export function serializeFileFull(val: FileFull): Json {
    const base: any = serializeFile(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileFull\"";
    }
    return { ...base, ...{ ["version_number"]: val.versionNumber, ["comment_count"]: val.commentCount, ["permissions"]: val.permissions == void 0 ? void 0 : serializeFileFullPermissionsField(val.permissions), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item: string): undefined {
                return void 0;
            }) as readonly any[], ["lock"]: val.lock == void 0 ? void 0 : serializeFileFullLockField(val.lock), ["extension"]: val.extension, ["is_package"]: val.isPackage, ["expiring_embed_link"]: val.expiringEmbedLink == void 0 ? void 0 : serializeFileFullExpiringEmbedLinkField(val.expiringEmbedLink), ["watermark_info"]: val.watermarkInfo == void 0 ? void 0 : serializeFileFullWatermarkInfoField(val.watermarkInfo), ["is_accessible_via_shared_link"]: val.isAccessibleViaSharedLink, ["allowed_invitee_roles"]: val.allowedInviteeRoles == void 0 ? void 0 : val.allowedInviteeRoles.map(function (item: FileFullAllowedInviteeRolesField): any {
                return serializeFileFullAllowedInviteeRolesField(item);
            }) as readonly any[], ["is_externally_owned"]: val.isExternallyOwned, ["has_collaborations"]: val.hasCollaborations, ["metadata"]: val.metadata == void 0 ? void 0 : serializeFileFullMetadataField(val.metadata), ["expires_at"]: val.expiresAt, ["representations"]: val.representations == void 0 ? void 0 : serializeFileFullRepresentationsField(val.representations), ["classification"]: val.classification == void 0 ? void 0 : serializeFileFullClassificationField(val.classification), ["uploader_display_name"]: val.uploaderDisplayName, ["disposition_at"]: val.dispositionAt, ["shared_link_permission_options"]: val.sharedLinkPermissionOptions == void 0 ? void 0 : val.sharedLinkPermissionOptions.map(function (item: FileFullSharedLinkPermissionOptionsField): any {
                return serializeFileFullSharedLinkPermissionOptionsField(item);
            }) as readonly any[] } };
}
export interface AccessToken {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: AccessTokenTokenTypeField;
    readonly restrictedTo?: readonly FileScope[];
    readonly refreshToken?: string;
    readonly issuedTokenType?: AccessTokenIssuedTokenTypeField;
}
export function deserializeAccessToken(val: any): AccessToken {
    const accessToken: undefined | string = isJson(val.access_token, "string") ? val.access_token : void 0;
    const expiresIn: undefined | number = isJson(val.expires_in, "number") ? val.expires_in : void 0;
    const tokenType: undefined | AccessTokenTokenTypeField = val.token_type == void 0 ? void 0 : deserializeAccessTokenTokenTypeField(val.token_type);
    const restrictedTo: undefined | readonly FileScope[] = isJson(val.restricted_to, "array") ? val.restricted_to.map(function (itm: Json): any {
        return deserializeFileScope(itm);
    }) as readonly any[] : void 0;
    const refreshToken: undefined | string = isJson(val.refresh_token, "string") ? val.refresh_token : void 0;
    const issuedTokenType: undefined | AccessTokenIssuedTokenTypeField = val.issued_token_type == void 0 ? void 0 : deserializeAccessTokenIssuedTokenTypeField(val.issued_token_type);
    return { accessToken: accessToken, expiresIn: expiresIn, tokenType: tokenType, restrictedTo: restrictedTo, refreshToken: refreshToken, issuedTokenType: issuedTokenType } satisfies AccessToken;
}
export function serializeAccessToken(val: AccessToken): Json {
    return { ["access_token"]: val.accessToken, ["expires_in"]: val.expiresIn, ["token_type"]: val.tokenType == void 0 ? void 0 : serializeAccessTokenTokenTypeField(val.tokenType), ["restricted_to"]: val.restrictedTo == void 0 ? void 0 : val.restrictedTo.map(function (item: FileScope): any {
            return serializeFileScope(item);
        }) as readonly any[], ["refresh_token"]: val.refreshToken, ["issued_token_type"]: val.issuedTokenType == void 0 ? void 0 : serializeAccessTokenIssuedTokenTypeField(val.issuedTokenType) };
}
export type EventSourceItemTypeField = "file" | "folder";
export function deserializeEventSourceItemTypeField(val: any): EventSourceItemTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"EventSourceItemTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeEventSourceItemTypeField(val: EventSourceItemTypeField): Json {
    return val;
}
export interface EventSourceClassificationField {
    readonly name?: string;
}
export function deserializeEventSourceClassificationField(val: any): EventSourceClassificationField {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { name: name } satisfies EventSourceClassificationField;
}
export function serializeEventSourceClassificationField(val: EventSourceClassificationField): Json {
    return { ["name"]: val.name };
}
export interface EventSource {
    readonly itemType: EventSourceItemTypeField;
    readonly itemId: string;
    readonly itemName: string;
    readonly classification?: EventSourceClassificationField;
    readonly parent?: FolderMini;
    readonly ownedBy?: UserMini;
}
export function deserializeEventSource(val: any): EventSource {
    const itemType: EventSourceItemTypeField = deserializeEventSourceItemTypeField(val.item_type);
    const itemId: string = val.item_id;
    const itemName: string = val.item_name;
    const classification: undefined | EventSourceClassificationField = val.classification == void 0 ? void 0 : deserializeEventSourceClassificationField(val.classification);
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    return { itemType: itemType, itemId: itemId, itemName: itemName, classification: classification, parent: parent, ownedBy: ownedBy } satisfies EventSource;
}
export function serializeEventSource(val: EventSource): Json {
    return { ["item_type"]: serializeEventSourceItemTypeField(val.itemType), ["item_id"]: val.itemId, ["item_name"]: val.itemName, ["classification"]: val.classification == void 0 ? void 0 : serializeEventSourceClassificationField(val.classification), ["parent"]: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent), ["owned_by"]: val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy) };
}
export type EventSourceOrFileOrFolderOrUser = EventSource | File | Folder | User;
export function deserializeEventSourceOrFileOrFolderOrUser(val: any): EventSourceOrFileOrFolderOrUser {
    throw "Can't deserialize EventSourceOrFileOrFolderOrUser";
}
export function serializeEventSourceOrFileOrFolderOrUser(val: EventSourceOrFileOrFolderOrUser): Json {
    throw "Can't serialize EventSourceOrFileOrFolderOrUser";
}
export interface Event {
    readonly type?: string;
    readonly createdAt?: string;
    readonly recordedAt?: string;
    readonly eventId?: string;
    readonly createdBy?: UserMini;
    readonly eventType?: EventEventTypeField;
    readonly sessionId?: string;
    readonly source?: EventSourceOrFileOrFolderOrUser;
    readonly additionalDetails?: EventAdditionalDetailsField;
}
export function deserializeEvent(val: any): Event {
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const recordedAt: undefined | string = isJson(val.recorded_at, "string") ? val.recorded_at : void 0;
    const eventId: undefined | string = isJson(val.event_id, "string") ? val.event_id : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const eventType: undefined | EventEventTypeField = val.event_type == void 0 ? void 0 : deserializeEventEventTypeField(val.event_type);
    const sessionId: undefined | string = isJson(val.session_id, "string") ? val.session_id : void 0;
    const source: undefined | EventSourceOrFileOrFolderOrUser = val.source == void 0 ? void 0 : deserializeEventSourceOrFileOrFolderOrUser(val.source);
    const additionalDetails: undefined | EventAdditionalDetailsField = val.additional_details == void 0 ? void 0 : deserializeEventAdditionalDetailsField(val.additional_details);
    return { type: type, createdAt: createdAt, recordedAt: recordedAt, eventId: eventId, createdBy: createdBy, eventType: eventType, sessionId: sessionId, source: source, additionalDetails: additionalDetails } satisfies Event;
}
export function serializeEvent(val: Event): Json {
    return { ["type"]: val.type, ["created_at"]: val.createdAt, ["recorded_at"]: val.recordedAt, ["event_id"]: val.eventId, ["created_by"]: val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy), ["event_type"]: val.eventType == void 0 ? void 0 : serializeEventEventTypeField(val.eventType), ["session_id"]: val.sessionId, ["source"]: val.source == void 0 ? void 0 : serializeEventSourceOrFileOrFolderOrUser(val.source), ["additional_details"]: val.additionalDetails == void 0 ? void 0 : serializeEventAdditionalDetailsField(val.additionalDetails) };
}
export interface Events {
    readonly chunkSize?: number;
    readonly nextStreamPosition?: string;
    readonly entries?: readonly Event[];
}
export function deserializeEvents(val: any): Events {
    const chunkSize: undefined | number = isJson(val.chunk_size, "number") ? val.chunk_size : void 0;
    const nextStreamPosition: undefined | string = isJson(val.next_stream_position, "string") ? val.next_stream_position : void 0;
    const entries: undefined | readonly Event[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeEvent(itm);
    }) as readonly any[] : void 0;
    return { chunkSize: chunkSize, nextStreamPosition: nextStreamPosition, entries: entries } satisfies Events;
}
export function serializeEvents(val: Events): Json {
    return { ["chunk_size"]: val.chunkSize, ["next_stream_position"]: val.nextStreamPosition, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Event): any {
            return serializeEvent(item);
        }) as readonly any[] };
}
export interface SkillInvocation {
    readonly type?: SkillInvocationTypeField;
    readonly id?: string;
    readonly skill?: SkillInvocationSkillField;
    readonly token?: SkillInvocationTokenField;
    readonly status?: SkillInvocationStatusField;
    readonly createdAt?: string;
    readonly trigger?: string;
    readonly enterprise?: SkillInvocationEnterpriseField;
    readonly source?: FileOrFolder;
    readonly event?: Event;
}
export function deserializeSkillInvocation(val: any): SkillInvocation {
    const type: undefined | SkillInvocationTypeField = val.type == void 0 ? void 0 : deserializeSkillInvocationTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const skill: undefined | SkillInvocationSkillField = val.skill == void 0 ? void 0 : deserializeSkillInvocationSkillField(val.skill);
    const token: undefined | SkillInvocationTokenField = val.token == void 0 ? void 0 : deserializeSkillInvocationTokenField(val.token);
    const status: undefined | SkillInvocationStatusField = val.status == void 0 ? void 0 : deserializeSkillInvocationStatusField(val.status);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const trigger: undefined | string = isJson(val.trigger, "string") ? val.trigger : void 0;
    const enterprise: undefined | SkillInvocationEnterpriseField = val.enterprise == void 0 ? void 0 : deserializeSkillInvocationEnterpriseField(val.enterprise);
    const source: undefined | FileOrFolder = val.source == void 0 ? void 0 : deserializeFileOrFolder(val.source);
    const event: undefined | Event = val.event == void 0 ? void 0 : deserializeEvent(val.event);
    return { type: type, id: id, skill: skill, token: token, status: status, createdAt: createdAt, trigger: trigger, enterprise: enterprise, source: source, event: event } satisfies SkillInvocation;
}
export function serializeSkillInvocation(val: SkillInvocation): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeSkillInvocationTypeField(val.type), ["id"]: val.id, ["skill"]: val.skill == void 0 ? void 0 : serializeSkillInvocationSkillField(val.skill), ["token"]: val.token == void 0 ? void 0 : serializeSkillInvocationTokenField(val.token), ["status"]: val.status == void 0 ? void 0 : serializeSkillInvocationStatusField(val.status), ["created_at"]: val.createdAt, ["trigger"]: val.trigger, ["enterprise"]: val.enterprise == void 0 ? void 0 : serializeSkillInvocationEnterpriseField(val.enterprise), ["source"]: val.source == void 0 ? void 0 : serializeFileOrFolder(val.source), ["event"]: val.event == void 0 ? void 0 : serializeEvent(val.event) };
}
export type KeywordSkillCardTypeField = "skill_card";
export function deserializeKeywordSkillCardTypeField(val: any): KeywordSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"KeywordSkillCardTypeField\"";
    }
    if (val == "skill_card") {
        return "skill_card";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeKeywordSkillCardTypeField(val: KeywordSkillCardTypeField): Json {
    return val;
}
export type KeywordSkillCardSkillCardTypeField = "keyword";
export function deserializeKeywordSkillCardSkillCardTypeField(val: any): KeywordSkillCardSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"KeywordSkillCardSkillCardTypeField\"";
    }
    if (val == "keyword") {
        return "keyword";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeKeywordSkillCardSkillCardTypeField(val: KeywordSkillCardSkillCardTypeField): Json {
    return val;
}
export interface KeywordSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export function deserializeKeywordSkillCardSkillCardTitleField(val: any): KeywordSkillCardSkillCardTitleField {
    const code: undefined | string = isJson(val.code, "string") ? val.code : void 0;
    const message: string = val.message;
    return { code: code, message: message } satisfies KeywordSkillCardSkillCardTitleField;
}
export function serializeKeywordSkillCardSkillCardTitleField(val: KeywordSkillCardSkillCardTitleField): Json {
    return { ["code"]: val.code, ["message"]: val.message };
}
export type KeywordSkillCardSkillFieldTypeField = "service";
export function deserializeKeywordSkillCardSkillFieldTypeField(val: any): KeywordSkillCardSkillFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"KeywordSkillCardSkillFieldTypeField\"";
    }
    if (val == "service") {
        return "service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeKeywordSkillCardSkillFieldTypeField(val: KeywordSkillCardSkillFieldTypeField): Json {
    return val;
}
export interface KeywordSkillCardSkillField {
    readonly type: KeywordSkillCardSkillFieldTypeField;
    readonly id: string;
}
export function deserializeKeywordSkillCardSkillField(val: any): KeywordSkillCardSkillField {
    const type: KeywordSkillCardSkillFieldTypeField = deserializeKeywordSkillCardSkillFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies KeywordSkillCardSkillField;
}
export function serializeKeywordSkillCardSkillField(val: KeywordSkillCardSkillField): Json {
    return { ["type"]: serializeKeywordSkillCardSkillFieldTypeField(val.type), ["id"]: val.id };
}
export type KeywordSkillCardInvocationFieldTypeField = "skill_invocation";
export function deserializeKeywordSkillCardInvocationFieldTypeField(val: any): KeywordSkillCardInvocationFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"KeywordSkillCardInvocationFieldTypeField\"";
    }
    if (val == "skill_invocation") {
        return "skill_invocation";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeKeywordSkillCardInvocationFieldTypeField(val: KeywordSkillCardInvocationFieldTypeField): Json {
    return val;
}
export interface KeywordSkillCardInvocationField {
    readonly type: KeywordSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export function deserializeKeywordSkillCardInvocationField(val: any): KeywordSkillCardInvocationField {
    const type: KeywordSkillCardInvocationFieldTypeField = deserializeKeywordSkillCardInvocationFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies KeywordSkillCardInvocationField;
}
export function serializeKeywordSkillCardInvocationField(val: KeywordSkillCardInvocationField): Json {
    return { ["type"]: serializeKeywordSkillCardInvocationFieldTypeField(val.type), ["id"]: val.id };
}
export interface KeywordSkillCardEntriesField {
    readonly text?: string;
}
export function deserializeKeywordSkillCardEntriesField(val: any): KeywordSkillCardEntriesField {
    const text: undefined | string = isJson(val.text, "string") ? val.text : void 0;
    return { text: text } satisfies KeywordSkillCardEntriesField;
}
export function serializeKeywordSkillCardEntriesField(val: KeywordSkillCardEntriesField): Json {
    return { ["text"]: val.text };
}
export interface KeywordSkillCard {
    readonly createdAt?: string;
    readonly type: KeywordSkillCardTypeField;
    readonly skillCardType: KeywordSkillCardSkillCardTypeField;
    readonly skillCardTitle?: KeywordSkillCardSkillCardTitleField;
    readonly skill: KeywordSkillCardSkillField;
    readonly invocation: KeywordSkillCardInvocationField;
    readonly entries: readonly KeywordSkillCardEntriesField[];
}
export function deserializeKeywordSkillCard(val: any): KeywordSkillCard {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const type: KeywordSkillCardTypeField = deserializeKeywordSkillCardTypeField(val.type);
    const skillCardType: KeywordSkillCardSkillCardTypeField = deserializeKeywordSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle: undefined | KeywordSkillCardSkillCardTitleField = val.skill_card_title == void 0 ? void 0 : deserializeKeywordSkillCardSkillCardTitleField(val.skill_card_title);
    const skill: KeywordSkillCardSkillField = deserializeKeywordSkillCardSkillField(val.skill);
    const invocation: KeywordSkillCardInvocationField = deserializeKeywordSkillCardInvocationField(val.invocation);
    const entries: readonly KeywordSkillCardEntriesField[] = val.entries.map(function (itm: Json): any {
        return deserializeKeywordSkillCardEntriesField(itm);
    }) as readonly any[];
    return { createdAt: createdAt, type: type, skillCardType: skillCardType, skillCardTitle: skillCardTitle, skill: skill, invocation: invocation, entries: entries } satisfies KeywordSkillCard;
}
export function serializeKeywordSkillCard(val: KeywordSkillCard): Json {
    return { ["created_at"]: val.createdAt, ["type"]: serializeKeywordSkillCardTypeField(val.type), ["skill_card_type"]: serializeKeywordSkillCardSkillCardTypeField(val.skillCardType), ["skill_card_title"]: val.skillCardTitle == void 0 ? void 0 : serializeKeywordSkillCardSkillCardTitleField(val.skillCardTitle), ["skill"]: serializeKeywordSkillCardSkillField(val.skill), ["invocation"]: serializeKeywordSkillCardInvocationField(val.invocation), ["entries"]: val.entries.map(function (item: KeywordSkillCardEntriesField): any {
            return serializeKeywordSkillCardEntriesField(item);
        }) as readonly any[] };
}
export interface IntegrationMappingSlackOptions {
    readonly isAccessManagementDisabled?: boolean;
}
export function deserializeIntegrationMappingSlackOptions(val: any): IntegrationMappingSlackOptions {
    const isAccessManagementDisabled: undefined | boolean = isJson(val.is_access_management_disabled, "boolean") ? val.is_access_management_disabled : void 0;
    return { isAccessManagementDisabled: isAccessManagementDisabled } satisfies IntegrationMappingSlackOptions;
}
export function serializeIntegrationMappingSlackOptions(val: IntegrationMappingSlackOptions): Json {
    return { ["is_access_management_disabled"]: val.isAccessManagementDisabled };
}
export type IntegrationMappingPartnerItemSlackTypeField = "channel";
export function deserializeIntegrationMappingPartnerItemSlackTypeField(val: any): IntegrationMappingPartnerItemSlackTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingPartnerItemSlackTypeField\"";
    }
    if (val == "channel") {
        return "channel";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeIntegrationMappingPartnerItemSlackTypeField(val: IntegrationMappingPartnerItemSlackTypeField): Json {
    return val;
}
export interface IntegrationMappingPartnerItemSlack {
    readonly type: IntegrationMappingPartnerItemSlackTypeField;
    readonly id: string;
    readonly slackWorkspaceId?: string;
    readonly slackOrgId?: string;
}
export function deserializeIntegrationMappingPartnerItemSlack(val: any): IntegrationMappingPartnerItemSlack {
    const type: IntegrationMappingPartnerItemSlackTypeField = deserializeIntegrationMappingPartnerItemSlackTypeField(val.type);
    const id: string = val.id;
    const slackWorkspaceId: undefined | string = isJson(val.slack_workspace_id, "string") ? val.slack_workspace_id : void 0;
    const slackOrgId: undefined | string = isJson(val.slack_org_id, "string") ? val.slack_org_id : void 0;
    return { type: type, id: id, slackWorkspaceId: slackWorkspaceId, slackOrgId: slackOrgId } satisfies IntegrationMappingPartnerItemSlack;
}
export function serializeIntegrationMappingPartnerItemSlack(val: IntegrationMappingPartnerItemSlack): Json {
    return { ["type"]: serializeIntegrationMappingPartnerItemSlackTypeField(val.type), ["id"]: val.id, ["slack_workspace_id"]: val.slackWorkspaceId, ["slack_org_id"]: val.slackOrgId };
}
export type IntegrationMapping = IntegrationMappingBase & {
    /**
     * Mapping type */
    readonly type: IntegrationMappingTypeField;
    /**
     * Mapped item object for Slack */
    readonly partnerItem: IntegrationMappingPartnerItemSlack;
    /**
     * The Box folder, to which the object from the
     * partner app domain (referenced in `partner_item_id`) is mapped */
    readonly boxItem: IntegrationMappingBoxItemField;
    /**
     * Identifies whether the mapping has
     * been manually set
     * (as opposed to being automatically created) */
    readonly isManuallyCreated?: boolean;
    /**
     * Integration mapping options for Slack */
    readonly options?: IntegrationMappingOptionsField;
    /**
     * An object representing the user who
     * created the integration mapping */
    readonly createdBy?: IntegrationMappingCreatedByField;
    /**
     * The user who
     * last modified the integration mapping */
    readonly modifiedBy?: IntegrationMappingModifiedByField;
    /**
     * When the integration mapping object was created */
    readonly createdAt?: string;
    /**
     * When the integration mapping object was last modified */
    readonly modifiedAt?: string;
};
export function deserializeIntegrationMapping(val: any): IntegrationMapping {
    const type: IntegrationMappingTypeField = deserializeIntegrationMappingTypeField(val.type);
    const partnerItem: IntegrationMappingPartnerItemSlack = deserializeIntegrationMappingPartnerItemSlack(val.partner_item);
    const boxItem: IntegrationMappingBoxItemField = deserializeIntegrationMappingBoxItemField(val.box_item);
    const isManuallyCreated: undefined | boolean = isJson(val.is_manually_created, "boolean") ? val.is_manually_created : void 0;
    const options: undefined | IntegrationMappingOptionsField = val.options == void 0 ? void 0 : deserializeIntegrationMappingOptionsField(val.options);
    const createdBy: undefined | IntegrationMappingCreatedByField = val.created_by == void 0 ? void 0 : deserializeIntegrationMappingCreatedByField(val.created_by);
    const modifiedBy: undefined | IntegrationMappingModifiedByField = val.modified_by == void 0 ? void 0 : deserializeIntegrationMappingModifiedByField(val.modified_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const integrationType: undefined | IntegrationMappingBaseIntegrationTypeField = val.integration_type == void 0 ? void 0 : deserializeIntegrationMappingBaseIntegrationTypeField(val.integration_type);
    return { type: type, partnerItem: partnerItem, boxItem: boxItem, isManuallyCreated: isManuallyCreated, options: options, createdBy: createdBy, modifiedBy: modifiedBy, createdAt: createdAt, modifiedAt: modifiedAt, id: id, integrationType: integrationType } satisfies IntegrationMapping;
}
export function serializeIntegrationMapping(val: IntegrationMapping): Json {
    const base: any = serializeIntegrationMappingBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"IntegrationMapping\"";
    }
    return { ...base, ...{ ["type"]: serializeIntegrationMappingTypeField(val.type), ["partner_item"]: serializeIntegrationMappingPartnerItemSlack(val.partnerItem), ["box_item"]: serializeIntegrationMappingBoxItemField(val.boxItem), ["is_manually_created"]: val.isManuallyCreated, ["options"]: val.options == void 0 ? void 0 : serializeIntegrationMappingOptionsField(val.options), ["created_by"]: val.createdBy == void 0 ? void 0 : serializeIntegrationMappingCreatedByField(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : serializeIntegrationMappingModifiedByField(val.modifiedBy), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt } };
}
export interface IntegrationMappings {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly IntegrationMapping[];
}
export function deserializeIntegrationMappings(val: any): IntegrationMappings {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly IntegrationMapping[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeIntegrationMapping(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies IntegrationMappings;
}
export function serializeIntegrationMappings(val: IntegrationMappings): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: IntegrationMapping): any {
            return serializeIntegrationMapping(item);
        }) as readonly any[] };
}
export type IntegrationMappingBoxItemSlackTypeField = "folder";
export function deserializeIntegrationMappingBoxItemSlackTypeField(val: any): IntegrationMappingBoxItemSlackTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingBoxItemSlackTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeIntegrationMappingBoxItemSlackTypeField(val: IntegrationMappingBoxItemSlackTypeField): Json {
    return val;
}
export interface IntegrationMappingBoxItemSlack {
    readonly type: IntegrationMappingBoxItemSlackTypeField;
    readonly id: string;
}
export function deserializeIntegrationMappingBoxItemSlack(val: any): IntegrationMappingBoxItemSlack {
    const type: IntegrationMappingBoxItemSlackTypeField = deserializeIntegrationMappingBoxItemSlackTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies IntegrationMappingBoxItemSlack;
}
export function serializeIntegrationMappingBoxItemSlack(val: IntegrationMappingBoxItemSlack): Json {
    return { ["type"]: serializeIntegrationMappingBoxItemSlackTypeField(val.type), ["id"]: val.id };
}
export type TimelineSkillCardTypeField = "skill_card";
export function deserializeTimelineSkillCardTypeField(val: any): TimelineSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TimelineSkillCardTypeField\"";
    }
    if (val == "skill_card") {
        return "skill_card";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTimelineSkillCardTypeField(val: TimelineSkillCardTypeField): Json {
    return val;
}
export type TimelineSkillCardSkillCardTypeField = "timeline";
export function deserializeTimelineSkillCardSkillCardTypeField(val: any): TimelineSkillCardSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TimelineSkillCardSkillCardTypeField\"";
    }
    if (val == "timeline") {
        return "timeline";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTimelineSkillCardSkillCardTypeField(val: TimelineSkillCardSkillCardTypeField): Json {
    return val;
}
export interface TimelineSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export function deserializeTimelineSkillCardSkillCardTitleField(val: any): TimelineSkillCardSkillCardTitleField {
    const code: undefined | string = isJson(val.code, "string") ? val.code : void 0;
    const message: string = val.message;
    return { code: code, message: message } satisfies TimelineSkillCardSkillCardTitleField;
}
export function serializeTimelineSkillCardSkillCardTitleField(val: TimelineSkillCardSkillCardTitleField): Json {
    return { ["code"]: val.code, ["message"]: val.message };
}
export type TimelineSkillCardSkillFieldTypeField = "service";
export function deserializeTimelineSkillCardSkillFieldTypeField(val: any): TimelineSkillCardSkillFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TimelineSkillCardSkillFieldTypeField\"";
    }
    if (val == "service") {
        return "service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTimelineSkillCardSkillFieldTypeField(val: TimelineSkillCardSkillFieldTypeField): Json {
    return val;
}
export interface TimelineSkillCardSkillField {
    readonly type: TimelineSkillCardSkillFieldTypeField;
    readonly id: string;
}
export function deserializeTimelineSkillCardSkillField(val: any): TimelineSkillCardSkillField {
    const type: TimelineSkillCardSkillFieldTypeField = deserializeTimelineSkillCardSkillFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies TimelineSkillCardSkillField;
}
export function serializeTimelineSkillCardSkillField(val: TimelineSkillCardSkillField): Json {
    return { ["type"]: serializeTimelineSkillCardSkillFieldTypeField(val.type), ["id"]: val.id };
}
export type TimelineSkillCardInvocationFieldTypeField = "skill_invocation";
export function deserializeTimelineSkillCardInvocationFieldTypeField(val: any): TimelineSkillCardInvocationFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TimelineSkillCardInvocationFieldTypeField\"";
    }
    if (val == "skill_invocation") {
        return "skill_invocation";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTimelineSkillCardInvocationFieldTypeField(val: TimelineSkillCardInvocationFieldTypeField): Json {
    return val;
}
export interface TimelineSkillCardInvocationField {
    readonly type: TimelineSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export function deserializeTimelineSkillCardInvocationField(val: any): TimelineSkillCardInvocationField {
    const type: TimelineSkillCardInvocationFieldTypeField = deserializeTimelineSkillCardInvocationFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies TimelineSkillCardInvocationField;
}
export function serializeTimelineSkillCardInvocationField(val: TimelineSkillCardInvocationField): Json {
    return { ["type"]: serializeTimelineSkillCardInvocationFieldTypeField(val.type), ["id"]: val.id };
}
export interface TimelineSkillCardEntriesFieldAppearsField {
    readonly start?: number;
    readonly end?: number;
}
export function deserializeTimelineSkillCardEntriesFieldAppearsField(val: any): TimelineSkillCardEntriesFieldAppearsField {
    const start: undefined | number = isJson(val.start, "number") ? val.start : void 0;
    const end: undefined | number = isJson(val.end, "number") ? val.end : void 0;
    return { start: start, end: end } satisfies TimelineSkillCardEntriesFieldAppearsField;
}
export function serializeTimelineSkillCardEntriesFieldAppearsField(val: TimelineSkillCardEntriesFieldAppearsField): Json {
    return { ["start"]: val.start, ["end"]: val.end };
}
export interface TimelineSkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly TimelineSkillCardEntriesFieldAppearsField[];
    readonly imageUrl?: string;
}
export function deserializeTimelineSkillCardEntriesField(val: any): TimelineSkillCardEntriesField {
    const text: undefined | string = isJson(val.text, "string") ? val.text : void 0;
    const appears: undefined | readonly TimelineSkillCardEntriesFieldAppearsField[] = isJson(val.appears, "array") ? val.appears.map(function (itm: Json): any {
        return deserializeTimelineSkillCardEntriesFieldAppearsField(itm);
    }) as readonly any[] : void 0;
    const imageUrl: undefined | string = isJson(val.image_url, "string") ? val.image_url : void 0;
    return { text: text, appears: appears, imageUrl: imageUrl } satisfies TimelineSkillCardEntriesField;
}
export function serializeTimelineSkillCardEntriesField(val: TimelineSkillCardEntriesField): Json {
    return { ["text"]: val.text, ["appears"]: val.appears == void 0 ? void 0 : val.appears.map(function (item: TimelineSkillCardEntriesFieldAppearsField): any {
            return serializeTimelineSkillCardEntriesFieldAppearsField(item);
        }) as readonly any[], ["image_url"]: val.imageUrl };
}
export interface TimelineSkillCard {
    readonly createdAt?: string;
    readonly type: TimelineSkillCardTypeField;
    readonly skillCardType: TimelineSkillCardSkillCardTypeField;
    readonly skillCardTitle?: TimelineSkillCardSkillCardTitleField;
    readonly skill: TimelineSkillCardSkillField;
    readonly invocation: TimelineSkillCardInvocationField;
    readonly duration?: number;
    readonly entries: readonly TimelineSkillCardEntriesField[];
}
export function deserializeTimelineSkillCard(val: any): TimelineSkillCard {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const type: TimelineSkillCardTypeField = deserializeTimelineSkillCardTypeField(val.type);
    const skillCardType: TimelineSkillCardSkillCardTypeField = deserializeTimelineSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle: undefined | TimelineSkillCardSkillCardTitleField = val.skill_card_title == void 0 ? void 0 : deserializeTimelineSkillCardSkillCardTitleField(val.skill_card_title);
    const skill: TimelineSkillCardSkillField = deserializeTimelineSkillCardSkillField(val.skill);
    const invocation: TimelineSkillCardInvocationField = deserializeTimelineSkillCardInvocationField(val.invocation);
    const duration: undefined | number = isJson(val.duration, "number") ? val.duration : void 0;
    const entries: readonly TimelineSkillCardEntriesField[] = val.entries.map(function (itm: Json): any {
        return deserializeTimelineSkillCardEntriesField(itm);
    }) as readonly any[];
    return { createdAt: createdAt, type: type, skillCardType: skillCardType, skillCardTitle: skillCardTitle, skill: skill, invocation: invocation, duration: duration, entries: entries } satisfies TimelineSkillCard;
}
export function serializeTimelineSkillCard(val: TimelineSkillCard): Json {
    return { ["created_at"]: val.createdAt, ["type"]: serializeTimelineSkillCardTypeField(val.type), ["skill_card_type"]: serializeTimelineSkillCardSkillCardTypeField(val.skillCardType), ["skill_card_title"]: val.skillCardTitle == void 0 ? void 0 : serializeTimelineSkillCardSkillCardTitleField(val.skillCardTitle), ["skill"]: serializeTimelineSkillCardSkillField(val.skill), ["invocation"]: serializeTimelineSkillCardInvocationField(val.invocation), ["duration"]: val.duration, ["entries"]: val.entries.map(function (item: TimelineSkillCardEntriesField): any {
            return serializeTimelineSkillCardEntriesField(item);
        }) as readonly any[] };
}
export type TranscriptSkillCardTypeField = "skill_card";
export function deserializeTranscriptSkillCardTypeField(val: any): TranscriptSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TranscriptSkillCardTypeField\"";
    }
    if (val == "skill_card") {
        return "skill_card";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTranscriptSkillCardTypeField(val: TranscriptSkillCardTypeField): Json {
    return val;
}
export type TranscriptSkillCardSkillCardTypeField = "transcript";
export function deserializeTranscriptSkillCardSkillCardTypeField(val: any): TranscriptSkillCardSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TranscriptSkillCardSkillCardTypeField\"";
    }
    if (val == "transcript") {
        return "transcript";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTranscriptSkillCardSkillCardTypeField(val: TranscriptSkillCardSkillCardTypeField): Json {
    return val;
}
export interface TranscriptSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export function deserializeTranscriptSkillCardSkillCardTitleField(val: any): TranscriptSkillCardSkillCardTitleField {
    const code: undefined | string = isJson(val.code, "string") ? val.code : void 0;
    const message: string = val.message;
    return { code: code, message: message } satisfies TranscriptSkillCardSkillCardTitleField;
}
export function serializeTranscriptSkillCardSkillCardTitleField(val: TranscriptSkillCardSkillCardTitleField): Json {
    return { ["code"]: val.code, ["message"]: val.message };
}
export type TranscriptSkillCardSkillFieldTypeField = "service";
export function deserializeTranscriptSkillCardSkillFieldTypeField(val: any): TranscriptSkillCardSkillFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TranscriptSkillCardSkillFieldTypeField\"";
    }
    if (val == "service") {
        return "service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTranscriptSkillCardSkillFieldTypeField(val: TranscriptSkillCardSkillFieldTypeField): Json {
    return val;
}
export interface TranscriptSkillCardSkillField {
    readonly type: TranscriptSkillCardSkillFieldTypeField;
    readonly id: string;
}
export function deserializeTranscriptSkillCardSkillField(val: any): TranscriptSkillCardSkillField {
    const type: TranscriptSkillCardSkillFieldTypeField = deserializeTranscriptSkillCardSkillFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies TranscriptSkillCardSkillField;
}
export function serializeTranscriptSkillCardSkillField(val: TranscriptSkillCardSkillField): Json {
    return { ["type"]: serializeTranscriptSkillCardSkillFieldTypeField(val.type), ["id"]: val.id };
}
export type TranscriptSkillCardInvocationFieldTypeField = "skill_invocation";
export function deserializeTranscriptSkillCardInvocationFieldTypeField(val: any): TranscriptSkillCardInvocationFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TranscriptSkillCardInvocationFieldTypeField\"";
    }
    if (val == "skill_invocation") {
        return "skill_invocation";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTranscriptSkillCardInvocationFieldTypeField(val: TranscriptSkillCardInvocationFieldTypeField): Json {
    return val;
}
export interface TranscriptSkillCardInvocationField {
    readonly type: TranscriptSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export function deserializeTranscriptSkillCardInvocationField(val: any): TranscriptSkillCardInvocationField {
    const type: TranscriptSkillCardInvocationFieldTypeField = deserializeTranscriptSkillCardInvocationFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies TranscriptSkillCardInvocationField;
}
export function serializeTranscriptSkillCardInvocationField(val: TranscriptSkillCardInvocationField): Json {
    return { ["type"]: serializeTranscriptSkillCardInvocationFieldTypeField(val.type), ["id"]: val.id };
}
export interface TranscriptSkillCardEntriesFieldAppearsField {
    readonly start?: number;
}
export function deserializeTranscriptSkillCardEntriesFieldAppearsField(val: any): TranscriptSkillCardEntriesFieldAppearsField {
    const start: undefined | number = isJson(val.start, "number") ? val.start : void 0;
    return { start: start } satisfies TranscriptSkillCardEntriesFieldAppearsField;
}
export function serializeTranscriptSkillCardEntriesFieldAppearsField(val: TranscriptSkillCardEntriesFieldAppearsField): Json {
    return { ["start"]: val.start };
}
export interface TranscriptSkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly TranscriptSkillCardEntriesFieldAppearsField[];
}
export function deserializeTranscriptSkillCardEntriesField(val: any): TranscriptSkillCardEntriesField {
    const text: undefined | string = isJson(val.text, "string") ? val.text : void 0;
    const appears: undefined | readonly TranscriptSkillCardEntriesFieldAppearsField[] = isJson(val.appears, "array") ? val.appears.map(function (itm: Json): any {
        return deserializeTranscriptSkillCardEntriesFieldAppearsField(itm);
    }) as readonly any[] : void 0;
    return { text: text, appears: appears } satisfies TranscriptSkillCardEntriesField;
}
export function serializeTranscriptSkillCardEntriesField(val: TranscriptSkillCardEntriesField): Json {
    return { ["text"]: val.text, ["appears"]: val.appears == void 0 ? void 0 : val.appears.map(function (item: TranscriptSkillCardEntriesFieldAppearsField): any {
            return serializeTranscriptSkillCardEntriesFieldAppearsField(item);
        }) as readonly any[] };
}
export interface TranscriptSkillCard {
    readonly createdAt?: string;
    readonly type: TranscriptSkillCardTypeField;
    readonly skillCardType: TranscriptSkillCardSkillCardTypeField;
    readonly skillCardTitle?: TranscriptSkillCardSkillCardTitleField;
    readonly skill: TranscriptSkillCardSkillField;
    readonly invocation: TranscriptSkillCardInvocationField;
    readonly duration?: number;
    readonly entries: readonly TranscriptSkillCardEntriesField[];
}
export function deserializeTranscriptSkillCard(val: any): TranscriptSkillCard {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const type: TranscriptSkillCardTypeField = deserializeTranscriptSkillCardTypeField(val.type);
    const skillCardType: TranscriptSkillCardSkillCardTypeField = deserializeTranscriptSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle: undefined | TranscriptSkillCardSkillCardTitleField = val.skill_card_title == void 0 ? void 0 : deserializeTranscriptSkillCardSkillCardTitleField(val.skill_card_title);
    const skill: TranscriptSkillCardSkillField = deserializeTranscriptSkillCardSkillField(val.skill);
    const invocation: TranscriptSkillCardInvocationField = deserializeTranscriptSkillCardInvocationField(val.invocation);
    const duration: undefined | number = isJson(val.duration, "number") ? val.duration : void 0;
    const entries: readonly TranscriptSkillCardEntriesField[] = val.entries.map(function (itm: Json): any {
        return deserializeTranscriptSkillCardEntriesField(itm);
    }) as readonly any[];
    return { createdAt: createdAt, type: type, skillCardType: skillCardType, skillCardTitle: skillCardTitle, skill: skill, invocation: invocation, duration: duration, entries: entries } satisfies TranscriptSkillCard;
}
export function serializeTranscriptSkillCard(val: TranscriptSkillCard): Json {
    return { ["created_at"]: val.createdAt, ["type"]: serializeTranscriptSkillCardTypeField(val.type), ["skill_card_type"]: serializeTranscriptSkillCardSkillCardTypeField(val.skillCardType), ["skill_card_title"]: val.skillCardTitle == void 0 ? void 0 : serializeTranscriptSkillCardSkillCardTitleField(val.skillCardTitle), ["skill"]: serializeTranscriptSkillCardSkillField(val.skill), ["invocation"]: serializeTranscriptSkillCardInvocationField(val.invocation), ["duration"]: val.duration, ["entries"]: val.entries.map(function (item: TranscriptSkillCardEntriesField): any {
            return serializeTranscriptSkillCardEntriesField(item);
        }) as readonly any[] };
}
export type StatusSkillCardTypeField = "skill_card";
export function deserializeStatusSkillCardTypeField(val: any): StatusSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StatusSkillCardTypeField\"";
    }
    if (val == "skill_card") {
        return "skill_card";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeStatusSkillCardTypeField(val: StatusSkillCardTypeField): Json {
    return val;
}
export type StatusSkillCardSkillCardTypeField = "status";
export function deserializeStatusSkillCardSkillCardTypeField(val: any): StatusSkillCardSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StatusSkillCardSkillCardTypeField\"";
    }
    if (val == "status") {
        return "status";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeStatusSkillCardSkillCardTypeField(val: StatusSkillCardSkillCardTypeField): Json {
    return val;
}
export interface StatusSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export function deserializeStatusSkillCardSkillCardTitleField(val: any): StatusSkillCardSkillCardTitleField {
    const code: undefined | string = isJson(val.code, "string") ? val.code : void 0;
    const message: string = val.message;
    return { code: code, message: message } satisfies StatusSkillCardSkillCardTitleField;
}
export function serializeStatusSkillCardSkillCardTitleField(val: StatusSkillCardSkillCardTitleField): Json {
    return { ["code"]: val.code, ["message"]: val.message };
}
export type StatusSkillCardStatusFieldCodeField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export function deserializeStatusSkillCardStatusFieldCodeField(val: any): StatusSkillCardStatusFieldCodeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StatusSkillCardStatusFieldCodeField\"";
    }
    if (val == "invoked") {
        return "invoked";
    }
    if (val == "processing") {
        return "processing";
    }
    if (val == "success") {
        return "success";
    }
    if (val == "transient_failure") {
        return "transient_failure";
    }
    if (val == "permanent_failure") {
        return "permanent_failure";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeStatusSkillCardStatusFieldCodeField(val: StatusSkillCardStatusFieldCodeField): Json {
    return val;
}
export interface StatusSkillCardStatusField {
    readonly code: StatusSkillCardStatusFieldCodeField;
    readonly message?: string;
}
export function deserializeStatusSkillCardStatusField(val: any): StatusSkillCardStatusField {
    const code: StatusSkillCardStatusFieldCodeField = deserializeStatusSkillCardStatusFieldCodeField(val.code);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    return { code: code, message: message } satisfies StatusSkillCardStatusField;
}
export function serializeStatusSkillCardStatusField(val: StatusSkillCardStatusField): Json {
    return { ["code"]: serializeStatusSkillCardStatusFieldCodeField(val.code), ["message"]: val.message };
}
export type StatusSkillCardSkillFieldTypeField = "service";
export function deserializeStatusSkillCardSkillFieldTypeField(val: any): StatusSkillCardSkillFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StatusSkillCardSkillFieldTypeField\"";
    }
    if (val == "service") {
        return "service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeStatusSkillCardSkillFieldTypeField(val: StatusSkillCardSkillFieldTypeField): Json {
    return val;
}
export interface StatusSkillCardSkillField {
    readonly type: StatusSkillCardSkillFieldTypeField;
    readonly id: string;
}
export function deserializeStatusSkillCardSkillField(val: any): StatusSkillCardSkillField {
    const type: StatusSkillCardSkillFieldTypeField = deserializeStatusSkillCardSkillFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies StatusSkillCardSkillField;
}
export function serializeStatusSkillCardSkillField(val: StatusSkillCardSkillField): Json {
    return { ["type"]: serializeStatusSkillCardSkillFieldTypeField(val.type), ["id"]: val.id };
}
export type StatusSkillCardInvocationFieldTypeField = "skill_invocation";
export function deserializeStatusSkillCardInvocationFieldTypeField(val: any): StatusSkillCardInvocationFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StatusSkillCardInvocationFieldTypeField\"";
    }
    if (val == "skill_invocation") {
        return "skill_invocation";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeStatusSkillCardInvocationFieldTypeField(val: StatusSkillCardInvocationFieldTypeField): Json {
    return val;
}
export interface StatusSkillCardInvocationField {
    readonly type: StatusSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export function deserializeStatusSkillCardInvocationField(val: any): StatusSkillCardInvocationField {
    const type: StatusSkillCardInvocationFieldTypeField = deserializeStatusSkillCardInvocationFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies StatusSkillCardInvocationField;
}
export function serializeStatusSkillCardInvocationField(val: StatusSkillCardInvocationField): Json {
    return { ["type"]: serializeStatusSkillCardInvocationFieldTypeField(val.type), ["id"]: val.id };
}
export interface StatusSkillCard {
    readonly createdAt?: string;
    readonly type: StatusSkillCardTypeField;
    readonly skillCardType: StatusSkillCardSkillCardTypeField;
    readonly skillCardTitle?: StatusSkillCardSkillCardTitleField;
    readonly status: StatusSkillCardStatusField;
    readonly skill: StatusSkillCardSkillField;
    readonly invocation: StatusSkillCardInvocationField;
}
export function deserializeStatusSkillCard(val: any): StatusSkillCard {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const type: StatusSkillCardTypeField = deserializeStatusSkillCardTypeField(val.type);
    const skillCardType: StatusSkillCardSkillCardTypeField = deserializeStatusSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle: undefined | StatusSkillCardSkillCardTitleField = val.skill_card_title == void 0 ? void 0 : deserializeStatusSkillCardSkillCardTitleField(val.skill_card_title);
    const status: StatusSkillCardStatusField = deserializeStatusSkillCardStatusField(val.status);
    const skill: StatusSkillCardSkillField = deserializeStatusSkillCardSkillField(val.skill);
    const invocation: StatusSkillCardInvocationField = deserializeStatusSkillCardInvocationField(val.invocation);
    return { createdAt: createdAt, type: type, skillCardType: skillCardType, skillCardTitle: skillCardTitle, status: status, skill: skill, invocation: invocation } satisfies StatusSkillCard;
}
export function serializeStatusSkillCard(val: StatusSkillCard): Json {
    return { ["created_at"]: val.createdAt, ["type"]: serializeStatusSkillCardTypeField(val.type), ["skill_card_type"]: serializeStatusSkillCardSkillCardTypeField(val.skillCardType), ["skill_card_title"]: val.skillCardTitle == void 0 ? void 0 : serializeStatusSkillCardSkillCardTitleField(val.skillCardTitle), ["status"]: serializeStatusSkillCardStatusField(val.status), ["skill"]: serializeStatusSkillCardSkillField(val.skill), ["invocation"]: serializeStatusSkillCardInvocationField(val.invocation) };
}
export type KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard = KeywordSkillCard | StatusSkillCard | TimelineSkillCard | TranscriptSkillCard;
export function deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val: any): KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard {
    if (!isJson(val, "object")) {
        throw "Expecting an object for \"KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard\"";
    }
    if (val.skill_card_type == "keyword") {
        return deserializeKeywordSkillCard(val);
    }
    if (val.skill_card_type == "status") {
        return deserializeStatusSkillCard(val);
    }
    if (val.skill_card_type == "timeline") {
        return deserializeTimelineSkillCard(val);
    }
    if (val.skill_card_type == "transcript") {
        return deserializeTranscriptSkillCard(val);
    }
    throw "unknown type";
}
export function serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard): Json {
    if (val.skillCardType == "keyword") {
        return serializeKeywordSkillCard(val);
    }
    if (val.skillCardType == "status") {
        return serializeStatusSkillCard(val);
    }
    if (val.skillCardType == "timeline") {
        return serializeTimelineSkillCard(val);
    }
    if (val.skillCardType == "transcript") {
        return serializeTranscriptSkillCard(val);
    }
    throw "unknown type";
}
export interface SkillCardsMetadata {
    readonly canEdit?: boolean;
    readonly id?: string;
    readonly parent?: string;
    readonly scope?: string;
    readonly template?: string;
    readonly type?: string;
    readonly typeVersion?: number;
    readonly version?: number;
    readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export function deserializeSkillCardsMetadata(val: any): SkillCardsMetadata {
    const canEdit: undefined | boolean = isJson(val.$canEdit, "boolean") ? val.$canEdit : void 0;
    const id: undefined | string = isJson(val.$id, "string") ? val.$id : void 0;
    const parent: undefined | string = isJson(val.$parent, "string") ? val.$parent : void 0;
    const scope: undefined | string = isJson(val.$scope, "string") ? val.$scope : void 0;
    const template: undefined | string = isJson(val.$template, "string") ? val.$template : void 0;
    const type: undefined | string = isJson(val.$type, "string") ? val.$type : void 0;
    const typeVersion: undefined | number = isJson(val.$typeVersion, "number") ? val.$typeVersion : void 0;
    const version: undefined | number = isJson(val.$version, "number") ? val.$version : void 0;
    const cards: undefined | readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[] = isJson(val.cards, "array") ? val.cards.map(function (itm: Json): any {
        return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(itm);
    }) as readonly any[] : void 0;
    return { canEdit: canEdit, id: id, parent: parent, scope: scope, template: template, type: type, typeVersion: typeVersion, version: version, cards: cards } satisfies SkillCardsMetadata;
}
export function serializeSkillCardsMetadata(val: SkillCardsMetadata): Json {
    return { ["$canEdit"]: val.canEdit, ["$id"]: val.id, ["$parent"]: val.parent, ["$scope"]: val.scope, ["$template"]: val.template, ["$type"]: val.type, ["$typeVersion"]: val.typeVersion, ["$version"]: val.version, ["cards"]: val.cards == void 0 ? void 0 : val.cards.map(function (item: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard): any {
            return serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(item);
        }) as readonly any[] };
}
export type SignRequestCreateSignerRoleField = "signer" | "approver" | "final_copy_reader";
export function deserializeSignRequestCreateSignerRoleField(val: any): SignRequestCreateSignerRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestCreateSignerRoleField\"";
    }
    if (val == "signer") {
        return "signer";
    }
    if (val == "approver") {
        return "approver";
    }
    if (val == "final_copy_reader") {
        return "final_copy_reader";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSignRequestCreateSignerRoleField(val: SignRequestCreateSignerRoleField): Json {
    return val;
}
export interface SignRequestCreateSigner {
    readonly email: string;
    readonly role?: SignRequestCreateSignerRoleField;
    readonly isInPerson?: boolean;
    readonly order?: number;
    readonly embedUrlExternalUserId?: string;
    readonly redirectUrl?: string;
    readonly declinedRedirectUrl?: string;
    readonly loginRequired?: boolean;
    readonly verificationPhoneNumber?: string;
    readonly password?: string;
}
export function deserializeSignRequestCreateSigner(val: any): SignRequestCreateSigner {
    const email: string = val.email;
    const role: undefined | SignRequestCreateSignerRoleField = val.role == void 0 ? void 0 : deserializeSignRequestCreateSignerRoleField(val.role);
    const isInPerson: undefined | boolean = isJson(val.is_in_person, "boolean") ? val.is_in_person : void 0;
    const order: undefined | number = isJson(val.order, "number") ? val.order : void 0;
    const embedUrlExternalUserId: undefined | string = isJson(val.embed_url_external_user_id, "string") ? val.embed_url_external_user_id : void 0;
    const redirectUrl: undefined | string = isJson(val.redirect_url, "string") ? val.redirect_url : void 0;
    const declinedRedirectUrl: undefined | string = isJson(val.declined_redirect_url, "string") ? val.declined_redirect_url : void 0;
    const loginRequired: undefined | boolean = isJson(val.login_required, "boolean") ? val.login_required : void 0;
    const verificationPhoneNumber: undefined | string = isJson(val.verification_phone_number, "string") ? val.verification_phone_number : void 0;
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    return { email: email, role: role, isInPerson: isInPerson, order: order, embedUrlExternalUserId: embedUrlExternalUserId, redirectUrl: redirectUrl, declinedRedirectUrl: declinedRedirectUrl, loginRequired: loginRequired, verificationPhoneNumber: verificationPhoneNumber, password: password } satisfies SignRequestCreateSigner;
}
export function serializeSignRequestCreateSigner(val: SignRequestCreateSigner): Json {
    return { ["email"]: val.email, ["role"]: val.role == void 0 ? void 0 : serializeSignRequestCreateSignerRoleField(val.role), ["is_in_person"]: val.isInPerson, ["order"]: val.order, ["embed_url_external_user_id"]: val.embedUrlExternalUserId, ["redirect_url"]: val.redirectUrl, ["declined_redirect_url"]: val.declinedRedirectUrl, ["login_required"]: val.loginRequired, ["verification_phone_number"]: val.verificationPhoneNumber, ["password"]: val.password };
}
export interface SignRequestPrefillTag {
    readonly documentTagId?: string;
    readonly textValue?: string;
    readonly checkboxValue?: boolean;
    readonly dateValue?: string;
}
export function deserializeSignRequestPrefillTag(val: any): SignRequestPrefillTag {
    const documentTagId: undefined | string = isJson(val.document_tag_id, "string") ? val.document_tag_id : void 0;
    const textValue: undefined | string = isJson(val.text_value, "string") ? val.text_value : void 0;
    const checkboxValue: undefined | boolean = isJson(val.checkbox_value, "boolean") ? val.checkbox_value : void 0;
    const dateValue: undefined | string = isJson(val.date_value, "string") ? val.date_value : void 0;
    return { documentTagId: documentTagId, textValue: textValue, checkboxValue: checkboxValue, dateValue: dateValue } satisfies SignRequestPrefillTag;
}
export function serializeSignRequestPrefillTag(val: SignRequestPrefillTag): Json {
    return { ["document_tag_id"]: val.documentTagId, ["text_value"]: val.textValue, ["checkbox_value"]: val.checkboxValue, ["date_value"]: val.dateValue };
}
export interface SignRequestBase {
    readonly isDocumentPreparationNeeded?: boolean;
    readonly redirectUrl?: string;
    readonly declinedRedirectUrl?: string;
    readonly areTextSignaturesEnabled?: boolean;
    readonly emailSubject?: string;
    readonly emailMessage?: string;
    readonly areRemindersEnabled?: boolean;
    readonly parentFolder: FolderMini;
    readonly name?: string;
    readonly prefillTags?: readonly SignRequestPrefillTag[];
    readonly daysValid?: number;
    readonly externalId?: string;
    readonly isPhoneVerificationRequiredToView?: boolean;
    readonly templateId?: string;
}
export function deserializeSignRequestBase(val: any): SignRequestBase {
    const isDocumentPreparationNeeded: undefined | boolean = isJson(val.is_document_preparation_needed, "boolean") ? val.is_document_preparation_needed : void 0;
    const redirectUrl: undefined | string = isJson(val.redirect_url, "string") ? val.redirect_url : void 0;
    const declinedRedirectUrl: undefined | string = isJson(val.declined_redirect_url, "string") ? val.declined_redirect_url : void 0;
    const areTextSignaturesEnabled: undefined | boolean = isJson(val.are_text_signatures_enabled, "boolean") ? val.are_text_signatures_enabled : void 0;
    const emailSubject: undefined | string = isJson(val.email_subject, "string") ? val.email_subject : void 0;
    const emailMessage: undefined | string = isJson(val.email_message, "string") ? val.email_message : void 0;
    const areRemindersEnabled: undefined | boolean = isJson(val.are_reminders_enabled, "boolean") ? val.are_reminders_enabled : void 0;
    const parentFolder: FolderMini = deserializeFolderMini(val.parent_folder);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const prefillTags: undefined | readonly SignRequestPrefillTag[] = isJson(val.prefill_tags, "array") ? val.prefill_tags.map(function (itm: Json): any {
        return deserializeSignRequestPrefillTag(itm);
    }) as readonly any[] : void 0;
    const daysValid: undefined | number = isJson(val.days_valid, "number") ? val.days_valid : void 0;
    const externalId: undefined | string = isJson(val.external_id, "string") ? val.external_id : void 0;
    const isPhoneVerificationRequiredToView: undefined | boolean = isJson(val.is_phone_verification_required_to_view, "boolean") ? val.is_phone_verification_required_to_view : void 0;
    const templateId: undefined | string = isJson(val.template_id, "string") ? val.template_id : void 0;
    return { isDocumentPreparationNeeded: isDocumentPreparationNeeded, redirectUrl: redirectUrl, declinedRedirectUrl: declinedRedirectUrl, areTextSignaturesEnabled: areTextSignaturesEnabled, emailSubject: emailSubject, emailMessage: emailMessage, areRemindersEnabled: areRemindersEnabled, parentFolder: parentFolder, name: name, prefillTags: prefillTags, daysValid: daysValid, externalId: externalId, isPhoneVerificationRequiredToView: isPhoneVerificationRequiredToView, templateId: templateId } satisfies SignRequestBase;
}
export function serializeSignRequestBase(val: SignRequestBase): Json {
    return { ["is_document_preparation_needed"]: val.isDocumentPreparationNeeded, ["redirect_url"]: val.redirectUrl, ["declined_redirect_url"]: val.declinedRedirectUrl, ["are_text_signatures_enabled"]: val.areTextSignaturesEnabled, ["email_subject"]: val.emailSubject, ["email_message"]: val.emailMessage, ["are_reminders_enabled"]: val.areRemindersEnabled, ["parent_folder"]: serializeFolderMini(val.parentFolder), ["name"]: val.name, ["prefill_tags"]: val.prefillTags == void 0 ? void 0 : val.prefillTags.map(function (item: SignRequestPrefillTag): any {
            return serializeSignRequestPrefillTag(item);
        }) as readonly any[], ["days_valid"]: val.daysValid, ["external_id"]: val.externalId, ["is_phone_verification_required_to_view"]: val.isPhoneVerificationRequiredToView, ["template_id"]: val.templateId };
}
export type SignRequestCreateRequest = SignRequestBase & {
    /**
     * List of files to create a signing document from. This is currently limited to ten files. Only the ID and type fields are required for each file. */
    readonly sourceFiles?: readonly FileBase[];
    /**
     * Array of signers for the sign request. 35 is the
     * max number of signers permitted. */
    readonly signers: readonly SignRequestCreateSigner[];
};
export function deserializeSignRequestCreateRequest(val: any): SignRequestCreateRequest {
    const sourceFiles: undefined | readonly FileBase[] = isJson(val.source_files, "array") ? val.source_files.map(function (itm: Json): any {
        return deserializeFileBase(itm);
    }) as readonly any[] : void 0;
    const signers: readonly SignRequestCreateSigner[] = val.signers.map(function (itm: Json): any {
        return deserializeSignRequestCreateSigner(itm);
    }) as readonly any[];
    const isDocumentPreparationNeeded: undefined | boolean = isJson(val.is_document_preparation_needed, "boolean") ? val.is_document_preparation_needed : void 0;
    const redirectUrl: undefined | string = isJson(val.redirect_url, "string") ? val.redirect_url : void 0;
    const declinedRedirectUrl: undefined | string = isJson(val.declined_redirect_url, "string") ? val.declined_redirect_url : void 0;
    const areTextSignaturesEnabled: undefined | boolean = isJson(val.are_text_signatures_enabled, "boolean") ? val.are_text_signatures_enabled : void 0;
    const emailSubject: undefined | string = isJson(val.email_subject, "string") ? val.email_subject : void 0;
    const emailMessage: undefined | string = isJson(val.email_message, "string") ? val.email_message : void 0;
    const areRemindersEnabled: undefined | boolean = isJson(val.are_reminders_enabled, "boolean") ? val.are_reminders_enabled : void 0;
    const parentFolder: FolderMini = deserializeFolderMini(val.parent_folder);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const prefillTags: undefined | readonly SignRequestPrefillTag[] = isJson(val.prefill_tags, "array") ? val.prefill_tags.map(function (itm: Json): any {
        return deserializeSignRequestPrefillTag(itm);
    }) as readonly any[] : void 0;
    const daysValid: undefined | number = isJson(val.days_valid, "number") ? val.days_valid : void 0;
    const externalId: undefined | string = isJson(val.external_id, "string") ? val.external_id : void 0;
    const isPhoneVerificationRequiredToView: undefined | boolean = isJson(val.is_phone_verification_required_to_view, "boolean") ? val.is_phone_verification_required_to_view : void 0;
    const templateId: undefined | string = isJson(val.template_id, "string") ? val.template_id : void 0;
    return { sourceFiles: sourceFiles, signers: signers, isDocumentPreparationNeeded: isDocumentPreparationNeeded, redirectUrl: redirectUrl, declinedRedirectUrl: declinedRedirectUrl, areTextSignaturesEnabled: areTextSignaturesEnabled, emailSubject: emailSubject, emailMessage: emailMessage, areRemindersEnabled: areRemindersEnabled, parentFolder: parentFolder, name: name, prefillTags: prefillTags, daysValid: daysValid, externalId: externalId, isPhoneVerificationRequiredToView: isPhoneVerificationRequiredToView, templateId: templateId } satisfies SignRequestCreateRequest;
}
export function serializeSignRequestCreateRequest(val: SignRequestCreateRequest): Json {
    const base: any = serializeSignRequestBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"SignRequestCreateRequest\"";
    }
    return { ...base, ...{ ["source_files"]: val.sourceFiles == void 0 ? void 0 : val.sourceFiles.map(function (item: FileBase): any {
                return serializeFileBase(item);
            }) as readonly any[], ["signers"]: val.signers.map(function (item: SignRequestCreateSigner): any {
                return serializeSignRequestCreateSigner(item);
            }) as readonly any[] } };
}
export type TemplateSignerInput = SignRequestPrefillTag & {
    /**
     * Type of input */
    readonly type?: TemplateSignerInputTypeField;
    /**
     * Content type of input */
    readonly contentType?: TemplateSignerInputContentTypeField;
    /**
     * Whether or not the input is required. */
    readonly isRequired?: boolean;
    /**
     * Index of page that the input is on. */
    readonly pageIndex: number;
    /**
     * Document identifier. */
    readonly documentId?: string;
    /**
     * When the input is of the type `dropdown` this values will be filled with all the dropdown options. */
    readonly dropdownChoices?: readonly string[];
    /**
     * When the input is of type `radio` they can be grouped to gather with this identifier. */
    readonly groupId?: string;
    /**
     * Where the input is located on a page. */
    readonly coordinates?: TemplateSignerInputCoordinatesField;
    /**
     * The size of the input. */
    readonly dimensions?: TemplateSignerInputDimensionsField;
};
export function deserializeTemplateSignerInput(val: any): TemplateSignerInput {
    const type: undefined | TemplateSignerInputTypeField = val.type == void 0 ? void 0 : deserializeTemplateSignerInputTypeField(val.type);
    const contentType: undefined | TemplateSignerInputContentTypeField = val.content_type == void 0 ? void 0 : deserializeTemplateSignerInputContentTypeField(val.content_type);
    const isRequired: undefined | boolean = isJson(val.is_required, "boolean") ? val.is_required : void 0;
    const pageIndex: number = val.page_index;
    const documentId: undefined | string = isJson(val.document_id, "string") ? val.document_id : void 0;
    const dropdownChoices: undefined | readonly string[] = isJson(val.dropdown_choices, "array") ? val.dropdown_choices.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    const groupId: undefined | string = isJson(val.group_id, "string") ? val.group_id : void 0;
    const coordinates: undefined | TemplateSignerInputCoordinatesField = val.coordinates == void 0 ? void 0 : deserializeTemplateSignerInputCoordinatesField(val.coordinates);
    const dimensions: undefined | TemplateSignerInputDimensionsField = val.dimensions == void 0 ? void 0 : deserializeTemplateSignerInputDimensionsField(val.dimensions);
    const documentTagId: undefined | string = isJson(val.document_tag_id, "string") ? val.document_tag_id : void 0;
    const textValue: undefined | string = isJson(val.text_value, "string") ? val.text_value : void 0;
    const checkboxValue: undefined | boolean = isJson(val.checkbox_value, "boolean") ? val.checkbox_value : void 0;
    const dateValue: undefined | string = isJson(val.date_value, "string") ? val.date_value : void 0;
    return { type: type, contentType: contentType, isRequired: isRequired, pageIndex: pageIndex, documentId: documentId, dropdownChoices: dropdownChoices, groupId: groupId, coordinates: coordinates, dimensions: dimensions, documentTagId: documentTagId, textValue: textValue, checkboxValue: checkboxValue, dateValue: dateValue } satisfies TemplateSignerInput;
}
export function serializeTemplateSignerInput(val: TemplateSignerInput): Json {
    const base: any = serializeSignRequestPrefillTag(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"TemplateSignerInput\"";
    }
    return { ...base, ...{ ["type"]: val.type == void 0 ? void 0 : serializeTemplateSignerInputTypeField(val.type), ["content_type"]: val.contentType == void 0 ? void 0 : serializeTemplateSignerInputContentTypeField(val.contentType), ["is_required"]: val.isRequired, ["page_index"]: val.pageIndex, ["document_id"]: val.documentId, ["dropdown_choices"]: val.dropdownChoices == void 0 ? void 0 : val.dropdownChoices.map(function (item: string): undefined {
                return void 0;
            }) as readonly any[], ["group_id"]: val.groupId, ["coordinates"]: val.coordinates == void 0 ? void 0 : serializeTemplateSignerInputCoordinatesField(val.coordinates), ["dimensions"]: val.dimensions == void 0 ? void 0 : serializeTemplateSignerInputDimensionsField(val.dimensions) } };
}
export interface TemplateSigner {
    readonly inputs?: readonly TemplateSignerInput[];
    readonly email?: string;
    readonly role?: TemplateSignerRoleField;
    readonly isInPerson?: boolean;
    readonly order?: number;
}
export function deserializeTemplateSigner(val: any): TemplateSigner {
    const inputs: undefined | readonly TemplateSignerInput[] = isJson(val.inputs, "array") ? val.inputs.map(function (itm: Json): any {
        return deserializeTemplateSignerInput(itm);
    }) as readonly any[] : void 0;
    const email: undefined | string = isJson(val.email, "string") ? val.email : void 0;
    const role: undefined | TemplateSignerRoleField = val.role == void 0 ? void 0 : deserializeTemplateSignerRoleField(val.role);
    const isInPerson: undefined | boolean = isJson(val.is_in_person, "boolean") ? val.is_in_person : void 0;
    const order: undefined | number = isJson(val.order, "number") ? val.order : void 0;
    return { inputs: inputs, email: email, role: role, isInPerson: isInPerson, order: order } satisfies TemplateSigner;
}
export function serializeTemplateSigner(val: TemplateSigner): Json {
    return { ["inputs"]: val.inputs == void 0 ? void 0 : val.inputs.map(function (item: TemplateSignerInput): any {
            return serializeTemplateSignerInput(item);
        }) as readonly any[], ["email"]: val.email, ["role"]: val.role == void 0 ? void 0 : serializeTemplateSignerRoleField(val.role), ["is_in_person"]: val.isInPerson, ["order"]: val.order };
}
export interface SignTemplate {
    readonly id?: string;
    readonly name?: string;
    readonly emailSubject?: string;
    readonly emailMessage?: string;
    readonly daysValid?: number;
    readonly parentFolder?: FolderMini;
    readonly sourceFiles?: readonly FileMini[];
    readonly areFieldsLocked?: boolean;
    readonly areOptionsLocked?: boolean;
    readonly areRecipientsLocked?: boolean;
    readonly areEmailSettingsLocked?: boolean;
    readonly areFilesLocked?: boolean;
    readonly signers?: readonly TemplateSigner[];
    readonly additionalInfo?: SignTemplateAdditionalInfoField;
    readonly readySignLink?: SignTemplateReadySignLinkField;
    readonly customBranding?: SignTemplateCustomBrandingField;
}
export function deserializeSignTemplate(val: any): SignTemplate {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const emailSubject: undefined | string = isJson(val.email_subject, "string") ? val.email_subject : void 0;
    const emailMessage: undefined | string = isJson(val.email_message, "string") ? val.email_message : void 0;
    const daysValid: undefined | number = isJson(val.days_valid, "number") ? val.days_valid : void 0;
    const parentFolder: undefined | FolderMini = val.parent_folder == void 0 ? void 0 : deserializeFolderMini(val.parent_folder);
    const sourceFiles: undefined | readonly FileMini[] = isJson(val.source_files, "array") ? val.source_files.map(function (itm: Json): any {
        return deserializeFileMini(itm);
    }) as readonly any[] : void 0;
    const areFieldsLocked: undefined | boolean = isJson(val.are_fields_locked, "boolean") ? val.are_fields_locked : void 0;
    const areOptionsLocked: undefined | boolean = isJson(val.are_options_locked, "boolean") ? val.are_options_locked : void 0;
    const areRecipientsLocked: undefined | boolean = isJson(val.are_recipients_locked, "boolean") ? val.are_recipients_locked : void 0;
    const areEmailSettingsLocked: undefined | boolean = isJson(val.are_email_settings_locked, "boolean") ? val.are_email_settings_locked : void 0;
    const areFilesLocked: undefined | boolean = isJson(val.are_files_locked, "boolean") ? val.are_files_locked : void 0;
    const signers: undefined | readonly TemplateSigner[] = isJson(val.signers, "array") ? val.signers.map(function (itm: Json): any {
        return deserializeTemplateSigner(itm);
    }) as readonly any[] : void 0;
    const additionalInfo: undefined | SignTemplateAdditionalInfoField = val.additional_info == void 0 ? void 0 : deserializeSignTemplateAdditionalInfoField(val.additional_info);
    const readySignLink: undefined | SignTemplateReadySignLinkField = val.ready_sign_link == void 0 ? void 0 : deserializeSignTemplateReadySignLinkField(val.ready_sign_link);
    const customBranding: undefined | SignTemplateCustomBrandingField = val.custom_branding == void 0 ? void 0 : deserializeSignTemplateCustomBrandingField(val.custom_branding);
    return { id: id, name: name, emailSubject: emailSubject, emailMessage: emailMessage, daysValid: daysValid, parentFolder: parentFolder, sourceFiles: sourceFiles, areFieldsLocked: areFieldsLocked, areOptionsLocked: areOptionsLocked, areRecipientsLocked: areRecipientsLocked, areEmailSettingsLocked: areEmailSettingsLocked, areFilesLocked: areFilesLocked, signers: signers, additionalInfo: additionalInfo, readySignLink: readySignLink, customBranding: customBranding } satisfies SignTemplate;
}
export function serializeSignTemplate(val: SignTemplate): Json {
    return { ["id"]: val.id, ["name"]: val.name, ["email_subject"]: val.emailSubject, ["email_message"]: val.emailMessage, ["days_valid"]: val.daysValid, ["parent_folder"]: val.parentFolder == void 0 ? void 0 : serializeFolderMini(val.parentFolder), ["source_files"]: val.sourceFiles == void 0 ? void 0 : val.sourceFiles.map(function (item: FileMini): any {
            return serializeFileMini(item);
        }) as readonly any[], ["are_fields_locked"]: val.areFieldsLocked, ["are_options_locked"]: val.areOptionsLocked, ["are_recipients_locked"]: val.areRecipientsLocked, ["are_email_settings_locked"]: val.areEmailSettingsLocked, ["are_files_locked"]: val.areFilesLocked, ["signers"]: val.signers == void 0 ? void 0 : val.signers.map(function (item: TemplateSigner): any {
            return serializeTemplateSigner(item);
        }) as readonly any[], ["additional_info"]: val.additionalInfo == void 0 ? void 0 : serializeSignTemplateAdditionalInfoField(val.additionalInfo), ["ready_sign_link"]: val.readySignLink == void 0 ? void 0 : serializeSignTemplateReadySignLinkField(val.readySignLink), ["custom_branding"]: val.customBranding == void 0 ? void 0 : serializeSignTemplateCustomBrandingField(val.customBranding) };
}
export type SignRequestSignerInputTypeField = "signature" | "date" | "text" | "checkbox";
export function deserializeSignRequestSignerInputTypeField(val: any): SignRequestSignerInputTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestSignerInputTypeField\"";
    }
    if (val == "signature") {
        return "signature";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "text") {
        return "text";
    }
    if (val == "checkbox") {
        return "checkbox";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSignRequestSignerInputTypeField(val: SignRequestSignerInputTypeField): Json {
    return val;
}
export type SignRequestSignerInputContentTypeField = "initial" | "stamp" | "signature" | "company" | "title" | "email" | "full_name" | "first_name" | "last_name" | "text" | "date" | "checkbox" | "attachment";
export function deserializeSignRequestSignerInputContentTypeField(val: any): SignRequestSignerInputContentTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestSignerInputContentTypeField\"";
    }
    if (val == "initial") {
        return "initial";
    }
    if (val == "stamp") {
        return "stamp";
    }
    if (val == "signature") {
        return "signature";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "title") {
        return "title";
    }
    if (val == "email") {
        return "email";
    }
    if (val == "full_name") {
        return "full_name";
    }
    if (val == "first_name") {
        return "first_name";
    }
    if (val == "last_name") {
        return "last_name";
    }
    if (val == "text") {
        return "text";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "checkbox") {
        return "checkbox";
    }
    if (val == "attachment") {
        return "attachment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSignRequestSignerInputContentTypeField(val: SignRequestSignerInputContentTypeField): Json {
    return val;
}
export type SignRequestSignerInput = SignRequestPrefillTag & {
    /**
     * Type of input */
    readonly type?: SignRequestSignerInputTypeField;
    /**
     * Content type of input */
    readonly contentType?: SignRequestSignerInputContentTypeField;
    /**
     * Index of page that the input is on */
    readonly pageIndex: number;
};
export function deserializeSignRequestSignerInput(val: any): SignRequestSignerInput {
    const type: undefined | SignRequestSignerInputTypeField = val.type == void 0 ? void 0 : deserializeSignRequestSignerInputTypeField(val.type);
    const contentType: undefined | SignRequestSignerInputContentTypeField = val.content_type == void 0 ? void 0 : deserializeSignRequestSignerInputContentTypeField(val.content_type);
    const pageIndex: number = val.page_index;
    const documentTagId: undefined | string = isJson(val.document_tag_id, "string") ? val.document_tag_id : void 0;
    const textValue: undefined | string = isJson(val.text_value, "string") ? val.text_value : void 0;
    const checkboxValue: undefined | boolean = isJson(val.checkbox_value, "boolean") ? val.checkbox_value : void 0;
    const dateValue: undefined | string = isJson(val.date_value, "string") ? val.date_value : void 0;
    return { type: type, contentType: contentType, pageIndex: pageIndex, documentTagId: documentTagId, textValue: textValue, checkboxValue: checkboxValue, dateValue: dateValue } satisfies SignRequestSignerInput;
}
export function serializeSignRequestSignerInput(val: SignRequestSignerInput): Json {
    const base: any = serializeSignRequestPrefillTag(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"SignRequestSignerInput\"";
    }
    return { ...base, ...{ ["type"]: val.type == void 0 ? void 0 : serializeSignRequestSignerInputTypeField(val.type), ["content_type"]: val.contentType == void 0 ? void 0 : serializeSignRequestSignerInputContentTypeField(val.contentType), ["page_index"]: val.pageIndex } };
}
export type SignRequestSignerSignerDecisionFieldTypeField = "signed" | "declined";
export function deserializeSignRequestSignerSignerDecisionFieldTypeField(val: any): SignRequestSignerSignerDecisionFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestSignerSignerDecisionFieldTypeField\"";
    }
    if (val == "signed") {
        return "signed";
    }
    if (val == "declined") {
        return "declined";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeSignRequestSignerSignerDecisionFieldTypeField(val: SignRequestSignerSignerDecisionFieldTypeField): Json {
    return val;
}
export interface SignRequestSignerSignerDecisionField {
    readonly type?: SignRequestSignerSignerDecisionFieldTypeField;
    readonly finalizedAt?: string;
}
export function deserializeSignRequestSignerSignerDecisionField(val: any): SignRequestSignerSignerDecisionField {
    const type: undefined | SignRequestSignerSignerDecisionFieldTypeField = val.type == void 0 ? void 0 : deserializeSignRequestSignerSignerDecisionFieldTypeField(val.type);
    const finalizedAt: undefined | string = isJson(val.finalized_at, "string") ? val.finalized_at : void 0;
    return { type: type, finalizedAt: finalizedAt } satisfies SignRequestSignerSignerDecisionField;
}
export function serializeSignRequestSignerSignerDecisionField(val: SignRequestSignerSignerDecisionField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeSignRequestSignerSignerDecisionFieldTypeField(val.type), ["finalized_at"]: val.finalizedAt };
}
export type SignRequestSigner = SignRequestCreateSigner & {
    /**
     * Set to `true` if the signer views the document */
    readonly hasViewedDocument?: boolean;
    /**
     * Final decision made by the signer */
    readonly signerDecision?: SignRequestSignerSignerDecisionField;
    readonly inputs?: readonly SignRequestSignerInput[];
    /**
     * URL to direct a signer to for signing */
    readonly embedUrl?: string;
};
export function deserializeSignRequestSigner(val: any): SignRequestSigner {
    const hasViewedDocument: undefined | boolean = isJson(val.has_viewed_document, "boolean") ? val.has_viewed_document : void 0;
    const signerDecision: undefined | SignRequestSignerSignerDecisionField = val.signer_decision == void 0 ? void 0 : deserializeSignRequestSignerSignerDecisionField(val.signer_decision);
    const inputs: undefined | readonly SignRequestSignerInput[] = isJson(val.inputs, "array") ? val.inputs.map(function (itm: Json): any {
        return deserializeSignRequestSignerInput(itm);
    }) as readonly any[] : void 0;
    const embedUrl: undefined | string = isJson(val.embed_url, "string") ? val.embed_url : void 0;
    const email: string = val.email;
    const role: undefined | SignRequestCreateSignerRoleField = val.role == void 0 ? void 0 : deserializeSignRequestCreateSignerRoleField(val.role);
    const isInPerson: undefined | boolean = isJson(val.is_in_person, "boolean") ? val.is_in_person : void 0;
    const order: undefined | number = isJson(val.order, "number") ? val.order : void 0;
    const embedUrlExternalUserId: undefined | string = isJson(val.embed_url_external_user_id, "string") ? val.embed_url_external_user_id : void 0;
    const redirectUrl: undefined | string = isJson(val.redirect_url, "string") ? val.redirect_url : void 0;
    const declinedRedirectUrl: undefined | string = isJson(val.declined_redirect_url, "string") ? val.declined_redirect_url : void 0;
    const loginRequired: undefined | boolean = isJson(val.login_required, "boolean") ? val.login_required : void 0;
    const verificationPhoneNumber: undefined | string = isJson(val.verification_phone_number, "string") ? val.verification_phone_number : void 0;
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    return { hasViewedDocument: hasViewedDocument, signerDecision: signerDecision, inputs: inputs, embedUrl: embedUrl, email: email, role: role, isInPerson: isInPerson, order: order, embedUrlExternalUserId: embedUrlExternalUserId, redirectUrl: redirectUrl, declinedRedirectUrl: declinedRedirectUrl, loginRequired: loginRequired, verificationPhoneNumber: verificationPhoneNumber, password: password } satisfies SignRequestSigner;
}
export function serializeSignRequestSigner(val: SignRequestSigner): Json {
    const base: any = serializeSignRequestCreateSigner(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"SignRequestSigner\"";
    }
    return { ...base, ...{ ["has_viewed_document"]: val.hasViewedDocument, ["signer_decision"]: val.signerDecision == void 0 ? void 0 : serializeSignRequestSignerSignerDecisionField(val.signerDecision), ["inputs"]: val.inputs == void 0 ? void 0 : val.inputs.map(function (item: SignRequestSignerInput): any {
                return serializeSignRequestSignerInput(item);
            }) as readonly any[], ["embed_url"]: val.embedUrl } };
}
export type SignRequest = SignRequestBase & {
    /**
     * object type */
    readonly type?: SignRequestTypeField;
    /**
     * List of files to create a signing document from. This is currently limited to ten files. Only the ID and type fields are required for each file. */
    readonly sourceFiles?: readonly FileBase[];
    /**
     * Array of signers for the sign request */
    readonly signers?: readonly SignRequestSigner[];
    /**
     * Force a specific color for the signature (blue, black, or red). */
    readonly signatureColor?: string;
    /**
     * Sign request ID */
    readonly id?: string;
    /**
     * This URL is returned if `is_document_preparation_needed` is
     * set to `true` in the request. It is used to prepare the sign request
     * via UI. The sign request is not sent until preparation is complete. */
    readonly prepareUrl?: string;
    readonly signingLog?: FileMini;
    /**
     * Describes the status of the sign request */
    readonly status?: SignRequestStatusField;
    /**
     * List of files that will be signed, which are copies of the original
     * source files. A new version of these files are created as signers sign
     * and can be downloaded at any point in the signing process. */
    readonly signFiles?: SignRequestSignFilesField;
    /**
     * Uses `days_valid` to calculate the date and time, in GMT, the sign request will expire if unsigned. */
    readonly autoExpireAt?: string;
};
export function deserializeSignRequest(val: any): SignRequest {
    const type: undefined | SignRequestTypeField = val.type == void 0 ? void 0 : deserializeSignRequestTypeField(val.type);
    const sourceFiles: undefined | readonly FileBase[] = isJson(val.source_files, "array") ? val.source_files.map(function (itm: Json): any {
        return deserializeFileBase(itm);
    }) as readonly any[] : void 0;
    const signers: undefined | readonly SignRequestSigner[] = isJson(val.signers, "array") ? val.signers.map(function (itm: Json): any {
        return deserializeSignRequestSigner(itm);
    }) as readonly any[] : void 0;
    const signatureColor: undefined | string = isJson(val.signature_color, "string") ? val.signature_color : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const prepareUrl: undefined | string = isJson(val.prepare_url, "string") ? val.prepare_url : void 0;
    const signingLog: undefined | FileMini = val.signing_log == void 0 ? void 0 : deserializeFileMini(val.signing_log);
    const status: undefined | SignRequestStatusField = val.status == void 0 ? void 0 : deserializeSignRequestStatusField(val.status);
    const signFiles: undefined | SignRequestSignFilesField = val.sign_files == void 0 ? void 0 : deserializeSignRequestSignFilesField(val.sign_files);
    const autoExpireAt: undefined | string = isJson(val.auto_expire_at, "string") ? val.auto_expire_at : void 0;
    const isDocumentPreparationNeeded: undefined | boolean = isJson(val.is_document_preparation_needed, "boolean") ? val.is_document_preparation_needed : void 0;
    const redirectUrl: undefined | string = isJson(val.redirect_url, "string") ? val.redirect_url : void 0;
    const declinedRedirectUrl: undefined | string = isJson(val.declined_redirect_url, "string") ? val.declined_redirect_url : void 0;
    const areTextSignaturesEnabled: undefined | boolean = isJson(val.are_text_signatures_enabled, "boolean") ? val.are_text_signatures_enabled : void 0;
    const emailSubject: undefined | string = isJson(val.email_subject, "string") ? val.email_subject : void 0;
    const emailMessage: undefined | string = isJson(val.email_message, "string") ? val.email_message : void 0;
    const areRemindersEnabled: undefined | boolean = isJson(val.are_reminders_enabled, "boolean") ? val.are_reminders_enabled : void 0;
    const parentFolder: FolderMini = deserializeFolderMini(val.parent_folder);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const prefillTags: undefined | readonly SignRequestPrefillTag[] = isJson(val.prefill_tags, "array") ? val.prefill_tags.map(function (itm: Json): any {
        return deserializeSignRequestPrefillTag(itm);
    }) as readonly any[] : void 0;
    const daysValid: undefined | number = isJson(val.days_valid, "number") ? val.days_valid : void 0;
    const externalId: undefined | string = isJson(val.external_id, "string") ? val.external_id : void 0;
    const isPhoneVerificationRequiredToView: undefined | boolean = isJson(val.is_phone_verification_required_to_view, "boolean") ? val.is_phone_verification_required_to_view : void 0;
    const templateId: undefined | string = isJson(val.template_id, "string") ? val.template_id : void 0;
    return { type: type, sourceFiles: sourceFiles, signers: signers, signatureColor: signatureColor, id: id, prepareUrl: prepareUrl, signingLog: signingLog, status: status, signFiles: signFiles, autoExpireAt: autoExpireAt, isDocumentPreparationNeeded: isDocumentPreparationNeeded, redirectUrl: redirectUrl, declinedRedirectUrl: declinedRedirectUrl, areTextSignaturesEnabled: areTextSignaturesEnabled, emailSubject: emailSubject, emailMessage: emailMessage, areRemindersEnabled: areRemindersEnabled, parentFolder: parentFolder, name: name, prefillTags: prefillTags, daysValid: daysValid, externalId: externalId, isPhoneVerificationRequiredToView: isPhoneVerificationRequiredToView, templateId: templateId } satisfies SignRequest;
}
export function serializeSignRequest(val: SignRequest): Json {
    const base: any = serializeSignRequestBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"SignRequest\"";
    }
    return { ...base, ...{ ["type"]: val.type == void 0 ? void 0 : serializeSignRequestTypeField(val.type), ["source_files"]: val.sourceFiles == void 0 ? void 0 : val.sourceFiles.map(function (item: FileBase): any {
                return serializeFileBase(item);
            }) as readonly any[], ["signers"]: val.signers == void 0 ? void 0 : val.signers.map(function (item: SignRequestSigner): any {
                return serializeSignRequestSigner(item);
            }) as readonly any[], ["signature_color"]: val.signatureColor, ["id"]: val.id, ["prepare_url"]: val.prepareUrl, ["signing_log"]: val.signingLog == void 0 ? void 0 : serializeFileMini(val.signingLog), ["status"]: val.status == void 0 ? void 0 : serializeSignRequestStatusField(val.status), ["sign_files"]: val.signFiles == void 0 ? void 0 : serializeSignRequestSignFilesField(val.signFiles), ["auto_expire_at"]: val.autoExpireAt } };
}
export interface SignRequests {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly SignRequest[];
}
export function deserializeSignRequests(val: any): SignRequests {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly SignRequest[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return deserializeSignRequest(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies SignRequests;
}
export function serializeSignRequests(val: SignRequests): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: SignRequest): any {
            return serializeSignRequest(item);
        }) as readonly any[] };
}
export interface ShieldInformationBarrierReportDetailsDetailsField {
    readonly folderId?: string;
}
export function deserializeShieldInformationBarrierReportDetailsDetailsField(val: any): ShieldInformationBarrierReportDetailsDetailsField {
    const folderId: undefined | string = isJson(val.folder_id, "string") ? val.folder_id : void 0;
    return { folderId: folderId } satisfies ShieldInformationBarrierReportDetailsDetailsField;
}
export function serializeShieldInformationBarrierReportDetailsDetailsField(val: ShieldInformationBarrierReportDetailsDetailsField): Json {
    return { ["folder_id"]: val.folderId };
}
export interface ShieldInformationBarrierReportDetails {
    readonly details?: ShieldInformationBarrierReportDetailsDetailsField;
}
export function deserializeShieldInformationBarrierReportDetails(val: any): ShieldInformationBarrierReportDetails {
    const details: undefined | ShieldInformationBarrierReportDetailsDetailsField = val.details == void 0 ? void 0 : deserializeShieldInformationBarrierReportDetailsDetailsField(val.details);
    return { details: details } satisfies ShieldInformationBarrierReportDetails;
}
export function serializeShieldInformationBarrierReportDetails(val: ShieldInformationBarrierReportDetails): Json {
    return { ["details"]: val.details == void 0 ? void 0 : serializeShieldInformationBarrierReportDetailsDetailsField(val.details) };
}
export type TrackingCodeTypeField = "tracking_code";
export function deserializeTrackingCodeTypeField(val: any): TrackingCodeTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrackingCodeTypeField\"";
    }
    if (val == "tracking_code") {
        return "tracking_code";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeTrackingCodeTypeField(val: TrackingCodeTypeField): Json {
    return val;
}
export interface TrackingCode {
    readonly type?: TrackingCodeTypeField;
    readonly name?: string;
    readonly value?: string;
}
export function deserializeTrackingCode(val: any): TrackingCode {
    const type: undefined | TrackingCodeTypeField = val.type == void 0 ? void 0 : deserializeTrackingCodeTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const value: undefined | string = isJson(val.value, "string") ? val.value : void 0;
    return { type: type, name: name, value: value } satisfies TrackingCode;
}
export function serializeTrackingCode(val: TrackingCode): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeTrackingCodeTypeField(val.type), ["name"]: val.name, ["value"]: val.value };
}
export type UserFull = User & {
    /**
     * The user’s enterprise role */
    readonly role?: UserFullRoleField;
    /**
     * Tracking codes allow an admin to generate reports from the
     * admin console and assign an attribute to a specific group
     * of users. This setting must be enabled for an enterprise
     * before it can be used. */
    readonly trackingCodes?: readonly TrackingCode[];
    /**
     * Whether the user can see other enterprise users in their contact list */
    readonly canSeeManagedUsers?: boolean;
    /**
     * Whether the user can use Box Sync */
    readonly isSyncEnabled?: boolean;
    /**
     * Whether the user is allowed to collaborate with users outside their
     * enterprise */
    readonly isExternalCollabRestricted?: boolean;
    /**
     * Whether to exempt the user from Enterprise device limits */
    readonly isExemptFromDeviceLimits?: boolean;
    /**
     * Whether the user must use two-factor authentication */
    readonly isExemptFromLoginVerification?: boolean;
    readonly enterprise?: UserFullEnterpriseField;
    /**
     * Tags for all files and folders owned by the user. Values returned
     * will only contain tags that were set by the requester. */
    readonly myTags?: readonly string[];
    /**
     * The root (protocol, subdomain, domain) of any links that need to be
     * generated for the user */
    readonly hostname?: string;
    /**
     * Whether the user is an App User */
    readonly isPlatformAccessOnly?: boolean;
    /**
     * An external identifier for an app user, which can be used to look up
     * the user. This can be used to tie user IDs from external identity
     * providers to Box users. */
    readonly externalAppUserId?: string;
};
export function deserializeUserFull(val: any): UserFull {
    const role: undefined | UserFullRoleField = val.role == void 0 ? void 0 : deserializeUserFullRoleField(val.role);
    const trackingCodes: undefined | readonly TrackingCode[] = isJson(val.tracking_codes, "array") ? val.tracking_codes.map(function (itm: Json): any {
        return deserializeTrackingCode(itm);
    }) as readonly any[] : void 0;
    const canSeeManagedUsers: undefined | boolean = isJson(val.can_see_managed_users, "boolean") ? val.can_see_managed_users : void 0;
    const isSyncEnabled: undefined | boolean = isJson(val.is_sync_enabled, "boolean") ? val.is_sync_enabled : void 0;
    const isExternalCollabRestricted: undefined | boolean = isJson(val.is_external_collab_restricted, "boolean") ? val.is_external_collab_restricted : void 0;
    const isExemptFromDeviceLimits: undefined | boolean = isJson(val.is_exempt_from_device_limits, "boolean") ? val.is_exempt_from_device_limits : void 0;
    const isExemptFromLoginVerification: undefined | boolean = isJson(val.is_exempt_from_login_verification, "boolean") ? val.is_exempt_from_login_verification : void 0;
    const enterprise: undefined | UserFullEnterpriseField = val.enterprise == void 0 ? void 0 : deserializeUserFullEnterpriseField(val.enterprise);
    const myTags: undefined | readonly string[] = isJson(val.my_tags, "array") ? val.my_tags.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    const hostname: undefined | string = isJson(val.hostname, "string") ? val.hostname : void 0;
    const isPlatformAccessOnly: undefined | boolean = isJson(val.is_platform_access_only, "boolean") ? val.is_platform_access_only : void 0;
    const externalAppUserId: undefined | string = isJson(val.external_app_user_id, "string") ? val.external_app_user_id : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const language: undefined | string = isJson(val.language, "string") ? val.language : void 0;
    const timezone: undefined | string = isJson(val.timezone, "string") ? val.timezone : void 0;
    const spaceAmount: undefined | number = isJson(val.space_amount, "number") ? val.space_amount : void 0;
    const spaceUsed: undefined | number = isJson(val.space_used, "number") ? val.space_used : void 0;
    const maxUploadSize: undefined | number = isJson(val.max_upload_size, "number") ? val.max_upload_size : void 0;
    const status: undefined | UserStatusField = val.status == void 0 ? void 0 : deserializeUserStatusField(val.status);
    const jobTitle: undefined | string = isJson(val.job_title, "string") ? val.job_title : void 0;
    const phone: undefined | string = isJson(val.phone, "string") ? val.phone : void 0;
    const address: undefined | string = isJson(val.address, "string") ? val.address : void 0;
    const avatarUrl: undefined | string = isJson(val.avatar_url, "string") ? val.avatar_url : void 0;
    const notificationEmail: undefined | UserNotificationEmailField = val.notification_email == void 0 ? void 0 : deserializeUserNotificationEmailField(val.notification_email);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
    return { role: role, trackingCodes: trackingCodes, canSeeManagedUsers: canSeeManagedUsers, isSyncEnabled: isSyncEnabled, isExternalCollabRestricted: isExternalCollabRestricted, isExemptFromDeviceLimits: isExemptFromDeviceLimits, isExemptFromLoginVerification: isExemptFromLoginVerification, enterprise: enterprise, myTags: myTags, hostname: hostname, isPlatformAccessOnly: isPlatformAccessOnly, externalAppUserId: externalAppUserId, createdAt: createdAt, modifiedAt: modifiedAt, language: language, timezone: timezone, spaceAmount: spaceAmount, spaceUsed: spaceUsed, maxUploadSize: maxUploadSize, status: status, jobTitle: jobTitle, phone: phone, address: address, avatarUrl: avatarUrl, notificationEmail: notificationEmail, name: name, login: login, id: id, type: type } satisfies UserFull;
}
export function serializeUserFull(val: UserFull): Json {
    const base: any = serializeUser(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"UserFull\"";
    }
    return { ...base, ...{ ["role"]: val.role == void 0 ? void 0 : serializeUserFullRoleField(val.role), ["tracking_codes"]: val.trackingCodes == void 0 ? void 0 : val.trackingCodes.map(function (item: TrackingCode): any {
                return serializeTrackingCode(item);
            }) as readonly any[], ["can_see_managed_users"]: val.canSeeManagedUsers, ["is_sync_enabled"]: val.isSyncEnabled, ["is_external_collab_restricted"]: val.isExternalCollabRestricted, ["is_exempt_from_device_limits"]: val.isExemptFromDeviceLimits, ["is_exempt_from_login_verification"]: val.isExemptFromLoginVerification, ["enterprise"]: val.enterprise == void 0 ? void 0 : serializeUserFullEnterpriseField(val.enterprise), ["my_tags"]: val.myTags == void 0 ? void 0 : val.myTags.map(function (item: string): undefined {
                return void 0;
            }) as readonly any[], ["hostname"]: val.hostname, ["is_platform_access_only"]: val.isPlatformAccessOnly, ["external_app_user_id"]: val.externalAppUserId } };
}
export type MetadataFilterScopeField = "global" | "enterprise" | "enterprise_{enterprise_id}";
export function deserializeMetadataFilterScopeField(val: any): MetadataFilterScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataFilterScopeField\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    if (val == "enterprise_{enterprise_id}") {
        return "enterprise_{enterprise_id}";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeMetadataFilterScopeField(val: MetadataFilterScopeField): Json {
    return val;
}
export interface MetadataFilterFiltersField {
}
export function deserializeMetadataFilterFiltersField(val: any): MetadataFilterFiltersField {
    return {} satisfies MetadataFilterFiltersField;
}
export function serializeMetadataFilterFiltersField(val: MetadataFilterFiltersField): Json {
    return {};
}
export interface MetadataFilter {
    readonly scope?: MetadataFilterScopeField;
    readonly templateKey?: string;
    readonly filters?: MetadataFilterFiltersField;
}
export function deserializeMetadataFilter(val: any): MetadataFilter {
    const scope: undefined | MetadataFilterScopeField = val.scope == void 0 ? void 0 : deserializeMetadataFilterScopeField(val.scope);
    const templateKey: undefined | string = isJson(val.templateKey, "string") ? val.templateKey : void 0;
    const filters: undefined | MetadataFilterFiltersField = val.filters == void 0 ? void 0 : deserializeMetadataFilterFiltersField(val.filters);
    return { scope: scope, templateKey: templateKey, filters: filters } satisfies MetadataFilter;
}
export function serializeMetadataFilter(val: MetadataFilter): Json {
    return { ["scope"]: val.scope == void 0 ? void 0 : serializeMetadataFilterScopeField(val.scope), ["templateKey"]: val.templateKey, ["filters"]: val.filters == void 0 ? void 0 : serializeMetadataFilterFiltersField(val.filters) };
}
export interface MetadataFieldFilterString {
}
export function deserializeMetadataFieldFilterString(val: any): MetadataFieldFilterString {
    return {} satisfies MetadataFieldFilterString;
}
export function serializeMetadataFieldFilterString(val: MetadataFieldFilterString): Json {
    return {};
}
export interface MetadataFieldFilterFloat {
}
export function deserializeMetadataFieldFilterFloat(val: any): MetadataFieldFilterFloat {
    return {} satisfies MetadataFieldFilterFloat;
}
export function serializeMetadataFieldFilterFloat(val: MetadataFieldFilterFloat): Json {
    return {};
}
export interface MetadataFieldFilterMultiSelect {
}
export function deserializeMetadataFieldFilterMultiSelect(val: any): MetadataFieldFilterMultiSelect {
    return {} satisfies MetadataFieldFilterMultiSelect;
}
export function serializeMetadataFieldFilterMultiSelect(val: MetadataFieldFilterMultiSelect): Json {
    return {};
}
export interface MetadataFieldFilterFloatRange {
}
export function deserializeMetadataFieldFilterFloatRange(val: any): MetadataFieldFilterFloatRange {
    return {} satisfies MetadataFieldFilterFloatRange;
}
export function serializeMetadataFieldFilterFloatRange(val: MetadataFieldFilterFloatRange): Json {
    return {};
}
export interface MetadataFieldFilterDateRange {
}
export function deserializeMetadataFieldFilterDateRange(val: any): MetadataFieldFilterDateRange {
    return {} satisfies MetadataFieldFilterDateRange;
}
export function serializeMetadataFieldFilterDateRange(val: MetadataFieldFilterDateRange): Json {
    return {};
}
