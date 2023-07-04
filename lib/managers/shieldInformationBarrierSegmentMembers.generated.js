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
exports.newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = exports.newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = exports.newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = exports.newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = exports.newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = exports.newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = exports.newDeserializeGetShieldInformationBarrierSegmentMembersQueryParamsArg = exports.newSerializeGetShieldInformationBarrierSegmentMembersQueryParamsArg = exports.ShieldInformationBarrierSegmentMembersManager = void 0;
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
            return (0, schemas_generated_js_1.newDeserializeShieldInformationBarrierSegmentMember)((0, json_js_1.deserializeJson)(response.text));
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
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createShieldInformationBarrierSegmentMember(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeShieldInformationBarrierSegmentMember)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ShieldInformationBarrierSegmentMembersManager = ShieldInformationBarrierSegmentMembersManager;
function newSerializeGetShieldInformationBarrierSegmentMembersQueryParamsArg(val) {
    return { ["shieldInformationBarrierSegmentId"]: val.shieldInformationBarrierSegmentId, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.newSerializeGetShieldInformationBarrierSegmentMembersQueryParamsArg = newSerializeGetShieldInformationBarrierSegmentMembersQueryParamsArg;
function newDeserializeGetShieldInformationBarrierSegmentMembersQueryParamsArg(val) {
    const shieldInformationBarrierSegmentId = val.shieldInformationBarrierSegmentId;
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierSegmentId: shieldInformationBarrierSegmentId, marker: marker, limit: limit };
}
exports.newDeserializeGetShieldInformationBarrierSegmentMembersQueryParamsArg = newDeserializeGetShieldInformationBarrierSegmentMembersQueryParamsArg;
function newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val) {
    return val;
}
exports.newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField;
function newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField\"";
    }
    if (val == "shield_information_barrier_segment_member") {
        return "shield_information_barrier_segment_member";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField;
function newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
function newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField;
function newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
exports.newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
function newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
function newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(val) {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val.type), ["shieldInformationBarrier"]: val.shieldInformationBarrier == void 0 ? void 0 : (0, schemas_generated_js_2.newSerializeShieldInformationBarrierBase)(val.shieldInformationBarrier), ["shieldInformationBarrierSegment"]: newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["user"]: (0, schemas_generated_js_4.newSerializeUserBase)(val.user) };
}
exports.newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = newSerializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg;
function newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(val) {
    const type = val.type == void 0 ? void 0 : newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val.type);
    const shieldInformationBarrier = val.shieldInformationBarrier == void 0 ? void 0 : (0, schemas_generated_js_3.newDeserializeShieldInformationBarrierBase)(val.shieldInformationBarrier);
    const shieldInformationBarrierSegment = newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment);
    const user = (0, schemas_generated_js_5.newDeserializeUserBase)(val.user);
    return { type: type, shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, user: user };
}
exports.newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = newDeserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg;
//# sourceMappingURL=shieldInformationBarrierSegmentMembers.generated.js.map