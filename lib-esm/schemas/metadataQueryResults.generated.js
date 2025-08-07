import { serializeFileFullOrFolderFull } from './fileFullOrFolderFull.generated.js';
import { deserializeFileFullOrFolderFull } from './fileFullOrFolderFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeMetadataQueryResults(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeFileFullOrFolderFull(item);
            }),
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
    };
}
export function deserializeMetadataQueryResults(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataQueryResults"',
        });
    }
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "MetadataQueryResults"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeFileFullOrFolderFull(itm);
            })
            : [];
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "MetadataQueryResults"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
        throw new BoxSdkError({
            message: 'Expecting string for "next_marker" of type "MetadataQueryResults"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    return {
        entries: entries,
        limit: limit,
        nextMarker: nextMarker,
    };
}
//# sourceMappingURL=metadataQueryResults.generated.js.map