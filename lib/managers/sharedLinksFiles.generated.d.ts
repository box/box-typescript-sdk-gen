import { FileFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetSharedItemsQueryParamsArg {
    readonly fields?: string;
}
export interface GetSharedItemsHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
}
export interface GetFileGetSharedLinkQueryParamsArg {
    readonly fields: string;
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
export interface UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateFileRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileRemoveSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class SharedLinksFilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksFilesManager, "getSharedItems" | "getFileGetSharedLink" | "updateFileAddSharedLink" | "updateFileUpdateSharedLink" | "updateFileRemoveSharedLink">);
    getSharedItems(queryParams: GetSharedItemsQueryParamsArg | undefined, headers: GetSharedItemsHeadersArg): Promise<FileFull>;
    getFileGetSharedLink(fileId: string, queryParams: GetFileGetSharedLinkQueryParamsArg): Promise<FileFull>;
    updateFileAddSharedLink(fileId: string, requestBody: UpdateFileAddSharedLinkRequestBodyArg, queryParams: UpdateFileAddSharedLinkQueryParamsArg): Promise<FileFull>;
    updateFileUpdateSharedLink(fileId: string, requestBody: UpdateFileUpdateSharedLinkRequestBodyArg, queryParams: UpdateFileUpdateSharedLinkQueryParamsArg): Promise<FileFull>;
    updateFileRemoveSharedLink(fileId: string, requestBody: UpdateFileRemoveSharedLinkRequestBodyArg, queryParams: UpdateFileRemoveSharedLinkQueryParamsArg): Promise<FileFull>;
}
export declare function newSerializeGetSharedItemsQueryParamsArg(val: GetSharedItemsQueryParamsArg): Json;
export declare function newDeserializeGetSharedItemsQueryParamsArg(val: any): GetSharedItemsQueryParamsArg;
export declare function newSerializeGetSharedItemsHeadersArg(val: GetSharedItemsHeadersArg): Json;
export declare function newDeserializeGetSharedItemsHeadersArg(val: any): GetSharedItemsHeadersArg;
export declare function newSerializeGetFileGetSharedLinkQueryParamsArg(val: GetFileGetSharedLinkQueryParamsArg): Json;
export declare function newDeserializeGetFileGetSharedLinkQueryParamsArg(val: any): GetFileGetSharedLinkQueryParamsArg;
export declare function newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
export declare function newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
export declare function newSerializeUpdateFileAddSharedLinkRequestBodyArg(val: UpdateFileAddSharedLinkRequestBodyArg): Json;
export declare function newDeserializeUpdateFileAddSharedLinkRequestBodyArg(val: any): UpdateFileAddSharedLinkRequestBodyArg;
export declare function newSerializeUpdateFileAddSharedLinkQueryParamsArg(val: UpdateFileAddSharedLinkQueryParamsArg): Json;
export declare function newDeserializeUpdateFileAddSharedLinkQueryParamsArg(val: any): UpdateFileAddSharedLinkQueryParamsArg;
export declare function newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
export declare function newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
export declare function newSerializeUpdateFileUpdateSharedLinkRequestBodyArg(val: UpdateFileUpdateSharedLinkRequestBodyArg): Json;
export declare function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArg(val: any): UpdateFileUpdateSharedLinkRequestBodyArg;
export declare function newSerializeUpdateFileUpdateSharedLinkQueryParamsArg(val: UpdateFileUpdateSharedLinkQueryParamsArg): Json;
export declare function newDeserializeUpdateFileUpdateSharedLinkQueryParamsArg(val: any): UpdateFileUpdateSharedLinkQueryParamsArg;
export declare function newSerializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function newDeserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
export declare function newSerializeUpdateFileRemoveSharedLinkRequestBodyArg(val: UpdateFileRemoveSharedLinkRequestBodyArg): Json;
export declare function newDeserializeUpdateFileRemoveSharedLinkRequestBodyArg(val: any): UpdateFileRemoveSharedLinkRequestBodyArg;
export declare function newSerializeUpdateFileRemoveSharedLinkQueryParamsArg(val: UpdateFileRemoveSharedLinkQueryParamsArg): Json;
export declare function newDeserializeUpdateFileRemoveSharedLinkQueryParamsArg(val: any): UpdateFileRemoveSharedLinkQueryParamsArg;
