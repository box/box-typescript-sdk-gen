import { TrashWebLinkRestored } from "../schemas.generated.js";
import { TrashWebLink } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface CreateWebLinkByIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface CreateWebLinkByIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: CreateWebLinkByIdRequestBodyArgParentField;
}
export interface CreateWebLinkByIdQueryParamsArg {
    readonly fields?: string;
}
export interface GetWebLinkTrashQueryParamsArg {
    readonly fields?: string;
}
export declare class TrashedWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedWebLinksManager, "createWebLinkById" | "getWebLinkTrash" | "deleteWebLinkTrash">);
    createWebLinkById(webLinkId: string, requestBody: CreateWebLinkByIdRequestBodyArg, queryParams?: undefined | CreateWebLinkByIdQueryParamsArg): Promise<TrashWebLinkRestored>;
    getWebLinkTrash(webLinkId: string, queryParams?: undefined | GetWebLinkTrashQueryParamsArg): Promise<TrashWebLink>;
    deleteWebLinkTrash(webLinkId: string): Promise<any>;
}
export declare function serializeCreateWebLinkByIdRequestBodyArgParentField(val: CreateWebLinkByIdRequestBodyArgParentField): Json;
export declare function deserializeCreateWebLinkByIdRequestBodyArgParentField(val: any): CreateWebLinkByIdRequestBodyArgParentField;
export declare function serializeCreateWebLinkByIdRequestBodyArg(val: CreateWebLinkByIdRequestBodyArg): Json;
export declare function deserializeCreateWebLinkByIdRequestBodyArg(val: any): CreateWebLinkByIdRequestBodyArg;
export declare function serializeCreateWebLinkByIdQueryParamsArg(val: CreateWebLinkByIdQueryParamsArg): Json;
export declare function deserializeCreateWebLinkByIdQueryParamsArg(val: any): CreateWebLinkByIdQueryParamsArg;
export declare function serializeGetWebLinkTrashQueryParamsArg(val: GetWebLinkTrashQueryParamsArg): Json;
export declare function deserializeGetWebLinkTrashQueryParamsArg(val: any): GetWebLinkTrashQueryParamsArg;
