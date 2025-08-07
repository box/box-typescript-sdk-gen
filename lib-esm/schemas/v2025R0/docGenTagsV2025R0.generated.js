import { serializeDocGenTagV2025R0 } from './docGenTagV2025R0.generated.js';
import { deserializeDocGenTagV2025R0 } from './docGenTagV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsNumber } from '../../serialization/json.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeDocGenTagsV2025R0(val) {
    return {
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['prev_marker']: val.prevMarker,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeDocGenTagV2025R0(item);
            }),
    };
}
export function deserializeDocGenTagsV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenTagsV2025R0"',
        });
    }
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "DocGenTagsV2025R0"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
        throw new BoxSdkError({
            message: 'Expecting string for "next_marker" of type "DocGenTagsV2025R0"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.prev_marker == void 0) && !sdIsString(val.prev_marker)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prev_marker" of type "DocGenTagsV2025R0"',
        });
    }
    const prevMarker = val.prev_marker == void 0 ? void 0 : val.prev_marker;
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "DocGenTagsV2025R0"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeDocGenTagV2025R0(itm);
            })
            : [];
    return {
        limit: limit,
        nextMarker: nextMarker,
        prevMarker: prevMarker,
        entries: entries,
    };
}
//# sourceMappingURL=docGenTagsV2025R0.generated.js.map