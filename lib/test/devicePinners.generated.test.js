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
const utils_js_1 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testDevicePinners', function testDevicePinners() {
    return __awaiter(this, void 0, void 0, function* () {
        const enterpriseId = (0, utils_js_1.getEnvVar)('ENTERPRISE_ID');
        const devicePinners = yield exports.client.devicePinners.getEnterpriseDevicePinners(enterpriseId);
        if (!(devicePinners.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        const devicePinnersInDescDirection = yield exports.client.devicePinners.getEnterpriseDevicePinners(enterpriseId, {
            queryParams: {
                direction: 'desc',
            },
        });
        if (!(devicePinnersInDescDirection.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        const devicePinnerId = '123456';
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.devicePinners.getDevicePinnerById(devicePinnerId);
        })).rejects.toThrow();
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.devicePinners.deleteDevicePinnerById(devicePinnerId);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=devicePinners.generated.test.js.map