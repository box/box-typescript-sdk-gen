import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FileVersionBase {
    constructor(fields) {
        /**
         * The value will always be `file_version`. */
        this.type = 'file_version';
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
export function serializeFileVersionBaseTypeField(val) {
    return val;
}
export function deserializeFileVersionBaseTypeField(val) {
    if (val == 'file_version') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FileVersionBaseTypeField",
    });
}
export function serializeFileVersionBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeFileVersionBaseTypeField(val.type),
    };
}
export function deserializeFileVersionBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FileVersionBase"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FileVersionBase" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "FileVersionBase" to be defined',
        });
    }
    const type = deserializeFileVersionBaseTypeField(val.type);
    return { id: id, type: type };
}
export function serializeFileVersionBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeFileVersionBaseTypeField(val.type),
    };
}
export function deserializeFileVersionBaseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileVersionBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FileVersionBaseInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeFileVersionBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=fileVersionBase.generated.js.map