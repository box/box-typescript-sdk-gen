import { RetentionPolicies } from "../schemas.generated.js";
import { deserializeRetentionPolicies } from "../schemas.generated.js";
import { serializeRetentionPolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { RetentionPolicy } from "../schemas.generated.js";
import { deserializeRetentionPolicy } from "../schemas.generated.js";
import { serializeRetentionPolicy } from "../schemas.generated.js";
import { UserMini } from "../schemas.generated.js";
import { deserializeUserMini } from "../schemas.generated.js";
import { serializeUserMini } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type RetentionPoliciesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type GetRetentionPoliciesOptionsArgPolicyTypeField = "finite" | "indefinite";
export interface GetRetentionPoliciesOptionsArg {
    readonly policyName?: string;
    readonly policyType?: GetRetentionPoliciesOptionsArgPolicyTypeField;
    readonly createdByUserId?: string;
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export type PostRetentionPoliciesRequestBodyArgPolicyTypeField = "finite" | "indefinite";
export type PostRetentionPoliciesRequestBodyArgDispositionActionField = "permanently_delete" | "remove_retention";
export type PostRetentionPoliciesRequestBodyArgRetentionTypeField = "modifiable" | "non-modifiable";
export interface PostRetentionPoliciesRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly policyType: PostRetentionPoliciesRequestBodyArgPolicyTypeField;
    readonly dispositionAction: PostRetentionPoliciesRequestBodyArgDispositionActionField;
    readonly retentionLength?: string;
    readonly retentionType?: PostRetentionPoliciesRequestBodyArgRetentionTypeField;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export interface GetRetentionPoliciesIdOptionsArg {
    readonly fields?: string;
}
export type PutRetentionPoliciesIdRequestBodyArgDispositionActionField = "permanently_delete" | "remove_retention";
export interface PutRetentionPoliciesIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly dispositionAction?: PutRetentionPoliciesIdRequestBodyArgDispositionActionField;
    readonly retentionType?: string;
    readonly retentionLength?: string;
    readonly status?: string;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export class RetentionPoliciesManager {
    readonly auth!: RetentionPoliciesManagerAuthField;
    constructor(fields: Omit<RetentionPoliciesManager, "getRetentionPolicies" | "postRetentionPolicies" | "getRetentionPoliciesId" | "putRetentionPoliciesId" | "deleteRetentionPoliciesId">) {
        Object.assign(this, fields);
    }
    async getRetentionPolicies(options: GetRetentionPoliciesOptionsArg = {} satisfies GetRetentionPoliciesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies") as string, { method: "GET", params: { ["policy_name"]: options.policyName, ["policy_type"]: options.policyType, ["created_by_user_id"]: options.createdByUserId, ["fields"]: options.fields, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicies(deserializeJSON(response.text) as JSON);
    }
    async postRetentionPolicies(requestBody: PostRetentionPoliciesRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicy(deserializeJSON(response.text) as JSON);
    }
    async getRetentionPoliciesId(retentionPolicyId: string, options: GetRetentionPoliciesIdOptionsArg = {} satisfies GetRetentionPoliciesIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicy(deserializeJSON(response.text) as JSON);
    }
    async putRetentionPoliciesId(retentionPolicyId: string, requestBody: PutRetentionPoliciesIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicy(deserializeJSON(response.text) as JSON);
    }
    async deleteRetentionPoliciesId(retentionPolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
