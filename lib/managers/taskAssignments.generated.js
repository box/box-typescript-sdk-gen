"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskAssignmentsManager = exports.DeleteTaskAssignmentByIdHeaders = exports.UpdateTaskAssignmentByIdHeaders = exports.GetTaskAssignmentByIdHeaders = exports.CreateTaskAssignmentHeaders = exports.CreateTaskAssignmentRequestBodyTaskField = exports.GetTaskAssignmentsHeaders = exports.DeleteTaskAssignmentByIdOptionals = exports.UpdateTaskAssignmentByIdOptionals = exports.GetTaskAssignmentByIdOptionals = exports.CreateTaskAssignmentOptionals = exports.GetTaskAssignmentsOptionals = void 0;
exports.serializeCreateTaskAssignmentRequestBodyTaskTypeField = serializeCreateTaskAssignmentRequestBodyTaskTypeField;
exports.deserializeCreateTaskAssignmentRequestBodyTaskTypeField = deserializeCreateTaskAssignmentRequestBodyTaskTypeField;
exports.serializeCreateTaskAssignmentRequestBodyTaskField = serializeCreateTaskAssignmentRequestBodyTaskField;
exports.deserializeCreateTaskAssignmentRequestBodyTaskField = deserializeCreateTaskAssignmentRequestBodyTaskField;
exports.serializeCreateTaskAssignmentRequestBodyTaskFieldInput = serializeCreateTaskAssignmentRequestBodyTaskFieldInput;
exports.deserializeCreateTaskAssignmentRequestBodyTaskFieldInput = deserializeCreateTaskAssignmentRequestBodyTaskFieldInput;
exports.serializeCreateTaskAssignmentRequestBodyAssignToField = serializeCreateTaskAssignmentRequestBodyAssignToField;
exports.deserializeCreateTaskAssignmentRequestBodyAssignToField = deserializeCreateTaskAssignmentRequestBodyAssignToField;
exports.serializeCreateTaskAssignmentRequestBody = serializeCreateTaskAssignmentRequestBody;
exports.deserializeCreateTaskAssignmentRequestBody = deserializeCreateTaskAssignmentRequestBody;
exports.serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField = serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField;
exports.deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField = deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField;
exports.serializeUpdateTaskAssignmentByIdRequestBody = serializeUpdateTaskAssignmentByIdRequestBody;
exports.deserializeUpdateTaskAssignmentByIdRequestBody = deserializeUpdateTaskAssignmentByIdRequestBody;
const taskAssignments_generated_js_1 = require("../schemas/taskAssignments.generated.js");
const taskAssignment_generated_js_1 = require("../schemas/taskAssignment.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetTaskAssignmentsOptionals {
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
exports.GetTaskAssignmentsOptionals = GetTaskAssignmentsOptionals;
class CreateTaskAssignmentOptionals {
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
exports.CreateTaskAssignmentOptionals = CreateTaskAssignmentOptionals;
class GetTaskAssignmentByIdOptionals {
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
exports.GetTaskAssignmentByIdOptionals = GetTaskAssignmentByIdOptionals;
class UpdateTaskAssignmentByIdOptionals {
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
exports.UpdateTaskAssignmentByIdOptionals = UpdateTaskAssignmentByIdOptionals;
class DeleteTaskAssignmentByIdOptionals {
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
exports.DeleteTaskAssignmentByIdOptionals = DeleteTaskAssignmentByIdOptionals;
class GetTaskAssignmentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTaskAssignmentsHeaders = GetTaskAssignmentsHeaders;
class CreateTaskAssignmentRequestBodyTaskField {
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
exports.CreateTaskAssignmentRequestBodyTaskField = CreateTaskAssignmentRequestBodyTaskField;
class CreateTaskAssignmentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateTaskAssignmentHeaders = CreateTaskAssignmentHeaders;
class GetTaskAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTaskAssignmentByIdHeaders = GetTaskAssignmentByIdHeaders;
class UpdateTaskAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateTaskAssignmentByIdHeaders = UpdateTaskAssignmentByIdHeaders;
class DeleteTaskAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteTaskAssignmentByIdHeaders = DeleteTaskAssignmentByIdHeaders;
class TaskAssignmentsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
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
    getTaskAssignments(taskId_1) {
        return __awaiter(this, arguments, void 0, function* (taskId, optionalsInput = {}) {
            const optionals = new GetTaskAssignmentsOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/tasks/', (0, utils_js_2.toString)(taskId), '/assignments'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, taskAssignments_generated_js_1.deserializeTaskAssignments)(response.data)), { rawData: response.data });
        });
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
    createTaskAssignment(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateTaskAssignmentOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
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
            return Object.assign(Object.assign({}, (0, taskAssignment_generated_js_1.deserializeTaskAssignment)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves information about a task assignment.
       * @param {string} taskAssignmentId The ID of the task assignment.
      Example: "12345"
       * @param {GetTaskAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<TaskAssignment>}
       */
    getTaskAssignmentById(taskAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (taskAssignmentId, optionalsInput = {}) {
            const optionals = new GetTaskAssignmentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/task_assignments/', (0, utils_js_2.toString)(taskAssignmentId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, taskAssignment_generated_js_1.deserializeTaskAssignment)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a task assignment. This endpoint can be
       * used to update the state of a task assigned to a user.
       * @param {string} taskAssignmentId The ID of the task assignment.
      Example: "12345"
       * @param {UpdateTaskAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<TaskAssignment>}
       */
    updateTaskAssignmentById(taskAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (taskAssignmentId, optionalsInput = {}) {
            const optionals = new UpdateTaskAssignmentByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/task_assignments/', (0, utils_js_2.toString)(taskAssignmentId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateTaskAssignmentByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, taskAssignment_generated_js_1.deserializeTaskAssignment)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a specific task assignment.
       * @param {string} taskAssignmentId The ID of the task assignment.
      Example: "12345"
       * @param {DeleteTaskAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTaskAssignmentById(taskAssignmentId_1) {
        return __awaiter(this, arguments, void 0, function* (taskAssignmentId, optionalsInput = {}) {
            const optionals = new DeleteTaskAssignmentByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/task_assignments/', (0, utils_js_2.toString)(taskAssignmentId)),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
}
exports.TaskAssignmentsManager = TaskAssignmentsManager;
function serializeCreateTaskAssignmentRequestBodyTaskTypeField(val) {
    return val;
}
function deserializeCreateTaskAssignmentRequestBodyTaskTypeField(val) {
    if (val == 'task') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateTaskAssignmentRequestBodyTaskTypeField",
    });
}
function serializeCreateTaskAssignmentRequestBodyTaskField(val) {
    return {
        ['id']: val.id,
        ['type']: serializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type),
    };
}
function deserializeCreateTaskAssignmentRequestBodyTaskField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTaskAssignmentRequestBodyTaskField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateTaskAssignmentRequestBodyTaskField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTaskAssignmentRequestBodyTaskField"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateTaskAssignmentRequestBodyTaskField" to be defined',
        });
    }
    const type = deserializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
function serializeCreateTaskAssignmentRequestBodyTaskFieldInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateTaskAssignmentRequestBodyTaskTypeField(val.type),
    };
}
function deserializeCreateTaskAssignmentRequestBodyTaskFieldInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTaskAssignmentRequestBodyTaskFieldInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateTaskAssignmentRequestBodyTaskFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeCreateTaskAssignmentRequestBodyAssignToField(val) {
    return { ['id']: val.id, ['login']: val.login };
}
function deserializeCreateTaskAssignmentRequestBodyAssignToField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTaskAssignmentRequestBodyAssignToField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTaskAssignmentRequestBodyAssignToField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.login == void 0) && !(0, json_js_1.sdIsString)(val.login)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "login" of type "CreateTaskAssignmentRequestBodyAssignToField"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    return {
        id: id,
        login: login,
    };
}
function serializeCreateTaskAssignmentRequestBody(val) {
    return {
        ['task']: serializeCreateTaskAssignmentRequestBodyTaskField(val.task),
        ['assign_to']: serializeCreateTaskAssignmentRequestBodyAssignToField(val.assignTo),
    };
}
function deserializeCreateTaskAssignmentRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTaskAssignmentRequestBody"',
        });
    }
    if (val.task == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "task" of type "CreateTaskAssignmentRequestBody" to be defined',
        });
    }
    const task = deserializeCreateTaskAssignmentRequestBodyTaskField(val.task);
    if (val.assign_to == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "assign_to" of type "CreateTaskAssignmentRequestBody" to be defined',
        });
    }
    const assignTo = deserializeCreateTaskAssignmentRequestBodyAssignToField(val.assign_to);
    return {
        task: task,
        assignTo: assignTo,
    };
}
function serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val) {
    return val;
}
function deserializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val) {
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
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateTaskAssignmentByIdRequestBodyResolutionStateField",
    });
}
function serializeUpdateTaskAssignmentByIdRequestBody(val) {
    return {
        ['message']: val.message,
        ['resolution_state']: val.resolutionState == void 0
            ? val.resolutionState
            : serializeUpdateTaskAssignmentByIdRequestBodyResolutionStateField(val.resolutionState),
    };
}
function deserializeUpdateTaskAssignmentByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateTaskAssignmentByIdRequestBody"',
        });
    }
    if (!(val.message == void 0) && !(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
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