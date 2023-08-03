import { TaskAssignments } from "../schemas.generated.js";
import { TaskAssignment } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetTaskAssignmentsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetTaskAssignmentsHeadersArg);
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
export declare class CreateTaskAssignmentHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateTaskAssignmentHeadersArg);
}
export declare class GetTaskAssignmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetTaskAssignmentByIdHeadersArg);
}
export type UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = "completed" | "incomplete" | "approved" | "rejected";
export interface UpdateTaskAssignmentByIdRequestBodyArg {
    readonly message?: string;
    readonly resolutionState?: UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField;
}
export declare class UpdateTaskAssignmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateTaskAssignmentByIdHeadersArg);
}
export declare class DeleteTaskAssignmentByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteTaskAssignmentByIdHeadersArg);
}
export declare class TaskAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TaskAssignmentsManager, "getTaskAssignments" | "createTaskAssignment" | "getTaskAssignmentById" | "updateTaskAssignmentById" | "deleteTaskAssignmentById">);
    getTaskAssignments(taskId: string, headers?: GetTaskAssignmentsHeadersArg): Promise<TaskAssignments>;
    createTaskAssignment(requestBody: CreateTaskAssignmentRequestBodyArg, headers?: CreateTaskAssignmentHeadersArg): Promise<TaskAssignment>;
    getTaskAssignmentById(taskAssignmentId: string, headers?: GetTaskAssignmentByIdHeadersArg): Promise<TaskAssignment>;
    updateTaskAssignmentById(taskAssignmentId: string, requestBody: UpdateTaskAssignmentByIdRequestBodyArg, headers?: UpdateTaskAssignmentByIdHeadersArg): Promise<TaskAssignment>;
    deleteTaskAssignmentById(taskAssignmentId: string, headers?: DeleteTaskAssignmentByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val: CreateTaskAssignmentRequestBodyArgTaskFieldTypeField): Json;
export declare function deserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val: any): CreateTaskAssignmentRequestBodyArgTaskFieldTypeField;
export declare function serializeCreateTaskAssignmentRequestBodyArgTaskField(val: CreateTaskAssignmentRequestBodyArgTaskField): Json;
export declare function deserializeCreateTaskAssignmentRequestBodyArgTaskField(val: any): CreateTaskAssignmentRequestBodyArgTaskField;
export declare function serializeCreateTaskAssignmentRequestBodyArgAssignToField(val: CreateTaskAssignmentRequestBodyArgAssignToField): Json;
export declare function deserializeCreateTaskAssignmentRequestBodyArgAssignToField(val: any): CreateTaskAssignmentRequestBodyArgAssignToField;
export declare function serializeCreateTaskAssignmentRequestBodyArg(val: CreateTaskAssignmentRequestBodyArg): Json;
export declare function deserializeCreateTaskAssignmentRequestBodyArg(val: any): CreateTaskAssignmentRequestBodyArg;
export declare function serializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val: UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField): Json;
export declare function deserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val: any): UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField;
export declare function serializeUpdateTaskAssignmentByIdRequestBodyArg(val: UpdateTaskAssignmentByIdRequestBodyArg): Json;
export declare function deserializeUpdateTaskAssignmentByIdRequestBodyArg(val: any): UpdateTaskAssignmentByIdRequestBodyArg;
