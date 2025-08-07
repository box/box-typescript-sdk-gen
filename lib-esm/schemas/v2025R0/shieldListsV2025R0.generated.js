import { serializeShieldListMiniV2025R0 } from './shieldListMiniV2025R0.generated.js';
import { deserializeShieldListMiniV2025R0 } from './shieldListMiniV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeShieldListsV2025R0(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeShieldListMiniV2025R0(item);
            }),
    };
}
export function deserializeShieldListsV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListsV2025R0"',
        });
    }
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "ShieldListsV2025R0"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeShieldListMiniV2025R0(itm);
            })
            : [];
    return { entries: entries };
}
//# sourceMappingURL=shieldListsV2025R0.generated.js.map