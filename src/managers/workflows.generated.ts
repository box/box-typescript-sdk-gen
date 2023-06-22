import { Workflows } from "../schemas.generated.js";
import { deserializeWorkflows } from "../schemas.generated.js";
import { serializeWorkflows } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface GetWorkflowsOptionsArg {
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
    async getWorkflows(folderId: string, options: GetWorkflowsOptionsArg = {} satisfies GetWorkflowsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/workflows") as string, { method: "GET", params: { ["folder_id"]: folderId, ["trigger_type"]: options.triggerType, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWorkflows(deserializeJson(response.text));
    }
    async createWorkflowStart(workflowId: string, requestBody: CreateWorkflowStartRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/workflows/", workflowId, "/start") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
