import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class FileVersionBaseV2025R0 {
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
export function serializeFileVersionBaseV2025R0TypeField(val) {
    return val;
}
export function deserializeFileVersionBaseV2025R0TypeField(val) {
    if (val == 'file_version') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FileVersionBaseV2025R0TypeField",
    });
}
export function serializeFileVersionBaseV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeFileVersionBaseV2025R0TypeField(val.type),
    };
}
export function deserializeFileVersionBaseV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileVersionBaseV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FileVersionBaseV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionBaseV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "FileVersionBaseV2025R0" to be defined',
        });
    }
    const type = deserializeFileVersionBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
export function serializeFileVersionBaseV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeFileVersionBaseV2025R0TypeField(val.type),
    };
}
export function deserializeFileVersionBaseV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileVersionBaseV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FileVersionBaseV2025R0Input" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionBaseV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeFileVersionBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=fileVersionBaseV2025R0.generated.js.map