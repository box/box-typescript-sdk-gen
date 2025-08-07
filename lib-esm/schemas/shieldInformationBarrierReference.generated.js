import { serializeShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { deserializeShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierReference(val) {
    return {
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
    };
}
export function deserializeShieldInformationBarrierReference(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReference"',
        });
    }
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    return {
        shieldInformationBarrier: shieldInformationBarrier,
    };
}
//# sourceMappingURL=shieldInformationBarrierReference.generated.js.map