import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiExtractResponse(val) {
    return {};
}
export function deserializeAiExtractResponse(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiExtractResponse"',
        });
    }
    return {};
}
//# sourceMappingURL=aiExtractResponse.generated.js.map