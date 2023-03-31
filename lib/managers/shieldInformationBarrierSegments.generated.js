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
exports.ShieldInformationBarrierSegmentsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class ShieldInformationBarrierSegmentsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId), { method: "GET", auth: this.auth });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegment)(deserializeJSON(response.text));
        });
    }
    updateShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId), { method: "PUT", body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegment)(deserializeJSON(response.text));
        });
    }
    deleteShieldInformationBarrierSegmentById(shieldInformationBarrierSegmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments/", shieldInformationBarrierSegmentId), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
    getShieldInformationBarrierSegments(shieldInformationBarrierId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments"), { method: "GET", params: { ["shield_information_barrier_id"]: shieldInformationBarrierId, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return void 0;
        });
    }
    createShieldInformationBarrierSegment(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barrier_segments"), { method: "POST", body: json_js_1.JSON.stringify(requestBody), auth: this.auth });
            return (0, schemas_generated_js_1.deserializeShieldInformationBarrierSegment)(deserializeJSON(response.text));
        });
    }
}
exports.ShieldInformationBarrierSegmentsManager = ShieldInformationBarrierSegmentsManager;
//# sourceMappingURL=shieldInformationBarrierSegments.generated.js.map