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
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = exports.deserializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg = exports.serializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg = exports.ShieldInformationBarrierSegmentRestrictionsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class ShieldInformationBarrierSegmentRestrictionsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegmentRestriction)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteShieldInformationBarrierSegmentRestrictionById(shieldInformationBarrierSegmentRestrictionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions/", shieldInformationBarrierSegmentRestrictionId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getShieldInformationBarrierSegmentRestrictions(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createShieldInformationBarrierSegmentRestriction(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_restrictions"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegmentRestriction)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ShieldInformationBarrierSegmentRestrictionsManager = ShieldInformationBarrierSegmentRestrictionsManager;
function serializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg(val) {
    return { ["shieldInformationBarrierSegmentId"]: val.shieldInformationBarrierSegmentId, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg = serializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg;
function deserializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg(val) {
    const shieldInformationBarrierSegmentId = val.shieldInformationBarrierSegmentId;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierSegmentId: shieldInformationBarrierSegmentId, marker: marker, limit: limit };
}
exports.deserializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg = deserializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg;
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val) {
    return val;
}
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField;
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField;
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val) {
    return val;
}
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField;
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
function serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val) {
    return { ["type"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type), ["shieldInformationBarrier"]: val.shieldInformationBarrier == void 0 ? void 0 : (0, schemas_generated_js_2.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier), ["shieldInformationBarrierSegment"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["restrictedSegment"]: serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restrictedSegment) };
}
exports.serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = serializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg;
function deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val) {
    const type = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type);
    const shieldInformationBarrier = val.shieldInformationBarrier == void 0 ? void 0 : (0, schemas_generated_js_3.deserializeShieldInformationBarrierBase)(val.shieldInformationBarrier);
    const shieldInformationBarrierSegment = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment);
    const restrictedSegment = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restrictedSegment);
    return { type: type, shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, restrictedSegment: restrictedSegment };
}
exports.deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = deserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg;
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictions.generated.js.map