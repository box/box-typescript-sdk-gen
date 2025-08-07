import { deserializeShieldInformationBarrierSegmentMemberBaseTypeField } from './shieldInformationBarrierSegmentMemberBase.generated.js';
import { serializeShieldInformationBarrierSegmentMemberBase } from './shieldInformationBarrierSegmentMemberBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierSegmentMemberMini(val) {
    const base = serializeShieldInformationBarrierSegmentMemberBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMemberMini"',
        });
    }
    return {
        ...base,
        ...{
            ['user']: val.user == void 0 ? val.user : serializeUserBase(val.user),
        },
    };
}
export function deserializeShieldInformationBarrierSegmentMemberMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMemberMini"',
        });
    }
    const user = val.user == void 0 ? void 0 : deserializeUserBase(val.user);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentMemberMini"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
    return {
        user: user,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentMemberMini.generated.js.map