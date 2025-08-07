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
exports.TasksManager = exports.DeleteTaskByIdHeaders = exports.UpdateTaskByIdHeaders = exports.GetTaskByIdHeaders = exports.CreateTaskHeaders = exports.GetFileTasksHeaders = exports.DeleteTaskByIdOptionals = exports.UpdateTaskByIdOptionals = exports.GetTaskByIdOptionals = exports.CreateTaskOptionals = exports.GetFileTasksOptionals = void 0;
exports.serializeCreateTaskRequestBodyItemTypeField = serializeCreateTaskRequestBodyItemTypeField;
exports.deserializeCreateTaskRequestBodyItemTypeField = deserializeCreateTaskRequestBodyItemTypeField;
exports.serializeCreateTaskRequestBodyItemField = serializeCreateTaskRequestBodyItemField;
exports.deserializeCreateTaskRequestBodyItemField = deserializeCreateTaskRequestBodyItemField;
exports.serializeCreateTaskRequestBodyActionField = serializeCreateTaskRequestBodyActionField;
exports.deserializeCreateTaskRequestBodyActionField = deserializeCreateTaskRequestBodyActionField;
exports.serializeCreateTaskRequestBodyCompletionRuleField = serializeCreateTaskRequestBodyCompletionRuleField;
exports.deserializeCreateTaskRequestBodyCompletionRuleField = deserializeCreateTaskRequestBodyCompletionRuleField;
exports.serializeCreateTaskRequestBody = serializeCreateTaskRequestBody;
exports.deserializeCreateTaskRequestBody = deserializeCreateTaskRequestBody;
exports.serializeUpdateTaskByIdRequestBodyActionField = serializeUpdateTaskByIdRequestBodyActionField;
exports.deserializeUpdateTaskByIdRequestBodyActionField = deserializeUpdateTaskByIdRequestBodyActionField;
exports.serializeUpdateTaskByIdRequestBodyCompletionRuleField = serializeUpdateTaskByIdRequestBodyCompletionRuleField;
exports.deserializeUpdateTaskByIdRequestBodyCompletionRuleField = deserializeUpdateTaskByIdRequestBodyCompletionRuleField;
exports.serializeUpdateTaskByIdRequestBody = serializeUpdateTaskByIdRequestBody;
exports.deserializeUpdateTaskByIdRequestBody = deserializeUpdateTaskByIdRequestBody;
const tasks_generated_js_1 = require("../schemas/tasks.generated.js");
const task_generated_js_1 = require("../schemas/task.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetFileTasksOptionals {
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
exports.GetFileTasksOptionals = GetFileTasksOptionals;
class CreateTaskOptionals {
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
exports.CreateTaskOptionals = CreateTaskOptionals;
class GetTaskByIdOptionals {
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
exports.GetTaskByIdOptionals = GetTaskByIdOptionals;
class UpdateTaskByIdOptionals {
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
exports.UpdateTaskByIdOptionals = UpdateTaskByIdOptionals;
class DeleteTaskByIdOptionals {
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
exports.DeleteTaskByIdOptionals = DeleteTaskByIdOptionals;
class GetFileTasksHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetFileTasksHeaders = GetFileTasksHeaders;
class CreateTaskHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateTaskHeaders = CreateTaskHeaders;
class GetTaskByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTaskByIdHeaders = GetTaskByIdHeaders;
class UpdateTaskByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateTaskByIdHeaders = UpdateTaskByIdHeaders;
class DeleteTaskByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteTaskByIdHeaders = DeleteTaskByIdHeaders;
class TasksManager {
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
    getFileTasks(fileId_1) {
        return __awaiter(this, arguments, void 0, function* (fileId, optionalsInput = {}) {
            const optionals = new GetFileTasksOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', (0, utils_js_4.toString)(fileId), '/tasks'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, tasks_generated_js_1.deserializeTasks)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a single task on a file. This task is not assigned to any user and
     * will need to be assigned separately.
     * @param {CreateTaskRequestBody} requestBody Request body of createTask method
     * @param {CreateTaskOptionalsInput} optionalsInput
     * @returns {Promise<Task>}
     */
    createTask(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateTaskOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
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
            return Object.assign(Object.assign({}, (0, task_generated_js_1.deserializeTask)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves information about a specific task.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {GetTaskByIdOptionalsInput} optionalsInput
       * @returns {Promise<Task>}
       */
    getTaskById(taskId_1) {
        return __awaiter(this, arguments, void 0, function* (taskId, optionalsInput = {}) {
            const optionals = new GetTaskByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/tasks/', (0, utils_js_4.toString)(taskId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, task_generated_js_1.deserializeTask)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a task. This can be used to update a task's configuration, or to
       * update its completion state.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {UpdateTaskByIdOptionalsInput} optionalsInput
       * @returns {Promise<Task>}
       */
    updateTaskById(taskId_1) {
        return __awaiter(this, arguments, void 0, function* (taskId, optionalsInput = {}) {
            const optionals = new UpdateTaskByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/tasks/', (0, utils_js_4.toString)(taskId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateTaskByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, task_generated_js_1.deserializeTask)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Removes a task from a file.
       * @param {string} taskId The ID of the task.
      Example: "12345"
       * @param {DeleteTaskByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTaskById(taskId_1) {
        return __awaiter(this, arguments, void 0, function* (taskId, optionalsInput = {}) {
            const optionals = new DeleteTaskByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_3.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/tasks/', (0, utils_js_4.toString)(taskId)),
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
exports.TasksManager = TasksManager;
function serializeCreateTaskRequestBodyItemTypeField(val) {
    return val;
}
function deserializeCreateTaskRequestBodyItemTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateTaskRequestBodyItemTypeField",
    });
}
function serializeCreateTaskRequestBodyItemField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateTaskRequestBodyItemTypeField(val.type),
    };
}
function deserializeCreateTaskRequestBodyItemField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTaskRequestBodyItemField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTaskRequestBodyItemField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCreateTaskRequestBodyItemTypeField(val.type);
    return { id: id, type: type };
}
function serializeCreateTaskRequestBodyActionField(val) {
    return val;
}
function deserializeCreateTaskRequestBodyActionField(val) {
    if (val == 'review') {
        return val;
    }
    if (val == 'complete') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateTaskRequestBodyActionField",
    });
}
function serializeCreateTaskRequestBodyCompletionRuleField(val) {
    return val;
}
function deserializeCreateTaskRequestBodyCompletionRuleField(val) {
    if (val == 'all_assignees') {
        return val;
    }
    if (val == 'any_assignee') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateTaskRequestBodyCompletionRuleField",
    });
}
function serializeCreateTaskRequestBody(val) {
    return {
        ['item']: serializeCreateTaskRequestBodyItemField(val.item),
        ['action']: val.action == void 0
            ? val.action
            : serializeCreateTaskRequestBodyActionField(val.action),
        ['message']: val.message,
        ['due_at']: val.dueAt == void 0 ? val.dueAt : (0, utils_js_1.serializeDateTime)(val.dueAt),
        ['completion_rule']: val.completionRule == void 0
            ? val.completionRule
            : serializeCreateTaskRequestBodyCompletionRuleField(val.completionRule),
    };
}
function deserializeCreateTaskRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateTaskRequestBody"',
        });
    }
    if (val.item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "item" of type "CreateTaskRequestBody" to be defined',
        });
    }
    const item = deserializeCreateTaskRequestBodyItemField(val.item);
    const action = val.action == void 0
        ? void 0
        : deserializeCreateTaskRequestBodyActionField(val.action);
    if (!(val.message == void 0) && !(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "CreateTaskRequestBody"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.due_at == void 0) && !(0, json_js_1.sdIsString)(val.due_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "due_at" of type "CreateTaskRequestBody"',
        });
    }
    const dueAt = val.due_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.due_at);
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
function serializeUpdateTaskByIdRequestBodyActionField(val) {
    return val;
}
function deserializeUpdateTaskByIdRequestBodyActionField(val) {
    if (val == 'review') {
        return val;
    }
    if (val == 'complete') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateTaskByIdRequestBodyActionField",
    });
}
function serializeUpdateTaskByIdRequestBodyCompletionRuleField(val) {
    return val;
}
function deserializeUpdateTaskByIdRequestBodyCompletionRuleField(val) {
    if (val == 'all_assignees') {
        return val;
    }
    if (val == 'any_assignee') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateTaskByIdRequestBodyCompletionRuleField",
    });
}
function serializeUpdateTaskByIdRequestBody(val) {
    return {
        ['action']: val.action == void 0
            ? val.action
            : serializeUpdateTaskByIdRequestBodyActionField(val.action),
        ['message']: val.message,
        ['due_at']: val.dueAt == void 0 ? val.dueAt : (0, utils_js_1.serializeDateTime)(val.dueAt),
        ['completion_rule']: val.completionRule == void 0
            ? val.completionRule
            : serializeUpdateTaskByIdRequestBodyCompletionRuleField(val.completionRule),
    };
}
function deserializeUpdateTaskByIdRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateTaskByIdRequestBody"',
        });
    }
    const action = val.action == void 0
        ? void 0
        : deserializeUpdateTaskByIdRequestBodyActionField(val.action);
    if (!(val.message == void 0) && !(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "UpdateTaskByIdRequestBody"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.due_at == void 0) && !(0, json_js_1.sdIsString)(val.due_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "due_at" of type "UpdateTaskByIdRequestBody"',
        });
    }
    const dueAt = val.due_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.due_at);
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