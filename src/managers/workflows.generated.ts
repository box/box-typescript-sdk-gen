import { newSerializeWorkflows } from "../schemas.generated.js";
import { newDeserializeWorkflows } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { Workflows } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/workflows") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWorkflows(deserializeJson(response.text));
    }
    async createWorkflowStart(workflowId: string, requestBody: CreateWorkflowStartRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/workflows/", workflowId, "/start") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeGetWorkflowsQueryParamsArg(val: GetWorkflowsQueryParamsArg): Json {
    return { ["folderId"]: val.folderId, ["triggerType"]: val.triggerType, ["limit"]: val.limit, ["marker"]: val.marker };
}
export function newDeserializeGetWorkflowsQueryParamsArg(val: any): GetWorkflowsQueryParamsArg {
    const folderId: string = val.folderId;
    const triggerType: undefined | string = isJson(val.triggerType, "string") ? val.triggerType : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    return { folderId: folderId, triggerType: triggerType, limit: limit, marker: marker } satisfies GetWorkflowsQueryParamsArg;
}
export function newSerializeCreateWorkflowStartRequestBodyArgTypeField(val: CreateWorkflowStartRequestBodyArgTypeField): Json {
    return val;
}
export function newDeserializeCreateWorkflowStartRequestBodyArgTypeField(val: any): CreateWorkflowStartRequestBodyArgTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgTypeField\"";
    }
    if (val == "workflow_parameters") {
        return "workflow_parameters";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateWorkflowStartRequestBodyArgFlowField(val: CreateWorkflowStartRequestBodyArgFlowField): Json {
    return { ["type"]: val.type, ["id"]: val.id };
}
export function newDeserializeCreateWorkflowStartRequestBodyArgFlowField(val: any): CreateWorkflowStartRequestBodyArgFlowField {
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies CreateWorkflowStartRequestBodyArgFlowField;
}
export function newSerializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val: CreateWorkflowStartRequestBodyArgFilesFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgFilesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgFilesFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateWorkflowStartRequestBodyArgFilesField(val: CreateWorkflowStartRequestBodyArgFilesField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeCreateWorkflowStartRequestBodyArgFilesField(val: any): CreateWorkflowStartRequestBodyArgFilesField {
    const type: undefined | CreateWorkflowStartRequestBodyArgFilesFieldTypeField = val.type == void 0 ? void 0 : newDeserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies CreateWorkflowStartRequestBodyArgFilesField;
}
export function newSerializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val: CreateWorkflowStartRequestBodyArgFolderFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgFolderFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgFolderFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateWorkflowStartRequestBodyArgFolderField(val: CreateWorkflowStartRequestBodyArgFolderField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeCreateWorkflowStartRequestBodyArgFolderField(val: any): CreateWorkflowStartRequestBodyArgFolderField {
    const type: undefined | CreateWorkflowStartRequestBodyArgFolderFieldTypeField = val.type == void 0 ? void 0 : newDeserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies CreateWorkflowStartRequestBodyArgFolderField;
}
export function newSerializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val: CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField\"";
    }
    if (val == "outcome") {
        return "outcome";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateWorkflowStartRequestBodyArgOutcomesField(val: CreateWorkflowStartRequestBodyArgOutcomesField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val.type), ["parameter"]: val.parameter };
}
export function newDeserializeCreateWorkflowStartRequestBodyArgOutcomesField(val: any): CreateWorkflowStartRequestBodyArgOutcomesField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = val.type == void 0 ? void 0 : newDeserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val.type);
    const parameter: undefined | string = isJson(val.parameter, "string") ? val.parameter : void 0;
    return { id: id, type: type, parameter: parameter } satisfies CreateWorkflowStartRequestBodyArgOutcomesField;
}
export function newSerializeCreateWorkflowStartRequestBodyArg(val: CreateWorkflowStartRequestBodyArg): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeCreateWorkflowStartRequestBodyArgTypeField(val.type), ["flow"]: newSerializeCreateWorkflowStartRequestBodyArgFlowField(val.flow), ["files"]: val.files.map(function (item: CreateWorkflowStartRequestBodyArgFilesField): any {
            return newSerializeCreateWorkflowStartRequestBodyArgFilesField(item);
        }) as readonly any[], ["folder"]: newSerializeCreateWorkflowStartRequestBodyArgFolderField(val.folder), ["outcomes"]: val.outcomes == void 0 ? void 0 : val.outcomes.map(function (item: CreateWorkflowStartRequestBodyArgOutcomesField): any {
            return newSerializeCreateWorkflowStartRequestBodyArgOutcomesField(item);
        }) as readonly any[] };
}
export function newDeserializeCreateWorkflowStartRequestBodyArg(val: any): CreateWorkflowStartRequestBodyArg {
    const type: undefined | CreateWorkflowStartRequestBodyArgTypeField = val.type == void 0 ? void 0 : newDeserializeCreateWorkflowStartRequestBodyArgTypeField(val.type);
    const flow: CreateWorkflowStartRequestBodyArgFlowField = newDeserializeCreateWorkflowStartRequestBodyArgFlowField(val.flow);
    const files: readonly CreateWorkflowStartRequestBodyArgFilesField[] = val.files.map(function (itm: Json): any {
        return newDeserializeCreateWorkflowStartRequestBodyArgFilesField(itm);
    }) as readonly any[];
    const folder: CreateWorkflowStartRequestBodyArgFolderField = newDeserializeCreateWorkflowStartRequestBodyArgFolderField(val.folder);
    const outcomes: undefined | readonly CreateWorkflowStartRequestBodyArgOutcomesField[] = isJson(val.outcomes, "array") ? val.outcomes.map(function (itm: Json): any {
        return newDeserializeCreateWorkflowStartRequestBodyArgOutcomesField(itm);
    }) as readonly any[] : void 0;
    return { type: type, flow: flow, files: files, folder: folder, outcomes: outcomes } satisfies CreateWorkflowStartRequestBodyArg;
}
