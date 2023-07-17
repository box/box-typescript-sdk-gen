import { serializeAccessToken } from "../schemas.generated.js";
import { deserializeAccessToken } from "../schemas.generated.js";
import { serializeOAuth2Error } from "../schemas.generated.js";
import { deserializeOAuth2Error } from "../schemas.generated.js";
import { AccessToken } from "../schemas.generated.js";
import { OAuth2Error } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { isJson } from "../json.js";
import { Json } from "../json.js";
export type GetAuthorizeQueryParamsArgResponseTypeField = "code";
export interface GetAuthorizeQueryParamsArg {
    readonly responseType: GetAuthorizeQueryParamsArgResponseTypeField;
    readonly clientId: string;
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
    async getAuthorize(queryParams: GetAuthorizeQueryParamsArg): Promise<undefined> {
        const response: FetchResponse = await fetch("".concat("https://account.box.com/api/oauth2/authorize") as string, { method: "GET", params: prepareParams(serializeGetAuthorizeQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeGetAuthorizeQueryParamsArgResponseTypeField(val: GetAuthorizeQueryParamsArgResponseTypeField): Json {
    return val;
}
export function deserializeGetAuthorizeQueryParamsArgResponseTypeField(val: any): GetAuthorizeQueryParamsArgResponseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetAuthorizeQueryParamsArgResponseTypeField\"";
    }
    if (val == "code") {
        return "code";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetAuthorizeQueryParamsArg(val: GetAuthorizeQueryParamsArg): Json {
    return { ["response_type"]: serializeGetAuthorizeQueryParamsArgResponseTypeField(val.responseType), ["client_id"]: val.clientId, ["redirect_uri"]: val.redirectUri, ["state"]: val.state, ["scope"]: val.scope };
}
export function deserializeGetAuthorizeQueryParamsArg(val: any): GetAuthorizeQueryParamsArg {
    const responseType: GetAuthorizeQueryParamsArgResponseTypeField = deserializeGetAuthorizeQueryParamsArgResponseTypeField(val.response_type);
    const clientId: string = val.client_id;
    const redirectUri: undefined | string = isJson(val.redirect_uri, "string") ? val.redirect_uri : void 0;
    const state: undefined | string = isJson(val.state, "string") ? val.state : void 0;
    const scope: undefined | string = isJson(val.scope, "string") ? val.scope : void 0;
    return { responseType: responseType, clientId: clientId, redirectUri: redirectUri, state: state, scope: scope } satisfies GetAuthorizeQueryParamsArg;
}
