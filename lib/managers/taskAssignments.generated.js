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
exports.newDeserializeUpdateTaskAssignmentByIdRequestBodyArg = exports.newSerializeUpdateTaskAssignmentByIdRequestBodyArg = exports.newDeserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = exports.newSerializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = exports.newDeserializeCreateTaskAssignmentRequestBodyArg = exports.newSerializeCreateTaskAssignmentRequestBodyArg = exports.newDeserializeCreateTaskAssignmentRequestBodyArgAssignToField = exports.newSerializeCreateTaskAssignmentRequestBodyArgAssignToField = exports.newDeserializeCreateTaskAssignmentRequestBodyArgTaskField = exports.newSerializeCreateTaskAssignmentRequestBodyArgTaskField = exports.newDeserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField = exports.newSerializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField = exports.TaskAssignmentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class TaskAssignmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getTaskAssignments(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/tasks/", taskId, "/assignments"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeTaskAssignments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createTaskAssignment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/task_assignments"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTaskAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getTaskAssignmentById(taskAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTaskAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateTaskAssignmentById(taskAssignmentId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/task_assignments/", taskAssignmentId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTaskAssignment)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField = newSerializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField;
function newDeserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTaskAssignmentRequestBodyArgTaskFieldTypeField\"";
    }
    if (val == "task") {
        return "task";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField = newDeserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField;
function newSerializeCreateTaskAssignmentRequestBodyArgTaskField(val) {
    return { ["id"]: val.id, ["type"]: newSerializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val.type) };
}
exports.newSerializeCreateTaskAssignmentRequestBodyArgTaskField = newSerializeCreateTaskAssignmentRequestBodyArgTaskField;
function newDeserializeCreateTaskAssignmentRequestBodyArgTaskField(val) {
    const id = val.id;
    const type = newDeserializeCreateTaskAssignmentRequestBodyArgTaskFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.newDeserializeCreateTaskAssignmentRequestBodyArgTaskField = newDeserializeCreateTaskAssignmentRequestBodyArgTaskField;
function newSerializeCreateTaskAssignmentRequestBodyArgAssignToField(val) {
    return { ["id"]: val.id, ["login"]: val.login };
}
exports.newSerializeCreateTaskAssignmentRequestBodyArgAssignToField = newSerializeCreateTaskAssignmentRequestBodyArgAssignToField;
function newDeserializeCreateTaskAssignmentRequestBodyArgAssignToField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const login = (0, json_js_2.isJson)(val.login, "string") ? val.login : void 0;
    return { id: id, login: login };
}
exports.newDeserializeCreateTaskAssignmentRequestBodyArgAssignToField = newDeserializeCreateTaskAssignmentRequestBodyArgAssignToField;
function newSerializeCreateTaskAssignmentRequestBodyArg(val) {
    return { ["task"]: newSerializeCreateTaskAssignmentRequestBodyArgTaskField(val.task), ["assignTo"]: newSerializeCreateTaskAssignmentRequestBodyArgAssignToField(val.assignTo) };
}
exports.newSerializeCreateTaskAssignmentRequestBodyArg = newSerializeCreateTaskAssignmentRequestBodyArg;
function newDeserializeCreateTaskAssignmentRequestBodyArg(val) {
    const task = newDeserializeCreateTaskAssignmentRequestBodyArgTaskField(val.task);
    const assignTo = newDeserializeCreateTaskAssignmentRequestBodyArgAssignToField(val.assignTo);
    return { task: task, assignTo: assignTo };
}
exports.newDeserializeCreateTaskAssignmentRequestBodyArg = newDeserializeCreateTaskAssignmentRequestBodyArg;
function newSerializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val) {
    return val;
}
exports.newSerializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = newSerializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField;
function newDeserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField = newDeserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField;
function newSerializeUpdateTaskAssignmentByIdRequestBodyArg(val) {
    return { ["message"]: val.message, ["resolutionState"]: val.resolutionState == void 0 ? void 0 : newSerializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val.resolutionState) };
}
exports.newSerializeUpdateTaskAssignmentByIdRequestBodyArg = newSerializeUpdateTaskAssignmentByIdRequestBodyArg;
function newDeserializeUpdateTaskAssignmentByIdRequestBodyArg(val) {
    const message = (0, json_js_2.isJson)(val.message, "string") ? val.message : void 0;
    const resolutionState = val.resolutionState == void 0 ? void 0 : newDeserializeUpdateTaskAssignmentByIdRequestBodyArgResolutionStateField(val.resolutionState);
    return { message: message, resolutionState: resolutionState };
}
exports.newDeserializeUpdateTaskAssignmentByIdRequestBodyArg = newDeserializeUpdateTaskAssignmentByIdRequestBodyArg;
//# sourceMappingURL=taskAssignments.generated.js.map