import { serializeRetentionPolicyAssignments } from "../schemas.generated.js";
import { deserializeRetentionPolicyAssignments } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeRetentionPolicyAssignment } from "../schemas.generated.js";
import { deserializeRetentionPolicyAssignment } from "../schemas.generated.js";
import { serializeFilesUnderRetention } from "../schemas.generated.js";
import { deserializeFilesUnderRetention } from "../schemas.generated.js";
import { RetentionPolicyAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { RetentionPolicyAssignment } from "../schemas.generated.js";
import { FilesUnderRetention } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export type GetRetentionPolicyAssignmentsQueryParamsArgTypeField = "folder" | "enterprise" | "metadata_template";
export interface GetRetentionPolicyAssignmentsQueryParamsArg {
    readonly type?: GetRetentionPolicyAssignmentsQueryParamsArgTypeField;
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = "enterprise" | "folder" | "metadata_template";
export interface CreateRetentionPolicyAssignmentRequestBodyArgAssignToField {
    readonly type: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
    readonly id: string;
}
export interface CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField {
    readonly field?: string;
    readonly value?: string;
}
export interface CreateRetentionPolicyAssignmentRequestBodyArg {
    readonly policyId: string;
    readonly assignTo: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
    readonly filterFields?: readonly CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField[];
    readonly startDateField?: string;
}
export interface GetRetentionPolicyAssignmentByIdQueryParamsArg {
    readonly fields?: string;
}
export interface GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class RetentionPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RetentionPolicyAssignmentsManager, "getRetentionPolicyAssignments" | "createRetentionPolicyAssignment" | "getRetentionPolicyAssignmentById" | "deleteRetentionPolicyAssignmentById" | "getRetentionPolicyAssignmentFileUnderRetention" | "getRetentionPolicyAssignmentFileVersionUnderRetention">) {
        Object.assign(this, fields);
    }
    async getRetentionPolicyAssignments(retentionPolicyId: string, queryParams: undefined | GetRetentionPolicyAssignmentsQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentsQueryParamsArg): Promise<RetentionPolicyAssignments> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId, "/assignments") as string, { method: "GET", params: prepareParams(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicyAssignments(deserializeJson(response.text));
    }
    async createRetentionPolicyAssignment(requestBody: CreateRetentionPolicyAssignmentRequestBodyArg): Promise<RetentionPolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicyAssignment(deserializeJson(response.text));
    }
    async getRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, queryParams: undefined | GetRetentionPolicyAssignmentByIdQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentByIdQueryParamsArg): Promise<RetentionPolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId) as string, { method: "GET", params: prepareParams(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeRetentionPolicyAssignment(deserializeJson(response.text));
    }
    async deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getRetentionPolicyAssignmentFileUnderRetention(retentionPolicyAssignmentId: string, queryParams: undefined | GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg): Promise<FilesUnderRetention> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/files_under_retention") as string, { method: "GET", params: prepareParams(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFilesUnderRetention(deserializeJson(response.text));
    }
    async getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId: string, queryParams: undefined | GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg): Promise<FilesUnderRetention> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/file_versions_under_retention") as string, { method: "GET", params: prepareParams(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFilesUnderRetention(deserializeJson(response.text));
    }
}
export function serializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val: GetRetentionPolicyAssignmentsQueryParamsArgTypeField): Json {
    return val;
}
export function deserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val: any): GetRetentionPolicyAssignmentsQueryParamsArgTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetRetentionPolicyAssignmentsQueryParamsArgTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    if (val == "metadata_template") {
        return "metadata_template";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetRetentionPolicyAssignmentsQueryParamsArg(val: GetRetentionPolicyAssignmentsQueryParamsArg): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val.type), ["fields"]: val.fields, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetRetentionPolicyAssignmentsQueryParamsArg(val: any): GetRetentionPolicyAssignmentsQueryParamsArg {
    const type: undefined | GetRetentionPolicyAssignmentsQueryParamsArgTypeField = val.type == void 0 ? void 0 : deserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val.type);
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { type: type, fields: fields, marker: marker, limit: limit } satisfies GetRetentionPolicyAssignmentsQueryParamsArg;
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField): Json {
    return val;
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "metadata_template") {
        return "metadata_template";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField): Json {
    return { ["type"]: serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgAssignToField {
    const type: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val: CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField): Json {
    return { ["field"]: val.field, ["value"]: val.value };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField {
    const field: undefined | string = isJson(val.field, "string") ? val.field : void 0;
    const value: undefined | string = isJson(val.value, "string") ? val.value : void 0;
    return { field: field, value: value } satisfies CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyArg(val: CreateRetentionPolicyAssignmentRequestBodyArg): Json {
    return { ["policyId"]: val.policyId, ["assignTo"]: serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val.assignTo), ["filterFields"]: val.filterFields == void 0 ? void 0 : val.filterFields.map(function (item: CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField): any {
            return serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(item);
        }) as readonly any[], ["startDateField"]: val.startDateField };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyArg(val: any): CreateRetentionPolicyAssignmentRequestBodyArg {
    const policyId: string = val.policyId;
    const assignTo: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField = deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val.assignTo);
    const filterFields: undefined | readonly CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField[] = isJson(val.filterFields, "array") ? val.filterFields.map(function (itm: Json): any {
        return deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(itm);
    }) as readonly any[] : void 0;
    const startDateField: undefined | string = isJson(val.startDateField, "string") ? val.startDateField : void 0;
    return { policyId: policyId, assignTo: assignTo, filterFields: filterFields, startDateField: startDateField } satisfies CreateRetentionPolicyAssignmentRequestBodyArg;
}
export function serializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val: GetRetentionPolicyAssignmentByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val: any): GetRetentionPolicyAssignmentByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetRetentionPolicyAssignmentByIdQueryParamsArg;
}
export function serializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val: GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val: any): GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg;
}
export function serializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val: GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val: any): GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg;
}
