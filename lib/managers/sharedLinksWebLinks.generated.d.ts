import { WebLink } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetSharedItemWebLinksQueryParamsArg {
    readonly fields?: string;
}
export interface GetSharedItemWebLinksHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
}
export interface GetWebLinkGetSharedLinkQueryParamsArg {
    readonly fields: string;
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
export interface UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateWebLinkRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateWebLinkRemoveSharedLinkQueryParamsArg {
    readonly fields: string;
}
export declare class SharedLinksWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksWebLinksManager, "getSharedItemWebLinks" | "getWebLinkGetSharedLink" | "updateWebLinkAddSharedLink" | "updateWebLinkUpdateSharedLink" | "updateWebLinkRemoveSharedLink">);
    getSharedItemWebLinks(queryParams: GetSharedItemWebLinksQueryParamsArg | undefined, headers: GetSharedItemWebLinksHeadersArg): Promise<WebLink>;
    getWebLinkGetSharedLink(webLinkId: string, queryParams: GetWebLinkGetSharedLinkQueryParamsArg): Promise<WebLink>;
    updateWebLinkAddSharedLink(webLinkId: string, requestBody: UpdateWebLinkAddSharedLinkRequestBodyArg, queryParams: UpdateWebLinkAddSharedLinkQueryParamsArg): Promise<WebLink>;
    updateWebLinkUpdateSharedLink(webLinkId: string, requestBody: UpdateWebLinkUpdateSharedLinkRequestBodyArg, queryParams: UpdateWebLinkUpdateSharedLinkQueryParamsArg): Promise<WebLink>;
    updateWebLinkRemoveSharedLink(webLinkId: string, requestBody: UpdateWebLinkRemoveSharedLinkRequestBodyArg, queryParams: UpdateWebLinkRemoveSharedLinkQueryParamsArg): Promise<WebLink>;
}
export declare function serializeGetSharedItemWebLinksQueryParamsArg(val: GetSharedItemWebLinksQueryParamsArg): Json;
export declare function deserializeGetSharedItemWebLinksQueryParamsArg(val: any): GetSharedItemWebLinksQueryParamsArg;
export declare function serializeGetSharedItemWebLinksHeadersArg(val: GetSharedItemWebLinksHeadersArg): Json;
export declare function deserializeGetSharedItemWebLinksHeadersArg(val: any): GetSharedItemWebLinksHeadersArg;
export declare function serializeGetWebLinkGetSharedLinkQueryParamsArg(val: GetWebLinkGetSharedLinkQueryParamsArg): Json;
export declare function deserializeGetWebLinkGetSharedLinkQueryParamsArg(val: any): GetWebLinkGetSharedLinkQueryParamsArg;
export declare function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
export declare function serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateWebLinkAddSharedLinkRequestBodyArg(val: UpdateWebLinkAddSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateWebLinkAddSharedLinkRequestBodyArg(val: any): UpdateWebLinkAddSharedLinkRequestBodyArg;
export declare function serializeUpdateWebLinkAddSharedLinkQueryParamsArg(val: UpdateWebLinkAddSharedLinkQueryParamsArg): Json;
export declare function deserializeUpdateWebLinkAddSharedLinkQueryParamsArg(val: any): UpdateWebLinkAddSharedLinkQueryParamsArg;
export declare function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json;
export declare function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
export declare function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json;
export declare function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
export declare function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val: UpdateWebLinkUpdateSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg(val: any): UpdateWebLinkUpdateSharedLinkRequestBodyArg;
export declare function serializeUpdateWebLinkUpdateSharedLinkQueryParamsArg(val: UpdateWebLinkUpdateSharedLinkQueryParamsArg): Json;
export declare function deserializeUpdateWebLinkUpdateSharedLinkQueryParamsArg(val: any): UpdateWebLinkUpdateSharedLinkQueryParamsArg;
export declare function serializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField): Json;
export declare function deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateWebLinkRemoveSharedLinkRequestBodyArgSharedLinkField;
export declare function serializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val: UpdateWebLinkRemoveSharedLinkRequestBodyArg): Json;
export declare function deserializeUpdateWebLinkRemoveSharedLinkRequestBodyArg(val: any): UpdateWebLinkRemoveSharedLinkRequestBodyArg;
export declare function serializeUpdateWebLinkRemoveSharedLinkQueryParamsArg(val: UpdateWebLinkRemoveSharedLinkQueryParamsArg): Json;
export declare function deserializeUpdateWebLinkRemoveSharedLinkQueryParamsArg(val: any): UpdateWebLinkRemoveSharedLinkQueryParamsArg;
