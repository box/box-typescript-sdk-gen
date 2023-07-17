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
exports.deserializeUpdateTaskAssignmentByIdRequestBodyArg = exports.serializeUpdateTaskAssignmentByIdRequestBodyArg = exports.deserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = exports.serializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = exports.deserializeCreateTaskAssignmentRequestBodyArg = exports.serializeCreateTaskAssignmentRequestBodyArg = exports.deserializeCreateTaskAssignmentRequestBodyArgAssignToField = exports.serializeCreateTaskAssignmentRequestBodyArgAssignToField = exports.deserializeCreateTaskAssignmentRequestBodyArgTaskField = exports.serializeCreateTaskAssignmentRequestBodyArgTaskField = exports.deserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField = exports.serializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField = exports.TaskAssignmentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class TaskAssignmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getTaskAssignments(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/tasks/", taskId, "/assignments"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeTaskAssignments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createTaskAssignment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/task_assignments"), { method: "POST", body: (0, json_js_2.serializeJson)(serializeCreateTaskAssignmentRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTaskAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getTaskAssignmentById(taskAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTaskAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateTaskAssignmentById(taskAssignmentId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId), { method: "PUT", body: (0, json_js_2.serializeJson)(serializeUpdateTaskAssignmentByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTaskAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteTaskAssignmentById(taskAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.TaskAssignmentsManager = TaskAssignmentsManager;
function serializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val) {
    return val;
}
exports.serializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField = serializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField;
function deserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTaskAssignmentRequestBodyArgTaskFieldTypeField\"";
    }
    if (val == "task") {
        return "task";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField = deserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField;
function serializeCreateTaskAssignmentRequestBodyArgTaskField(val) {
    return { ["id"]: val.id, ["type"]: serializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val.type) };
}
exports.serializeCreateTaskAssignmentRequestBodyArgTaskField = serializeCreateTaskAssignmentRequestBodyArgTaskField;
function deserializeCreateTaskAssignmentRequestBodyArgTaskField(val) {
    const id = val.id;
    const type = deserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeCreateTaskAssignmentRequestBodyArgTaskField = deserializeCreateTaskAssignmentRequestBodyArgTaskField;
function serializeCreateTaskAssignmentRequestBodyArgAssignToField(val) {
    return { ["id"]: val.id, ["login"]: val.login };
}
exports.serializeCreateTaskAssignmentRequestBodyArgAssignToField = serializeCreateTaskAssignmentRequestBodyArgAssignToField;
function deserializeCreateTaskAssignmentRequestBodyArgAssignToField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const login = (0, json_js_3.isJson)(val.login, "string") ? val.login : void 0;
    return { id: id, login: login };
}
exports.deserializeCreateTaskAssignmentRequestBodyArgAssignToField = deserializeCreateTaskAssignmentRequestBodyArgAssignToField;
function serializeCreateTaskAssignmentRequestBodyArg(val) {
    return { ["task"]: serializeCreateTaskAssignmentRequestBodyArgTaskField(val.task), ["assign_to"]: serializeCreateTaskAssignmentRequestBodyArgAssignToField(val.assignTo) };
}
exports.serializeCreateTaskAssignmentRequestBodyArg = serializeCreateTaskAssignmentRequestBodyArg;
function deserializeCreateTaskAssignmentRequestBodyArg(val) {
    const task = deserializeCreateTaskAssignmentRequestBodyArgTaskField(val.task);
    const assignTo = deserializeCreateTaskAssignmentRequestBodyArgAssignToField(val.assign_to);
    return { task: task, assignTo: assignTo };
}
exports.deserializeCreateTaskAssignmentRequestBodyArg = deserializeCreateTaskAssignmentRequestBodyArg;
function serializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val) {
    return val;
}
exports.serializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = serializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField;
function deserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateTaskAssignmentByIdRequestBodyArgResolutionStateField\"";
    }
    if (val == "completed") {
        return "completed";
    }
    if (val == "incomplete") {
        return "incomplete";
    }
    if (val == "approved") {
        return "approved";
    }
    if (val == "rejected") {
        return "rejected";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = deserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField;
function serializeUpdateTaskAssignmentByIdRequestBodyArg(val) {
    return { ["message"]: val.message, ["resolution_state"]: val.resolutionState == void 0 ? void 0 : serializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val.resolutionState) };
}
exports.serializeUpdateTaskAssignmentByIdRequestBodyArg = serializeUpdateTaskAssignmentByIdRequestBodyArg;
function deserializeUpdateTaskAssignmentByIdRequestBodyArg(val) {
    const message = (0, json_js_3.isJson)(val.message, "string") ? val.message : void 0;
    const resolutionState = val.resolution_state == void 0 ? void 0 : deserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val.resolution_state);
    return { message: message, resolutionState: resolutionState };
}
exports.deserializeUpdateTaskAssignmentByIdRequestBodyArg = deserializeUpdateTaskAssignmentByIdRequestBodyArg;
//# sourceMappingURL=taskAssignments.generated.js.map