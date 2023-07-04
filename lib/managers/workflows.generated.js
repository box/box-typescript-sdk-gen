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
exports.newDeserializeCreateWorkflowStartRequestBodyArg = exports.newSerializeCreateWorkflowStartRequestBodyArg = exports.newDeserializeCreateWorkflowStartRequestBodyArgOutcomesField = exports.newSerializeCreateWorkflowStartRequestBodyArgOutcomesField = exports.newDeserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = exports.newSerializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = exports.newDeserializeCreateWorkflowStartRequestBodyArgFolderField = exports.newSerializeCreateWorkflowStartRequestBodyArgFolderField = exports.newDeserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField = exports.newSerializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField = exports.newDeserializeCreateWorkflowStartRequestBodyArgFilesField = exports.newSerializeCreateWorkflowStartRequestBodyArgFilesField = exports.newDeserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField = exports.newSerializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField = exports.newDeserializeCreateWorkflowStartRequestBodyArgFlowField = exports.newSerializeCreateWorkflowStartRequestBodyArgFlowField = exports.newDeserializeCreateWorkflowStartRequestBodyArgTypeField = exports.newSerializeCreateWorkflowStartRequestBodyArgTypeField = exports.newDeserializeGetWorkflowsQueryParamsArg = exports.newSerializeGetWorkflowsQueryParamsArg = exports.WorkflowsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class WorkflowsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getWorkflows(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/workflows"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWorkflows)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createWorkflowStart(workflowId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/workflows/", workflowId, "/start"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.WorkflowsManager = WorkflowsManager;
function newSerializeGetWorkflowsQueryParamsArg(val) {
    return { ["folderId"]: val.folderId, ["triggerType"]: val.triggerType, ["limit"]: val.limit, ["marker"]: val.marker };
}
exports.newSerializeGetWorkflowsQueryParamsArg = newSerializeGetWorkflowsQueryParamsArg;
function newDeserializeGetWorkflowsQueryParamsArg(val) {
    const folderId = val.folderId;
    const triggerType = (0, json_js_2.isJson)(val.triggerType, "string") ? val.triggerType : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    return { folderId: folderId, triggerType: triggerType, limit: limit, marker: marker };
}
exports.newDeserializeGetWorkflowsQueryParamsArg = newDeserializeGetWorkflowsQueryParamsArg;
function newSerializeCreateWorkflowStartRequestBodyArgTypeField(val) {
    return val;
}
exports.newSerializeCreateWorkflowStartRequestBodyArgTypeField = newSerializeCreateWorkflowStartRequestBodyArgTypeField;
function newDeserializeCreateWorkflowStartRequestBodyArgTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgTypeField\"";
    }
    if (val == "workflow_parameters") {
        return "workflow_parameters";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateWorkflowStartRequestBodyArgTypeField = newDeserializeCreateWorkflowStartRequestBodyArgTypeField;
function newSerializeCreateWorkflowStartRequestBodyArgFlowField(val) {
    return { ["type"]: val.type, ["id"]: val.id };
}
exports.newSerializeCreateWorkflowStartRequestBodyArgFlowField = newSerializeCreateWorkflowStartRequestBodyArgFlowField;
function newDeserializeCreateWorkflowStartRequestBodyArgFlowField(val) {
    const type = (0, json_js_2.isJson)(val.type, "string") ? val.type : void 0;
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.newDeserializeCreateWorkflowStartRequestBodyArgFlowField = newDeserializeCreateWorkflowStartRequestBodyArgFlowField;
function newSerializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField = newSerializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField;
function newDeserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgFilesFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField = newDeserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField;
function newSerializeCreateWorkflowStartRequestBodyArgFilesField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeCreateWorkflowStartRequestBodyArgFilesField = newSerializeCreateWorkflowStartRequestBodyArgFilesField;
function newDeserializeCreateWorkflowStartRequestBodyArgFilesField(val) {
    const type = val.type == void 0 ? void 0 : newDeserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val.type);
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.newDeserializeCreateWorkflowStartRequestBodyArgFilesField = newDeserializeCreateWorkflowStartRequestBodyArgFilesField;
function newSerializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField = newSerializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField;
function newDeserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgFolderFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField = newDeserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField;
function newSerializeCreateWorkflowStartRequestBodyArgFolderField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeCreateWorkflowStartRequestBodyArgFolderField = newSerializeCreateWorkflowStartRequestBodyArgFolderField;
function newDeserializeCreateWorkflowStartRequestBodyArgFolderField(val) {
    const type = val.type == void 0 ? void 0 : newDeserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val.type);
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.newDeserializeCreateWorkflowStartRequestBodyArgFolderField = newDeserializeCreateWorkflowStartRequestBodyArgFolderField;
function newSerializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = newSerializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField;
function newDeserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField\"";
    }
    if (val == "outcome") {
        return "outcome";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = newDeserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField;
function newSerializeCreateWorkflowStartRequestBodyArgOutcomesField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val.type), ["parameter"]: val.parameter };
}
exports.newSerializeCreateWorkflowStartRequestBodyArgOutcomesField = newSerializeCreateWorkflowStartRequestBodyArgOutcomesField;
function newDeserializeCreateWorkflowStartRequestBodyArgOutcomesField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : newDeserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val.type);
    const parameter = (0, json_js_2.isJson)(val.parameter, "string") ? val.parameter : void 0;
    return { id: id, type: type, parameter: parameter };
}
exports.newDeserializeCreateWorkflowStartRequestBodyArgOutcomesField = newDeserializeCreateWorkflowStartRequestBodyArgOutcomesField;
function newSerializeCreateWorkflowStartRequestBodyArg(val) {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeCreateWorkflowStartRequestBodyArgTypeField(val.type), ["flow"]: newSerializeCreateWorkflowStartRequestBodyArgFlowField(val.flow), ["files"]: val.files.map(function (item) {
            return newSerializeCreateWorkflowStartRequestBodyArgFilesField(item);
        }), ["folder"]: newSerializeCreateWorkflowStartRequestBodyArgFolderField(val.folder), ["outcomes"]: val.outcomes == void 0 ? void 0 : val.outcomes.map(function (item) {
            return newSerializeCreateWorkflowStartRequestBodyArgOutcomesField(item);
        }) };
}
exports.newSerializeCreateWorkflowStartRequestBodyArg = newSerializeCreateWorkflowStartRequestBodyArg;
function newDeserializeCreateWorkflowStartRequestBodyArg(val) {
    const type = val.type == void 0 ? void 0 : newDeserializeCreateWorkflowStartRequestBodyArgTypeField(val.type);
    const flow = newDeserializeCreateWorkflowStartRequestBodyArgFlowField(val.flow);
    const files = val.files.map(function (itm) {
        return newDeserializeCreateWorkflowStartRequestBodyArgFilesField(itm);
    });
    const folder = newDeserializeCreateWorkflowStartRequestBodyArgFolderField(val.folder);
    const outcomes = (0, json_js_2.isJson)(val.outcomes, "array") ? val.outcomes.map(function (itm) {
        return newDeserializeCreateWorkflowStartRequestBodyArgOutcomesField(itm);
    }) : void 0;
    return { type: type, flow: flow, files: files, folder: folder, outcomes: outcomes };
}
exports.newDeserializeCreateWorkflowStartRequestBodyArg = newDeserializeCreateWorkflowStartRequestBodyArg;
//# sourceMappingURL=workflows.generated.js.map