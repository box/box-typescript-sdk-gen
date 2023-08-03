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
exports.deserializeUpdateTaskByIdRequestBodyArg = exports.serializeUpdateTaskByIdRequestBodyArg = exports.deserializeUpdateTaskByIdRequestBodyArgCompletionRuleField = exports.serializeUpdateTaskByIdRequestBodyArgCompletionRuleField = exports.deserializeUpdateTaskByIdRequestBodyArgActionField = exports.serializeUpdateTaskByIdRequestBodyArgActionField = exports.deserializeCreateTaskRequestBodyArg = exports.serializeCreateTaskRequestBodyArg = exports.deserializeCreateTaskRequestBodyArgCompletionRuleField = exports.serializeCreateTaskRequestBodyArgCompletionRuleField = exports.deserializeCreateTaskRequestBodyArgActionField = exports.serializeCreateTaskRequestBodyArgActionField = exports.deserializeCreateTaskRequestBodyArgItemField = exports.serializeCreateTaskRequestBodyArgItemField = exports.deserializeCreateTaskRequestBodyArgItemFieldTypeField = exports.serializeCreateTaskRequestBodyArgItemFieldTypeField = exports.TasksManager = exports.DeleteTaskByIdHeadersArg = exports.UpdateTaskByIdHeadersArg = exports.GetTaskByIdHeadersArg = exports.CreateTaskHeadersArg = exports.GetFileTasksHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetFileTasksHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetFileTasksHeadersArg = GetFileTasksHeadersArg;
class CreateTaskHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateTaskHeadersArg = CreateTaskHeadersArg;
class GetTaskByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetTaskByIdHeadersArg = GetTaskByIdHeadersArg;
class UpdateTaskByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateTaskByIdHeadersArg = UpdateTaskByIdHeadersArg;
class DeleteTaskByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteTaskByIdHeadersArg = DeleteTaskByIdHeadersArg;
class TasksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileTasks(fileId, headers = new GetFileTasksHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/tasks"), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeTasks)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createTask(requestBody, headers = new CreateTaskHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/tasks"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateTaskRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTask)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getTaskById(taskId, headers = new GetTaskByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/tasks/", taskId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTask)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateTaskById(taskId, requestBody, headers = new UpdateTaskByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/tasks/", taskId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateTaskByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTask)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteTaskById(taskId, headers = new DeleteTaskByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/tasks/", taskId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.TasksManager = TasksManager;
function serializeCreateTaskRequestBodyArgItemFieldTypeField(val) {
    return val;
}
exports.serializeCreateTaskRequestBodyArgItemFieldTypeField = serializeCreateTaskRequestBodyArgItemFieldTypeField;
function deserializeCreateTaskRequestBodyArgItemFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTaskRequestBodyArgItemFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateTaskRequestBodyArgItemFieldTypeField = deserializeCreateTaskRequestBodyArgItemFieldTypeField;
function serializeCreateTaskRequestBodyArgItemField(val) {
    return { ["id"]: val.id, ["type"]: serializeCreateTaskRequestBodyArgItemFieldTypeField(val.type) };
}
exports.serializeCreateTaskRequestBodyArgItemField = serializeCreateTaskRequestBodyArgItemField;
function deserializeCreateTaskRequestBodyArgItemField(val) {
    const id = val.id;
    const type = deserializeCreateTaskRequestBodyArgItemFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeCreateTaskRequestBodyArgItemField = deserializeCreateTaskRequestBodyArgItemField;
function serializeCreateTaskRequestBodyArgActionField(val) {
    return val;
}
exports.serializeCreateTaskRequestBodyArgActionField = serializeCreateTaskRequestBodyArgActionField;
function deserializeCreateTaskRequestBodyArgActionField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTaskRequestBodyArgActionField\"";
    }
    if (val == "review") {
        return "review";
    }
    if (val == "complete") {
        return "complete";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateTaskRequestBodyArgActionField = deserializeCreateTaskRequestBodyArgActionField;
function serializeCreateTaskRequestBodyArgCompletionRuleField(val) {
    return val;
}
exports.serializeCreateTaskRequestBodyArgCompletionRuleField = serializeCreateTaskRequestBodyArgCompletionRuleField;
function deserializeCreateTaskRequestBodyArgCompletionRuleField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTaskRequestBodyArgCompletionRuleField\"";
    }
    if (val == "all_assignees") {
        return "all_assignees";
    }
    if (val == "any_assignee") {
        return "any_assignee";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateTaskRequestBodyArgCompletionRuleField = deserializeCreateTaskRequestBodyArgCompletionRuleField;
function serializeCreateTaskRequestBodyArg(val) {
    return { ["item"]: serializeCreateTaskRequestBodyArgItemField(val.item), ["action"]: val.action == void 0 ? void 0 : serializeCreateTaskRequestBodyArgActionField(val.action), ["message"]: val.message, ["due_at"]: val.dueAt, ["completion_rule"]: val.completionRule == void 0 ? void 0 : serializeCreateTaskRequestBodyArgCompletionRuleField(val.completionRule) };
}
exports.serializeCreateTaskRequestBodyArg = serializeCreateTaskRequestBodyArg;
function deserializeCreateTaskRequestBodyArg(val) {
    const item = deserializeCreateTaskRequestBodyArgItemField(val.item);
    const action = val.action == void 0 ? void 0 : deserializeCreateTaskRequestBodyArgActionField(val.action);
    const message = (0, json_js_3.isJson)(val.message, "string") ? val.message : void 0;
    const dueAt = (0, json_js_3.isJson)(val.due_at, "string") ? val.due_at : void 0;
    const completionRule = val.completion_rule == void 0 ? void 0 : deserializeCreateTaskRequestBodyArgCompletionRuleField(val.completion_rule);
    return { item: item, action: action, message: message, dueAt: dueAt, completionRule: completionRule };
}
exports.deserializeCreateTaskRequestBodyArg = deserializeCreateTaskRequestBodyArg;
function serializeUpdateTaskByIdRequestBodyArgActionField(val) {
    return val;
}
exports.serializeUpdateTaskByIdRequestBodyArgActionField = serializeUpdateTaskByIdRequestBodyArgActionField;
function deserializeUpdateTaskByIdRequestBodyArgActionField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateTaskByIdRequestBodyArgActionField\"";
    }
    if (val == "review") {
        return "review";
    }
    if (val == "complete") {
        return "complete";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateTaskByIdRequestBodyArgActionField = deserializeUpdateTaskByIdRequestBodyArgActionField;
function serializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val) {
    return val;
}
exports.serializeUpdateTaskByIdRequestBodyArgCompletionRuleField = serializeUpdateTaskByIdRequestBodyArgCompletionRuleField;
function deserializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateTaskByIdRequestBodyArgCompletionRuleField\"";
    }
    if (val == "all_assignees") {
        return "all_assignees";
    }
    if (val == "any_assignee") {
        return "any_assignee";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateTaskByIdRequestBodyArgCompletionRuleField = deserializeUpdateTaskByIdRequestBodyArgCompletionRuleField;
function serializeUpdateTaskByIdRequestBodyArg(val) {
    return { ["action"]: val.action == void 0 ? void 0 : serializeUpdateTaskByIdRequestBodyArgActionField(val.action), ["message"]: val.message, ["due_at"]: val.dueAt, ["completion_rule"]: val.completionRule == void 0 ? void 0 : serializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val.completionRule) };
}
exports.serializeUpdateTaskByIdRequestBodyArg = serializeUpdateTaskByIdRequestBodyArg;
function deserializeUpdateTaskByIdRequestBodyArg(val) {
    const action = val.action == void 0 ? void 0 : deserializeUpdateTaskByIdRequestBodyArgActionField(val.action);
    const message = (0, json_js_3.isJson)(val.message, "string") ? val.message : void 0;
    const dueAt = (0, json_js_3.isJson)(val.due_at, "string") ? val.due_at : void 0;
    const completionRule = val.completion_rule == void 0 ? void 0 : deserializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val.completion_rule);
    return { action: action, message: message, dueAt: dueAt, completionRule: completionRule };
}
exports.deserializeUpdateTaskByIdRequestBodyArg = deserializeUpdateTaskByIdRequestBodyArg;
//# sourceMappingURL=tasks.generated.js.map