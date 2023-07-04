import { Tasks } from "../schemas.generated.js";
import { Task } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TasksManager, "getFileTasks" | "createTask" | "getTaskById" | "updateTaskById" | "deleteTaskById">);
    getFileTasks(fileId: string): Promise<Tasks>;
    createTask(requestBody: CreateTaskRequestBodyArg): Promise<Task>;
    getTaskById(taskId: string): Promise<Task>;
    updateTaskById(taskId: string, requestBody: UpdateTaskByIdRequestBodyArg): Promise<Task>;
    deleteTaskById(taskId: string): Promise<any>;
}
export declare function newSerializeCreateTaskRequestBodyArgItemFieldTypeField(val: CreateTaskRequestBodyArgItemFieldTypeField): Json;
export declare function newDeserializeCreateTaskRequestBodyArgItemFieldTypeField(val: any): CreateTaskRequestBodyArgItemFieldTypeField;
export declare function newSerializeCreateTaskRequestBodyArgItemField(val: CreateTaskRequestBodyArgItemField): Json;
export declare function newDeserializeCreateTaskRequestBodyArgItemField(val: any): CreateTaskRequestBodyArgItemField;
export declare function newSerializeCreateTaskRequestBodyArgActionField(val: CreateTaskRequestBodyArgActionField): Json;
export declare function newDeserializeCreateTaskRequestBodyArgActionField(val: any): CreateTaskRequestBodyArgActionField;
export declare function newSerializeCreateTaskRequestBodyArgCompletionRuleField(val: CreateTaskRequestBodyArgCompletionRuleField): Json;
export declare function newDeserializeCreateTaskRequestBodyArgCompletionRuleField(val: any): CreateTaskRequestBodyArgCompletionRuleField;
export declare function newSerializeCreateTaskRequestBodyArg(val: CreateTaskRequestBodyArg): Json;
export declare function newDeserializeCreateTaskRequestBodyArg(val: any): CreateTaskRequestBodyArg;
export declare function newSerializeUpdateTaskByIdRequestBodyArgActionField(val: UpdateTaskByIdRequestBodyArgActionField): Json;
export declare function newDeserializeUpdateTaskByIdRequestBodyArgActionField(val: any): UpdateTaskByIdRequestBodyArgActionField;
export declare function newSerializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val: UpdateTaskByIdRequestBodyArgCompletionRuleField): Json;
export declare function newDeserializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val: any): UpdateTaskByIdRequestBodyArgCompletionRuleField;
export declare function newSerializeUpdateTaskByIdRequestBodyArg(val: UpdateTaskByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateTaskByIdRequestBodyArg(val: any): UpdateTaskByIdRequestBodyArg;
