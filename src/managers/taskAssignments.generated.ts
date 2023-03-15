import { TaskAssignments } from "../schemas.generated.js";
import { deserializeTaskAssignments } from "../schemas.generated.js";
import { serializeTaskAssignments } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { TaskAssignment } from "../schemas.generated.js";
import { deserializeTaskAssignment } from "../schemas.generated.js";
import { serializeTaskAssignment } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
export class TaskAssignmentsManager {
    readonly auth!: TaskAssignmentsManagerAuthField;
    constructor(fields: Omit<TaskAssignmentsManager, "getTasksIdAssignments" | "postTaskAssignments" | "getTaskAssignmentsId" | "putTaskAssignmentsId" | "deleteTaskAssignmentsId">) {
        Object.assign(this, fields);
    }
    async getTasksIdAssignments(taskId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/tasks/", taskId, "/assignments") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTaskAssignments(await deserializeJson(response.text));
    }
    async postTaskAssignments(requestBody: PostTaskAssignmentsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTaskAssignment(await deserializeJson(response.text));
    }
    async getTaskAssignmentsId(taskAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTaskAssignment(await deserializeJson(response.text));
    }
    async putTaskAssignmentsId(taskAssignmentId: string, requestBody: PutTaskAssignmentsIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTaskAssignment(await deserializeJson(response.text));
    }
    async deleteTaskAssignmentsId(taskAssignmentId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
