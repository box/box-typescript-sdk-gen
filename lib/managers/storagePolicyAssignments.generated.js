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
exports.deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg = exports.serializeUpdateStoragePolicyAssignmentByIdRequestBodyArg = exports.deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField = exports.serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField = exports.deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = exports.serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = exports.deserializeCreateStoragePolicyAssignmentRequestBodyArg = exports.serializeCreateStoragePolicyAssignmentRequestBodyArg = exports.deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField = exports.serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField = exports.deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = exports.serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = exports.deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField = exports.serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField = exports.deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = exports.serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = exports.deserializeGetStoragePolicyAssignmentsQueryParamsArg = exports.serializeGetStoragePolicyAssignmentsQueryParamsArg = exports.deserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = exports.serializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = exports.StoragePolicyAssignmentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class StoragePolicyAssignmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getStoragePolicyAssignments(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/storage_policy_assignments"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeStoragePolicyAssignments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createStoragePolicyAssignment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/storage_policy_assignments"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeStoragePolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getStoragePolicyAssignmentById(storagePolicyAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeStoragePolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateStoragePolicyAssignmentById(storagePolicyAssignmentId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeStoragePolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteStoragePolicyAssignmentById(storagePolicyAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.StoragePolicyAssignmentsManager = StoragePolicyAssignmentsManager;
function serializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val) {
    return val;
}
exports.serializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = serializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField;
function deserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"GetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = deserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField;
function serializeGetStoragePolicyAssignmentsQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["resolvedForType"]: serializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val.resolvedForType), ["resolvedForId"]: val.resolvedForId };
}
exports.serializeGetStoragePolicyAssignmentsQueryParamsArg = serializeGetStoragePolicyAssignmentsQueryParamsArg;
function deserializeGetStoragePolicyAssignmentsQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const resolvedForType = deserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val.resolvedForType);
    const resolvedForId = val.resolvedForId;
    return { marker: marker, resolvedForType: resolvedForType, resolvedForId: resolvedForId };
}
exports.deserializeGetStoragePolicyAssignmentsQueryParamsArg = deserializeGetStoragePolicyAssignmentsQueryParamsArg;
function serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val) {
    return val;
}
exports.serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField;
function deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField\"";
    }
    if (val == "storage_policy") {
        return "storage_policy";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField;
function serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val) {
    return { ["type"]: serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField = serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField;
function deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val) {
    const type = deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField = deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField;
function serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val) {
    return val;
}
exports.serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField;
function deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField;
function serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val) {
    return { ["type"]: serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField = serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField;
function deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val) {
    const type = deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField = deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField;
function serializeCreateStoragePolicyAssignmentRequestBodyArg(val) {
    return { ["storagePolicy"]: serializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val.storagePolicy), ["assignedTo"]: serializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val.assignedTo) };
}
exports.serializeCreateStoragePolicyAssignmentRequestBodyArg = serializeCreateStoragePolicyAssignmentRequestBodyArg;
function deserializeCreateStoragePolicyAssignmentRequestBodyArg(val) {
    const storagePolicy = deserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val.storagePolicy);
    const assignedTo = deserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val.assignedTo);
    return { storagePolicy: storagePolicy, assignedTo: assignedTo };
}
exports.deserializeCreateStoragePolicyAssignmentRequestBodyArg = deserializeCreateStoragePolicyAssignmentRequestBodyArg;
function serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val) {
    return val;
}
exports.serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField;
function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField\"";
    }
    if (val == "storage_policy") {
        return "storage_policy";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField;
function serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val) {
    return { ["type"]: serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField = serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField;
function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val) {
    const type = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField;
function serializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val) {
    return { ["storagePolicy"]: serializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val.storagePolicy) };
}
exports.serializeUpdateStoragePolicyAssignmentByIdRequestBodyArg = serializeUpdateStoragePolicyAssignmentByIdRequestBodyArg;
function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val) {
    const storagePolicy = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val.storagePolicy);
    return { storagePolicy: storagePolicy };
}
exports.deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg;
//# sourceMappingURL=storagePolicyAssignments.generated.js.map