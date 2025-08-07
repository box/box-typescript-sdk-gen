import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class ShieldListMiniV2025R0 {
    constructor(fields) {
        /**
         * The type of object. */
        this.type = 'shield_list';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.content !== undefined) {
            this.content = fields.content;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeShieldListMiniV2025R0TypeField(val) {
    return val;
}
export function deserializeShieldListMiniV2025R0TypeField(val) {
    if (val == 'shield_list') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldListMiniV2025R0TypeField",
    });
}
export function serializeShieldListMiniV2025R0ContentField(val) {
    return { ['type']: val.type };
}
export function deserializeShieldListMiniV2025R0ContentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListMiniV2025R0ContentField"',
        });
    }
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "ShieldListMiniV2025R0ContentField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    return { type: type };
}
export function serializeShieldListMiniV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeShieldListMiniV2025R0TypeField(val.type),
        ['name']: val.name,
        ['content']: serializeShieldListMiniV2025R0ContentField(val.content),
    };
}
export function deserializeShieldListMiniV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListMiniV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "ShieldListMiniV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldListMiniV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "ShieldListMiniV2025R0" to be defined',
        });
    }
    const type = deserializeShieldListMiniV2025R0TypeField(val.type);
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "ShieldListMiniV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "ShieldListMiniV2025R0"',
        });
    }
    const name = val.name;
    if (val.content == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "content" of type "ShieldListMiniV2025R0" to be defined',
        });
    }
    const content = deserializeShieldListMiniV2025R0ContentField(val.content);
    return {
        id: id,
        type: type,
        name: name,
        content: content,
    };
}
export function serializeShieldListMiniV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldListMiniV2025R0TypeField(val.type),
        ['name']: val.name,
        ['content']: serializeShieldListMiniV2025R0ContentField(val.content),
    };
}
export function deserializeShieldListMiniV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListMiniV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "ShieldListMiniV2025R0Input" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldListMiniV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldListMiniV2025R0TypeField(val.type);
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "ShieldListMiniV2025R0Input" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "ShieldListMiniV2025R0Input"',
        });
    }
    const name = val.name;
    if (val.content == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "content" of type "ShieldListMiniV2025R0Input" to be defined',
        });
    }
    const content = deserializeShieldListMiniV2025R0ContentField(val.content);
    return {
        id: id,
        type: type,
        name: name,
        content: content,
    };
}
//# sourceMappingURL=shieldListMiniV2025R0.generated.js.map