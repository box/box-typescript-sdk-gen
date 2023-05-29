import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetAuthorizeResponseTypeArg = "code";
export interface GetAuthorizeOptionsArg {
    readonly redirectUri?: string;
    readonly state?: string;
    readonly scope?: string;
}
export declare class AuthorizationManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<AuthorizationManager, "getAuthorize">);
    getAuthorize(responseType: GetAuthorizeResponseTypeArg, clientId: string, options?: GetAuthorizeOptionsArg): Promise<undefined>;
}
