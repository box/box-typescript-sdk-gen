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
exports.deserializeCreateShieldInformationBarrierSegmentRequestBodyArg = exports.serializeCreateShieldInformationBarrierSegmentRequestBodyArg = exports.deserializeGetShieldInformationBarrierSegmentsQueryParamsArg = exports.serializeGetShieldInformationBarrierSegmentsQueryParamsArg = exports.deserializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg = exports.serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg = exports.ShieldInformationBarrierSegmentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class ShieldInformationBarrierSegmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId), { method: "PUT", body: (0, json_js_2.serializeJson)(serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    getShieldInformationBarrierSegments(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments"), { method: "GET", params: (0, utils_js_1.prepareParams)(serializeGetShieldInformationBarrierSegmentsQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createShieldInformationBarrierSegment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments"), { method: "POST", body: (0, json_js_2.serializeJson)(serializeCreateShieldInformationBarrierSegmentRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.ShieldInformationBarrierSegmentsManager = ShieldInformationBarrierSegmentsManager;
function serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(val) {
    return { ["name"]: val.name, ["description"]: val.description };
}
exports.serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg = serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg;
function deserializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(val) {
    const name = (0, json_js_3.isJson)(val.name, "string") ? val.name : void 0;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    return { name: name, description: description };
}
exports.deserializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg = deserializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg;
function serializeGetShieldInformationBarrierSegmentsQueryParamsArg(val) {
    return { ["shield_information_barrier_id"]: val.shieldInformationBarrierId, ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.serializeGetShieldInformationBarrierSegmentsQueryParamsArg = serializeGetShieldInformationBarrierSegmentsQueryParamsArg;
function deserializeGetShieldInformationBarrierSegmentsQueryParamsArg(val) {
    const shieldInformationBarrierId = val.shield_information_barrier_id;
    const marker = (0, json_js_3.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_3.isJson)(val.limit, "number") ? val.limit : void 0;
    return { shieldInformationBarrierId: shieldInformationBarrierId, marker: marker, limit: limit };
}
exports.deserializeGetShieldInformationBarrierSegmentsQueryParamsArg = deserializeGetShieldInformationBarrierSegmentsQueryParamsArg;
function serializeCreateShieldInformationBarrierSegmentRequestBodyArg(val) {
    return { ["shield_information_barrier"]: (0, schemas_generated_js_2.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier), ["name"]: val.name, ["description"]: val.description };
}
exports.serializeCreateShieldInformationBarrierSegmentRequestBodyArg = serializeCreateShieldInformationBarrierSegmentRequestBodyArg;
function deserializeCreateShieldInformationBarrierSegmentRequestBodyArg(val) {
    const shieldInformationBarrier = (0, schemas_generated_js_3.deserializeShieldInformationBarrierBase)(val.shield_information_barrier);
    const name = val.name;
    const description = (0, json_js_3.isJson)(val.description, "string") ? val.description : void 0;
    return { shieldInformationBarrier: shieldInformationBarrier, name: name, description: description };
}
exports.deserializeCreateShieldInformationBarrierSegmentRequestBodyArg = deserializeCreateShieldInformationBarrierSegmentRequestBodyArg;
//# sourceMappingURL=shieldInformationBarrierSegments.generated.js.map