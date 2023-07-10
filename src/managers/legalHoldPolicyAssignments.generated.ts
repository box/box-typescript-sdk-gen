import { serializeLegalHoldPolicyAssignments } from "../schemas.generated.js";
import { deserializeLegalHoldPolicyAssignments } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeLegalHoldPolicyAssignment } from "../schemas.generated.js";
import { deserializeLegalHoldPolicyAssignment } from "../schemas.generated.js";
import { serializeFileVersionLegalHolds } from "../schemas.generated.js";
import { deserializeFileVersionLegalHolds } from "../schemas.generated.js";
import { LegalHoldPolicyAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { LegalHoldPolicyAssignment } from "../schemas.generated.js";
import { FileVersionLegalHolds } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export type GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = "file" | "file_version" | "folder" | "user";
export interface GetLegalHoldPolicyAssignmentsQueryParamsArg {
    readonly policyId: string;
    readonly assignToType?: GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField;
    readonly assignToId?: string;
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export type CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = "file" | "file_version" | "folder" | "user";
export interface CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField {
    readonly type: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
    readonly id: string;
}
export interface CreateLegalHoldPolicyAssignmentRequestBodyArg {
    readonly policyId: string;
    readonly assignTo: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
}
export interface GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export interface GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
    readonly fields?: string;
}
export class LegalHoldPolicyAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<LegalHoldPolicyAssignmentsManager, "getLegalHoldPolicyAssignments" | "createLegalHoldPolicyAssignment" | "getLegalHoldPolicyAssignmentById" | "deleteLegalHoldPolicyAssignmentById" | "getLegalHoldPolicyAssignmentFileOnHold" | "getLegalHoldPolicyAssignmentFileVersionOnHold">) {
        Object.assign(this, fields);
    }
    async getLegalHoldPolicyAssignments(queryParams: GetLegalHoldPolicyAssignmentsQueryParamsArg): Promise<LegalHoldPolicyAssignments> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicyAssignments(deserializeJson(response.text));
    }
    async createLegalHoldPolicyAssignment(requestBody: CreateLegalHoldPolicyAssignmentRequestBodyArg): Promise<LegalHoldPolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicyAssignment(deserializeJson(response.text));
    }
    async getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string): Promise<LegalHoldPolicyAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeLegalHoldPolicyAssignment(deserializeJson(response.text));
    }
    async deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId: string, queryParams: undefined | GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg = {} satisfies GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg): Promise<FileVersionLegalHolds> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/files_on_hold") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionLegalHolds(deserializeJson(response.text));
    }
    async getLegalHoldPolicyAssignmentFileVersionOnHold(legalHoldPolicyAssignmentId: string, queryParams: undefined | GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg = {} satisfies GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg): Promise<FileVersionLegalHolds> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/file_versions_on_hold") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionLegalHolds(deserializeJson(response.text));
    }
}
export function serializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val: GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField): Json {
    return val;
}
export function deserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val: any): GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "file_version") {
        return "file_version";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetLegalHoldPolicyAssignmentsQueryParamsArg(val: GetLegalHoldPolicyAssignmentsQueryParamsArg): Json {
    return { ["policyId"]: val.policyId, ["assignToType"]: val.assignToType == void 0 ? void 0 : serializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val.assignToType), ["assignToId"]: val.assignToId, ["marker"]: val.marker, ["limit"]: val.limit, ["fields"]: val.fields };
}
export function deserializeGetLegalHoldPolicyAssignmentsQueryParamsArg(val: any): GetLegalHoldPolicyAssignmentsQueryParamsArg {
    const policyId: string = val.policyId;
    const assignToType: undefined | GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = val.assignToType == void 0 ? void 0 : deserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val.assignToType);
    const assignToId: undefined | string = isJson(val.assignToId, "string") ? val.assignToId : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { policyId: policyId, assignToType: assignToType, assignToId: assignToId, marker: marker, limit: limit, fields: fields } satisfies GetLegalHoldPolicyAssignmentsQueryParamsArg;
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField): Json {
    return val;
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val: any): CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "file_version") {
        return "file_version";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField): Json {
    return { ["type"]: serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val: any): CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField {
    const type: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyArg(val: CreateLegalHoldPolicyAssignmentRequestBodyArg): Json {
    return { ["policyId"]: val.policyId, ["assignTo"]: serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val.assignTo) };
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArg(val: any): CreateLegalHoldPolicyAssignmentRequestBodyArg {
    const policyId: string = val.policyId;
    const assignTo: CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val.assignTo);
    return { policyId: policyId, assignTo: assignTo } satisfies CreateLegalHoldPolicyAssignmentRequestBodyArg;
}
export function serializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg(val: GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit, ["fields"]: val.fields };
}
export function deserializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg(val: any): GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { marker: marker, limit: limit, fields: fields } satisfies GetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg;
}
export function serializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg(val: GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit, ["fields"]: val.fields };
}
export function deserializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg(val: any): GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { marker: marker, limit: limit, fields: fields } satisfies GetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg;
}
