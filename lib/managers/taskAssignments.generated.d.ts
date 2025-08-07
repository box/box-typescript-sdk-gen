import { TaskAssignments } from '../schemas/taskAssignments.generated.js';
import { TaskAssignment } from '../schemas/taskAssignment.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetTaskAssignmentsOptionals {
    readonly headers: GetTaskAssignmentsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTaskAssignmentsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetTaskAssignmentsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetTaskAssignmentsOptionalsInput {
    readonly headers?: GetTaskAssignmentsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateTaskAssignmentOptionals {
    readonly headers: CreateTaskAssignmentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateTaskAssignmentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateTaskAssignmentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateTaskAssignmentOptionalsInput {
    readonly headers?: CreateTaskAssignmentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTaskAssignmentByIdOptionals {
    readonly headers: GetTaskAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTaskAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetTaskAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetTaskAssignmentByIdOptionalsInput {
    readonly headers?: GetTaskAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateTaskAssignmentByIdOptionals {
    readonly requestBody: UpdateTaskAssignmentByIdRequestBody;
    readonly headers: UpdateTaskAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateTaskAssignmentByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateTaskAssignmentByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateTaskAssignmentByIdOptionalsInput {
    readonly requestBody?: UpdateTaskAssignmentByIdRequestBody;
    readonly headers?: UpdateTaskAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTaskAssignmentByIdOptionals {
    readonly headers: DeleteTaskAssignmentByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTaskAssignmentByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTaskAssignmentByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTaskAssignmentByIdOptionalsInput {
    readonly headers?: DeleteTaskAssignmentByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTaskAssignmentsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTaskAssignmentsHeaders, 'extraHeaders'> & Partial<Pick<GetTaskAssignmentsHeaders, 'extraHeaders'>>);
}
export interface GetTaskAssignmentsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateTaskAssignmentRequestBodyTaskTypeField = 'task';
export declare class CreateTaskAssignmentRequestBodyTaskField {
    /**
     * The ID of the task. */
    readonly id: string;
    /**
     * The type of the item to assign. */
    readonly type: CreateTaskAssignmentRequestBodyTaskTypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<CreateTaskAssignmentRequestBodyTaskField, 'type'> & Partial<Pick<CreateTaskAssignmentRequestBodyTaskField, 'type'>>);
}
export interface CreateTaskAssignmentRequestBodyTaskFieldInput {
    /**
     * The ID of the task. */
    readonly id: string;
    /**
     * The type of the item to assign. */
    readonly type?: CreateTaskAssignmentRequestBodyTaskTypeField;
    readonly rawData?: SerializedData;
}
export interface CreateTaskAssignmentRequestBodyAssignToField {
    /**
     * The ID of the user to assign to the
     * task.
     *
     * To specify a user by their email
     * address use the `login` parameter. */
    readonly id?: string;
    /**
     * The email address of the user to assign to the task.
     * To specify a user by their user ID please use the `id` parameter. */
    readonly login?: string;
    readonly rawData?: SerializedData;
}
export interface CreateTaskAssignmentRequestBody {
    /**
     * The task to assign to a user. */
    readonly task: CreateTaskAssignmentRequestBodyTaskField;
    /**
     * The user to assign the task to. */
    readonly assignTo: CreateTaskAssignmentRequestBodyAssignToField;
    readonly rawData?: SerializedData;
}
export declare class CreateTaskAssignmentHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateTaskAssignmentHeaders, 'extraHeaders'> & Partial<Pick<CreateTaskAssignmentHeaders, 'extraHeaders'>>);
}
export interface CreateTaskAssignmentHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetTaskAssignmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTaskAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTaskAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface GetTaskAssignmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateTaskAssignmentByIdRequestBodyResolutionStateField = 'completed' | 'incomplete' | 'approved' | 'rejected' | string;
export interface UpdateTaskAssignmentByIdRequestBody {
    /**
     * An optional message by the assignee that can be added to the task. */
    readonly message?: string;
    /**
     * The state of the task assigned to the user.
     *
     * * For a task with an `action` value of `complete` this can be
     * `incomplete` or `completed`.
     * * For a task with an `action` of `review` this can be
     * `incomplete`, `approved`, or `rejected`. */
    readonly resolutionState?: UpdateTaskAssignmentByIdRequestBodyResolutionStateField;
    readonly rawData?: SerializedData;
}
export declare class UpdateTaskAssignmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateTaskAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateTaskAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateTaskAssignmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTaskAssignmentByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTaskAssignmentByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTaskAssignmentByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTaskAssignmentByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TaskAssignmentsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TaskAssignmentsManager, 'networkSession' | 'getTaskAssignments' | 'createTaskAssignment' | 'getTaskAssignmentById' | 'updateTaskAssignmentById' | 'deleteTaskAssignmentById'> & Partial<Pick<TaskAssignmentsManager, 'networkSession'>>);
    /**
       * Lists all of the assignments for a given task.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {GetTaskAssignmentsOptionalsInput} optionalsInput
       * @returns {Promise<TaskAssignments>}
       */
    getTaskAssignments(taskId: string, optionalsInput?: GetTaskAssignmentsOptionalsInput): Promise<TaskAssignments>;
    /**
     * Assigns a task to a user.
     *
     * A task can be assigned to more than one user by creating multiple
     * assignments.
     * @param {CreateTaskAssignmentRequestBody} requestBody Request body of createTaskAssignment method
     * @param {CreateTaskAssignmentOptionalsInput} optionalsInput
     * @returns {Promise<TaskAssignment>}
     */
    createTaskAssignment(requestBody: CreateTaskAssignmentRequestBody, optionalsInput?: CreateTaskAssignmentOptionalsInput): Promise<TaskAssignment>;
    /**
       * Retrieves information about a task assignment.
       * @param {string} taskAssignmentId The ID of the task assignment.
      Example: "12345"
       * @param {GetTaskAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<TaskAssignment>}
       */
    getTaskAssignmentById(taskAssignmentId: string, optionalsInput?: GetTaskAssignmentByIdOptionalsInput): Promise<TaskAssignment>;
    /**
       * Updates a task assignment. This endpoint can be
       * used to update the state of a task assigned to a user.
       * @param {string} taskAssignmentId The ID of the task assignment.
      Example: "12345"
       * @param {UpdateTaskAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<TaskAssignment>}
       */
    updateTaskAssignmentById(taskAssignmentId: string, optionalsInput?: UpdateTaskAssignmentByIdOptionalsInput): Promise<TaskAssignment>;
    /**
       * Deletes a specific task assignment.
       * @param {string} taskAssignmentId The ID of the task assignment.
      Example: "12345"
       * @param {DeleteTaskAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTaskAssignmentById(taskAssignmentId: string, optionalsInput?: DeleteTaskAssignmentByIdOptionalsInput): Promise<undefined>;
}
export interface TaskAssignmentsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateTaskAssignmentRequestBodyTaskTypeField(val: CreateTaskAssignmentRequestBodyTaskTypeField): SerializedData;
export declare function deserializeCreateTaskAssignmentRequestBodyTaskTypeField(val: SerializedData): CreateTaskAssignmentRequestBodyTaskTypeField;
export declare function serializeCreateTaskAssignmentRequestBodyTaskField(val: CreateTaskAssignmentRequestBodyTaskField): SerializedData;
export declare function deserializeCreateTaskAssignmentRequestBodyTaskField(val: SerializedData): CreateTaskAssignmentRequestBodyTaskField;
export declare function serializeCreateTaskAssignmentRequestBodyTaskFieldInput(val: CreateTaskAssignmentRequestBodyTaskFieldInput): SerializedData;
export declare function deserializeCreateTaskAssignmentRequestBodyTaskFieldInput(val: SerializedData): CreateTaskAssignmentRequestBodyTaskFieldInput;
export declare function serializeCreateTaskAssignmentRequestBodyAssignToField(val: CreateTaskAssignmentRequestBodyAssignToField): SerializedData;
export declare function deserializeCreateTaskAssignmentRequestBodyAssignToField(val: SerializedData): CreateTaskAssignmentRequestBodyAssignToField;
export declare function serializeCreateTaskAssignmentRequestBody(val: CreateTaskAssignmentRequestBody): SerializedData;
export declare function deserializeCreateTaskAssignmentRequestBody(val: SerializedData): CreateTaskAssignmentRequestBody;
export declare function serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val: UpdateTaskAssignmentByIdRequestBodyResolutionStateField): SerializedData;
export declare function deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val: SerializedData): UpdateTaskAssignmentByIdRequestBodyResolutionStateField;
export declare function serializeUpdateTaskAssignmentByIdRequestBody(val: UpdateTaskAssignmentByIdRequestBody): SerializedData;
export declare function deserializeUpdateTaskAssignmentByIdRequestBody(val: SerializedData): UpdateTaskAssignmentByIdRequestBody;
//# sourceMappingURL=taskAssignments.generated.d.ts.map