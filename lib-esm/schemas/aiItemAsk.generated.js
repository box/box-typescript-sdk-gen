import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiItemAskTypeField(val) {
    return val;
}
export function deserializeAiItemAskTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'hubs') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize AiItemAskTypeField" });
}
export function serializeAiItemAsk(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAiItemAskTypeField(val.type),
        ['content']: val.content,
    };
}
export function deserializeAiItemAsk(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiItemAsk"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AiItemAsk" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiItemAsk"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiItemAsk" to be defined',
        });
    }
    const type = deserializeAiItemAskTypeField(val.type);
    if (!(val.content == void 0) && !sdIsString(val.content)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content" of type "AiItemAsk"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return { id: id, type: type, content: content };
}
//# sourceMappingURL=aiItemAsk.generated.js.map