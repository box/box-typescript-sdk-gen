import { LegalHoldPolicies } from "../schemas.generated.js";
import { deserializeLegalHoldPolicies } from "../schemas.generated.js";
import { serializeLegalHoldPolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { LegalHoldPolicy } from "../schemas.generated.js";
import { deserializeLegalHoldPolicy } from "../schemas.generated.js";
import { serializeLegalHoldPolicy } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface GetLegalHoldPoliciesOptionsArg {
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
    async getLegalHoldPolicies(options: GetLegalHoldPoliciesOptionsArg = {} satisfies GetLegalHoldPoliciesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies") as string, { method: "GET", params: { ["policy_name"]: options.policyName, ["fields"]: options.fields, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicies(deserializeJson(response.text));
    }
    async createLegalHoldPolicy(requestBody: CreateLegalHoldPolicyRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJson(response.text));
    }
    async getLegalHoldPolicyById(legalHoldPolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJson(response.text));
    }
    async updateLegalHoldPolicyById(legalHoldPolicyId: string, requestBody: UpdateLegalHoldPolicyByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicy(deserializeJson(response.text));
    }
    async deleteLegalHoldPolicyById(legalHoldPolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policies/", legalHoldPolicyId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
