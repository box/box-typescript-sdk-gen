import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class DocGenJobBaseV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `docgen_job`. */
        this.type = 'docgen_job';
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
export function serializeDocGenJobBaseV2025R0TypeField(val) {
    return val;
}
export function deserializeDocGenJobBaseV2025R0TypeField(val) {
    if (val == 'docgen_job') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize DocGenJobBaseV2025R0TypeField",
    });
}
export function serializeDocGenJobBaseV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeDocGenJobBaseV2025R0TypeField(val.type),
    };
}
export function deserializeDocGenJobBaseV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenJobBaseV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "DocGenJobBaseV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenJobBaseV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "DocGenJobBaseV2025R0" to be defined',
        });
    }
    const type = deserializeDocGenJobBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
export function serializeDocGenJobBaseV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeDocGenJobBaseV2025R0TypeField(val.type),
    };
}
export function deserializeDocGenJobBaseV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenJobBaseV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "DocGenJobBaseV2025R0Input" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenJobBaseV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeDocGenJobBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=docGenJobBaseV2025R0.generated.js.map