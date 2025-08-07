import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AiItemBase {
    constructor(fields) {
        /**
         * The type of the item. Currently the value can be `file` only. */
        this.type = 'file';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.content !== undefined) {
            this.content = fields.content;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeAiItemBaseTypeField(val) {
    return val;
}
export function deserializeAiItemBaseTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize AiItemBaseTypeField" });
}
export function serializeAiItemBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAiItemBaseTypeField(val.type),
        ['content']: val.content,
    };
}
export function deserializeAiItemBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiItemBase"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AiItemBase" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiItemBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiItemBase" to be defined',
        });
    }
    const type = deserializeAiItemBaseTypeField(val.type);
    if (!(val.content == void 0) && !sdIsString(val.content)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content" of type "AiItemBase"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return { id: id, type: type, content: content };
}
export function serializeAiItemBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeAiItemBaseTypeField(val.type),
        ['content']: val.content,
    };
}
export function deserializeAiItemBaseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiItemBaseInput"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AiItemBaseInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiItemBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeAiItemBaseTypeField(val.type);
    if (!(val.content == void 0) && !sdIsString(val.content)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content" of type "AiItemBaseInput"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return { id: id, type: type, content: content };
}
//# sourceMappingURL=aiItemBase.generated.js.map