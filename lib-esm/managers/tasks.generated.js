import { deserializeTasks } from '../schemas/tasks.generated.js';
import { deserializeTask } from '../schemas/task.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileTasksOptionals {
    constructor(fields) {
        this.headers = new GetFileTasksHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateTaskOptionals {
    constructor(fields) {
        this.headers = new CreateTaskHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetTaskByIdOptionals {
    constructor(fields) {
        this.headers = new GetTaskByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateTaskByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateTaskByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteTaskByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteTaskByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFileTasksHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateTaskHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetTaskByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateTaskByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteTaskByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class TasksManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
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
    async getFileTasks(fileId, optionalsInput = {}) {
        const optionals = new GetFileTasksOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/tasks'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTasks(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a single task on a file. This task is not assigned to any user and
     * will need to be assigned separately.
     * @param {CreateTaskRequestBody} requestBody Request body of createTask method
     * @param {CreateTaskOptionalsInput} optionalsInput
     * @returns {Promise<Task>}
     */
    async createTask(requestBody, optionalsInput = {}) {
        const optionals = new CreateTaskOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/tasks'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateTaskRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTask(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves information about a specific task.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {GetTaskByIdOptionalsInput} optionalsInput
       * @returns {Promise<Task>}
       */
    async getTaskById(taskId, optionalsInput = {}) {
        const optionals = new GetTaskByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/tasks/', toString(taskId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTask(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a task. This can be used to update a task's configuration, or to
       * update its completion state.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {UpdateTaskByIdOptionalsInput} optionalsInput
       * @returns {Promise<Task>}
       */
    async updateTaskById(taskId, optionalsInput = {}) {
        const optionals = new UpdateTaskByIdOptionals({
            requestBody: optionalsInput.requestBody,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/tasks/', toString(taskId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateTaskByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTask(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes a task from a file.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {DeleteTaskByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteTaskById(taskId, optionalsInput = {}) {
        const optionals = new DeleteTaskByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/tasks/', toString(taskId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
export function serializeCreateTaskRequestBodyItemTypeField(val) {
    return val;
}
export function deserializeCreateTaskRequestBodyItemTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateTaskRequestBodyItemTypeField",
    });
}
export function serializeCreateTaskRequestBodyItemField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateTaskRequestBodyItemTypeField(val.type),
    };
}
export function deserializeCreateTaskRequestBodyItemField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTaskRequestBodyItemField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTaskRequestBodyItemField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCreateTaskRequestBodyItemTypeField(val.type);
    return { id: id, type: type };
}
export function serializeCreateTaskRequestBodyActionField(val) {
    return val;
}
export function deserializeCreateTaskRequestBodyActionField(val) {
    if (val == 'review') {
        return val;
    }
    if (val == 'complete') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateTaskRequestBodyActionField",
    });
}
export function serializeCreateTaskRequestBodyCompletionRuleField(val) {
    return val;
}
export function deserializeCreateTaskRequestBodyCompletionRuleField(val) {
    if (val == 'all_assignees') {
        return val;
    }
    if (val == 'any_assignee') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateTaskRequestBodyCompletionRuleField",
    });
}
export function serializeCreateTaskRequestBody(val) {
    return {
        ['item']: serializeCreateTaskRequestBodyItemField(val.item),
        ['action']: val.action == void 0
            ? val.action
            : serializeCreateTaskRequestBodyActionField(val.action),
        ['message']: val.message,
        ['due_at']: val.dueAt == void 0 ? val.dueAt : serializeDateTime(val.dueAt),
        ['completion_rule']: val.completionRule == void 0
            ? val.completionRule
            : serializeCreateTaskRequestBodyCompletionRuleField(val.completionRule),
    };
}
export function deserializeCreateTaskRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTaskRequestBody"',
        });
    }
    if (val.item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item" of type "CreateTaskRequestBody" to be defined',
        });
    }
    const item = deserializeCreateTaskRequestBodyItemField(val.item);
    const action = val.action == void 0
        ? void 0
        : deserializeCreateTaskRequestBodyActionField(val.action);
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "CreateTaskRequestBody"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.due_at == void 0) && !sdIsString(val.due_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "due_at" of type "CreateTaskRequestBody"',
        });
    }
    const dueAt = val.due_at == void 0 ? void 0 : deserializeDateTime(val.due_at);
    const completionRule = val.completion_rule == void 0
        ? void 0
        : deserializeCreateTaskRequestBodyCompletionRuleField(val.completion_rule);
    return {
        item: item,
        action: action,
        message: message,
        dueAt: dueAt,
        completionRule: completionRule,
    };
}
export function serializeUpdateTaskByIdRequestBodyActionField(val) {
    return val;
}
export function deserializeUpdateTaskByIdRequestBodyActionField(val) {
    if (val == 'review') {
        return val;
    }
    if (val == 'complete') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateTaskByIdRequestBodyActionField",
    });
}
export function serializeUpdateTaskByIdRequestBodyCompletionRuleField(val) {
    return val;
}
export function deserializeUpdateTaskByIdRequestBodyCompletionRuleField(val) {
    if (val == 'all_assignees') {
        return val;
    }
    if (val == 'any_assignee') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateTaskByIdRequestBodyCompletionRuleField",
    });
}
export function serializeUpdateTaskByIdRequestBody(val) {
    return {
        ['action']: val.action == void 0
            ? val.action
            : serializeUpdateTaskByIdRequestBodyActionField(val.action),
        ['message']: val.message,
        ['due_at']: val.dueAt == void 0 ? val.dueAt : serializeDateTime(val.dueAt),
        ['completion_rule']: val.completionRule == void 0
            ? val.completionRule
            : serializeUpdateTaskByIdRequestBodyCompletionRuleField(val.completionRule),
    };
}
export function deserializeUpdateTaskByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateTaskByIdRequestBody"',
        });
    }
    const action = val.action == void 0
        ? void 0
        : deserializeUpdateTaskByIdRequestBodyActionField(val.action);
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "UpdateTaskByIdRequestBody"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.due_at == void 0) && !sdIsString(val.due_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "due_at" of type "UpdateTaskByIdRequestBody"',
        });
    }
    const dueAt = val.due_at == void 0 ? void 0 : deserializeDateTime(val.due_at);
    const completionRule = val.completion_rule == void 0
        ? void 0
        : deserializeUpdateTaskByIdRequestBodyCompletionRuleField(val.completion_rule);
    return {
        action: action,
        message: message,
        dueAt: dueAt,
        completionRule: completionRule,
    };
}
//# sourceMappingURL=tasks.generated.js.map