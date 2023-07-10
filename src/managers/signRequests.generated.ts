import { serializeSignRequest } from "../schemas.generated.js";
import { deserializeSignRequest } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeSignRequests } from "../schemas.generated.js";
import { deserializeSignRequests } from "../schemas.generated.js";
import { serializeSignRequestCreateRequest } from "../schemas.generated.js";
import { deserializeSignRequestCreateRequest } from "../schemas.generated.js";
import { SignRequest } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { SignRequests } from "../schemas.generated.js";
import { SignRequestCreateRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface GetSignRequestsQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class SignRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SignRequestsManager, "cancelSignRequest" | "resendSignRequest" | "getSignRequestById" | "getSignRequests" | "createSignRequest">) {
        Object.assign(this, fields);
    }
    async cancelSignRequest(signRequestId: string): Promise<SignRequest> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_requests/", signRequestId, "/cancel") as string, { method: "POST", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSignRequest(deserializeJson(response.text));
    }
    async resendSignRequest(signRequestId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_requests/", signRequestId, "/resend") as string, { method: "POST", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getSignRequestById(signRequestId: string): Promise<SignRequest> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_requests/", signRequestId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSignRequest(deserializeJson(response.text));
    }
    async getSignRequests(queryParams: undefined | GetSignRequestsQueryParamsArg = {} satisfies GetSignRequestsQueryParamsArg): Promise<SignRequests> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_requests") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSignRequests(deserializeJson(response.text));
    }
    async createSignRequest(requestBody: SignRequestCreateRequest): Promise<SignRequest> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_requests") as string, { method: "POST", body: serializeJson(serializeSignRequestCreateRequest(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSignRequest(deserializeJson(response.text));
    }
}
export function serializeGetSignRequestsQueryParamsArg(val: GetSignRequestsQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetSignRequestsQueryParamsArg(val: any): GetSignRequestsQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetSignRequestsQueryParamsArg;
}
