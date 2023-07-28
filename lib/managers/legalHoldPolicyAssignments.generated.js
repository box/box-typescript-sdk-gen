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
exports.deserializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg = exports.serializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg = exports.deserializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg = exports.serializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg = exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyArg = exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyArg = exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.deserializeGetLegalHoldPolicyAssignmentsQueryParamsArg = exports.serializeGetLegalHoldPolicyAssignmentsQueryParamsArg = exports.deserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = exports.serializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = exports.LegalHoldPolicyAssignmentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class LegalHoldPolicyAssignmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getLegalHoldPolicyAssignments(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["policy_id"]: (0, utils_js_2.toString)(queryParams.policyId), ["assign_to_type"]: (0, utils_js_2.toString)(queryParams.assignToType), ["assign_to_id"]: (0, utils_js_2.toString)(queryParams.assignToId), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeLegalHoldPolicyAssignments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createLegalHoldPolicyAssignment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments"), { method: "POST", body: (0, json_js_2.serializeJson)(serializeCreateLegalHoldPolicyAssignmentRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeLegalHoldPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeLegalHoldPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/files_on_hold"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeFileVersionLegalHolds)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getLegalHoldPolicyAssignmentFileVersionOnHold(legalHoldPolicyAssignmentId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/file_versions_on_hold"), { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeFileVersionLegalHolds)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.LegalHoldPolicyAssignmentsManager = LegalHoldPolicyAssignmentsManager;
function serializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val) {
    return val;
}
exports.serializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = serializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField;
function deserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"GetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "file_version") {
        return "file_version";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = deserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField;
function serializeGetLegalHoldPolicyAssignmentsQueryParamsArg(val) {
    return { ["policy_id"]: val.policyId, ["assign_to_type"]: val.assignToType == void 0 ? void 0 : serializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val.assignToType), ["assign_to_id"]: val.assignToId, ["marker"]: val.marker, ["limit"]: val.limit, ["fields"]: val.fields };
}
exports.serializeGetLegalHoldPolicyAssignmentsQueryParamsArg = serializeGetLegalHoldPolicyAssignmentsQueryParamsArg;
function deserializeGetLegalHoldPolicyAssignmentsQueryParamsArg(val) {
    const policyId = val.policy_id;
    const assignToType = val.assign_to_type == void 0 ? void 0 : deserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val.assign_to_type);
    const assignToId = (0, json_js_3.isJson)(val.assign_to_id, "string") ? val.assign_to_id : void 0;
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { policyId: policyId, assignToType: assignToType, assignToId: assignToId, marker: marker, limit: limit, fields: fields };
}
exports.deserializeGetLegalHoldPolicyAssignmentsQueryParamsArg = deserializeGetLegalHoldPolicyAssignmentsQueryParamsArg;
function serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val) {
    return val;
}
exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "file_version") {
        return "file_version";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
function serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val) {
    return { ["type"]: serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val) {
    const type = deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
function serializeCreateLegalHoldPolicyAssignmentRequestBodyArg(val) {
    return { ["policy_id"]: val.policyId, ["assign_to"]: serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val.assignTo) };
}
exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyArg = serializeCreateLegalHoldPolicyAssignmentRequestBodyArg;
function deserializeCreateLegalHoldPolicyAssignmentRequestBodyArg(val) {
    const policyId = val.policy_id;
    const assignTo = deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val.assign_to);
    return { policyId: policyId, assignTo: assignTo };
}
exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyArg = deserializeCreateLegalHoldPolicyAssignmentRequestBodyArg;
function serializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit, ["fields"]: val.fields };
}
exports.serializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg = serializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg;
function deserializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg(val) {
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { marker: marker, limit: limit, fields: fields };
}
exports.deserializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg = deserializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg;
function serializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit, ["fields"]: val.fields };
}
exports.serializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg = serializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg;
function deserializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg(val) {
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    const fields = (0, json_js_3.isJson)(val.fields, "string") ? val.fields : void 0;
    return { marker: marker, limit: limit, fields: fields };
}
exports.deserializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg = deserializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg;
//# sourceMappingURL=legalHoldPolicyAssignments.generated.js.map