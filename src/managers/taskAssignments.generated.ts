import { serializeTaskAssignments } from "../schemas.generated.js";
import { deserializeTaskAssignments } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeTaskAssignment } from "../schemas.generated.js";
import { deserializeTaskAssignment } from "../schemas.generated.js";
import { TaskAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { TaskAssignment } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export class GetTaskAssignmentsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetTaskAssignmentsHeadersArg) {
        Object.assign(this, fields);
    }
}
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
export class CreateTaskAssignmentHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateTaskAssignmentHeadersArg) {
        Object.assign(this, fields);
    }
}
export class GetTaskAssignmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetTaskAssignmentByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export type UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = "completed" | "incomplete" | "approved" | "rejected";
export interface UpdateTaskAssignmentByIdRequestBodyArg {
    readonly message?: string;
    readonly resolutionState?: UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField;
}
export class UpdateTaskAssignmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateTaskAssignmentByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteTaskAssignmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteTaskAssignmentByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class TaskAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TaskAssignmentsManager, "getTaskAssignments" | "createTaskAssignment" | "getTaskAssignmentById" | "updateTaskAssignmentById" | "deleteTaskAssignmentById">) {
        Object.assign(this, fields);
    }
    async getTaskAssignments(taskId: string, headers: GetTaskAssignmentsHeadersArg = new GetTaskAssignmentsHeadersArg({})): Promise<TaskAssignments> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId, "/assignments") as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTaskAssignments(deserializeJson(response.text));
    }
    async createTaskAssignment(requestBody: CreateTaskAssignmentRequestBodyArg, headers: CreateTaskAssignmentHeadersArg = new CreateTaskAssignmentHeadersArg({})): Promise<TaskAssignment> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateTaskAssignmentRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTaskAssignment(deserializeJson(response.text));
    }
    async getTaskAssignmentById(taskAssignmentId: string, headers: GetTaskAssignmentByIdHeadersArg = new GetTaskAssignmentByIdHeadersArg({})): Promise<TaskAssignment> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId) as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTaskAssignment(deserializeJson(response.text));
    }
    async updateTaskAssignmentById(taskAssignmentId: string, requestBody: UpdateTaskAssignmentByIdRequestBodyArg = {} satisfies UpdateTaskAssignmentByIdRequestBodyArg, headers: UpdateTaskAssignmentByIdHeadersArg = new UpdateTaskAssignmentByIdHeadersArg({})): Promise<TaskAssignment> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId) as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeUpdateTaskAssignmentByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTaskAssignment(deserializeJson(response.text));
    }
    async deleteTaskAssignmentById(taskAssignmentId: string, headers: DeleteTaskAssignmentByIdHeadersArg = new DeleteTaskAssignmentByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val: CreateTaskAssignmentRequestBodyArgTaskFieldTypeField): Json {
    return val;
}
export function deserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val: any): CreateTaskAssignmentRequestBodyArgTaskFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateTaskAssignmentRequestBodyArgTaskFieldTypeField\"";
    }
    if (val == "task") {
        return "task";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateTaskAssignmentRequestBodyArgTaskField(val: CreateTaskAssignmentRequestBodyArgTaskField): Json {
    return { ["id"]: val.id, ["type"]: serializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val.type) };
}
export function deserializeCreateTaskAssignmentRequestBodyArgTaskField(val: any): CreateTaskAssignmentRequestBodyArgTaskField {
    const id: string = val.id;
    const type: CreateTaskAssignmentRequestBodyArgTaskFieldTypeField = deserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val.type);
    return { id: id, type: type } satisfies CreateTaskAssignmentRequestBodyArgTaskField;
}
export function serializeCreateTaskAssignmentRequestBodyArgAssignToField(val: CreateTaskAssignmentRequestBodyArgAssignToField): Json {
    return { ["id"]: val.id == void 0 ? void 0 : val.id, ["login"]: val.login == void 0 ? void 0 : val.login };
}
export function deserializeCreateTaskAssignmentRequestBodyArgAssignToField(val: any): CreateTaskAssignmentRequestBodyArgAssignToField {
    const id: undefined | string = val.id == void 0 ? void 0 : val.id;
    const login: undefined | string = val.login == void 0 ? void 0 : val.login;
    return { id: id, login: login } satisfies CreateTaskAssignmentRequestBodyArgAssignToField;
}
export function serializeCreateTaskAssignmentRequestBodyArg(val: CreateTaskAssignmentRequestBodyArg): Json {
    return { ["task"]: serializeCreateTaskAssignmentRequestBodyArgTaskField(val.task), ["assign_to"]: serializeCreateTaskAssignmentRequestBodyArgAssignToField(val.assignTo) };
}
export function deserializeCreateTaskAssignmentRequestBodyArg(val: any): CreateTaskAssignmentRequestBodyArg {
    const task: CreateTaskAssignmentRequestBodyArgTaskField = deserializeCreateTaskAssignmentRequestBodyArgTaskField(val.task);
    const assignTo: CreateTaskAssignmentRequestBodyArgAssignToField = deserializeCreateTaskAssignmentRequestBodyArgAssignToField(val.assign_to);
    return { task: task, assignTo: assignTo } satisfies CreateTaskAssignmentRequestBodyArg;
}
export function serializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val: UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField): Json {
    return val;
}
export function deserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val: any): UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField {
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
export function serializeUpdateTaskAssignmentByIdRequestBodyArg(val: UpdateTaskAssignmentByIdRequestBodyArg): Json {
    return { ["message"]: val.message == void 0 ? void 0 : val.message, ["resolution_state"]: val.resolutionState == void 0 ? void 0 : serializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val.resolutionState) };
}
export function deserializeUpdateTaskAssignmentByIdRequestBodyArg(val: any): UpdateTaskAssignmentByIdRequestBodyArg {
    const message: undefined | string = val.message == void 0 ? void 0 : val.message;
    const resolutionState: undefined | UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = val.resolution_state == void 0 ? void 0 : deserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val.resolution_state);
    return { message: message, resolutionState: resolutionState } satisfies UpdateTaskAssignmentByIdRequestBodyArg;
}
