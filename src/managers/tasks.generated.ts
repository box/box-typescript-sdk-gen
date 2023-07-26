import { serializeTasks } from "../schemas.generated.js";
import { deserializeTasks } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeTask } from "../schemas.generated.js";
import { deserializeTask } from "../schemas.generated.js";
import { Tasks } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Task } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
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
export class TasksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TasksManager, "getFileTasks" | "createTask" | "getTaskById" | "updateTaskById" | "deleteTaskById">) {
        Object.assign(this, fields);
    }
    async getFileTasks(fileId: string): Promise<Tasks> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/tasks") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTasks(deserializeJson(response.text));
    }
    async createTask(requestBody: CreateTaskRequestBodyArg): Promise<Task> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks") as string, { method: "POST", body: serializeJson(serializeCreateTaskRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTask(deserializeJson(response.text));
    }
    async getTaskById(taskId: string): Promise<Task> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTask(deserializeJson(response.text));
    }
    async updateTaskById(taskId: string, requestBody: UpdateTaskByIdRequestBodyArg): Promise<Task> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId) as string, { method: "PUT", body: serializeJson(serializeUpdateTaskByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTask(deserializeJson(response.text));
    }
    async deleteTaskById(taskId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeCreateTaskRequestBodyArgItemFieldTypeField(val: CreateTaskRequestBodyArgItemFieldTypeField): Json {
    return val;
}
export function deserializeCreateTaskRequestBodyArgItemFieldTypeField(val: any): CreateTaskRequestBodyArgItemFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateTaskRequestBodyArgItemFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateTaskRequestBodyArgItemField(val: CreateTaskRequestBodyArgItemField): Json {
    return { ["id"]: val.id, ["type"]: serializeCreateTaskRequestBodyArgItemFieldTypeField(val.type) };
}
export function deserializeCreateTaskRequestBodyArgItemField(val: any): CreateTaskRequestBodyArgItemField {
    const id: string = val.id;
    const type: CreateTaskRequestBodyArgItemFieldTypeField = deserializeCreateTaskRequestBodyArgItemFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateTaskRequestBodyArgItemField;
}
export function serializeCreateTaskRequestBodyArgActionField(val: CreateTaskRequestBodyArgActionField): Json {
    return val;
}
export function deserializeCreateTaskRequestBodyArgActionField(val: any): CreateTaskRequestBodyArgActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateTaskRequestBodyArgActionField\"";
    }
    if (val == "review") {
        return "review";
    }
    if (val == "complete") {
        return "complete";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateTaskRequestBodyArgCompletionRuleField(val: CreateTaskRequestBodyArgCompletionRuleField): Json {
    return val;
}
export function deserializeCreateTaskRequestBodyArgCompletionRuleField(val: any): CreateTaskRequestBodyArgCompletionRuleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateTaskRequestBodyArgCompletionRuleField\"";
    }
    if (val == "all_assignees") {
        return "all_assignees";
    }
    if (val == "any_assignee") {
        return "any_assignee";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateTaskRequestBodyArg(val: CreateTaskRequestBodyArg): Json {
    return { ["item"]: serializeCreateTaskRequestBodyArgItemField(val.item), ["action"]: val.action == void 0 ? void 0 : serializeCreateTaskRequestBodyArgActionField(val.action), ["message"]: val.message, ["due_at"]: val.dueAt, ["completion_rule"]: val.completionRule == void 0 ? void 0 : serializeCreateTaskRequestBodyArgCompletionRuleField(val.completionRule) };
}
export function deserializeCreateTaskRequestBodyArg(val: any): CreateTaskRequestBodyArg {
    const item: CreateTaskRequestBodyArgItemField = deserializeCreateTaskRequestBodyArgItemField(val.item);
    const action: undefined | CreateTaskRequestBodyArgActionField = val.action == void 0 ? void 0 : deserializeCreateTaskRequestBodyArgActionField(val.action);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const dueAt: undefined | string = isJson(val.due_at, "string") ? val.due_at : void 0;
    const completionRule: undefined | CreateTaskRequestBodyArgCompletionRuleField = val.completion_rule == void 0 ? void 0 : deserializeCreateTaskRequestBodyArgCompletionRuleField(val.completion_rule);
    return { item: item, action: action, message: message, dueAt: dueAt, completionRule: completionRule } satisfies CreateTaskRequestBodyArg;
}
export function serializeUpdateTaskByIdRequestBodyArgActionField(val: UpdateTaskByIdRequestBodyArgActionField): Json {
    return val;
}
export function deserializeUpdateTaskByIdRequestBodyArgActionField(val: any): UpdateTaskByIdRequestBodyArgActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateTaskByIdRequestBodyArgActionField\"";
    }
    if (val == "review") {
        return "review";
    }
    if (val == "complete") {
        return "complete";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val: UpdateTaskByIdRequestBodyArgCompletionRuleField): Json {
    return val;
}
export function deserializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val: any): UpdateTaskByIdRequestBodyArgCompletionRuleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateTaskByIdRequestBodyArgCompletionRuleField\"";
    }
    if (val == "all_assignees") {
        return "all_assignees";
    }
    if (val == "any_assignee") {
        return "any_assignee";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateTaskByIdRequestBodyArg(val: UpdateTaskByIdRequestBodyArg): Json {
    return { ["action"]: val.action == void 0 ? void 0 : serializeUpdateTaskByIdRequestBodyArgActionField(val.action), ["message"]: val.message, ["due_at"]: val.dueAt, ["completion_rule"]: val.completionRule == void 0 ? void 0 : serializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val.completionRule) };
}
export function deserializeUpdateTaskByIdRequestBodyArg(val: any): UpdateTaskByIdRequestBodyArg {
    const action: undefined | UpdateTaskByIdRequestBodyArgActionField = val.action == void 0 ? void 0 : deserializeUpdateTaskByIdRequestBodyArgActionField(val.action);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const dueAt: undefined | string = isJson(val.due_at, "string") ? val.due_at : void 0;
    const completionRule: undefined | UpdateTaskByIdRequestBodyArgCompletionRuleField = val.completion_rule == void 0 ? void 0 : deserializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val.completion_rule);
    return { action: action, message: message, dueAt: dueAt, completionRule: completionRule } satisfies UpdateTaskByIdRequestBodyArg;
}
