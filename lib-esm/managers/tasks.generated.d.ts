import { Tasks } from '../schemas/tasks.generated.js';
import { Task } from '../schemas/task.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class GetFileTasksOptionals {
    readonly headers: GetFileTasksHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileTasksOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileTasksOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileTasksOptionalsInput {
    readonly headers?: GetFileTasksHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateTaskOptionals {
    readonly headers: CreateTaskHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateTaskOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateTaskOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateTaskOptionalsInput {
    readonly headers?: CreateTaskHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTaskByIdOptionals {
    readonly headers: GetTaskByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTaskByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetTaskByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetTaskByIdOptionalsInput {
    readonly headers?: GetTaskByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateTaskByIdOptionals {
    readonly requestBody: UpdateTaskByIdRequestBody;
    readonly headers: UpdateTaskByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateTaskByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateTaskByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateTaskByIdOptionalsInput {
    readonly requestBody?: UpdateTaskByIdRequestBody;
    readonly headers?: UpdateTaskByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTaskByIdOptionals {
    readonly headers: DeleteTaskByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTaskByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTaskByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTaskByIdOptionalsInput {
    readonly headers?: DeleteTaskByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileTasksHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileTasksHeaders, 'extraHeaders'> & Partial<Pick<GetFileTasksHeaders, 'extraHeaders'>>);
}
export interface GetFileTasksHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateTaskRequestBodyItemTypeField = 'file';
export interface CreateTaskRequestBodyItemField {
    /**
     * The ID of the file. */
    readonly id?: string;
    /**
     * The value will always be `file`. */
    readonly type?: CreateTaskRequestBodyItemTypeField;
    readonly rawData?: SerializedData;
}
export type CreateTaskRequestBodyActionField = 'review' | 'complete' | string;
export type CreateTaskRequestBodyCompletionRuleField = 'all_assignees' | 'any_assignee' | string;
export interface CreateTaskRequestBody {
    /**
     * The file to attach the task to. */
    readonly item: CreateTaskRequestBodyItemField;
    /**
     * The action the task assignee will be prompted to do. Must be
     *
     * * `review` defines an approval task that can be approved or,
     * rejected
     * * `complete` defines a general task which can be completed. */
    readonly action?: CreateTaskRequestBodyActionField;
    /**
     * An optional message to include with the task. */
    readonly message?: string;
    /**
     * Defines when the task is due. Defaults to `null` if not
     * provided. */
    readonly dueAt?: DateTime;
    /**
     * Defines which assignees need to complete this task before the task
     * is considered completed.
     *
     * * `all_assignees` (default) requires all assignees to review or
     * approve the the task in order for it to be considered completed.
     * * `any_assignee` accepts any one assignee to review or
     * approve the the task in order for it to be considered completed. */
    readonly completionRule?: CreateTaskRequestBodyCompletionRuleField;
    readonly rawData?: SerializedData;
}
export declare class CreateTaskHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateTaskHeaders, 'extraHeaders'> & Partial<Pick<CreateTaskHeaders, 'extraHeaders'>>);
}
export interface CreateTaskHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetTaskByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTaskByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTaskByIdHeaders, 'extraHeaders'>>);
}
export interface GetTaskByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateTaskByIdRequestBodyActionField = 'review' | 'complete' | string;
export type UpdateTaskByIdRequestBodyCompletionRuleField = 'all_assignees' | 'any_assignee' | string;
export interface UpdateTaskByIdRequestBody {
    /**
     * The action the task assignee will be prompted to do. Must be
     *
     * * `review` defines an approval task that can be approved or
     * rejected,
     * * `complete` defines a general task which can be completed. */
    readonly action?: UpdateTaskByIdRequestBodyActionField;
    /**
     * The message included with the task. */
    readonly message?: string;
    /**
     * When the task is due at. */
    readonly dueAt?: DateTime;
    /**
     * Defines which assignees need to complete this task before the task
     * is considered completed.
     *
     * * `all_assignees` (default) requires all assignees to review or
     * approve the the task in order for it to be considered completed.
     * * `any_assignee` accepts any one assignee to review or
     * approve the the task in order for it to be considered completed. */
    readonly completionRule?: UpdateTaskByIdRequestBodyCompletionRuleField;
    readonly rawData?: SerializedData;
}
export declare class UpdateTaskByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateTaskByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateTaskByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateTaskByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTaskByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTaskByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTaskByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTaskByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TasksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TasksManager, 'networkSession' | 'getFileTasks' | 'createTask' | 'getTaskById' | 'updateTaskById' | 'deleteTaskById'> & Partial<Pick<TasksManager, 'networkSession'>>);
    /**
       * Retrieves a list of all the tasks for a file. This
       * endpoint does not support pagination.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileTasksOptionalsInput} optionalsInput
       * @returns {Promise<Tasks>}
       */
    getFileTasks(fileId: string, optionalsInput?: GetFileTasksOptionalsInput): Promise<Tasks>;
    /**
     * Creates a single task on a file. This task is not assigned to any user and
     * will need to be assigned separately.
     * @param {CreateTaskRequestBody} requestBody Request body of createTask method
     * @param {CreateTaskOptionalsInput} optionalsInput
     * @returns {Promise<Task>}
     */
    createTask(requestBody: CreateTaskRequestBody, optionalsInput?: CreateTaskOptionalsInput): Promise<Task>;
    /**
       * Retrieves information about a specific task.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {GetTaskByIdOptionalsInput} optionalsInput
       * @returns {Promise<Task>}
       */
    getTaskById(taskId: string, optionalsInput?: GetTaskByIdOptionalsInput): Promise<Task>;
    /**
       * Updates a task. This can be used to update a task's configuration, or to
       * update its completion state.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {UpdateTaskByIdOptionalsInput} optionalsInput
       * @returns {Promise<Task>}
       */
    updateTaskById(taskId: string, optionalsInput?: UpdateTaskByIdOptionalsInput): Promise<Task>;
    /**
       * Removes a task from a file.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {DeleteTaskByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTaskById(taskId: string, optionalsInput?: DeleteTaskByIdOptionalsInput): Promise<undefined>;
}
export interface TasksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateTaskRequestBodyItemTypeField(val: CreateTaskRequestBodyItemTypeField): SerializedData;
export declare function deserializeCreateTaskRequestBodyItemTypeField(val: SerializedData): CreateTaskRequestBodyItemTypeField;
export declare function serializeCreateTaskRequestBodyItemField(val: CreateTaskRequestBodyItemField): SerializedData;
export declare function deserializeCreateTaskRequestBodyItemField(val: SerializedData): CreateTaskRequestBodyItemField;
export declare function serializeCreateTaskRequestBodyActionField(val: CreateTaskRequestBodyActionField): SerializedData;
export declare function deserializeCreateTaskRequestBodyActionField(val: SerializedData): CreateTaskRequestBodyActionField;
export declare function serializeCreateTaskRequestBodyCompletionRuleField(val: CreateTaskRequestBodyCompletionRuleField): SerializedData;
export declare function deserializeCreateTaskRequestBodyCompletionRuleField(val: SerializedData): CreateTaskRequestBodyCompletionRuleField;
export declare function serializeCreateTaskRequestBody(val: CreateTaskRequestBody): SerializedData;
export declare function deserializeCreateTaskRequestBody(val: SerializedData): CreateTaskRequestBody;
export declare function serializeUpdateTaskByIdRequestBodyActionField(val: UpdateTaskByIdRequestBodyActionField): SerializedData;
export declare function deserializeUpdateTaskByIdRequestBodyActionField(val: SerializedData): UpdateTaskByIdRequestBodyActionField;
export declare function serializeUpdateTaskByIdRequestBodyCompletionRuleField(val: UpdateTaskByIdRequestBodyCompletionRuleField): SerializedData;
export declare function deserializeUpdateTaskByIdRequestBodyCompletionRuleField(val: SerializedData): UpdateTaskByIdRequestBodyCompletionRuleField;
export declare function serializeUpdateTaskByIdRequestBody(val: UpdateTaskByIdRequestBody): SerializedData;
export declare function deserializeUpdateTaskByIdRequestBody(val: SerializedData): UpdateTaskByIdRequestBody;
