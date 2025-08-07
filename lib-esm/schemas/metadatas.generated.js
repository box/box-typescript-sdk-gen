import { serializeMetadata } from './metadata.generated.js';
import { deserializeMetadata } from './metadata.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeMetadatas(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeMetadata(item);
            }),
        ['limit']: val.limit,
    };
}
export function deserializeMetadatas(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Metadatas"' });
    }
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "Metadatas"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeMetadata(itm);
            })
            : [];
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "Metadatas"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    return { entries: entries, limit: limit };
}
//# sourceMappingURL=metadatas.generated.js.map