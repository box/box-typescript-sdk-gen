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
exports.deserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = exports.serializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = exports.deserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = exports.serializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = exports.deserializeGetRetentionPolicyAssignmentByIdQueryParamsArg = exports.serializeGetRetentionPolicyAssignmentByIdQueryParamsArg = exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArg = exports.serializeCreateRetentionPolicyAssignmentRequestBodyArg = exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = exports.serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField = exports.serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField = exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.deserializeGetRetentionPolicyAssignmentsQueryParamsArg = exports.serializeGetRetentionPolicyAssignmentsQueryParamsArg = exports.deserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField = exports.serializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField = exports.RetentionPolicyAssignmentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class RetentionPolicyAssignmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getRetentionPolicyAssignments(retentionPolicyId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId, "/assignments"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeRetentionPolicyAssignments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createRetentionPolicyAssignment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeRetentionPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeRetentionPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getRetentionPolicyAssignmentFileUnderRetention(retentionPolicyAssignmentId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/files_under_retention"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeFilesUnderRetention)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/file_versions_under_retention"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeFilesUnderRetention)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.RetentionPolicyAssignmentsManager = RetentionPolicyAssignmentsManager;
function serializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val) {
    return val;
}
exports.serializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField = serializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField;
function deserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetRetentionPolicyAssignmentsQueryParamsArgTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    if (val == "metadata_template") {
        return "metadata_template";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField = deserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField;
function serializeGetRetentionPolicyAssignmentsQueryParamsArg(val) {
    return { ["type"]: val.type == void 0 ? void 0 : serializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val.type), ["fields"]: val.fields, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetRetentionPolicyAssignmentsQueryParamsArg = serializeGetRetentionPolicyAssignmentsQueryParamsArg;
function deserializeGetRetentionPolicyAssignmentsQueryParamsArg(val) {
    const type = val.type == void 0 ? void 0 : deserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val.type);
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { type: type, fields: fields, marker: marker, limit: limit };
}
exports.deserializeGetRetentionPolicyAssignmentsQueryParamsArg = deserializeGetRetentionPolicyAssignmentsQueryParamsArg;
function serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val) {
    return val;
}
exports.serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
function deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    const field = (0, json_js_2.isJson)(val.field, "string") ? val.field : void 0;
    const value = (0, json_js_2.isJson)(val.value, "string") ? val.value : void 0;
    return { field: field, value: value };
}
exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
function serializeCreateRetentionPolicyAssignmentRequestBodyArg(val) {
    return { ["policyId"]: val.policyId, ["assignTo"]: serializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val.assignTo), ["filterFields"]: val.filterFields == void 0 ? void 0 : val.filterFields.map(function (item) {
            return serializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(item);
        }), ["startDateField"]: val.startDateField };
}
exports.serializeCreateRetentionPolicyAssignmentRequestBodyArg = serializeCreateRetentionPolicyAssignmentRequestBodyArg;
function deserializeCreateRetentionPolicyAssignmentRequestBodyArg(val) {
    const policyId = val.policyId;
    const assignTo = deserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val.assignTo);
    const filterFields = (0, json_js_2.isJson)(val.filterFields, "array") ? val.filterFields.map(function (itm) {
        return deserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(itm);
    }) : void 0;
    const startDateField = (0, json_js_2.isJson)(val.startDateField, "string") ? val.startDateField : void 0;
    return { policyId: policyId, assignTo: assignTo, filterFields: filterFields, startDateField: startDateField };
}
exports.deserializeCreateRetentionPolicyAssignmentRequestBodyArg = deserializeCreateRetentionPolicyAssignmentRequestBodyArg;
function serializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.serializeGetRetentionPolicyAssignmentByIdQueryParamsArg = serializeGetRetentionPolicyAssignmentByIdQueryParamsArg;
function deserializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.deserializeGetRetentionPolicyAssignmentByIdQueryParamsArg = deserializeGetRetentionPolicyAssignmentByIdQueryParamsArg;
function serializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = serializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg;
function deserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit };
}
exports.deserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = deserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg;
function serializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = serializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg;
function deserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit };
}
exports.deserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = deserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg;
//# sourceMappingURL=retentionPolicyAssignments.generated.js.map