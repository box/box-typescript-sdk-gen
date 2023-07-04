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
exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = exports.newDeserializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg = exports.newSerializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg = exports.ShieldInformationBarrierSegmentRestrictionsManager = void 0;
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
            return (0, schemas_generated_js_1.newDeserializeShieldInformationBarrierSegmentRestriction)((0, json_js_1.deserializeJson)(response.text));
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
            return (0, schemas_generated_js_1.newDeserializeShieldInformationBarrierSegmentRestriction)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ShieldInformationBarrierSegmentRestrictionsManager = ShieldInformationBarrierSegmentRestrictionsManager;
function newSerializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg(val) {
    return { ["shieldInformationBarrierSegmentId"]: val.shieldInformationBarrierSegmentId, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.newSerializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg = newSerializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg;
function newDeserializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg(val) {
    const shieldInformationBarrierSegmentId = val.shieldInformationBarrierSegmentId;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierSegmentId: shieldInformationBarrierSegmentId, marker: marker, limit: limit };
}
exports.newDeserializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg = newDeserializeGetShieldInformationBarrierSegmentRestrictionsQueryParamsArg;
function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val) {
    return val;
}
exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField;
function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField\"";
    }
    if (val == "shield_information_barrier_segment_restriction") {
        return "shield_information_barrier_segment_restriction";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField;
function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField;
function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField;
function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField;
function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField;
function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type) };
}
exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField;
function newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val) {
    return { ["type"]: newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type), ["shieldInformationBarrier"]: val.shieldInformationBarrier == void 0 ? void 0 : (0, schemas_generated_js_2.newSerializeShieldInformationBarrierBase)(val.shieldInformationBarrier), ["shieldInformationBarrierSegment"]: newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["restrictedSegment"]: newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restrictedSegment) };
}
exports.newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = newSerializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg;
function newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg(val) {
    const type = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgTypeField(val.type);
    const shieldInformationBarrier = val.shieldInformationBarrier == void 0 ? void 0 : (0, schemas_generated_js_3.newDeserializeShieldInformationBarrierBase)(val.shieldInformationBarrier);
    const shieldInformationBarrierSegment = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment);
    const restrictedSegment = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArgRestrictedSegmentField(val.restrictedSegment);
    return { type: type, shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, restrictedSegment: restrictedSegment };
}
exports.newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg = newDeserializeCreateShieldInformationBarrierSegmentRestrictionRequestBodyArg;
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictions.generated.js.map