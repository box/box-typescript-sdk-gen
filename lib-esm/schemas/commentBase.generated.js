import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeCommentBaseTypeField(val) {
    return val;
}
export function deserializeCommentBaseTypeField(val) {
    if (val == 'comment') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize CommentBaseTypeField" });
}
export function serializeCommentBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeCommentBaseTypeField(val.type),
    };
}
export function deserializeCommentBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "CommentBase"' });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CommentBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=commentBase.generated.js.map