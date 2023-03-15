import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type WorkflowsManagerAuthField = DeveloperTokenAuth | CcgAuth;
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
export declare class WorkflowsManager {
    readonly auth: WorkflowsManagerAuthField;
    constructor(fields: Omit<WorkflowsManager, "getWorkflows" | "postWorkflowsIdStart">);
    getWorkflows(folderId: string, options?: GetWorkflowsOptionsArg): Promise<any>;
    postWorkflowsIdStart(workflowId: string, requestBody: PostWorkflowsIdStartRequestBodyArg): Promise<any>;
}
