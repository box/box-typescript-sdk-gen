import { WebLink } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface CreateWebLinkRequestBodyArgParentField {
    readonly id: string;
}
export interface CreateWebLinkRequestBodyArg {
    readonly url: string;
    readonly parent: CreateWebLinkRequestBodyArgParentField;
    readonly name?: string;
    readonly description?: string;
}
export declare class CreateWebLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateWebLinkHeadersArg);
}
export declare class GetWebLinkByIdHeadersArg {
    readonly boxapi?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetWebLinkByIdHeadersArg);
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
export declare class UpdateWebLinkByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateWebLinkByIdHeadersArg);
}
export declare class DeleteWebLinkByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteWebLinkByIdHeadersArg);
}
export declare class WebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<WebLinksManager, "createWebLink" | "getWebLinkById" | "updateWebLinkById" | "deleteWebLinkById">);
    createWebLink(requestBody: CreateWebLinkRequestBodyArg, headers?: CreateWebLinkHeadersArg): Promise<WebLink>;
    getWebLinkById(webLinkId: string, headers?: GetWebLinkByIdHeadersArg): Promise<WebLink>;
    updateWebLinkById(webLinkId: string, requestBody: UpdateWebLinkByIdRequestBodyArg, headers?: UpdateWebLinkByIdHeadersArg): Promise<WebLink>;
    deleteWebLinkById(webLinkId: string, headers?: DeleteWebLinkByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateWebLinkRequestBodyArgParentField(val: CreateWebLinkRequestBodyArgParentField): Json;
export declare function deserializeCreateWebLinkRequestBodyArgParentField(val: any): CreateWebLinkRequestBodyArgParentField;
export declare function serializeCreateWebLinkRequestBodyArg(val: CreateWebLinkRequestBodyArg): Json;
export declare function deserializeCreateWebLinkRequestBodyArg(val: any): CreateWebLinkRequestBodyArg;
export declare function serializeUpdateWebLinkByIdRequestBodyArgParentField(val: UpdateWebLinkByIdRequestBodyArgParentField): Json;
export declare function deserializeUpdateWebLinkByIdRequestBodyArgParentField(val: any): UpdateWebLinkByIdRequestBodyArgParentField;
export declare function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkByIdRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val: UpdateWebLinkByIdRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField(val: any): UpdateWebLinkByIdRequestBodyArgSharedLinkField;
export declare function serializeUpdateWebLinkByIdRequestBodyArg(val: UpdateWebLinkByIdRequestBodyArg): Json;
export declare function deserializeUpdateWebLinkByIdRequestBodyArg(val: any): UpdateWebLinkByIdRequestBodyArg;
