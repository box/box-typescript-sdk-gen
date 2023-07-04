import { newSerializeTasks } from "../schemas.generated.js";
import { newDeserializeTasks } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeTask } from "../schemas.generated.js";
import { newDeserializeTask } from "../schemas.generated.js";
import { Tasks } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Task } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
        return newDeserializeTasks(deserializeJson(response.text));
    }
    async createTask(requestBody: CreateTaskRequestBodyArg): Promise<Task> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTask(deserializeJson(response.text));
    }
    async getTaskById(taskId: string): Promise<Task> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTask(deserializeJson(response.text));
    }
    async updateTaskById(taskId: string, requestBody: UpdateTaskByIdRequestBodyArg): Promise<Task> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTask(deserializeJson(response.text));
    }
    async deleteTaskById(taskId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeCreateTaskRequestBodyArgItemFieldTypeField(val: CreateTaskRequestBodyArgItemFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateTaskRequestBodyArgItemFieldTypeField(val: any): CreateTaskRequestBodyArgItemFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateTaskRequestBodyArgItemFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateTaskRequestBodyArgItemField(val: CreateTaskRequestBodyArgItemField): Json {
    return { ["id"]: val.id, ["type"]: newSerializeCreateTaskRequestBodyArgItemFieldTypeField(val.type) };
}
export function newDeserializeCreateTaskRequestBodyArgItemField(val: any): CreateTaskRequestBodyArgItemField {
    const id: string = val.id;
    const type: CreateTaskRequestBodyArgItemFieldTypeField = newDeserializeCreateTaskRequestBodyArgItemFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateTaskRequestBodyArgItemField;
}
export function newSerializeCreateTaskRequestBodyArgActionField(val: CreateTaskRequestBodyArgActionField): Json {
    return val;
}
export function newDeserializeCreateTaskRequestBodyArgActionField(val: any): CreateTaskRequestBodyArgActionField {
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
export function newSerializeCreateTaskRequestBodyArgCompletionRuleField(val: CreateTaskRequestBodyArgCompletionRuleField): Json {
    return val;
}
export function newDeserializeCreateTaskRequestBodyArgCompletionRuleField(val: any): CreateTaskRequestBodyArgCompletionRuleField {
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
export function newSerializeCreateTaskRequestBodyArg(val: CreateTaskRequestBodyArg): Json {
    return { ["item"]: newSerializeCreateTaskRequestBodyArgItemField(val.item), ["action"]: val.action == void 0 ? void 0 : newSerializeCreateTaskRequestBodyArgActionField(val.action), ["message"]: val.message, ["dueAt"]: val.dueAt, ["completionRule"]: val.completionRule == void 0 ? void 0 : newSerializeCreateTaskRequestBodyArgCompletionRuleField(val.completionRule) };
}
export function newDeserializeCreateTaskRequestBodyArg(val: any): CreateTaskRequestBodyArg {
    const item: CreateTaskRequestBodyArgItemField = newDeserializeCreateTaskRequestBodyArgItemField(val.item);
    const action: undefined | CreateTaskRequestBodyArgActionField = val.action == void 0 ? void 0 : newDeserializeCreateTaskRequestBodyArgActionField(val.action);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const dueAt: undefined | string = isJson(val.dueAt, "string") ? val.dueAt : void 0;
    const completionRule: undefined | CreateTaskRequestBodyArgCompletionRuleField = val.completionRule == void 0 ? void 0 : newDeserializeCreateTaskRequestBodyArgCompletionRuleField(val.completionRule);
    return { item: item, action: action, message: message, dueAt: dueAt, completionRule: completionRule } satisfies CreateTaskRequestBodyArg;
}
export function newSerializeUpdateTaskByIdRequestBodyArgActionField(val: UpdateTaskByIdRequestBodyArgActionField): Json {
    return val;
}
export function newDeserializeUpdateTaskByIdRequestBodyArgActionField(val: any): UpdateTaskByIdRequestBodyArgActionField {
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
export function newSerializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val: UpdateTaskByIdRequestBodyArgCompletionRuleField): Json {
    return val;
}
export function newDeserializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val: any): UpdateTaskByIdRequestBodyArgCompletionRuleField {
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
export function newSerializeUpdateTaskByIdRequestBodyArg(val: UpdateTaskByIdRequestBodyArg): Json {
    return { ["action"]: val.action == void 0 ? void 0 : newSerializeUpdateTaskByIdRequestBodyArgActionField(val.action), ["message"]: val.message, ["dueAt"]: val.dueAt, ["completionRule"]: val.completionRule == void 0 ? void 0 : newSerializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val.completionRule) };
}
export function newDeserializeUpdateTaskByIdRequestBodyArg(val: any): UpdateTaskByIdRequestBodyArg {
    const action: undefined | UpdateTaskByIdRequestBodyArgActionField = val.action == void 0 ? void 0 : newDeserializeUpdateTaskByIdRequestBodyArgActionField(val.action);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const dueAt: undefined | string = isJson(val.dueAt, "string") ? val.dueAt : void 0;
    const completionRule: undefined | UpdateTaskByIdRequestBodyArgCompletionRuleField = val.completionRule == void 0 ? void 0 : newDeserializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val.completionRule);
    return { action: action, message: message, dueAt: dueAt, completionRule: completionRule } satisfies UpdateTaskByIdRequestBodyArg;
}
