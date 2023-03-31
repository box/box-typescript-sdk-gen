import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type TasksManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type CreateTaskRequestBodyArgItemFieldTypeField = "file";
export interface CreateTaskRequestBodyArgItemField {
    readonly id: string;
    readonly type: CreateTaskRequestBodyArgItemFieldTypeField;
}
export type CreateTaskRequestBodyArgActionField = "review" | "complete";
export type CreateTaskRequestBodyArgCompletionRuleField = "all_assignees" | "any_assignee";
export interface CreateTaskRequestBodyArg {
    readonly item: CreateTaskRequestBodyArgItemField;
    readonly action?: CreateTaskRequestBodyArgActionField;
    readonly message?: string;
    readonly dueAt?: string;
    readonly completionRule?: CreateTaskRequestBodyArgCompletionRuleField;
}
export type UpdateTaskByIdRequestBodyArgActionField = "review" | "complete";
export type UpdateTaskByIdRequestBodyArgCompletionRuleField = "all_assignees" | "any_assignee";
export interface UpdateTaskByIdRequestBodyArg {
    readonly action?: UpdateTaskByIdRequestBodyArgActionField;
    readonly message?: string;
    readonly dueAt?: string;
    readonly completionRule?: UpdateTaskByIdRequestBodyArgCompletionRuleField;
}
export declare class TasksManager {
    readonly auth: TasksManagerAuthField;
    constructor(fields: Omit<TasksManager, "getFileTasks" | "createTask" | "getTaskById" | "updateTaskById" | "deleteTaskById">);
    getFileTasks(fileId: string): Promise<any>;
    createTask(requestBody: CreateTaskRequestBodyArg): Promise<any>;
    getTaskById(taskId: string): Promise<any>;
    updateTaskById(taskId: string, requestBody: UpdateTaskByIdRequestBodyArg): Promise<any>;
    deleteTaskById(taskId: string): Promise<any>;
}
