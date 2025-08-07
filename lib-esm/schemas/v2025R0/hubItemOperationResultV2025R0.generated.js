import { serializeHubItemReferenceV2025R0 } from './hubItemReferenceV2025R0.generated.js';
import { deserializeHubItemReferenceV2025R0 } from './hubItemReferenceV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsNumber } from '../../serialization/json.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeHubItemOperationResultV2025R0(val) {
    return {
        ['action']: val.action,
        ['item']: val.item == void 0
            ? val.item
            : serializeHubItemReferenceV2025R0(val.item),
        ['status']: val.status,
        ['error']: val.error,
    };
}
export function deserializeHubItemOperationResultV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubItemOperationResultV2025R0"',
        });
    }
    if (!(val.action == void 0) && !sdIsString(val.action)) {
        throw new BoxSdkError({
            message: 'Expecting string for "action" of type "HubItemOperationResultV2025R0"',
        });
    }
    const action = val.action == void 0 ? void 0 : val.action;
    const item = val.item == void 0 ? void 0 : deserializeHubItemReferenceV2025R0(val.item);
    if (!(val.status == void 0) && !sdIsNumber(val.status)) {
        throw new BoxSdkError({
            message: 'Expecting number for "status" of type "HubItemOperationResultV2025R0"',
        });
    }
    const status = val.status == void 0 ? void 0 : val.status;
    if (!(val.error == void 0) && !sdIsString(val.error)) {
        throw new BoxSdkError({
            message: 'Expecting string for "error" of type "HubItemOperationResultV2025R0"',
        });
    }
    const error = val.error == void 0 ? void 0 : val.error;
    return {
        action: action,
        item: item,
        status: status,
        error: error,
    };
}
//# sourceMappingURL=hubItemOperationResultV2025R0.generated.js.map