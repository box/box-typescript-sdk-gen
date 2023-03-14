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
exports.ShieldInformationBarriersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class ShieldInformationBarriersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getShieldInformationBarriersId(shieldInformationBarrierId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barriers/", shieldInformationBarrierId), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeShieldInformationBarrier)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    postShieldInformationBarriersChangeStatus(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barriers/change_status"), { method: "POST", body: JSON.stringify(requestBody), auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeShieldInformationBarrier)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
    getShieldInformationBarriers(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barriers"), { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return void 0;
        });
    }
    postShieldInformationBarriers(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/shield_information_barriers"), { method: "POST", body: yield (0, schemas_generated_js_2.serializeShieldInformationBarrier)((0, json_js_2.serializeJSON)(requestBody)), auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeShieldInformationBarrier)((0, json_js_1.deserializeJSON)(response.text));
        });
    }
}
exports.ShieldInformationBarriersManager = ShieldInformationBarriersManager;
//# sourceMappingURL=shield_information_barriers.generated.js.map