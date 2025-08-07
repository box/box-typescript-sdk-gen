import { serializeRealtimeServer } from './realtimeServer.generated.js';
import { deserializeRealtimeServer } from './realtimeServer.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeRealtimeServers(val) {
    return {
        ['chunk_size']: val.chunkSize,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeRealtimeServer(item);
            }),
    };
}
export function deserializeRealtimeServers(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "RealtimeServers"' });
    }
    if (!(val.chunk_size == void 0) && !sdIsNumber(val.chunk_size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "chunk_size" of type "RealtimeServers"',
        });
    }
    const chunkSize = val.chunk_size == void 0 ? void 0 : val.chunk_size;
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "RealtimeServers"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeRealtimeServer(itm);
            })
            : [];
    return { chunkSize: chunkSize, entries: entries };
}
//# sourceMappingURL=realtimeServers.generated.js.map