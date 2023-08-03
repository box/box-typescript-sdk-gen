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
exports.deserializeCreateShieldInformationBarrierSegmentRequestBodyArg = exports.serializeCreateShieldInformationBarrierSegmentRequestBodyArg = exports.deserializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg = exports.serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg = exports.ShieldInformationBarrierSegmentsManager = exports.CreateShieldInformationBarrierSegmentHeadersArg = exports.GetShieldInformationBarrierSegmentsHeadersArg = exports.DeleteShieldInformationBarrierSegmentByIdHeadersArg = exports.UpdateShieldInformationBarrierSegmentByIdHeadersArg = exports.GetShieldInformationBarrierSegmentByIdHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetShieldInformationBarrierSegmentByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetShieldInformationBarrierSegmentByIdHeadersArg = GetShieldInformationBarrierSegmentByIdHeadersArg;
class UpdateShieldInformationBarrierSegmentByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateShieldInformationBarrierSegmentByIdHeadersArg = UpdateShieldInformationBarrierSegmentByIdHeadersArg;
class DeleteShieldInformationBarrierSegmentByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteShieldInformationBarrierSegmentByIdHeadersArg = DeleteShieldInformationBarrierSegmentByIdHeadersArg;
class GetShieldInformationBarrierSegmentsHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetShieldInformationBarrierSegmentsHeadersArg = GetShieldInformationBarrierSegmentsHeadersArg;
class CreateShieldInformationBarrierSegmentHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateShieldInformationBarrierSegmentHeadersArg = CreateShieldInformationBarrierSegmentHeadersArg;
class ShieldInformationBarrierSegmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId, headers = new GetShieldInformationBarrierSegmentByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId, requestBody, headers = new UpdateShieldInformationBarrierSegmentByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateShieldInformationBarrierSegmentByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegment)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId, headers = new DeleteShieldInformationBarrierSegmentByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    getShieldInformationBarrierSegments(queryParams, headers = new GetShieldInformationBarrierSegmentsHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["shield_information_barrier_id"]: (0, utils_js_2.toString)(queryParams.shieldInformationBarrierId), ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
    createShieldInformationBarrierSegment(requestBody, headers = new CreateShieldInformationBarrierSegmentHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateShieldInformationBarrierSegmentRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
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