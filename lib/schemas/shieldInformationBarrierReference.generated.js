"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierReference = serializeShieldInformationBarrierReference;
exports.deserializeShieldInformationBarrierReference = deserializeShieldInformationBarrierReference;
const shieldInformationBarrierBase_generated_js_1 = require("./shieldInformationBarrierBase.generated.js");
const shieldInformationBarrierBase_generated_js_2 = require("./shieldInformationBarrierBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeShieldInformationBarrierReference(val) {
    return {
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : (0, shieldInformationBarrierBase_generated_js_1.serializeShieldInformationBarrierBase)(val.shieldInformationBarrier),
    };
}
function deserializeShieldInformationBarrierReference(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReference"',
        });
    }
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : (0, shieldInformationBarrierBase_generated_js_2.deserializeShieldInformationBarrierBase)(val.shield_information_barrier);
    return {
        shieldInformationBarrier: shieldInformationBarrier,
    };
}
//# sourceMappingURL=shieldInformationBarrierReference.generated.js.map