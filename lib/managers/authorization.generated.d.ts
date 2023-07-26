import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetAuthorizeQueryParamsArgResponseTypeField = "code";
export interface GetAuthorizeQueryParamsArg {
    readonly responseType: GetAuthorizeQueryParamsArgResponseTypeField;
    readonly clientId: string;
    readonly redirectUri?: string;
    readonly state?: string;
    readonly scope?: string;
}
export declare class AuthorizationManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<AuthorizationManager, "getAuthorize">);
    getAuthorize(queryParams: GetAuthorizeQueryParamsArg): Promise<undefined>;
}
export declare function serializeGetAuthorizeQueryParamsArgResponseTypeField(val: GetAuthorizeQueryParamsArgResponseTypeField): Json;
export declare function deserializeGetAuthorizeQueryParamsArgResponseTypeField(val: any): GetAuthorizeQueryParamsArgResponseTypeField;
export declare function serializeGetAuthorizeQueryParamsArg(val: GetAuthorizeQueryParamsArg): Json;
export declare function deserializeGetAuthorizeQueryParamsArg(val: any): GetAuthorizeQueryParamsArg;
