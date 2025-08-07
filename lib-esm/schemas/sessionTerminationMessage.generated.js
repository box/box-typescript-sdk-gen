import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeSessionTerminationMessage(val) {
    return { ['message']: val.message };
}
export function deserializeSessionTerminationMessage(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SessionTerminationMessage"',
        });
    }
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "SessionTerminationMessage"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    return { message: message };
}
//# sourceMappingURL=sessionTerminationMessage.generated.js.map