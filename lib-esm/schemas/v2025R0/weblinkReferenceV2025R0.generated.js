import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class WeblinkReferenceV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `weblink`. */
        this.type = 'weblink';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeWeblinkReferenceV2025R0TypeField(val) {
    return val;
}
export function deserializeWeblinkReferenceV2025R0TypeField(val) {
    if (val == 'weblink') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WeblinkReferenceV2025R0TypeField",
    });
}
export function serializeWeblinkReferenceV2025R0(val) {
    return {
        ['type']: serializeWeblinkReferenceV2025R0TypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeWeblinkReferenceV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WeblinkReferenceV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "WeblinkReferenceV2025R0" to be defined',
        });
    }
    const type = deserializeWeblinkReferenceV2025R0TypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "WeblinkReferenceV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WeblinkReferenceV2025R0"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeWeblinkReferenceV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeWeblinkReferenceV2025R0TypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeWeblinkReferenceV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WeblinkReferenceV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeWeblinkReferenceV2025R0TypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "WeblinkReferenceV2025R0Input" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WeblinkReferenceV2025R0Input"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
//# sourceMappingURL=weblinkReferenceV2025R0.generated.js.map