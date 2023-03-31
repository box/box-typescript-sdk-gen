import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type WebLinksManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface CreateWebLinkRequestBodyArgParentField {
    readonly id: string;
}
export type CreateWebLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface CreateWebLinkRequestBodyArgSharedLinkField {
    readonly access?: CreateWebLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
}
export interface CreateWebLinkRequestBodyArg {
    readonly url: string;
    readonly parent: CreateWebLinkRequestBodyArgParentField;
    readonly name?: string;
    readonly description?: string;
    readonly sharedLink?: CreateWebLinkRequestBodyArgSharedLinkField;
}
export interface GetWebLinkByIdOptionsArg {
    readonly boxapi?: string;
}
export interface CreateWebLinkByIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface CreateWebLinkByIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: CreateWebLinkByIdRequestBodyArgParentField;
}
export interface CreateWebLinkByIdOptionsArg {
    readonly fields?: string;
}
export interface UpdateWebLinkByIdRequestBodyArgParentField {
    readonly id?: string;
}
export type UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateWebLinkByIdRequestBodyArgSharedLinkField {
    readonly access?: UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
}
export interface UpdateWebLinkByIdRequestBodyArg {
    readonly url?: string;
    readonly parent?: UpdateWebLinkByIdRequestBodyArgParentField;
    readonly name?: string;
    readonly description?: string;
    readonly sharedLink?: UpdateWebLinkByIdRequestBodyArgSharedLinkField;
}
export declare class WebLinksManager {
    readonly auth: WebLinksManagerAuthField;
    constructor(fields: Omit<WebLinksManager, "createWebLink" | "getWebLinkById" | "createWebLinkById" | "updateWebLinkById" | "deleteWebLinkById">);
    createWebLink(requestBody: CreateWebLinkRequestBodyArg): Promise<any>;
    getWebLinkById(webLinkId: string, options?: GetWebLinkByIdOptionsArg): Promise<any>;
    createWebLinkById(webLinkId: string, requestBody: CreateWebLinkByIdRequestBodyArg, options?: CreateWebLinkByIdOptionsArg): Promise<any>;
    updateWebLinkById(webLinkId: string, requestBody: UpdateWebLinkByIdRequestBodyArg): Promise<any>;
    deleteWebLinkById(webLinkId: string): Promise<any>;
}
