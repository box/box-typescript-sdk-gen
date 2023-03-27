import { LegalHoldPolicies } from "../schemas.generated.js";
import { deserializeLegalHoldPolicies } from "../schemas.generated.js";
import { serializeLegalHoldPolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { LegalHoldPolicy } from "../schemas.generated.js";
import { deserializeLegalHoldPolicy } from "../schemas.generated.js";
import { serializeLegalHoldPolicy } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type LegalHoldPoliciesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetLegalHoldPoliciesOptionsArg {
    readonly policyName?: string;
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export interface PostLegalHoldPoliciesRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly filterStartedAt?: string;
    readonly filterEndedAt?: string;
    readonly isOngoing?: boolean;
}
export interface PutLegalHoldPoliciesIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly releaseNotes?: string;
}
export class LegalHoldPoliciesManager {
    readonly auth!: LegalHoldPoliciesManagerAuthField;
    constructor(fields: Omit<LegalHoldPoliciesManager, "getLegalHoldPolicies" | "postLegalHoldPolicies" | "getLegalHoldPoliciesId" | "putLegalHoldPoliciesId" | "deleteLegalHoldPoliciesId">) {
        Object.assign(this, fields);
    }
    async getLegalHoldPolicies(options: GetLegalHoldPoliciesOptionsArg = {} satisfies GetLegalHoldPoliciesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies") as string, { method: "GET", params: { ["policy_name"]: options.policyName, ["fields"]: options.fields, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicies(deserializeJSON(response.text) as JSON);
    }
    async postLegalHoldPolicies(requestBody: PostLegalHoldPoliciesRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJSON(response.text) as JSON);
    }
    async getLegalHoldPoliciesId(legalHoldPolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJSON(response.text) as JSON);
    }
    async putLegalHoldPoliciesId(legalHoldPolicyId: string, requestBody: PutLegalHoldPoliciesIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJSON(response.text) as JSON);
    }
    async deleteLegalHoldPoliciesId(legalHoldPolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
