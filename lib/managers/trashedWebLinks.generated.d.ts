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
export declare class CreateWebLinkByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateWebLinkByIdHeadersArg);
}
export interface GetWebLinkTrashQueryParamsArg {
    readonly fields?: string;
}
export declare class GetWebLinkTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetWebLinkTrashHeadersArg);
}
export declare class DeleteWebLinkTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteWebLinkTrashHeadersArg);
}
export declare class TrashedWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedWebLinksManager, "createWebLinkById" | "getWebLinkTrash" | "deleteWebLinkTrash">);
    createWebLinkById(webLinkId: string, requestBody: CreateWebLinkByIdRequestBodyArg, queryParams?: CreateWebLinkByIdQueryParamsArg, headers?: CreateWebLinkByIdHeadersArg): Promise<TrashWebLinkRestored>;
    getWebLinkTrash(webLinkId: string, queryParams?: GetWebLinkTrashQueryParamsArg, headers?: GetWebLinkTrashHeadersArg): Promise<TrashWebLink>;
    deleteWebLinkTrash(webLinkId: string, headers?: DeleteWebLinkTrashHeadersArg): Promise<undefined>;
}
export declare function serializeCreateWebLinkByIdRequestBodyArgParentField(val: CreateWebLinkByIdRequestBodyArgParentField): Json;
export declare function deserializeCreateWebLinkByIdRequestBodyArgParentField(val: any): CreateWebLinkByIdRequestBodyArgParentField;
export declare function serializeCreateWebLinkByIdRequestBodyArg(val: CreateWebLinkByIdRequestBodyArg): Json;
export declare function deserializeCreateWebLinkByIdRequestBodyArg(val: any): CreateWebLinkByIdRequestBodyArg;
