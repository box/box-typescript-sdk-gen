import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type SharedLinksWebLinksManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetSharedItemsWebLinksOptionsArg {
    readonly ifNoneMatch?: string;
    readonly fields?: string;
}
export type PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutWebLinksIdAddSharedLinkRequestBodyArg {
    readonly sharedLink?: PutWebLinksIdAddSharedLinkRequestBodyArgSharedLinkField;
}
export type PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface PutWebLinksIdUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: PutWebLinksIdUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface PutWebLinksIdRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface PutWebLinksIdRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: PutWebLinksIdRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export declare class SharedLinksWebLinksManager {
    readonly auth: SharedLinksWebLinksManagerAuthField;
    constructor(fields: Omit<SharedLinksWebLinksManager, "getSharedItemsWebLinks" | "getWebLinksIdGetSharedLink" | "putWebLinksIdAddSharedLink" | "putWebLinksIdUpdateSharedLink" | "putWebLinksIdRemoveSharedLink">);
    getSharedItemsWebLinks(boxapi: string, options?: GetSharedItemsWebLinksOptionsArg): Promise<any>;
    getWebLinksIdGetSharedLink(webLinkId: string, fields: string): Promise<any>;
    putWebLinksIdAddSharedLink(webLinkId: string, fields: string, requestBody: PutWebLinksIdAddSharedLinkRequestBodyArg): Promise<any>;
    putWebLinksIdUpdateSharedLink(webLinkId: string, fields: string, requestBody: PutWebLinksIdUpdateSharedLinkRequestBodyArg): Promise<any>;
    putWebLinksIdRemoveSharedLink(webLinkId: string, fields: string, requestBody: PutWebLinksIdRemoveSharedLinkRequestBodyArg): Promise<any>;
}
