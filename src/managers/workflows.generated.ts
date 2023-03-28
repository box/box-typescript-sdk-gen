import { Workflows } from "../schemas.generated.js";
import { deserializeWorkflows } from "../schemas.generated.js";
import { serializeWorkflows } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type WorkflowsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetWorkflowsOptionsArg {
    readonly triggerType?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export type PostWorkflowsIdStartRequestBodyArgTypeField = "workflow_parameters";
export interface PostWorkflowsIdStartRequestBodyArgFlowField {
    readonly type?: string;
    readonly id?: string;
}
export type PostWorkflowsIdStartRequestBodyArgFilesFieldTypeField = "file";
export interface PostWorkflowsIdStartRequestBodyArgFilesField {
    readonly type?: PostWorkflowsIdStartRequestBodyArgFilesFieldTypeField;
    readonly id?: string;
}
export type PostWorkflowsIdStartRequestBodyArgFolderFieldTypeField = "folder";
export interface PostWorkflowsIdStartRequestBodyArgFolderField {
    readonly type?: PostWorkflowsIdStartRequestBodyArgFolderFieldTypeField;
    readonly id?: string;
}
export type PostWorkflowsIdStartRequestBodyArgOutcomesFieldTypeField = "outcome";
export interface PostWorkflowsIdStartRequestBodyArgOutcomesField {
    readonly id?: string;
    readonly type?: PostWorkflowsIdStartRequestBodyArgOutcomesFieldTypeField;
    readonly parameter?: string;
}
export interface PostWorkflowsIdStartRequestBodyArg {
    readonly type?: PostWorkflowsIdStartRequestBodyArgTypeField;
    readonly flow: PostWorkflowsIdStartRequestBodyArgFlowField;
    readonly files: readonly PostWorkflowsIdStartRequestBodyArgFilesField[];
    readonly folder: PostWorkflowsIdStartRequestBodyArgFolderField;
    readonly outcomes?: readonly PostWorkflowsIdStartRequestBodyArgOutcomesField[];
}
export class WorkflowsManager {
    readonly auth!: WorkflowsManagerAuthField;
    constructor(fields: Omit<WorkflowsManager, "getWorkflows" | "postWorkflowsIdStart">) {
        Object.assign(this, fields);
    }
    async getWorkflows(folderId: string, options: GetWorkflowsOptionsArg = {} satisfies GetWorkflowsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/workflows") as string, { method: "GET", params: { ["folder_id"]: folderId, ["trigger_type"]: options.triggerType, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeWorkflows(deserializeJSON(response.text) as JSON);
    }
    async postWorkflowsIdStart(workflowId: string, requestBody: PostWorkflowsIdStartRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/workflows/", workflowId, "/start") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
