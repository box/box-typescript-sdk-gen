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
exports.newDeserializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg = exports.newSerializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg = exports.newDeserializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg = exports.newSerializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg = exports.newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArg = exports.newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArg = exports.newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = exports.newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = exports.newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArg = exports.newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArg = exports.newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = exports.newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = exports.LegalHoldPolicyAssignmentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class LegalHoldPolicyAssignmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getLegalHoldPolicyAssignments(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeLegalHoldPolicyAssignments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createLegalHoldPolicyAssignment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeLegalHoldPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeLegalHoldPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
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
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/files_on_hold"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.newDeserializeFileVersionLegalHolds)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getLegalHoldPolicyAssignmentFileVersionOnHold(legalHoldPolicyAssignmentId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/file_versions_on_hold"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.newDeserializeFileVersionLegalHolds)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.LegalHoldPolicyAssignmentsManager = LegalHoldPolicyAssignmentsManager;
function newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val) {
    return val;
}
exports.newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField;
function newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField = newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField;
function newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArg(val) {
    return { ["policyId"]: val.policyId, ["assignToType"]: val.assignToType == void 0 ? void 0 : newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val.assignToType), ["assignToId"]: val.assignToId, ["marker"]: val.marker, ["limit"]: val.limit, ["fields"]: val.fields };
}
exports.newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArg = newSerializeGetLegalHoldPolicyAssignmentsQueryParamsArg;
function newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArg(val) {
    const policyId = val.policyId;
    const assignToType = val.assignToType == void 0 ? void 0 : newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArgAssignToTypeField(val.assignToType);
    const assignToId = (0, json_js_2.isJson)(val.assignToId, "string") ? val.assignToId : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { policyId: policyId, assignToType: assignToType, assignToId: assignToId, marker: marker, limit: limit, fields: fields };
}
exports.newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArg = newDeserializeGetLegalHoldPolicyAssignmentsQueryParamsArg;
function newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
function newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField;
function newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val) {
    return { ["type"]: newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
function newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val) {
    const type = newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField;
function newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArg(val) {
    return { ["policyId"]: val.policyId, ["assignTo"]: newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val.assignTo) };
}
exports.newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArg = newSerializeCreateLegalHoldPolicyAssignmentRequestBodyArg;
function newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArg(val) {
    const policyId = val.policyId;
    const assignTo = newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField(val.assignTo);
    return { policyId: policyId, assignTo: assignTo };
}
exports.newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArg = newDeserializeCreateLegalHoldPolicyAssignmentRequestBodyArg;
function newSerializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit, ["fields"]: val.fields };
}
exports.newSerializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg = newSerializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg;
function newDeserializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { marker: marker, limit: limit, fields: fields };
}
exports.newDeserializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg = newDeserializeGetLegalHoldPolicyAssignmentFileOnHoldQueryParamsArg;
function newSerializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit, ["fields"]: val.fields };
}
exports.newSerializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg = newSerializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg;
function newDeserializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { marker: marker, limit: limit, fields: fields };
}
exports.newDeserializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg = newDeserializeGetLegalHoldPolicyAssignmentFileVersionOnHoldQueryParamsArg;
//# sourceMappingURL=legalHoldPolicyAssignments.generated.js.map