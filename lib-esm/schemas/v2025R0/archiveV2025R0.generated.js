import { BoxSdkError } from '../../box/errors.js';
import { sdIsNumber } from '../../serialization/json.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class ArchiveV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `archive`. */
        this.type = 'archive';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.size !== undefined) {
            this.size = fields.size;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeArchiveV2025R0TypeField(val) {
    return val;
}
export function deserializeArchiveV2025R0TypeField(val) {
    if (val == 'archive') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ArchiveV2025R0TypeField",
    });
}
export function serializeArchiveV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeArchiveV2025R0TypeField(val.type),
        ['name']: val.name,
        ['size']: val.size,
    };
}
export function deserializeArchiveV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "ArchiveV2025R0"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "ArchiveV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ArchiveV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "ArchiveV2025R0" to be defined',
        });
    }
    const type = deserializeArchiveV2025R0TypeField(val.type);
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "ArchiveV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "ArchiveV2025R0"',
        });
    }
    const name = val.name;
    if (val.size == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "size" of type "ArchiveV2025R0" to be defined',
        });
    }
    if (!sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "ArchiveV2025R0"',
        });
    }
    const size = val.size;
    return {
        id: id,
        type: type,
        name: name,
        size: size,
    };
}
export function serializeArchiveV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeArchiveV2025R0TypeField(val.type),
        ['name']: val.name,
        ['size']: val.size,
    };
}
export function deserializeArchiveV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ArchiveV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "ArchiveV2025R0Input" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ArchiveV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeArchiveV2025R0TypeField(val.type);
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "ArchiveV2025R0Input" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "ArchiveV2025R0Input"',
        });
    }
    const name = val.name;
    if (val.size == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "size" of type "ArchiveV2025R0Input" to be defined',
        });
    }
    if (!sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "ArchiveV2025R0Input"',
        });
    }
    const size = val.size;
    return {
        id: id,
        type: type,
        name: name,
        size: size,
    };
}
//# sourceMappingURL=archiveV2025R0.generated.js.map