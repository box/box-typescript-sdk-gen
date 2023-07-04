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
exports.newDeserializeUpdateTaskByIdRequestBodyArg = exports.newSerializeUpdateTaskByIdRequestBodyArg = exports.newDeserializeUpdateTaskByIdRequestBodyArgCompletionRuleField = exports.newSerializeUpdateTaskByIdRequestBodyArgCompletionRuleField = exports.newDeserializeUpdateTaskByIdRequestBodyArgActionField = exports.newSerializeUpdateTaskByIdRequestBodyArgActionField = exports.newDeserializeCreateTaskRequestBodyArg = exports.newSerializeCreateTaskRequestBodyArg = exports.newDeserializeCreateTaskRequestBodyArgCompletionRuleField = exports.newSerializeCreateTaskRequestBodyArgCompletionRuleField = exports.newDeserializeCreateTaskRequestBodyArgActionField = exports.newSerializeCreateTaskRequestBodyArgActionField = exports.newDeserializeCreateTaskRequestBodyArgItemField = exports.newSerializeCreateTaskRequestBodyArgItemField = exports.newDeserializeCreateTaskRequestBodyArgItemFieldTypeField = exports.newSerializeCreateTaskRequestBodyArgItemFieldTypeField = exports.TasksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class TasksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileTasks(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/tasks"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeTasks)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createTask(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/tasks"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTask)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getTaskById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/tasks/", taskId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTask)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateTaskById(taskId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/tasks/", taskId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTask)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteTaskById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/tasks/", taskId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.TasksManager = TasksManager;
function newSerializeCreateTaskRequestBodyArgItemFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateTaskRequestBodyArgItemFieldTypeField = newSerializeCreateTaskRequestBodyArgItemFieldTypeField;
function newDeserializeCreateTaskRequestBodyArgItemFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTaskRequestBodyArgItemFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateTaskRequestBodyArgItemFieldTypeField = newDeserializeCreateTaskRequestBodyArgItemFieldTypeField;
function newSerializeCreateTaskRequestBodyArgItemField(val) {
    return { ["id"]: val.id, ["type"]: newSerializeCreateTaskRequestBodyArgItemFieldTypeField(val.type) };
}
exports.newSerializeCreateTaskRequestBodyArgItemField = newSerializeCreateTaskRequestBodyArgItemField;
function newDeserializeCreateTaskRequestBodyArgItemField(val) {
    const id = val.id;
    const type = newDeserializeCreateTaskRequestBodyArgItemFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.newDeserializeCreateTaskRequestBodyArgItemField = newDeserializeCreateTaskRequestBodyArgItemField;
function newSerializeCreateTaskRequestBodyArgActionField(val) {
    return val;
}
exports.newSerializeCreateTaskRequestBodyArgActionField = newSerializeCreateTaskRequestBodyArgActionField;
function newDeserializeCreateTaskRequestBodyArgActionField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateTaskRequestBodyArgActionField = newDeserializeCreateTaskRequestBodyArgActionField;
function newSerializeCreateTaskRequestBodyArgCompletionRuleField(val) {
    return val;
}
exports.newSerializeCreateTaskRequestBodyArgCompletionRuleField = newSerializeCreateTaskRequestBodyArgCompletionRuleField;
function newDeserializeCreateTaskRequestBodyArgCompletionRuleField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateTaskRequestBodyArgCompletionRuleField = newDeserializeCreateTaskRequestBodyArgCompletionRuleField;
function newSerializeCreateTaskRequestBodyArg(val) {
    return { ["item"]: newSerializeCreateTaskRequestBodyArgItemField(val.item), ["action"]: val.action == void 0 ? void 0 : newSerializeCreateTaskRequestBodyArgActionField(val.action), ["message"]: val.message, ["dueAt"]: val.dueAt, ["completionRule"]: val.completionRule == void 0 ? void 0 : newSerializeCreateTaskRequestBodyArgCompletionRuleField(val.completionRule) };
}
exports.newSerializeCreateTaskRequestBodyArg = newSerializeCreateTaskRequestBodyArg;
function newDeserializeCreateTaskRequestBodyArg(val) {
    const item = newDeserializeCreateTaskRequestBodyArgItemField(val.item);
    const action = val.action == void 0 ? void 0 : newDeserializeCreateTaskRequestBodyArgActionField(val.action);
    const message = (0, json_js_2.isJson)(val.message, "string") ? val.message : void 0;
    const dueAt = (0, json_js_2.isJson)(val.dueAt, "string") ? val.dueAt : void 0;
    const completionRule = val.completionRule == void 0 ? void 0 : newDeserializeCreateTaskRequestBodyArgCompletionRuleField(val.completionRule);
    return { item: item, action: action, message: message, dueAt: dueAt, completionRule: completionRule };
}
exports.newDeserializeCreateTaskRequestBodyArg = newDeserializeCreateTaskRequestBodyArg;
function newSerializeUpdateTaskByIdRequestBodyArgActionField(val) {
    return val;
}
exports.newSerializeUpdateTaskByIdRequestBodyArgActionField = newSerializeUpdateTaskByIdRequestBodyArgActionField;
function newDeserializeUpdateTaskByIdRequestBodyArgActionField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeUpdateTaskByIdRequestBodyArgActionField = newDeserializeUpdateTaskByIdRequestBodyArgActionField;
function newSerializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val) {
    return val;
}
exports.newSerializeUpdateTaskByIdRequestBodyArgCompletionRuleField = newSerializeUpdateTaskByIdRequestBodyArgCompletionRuleField;
function newDeserializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeUpdateTaskByIdRequestBodyArgCompletionRuleField = newDeserializeUpdateTaskByIdRequestBodyArgCompletionRuleField;
function newSerializeUpdateTaskByIdRequestBodyArg(val) {
    return { ["action"]: val.action == void 0 ? void 0 : newSerializeUpdateTaskByIdRequestBodyArgActionField(val.action), ["message"]: val.message, ["dueAt"]: val.dueAt, ["completionRule"]: val.completionRule == void 0 ? void 0 : newSerializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val.completionRule) };
}
exports.newSerializeUpdateTaskByIdRequestBodyArg = newSerializeUpdateTaskByIdRequestBodyArg;
function newDeserializeUpdateTaskByIdRequestBodyArg(val) {
    const action = val.action == void 0 ? void 0 : newDeserializeUpdateTaskByIdRequestBodyArgActionField(val.action);
    const message = (0, json_js_2.isJson)(val.message, "string") ? val.message : void 0;
    const dueAt = (0, json_js_2.isJson)(val.dueAt, "string") ? val.dueAt : void 0;
    const completionRule = val.completionRule == void 0 ? void 0 : newDeserializeUpdateTaskByIdRequestBodyArgCompletionRuleField(val.completionRule);
    return { action: action, message: message, dueAt: dueAt, completionRule: completionRule };
}
exports.newDeserializeUpdateTaskByIdRequestBodyArg = newDeserializeUpdateTaskByIdRequestBodyArg;
//# sourceMappingURL=tasks.generated.js.map