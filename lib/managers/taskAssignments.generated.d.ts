import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type TaskAssignmentsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type PostTaskAssignmentsRequestBodyArgTaskFieldTypeField = "task";
export interface PostTaskAssignmentsRequestBodyArgTaskField {
    readonly id: string;
    readonly type: PostTaskAssignmentsRequestBodyArgTaskFieldTypeField;
}
export interface PostTaskAssignmentsRequestBodyArgAssignToField {
    readonly id?: string;
    readonly login?: string;
}
export interface PostTaskAssignmentsRequestBodyArg {
    readonly task: PostTaskAssignmentsRequestBodyArgTaskField;
    readonly assignTo: PostTaskAssignmentsRequestBodyArgAssignToField;
}
export type PutTaskAssignmentsIdRequestBodyArgResolutionStateField = "completed" | "incomplete" | "approved" | "rejected";
export interface PutTaskAssignmentsIdRequestBodyArg {
    readonly message?: string;
    readonly resolutionState?: PutTaskAssignmentsIdRequestBodyArgResolutionStateField;
}
export declare class TaskAssignmentsManager {
    readonly auth: TaskAssignmentsManagerAuthField;
    constructor(fields: Omit<TaskAssignmentsManager, "getTasksIdAssignments" | "postTaskAssignments" | "getTaskAssignmentsId" | "putTaskAssignmentsId" | "deleteTaskAssignmentsId">);
    getTasksIdAssignments(taskId: string): Promise<any>;
    postTaskAssignments(requestBody: PostTaskAssignmentsRequestBodyArg): Promise<any>;
    getTaskAssignmentsId(taskAssignmentId: string): Promise<any>;
    putTaskAssignmentsId(taskAssignmentId: string, requestBody: PutTaskAssignmentsIdRequestBodyArg): Promise<any>;
    deleteTaskAssignmentsId(taskAssignmentId: string): Promise<any>;
}
