import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FileBase {
    constructor(fields) {
        /**
         * The value will always be `file`. */
        this.type = 'file';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.etag !== undefined) {
            this.etag = fields.etag;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeFileBaseTypeField(val) {
    return val;
}
export function deserializeFileBaseTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize FileBaseTypeField" });
}
export function serializeFileBase(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: serializeFileBaseTypeField(val.type),
    };
}
export function deserializeFileBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FileBase"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FileBase" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileBase"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "FileBase"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "FileBase" to be defined',
        });
    }
    const type = deserializeFileBaseTypeField(val.type);
    return { id: id, etag: etag, type: type };
}
export function serializeFileBaseInput(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: val.type == void 0 ? val.type : serializeFileBaseTypeField(val.type),
    };
}
export function deserializeFileBaseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FileBaseInput"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FileBaseInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileBaseInput"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "FileBaseInput"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const type = val.type == void 0 ? void 0 : deserializeFileBaseTypeField(val.type);
    return { id: id, etag: etag, type: type };
}
//# sourceMappingURL=fileBase.generated.js.map