import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type WebLinksManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface PostWebLinksRequestBodyArgParentField {
    readonly id: string;
}
export type PostWebLinksRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PostWebLinksRequestBodyArgSharedLinkField {
    readonly access?: PostWebLinksRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
}
export interface PostWebLinksRequestBodyArg {
    readonly url: string;
    readonly parent: PostWebLinksRequestBodyArgParentField;
    readonly name?: string;
    readonly description?: string;
    readonly sharedLink?: PostWebLinksRequestBodyArgSharedLinkField;
}
export interface GetWebLinksIdOptionsArg {
    readonly boxapi?: string;
}
export interface PostWebLinksIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface PostWebLinksIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: PostWebLinksIdRequestBodyArgParentField;
}
export interface PostWebLinksIdOptionsArg {
    readonly fields?: string;
}
export interface PutWebLinksIdRequestBodyArgParentField {
    readonly id?: string;
}
export type PutWebLinksIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface PutWebLinksIdRequestBodyArgSharedLinkField {
    readonly access?: PutWebLinksIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
}
export interface PutWebLinksIdRequestBodyArg {
    readonly url?: string;
    readonly parent?: PutWebLinksIdRequestBodyArgParentField;
    readonly name?: string;
    readonly description?: string;
    readonly sharedLink?: PutWebLinksIdRequestBodyArgSharedLinkField;
}
export declare class WebLinksManager {
    readonly auth: WebLinksManagerAuthField;
    constructor(fields: Omit<WebLinksManager, "postWebLinks" | "getWebLinksId" | "postWebLinksId" | "putWebLinksId" | "deleteWebLinksId">);
    postWebLinks(requestBody: PostWebLinksRequestBodyArg): Promise<any>;
    getWebLinksId(webLinkId: string, options?: GetWebLinksIdOptionsArg): Promise<any>;
    postWebLinksId(webLinkId: string, requestBody: PostWebLinksIdRequestBodyArg, options?: PostWebLinksIdOptionsArg): Promise<any>;
    putWebLinksId(webLinkId: string, requestBody: PutWebLinksIdRequestBodyArg): Promise<any>;
    deleteWebLinksId(webLinkId: string): Promise<any>;
}
