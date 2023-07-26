import { Workflows } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
export declare class WorkflowsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<WorkflowsManager, "getWorkflows" | "createWorkflowStart">);
    getWorkflows(queryParams: GetWorkflowsQueryParamsArg): Promise<Workflows>;
    createWorkflowStart(workflowId: string, requestBody: CreateWorkflowStartRequestBodyArg): Promise<any>;
}
export declare function serializeGetWorkflowsQueryParamsArg(val: GetWorkflowsQueryParamsArg): Json;
export declare function deserializeGetWorkflowsQueryParamsArg(val: any): GetWorkflowsQueryParamsArg;
export declare function serializeCreateWorkflowStartRequestBodyArgTypeField(val: CreateWorkflowStartRequestBodyArgTypeField): Json;
export declare function deserializeCreateWorkflowStartRequestBodyArgTypeField(val: any): CreateWorkflowStartRequestBodyArgTypeField;
export declare function serializeCreateWorkflowStartRequestBodyArgFlowField(val: CreateWorkflowStartRequestBodyArgFlowField): Json;
export declare function deserializeCreateWorkflowStartRequestBodyArgFlowField(val: any): CreateWorkflowStartRequestBodyArgFlowField;
export declare function serializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val: CreateWorkflowStartRequestBodyArgFilesFieldTypeField): Json;
export declare function deserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgFilesFieldTypeField;
export declare function serializeCreateWorkflowStartRequestBodyArgFilesField(val: CreateWorkflowStartRequestBodyArgFilesField): Json;
export declare function deserializeCreateWorkflowStartRequestBodyArgFilesField(val: any): CreateWorkflowStartRequestBodyArgFilesField;
export declare function serializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val: CreateWorkflowStartRequestBodyArgFolderFieldTypeField): Json;
export declare function deserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgFolderFieldTypeField;
export declare function serializeCreateWorkflowStartRequestBodyArgFolderField(val: CreateWorkflowStartRequestBodyArgFolderField): Json;
export declare function deserializeCreateWorkflowStartRequestBodyArgFolderField(val: any): CreateWorkflowStartRequestBodyArgFolderField;
export declare function serializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val: CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField): Json;
export declare function deserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField;
export declare function serializeCreateWorkflowStartRequestBodyArgOutcomesField(val: CreateWorkflowStartRequestBodyArgOutcomesField): Json;
export declare function deserializeCreateWorkflowStartRequestBodyArgOutcomesField(val: any): CreateWorkflowStartRequestBodyArgOutcomesField;
export declare function serializeCreateWorkflowStartRequestBodyArg(val: CreateWorkflowStartRequestBodyArg): Json;
export declare function deserializeCreateWorkflowStartRequestBodyArg(val: any): CreateWorkflowStartRequestBodyArg;
