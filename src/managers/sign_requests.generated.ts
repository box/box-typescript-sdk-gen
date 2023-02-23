import { SignRequest } from "../schemas.generated.js";
import { deserializeSignRequest } from "../schemas.generated.js";
import { serializeSignRequest } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { SignRequests } from "../schemas.generated.js";
import { deserializeSignRequests } from "../schemas.generated.js";
import { serializeSignRequests } from "../schemas.generated.js";
import { SignRequestCreateRequest } from "../schemas.generated.js";
import { deserializeSignRequestCreateRequest } from "../schemas.generated.js";
import { serializeSignRequestCreateRequest } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
import { serializeJSON, JSON } from "../json.js";
export type SignRequestsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetSignRequestsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class SignRequestsManager {
    readonly auth!: SignRequestsManagerAuthField;
    constructor(fields: Omit<SignRequestsManager, "postSignRequestsIdCancel" | "postSignRequestsIdResend" | "getSignRequestsId" | "getSignRequests" | "postSignRequests">) {
        Object.assign(this, fields);
    }
    async postSignRequestsIdCancel(signRequestId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_requests/", signRequestId, "/cancel") as string, { method: "POST", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeSignRequest(deserializeJSON(response.text) as JSON);
    }
    async postSignRequestsIdResend(signRequestId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_requests/", signRequestId, "/resend") as string, { method: "POST", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getSignRequestsId(signRequestId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_requests/", signRequestId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeSignRequest(deserializeJSON(response.text) as JSON);
    }
    async getSignRequests(options: GetSignRequestsOptionsArg = {} satisfies GetSignRequestsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_requests") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeSignRequests(deserializeJSON(response.text) as JSON);
    }
    async postSignRequests(requestBody: SignRequestCreateRequest): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_requests") as string, { method: "POST", body: await serializeSignRequestCreateRequest(serializeJSON(requestBody) as string), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeSignRequest(deserializeJSON(response.text) as JSON);
    }
}
