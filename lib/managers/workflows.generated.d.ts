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
export declare function newSerializeGetWorkflowsQueryParamsArg(val: GetWorkflowsQueryParamsArg): Json;
export declare function newDeserializeGetWorkflowsQueryParamsArg(val: any): GetWorkflowsQueryParamsArg;
export declare function newSerializeCreateWorkflowStartRequestBodyArgTypeField(val: CreateWorkflowStartRequestBodyArgTypeField): Json;
export declare function newDeserializeCreateWorkflowStartRequestBodyArgTypeField(val: any): CreateWorkflowStartRequestBodyArgTypeField;
export declare function newSerializeCreateWorkflowStartRequestBodyArgFlowField(val: CreateWorkflowStartRequestBodyArgFlowField): Json;
export declare function newDeserializeCreateWorkflowStartRequestBodyArgFlowField(val: any): CreateWorkflowStartRequestBodyArgFlowField;
export declare function newSerializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val: CreateWorkflowStartRequestBodyArgFilesFieldTypeField): Json;
export declare function newDeserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgFilesFieldTypeField;
export declare function newSerializeCreateWorkflowStartRequestBodyArgFilesField(val: CreateWorkflowStartRequestBodyArgFilesField): Json;
export declare function newDeserializeCreateWorkflowStartRequestBodyArgFilesField(val: any): CreateWorkflowStartRequestBodyArgFilesField;
export declare function newSerializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val: CreateWorkflowStartRequestBodyArgFolderFieldTypeField): Json;
export declare function newDeserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgFolderFieldTypeField;
export declare function newSerializeCreateWorkflowStartRequestBodyArgFolderField(val: CreateWorkflowStartRequestBodyArgFolderField): Json;
export declare function newDeserializeCreateWorkflowStartRequestBodyArgFolderField(val: any): CreateWorkflowStartRequestBodyArgFolderField;
export declare function newSerializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val: CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField): Json;
export declare function newDeserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val: any): CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField;
export declare function newSerializeCreateWorkflowStartRequestBodyArgOutcomesField(val: CreateWorkflowStartRequestBodyArgOutcomesField): Json;
export declare function newDeserializeCreateWorkflowStartRequestBodyArgOutcomesField(val: any): CreateWorkflowStartRequestBodyArgOutcomesField;
export declare function newSerializeCreateWorkflowStartRequestBodyArg(val: CreateWorkflowStartRequestBodyArg): Json;
export declare function newDeserializeCreateWorkflowStartRequestBodyArg(val: any): CreateWorkflowStartRequestBodyArg;
