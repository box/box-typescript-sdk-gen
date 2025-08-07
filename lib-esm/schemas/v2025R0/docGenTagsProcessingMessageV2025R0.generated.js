import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeDocGenTagsProcessingMessageV2025R0(val) {
    return { ['message']: val.message };
}
export function deserializeDocGenTagsProcessingMessageV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenTagsProcessingMessageV2025R0"',
        });
    }
    if (val.message == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "message" of type "DocGenTagsProcessingMessageV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "DocGenTagsProcessingMessageV2025R0"',
        });
    }
    const message = val.message;
    return { message: message };
}
//# sourceMappingURL=docGenTagsProcessingMessageV2025R0.generated.js.map