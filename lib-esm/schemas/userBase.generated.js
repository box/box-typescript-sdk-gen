import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class UserBase {
    constructor(fields) {
        /**
         * The value will always be `user`. */
        this.type = 'user';
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
export function serializeUserBaseTypeField(val) {
    return val;
}
export function deserializeUserBaseTypeField(val) {
    if (val == 'user') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize UserBaseTypeField" });
}
export function serializeUserBase(val) {
    return { ['id']: val.id, ['type']: serializeUserBaseTypeField(val.type) };
}
export function deserializeUserBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UserBase"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UserBase" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UserBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "UserBase" to be defined',
        });
    }
    const type = deserializeUserBaseTypeField(val.type);
    return { id: id, type: type };
}
export function serializeUserBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeUserBaseTypeField(val.type),
    };
}
export function deserializeUserBaseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UserBaseInput"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UserBaseInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UserBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeUserBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=userBase.generated.js.map