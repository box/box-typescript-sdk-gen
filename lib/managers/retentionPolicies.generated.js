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
exports.deserializeUpdateRetentionPolicyByIdRequestBodyArg = exports.serializeUpdateRetentionPolicyByIdRequestBodyArg = exports.deserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = exports.serializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = exports.deserializeCreateRetentionPolicyRequestBodyArg = exports.serializeCreateRetentionPolicyRequestBodyArg = exports.deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField = exports.serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField = exports.deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField = exports.serializeCreateRetentionPolicyRequestBodyArgDispositionActionField = exports.deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField = exports.serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField = exports.RetentionPoliciesManager = exports.DeleteRetentionPolicyByIdHeadersArg = exports.UpdateRetentionPolicyByIdHeadersArg = exports.GetRetentionPolicyByIdHeadersArg = exports.CreateRetentionPolicyHeadersArg = exports.GetRetentionPoliciesHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetRetentionPoliciesHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetRetentionPoliciesHeadersArg = GetRetentionPoliciesHeadersArg;
class CreateRetentionPolicyHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateRetentionPolicyHeadersArg = CreateRetentionPolicyHeadersArg;
class GetRetentionPolicyByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetRetentionPolicyByIdHeadersArg = GetRetentionPolicyByIdHeadersArg;
class UpdateRetentionPolicyByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateRetentionPolicyByIdHeadersArg = UpdateRetentionPolicyByIdHeadersArg;
class DeleteRetentionPolicyByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteRetentionPolicyByIdHeadersArg = DeleteRetentionPolicyByIdHeadersArg;
class RetentionPoliciesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getRetentionPolicies(queryParams = {}, headers = new GetRetentionPoliciesHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["policy_name"]: (0, utils_js_2.toString)(queryParams.policyName), ["policy_type"]: (0, utils_js_2.toString)(queryParams.policyType), ["created_by_user_id"]: (0, utils_js_2.toString)(queryParams.createdByUserId), ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["limit"]: (0, utils_js_2.toString)(queryParams.limit), ["marker"]: (0, utils_js_2.toString)(queryParams.marker) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeRetentionPolicies)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createRetentionPolicy(requestBody, headers = new CreateRetentionPolicyHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateRetentionPolicyRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeRetentionPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getRetentionPolicyById(retentionPolicyId, queryParams = {}, headers = new GetRetentionPolicyByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeRetentionPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateRetentionPolicyById(retentionPolicyId, requestBody, headers = new UpdateRetentionPolicyByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateRetentionPolicyByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeRetentionPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteRetentionPolicyById(retentionPolicyId, headers = new DeleteRetentionPolicyByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.RetentionPoliciesManager = RetentionPoliciesManager;
function serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val) {
    return val;
}
exports.serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField = serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField;
function deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyRequestBodyArgPolicyTypeField\"";
    }
    if (val == "finite") {
        return "finite";
    }
    if (val == "indefinite") {
        return "indefinite";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField = deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField;
function serializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val) {
    return val;
}
exports.serializeCreateRetentionPolicyRequestBodyArgDispositionActionField = serializeCreateRetentionPolicyRequestBodyArgDispositionActionField;
function deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyRequestBodyArgDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField = deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField;
function serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val) {
    return val;
}
exports.serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField = serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField;
function deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateRetentionPolicyRequestBodyArgRetentionTypeField\"";
    }
    if (val == "modifiable") {
        return "modifiable";
    }
    if (val == "non-modifiable") {
        return "non-modifiable";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField = deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField;
function serializeCreateRetentionPolicyRequestBodyArg(val) {
    return { ["policy_name"]: val.policyName, ["description"]: val.description, ["policy_type"]: serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val.policyType), ["disposition_action"]: serializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val.dispositionAction), ["retention_length"]: val.retentionLength, ["retention_type"]: val.retentionType == void 0 ? void 0 : serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val.retentionType), ["can_owner_extend_retention"]: val.canOwnerExtendRetention, ["are_owners_notified"]: val.areOwnersNotified, ["custom_notification_recipients"]: val.customNotificationRecipients == void 0 ? void 0 : val.customNotificationRecipients.map(function (item) {
            return (0, schemas_generated_js_3.serializeUserMini)(item);
        }) };
}
exports.serializeCreateRetentionPolicyRequestBodyArg = serializeCreateRetentionPolicyRequestBodyArg;
function deserializeCreateRetentionPolicyRequestBodyArg(val) {
    const policyName = val.policy_name;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    const policyType = deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val.policy_type);
    const dispositionAction = deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val.disposition_action);
    const retentionLength = (0, json_js_3.isJson)(val.retention_length, "string") ? val.retention_length : void 0;
    const retentionType = val.retention_type == void 0 ? void 0 : deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val.retention_type);
    const canOwnerExtendRetention = (0, json_js_3.isJson)(val.can_owner_extend_retention, "boolean") ? val.can_owner_extend_retention : void 0;
    const areOwnersNotified = (0, json_js_3.isJson)(val.are_owners_notified, "boolean") ? val.are_owners_notified : void 0;
    const customNotificationRecipients = (0, json_js_3.isJson)(val.custom_notification_recipients, "array") ? val.custom_notification_recipients.map(function (itm) {
        return (0, schemas_generated_js_4.deserializeUserMini)(itm);
    }) : void 0;
    return { policyName: policyName, description: description, policyType: policyType, dispositionAction: dispositionAction, retentionLength: retentionLength, retentionType: retentionType, canOwnerExtendRetention: canOwnerExtendRetention, areOwnersNotified: areOwnersNotified, customNotificationRecipients: customNotificationRecipients };
}
exports.deserializeCreateRetentionPolicyRequestBodyArg = deserializeCreateRetentionPolicyRequestBodyArg;
function serializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val) {
    return val;
}
exports.serializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = serializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField;
function deserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = deserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField;
function serializeUpdateRetentionPolicyByIdRequestBodyArg(val) {
    return { ["policy_name"]: val.policyName, ["description"]: val.description, ["disposition_action"]: val.dispositionAction == void 0 ? void 0 : serializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val.dispositionAction), ["retention_type"]: val.retentionType, ["retention_length"]: val.retentionLength, ["status"]: val.status, ["can_owner_extend_retention"]: val.canOwnerExtendRetention, ["are_owners_notified"]: val.areOwnersNotified, ["custom_notification_recipients"]: val.customNotificationRecipients == void 0 ? void 0 : val.customNotificationRecipients.map(function (item) {
            return (0, schemas_generated_js_3.serializeUserMini)(item);
        }) };
}
exports.serializeUpdateRetentionPolicyByIdRequestBodyArg = serializeUpdateRetentionPolicyByIdRequestBodyArg;
function deserializeUpdateRetentionPolicyByIdRequestBodyArg(val) {
    const policyName = (0, json_js_3.isJson)(val.policy_name, "string") ? val.policy_name : void 0;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    const dispositionAction = val.disposition_action == void 0 ? void 0 : deserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val.disposition_action);
    const retentionType = (0, json_js_3.isJson)(val.retention_type, "string") ? val.retention_type : void 0;
    const retentionLength = (0, json_js_3.isJson)(val.retention_length, "string") ? val.retention_length : void 0;
    const status = (0, json_js_3.isJson)(val.status, "string") ? val.status : void 0;
    const canOwnerExtendRetention = (0, json_js_3.isJson)(val.can_owner_extend_retention, "boolean") ? val.can_owner_extend_retention : void 0;
    const areOwnersNotified = (0, json_js_3.isJson)(val.are_owners_notified, "boolean") ? val.are_owners_notified : void 0;
    const customNotificationRecipients = (0, json_js_3.isJson)(val.custom_notification_recipients, "array") ? val.custom_notification_recipients.map(function (itm) {
        return (0, schemas_generated_js_4.deserializeUserMini)(itm);
    }) : void 0;
    return { policyName: policyName, description: description, dispositionAction: dispositionAction, retentionType: retentionType, retentionLength: retentionLength, status: status, canOwnerExtendRetention: canOwnerExtendRetention, areOwnersNotified: areOwnersNotified, customNotificationRecipients: customNotificationRecipients };
}
exports.deserializeUpdateRetentionPolicyByIdRequestBodyArg = deserializeUpdateRetentionPolicyByIdRequestBodyArg;
//# sourceMappingURL=retentionPolicies.generated.js.map