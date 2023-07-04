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
exports.newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg = exports.newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArg = exports.newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField = exports.newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField = exports.newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = exports.newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = exports.newDeserializeCreateStoragePolicyAssignmentRequestBodyArg = exports.newSerializeCreateStoragePolicyAssignmentRequestBodyArg = exports.newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField = exports.newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField = exports.newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = exports.newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = exports.newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField = exports.newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField = exports.newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = exports.newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = exports.newDeserializeGetStoragePolicyAssignmentsQueryParamsArg = exports.newSerializeGetStoragePolicyAssignmentsQueryParamsArg = exports.newDeserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = exports.newSerializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = exports.StoragePolicyAssignmentsManager = void 0;
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
            return (0, schemas_generated_js_1.newDeserializeStoragePolicyAssignments)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createStoragePolicyAssignment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/storage_policy_assignments"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeStoragePolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getStoragePolicyAssignmentById(storagePolicyAssignmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeStoragePolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateStoragePolicyAssignmentById(storagePolicyAssignmentId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/storage_policy_assignments/", storagePolicyAssignmentId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeStoragePolicyAssignment)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val) {
    return val;
}
exports.newSerializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = newSerializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField;
function newDeserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val) {
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
exports.newDeserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField = newDeserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField;
function newSerializeGetStoragePolicyAssignmentsQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["resolvedForType"]: newSerializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val.resolvedForType), ["resolvedForId"]: val.resolvedForId };
}
exports.newSerializeGetStoragePolicyAssignmentsQueryParamsArg = newSerializeGetStoragePolicyAssignmentsQueryParamsArg;
function newDeserializeGetStoragePolicyAssignmentsQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const resolvedForType = newDeserializeGetStoragePolicyAssignmentsQueryParamsArgResolvedForTypeField(val.resolvedForType);
    const resolvedForId = val.resolvedForId;
    return { marker: marker, resolvedForType: resolvedForType, resolvedForId: resolvedForId };
}
exports.newDeserializeGetStoragePolicyAssignmentsQueryParamsArg = newDeserializeGetStoragePolicyAssignmentsQueryParamsArg;
function newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField;
function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField\"";
    }
    if (val == "storage_policy") {
        return "storage_policy";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField;
function newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val) {
    return { ["type"]: newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField = newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField;
function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val) {
    const type = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField;
function newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField;
function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val) {
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
exports.newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField;
function newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val) {
    return { ["type"]: newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField = newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField;
function newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val) {
    const type = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField;
function newSerializeCreateStoragePolicyAssignmentRequestBodyArg(val) {
    return { ["storagePolicy"]: newSerializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val.storagePolicy), ["assignedTo"]: newSerializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val.assignedTo) };
}
exports.newSerializeCreateStoragePolicyAssignmentRequestBodyArg = newSerializeCreateStoragePolicyAssignmentRequestBodyArg;
function newDeserializeCreateStoragePolicyAssignmentRequestBodyArg(val) {
    const storagePolicy = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgStoragePolicyField(val.storagePolicy);
    const assignedTo = newDeserializeCreateStoragePolicyAssignmentRequestBodyArgAssignedToField(val.assignedTo);
    return { storagePolicy: storagePolicy, assignedTo: assignedTo };
}
exports.newDeserializeCreateStoragePolicyAssignmentRequestBodyArg = newDeserializeCreateStoragePolicyAssignmentRequestBodyArg;
function newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val) {
    return val;
}
exports.newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField;
function newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField\"";
    }
    if (val == "storage_policy") {
        return "storage_policy";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField = newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField;
function newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val) {
    return { ["type"]: newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField = newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField;
function newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val) {
    const type = newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField = newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField;
function newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val) {
    return { ["storagePolicy"]: newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val.storagePolicy) };
}
exports.newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArg = newSerializeUpdateStoragePolicyAssignmentByIdRequestBodyArg;
function newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg(val) {
    const storagePolicy = newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArgStoragePolicyField(val.storagePolicy);
    return { storagePolicy: storagePolicy };
}
exports.newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg = newDeserializeUpdateStoragePolicyAssignmentByIdRequestBodyArg;
//# sourceMappingURL=storagePolicyAssignments.generated.js.map