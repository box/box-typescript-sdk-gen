import { serializeHubItemOperationV2025R0 } from './hubItemOperationV2025R0.generated.js';
import { deserializeHubItemOperationV2025R0 } from './hubItemOperationV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeHubItemsManageRequestV2025R0(val) {
    return {
        ['operations']: val.operations == void 0
            ? val.operations
            : val.operations.map(function (item) {
                return serializeHubItemOperationV2025R0(item);
            }),
    };
}
export function deserializeHubItemsManageRequestV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubItemsManageRequestV2025R0"',
        });
    }
    if (!(val.operations == void 0) && !sdIsList(val.operations)) {
        throw new BoxSdkError({
            message: 'Expecting array for "operations" of type "HubItemsManageRequestV2025R0"',
        });
    }
    const operations = val.operations == void 0
        ? void 0
        : sdIsList(val.operations)
            ? val.operations.map(function (itm) {
                return deserializeHubItemOperationV2025R0(itm);
            })
            : [];
    return { operations: operations };
}
//# sourceMappingURL=hubItemsManageRequestV2025R0.generated.js.map