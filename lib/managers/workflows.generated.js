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
exports.deserializeCreateWorkflowStartRequestBodyArg = exports.serializeCreateWorkflowStartRequestBodyArg = exports.deserializeCreateWorkflowStartRequestBodyArgOutcomesField = exports.serializeCreateWorkflowStartRequestBodyArgOutcomesField = exports.deserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = exports.serializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = exports.deserializeCreateWorkflowStartRequestBodyArgFolderField = exports.serializeCreateWorkflowStartRequestBodyArgFolderField = exports.deserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField = exports.serializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField = exports.deserializeCreateWorkflowStartRequestBodyArgFilesField = exports.serializeCreateWorkflowStartRequestBodyArgFilesField = exports.deserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField = exports.serializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField = exports.deserializeCreateWorkflowStartRequestBodyArgFlowField = exports.serializeCreateWorkflowStartRequestBodyArgFlowField = exports.deserializeCreateWorkflowStartRequestBodyArgTypeField = exports.serializeCreateWorkflowStartRequestBodyArgTypeField = exports.deserializeGetWorkflowsQueryParamsArg = exports.serializeGetWorkflowsQueryParamsArg = exports.WorkflowsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class WorkflowsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getWorkflows(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["folder_id"]: (0, utils_js_2.toString)(queryParams.folderId), ["trigger_type"]: (0, utils_js_2.toString)(queryParams.triggerType), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["marker"]: (0, utils_js_2.toString)(queryParams.marker) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/workflows"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWorkflows)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createWorkflowStart(workflowId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/workflows/", workflowId, "/start"), { method: "POST", body: (0, json_js_2.serializeJson)(serializeCreateWorkflowStartRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.WorkflowsManager = WorkflowsManager;
function serializeGetWorkflowsQueryParamsArg(val) {
    return { ["folder_id"]: val.folderId, ["trigger_type"]: val.triggerType, ["limit"]: val.limit, ["marker"]: val.marker };
}
exports.serializeGetWorkflowsQueryParamsArg = serializeGetWorkflowsQueryParamsArg;
function deserializeGetWorkflowsQueryParamsArg(val) {
    const folderId = val.folder_id;
    const triggerType = (0, json_js_3.isJson)(val.trigger_type, "string") ? val.trigger_type : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    return { folderId: folderId, triggerType: triggerType, limit: limit, marker: marker };
}
exports.deserializeGetWorkflowsQueryParamsArg = deserializeGetWorkflowsQueryParamsArg;
function serializeCreateWorkflowStartRequestBodyArgTypeField(val) {
    return val;
}
exports.serializeCreateWorkflowStartRequestBodyArgTypeField = serializeCreateWorkflowStartRequestBodyArgTypeField;
function deserializeCreateWorkflowStartRequestBodyArgTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgTypeField\"";
    }
    if (val == "workflow_parameters") {
        return "workflow_parameters";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateWorkflowStartRequestBodyArgTypeField = deserializeCreateWorkflowStartRequestBodyArgTypeField;
function serializeCreateWorkflowStartRequestBodyArgFlowField(val) {
    return { ["type"]: val.type, ["id"]: val.id };
}
exports.serializeCreateWorkflowStartRequestBodyArgFlowField = serializeCreateWorkflowStartRequestBodyArgFlowField;
function deserializeCreateWorkflowStartRequestBodyArgFlowField(val) {
    const type = (0, json_js_3.isJson)(val.type, "string") ? val.type : void 0;
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.deserializeCreateWorkflowStartRequestBodyArgFlowField = deserializeCreateWorkflowStartRequestBodyArgFlowField;
function serializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val) {
    return val;
}
exports.serializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField = serializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField;
function deserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgFilesFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField = deserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField;
function serializeCreateWorkflowStartRequestBodyArgFilesField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeCreateWorkflowStartRequestBodyArgFilesField = serializeCreateWorkflowStartRequestBodyArgFilesField;
function deserializeCreateWorkflowStartRequestBodyArgFilesField(val) {
    const type = val.type == void 0 ? void 0 : deserializeCreateWorkflowStartRequestBodyArgFilesFieldTypeField(val.type);
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.deserializeCreateWorkflowStartRequestBodyArgFilesField = deserializeCreateWorkflowStartRequestBodyArgFilesField;
function serializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val) {
    return val;
}
exports.serializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField = serializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField;
function deserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgFolderFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField = deserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField;
function serializeCreateWorkflowStartRequestBodyArgFolderField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeCreateWorkflowStartRequestBodyArgFolderField = serializeCreateWorkflowStartRequestBodyArgFolderField;
function deserializeCreateWorkflowStartRequestBodyArgFolderField(val) {
    const type = val.type == void 0 ? void 0 : deserializeCreateWorkflowStartRequestBodyArgFolderFieldTypeField(val.type);
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.deserializeCreateWorkflowStartRequestBodyArgFolderField = deserializeCreateWorkflowStartRequestBodyArgFolderField;
function serializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val) {
    return val;
}
exports.serializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = serializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField;
function deserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWorkflowStartRequestBodyArgOutcomesFieldTypeField\"";
    }
    if (val == "outcome") {
        return "outcome";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField = deserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField;
function serializeCreateWorkflowStartRequestBodyArgOutcomesField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val.type), ["parameter"]: val.parameter };
}
exports.serializeCreateWorkflowStartRequestBodyArgOutcomesField = serializeCreateWorkflowStartRequestBodyArgOutcomesField;
function deserializeCreateWorkflowStartRequestBodyArgOutcomesField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : deserializeCreateWorkflowStartRequestBodyArgOutcomesFieldTypeField(val.type);
    const parameter = (0, json_js_3.isJson)(val.parameter, "string") ? val.parameter : void 0;
    return { id: id, type: type, parameter: parameter };
}
exports.deserializeCreateWorkflowStartRequestBodyArgOutcomesField = deserializeCreateWorkflowStartRequestBodyArgOutcomesField;
function serializeCreateWorkflowStartRequestBodyArg(val) {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateWorkflowStartRequestBodyArgTypeField(val.type), ["flow"]: serializeCreateWorkflowStartRequestBodyArgFlowField(val.flow), ["files"]: val.files.map(function (item) {
            return serializeCreateWorkflowStartRequestBodyArgFilesField(item);
        }), ["folder"]: serializeCreateWorkflowStartRequestBodyArgFolderField(val.folder), ["outcomes"]: val.outcomes == void 0 ? void 0 : val.outcomes.map(function (item) {
            return serializeCreateWorkflowStartRequestBodyArgOutcomesField(item);
        }) };
}
exports.serializeCreateWorkflowStartRequestBodyArg = serializeCreateWorkflowStartRequestBodyArg;
function deserializeCreateWorkflowStartRequestBodyArg(val) {
    const type = val.type == void 0 ? void 0 : deserializeCreateWorkflowStartRequestBodyArgTypeField(val.type);
    const flow = deserializeCreateWorkflowStartRequestBodyArgFlowField(val.flow);
    const files = val.files.map(function (itm) {
        return deserializeCreateWorkflowStartRequestBodyArgFilesField(itm);
    });
    const folder = deserializeCreateWorkflowStartRequestBodyArgFolderField(val.folder);
    const outcomes = (0, json_js_3.isJson)(val.outcomes, "array") ? val.outcomes.map(function (itm) {
        return deserializeCreateWorkflowStartRequestBodyArgOutcomesField(itm);
    }) : void 0;
    return { type: type, flow: flow, files: files, folder: folder, outcomes: outcomes };
}
exports.deserializeCreateWorkflowStartRequestBodyArg = deserializeCreateWorkflowStartRequestBodyArg;
//# sourceMappingURL=workflows.generated.js.map