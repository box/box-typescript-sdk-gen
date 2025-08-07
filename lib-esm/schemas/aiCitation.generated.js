import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiCitationTypeField(val) {
    return val;
}
export function deserializeAiCitationTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize AiCitationTypeField" });
}
export function serializeAiCitation(val) {
    return {
        ['content']: val.content,
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeAiCitationTypeField(val.type),
        ['name']: val.name,
    };
}
export function deserializeAiCitation(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiCitation"' });
    }
    if (!(val.content == void 0) && !sdIsString(val.content)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content" of type "AiCitation"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiCitation"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeAiCitationTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "AiCitation"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return {
        content: content,
        id: id,
        type: type,
        name: name,
    };
}
//# sourceMappingURL=aiCitation.generated.js.map