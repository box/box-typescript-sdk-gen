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
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_2 = require("../internal/utils.js");
test('testShieldInformationBarriers', function testShieldInformationBarriers() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, commons_generated_js_1.getDefaultClientWithUserSubject)((0, utils_js_1.getEnvVar)('USER_ID'));
        const enterpriseId = (0, utils_js_1.getEnvVar)('ENTERPRISE_ID');
        const barrier = yield (0, commons_generated_js_2.getOrCreateShieldInformationBarrier)(client, enterpriseId);
        if (!((0, utils_js_2.toString)(barrier.status) == 'draft')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(barrier.type) == 'shield_information_barrier')) {
            throw new Error('Assertion failed');
        }
        if (!(barrier.enterprise.id == enterpriseId)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(barrier.enterprise.type) == 'enterprise')) {
            throw new Error('Assertion failed');
        }
        const barrierId = barrier.id;
        const barrierFromApi = yield client.shieldInformationBarriers.getShieldInformationBarrierById(barrierId);
        if (!(barrierFromApi.id == barrierId)) {
            throw new Error('Assertion failed');
        }
        const barriers = yield client.shieldInformationBarriers.getShieldInformationBarriers();
        if (!(barriers.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield client.shieldInformationBarriers.updateShieldInformationBarrierStatus({
                id: barrierId,
                status: 'disabled',
            });
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=shieldInformationBarriers.generated.test.js.map