import { serializeCollaboration } from './collaboration.generated.js';
import { deserializeCollaboration } from './collaboration.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeCollaborationsOffsetPaginated(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeCollaboration(item);
            }),
    };
}
export function deserializeCollaborationsOffsetPaginated(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaborationsOffsetPaginated"',
        });
    }
    if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "CollaborationsOffsetPaginated"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "CollaborationsOffsetPaginated"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
        throw new BoxSdkError({
            message: 'Expecting number for "offset" of type "CollaborationsOffsetPaginated"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "CollaborationsOffsetPaginated"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeCollaboration(itm);
            })
            : [];
    return {
        totalCount: totalCount,
        limit: limit,
        offset: offset,
        entries: entries,
    };
}
//# sourceMappingURL=collaborationsOffsetPaginated.generated.js.map