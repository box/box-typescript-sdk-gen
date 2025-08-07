import { serializeHubItemOperationResultV2025R0 } from './hubItemOperationResultV2025R0.generated.js';
import { deserializeHubItemOperationResultV2025R0 } from './hubItemOperationResultV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeHubItemsManageResponseV2025R0(val) {
    return {
        ['operations']: val.operations.map(function (item) {
            return serializeHubItemOperationResultV2025R0(item);
        }),
    };
}
export function deserializeHubItemsManageResponseV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubItemsManageResponseV2025R0"',
        });
    }
    if (val.operations == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "operations" of type "HubItemsManageResponseV2025R0" to be defined',
        });
    }
    if (!sdIsList(val.operations)) {
        throw new BoxSdkError({
            message: 'Expecting array for "operations" of type "HubItemsManageResponseV2025R0"',
        });
    }
    const operations = sdIsList(val.operations)
        ? val.operations.map(function (itm) {
            return deserializeHubItemOperationResultV2025R0(itm);
        })
        : [];
    return { operations: operations };
}
//# sourceMappingURL=hubItemsManageResponseV2025R0.generated.js.map