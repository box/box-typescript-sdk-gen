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
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = exports.deserializeGetShieldInformationBarrierSegmentMembersQueryParamsArg = exports.serializeGetShieldInformationBarrierSegmentMembersQueryParamsArg = exports.ShieldInformationBarrierSegmentMembersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const schemas_generated_js_5 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class ShieldInformationBarrierSegmentMembersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members/", shieldInformationBarrierSegmentMemberId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegmentMember)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members/", shieldInformationBarrierSegmentMemberId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getShieldInformationBarrierSegmentMembers(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members"), { method: "GET", params: (0, utils_js_1.prepareParams)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createShieldInformationBarrierSegmentMember(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegmentMember)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ShieldInformationBarrierSegmentMembersManager = ShieldInformationBarrierSegmentMembersManager;
function serializeGetShieldInformationBarrierSegmentMembersQueryParamsArg(val) {
    return { ["shieldInformationBarrierSegmentId"]: val.shieldInformationBarrierSegmentId, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetShieldInformationBarrierSegmentMembersQueryParamsArg = serializeGetShieldInformationBarrierSegmentMembersQueryParamsArg;
function deserializeGetShieldInformationBarrierSegmentMembersQueryParamsArg(val) {
    const shieldInformationBarrierSegmentId = val.shieldInformationBarrierSegmentId;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierSegmentId: shieldInformationBarrierSegmentId, marker: marker, limit: limit };
}
exports.deserializeGetShieldInformationBarrierSegmentMembersQueryParamsArg = deserializeGetShieldInformationBarrierSegmentMembersQueryParamsArg;
function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val) {
    return val;
}
exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField;
function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField\"";
    }
    if (val == "shield_information_barrier_segment_member") {
        return "shield_information_barrier_segment_member";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField;
function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val) {
    return val;
}
exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(val) {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val.type), ["shieldInformationBarrier"]: val.shieldInformationBarrier == void 0 ? void 0 : (0, schemas_generated_js_2.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier), ["shieldInformationBarrierSegment"]: serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["user"]: (0, schemas_generated_js_4.serializeUserBase)(val.user) };
}
exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg;
function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(val) {
    const type = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val.type);
    const shieldInformationBarrier = val.shieldInformationBarrier == void 0 ? void 0 : (0, schemas_generated_js_3.deserializeShieldInformationBarrierBase)(val.shieldInformationBarrier);
    const shieldInformationBarrierSegment = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment);
    const user = (0, schemas_generated_js_5.deserializeUserBase)(val.user);
    return { type: type, shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, user: user };
}
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg;
//# sourceMappingURL=shieldInformationBarrierSegmentMembers.generated.js.map