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
test('testShieldInformationBarrierSegmentRestrictions', function testShieldInformationBarrierSegmentRestrictions() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)((0, utils_js_1.getEnvVar)('USER_ID'));
        const enterpriseId = (0, utils_js_1.getEnvVar)('ENTERPRISE_ID');
        const barrier = yield (0, commons_generated_js_2.getOrCreateShieldInformationBarrier)(client, enterpriseId);
        const barrierId = barrier.id;
        const segment = yield client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment({
            shieldInformationBarrier: {
                id: barrierId,
                type: 'shield_information_barrier',
            },
            name: (0, utils_js_2.getUuid)(),
            description: 'barrier segment description',
        });
        const segmentId = segment.id;
        const segmentToRestrict = yield client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment({
            shieldInformationBarrier: {
                id: barrierId,
                type: 'shield_information_barrier',
            },
            name: (0, utils_js_2.getUuid)(),
            description: 'barrier segment description',
        });
        const segmentToRestrictId = segmentToRestrict.id;
        const segmentRestriction = yield client.shieldInformationBarrierSegmentRestrictions.createShieldInformationBarrierSegmentRestriction({
            restrictedSegment: {
                id: segmentToRestrictId,
                type: 'shield_information_barrier_segment',
            },
            shieldInformationBarrierSegment: {
                id: segmentId,
                type: 'shield_information_barrier_segment',
            },
            type: 'shield_information_barrier_segment_restriction',
        });
        const segmentRestrictionId = segmentRestriction.id;
        if (!(segmentRestriction.shieldInformationBarrierSegment.id == segmentId)) {
            throw new Error('Assertion failed');
        }
        const segmentRestrictions = yield client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictions({
            shieldInformationBarrierSegmentId: segmentId,
        });
        if (!(segmentRestrictions.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const segmentRestrictionFromApi = yield client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictionById(segmentRestrictionId);
        if (!(segmentRestrictionFromApi.id == segmentRestrictionId)) {
            throw new Error('Assertion failed');
        }
        if (!(segmentRestrictionFromApi.shieldInformationBarrierSegment.id == segmentId)) {
            throw new Error('Assertion failed');
        }
        if (!(segmentRestrictionFromApi.restrictedSegment.id == segmentToRestrictId)) {
            throw new Error('Assertion failed');
        }
        if (!(segmentRestrictionFromApi.shieldInformationBarrier.id == barrierId)) {
            throw new Error('Assertion failed');
        }
        yield client.shieldInformationBarrierSegmentRestrictions.deleteShieldInformationBarrierSegmentRestrictionById(segmentRestrictionId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.shieldInformationBarrierSegmentRestrictions.getShieldInformationBarrierSegmentRestrictionById(segmentRestrictionId);
        })).rejects.toThrow();
        yield client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(segmentId);
        yield client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(segmentToRestrictId);
    });
});
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictions.generated.test.js.map