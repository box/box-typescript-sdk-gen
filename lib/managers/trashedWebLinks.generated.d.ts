import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
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
export interface GetWebLinkTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedWebLinksManager, "createWebLinkById" | "getWebLinkTrash" | "deleteWebLinkTrash">);
    createWebLinkById(webLinkId: string, requestBody: CreateWebLinkByIdRequestBodyArg, options?: CreateWebLinkByIdOptionsArg): Promise<any>;
    getWebLinkTrash(webLinkId: string, options?: GetWebLinkTrashOptionsArg): Promise<any>;
    deleteWebLinkTrash(webLinkId: string): Promise<any>;
}
