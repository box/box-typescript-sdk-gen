import { FileFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetSharedItemsQueryParamsArg {
    readonly fields?: string;
}
export declare class GetSharedItemsHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetSharedItemsHeadersArg);
}
export interface GetFileGetSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class GetFileGetSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileGetSharedLinkHeadersArg);
}
export type UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFileAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFileAddSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileAddSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class UpdateFileAddSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateFileAddSharedLinkHeadersArg);
}
export type UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFileUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileUpdateSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class UpdateFileUpdateSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateFileUpdateSharedLinkHeadersArg);
}
export interface UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateFileRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileRemoveSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class UpdateFileRemoveSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateFileRemoveSharedLinkHeadersArg);
}
export declare class SharedLinksFilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksFilesManager, "getSharedItems" | "getFileGetSharedLink" | "updateFileAddSharedLink" | "updateFileUpdateSharedLink" | "updateFileRemoveSharedLink">);
    getSharedItems(queryParams: GetSharedItemsQueryParamsArg | undefined, headers: GetSharedItemsHeadersArg): Promise<FileFull>;
    getFileGetSharedLink(fileId: string, queryParams: GetFileGetSharedLinkQueryParamsArg, headers?: GetFileGetSharedLinkHeadersArg): Promise<FileFull>;
    updateFileAddSharedLink(fileId: string, requestBody: UpdateFileAddSharedLinkRequestBodyArg, queryParams: UpdateFileAddSharedLinkQueryParamsArg, headers?: UpdateFileAddSharedLinkHeadersArg): Promise<FileFull>;
    updateFileUpdateSharedLink(fileId: string, requestBody: UpdateFileUpdateSharedLinkRequestBodyArg, queryParams: UpdateFileUpdateSharedLinkQueryParamsArg, headers?: UpdateFileUpdateSharedLinkHeadersArg): Promise<FileFull>;
    updateFileRemoveSharedLink(fileId: string, requestBody: UpdateFileRemoveSharedLinkRequestBodyArg, queryParams: UpdateFileRemoveSharedLinkQueryParamsArg, headers?: UpdateFileRemoveSharedLinkHeadersArg): Promise<FileFull>;
}
export declare function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
export declare function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateFileAddSharedLinkRequestBodyArg(val: UpdateFileAddSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateFileAddSharedLinkRequestBodyArg(val: any): UpdateFileAddSharedLinkRequestBodyArg;
export declare function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
export declare function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateFileUpdateSharedLinkRequestBodyArg(val: UpdateFileUpdateSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateFileUpdateSharedLinkRequestBodyArg(val: any): UpdateFileUpdateSharedLinkRequestBodyArg;
export declare function serializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateFileRemoveSharedLinkRequestBodyArg(val: UpdateFileRemoveSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateFileRemoveSharedLinkRequestBodyArg(val: any): UpdateFileRemoveSharedLinkRequestBodyArg;
