import { newSerializeRetentionPolicyAssignments } from "../schemas.generated.js";
import { newDeserializeRetentionPolicyAssignments } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeRetentionPolicyAssignment } from "../schemas.generated.js";
import { newDeserializeRetentionPolicyAssignment } from "../schemas.generated.js";
import { newSerializeFilesUnderRetention } from "../schemas.generated.js";
import { newDeserializeFilesUnderRetention } from "../schemas.generated.js";
import { RetentionPolicyAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { RetentionPolicyAssignment } from "../schemas.generated.js";
import { FilesUnderRetention } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId, "/assignments") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeRetentionPolicyAssignments(deserializeJson(response.text));
    }
    async createRetentionPolicyAssignment(requestBody: CreateRetentionPolicyAssignmentRequestBodyArg): Promise<RetentionPolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeRetentionPolicyAssignment(deserializeJson(response.text));
    }
    async getRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string, queryParams: undefined | GetRetentionPolicyAssignmentByIdQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentByIdQueryParamsArg): Promise<RetentionPolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId) as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeRetentionPolicyAssignment(deserializeJson(response.text));
    }
    async deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getRetentionPolicyAssignmentFileUnderRetention(retentionPolicyAssignmentId: string, queryParams: undefined | GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg): Promise<FilesUnderRetention> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/files_under_retention") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFilesUnderRetention(deserializeJson(response.text));
    }
    async getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId: string, queryParams: undefined | GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = {} satisfies GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg): Promise<FilesUnderRetention> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/file_versions_under_retention") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFilesUnderRetention(deserializeJson(response.text));
    }
}
export function newSerializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val: GetRetentionPolicyAssignmentsQueryParamsArgTypeField): Json {
    return val;
}
export function newDeserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val: any): GetRetentionPolicyAssignmentsQueryParamsArgTypeField {
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
export function newSerializeGetRetentionPolicyAssignmentsQueryParamsArg(val: GetRetentionPolicyAssignmentsQueryParamsArg): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val.type), ["fields"]: val.fields, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function newDeserializeGetRetentionPolicyAssignmentsQueryParamsArg(val: any): GetRetentionPolicyAssignmentsQueryParamsArg {
    const type: undefined | GetRetentionPolicyAssignmentsQueryParamsArgTypeField = val.type == void 0 ? void 0 : newDeserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val.type);
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { type: type, fields: fields, marker: marker, limit: limit } satisfies GetRetentionPolicyAssignmentsQueryParamsArg;
}
export function newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField {
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
export function newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField): Json {
    return { ["type"]: newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgAssignToField {
    const type: CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
}
export function newSerializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val: CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField): Json {
    return { ["field"]: val.field, ["value"]: val.value };
}
export function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val: any): CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField {
    const field: undefined | string = isJson(val.field, "string") ? val.field : void 0;
    const value: undefined | string = isJson(val.value, "string") ? val.value : void 0;
    return { field: field, value: value } satisfies CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
}
export function newSerializeCreateRetentionPolicyAssignmentRequestBodyArg(val: CreateRetentionPolicyAssignmentRequestBodyArg): Json {
    return { ["policyId"]: val.policyId, ["assignTo"]: newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val.assignTo), ["filterFields"]: val.filterFields == void 0 ? void 0 : val.filterFields.map(function (item: CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField): any {
            return newSerializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(item);
        }) as readonly any[], ["startDateField"]: val.startDateField };
}
export function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArg(val: any): CreateRetentionPolicyAssignmentRequestBodyArg {
    const policyId: string = val.policyId;
    const assignTo: CreateRetentionPolicyAssignmentRequestBodyArgAssignToField = newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val.assignTo);
    const filterFields: undefined | readonly CreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField[] = isJson(val.filterFields, "array") ? val.filterFields.map(function (itm: Json): any {
        return newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(itm);
    }) as readonly any[] : void 0;
    const startDateField: undefined | string = isJson(val.startDateField, "string") ? val.startDateField : void 0;
    return { policyId: policyId, assignTo: assignTo, filterFields: filterFields, startDateField: startDateField } satisfies CreateRetentionPolicyAssignmentRequestBodyArg;
}
export function newSerializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val: GetRetentionPolicyAssignmentByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val: any): GetRetentionPolicyAssignmentByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetRetentionPolicyAssignmentByIdQueryParamsArg;
}
export function newSerializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val: GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function newDeserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val: any): GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg;
}
export function newSerializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val: GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function newDeserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val: any): GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg;
}
