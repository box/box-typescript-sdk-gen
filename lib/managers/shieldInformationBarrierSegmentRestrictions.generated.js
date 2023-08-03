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
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = exports.ShieldInformationBarrierSegmentRestrictionsManager = exports.CreateShieldInformationBarrierSegmentRestrictionHeadersArg = exports.GetShieldInformationBarrierSegmentRestrictionsHeadersArg = exports.DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg = exports.GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg = GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg;
class DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg = DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg;
class GetShieldInformationBarrierSegmentRestrictionsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetShieldInformationBarrierSegmentRestrictionsHeadersArg = GetShieldInformationBarrierSegmentRestrictionsHeadersArg;
class CreateShieldInformationBarrierSegmentRestrictionHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateShieldInformationBarrierSegmentRestrictionHeadersArg = CreateShieldInformationBarrierSegmentRestrictionHeadersArg;
class ShieldInformationBarrierSegmentRestrictionsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId, headers = new GetShieldInformationBarrierSegmentRestrictionByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegmentRestriction)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId, headers = new DeleteShieldInformationBarrierSegmentRestrictionByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    getShieldInformationBarrierSegmentRestrictions(queryParams, headers = new GetShieldInformationBarrierSegmentRestrictionsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["shield_information_barrier_segment_id"]: (0, utils_js_2.toString)(queryParams.shieldInformationBarrierSegmentId), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createShieldInformationBarrierSegmentRestriction(requestBody, headers = new CreateShieldInformationBarrierSegmentRestrictionHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegmentRestriction)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ShieldInformationBarrierSegmentRestrictionsManager = ShieldInformationBarrierSegmentRestrictionsManager;
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val) {
    return val;
}
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField;
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField\"";
    }
    if (val == "shield_information_barrier_segment_restriction") {
        return "shield_information_barrier_segment_restriction";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField;
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val) {
    return val;
}
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField;
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField;
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val) {
    return val;
}
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField;
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField;
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type) };
}
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val) {
    return { ["type"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type), ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : (0, schemas_generated_js_2.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier), ["shield_information_barrier_segment"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["restricted_segment"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restrictedSegment) };
}
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg;
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val) {
    const type = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type);
    const shieldInformationBarrier = val.shield_information_barrier == void 0 ? void 0 : (0, schemas_generated_js_3.deserializeShieldInformationBarrierBase)(val.shield_information_barrier);
    const shieldInformationBarrierSegment = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    const restrictedSegment = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restricted_segment);
    return { type: type, shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, restrictedSegment: restrictedSegment };
}
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg;
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictions.generated.js.map