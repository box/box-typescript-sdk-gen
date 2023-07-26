import { serializeWorkflows } from "../schemas.generated.js";
import { deserializeWorkflows } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { Workflows } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface GetWorkflowsQueryParamsArg {
    readonly folderId: string;
    readonly triggerType?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export type CreateWorkflowStartRequestBodyArgTypeField = "workflow_parameters";
export interface CreateWorkflowStartRequestBodyArgFlowField {
    readonly type?: string;
    readonly id?: string;
}
export type CreateWorkflowStartRequestBodyArgFilesFieldTypeField = "file";
export interface CreateWorkflowStartRequestBodyArgFilesField {
    readonly type?: CreateWorkflowStartRequestBodyArgFilesFieldTypeField;
    readonly id?: string;
}
export type CreateWorkflowStartRequestBodyArgFolderFieldTypeField = "folder";
export interface CreateWorkflowStartRequestBodyArgFolderField {
    readonly type?: CreateWorkflowStartRequestBodyArgFolderFieldTypeField;
    readonly id?: string;
}
export type CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = "outcome";
export interface CreateWorkflowStartRequestBodyArgOutcomesField {
    readonly id?: string;
    readonly type?: CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField;
    readonly parameter?: string;
}
export interface CreateWorkflowStartRequestBodyArg {
    readonly type?: CreateWorkflowStartRequestBodyArgTypeField;
    readonly flow: CreateWorkflowStartRequestBodyArgFlowField;
    readonly files: readonly CreateWorkflowStartRequestBodyArgFilesField[];
    readonly folder: CreateWorkflowStartRequestBodyArgFolderField;
    readonly outcomes?: readonly CreateWorkflowStartRequestBodyArgOutcomesField[];
}
export class WorkflowsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<WorkflowsManager, "getWorkflows" | "createWorkflowStart">) {
        Object.assign(this, fields);
    }
    async getWorkflows(queryParams: GetWorkflowsQueryParamsArg): Promise<Workflows> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/workflows") as string, { method: "GET", params: prepareParams(serializeGetWorkflowsQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWorkflows(deserializeJson(response.text));
    }
    async createWorkflowStart(workflowId: string, requestBody: CreateWorkflowStartRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/workflows/", workflowId, "/start") as string, { method: "POST", body: serializeJson(serializeCreateWorkflowStartRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetWorkflowsQueryParamsArg(val: GetWorkflowsQueryParamsArg): Json {
    return { ["folder_id"]: val.folderId, ["trigger_type"]: val.triggerType, ["limit"]: val.limit, ["marker"]: val.marker };
}
export function deserializeGetWorkflowsQueryParamsArg(val: any): GetWorkflowsQueryParamsArg {
    const folderId: string = val.folder_id;
    const triggerType: undefined | string = isJson(val.trigger_type, "string") ? val.trigger_type : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    return { folderId: folderId, triggerType: triggerType, limit: limit, marker: marker } satisfies GetWorkflowsQueryParamsArg;
}
export function serializeCreateWorkflowStartRequestBodyArgTypeField(val: CreateWorkflowStartRequestBodyArgTypeField): Json {
    return val;
}
export function deserializeCreateWorkflowStartRequestBodyArgTypeField(val: any): CreateWorkflowStartRequestBodyArgTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgTypeField\"";
    }
    if (val == "workflow_parameters") {
        return "workflow_parameters";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateWorkflowStartRequestBodyArgFlowField(val: CreateWorkflowStartRequestBodyArgFlowField): Json {
    return { ["type"]: val.type, ["id"]: val.id };
}
export function deserializeCreateWorkflowStartRequestBodyArgFlowField(val: any): CreateWorkflowStartRequestBodyArgFlowField {
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies CreateWorkflowStartRequestBodyArgFlowField;
}
export function serializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val: CreateWorkflowStartRequestBodyArgFilesFieldTypeField): Json {
    return val;
}
export function deserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgFilesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgFilesFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateWorkflowStartRequestBodyArgFilesField(val: CreateWorkflowStartRequestBodyArgFilesField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeCreateWorkflowStartRequestBodyArgFilesField(val: any): CreateWorkflowStartRequestBodyArgFilesField {
    const type: undefined | CreateWorkflowStartRequestBodyArgFilesFieldTypeField = val.type == void 0 ? void 0 : deserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies CreateWorkflowStartRequestBodyArgFilesField;
}
export function serializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val: CreateWorkflowStartRequestBodyArgFolderFieldTypeField): Json {
    return val;
}
export function deserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgFolderFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgFolderFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateWorkflowStartRequestBodyArgFolderField(val: CreateWorkflowStartRequestBodyArgFolderField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeCreateWorkflowStartRequestBodyArgFolderField(val: any): CreateWorkflowStartRequestBodyArgFolderField {
    const type: undefined | CreateWorkflowStartRequestBodyArgFolderFieldTypeField = val.type == void 0 ? void 0 : deserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies CreateWorkflowStartRequestBodyArgFolderField;
}
export function serializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val: CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField): Json {
    return val;
}
export function deserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField\"";
    }
    if (val == "outcome") {
        return "outcome";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateWorkflowStartRequestBodyArgOutcomesField(val: CreateWorkflowStartRequestBodyArgOutcomesField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val.type), ["parameter"]: val.parameter };
}
export function deserializeCreateWorkflowStartRequestBodyArgOutcomesField(val: any): CreateWorkflowStartRequestBodyArgOutcomesField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = val.type == void 0 ? void 0 : deserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val.type);
    const parameter: undefined | string = isJson(val.parameter, "string") ? val.parameter : void 0;
    return { id: id, type: type, parameter: parameter } satisfies CreateWorkflowStartRequestBodyArgOutcomesField;
}
export function serializeCreateWorkflowStartRequestBodyArg(val: CreateWorkflowStartRequestBodyArg): Json {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateWorkflowStartRequestBodyArgTypeField(val.type), ["flow"]: serializeCreateWorkflowStartRequestBodyArgFlowField(val.flow), ["files"]: val.files.map(function (item: CreateWorkflowStartRequestBodyArgFilesField): any {
            return serializeCreateWorkflowStartRequestBodyArgFilesField(item);
        }) as readonly any[], ["folder"]: serializeCreateWorkflowStartRequestBodyArgFolderField(val.folder), ["outcomes"]: val.outcomes == void 0 ? void 0 : val.outcomes.map(function (item: CreateWorkflowStartRequestBodyArgOutcomesField): any {
            return serializeCreateWorkflowStartRequestBodyArgOutcomesField(item);
        }) as readonly any[] };
}
export function deserializeCreateWorkflowStartRequestBodyArg(val: any): CreateWorkflowStartRequestBodyArg {
    const type: undefined | CreateWorkflowStartRequestBodyArgTypeField = val.type == void 0 ? void 0 : deserializeCreateWorkflowStartRequestBodyArgTypeField(val.type);
    const flow: CreateWorkflowStartRequestBodyArgFlowField = deserializeCreateWorkflowStartRequestBodyArgFlowField(val.flow);
    const files: readonly CreateWorkflowStartRequestBodyArgFilesField[] = val.files.map(function (itm: Json): any {
        return deserializeCreateWorkflowStartRequestBodyArgFilesField(itm);
    }) as readonly any[];
    const folder: CreateWorkflowStartRequestBodyArgFolderField = deserializeCreateWorkflowStartRequestBodyArgFolderField(val.folder);
    const outcomes: undefined | readonly CreateWorkflowStartRequestBodyArgOutcomesField[] = isJson(val.outcomes, "array") ? val.outcomes.map(function (itm: Json): any {
        return deserializeCreateWorkflowStartRequestBodyArgOutcomesField(itm);
    }) as readonly any[] : void 0;
    return { type: type, flow: flow, files: files, folder: folder, outcomes: outcomes } satisfies CreateWorkflowStartRequestBodyArg;
}
