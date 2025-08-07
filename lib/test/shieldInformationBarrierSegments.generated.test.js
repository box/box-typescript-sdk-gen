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
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_3 = require("../internal/utils.js");
test('testShieldInformationBarrierSegments', function testShieldInformationBarrierSegments() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)((0, utils_js_1.getEnvVar)('USER_ID'));
        const enterpriseId = (0, utils_js_1.getEnvVar)('ENTERPRISE_ID');
        const barrier = yield (0, commons_generated_js_2.getOrCreateShieldInformationBarrier)(client, enterpriseId);
        const barrierId = barrier.id;
        const segmentName = (0, utils_js_2.getUuid)();
        const segmentDescription = 'barrier segment description';
        const segment = yield client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment({
            shieldInformationBarrier: {
                id: barrierId,
                type: 'shield_information_barrier',
            },
            name: segmentName,
            description: segmentDescription,
        });
        if (!(segment.name == segmentName)) {
            throw new Error('Assertion failed');
        }
        const segments = yield client.shieldInformationBarrierSegments.getShieldInformationBarrierSegments({
            shieldInformationBarrierId: barrierId,
        });
        if (!(segments.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const segmentId = segment.id;
        const segmentFromApi = yield client.shieldInformationBarrierSegments.getShieldInformationBarrierSegmentById(segmentId);
        if (!((0, utils_js_3.toString)(segmentFromApi.type) ==
            'shield_information_barrier_segment')) {
            throw new Error('Assertion failed');
        }
        if (!(segmentFromApi.id == segmentId)) {
            throw new Error('Assertion failed');
        }
        if (!(segmentFromApi.name == segmentName)) {
            throw new Error('Assertion failed');
        }
        if (!(segmentFromApi.description == segmentDescription)) {
            throw new Error('Assertion failed');
        }
        if (!(segmentFromApi.shieldInformationBarrier.id == barrierId)) {
            throw new Error('Assertion failed');
        }
        const updatedSegmentDescription = 'updated barrier segment description';
        const updatedSegment = yield client.shieldInformationBarrierSegments.updateShieldInformationBarrierSegmentById(segmentId, {
            requestBody: {
                description: updatedSegmentDescription,
            },
        });
        if (!(updatedSegment.description == updatedSegmentDescription)) {
            throw new Error('Assertion failed');
        }
        yield client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(segmentId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.shieldInformationBarrierSegments.getShieldInformationBarrierSegmentById(segmentId);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=shieldInformationBarrierSegments.generated.test.js.map