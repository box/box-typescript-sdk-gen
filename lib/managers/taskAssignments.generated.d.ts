import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type TaskAssignmentsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export type CreateTaskAssignmentRequestBodyArgTaskFieldTypeField = "task";
export interface CreateTaskAssignmentRequestBodyArgTaskField {
    readonly id: string;
    readonly type: CreateTaskAssignmentRequestBodyArgTaskFieldTypeField;
}
export interface CreateTaskAssignmentRequestBodyArgAssignToField {
    readonly id?: string;
    readonly login?: string;
}
export interface CreateTaskAssignmentRequestBodyArg {
    readonly task: CreateTaskAssignmentRequestBodyArgTaskField;
    readonly assignTo: CreateTaskAssignmentRequestBodyArgAssignToField;
}
export type UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = "completed" | "incomplete" | "approved" | "rejected";
export interface UpdateTaskAssignmentByIdRequestBodyArg {
    readonly message?: string;
    readonly resolutionState?: UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField;
}
export declare class TaskAssignmentsManager {
    readonly auth: TaskAssignmentsManagerAuthField;
    constructor(fields: Omit<TaskAssignmentsManager, "getTaskAssignments" | "createTaskAssignment" | "getTaskAssignmentById" | "updateTaskAssignmentById" | "deleteTaskAssignmentById">);
    getTaskAssignments(taskId: string): Promise<any>;
    createTaskAssignment(requestBody: CreateTaskAssignmentRequestBodyArg): Promise<any>;
    getTaskAssignmentById(taskAssignmentId: string): Promise<any>;
    updateTaskAssignmentById(taskAssignmentId: string, requestBody: UpdateTaskAssignmentByIdRequestBodyArg): Promise<any>;
    deleteTaskAssignmentById(taskAssignmentId: string): Promise<any>;
}
