import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type TrashedWebLinksManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
export interface GetWebLinkTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedWebLinksManager {
    readonly auth: TrashedWebLinksManagerAuthField;
    constructor(fields: Omit<TrashedWebLinksManager, "getWebLinkById" | "createWebLinkById" | "updateWebLinkById" | "deleteWebLinkById" | "getWebLinkTrash" | "deleteWebLinkTrash">);
    getWebLinkById(webLinkId: string, options?: GetWebLinkByIdOptionsArg): Promise<any>;
    createWebLinkById(webLinkId: string, requestBody: CreateWebLinkByIdRequestBodyArg, options?: CreateWebLinkByIdOptionsArg): Promise<any>;
    updateWebLinkById(webLinkId: string, requestBody: UpdateWebLinkByIdRequestBodyArg): Promise<any>;
    deleteWebLinkById(webLinkId: string): Promise<any>;
    getWebLinkTrash(webLinkId: string, options?: GetWebLinkTrashOptionsArg): Promise<any>;
    deleteWebLinkTrash(webLinkId: string): Promise<any>;
}
