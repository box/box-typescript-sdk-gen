import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class LegalHoldPolicyMini {
    constructor(fields) {
        /**
         * The value will always be `legal_hold_policy`. */
        this.type = 'legal_hold_policy';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeLegalHoldPolicyMiniTypeField(val) {
    return val;
}
export function deserializeLegalHoldPolicyMiniTypeField(val) {
    if (val == 'legal_hold_policy') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize LegalHoldPolicyMiniTypeField",
    });
}
export function serializeLegalHoldPolicyMini(val) {
    return {
        ['id']: val.id,
        ['type']: serializeLegalHoldPolicyMiniTypeField(val.type),
    };
}
export function deserializeLegalHoldPolicyMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyMini"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "LegalHoldPolicyMini" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "LegalHoldPolicyMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "LegalHoldPolicyMini" to be defined',
        });
    }
    const type = deserializeLegalHoldPolicyMiniTypeField(val.type);
    return { id: id, type: type };
}
export function serializeLegalHoldPolicyMiniInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeLegalHoldPolicyMiniTypeField(val.type),
    };
}
export function deserializeLegalHoldPolicyMiniInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyMiniInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "LegalHoldPolicyMiniInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "LegalHoldPolicyMiniInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeLegalHoldPolicyMiniTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=legalHoldPolicyMini.generated.js.map