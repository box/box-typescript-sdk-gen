import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GroupBase {
    constructor(fields) {
        /**
         * The value will always be `group`. */
        this.type = 'group';
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
export function serializeGroupBaseTypeField(val) {
    return val;
}
export function deserializeGroupBaseTypeField(val) {
    if (val == 'group') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize GroupBaseTypeField" });
}
export function serializeGroupBase(val) {
    return { ['id']: val.id, ['type']: serializeGroupBaseTypeField(val.type) };
}
export function deserializeGroupBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "GroupBase"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "GroupBase" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "GroupBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "GroupBase" to be defined',
        });
    }
    const type = deserializeGroupBaseTypeField(val.type);
    return { id: id, type: type };
}
export function serializeGroupBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeGroupBaseTypeField(val.type),
    };
}
export function deserializeGroupBaseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "GroupBaseInput"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "GroupBaseInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "GroupBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeGroupBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=groupBase.generated.js.map