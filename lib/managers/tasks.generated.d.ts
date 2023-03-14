import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type TasksManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type PostTasksRequestBodyArgItemFieldTypeField = "file";
export interface PostTasksRequestBodyArgItemField {
    readonly id: string;
    readonly type: PostTasksRequestBodyArgItemFieldTypeField;
}
export type PostTasksRequestBodyArgActionField = "review" | "complete";
export type PostTasksRequestBodyArgCompletionRuleField = "all_assignees" | "any_assignee";
export interface PostTasksRequestBodyArg {
    readonly item: PostTasksRequestBodyArgItemField;
    readonly action?: PostTasksRequestBodyArgActionField;
    readonly message?: string;
    readonly dueAt?: string;
    readonly completionRule?: PostTasksRequestBodyArgCompletionRuleField;
}
export type PutTasksIdRequestBodyArgActionField = "review" | "complete";
export type PutTasksIdRequestBodyArgCompletionRuleField = "all_assignees" | "any_assignee";
export interface PutTasksIdRequestBodyArg {
    readonly action?: PutTasksIdRequestBodyArgActionField;
    readonly message?: string;
    readonly dueAt?: string;
    readonly completionRule?: PutTasksIdRequestBodyArgCompletionRuleField;
}
export declare class TasksManager {
    readonly auth: TasksManagerAuthField;
    constructor(fields: Omit<TasksManager, "getFilesIdTasks" | "postTasks" | "getTasksId" | "putTasksId" | "deleteTasksId">);
    getFilesIdTasks(fileId: string): Promise<any>;
    postTasks(requestBody: PostTasksRequestBodyArg): Promise<any>;
    getTasksId(taskId: string): Promise<any>;
    putTasksId(taskId: string, requestBody: PutTasksIdRequestBodyArg): Promise<any>;
    deleteTasksId(taskId: string): Promise<any>;
}
