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
const userBase_generated_js_1 = require("../schemas/userBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
test('testShieldInformationBarrierSegmentMembers', function testShieldInformationBarrierSegmentMembers() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)((0, utils_js_1.getEnvVar)('USER_ID'));
        const enterpriseId = (0, utils_js_1.getEnvVar)('ENTERPRISE_ID');
        const barrier = yield (0, commons_generated_js_2.getOrCreateShieldInformationBarrier)(client, enterpriseId);
        const barrierId = barrier.id;
        const segmentName = (0, utils_js_2.getUuid)();
        const segment = yield client.shieldInformationBarrierSegments.createShieldInformationBarrierSegment({
            shieldInformationBarrier: {
                id: barrierId,
                type: 'shield_information_barrier',
            },
            name: segmentName,
        });
        if (!(segment.name == segmentName)) {
            throw new Error('Assertion failed');
        }
        const segmentMember = yield client.shieldInformationBarrierSegmentMembers.createShieldInformationBarrierSegmentMember({
            shieldInformationBarrierSegment: {
                id: segment.id,
                type: 'shield_information_barrier_segment',
            },
            user: new userBase_generated_js_1.UserBase({ id: (0, utils_js_1.getEnvVar)('USER_ID') }),
        });
        if (!(segmentMember.user.id == (0, utils_js_1.getEnvVar)('USER_ID'))) {
            throw new Error('Assertion failed');
        }
        if (!(segmentMember.shieldInformationBarrierSegment.id == segment.id)) {
            throw new Error('Assertion failed');
        }
        const segmentMembers = yield client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMembers({
            shieldInformationBarrierSegmentId: segment.id,
        });
        if (!(segmentMembers.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const segmentMemberGet = yield client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(segmentMember.id);
        if (!(segmentMemberGet.id == segmentMember.id)) {
            throw new Error('Assertion failed');
        }
        yield client.shieldInformationBarrierSegmentMembers.deleteShieldInformationBarrierSegmentMemberById(segmentMember.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.shieldInformationBarrierSegmentMembers.getShieldInformationBarrierSegmentMemberById(segmentMember.id);
        })).rejects.toThrow();
        yield client.shieldInformationBarrierSegments.deleteShieldInformationBarrierSegmentById(segment.id);
    });
});
//# sourceMappingURL=shieldInformationBarrierSegmentMembers.generated.test.js.map