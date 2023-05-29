import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
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
export declare class WorkflowsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<WorkflowsManager, "getWorkflows" | "createWorkflowStart">);
    getWorkflows(folderId: string, options?: GetWorkflowsOptionsArg): Promise<any>;
    createWorkflowStart(workflowId: string, requestBody: CreateWorkflowStartRequestBodyArg): Promise<any>;
}
