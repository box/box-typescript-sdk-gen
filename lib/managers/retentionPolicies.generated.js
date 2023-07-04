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
exports.newDeserializeUpdateRetentionPolicyByIdRequestBodyArg = exports.newSerializeUpdateRetentionPolicyByIdRequestBodyArg = exports.newDeserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = exports.newSerializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = exports.newDeserializeGetRetentionPolicyByIdQueryParamsArg = exports.newSerializeGetRetentionPolicyByIdQueryParamsArg = exports.newDeserializeCreateRetentionPolicyRequestBodyArg = exports.newSerializeCreateRetentionPolicyRequestBodyArg = exports.newDeserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField = exports.newSerializeCreateRetentionPolicyRequestBodyArgRetentionTypeField = exports.newDeserializeCreateRetentionPolicyRequestBodyArgDispositionActionField = exports.newSerializeCreateRetentionPolicyRequestBodyArgDispositionActionField = exports.newDeserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField = exports.newSerializeCreateRetentionPolicyRequestBodyArgPolicyTypeField = exports.newDeserializeGetRetentionPoliciesQueryParamsArg = exports.newSerializeGetRetentionPoliciesQueryParamsArg = exports.newDeserializeGetRetentionPoliciesQueryParamsArgPolicyTypeField = exports.newSerializeGetRetentionPoliciesQueryParamsArgPolicyTypeField = exports.RetentionPoliciesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class RetentionPoliciesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getRetentionPolicies(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeRetentionPolicies)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createRetentionPolicy(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeRetentionPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getRetentionPolicyById(retentionPolicyId, queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeRetentionPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateRetentionPolicyById(retentionPolicyId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeRetentionPolicy)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteRetentionPolicyById(retentionPolicyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/retention_policies/", retentionPolicyId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.RetentionPoliciesManager = RetentionPoliciesManager;
function newSerializeGetRetentionPoliciesQueryParamsArgPolicyTypeField(val) {
    return val;
}
exports.newSerializeGetRetentionPoliciesQueryParamsArgPolicyTypeField = newSerializeGetRetentionPoliciesQueryParamsArgPolicyTypeField;
function newDeserializeGetRetentionPoliciesQueryParamsArgPolicyTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetRetentionPoliciesQueryParamsArgPolicyTypeField\"";
    }
    if (val == "finite") {
        return "finite";
    }
    if (val == "indefinite") {
        return "indefinite";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeGetRetentionPoliciesQueryParamsArgPolicyTypeField = newDeserializeGetRetentionPoliciesQueryParamsArgPolicyTypeField;
function newSerializeGetRetentionPoliciesQueryParamsArg(val) {
    return { ["policyName"]: val.policyName, ["policyType"]: val.policyType == void 0 ? void 0 : newSerializeGetRetentionPoliciesQueryParamsArgPolicyTypeField(val.policyType), ["createdByUserId"]: val.createdByUserId, ["fields"]: val.fields, ["limit"]: val.limit, ["marker"]: val.marker };
}
exports.newSerializeGetRetentionPoliciesQueryParamsArg = newSerializeGetRetentionPoliciesQueryParamsArg;
function newDeserializeGetRetentionPoliciesQueryParamsArg(val) {
    const policyName = (0, json_js_2.isJson)(val.policyName, "string") ? val.policyName : void 0;
    const policyType = val.policyType == void 0 ? void 0 : newDeserializeGetRetentionPoliciesQueryParamsArgPolicyTypeField(val.policyType);
    const createdByUserId = (0, json_js_2.isJson)(val.createdByUserId, "string") ? val.createdByUserId : void 0;
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    return { policyName: policyName, policyType: policyType, createdByUserId: createdByUserId, fields: fields, limit: limit, marker: marker };
}
exports.newDeserializeGetRetentionPoliciesQueryParamsArg = newDeserializeGetRetentionPoliciesQueryParamsArg;
function newSerializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val) {
    return val;
}
exports.newSerializeCreateRetentionPolicyRequestBodyArgPolicyTypeField = newSerializeCreateRetentionPolicyRequestBodyArgPolicyTypeField;
function newDeserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField = newDeserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField;
function newSerializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val) {
    return val;
}
exports.newSerializeCreateRetentionPolicyRequestBodyArgDispositionActionField = newSerializeCreateRetentionPolicyRequestBodyArgDispositionActionField;
function newDeserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateRetentionPolicyRequestBodyArgDispositionActionField = newDeserializeCreateRetentionPolicyRequestBodyArgDispositionActionField;
function newSerializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val) {
    return val;
}
exports.newSerializeCreateRetentionPolicyRequestBodyArgRetentionTypeField = newSerializeCreateRetentionPolicyRequestBodyArgRetentionTypeField;
function newDeserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField = newDeserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField;
function newSerializeCreateRetentionPolicyRequestBodyArg(val) {
    return { ["policyName"]: val.policyName, ["description"]: val.description, ["policyType"]: newSerializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val.policyType), ["dispositionAction"]: newSerializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val.dispositionAction), ["retentionLength"]: val.retentionLength, ["retentionType"]: val.retentionType == void 0 ? void 0 : newSerializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val.retentionType), ["canOwnerExtendRetention"]: val.canOwnerExtendRetention, ["areOwnersNotified"]: val.areOwnersNotified, ["customNotificationRecipients"]: val.customNotificationRecipients == void 0 ? void 0 : val.customNotificationRecipients.map(function (item) {
            return (0, schemas_generated_js_3.newSerializeUserMini)(item);
        }) };
}
exports.newSerializeCreateRetentionPolicyRequestBodyArg = newSerializeCreateRetentionPolicyRequestBodyArg;
function newDeserializeCreateRetentionPolicyRequestBodyArg(val) {
    const policyName = val.policyName;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const policyType = newDeserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val.policyType);
    const dispositionAction = newDeserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val.dispositionAction);
    const retentionLength = (0, json_js_2.isJson)(val.retentionLength, "string") ? val.retentionLength : void 0;
    const retentionType = val.retentionType == void 0 ? void 0 : newDeserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val.retentionType);
    const canOwnerExtendRetention = (0, json_js_2.isJson)(val.canOwnerExtendRetention, "boolean") ? val.canOwnerExtendRetention : void 0;
    const areOwnersNotified = (0, json_js_2.isJson)(val.areOwnersNotified, "boolean") ? val.areOwnersNotified : void 0;
    const customNotificationRecipients = (0, json_js_2.isJson)(val.customNotificationRecipients, "array") ? val.customNotificationRecipients.map(function (itm) {
        return (0, schemas_generated_js_4.newDeserializeUserMini)(itm);
    }) : void 0;
    return { policyName: policyName, description: description, policyType: policyType, dispositionAction: dispositionAction, retentionLength: retentionLength, retentionType: retentionType, canOwnerExtendRetention: canOwnerExtendRetention, areOwnersNotified: areOwnersNotified, customNotificationRecipients: customNotificationRecipients };
}
exports.newDeserializeCreateRetentionPolicyRequestBodyArg = newDeserializeCreateRetentionPolicyRequestBodyArg;
function newSerializeGetRetentionPolicyByIdQueryParamsArg(val) {
    return { ["fields"]: val.fields };
}
exports.newSerializeGetRetentionPolicyByIdQueryParamsArg = newSerializeGetRetentionPolicyByIdQueryParamsArg;
function newDeserializeGetRetentionPolicyByIdQueryParamsArg(val) {
    const fields = (0, json_js_2.isJson)(val.fields, "string") ? val.fields : void 0;
    return { fields: fields };
}
exports.newDeserializeGetRetentionPolicyByIdQueryParamsArg = newDeserializeGetRetentionPolicyByIdQueryParamsArg;
function newSerializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val) {
    return val;
}
exports.newSerializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = newSerializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField;
function newDeserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = newDeserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField;
function newSerializeUpdateRetentionPolicyByIdRequestBodyArg(val) {
    return { ["policyName"]: val.policyName, ["description"]: val.description, ["dispositionAction"]: val.dispositionAction == void 0 ? void 0 : newSerializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val.dispositionAction), ["retentionType"]: val.retentionType, ["retentionLength"]: val.retentionLength, ["status"]: val.status, ["canOwnerExtendRetention"]: val.canOwnerExtendRetention, ["areOwnersNotified"]: val.areOwnersNotified, ["customNotificationRecipients"]: val.customNotificationRecipients == void 0 ? void 0 : val.customNotificationRecipients.map(function (item) {
            return (0, schemas_generated_js_3.newSerializeUserMini)(item);
        }) };
}
exports.newSerializeUpdateRetentionPolicyByIdRequestBodyArg = newSerializeUpdateRetentionPolicyByIdRequestBodyArg;
function newDeserializeUpdateRetentionPolicyByIdRequestBodyArg(val) {
    const policyName = (0, json_js_2.isJson)(val.policyName, "string") ? val.policyName : void 0;
    const description = (0, json_js_2.isJson)(val.description, "string") ? val.description : void 0;
    const dispositionAction = val.dispositionAction == void 0 ? void 0 : newDeserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val.dispositionAction);
    const retentionType = (0, json_js_2.isJson)(val.retentionType, "string") ? val.retentionType : void 0;
    const retentionLength = (0, json_js_2.isJson)(val.retentionLength, "string") ? val.retentionLength : void 0;
    const status = (0, json_js_2.isJson)(val.status, "string") ? val.status : void 0;
    const canOwnerExtendRetention = (0, json_js_2.isJson)(val.canOwnerExtendRetention, "boolean") ? val.canOwnerExtendRetention : void 0;
    const areOwnersNotified = (0, json_js_2.isJson)(val.areOwnersNotified, "boolean") ? val.areOwnersNotified : void 0;
    const customNotificationRecipients = (0, json_js_2.isJson)(val.customNotificationRecipients, "array") ? val.customNotificationRecipients.map(function (itm) {
        return (0, schemas_generated_js_4.newDeserializeUserMini)(itm);
    }) : void 0;
    return { policyName: policyName, description: description, dispositionAction: dispositionAction, retentionType: retentionType, retentionLength: retentionLength, status: status, canOwnerExtendRetention: canOwnerExtendRetention, areOwnersNotified: areOwnersNotified, customNotificationRecipients: customNotificationRecipients };
}
exports.newDeserializeUpdateRetentionPolicyByIdRequestBodyArg = newDeserializeUpdateRetentionPolicyByIdRequestBodyArg;
//# sourceMappingURL=retentionPolicies.generated.js.map