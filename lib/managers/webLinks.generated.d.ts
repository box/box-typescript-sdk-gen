import { WebLink } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
export interface GetWebLinkByIdHeadersArg {
    readonly boxapi?: string;
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<WebLinksManager, "createWebLink" | "getWebLinkById" | "updateWebLinkById" | "deleteWebLinkById">);
    createWebLink(requestBody: CreateWebLinkRequestBodyArg): Promise<WebLink>;
    getWebLinkById(webLinkId: string, headers?: undefined | GetWebLinkByIdHeadersArg): Promise<WebLink>;
    updateWebLinkById(webLinkId: string, requestBody: UpdateWebLinkByIdRequestBodyArg): Promise<WebLink>;
    deleteWebLinkById(webLinkId: string): Promise<any>;
}
export declare function serializeCreateWebLinkRequestBodyArgParentField(val: CreateWebLinkRequestBodyArgParentField): Json;
export declare function deserializeCreateWebLinkRequestBodyArgParentField(val: any): CreateWebLinkRequestBodyArgParentField;
export declare function serializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val: CreateWebLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeCreateWebLinkRequestBodyArgSharedLinkFieldAccessField(val: any): CreateWebLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeCreateWebLinkRequestBodyArgSharedLinkField(val: CreateWebLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeCreateWebLinkRequestBodyArgSharedLinkField(val: any): CreateWebLinkRequestBodyArgSharedLinkField;
export declare function serializeCreateWebLinkRequestBodyArg(val: CreateWebLinkRequestBodyArg): Json;
export declare function deserializeCreateWebLinkRequestBodyArg(val: any): CreateWebLinkRequestBodyArg;
export declare function serializeGetWebLinkByIdHeadersArg(val: GetWebLinkByIdHeadersArg): Json;
export declare function deserializeGetWebLinkByIdHeadersArg(val: any): GetWebLinkByIdHeadersArg;
export declare function serializeUpdateWebLinkByIdRequestBodyArgParentField(val: UpdateWebLinkByIdRequestBodyArgParentField): Json;
export declare function deserializeUpdateWebLinkByIdRequestBodyArgParentField(val: any): UpdateWebLinkByIdRequestBodyArgParentField;
export declare function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val: UpdateWebLinkByIdRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val: any): UpdateWebLinkByIdRequestBodyArgSharedLinkField;
export declare function serializeUpdateWebLinkByIdRequestBodyArg(val: UpdateWebLinkByIdRequestBodyArg): Json;
export declare function deserializeUpdateWebLinkByIdRequestBodyArg(val: any): UpdateWebLinkByIdRequestBodyArg;
