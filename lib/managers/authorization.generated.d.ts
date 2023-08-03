import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetAuthorizeQueryParamsArgResponseTypeField = "code";
export interface GetAuthorizeQueryParamsArg {
    readonly responseType: GetAuthorizeQueryParamsArgResponseTypeField;
    readonly clientId: string;
    readonly redirectUri?: string;
    readonly state?: string;
    readonly scope?: string;
}
export declare class GetAuthorizeHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetAuthorizeHeadersArg);
}
export declare class AuthorizationManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<AuthorizationManager, "getAuthorize">);
    getAuthorize(queryParams: GetAuthorizeQueryParamsArg, headers?: GetAuthorizeHeadersArg): Promise<undefined>;
}
