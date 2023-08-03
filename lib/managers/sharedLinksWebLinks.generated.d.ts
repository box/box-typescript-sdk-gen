import { WebLink } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetSharedItemWebLinksQueryParamsArg {
    readonly fields?: string;
}
export declare class GetSharedItemWebLinksHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetSharedItemWebLinksHeadersArg);
}
export interface GetWebLinkGetSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class GetWebLinkGetSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetWebLinkGetSharedLinkHeadersArg);
}
export type UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateWebLinkAddSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateWebLinkAddSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class UpdateWebLinkAddSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateWebLinkAddSharedLinkHeadersArg);
}
export type UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateWebLinkUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateWebLinkUpdateSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class UpdateWebLinkUpdateSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateWebLinkUpdateSharedLinkHeadersArg);
}
export interface UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateWebLinkRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateWebLinkRemoveSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class UpdateWebLinkRemoveSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateWebLinkRemoveSharedLinkHeadersArg);
}
export declare class SharedLinksWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksWebLinksManager, "getSharedItemWebLinks" | "getWebLinkGetSharedLink" | "updateWebLinkAddSharedLink" | "updateWebLinkUpdateSharedLink" | "updateWebLinkRemoveSharedLink">);
    getSharedItemWebLinks(queryParams: GetSharedItemWebLinksQueryParamsArg | undefined, headers: GetSharedItemWebLinksHeadersArg): Promise<WebLink>;
    getWebLinkGetSharedLink(webLinkId: string, queryParams: GetWebLinkGetSharedLinkQueryParamsArg, headers?: GetWebLinkGetSharedLinkHeadersArg): Promise<WebLink>;
    updateWebLinkAddSharedLink(webLinkId: string, requestBody: UpdateWebLinkAddSharedLinkRequestBodyArg, queryParams: UpdateWebLinkAddSharedLinkQueryParamsArg, headers?: UpdateWebLinkAddSharedLinkHeadersArg): Promise<WebLink>;
    updateWebLinkUpdateSharedLink(webLinkId: string, requestBody: UpdateWebLinkUpdateSharedLinkRequestBodyArg, queryParams: UpdateWebLinkUpdateSharedLinkQueryParamsArg, headers?: UpdateWebLinkUpdateSharedLinkHeadersArg): Promise<WebLink>;
    updateWebLinkRemoveSharedLink(webLinkId: string, requestBody: UpdateWebLinkRemoveSharedLinkRequestBodyArg, queryParams: UpdateWebLinkRemoveSharedLinkQueryParamsArg, headers?: UpdateWebLinkRemoveSharedLinkHeadersArg): Promise<WebLink>;
}
export declare function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
export declare function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateWebLinkAddSharedLinkRequestBodyArg(val: UpdateWebLinkAddSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateWebLinkAddSharedLinkRequestBodyArg(val: any): UpdateWebLinkAddSharedLinkRequestBodyArg;
export declare function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
export declare function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val: UpdateWebLinkUpdateSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArg;
export declare function serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val: UpdateWebLinkRemoveSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val: any): UpdateWebLinkRemoveSharedLinkRequestBodyArg;
