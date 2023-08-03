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
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField = exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = exports.ShieldInformationBarrierSegmentMembersManager = exports.CreateShieldInformationBarrierSegmentMemberHeadersArg = exports.GetShieldInformationBarrierSegmentMembersHeadersArg = exports.DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg = exports.GetShieldInformationBarrierSegmentMemberByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const schemas_generated_js_4 = require("../schemas.generated.js");
const schemas_generated_js_5 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetShieldInformationBarrierSegmentMemberByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetShieldInformationBarrierSegmentMemberByIdHeadersArg = GetShieldInformationBarrierSegmentMemberByIdHeadersArg;
class DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg = DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg;
class GetShieldInformationBarrierSegmentMembersHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetShieldInformationBarrierSegmentMembersHeadersArg = GetShieldInformationBarrierSegmentMembersHeadersArg;
class CreateShieldInformationBarrierSegmentMemberHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateShieldInformationBarrierSegmentMemberHeadersArg = CreateShieldInformationBarrierSegmentMemberHeadersArg;
class ShieldInformationBarrierSegmentMembersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId, headers = new GetShieldInformationBarrierSegmentMemberByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members/", shieldInformationBarrierSegmentMemberId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegmentMember)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteShieldInformationBarrierSegmentMemberById(shieldInformationBarrierSegmentMemberId, headers = new DeleteShieldInformationBarrierSegmentMemberByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members/", shieldInformationBarrierSegmentMemberId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    getShieldInformationBarrierSegmentMembers(queryParams, headers = new GetShieldInformationBarrierSegmentMembersHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["shield_information_barrier_segment_id"]: (0, utils_js_2.toString)(queryParams.shieldInformationBarrierSegmentId), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createShieldInformationBarrierSegmentMember(requestBody, headers = new CreateShieldInformationBarrierSegmentMemberHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segment_members"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegmentMember)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ShieldInformationBarrierSegmentMembersManager = ShieldInformationBarrierSegmentMembersManager;
function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val) {
    return val;
}
exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField = serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField;
function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
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
    if (!(0, json_js_3.isJson)(val, "string")) {
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
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField;
function serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(val) {
    return { ["type"]: val.type == void 0 ? void 0 : serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val.type), ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : (0, schemas_generated_js_2.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier), ["shield_information_barrier_segment"]: serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["user"]: (0, schemas_generated_js_4.serializeUserBase)(val.user) };
}
exports.serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = serializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg;
function deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg(val) {
    const type = val.type == void 0 ? void 0 : deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgTypeField(val.type);
    const shieldInformationBarrier = val.shield_information_barrier == void 0 ? void 0 : (0, schemas_generated_js_3.deserializeShieldInformationBarrierBase)(val.shield_information_barrier);
    const shieldInformationBarrierSegment = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArgShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    const user = (0, schemas_generated_js_5.deserializeUserBase)(val.user);
    return { type: type, shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, user: user };
}
exports.deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg = deserializeCreateShieldInformationBarrierSegmentMemberRequestBodyArg;
//# sourceMappingURL=shieldInformationBarrierSegmentMembers.generated.js.map