import { serializeFileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0 } from './fileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0.generated.js';
import { deserializeFileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0 } from './fileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeHubItemOperationV2025R0ActionField(val) {
    return val;
}
export function deserializeHubItemOperationV2025R0ActionField(val) {
    if (val == 'add') {
        return val;
    }
    if (val == 'remove') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize HubItemOperationV2025R0ActionField",
    });
}
export function serializeHubItemOperationV2025R0(val) {
    return {
        ['action']: serializeHubItemOperationV2025R0ActionField(val.action),
        ['item']: serializeFileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0(val.item),
    };
}
export function deserializeHubItemOperationV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubItemOperationV2025R0"',
        });
    }
    if (val.action == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "action" of type "HubItemOperationV2025R0" to be defined',
        });
    }
    const action = deserializeHubItemOperationV2025R0ActionField(val.action);
    if (val.item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item" of type "HubItemOperationV2025R0" to be defined',
        });
    }
    const item = deserializeFileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0(val.item);
    return { action: action, item: item };
}
//# sourceMappingURL=hubItemOperationV2025R0.generated.js.map