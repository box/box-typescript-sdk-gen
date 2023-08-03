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
exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyArg = exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyArg = exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToField = exports.deserializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.serializeCreateLegalHoldPolicyAssignmentRequestBodyArgAssignToFieldTypeField = exports.LegalHoldPolicyAssignmentsManager = exports.GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg = exports.GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg = exports.DeleteLegalHoldPolicyAssignmentByIdHeadersArg = exports.GetLegalHoldPolicyAssignmentByIdHeadersArg = exports.CreateLegalHoldPolicyAssignmentHeadersArg = exports.GetLegalHoldPolicyAssignmentsHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetLegalHoldPolicyAssignmentsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetLegalHoldPolicyAssignmentsHeadersArg = GetLegalHoldPolicyAssignmentsHeadersArg;
class CreateLegalHoldPolicyAssignmentHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateLegalHoldPolicyAssignmentHeadersArg = CreateLegalHoldPolicyAssignmentHeadersArg;
class GetLegalHoldPolicyAssignmentByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetLegalHoldPolicyAssignmentByIdHeadersArg = GetLegalHoldPolicyAssignmentByIdHeadersArg;
class DeleteLegalHoldPolicyAssignmentByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteLegalHoldPolicyAssignmentByIdHeadersArg = DeleteLegalHoldPolicyAssignmentByIdHeadersArg;
class GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg = GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg;
class GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg = GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg;
class LegalHoldPolicyAssignmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getLegalHoldPolicyAssignments(queryParams, headers = new GetLegalHoldPolicyAssignmentsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["policy_id"]: (0, utils_js_2.toString)(queryParams.policyId), ["assign_to_type"]: (0, utils_js_2.toString)(queryParams.assignToType), ["assign_to_id"]: (0, utils_js_2.toString)(queryParams.assignToId), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeLegalHoldPolicyAssignments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createLegalHoldPolicyAssignment(requestBody, headers = new CreateLegalHoldPolicyAssignmentHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateLegalHoldPolicyAssignmentRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeLegalHoldPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId, headers = new GetLegalHoldPolicyAssignmentByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeLegalHoldPolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId, headers = new DeleteLegalHoldPolicyAssignmentByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId, queryParams = {}, headers = new GetLegalHoldPolicyAssignmentFileOnHoldHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/files_on_hold"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeFileVersionLegalHolds)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getLegalHoldPolicyAssignmentFileVersionOnHold(legalHoldPolicyAssignmentId, queryParams = {}, headers = new GetLegalHoldPolicyAssignmentFileVersionOnHoldHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/legal_hold_policy_assignments/", legalHoldPolicyAssignmentId, "/file_versions_on_hold"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_3.deserializeFileVersionLegalHolds)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.LegalHoldPolicyAssignmentsManager = LegalHoldPolicyAssignmentsManager;
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
//# sourceMappingURL=legalHoldPolicyAssignments.generated.js.map