import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type SharedLinksFoldersManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetSharedItemsFoldersOptionsArg {
    readonly ifNoneMatch?: string;
    readonly fields?: string;
}
export type PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutFoldersIdAddSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFoldersIdAddSharedLinkRequestBodyArgSharedLinkField;
}
export type PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutFoldersIdUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFoldersIdUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface PutFoldersIdRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface PutFoldersIdRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: PutFoldersIdRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export declare class SharedLinksFoldersManager {
    readonly auth: SharedLinksFoldersManagerAuthField;
    constructor(fields: Omit<SharedLinksFoldersManager, "getSharedItemsFolders" | "getFoldersIdGetSharedLink" | "putFoldersIdAddSharedLink" | "putFoldersIdUpdateSharedLink" | "putFoldersIdRemoveSharedLink">);
    getSharedItemsFolders(boxapi: string, options?: GetSharedItemsFoldersOptionsArg): Promise<any>;
    getFoldersIdGetSharedLink(folderId: string, fields: string): Promise<any>;
    putFoldersIdAddSharedLink(folderId: string, fields: string, requestBody: PutFoldersIdAddSharedLinkRequestBodyArg): Promise<any>;
    putFoldersIdUpdateSharedLink(folderId: string, fields: string, requestBody: PutFoldersIdUpdateSharedLinkRequestBodyArg): Promise<any>;
    putFoldersIdRemoveSharedLink(folderId: string, fields: string, requestBody: PutFoldersIdRemoveSharedLinkRequestBodyArg): Promise<any>;
}
