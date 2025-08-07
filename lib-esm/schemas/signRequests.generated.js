import { serializeSignRequest } from './signRequest.generated.js';
import { deserializeSignRequest } from './signRequest.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeSignRequests(val) {
    return {
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeSignRequest(item);
            }),
    };
}
export function deserializeSignRequests(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "SignRequests"' });
    }
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "SignRequests"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
        throw new BoxSdkError({
            message: 'Expecting string for "next_marker" of type "SignRequests"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "SignRequests"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeSignRequest(itm);
            })
            : [];
    return {
        limit: limit,
        nextMarker: nextMarker,
        entries: entries,
    };
}
//# sourceMappingURL=signRequests.generated.js.map