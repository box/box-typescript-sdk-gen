import { serializeLegalHoldPolicies } from "../schemas.generated.js";
import { deserializeLegalHoldPolicies } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeLegalHoldPolicy } from "../schemas.generated.js";
import { deserializeLegalHoldPolicy } from "../schemas.generated.js";
import { LegalHoldPolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { LegalHoldPolicy } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface GetLegalHoldPoliciesQueryParamsArg {
    readonly policyName?: string;
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export class GetLegalHoldPoliciesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetLegalHoldPoliciesHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface CreateLegalHoldPolicyRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly filterStartedAt?: string;
    readonly filterEndedAt?: string;
    readonly isOngoing?: boolean;
}
export class CreateLegalHoldPolicyHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateLegalHoldPolicyHeadersArg) {
        Object.assign(this, fields);
    }
}
export class GetLegalHoldPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetLegalHoldPolicyByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface UpdateLegalHoldPolicyByIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly releaseNotes?: string;
}
export class UpdateLegalHoldPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateLegalHoldPolicyByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteLegalHoldPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteLegalHoldPolicyByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class LegalHoldPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<LegalHoldPoliciesManager, "getLegalHoldPolicies" | "createLegalHoldPolicy" | "getLegalHoldPolicyById" | "updateLegalHoldPolicyById" | "deleteLegalHoldPolicyById">) {
        Object.assign(this, fields);
    }
    async getLegalHoldPolicies(queryParams: GetLegalHoldPoliciesQueryParamsArg = {} satisfies GetLegalHoldPoliciesQueryParamsArg, headers: GetLegalHoldPoliciesHeadersArg = new GetLegalHoldPoliciesHeadersArg({})): Promise<LegalHoldPolicies> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["policy_name"]: toString(queryParams.policyName), ["fields"]: toString(queryParams.fields), ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicies(deserializeJson(response.text));
    }
    async createLegalHoldPolicy(requestBody: CreateLegalHoldPolicyRequestBodyArg, headers: CreateLegalHoldPolicyHeadersArg = new CreateLegalHoldPolicyHeadersArg({})): Promise<LegalHoldPolicy> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateLegalHoldPolicyRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJson(response.text));
    }
    async getLegalHoldPolicyById(legalHoldPolicyId: string, headers: GetLegalHoldPolicyByIdHeadersArg = new GetLegalHoldPolicyByIdHeadersArg({})): Promise<LegalHoldPolicy> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJson(response.text));
    }
    async updateLegalHoldPolicyById(legalHoldPolicyId: string, requestBody: UpdateLegalHoldPolicyByIdRequestBodyArg = {} satisfies UpdateLegalHoldPolicyByIdRequestBodyArg, headers: UpdateLegalHoldPolicyByIdHeadersArg = new UpdateLegalHoldPolicyByIdHeadersArg({})): Promise<LegalHoldPolicy> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeUpdateLegalHoldPolicyByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJson(response.text));
    }
    async deleteLegalHoldPolicyById(legalHoldPolicyId: string, headers: DeleteLegalHoldPolicyByIdHeadersArg = new DeleteLegalHoldPolicyByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeCreateLegalHoldPolicyRequestBodyArg(val: CreateLegalHoldPolicyRequestBodyArg): Json {
    return { ["policy_name"]: val.policyName, ["description"]: val.description, ["filter_started_at"]: val.filterStartedAt, ["filter_ended_at"]: val.filterEndedAt, ["is_ongoing"]: val.isOngoing };
}
export function deserializeCreateLegalHoldPolicyRequestBodyArg(val: any): CreateLegalHoldPolicyRequestBodyArg {
    const policyName: string = val.policy_name;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const filterStartedAt: undefined | string = isJson(val.filter_started_at, "string") ? val.filter_started_at : void 0;
    const filterEndedAt: undefined | string = isJson(val.filter_ended_at, "string") ? val.filter_ended_at : void 0;
    const isOngoing: undefined | boolean = isJson(val.is_ongoing, "boolean") ? val.is_ongoing : void 0;
    return { policyName: policyName, description: description, filterStartedAt: filterStartedAt, filterEndedAt: filterEndedAt, isOngoing: isOngoing } satisfies CreateLegalHoldPolicyRequestBodyArg;
}
export function serializeUpdateLegalHoldPolicyByIdRequestBodyArg(val: UpdateLegalHoldPolicyByIdRequestBodyArg): Json {
    return { ["policy_name"]: val.policyName, ["description"]: val.description, ["release_notes"]: val.releaseNotes };
}
export function deserializeUpdateLegalHoldPolicyByIdRequestBodyArg(val: any): UpdateLegalHoldPolicyByIdRequestBodyArg {
    const policyName: undefined | string = isJson(val.policy_name, "string") ? val.policy_name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const releaseNotes: undefined | string = isJson(val.release_notes, "string") ? val.release_notes : void 0;
    return { policyName: policyName, description: description, releaseNotes: releaseNotes } satisfies UpdateLegalHoldPolicyByIdRequestBodyArg;
}
