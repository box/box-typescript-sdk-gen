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
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetLegalHoldPoliciesQueryParamsArg {
    readonly policyName?: string;
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export interface CreateLegalHoldPolicyRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly filterStartedAt?: string;
    readonly filterEndedAt?: string;
    readonly isOngoing?: boolean;
}
export interface UpdateLegalHoldPolicyByIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly releaseNotes?: string;
}
export class LegalHoldPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<LegalHoldPoliciesManager, "getLegalHoldPolicies" | "createLegalHoldPolicy" | "getLegalHoldPolicyById" | "updateLegalHoldPolicyById" | "deleteLegalHoldPolicyById">) {
        Object.assign(this, fields);
    }
    async getLegalHoldPolicies(queryParams: undefined | GetLegalHoldPoliciesQueryParamsArg = {} satisfies GetLegalHoldPoliciesQueryParamsArg): Promise<LegalHoldPolicies> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicies(deserializeJson(response.text));
    }
    async createLegalHoldPolicy(requestBody: CreateLegalHoldPolicyRequestBodyArg): Promise<LegalHoldPolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJson(response.text));
    }
    async getLegalHoldPolicyById(legalHoldPolicyId: string): Promise<LegalHoldPolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJson(response.text));
    }
    async updateLegalHoldPolicyById(legalHoldPolicyId: string, requestBody: UpdateLegalHoldPolicyByIdRequestBodyArg): Promise<LegalHoldPolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJson(response.text));
    }
    async deleteLegalHoldPolicyById(legalHoldPolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetLegalHoldPoliciesQueryParamsArg(val: GetLegalHoldPoliciesQueryParamsArg): Json {
    return { ["policyName"]: val.policyName, ["fields"]: val.fields, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetLegalHoldPoliciesQueryParamsArg(val: any): GetLegalHoldPoliciesQueryParamsArg {
    const policyName: undefined | string = isJson(val.policyName, "string") ? val.policyName : void 0;
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { policyName: policyName, fields: fields, marker: marker, limit: limit } satisfies GetLegalHoldPoliciesQueryParamsArg;
}
export function serializeCreateLegalHoldPolicyRequestBodyArg(val: CreateLegalHoldPolicyRequestBodyArg): Json {
    return { ["policyName"]: val.policyName, ["description"]: val.description, ["filterStartedAt"]: val.filterStartedAt, ["filterEndedAt"]: val.filterEndedAt, ["isOngoing"]: val.isOngoing };
}
export function deserializeCreateLegalHoldPolicyRequestBodyArg(val: any): CreateLegalHoldPolicyRequestBodyArg {
    const policyName: string = val.policyName;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const filterStartedAt: undefined | string = isJson(val.filterStartedAt, "string") ? val.filterStartedAt : void 0;
    const filterEndedAt: undefined | string = isJson(val.filterEndedAt, "string") ? val.filterEndedAt : void 0;
    const isOngoing: undefined | boolean = isJson(val.isOngoing, "boolean") ? val.isOngoing : void 0;
    return { policyName: policyName, description: description, filterStartedAt: filterStartedAt, filterEndedAt: filterEndedAt, isOngoing: isOngoing } satisfies CreateLegalHoldPolicyRequestBodyArg;
}
export function serializeUpdateLegalHoldPolicyByIdRequestBodyArg(val: UpdateLegalHoldPolicyByIdRequestBodyArg): Json {
    return { ["policyName"]: val.policyName, ["description"]: val.description, ["releaseNotes"]: val.releaseNotes };
}
export function deserializeUpdateLegalHoldPolicyByIdRequestBodyArg(val: any): UpdateLegalHoldPolicyByIdRequestBodyArg {
    const policyName: undefined | string = isJson(val.policyName, "string") ? val.policyName : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const releaseNotes: undefined | string = isJson(val.releaseNotes, "string") ? val.releaseNotes : void 0;
    return { policyName: policyName, description: description, releaseNotes: releaseNotes } satisfies UpdateLegalHoldPolicyByIdRequestBodyArg;
}
