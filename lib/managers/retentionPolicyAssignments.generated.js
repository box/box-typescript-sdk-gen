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
exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArg = exports.serializeCreateRetentionPolicyAssignmentRequestBodyArg = exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = exports.serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField = exports.serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField = exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.RetentionPolicyAssignmentsManager = exports.GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg = exports.GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg = exports.DeleteRetentionPolicyAssignmentByIdHeadersArg = exports.GetRetentionPolicyAssignmentByIdHeadersArg = exports.CreateRetentionPolicyAssignmentHeadersArg = exports.GetRetentionPolicyAssignmentsHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetRetentionPolicyAssignmentsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetRetentionPolicyAssignmentsHeadersArg = GetRetentionPolicyAssignmentsHeadersArg;
class CreateRetentionPolicyAssignmentHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateRetentionPolicyAssignmentHeadersArg = CreateRetentionPolicyAssignmentHeadersArg;
class GetRetentionPolicyAssignmentByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetRetentionPolicyAssignmentByIdHeadersArg = GetRetentionPolicyAssignmentByIdHeadersArg;
class DeleteRetentionPolicyAssignmentByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteRetentionPolicyAssignmentByIdHeadersArg = DeleteRetentionPolicyAssignmentByIdHeadersArg;
class GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg = GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg;
class GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg = GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg;
class RetentionPolicyAssignmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getRetentionPolicyAssignments(retentionPolicyId, queryParams = {}, headers = new GetRetentionPolicyAssignmentsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["type"]: (0, utils_js_2.toString)(queryParams.type), ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId, "/assignments"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeRetentionPolicyAssignments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createRetentionPolicyAssignment(requestBody, headers = new CreateRetentionPolicyAssignmentHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateRetentionPolicyAssignmentRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeRetentionPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId, queryParams = {}, headers = new GetRetentionPolicyAssignmentByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeRetentionPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId, headers = new DeleteRetentionPolicyAssignmentByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    getRetentionPolicyAssignmentFileUnderRetention(retentionPolicyAssignmentId, queryParams = {}, headers = new GetRetentionPolicyAssignmentFileUnderRetentionHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/files_under_retention"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeFilesUnderRetention)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId, queryParams = {}, headers = new GetRetentionPolicyAssignmentFileVersionUnderRetentionHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/file_versions_under_retention"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeFilesUnderRetention)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.RetentionPolicyAssignmentsManager = RetentionPolicyAssignmentsManager;
function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val) {
    return val;
}
exports.serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "metadata_template") {
        return "metadata_template";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val) {
    return { ["type"]: serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField = serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val) {
    const type = deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField = deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
function serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val) {
    return { ["field"]: val.field, ["value"]: val.value };
}
exports.serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
function deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val) {
    const field = (0, json_js_3.isJson)(val.field, "string") ? val.field : void 0;
    const value = (0, json_js_3.isJson)(val.value, "string") ? val.value : void 0;
    return { field: field, value: value };
}
exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
function serializeCreateRetentionPolicyAssignmentRequestBodyArg(val) {
    return { ["policy_id"]: val.policyId, ["assign_to"]: serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val.assignTo), ["filter_fields"]: val.filterFields == void 0 ? void 0 : val.filterFields.map(function (item) {
            return serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(item);
        }), ["start_date_field"]: val.startDateField };
}
exports.serializeCreateRetentionPolicyAssignmentRequestBodyArg = serializeCreateRetentionPolicyAssignmentRequestBodyArg;
function deserializeCreateRetentionPolicyAssignmentRequestBodyArg(val) {
    const policyId = val.policy_id;
    const assignTo = deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val.assign_to);
    const filterFields = (0, json_js_3.isJson)(val.filter_fields, "array") ? val.filter_fields.map(function (itm) {
        return deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(itm);
    }) : void 0;
    const startDateField = (0, json_js_3.isJson)(val.start_date_field, "string") ? val.start_date_field : void 0;
    return { policyId: policyId, assignTo: assignTo, filterFields: filterFields, startDateField: startDateField };
}
exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArg = deserializeCreateRetentionPolicyAssignmentRequestBodyArg;
//# sourceMappingURL=retentionPolicyAssignments.generated.js.map