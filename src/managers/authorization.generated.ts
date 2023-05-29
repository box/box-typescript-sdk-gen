import { AccessToken } from "../schemas.generated.js";
import { deserializeAccessToken } from "../schemas.generated.js";
import { serializeAccessToken } from "../schemas.generated.js";
import { OAuth2Error } from "../schemas.generated.js";
import { deserializeOAuth2Error } from "../schemas.generated.js";
import { serializeOAuth2Error } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
export type GetAuthorizeResponseTypeArg = "code";
export interface GetAuthorizeOptionsArg {
    readonly redirectUri?: string;
    readonly state?: string;
    readonly scope?: string;
}
export class AuthorizationManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<AuthorizationManager, "getAuthorize">) {
        Object.assign(this, fields);
    }
    async getAuthorize(responseType: GetAuthorizeResponseTypeArg, clientId: string, options: GetAuthorizeOptionsArg = {} satisfies GetAuthorizeOptionsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://account.box.com/api/oauth2/authorize") as string, { method: "GET", params: { ["response_type"]: responseType, ["client_id"]: clientId, ["redirect_uri"]: options.redirectUri, ["state"]: options.state, ["scope"]: options.scope }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
