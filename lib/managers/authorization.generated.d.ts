import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type AuthorizationManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type GetAuthorizeResponseTypeArg = "code";
export interface GetAuthorizeOptionsArg {
    readonly redirectUri?: string;
    readonly state?: string;
    readonly scope?: string;
}
export declare class AuthorizationManager {
    readonly auth: AuthorizationManagerAuthField;
    constructor(fields: Omit<AuthorizationManager, "getAuthorize">);
    getAuthorize(responseType: GetAuthorizeResponseTypeArg, clientId: string, options?: GetAuthorizeOptionsArg): Promise<undefined>;
}
