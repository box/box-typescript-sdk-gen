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
exports.newDeserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = exports.newSerializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = exports.newDeserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = exports.newSerializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = exports.newDeserializeGetRetentionPolicyAssignmentByIdQueryParamsArg = exports.newSerializeGetRetentionPolicyAssignmentByIdQueryParamsArg = exports.newDeserializeCreateRetentionPolicyAssignmentRequestBodyArg = exports.newSerializeCreateRetentionPolicyAssignmentRequestBodyArg = exports.newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = exports.newSerializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = exports.newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField = exports.newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField = exports.newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.newDeserializeGetRetentionPolicyAssignmentsQueryParamsArg = exports.newSerializeGetRetentionPolicyAssignmentsQueryParamsArg = exports.newDeserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField = exports.newSerializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField = exports.RetentionPolicyAssignmentsManager = void 0;
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
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId, "/assignments"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeRetentionPolicyAssignments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createRetentionPolicyAssignment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeRetentionPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getRetentionPolicyAssignmentById(retentionPolicyAssignmentId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeRetentionPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
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
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/files_under_retention"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.newDeserializeFilesUnderRetention)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getRetentionPolicyAssignmentFileVersionUnderRetention(retentionPolicyAssignmentId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policy_assignments/", retentionPolicyAssignmentId, "/file_versions_under_retention"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.newDeserializeFilesUnderRetention)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.RetentionPolicyAssignmentsManager = RetentionPolicyAssignmentsManager;
function newSerializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val) {
    return val;
}
exports.newSerializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField = newSerializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField;
function newDeserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val) {
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
exports.newDeserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField = newDeserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField;
function newSerializeGetRetentionPolicyAssignmentsQueryParamsArg(val) {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val.type), ["fields"]: val.fields, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.newSerializeGetRetentionPolicyAssignmentsQueryParamsArg = newSerializeGetRetentionPolicyAssignmentsQueryParamsArg;
function newDeserializeGetRetentionPolicyAssignmentsQueryParamsArg(val) {
    const type = val.type == void 0 ? void 0 : newDeserializeGetRetentionPolicyAssignmentsQueryParamsArgTypeField(val.type);
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { type: type, fields: fields, marker: marker, limit: limit };
}
exports.newDeserializeGetRetentionPolicyAssignmentsQueryParamsArg = newDeserializeGetRetentionPolicyAssignmentsQueryParamsArg;
function newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val) {
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
exports.newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField = newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
function newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val) {
    return { ["type"]: newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField = newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val) {
    const type = newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField = newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField;
function newSerializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val) {
    return { ["field"]: val.field, ["value"]: val.value };
}
exports.newSerializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = newSerializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(val) {
    const field = (0, json_js_2.isJson)(val.field, "string") ? val.field : void 0;
    const value = (0, json_js_2.isJson)(val.value, "string") ? val.value : void 0;
    return { field: field, value: value };
}
exports.newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField = newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField;
function newSerializeCreateRetentionPolicyAssignmentRequestBodyArg(val) {
    return { ["policyId"]: val.policyId, ["assignTo"]: newSerializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val.assignTo), ["filterFields"]: val.filterFields == void 0 ? void 0 : val.filterFields.map(function (item) {
            return newSerializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(item);
        }), ["startDateField"]: val.startDateField };
}
exports.newSerializeCreateRetentionPolicyAssignmentRequestBodyArg = newSerializeCreateRetentionPolicyAssignmentRequestBodyArg;
function newDeserializeCreateRetentionPolicyAssignmentRequestBodyArg(val) {
    const policyId = val.policyId;
    const assignTo = newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgAssignToField(val.assignTo);
    const filterFields = (0, json_js_2.isJson)(val.filterFields, "array") ? val.filterFields.map(function (itm) {
        return newDeserializeCreateRetentionPolicyAssignmentRequestBodyArgFilterFieldsField(itm);
    }) : void 0;
    const startDateField = (0, json_js_2.isJson)(val.startDateField, "string") ? val.startDateField : void 0;
    return { policyId: policyId, assignTo: assignTo, filterFields: filterFields, startDateField: startDateField };
}
exports.newDeserializeCreateRetentionPolicyAssignmentRequestBodyArg = newDeserializeCreateRetentionPolicyAssignmentRequestBodyArg;
function newSerializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetRetentionPolicyAssignmentByIdQueryParamsArg = newSerializeGetRetentionPolicyAssignmentByIdQueryParamsArg;
function newDeserializeGetRetentionPolicyAssignmentByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetRetentionPolicyAssignmentByIdQueryParamsArg = newDeserializeGetRetentionPolicyAssignmentByIdQueryParamsArg;
function newSerializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.newSerializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = newSerializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg;
function newDeserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit };
}
exports.newDeserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg = newDeserializeGetRetentionPolicyAssignmentFileUnderRetentionQueryParamsArg;
function newSerializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.newSerializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = newSerializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg;
function newDeserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit };
}
exports.newDeserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg = newDeserializeGetRetentionPolicyAssignmentFileVersionUnderRetentionQueryParamsArg;
//# sourceMappingURL=retentionPolicyAssignments.generated.js.map