import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeEnterpriseBaseTypeField(val) {
    return val;
}
export function deserializeEnterpriseBaseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize EnterpriseBaseTypeField",
    });
}
export function serializeEnterpriseBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeEnterpriseBaseTypeField(val.type),
    };
}
export function deserializeEnterpriseBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "EnterpriseBase"' });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "EnterpriseBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeEnterpriseBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=enterpriseBase.generated.js.map