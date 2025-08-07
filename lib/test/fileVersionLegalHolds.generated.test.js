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
exports.client = void 0;
const commons_generated_js_1 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testGetFileVersionLegalHolds', function testGetFileVersionLegalHolds() {
    return __awaiter(this, void 0, void 0, function* () {
        const policyId = '1234567890';
        const fileVersionLegalHolds = yield exports.client.fileVersionLegalHolds.getFileVersionLegalHolds({
            policyId: policyId,
        });
        const fileVersionLegalHoldsCount = fileVersionLegalHolds.entries.length;
        if (!(fileVersionLegalHoldsCount >= 0)) {
            throw new Error('Assertion failed');
        }
    });
});
test('testGetFileVersionLegalHoldById', function testGetFileVersionLegalHoldById() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileVersionLegalHoldId = '987654321';
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.fileVersionLegalHolds.getFileVersionLegalHoldById(fileVersionLegalHoldId);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=fileVersionLegalHolds.generated.test.js.map