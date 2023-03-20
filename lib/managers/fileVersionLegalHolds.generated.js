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
exports.FileVersionLegalHoldsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
class FileVersionLegalHoldsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileVersionLegalHoldsId(fileVersionLegalHoldId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_legal_holds/", fileVersionLegalHoldId), { method: "GET", auth: this.auth });
            return yield (0, schemas_generated_js_1.deserializeFileVersionLegalHold)(deserializeJSON(response.text));
        });
    }
    getFileVersionLegalHolds(policyId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/file_version_legal_holds"), { method: "GET", params: { ["policy_id"]: policyId, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth });
            return yield (0, schemas_generated_js_2.deserializeFileVersionLegalHolds)(deserializeJSON(response.text));
        });
    }
}
exports.FileVersionLegalHoldsManager = FileVersionLegalHoldsManager;
//# sourceMappingURL=fileVersionLegalHolds.generated.js.map