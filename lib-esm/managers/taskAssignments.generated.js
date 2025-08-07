import { deserializeTaskAssignments } from '../schemas/taskAssignments.generated.js';
import { deserializeTaskAssignment } from '../schemas/taskAssignment.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetTaskAssignmentsOptionals {
    constructor(fields) {
        this.headers = new GetTaskAssignmentsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateTaskAssignmentOptionals {
    constructor(fields) {
        this.headers = new CreateTaskAssignmentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetTaskAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new GetTaskAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateTaskAssignmentByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateTaskAssignmentByIdHeaders({});
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
export class DeleteTaskAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteTaskAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetTaskAssignmentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateTaskAssignmentRequestBodyTaskField {
    constructor(fields) {
        /**
         * The type of the item to assign. */
        this.type = 'task';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class CreateTaskAssignmentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetTaskAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateTaskAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteTaskAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class TaskAssignmentsManager {
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
       * Lists all of the assignments for a given task.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {GetTaskAssignmentsOptionalsInput} optionalsInput
       * @returns {Promise<TaskAssignments>}
       */
    async getTaskAssignments(taskId, optionalsInput = {}) {
        const optionals = new GetTaskAssignmentsOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/tasks/', toString(taskId), '/assignments'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTaskAssignments(response.data),
            rawData: response.data,
        };
    }
    /**
     * Assigns a task to a user.
     *
     * A task can be assigned to more than one user by creating multiple
     * assignments.
     * @param {CreateTaskAssignmentRequestBody} requestBody Request body of createTaskAssignment method
     * @param {CreateTaskAssignmentOptionalsInput} optionalsInput
     * @returns {Promise<TaskAssignment>}
     */
    async createTaskAssignment(requestBody, optionalsInput = {}) {
        const optionals = new CreateTaskAssignmentOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/task_assignments'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateTaskAssignmentRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTaskAssignment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves information about a task assignment.
       * @param {string} taskAssignmentId The ID of the task assignment.
      Example: "12345"
       * @param {GetTaskAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<TaskAssignment>}
       */
    async getTaskAssignmentById(taskAssignmentId, optionalsInput = {}) {
        const optionals = new GetTaskAssignmentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/task_assignments/', toString(taskAssignmentId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTaskAssignment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a task assignment. This endpoint can be
       * used to update the state of a task assigned to a user.
       * @param {string} taskAssignmentId The ID of the task assignment.
      Example: "12345"
       * @param {UpdateTaskAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<TaskAssignment>}
       */
    async updateTaskAssignmentById(taskAssignmentId, optionalsInput = {}) {
        const optionals = new UpdateTaskAssignmentByIdOptionals({
            requestBody: optionalsInput.requestBody,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/task_assignments/', toString(taskAssignmentId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateTaskAssignmentByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTaskAssignment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes a specific task assignment.
       * @param {string} taskAssignmentId The ID of the task assignment.
      Example: "12345"
       * @param {DeleteTaskAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteTaskAssignmentById(taskAssignmentId, optionalsInput = {}) {
        const optionals = new DeleteTaskAssignmentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/task_assignments/', toString(taskAssignmentId)),
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
export function serializeCreateTaskAssignmentRequestBodyTaskTypeField(val) {
    return val;
}
export function deserializeCreateTaskAssignmentRequestBodyTaskTypeField(val) {
    if (val == 'task') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateTaskAssignmentRequestBodyTaskTypeField",
    });
}
export function serializeCreateTaskAssignmentRequestBodyTaskField(val) {
    return {
        ['id']: val.id,
        ['type']: serializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type),
    };
}
export function deserializeCreateTaskAssignmentRequestBodyTaskField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTaskAssignmentRequestBodyTaskField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateTaskAssignmentRequestBodyTaskField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTaskAssignmentRequestBodyTaskField"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateTaskAssignmentRequestBodyTaskField" to be defined',
        });
    }
    const type = deserializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
export function serializeCreateTaskAssignmentRequestBodyTaskFieldInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type),
    };
}
export function deserializeCreateTaskAssignmentRequestBodyTaskFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTaskAssignmentRequestBodyTaskFieldInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateTaskAssignmentRequestBodyTaskFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTaskAssignmentRequestBodyTaskFieldInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
export function serializeCreateTaskAssignmentRequestBodyAssignToField(val) {
    return { ['id']: val.id, ['login']: val.login };
}
export function deserializeCreateTaskAssignmentRequestBodyAssignToField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTaskAssignmentRequestBodyAssignToField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTaskAssignmentRequestBodyAssignToField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.login == void 0) && !sdIsString(val.login)) {
        throw new BoxSdkError({
            message: 'Expecting string for "login" of type "CreateTaskAssignmentRequestBodyAssignToField"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    return {
        id: id,
        login: login,
    };
}
export function serializeCreateTaskAssignmentRequestBody(val) {
    return {
        ['task']: serializeCreateTaskAssignmentRequestBodyTaskField(val.task),
        ['assign_to']: serializeCreateTaskAssignmentRequestBodyAssignToField(val.assignTo),
    };
}
export function deserializeCreateTaskAssignmentRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTaskAssignmentRequestBody"',
        });
    }
    if (val.task == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "task" of type "CreateTaskAssignmentRequestBody" to be defined',
        });
    }
    const task = deserializeCreateTaskAssignmentRequestBodyTaskField(val.task);
    if (val.assign_to == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "assign_to" of type "CreateTaskAssignmentRequestBody" to be defined',
        });
    }
    const assignTo = deserializeCreateTaskAssignmentRequestBodyAssignToField(val.assign_to);
    return {
        task: task,
        assignTo: assignTo,
    };
}
export function serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val) {
    return val;
}
export function deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val) {
    if (val == 'completed') {
        return val;
    }
    if (val == 'incomplete') {
        return val;
    }
    if (val == 'approved') {
        return val;
    }
    if (val == 'rejected') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateTaskAssignmentByIdRequestBodyResolutionStateField",
    });
}
export function serializeUpdateTaskAssignmentByIdRequestBody(val) {
    return {
        ['message']: val.message,
        ['resolution_state']: val.resolutionState == void 0
            ? val.resolutionState
            : serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val.resolutionState),
    };
}
export function deserializeUpdateTaskAssignmentByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateTaskAssignmentByIdRequestBody"',
        });
    }
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "UpdateTaskAssignmentByIdRequestBody"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    const resolutionState = val.resolution_state == void 0
        ? void 0
        : deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val.resolution_state);
    return {
        message: message,
        resolutionState: resolutionState,
    };
}
//# sourceMappingURL=taskAssignments.generated.js.map