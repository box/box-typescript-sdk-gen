import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type SharedLinksFilesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetSharedItemsOptionsArg {
    readonly ifNoneMatch?: string;
    readonly fields?: string;
}
export type PutFilesIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFilesIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutFilesIdAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutFilesIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFilesIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutFilesIdAddSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFilesIdAddSharedLinkRequestBodyArgSharedLinkField;
}
export type PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutFilesIdUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFilesIdUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface PutFilesIdRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface PutFilesIdRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFilesIdRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export declare class SharedLinksFilesManager {
    readonly auth: SharedLinksFilesManagerAuthField;
    constructor(fields: Omit<SharedLinksFilesManager, "getSharedItems" | "getFilesIdGetSharedLink" | "putFilesIdAddSharedLink" | "putFilesIdUpdateSharedLink" | "putFilesIdRemoveSharedLink">);
    getSharedItems(boxapi: string, options?: GetSharedItemsOptionsArg): Promise<any>;
    getFilesIdGetSharedLink(fileId: string, fields: string): Promise<any>;
    putFilesIdAddSharedLink(fileId: string, fields: string, requestBody: PutFilesIdAddSharedLinkRequestBodyArg): Promise<any>;
    putFilesIdUpdateSharedLink(fileId: string, fields: string, requestBody: PutFilesIdUpdateSharedLinkRequestBodyArg): Promise<any>;
    putFilesIdRemoveSharedLink(fileId: string, fields: string, requestBody: PutFilesIdRemoveSharedLinkRequestBodyArg): Promise<any>;
}
