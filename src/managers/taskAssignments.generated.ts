import { newSerializeTaskAssignments } from "../schemas.generated.js";
import { newDeserializeTaskAssignments } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeTaskAssignment } from "../schemas.generated.js";
import { newDeserializeTaskAssignment } from "../schemas.generated.js";
import { TaskAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { TaskAssignment } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
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
export class TaskAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TaskAssignmentsManager, "getTaskAssignments" | "createTaskAssignment" | "getTaskAssignmentById" | "updateTaskAssignmentById" | "deleteTaskAssignmentById">) {
        Object.assign(this, fields);
    }
    async getTaskAssignments(taskId: string): Promise<TaskAssignments> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId, "/assignments") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTaskAssignments(deserializeJson(response.text));
    }
    async createTaskAssignment(requestBody: CreateTaskAssignmentRequestBodyArg): Promise<TaskAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTaskAssignment(deserializeJson(response.text));
    }
    async getTaskAssignmentById(taskAssignmentId: string): Promise<TaskAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTaskAssignment(deserializeJson(response.text));
    }
    async updateTaskAssignmentById(taskAssignmentId: string, requestBody: UpdateTaskAssignmentByIdRequestBodyArg): Promise<TaskAssignment> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTaskAssignment(deserializeJson(response.text));
    }
    async deleteTaskAssignmentById(taskAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val: CreateTaskAssignmentRequestBodyArgTaskFieldTypeField): Json {
    return val;
}
export function newDeserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val: any): CreateTaskAssignmentRequestBodyArgTaskFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateTaskAssignmentRequestBodyArgTaskFieldTypeField\"";
    }
    if (val == "task") {
        return "task";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateTaskAssignmentRequestBodyArgTaskField(val: CreateTaskAssignmentRequestBodyArgTaskField): Json {
    return { ["id"]: val.id, ["type"]: newSerializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val.type) };
}
export function newDeserializeCreateTaskAssignmentRequestBodyArgTaskField(val: any): CreateTaskAssignmentRequestBodyArgTaskField {
    const id: string = val.id;
    const type: CreateTaskAssignmentRequestBodyArgTaskFieldTypeField = newDeserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateTaskAssignmentRequestBodyArgTaskField;
}
export function newSerializeCreateTaskAssignmentRequestBodyArgAssignToField(val: CreateTaskAssignmentRequestBodyArgAssignToField): Json {
    return { ["id"]: val.id, ["login"]: val.login };
}
export function newDeserializeCreateTaskAssignmentRequestBodyArgAssignToField(val: any): CreateTaskAssignmentRequestBodyArgAssignToField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    return { id: id, login: login } satisfies CreateTaskAssignmentRequestBodyArgAssignToField;
}
export function newSerializeCreateTaskAssignmentRequestBodyArg(val: CreateTaskAssignmentRequestBodyArg): Json {
    return { ["task"]: newSerializeCreateTaskAssignmentRequestBodyArgTaskField(val.task), ["assignTo"]: newSerializeCreateTaskAssignmentRequestBodyArgAssignToField(val.assignTo) };
}
export function newDeserializeCreateTaskAssignmentRequestBodyArg(val: any): CreateTaskAssignmentRequestBodyArg {
    const task: CreateTaskAssignmentRequestBodyArgTaskField = newDeserializeCreateTaskAssignmentRequestBodyArgTaskField(val.task);
    const assignTo: CreateTaskAssignmentRequestBodyArgAssignToField = newDeserializeCreateTaskAssignmentRequestBodyArgAssignToField(val.assignTo);
    return { task: task, assignTo: assignTo } satisfies CreateTaskAssignmentRequestBodyArg;
}
export function newSerializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val: UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField): Json {
    return val;
}
export function newDeserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val: any): UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField\"";
    }
    if (val == "completed") {
        return "completed";
    }
    if (val == "incomplete") {
        return "incomplete";
    }
    if (val == "approved") {
        return "approved";
    }
    if (val == "rejected") {
        return "rejected";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUpdateTaskAssignmentByIdRequestBodyArg(val: UpdateTaskAssignmentByIdRequestBodyArg): Json {
    return { ["message"]: val.message, ["resolutionState"]: val.resolutionState == void 0 ? void 0 : newSerializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val.resolutionState) };
}
export function newDeserializeUpdateTaskAssignmentByIdRequestBodyArg(val: any): UpdateTaskAssignmentByIdRequestBodyArg {
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const resolutionState: undefined | UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = val.resolutionState == void 0 ? void 0 : newDeserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val.resolutionState);
    return { message: message, resolutionState: resolutionState } satisfies UpdateTaskAssignmentByIdRequestBodyArg;
}
