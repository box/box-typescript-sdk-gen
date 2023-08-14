import { serializeRetentionPolicies } from "../schemas.generated.js";
import { deserializeRetentionPolicies } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeRetentionPolicy } from "../schemas.generated.js";
import { deserializeRetentionPolicy } from "../schemas.generated.js";
import { serializeUserMini } from "../schemas.generated.js";
import { deserializeUserMini } from "../schemas.generated.js";
import { RetentionPolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { RetentionPolicy } from "../schemas.generated.js";
import { UserMini } from "../schemas.generated.js";
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
export type GetRetentionPoliciesQueryParamsArgPolicyTypeField = "finite" | "indefinite";
export interface GetRetentionPoliciesQueryParamsArg {
    readonly policyName?: string;
    readonly policyType?: GetRetentionPoliciesQueryParamsArgPolicyTypeField;
    readonly createdByUserId?: string;
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export class GetRetentionPoliciesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetRetentionPoliciesHeadersArg) {
        Object.assign(this, fields);
    }
}
export type CreateRetentionPolicyRequestBodyArgPolicyTypeField = "finite" | "indefinite";
export type CreateRetentionPolicyRequestBodyArgDispositionActionField = "permanently_delete" | "remove_retention";
export type CreateRetentionPolicyRequestBodyArgRetentionTypeField = "modifiable" | "non-modifiable";
export interface CreateRetentionPolicyRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly policyType: CreateRetentionPolicyRequestBodyArgPolicyTypeField;
    readonly dispositionAction: CreateRetentionPolicyRequestBodyArgDispositionActionField;
    readonly retentionLength?: string;
    readonly retentionType?: CreateRetentionPolicyRequestBodyArgRetentionTypeField;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export class CreateRetentionPolicyHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateRetentionPolicyHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface GetRetentionPolicyByIdQueryParamsArg {
    readonly fields?: string;
}
export class GetRetentionPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetRetentionPolicyByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export type UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = "permanently_delete" | "remove_retention";
export interface UpdateRetentionPolicyByIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly dispositionAction?: UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField;
    readonly retentionType?: string;
    readonly retentionLength?: string;
    readonly status?: string;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export class UpdateRetentionPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateRetentionPolicyByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteRetentionPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteRetentionPolicyByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class RetentionPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RetentionPoliciesManager, "getRetentionPolicies" | "createRetentionPolicy" | "getRetentionPolicyById" | "updateRetentionPolicyById" | "deleteRetentionPolicyById">) {
        Object.assign(this, fields);
    }
    async getRetentionPolicies(queryParams: GetRetentionPoliciesQueryParamsArg = {} satisfies GetRetentionPoliciesQueryParamsArg, headers: GetRetentionPoliciesHeadersArg = new GetRetentionPoliciesHeadersArg({})): Promise<RetentionPolicies> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["policy_name"]: toString(queryParams.policyName), ["policy_type"]: toString(queryParams.policyType), ["created_by_user_id"]: toString(queryParams.createdByUserId), ["fields"]: toString(queryParams.fields), ["limit"]: toString(queryParams.limit), ["marker"]: toString(queryParams.marker) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicies(deserializeJson(response.text));
    }
    async createRetentionPolicy(requestBody: CreateRetentionPolicyRequestBodyArg, headers: CreateRetentionPolicyHeadersArg = new CreateRetentionPolicyHeadersArg({})): Promise<RetentionPolicy> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateRetentionPolicyRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicy(deserializeJson(response.text));
    }
    async getRetentionPolicyById(retentionPolicyId: string, queryParams: GetRetentionPolicyByIdQueryParamsArg = {} satisfies GetRetentionPolicyByIdQueryParamsArg, headers: GetRetentionPolicyByIdHeadersArg = new GetRetentionPolicyByIdHeadersArg({})): Promise<RetentionPolicy> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId) as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicy(deserializeJson(response.text));
    }
    async updateRetentionPolicyById(retentionPolicyId: string, requestBody: UpdateRetentionPolicyByIdRequestBodyArg = {} satisfies UpdateRetentionPolicyByIdRequestBodyArg, headers: UpdateRetentionPolicyByIdHeadersArg = new UpdateRetentionPolicyByIdHeadersArg({})): Promise<RetentionPolicy> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId) as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeUpdateRetentionPolicyByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicy(deserializeJson(response.text));
    }
    async deleteRetentionPolicyById(retentionPolicyId: string, headers: DeleteRetentionPolicyByIdHeadersArg = new DeleteRetentionPolicyByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val: CreateRetentionPolicyRequestBodyArgPolicyTypeField): Json {
    return val;
}
export function deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val: any): CreateRetentionPolicyRequestBodyArgPolicyTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyRequestBodyArgPolicyTypeField\"";
    }
    if (val == "finite") {
        return "finite";
    }
    if (val == "indefinite") {
        return "indefinite";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val: CreateRetentionPolicyRequestBodyArgDispositionActionField): Json {
    return val;
}
export function deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val: any): CreateRetentionPolicyRequestBodyArgDispositionActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyRequestBodyArgDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val: CreateRetentionPolicyRequestBodyArgRetentionTypeField): Json {
    return val;
}
export function deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val: any): CreateRetentionPolicyRequestBodyArgRetentionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyRequestBodyArgRetentionTypeField\"";
    }
    if (val == "modifiable") {
        return "modifiable";
    }
    if (val == "non-modifiable") {
        return "non-modifiable";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateRetentionPolicyRequestBodyArg(val: CreateRetentionPolicyRequestBodyArg): Json {
    return { ["policy_name"]: val.policyName, ["description"]: val.description == void 0 ? void 0 : val.description, ["policy_type"]: serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val.policyType), ["disposition_action"]: serializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val.dispositionAction), ["retention_length"]: val.retentionLength == void 0 ? void 0 : val.retentionLength, ["retention_type"]: val.retentionType == void 0 ? void 0 : serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val.retentionType), ["can_owner_extend_retention"]: val.canOwnerExtendRetention == void 0 ? void 0 : val.canOwnerExtendRetention, ["are_owners_notified"]: val.areOwnersNotified == void 0 ? void 0 : val.areOwnersNotified, ["custom_notification_recipients"]: val.customNotificationRecipients == void 0 ? void 0 : val.customNotificationRecipients.map(function (item: UserMini): any {
            return serializeUserMini(item);
        }) as readonly any[] };
}
export function deserializeCreateRetentionPolicyRequestBodyArg(val: any): CreateRetentionPolicyRequestBodyArg {
    const policyName: string = val.policy_name;
    const description: undefined | string = val.description == void 0 ? void 0 : val.description;
    const policyType: CreateRetentionPolicyRequestBodyArgPolicyTypeField = deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val.policy_type);
    const dispositionAction: CreateRetentionPolicyRequestBodyArgDispositionActionField = deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val.disposition_action);
    const retentionLength: undefined | string = val.retention_length == void 0 ? void 0 : val.retention_length;
    const retentionType: undefined | CreateRetentionPolicyRequestBodyArgRetentionTypeField = val.retention_type == void 0 ? void 0 : deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val.retention_type);
    const canOwnerExtendRetention: undefined | boolean = val.can_owner_extend_retention == void 0 ? void 0 : val.can_owner_extend_retention;
    const areOwnersNotified: undefined | boolean = val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
    const customNotificationRecipients: undefined | readonly UserMini[] = val.custom_notification_recipients == void 0 ? void 0 : isJson(val.custom_notification_recipients, "array") ? val.custom_notification_recipients.map(function (itm: Json): any {
        return deserializeUserMini(itm);
    }) as readonly any[] : [];
    return { policyName: policyName, description: description, policyType: policyType, dispositionAction: dispositionAction, retentionLength: retentionLength, retentionType: retentionType, canOwnerExtendRetention: canOwnerExtendRetention, areOwnersNotified: areOwnersNotified, customNotificationRecipients: customNotificationRecipients } satisfies CreateRetentionPolicyRequestBodyArg;
}
export function serializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val: UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField): Json {
    return val;
}
export function deserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val: any): UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateRetentionPolicyByIdRequestBodyArg(val: UpdateRetentionPolicyByIdRequestBodyArg): Json {
    return { ["policy_name"]: val.policyName == void 0 ? void 0 : val.policyName, ["description"]: val.description == void 0 ? void 0 : val.description, ["disposition_action"]: val.dispositionAction == void 0 ? void 0 : serializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val.dispositionAction), ["retention_type"]: val.retentionType == void 0 ? void 0 : val.retentionType, ["retention_length"]: val.retentionLength == void 0 ? void 0 : val.retentionLength, ["status"]: val.status == void 0 ? void 0 : val.status, ["can_owner_extend_retention"]: val.canOwnerExtendRetention == void 0 ? void 0 : val.canOwnerExtendRetention, ["are_owners_notified"]: val.areOwnersNotified == void 0 ? void 0 : val.areOwnersNotified, ["custom_notification_recipients"]: val.customNotificationRecipients == void 0 ? void 0 : val.customNotificationRecipients.map(function (item: UserMini): any {
            return serializeUserMini(item);
        }) as readonly any[] };
}
export function deserializeUpdateRetentionPolicyByIdRequestBodyArg(val: any): UpdateRetentionPolicyByIdRequestBodyArg {
    const policyName: undefined | string = val.policy_name == void 0 ? void 0 : val.policy_name;
    const description: undefined | string = val.description == void 0 ? void 0 : val.description;
    const dispositionAction: undefined | UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = val.disposition_action == void 0 ? void 0 : deserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val.disposition_action);
    const retentionType: undefined | string = val.retention_type == void 0 ? void 0 : val.retention_type;
    const retentionLength: undefined | string = val.retention_length == void 0 ? void 0 : val.retention_length;
    const status: undefined | string = val.status == void 0 ? void 0 : val.status;
    const canOwnerExtendRetention: undefined | boolean = val.can_owner_extend_retention == void 0 ? void 0 : val.can_owner_extend_retention;
    const areOwnersNotified: undefined | boolean = val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
    const customNotificationRecipients: undefined | readonly UserMini[] = val.custom_notification_recipients == void 0 ? void 0 : isJson(val.custom_notification_recipients, "array") ? val.custom_notification_recipients.map(function (itm: Json): any {
        return deserializeUserMini(itm);
    }) as readonly any[] : [];
    return { policyName: policyName, description: description, dispositionAction: dispositionAction, retentionType: retentionType, retentionLength: retentionLength, status: status, canOwnerExtendRetention: canOwnerExtendRetention, areOwnersNotified: areOwnersNotified, customNotificationRecipients: customNotificationRecipients } satisfies UpdateRetentionPolicyByIdRequestBodyArg;
}
