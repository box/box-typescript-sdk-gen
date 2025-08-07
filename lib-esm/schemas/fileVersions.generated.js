import { serializeFileVersionFull } from './fileVersionFull.generated.js';
import { deserializeFileVersionFull } from './fileVersionFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileVersionsOrderDirectionField(val) {
    return val;
}
export function deserializeFileVersionsOrderDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FileVersionsOrderDirectionField",
    });
}
export function serializeFileVersionsOrderField(val) {
    return {
        ['by']: val.by,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeFileVersionsOrderDirectionField(val.direction),
    };
}
export function deserializeFileVersionsOrderField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileVersionsOrderField"',
        });
    }
    if (!(val.by == void 0) && !sdIsString(val.by)) {
        throw new BoxSdkError({
            message: 'Expecting string for "by" of type "FileVersionsOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : val.by;
    const direction = val.direction == void 0
        ? void 0
        : deserializeFileVersionsOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
export function serializeFileVersions(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['order']: val.order == void 0
            ? val.order
            : val.order.map(function (item) {
                return serializeFileVersionsOrderField(item);
            }),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeFileVersionFull(item);
            }),
    };
}
export function deserializeFileVersions(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FileVersions"' });
    }
    if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "FileVersions"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "FileVersions"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
        throw new BoxSdkError({
            message: 'Expecting number for "offset" of type "FileVersions"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !sdIsList(val.order)) {
        throw new BoxSdkError({
            message: 'Expecting array for "order" of type "FileVersions"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : sdIsList(val.order)
            ? val.order.map(function (itm) {
                return deserializeFileVersionsOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "FileVersions"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeFileVersionFull(itm);
            })
            : [];
    return {
        totalCount: totalCount,
        limit: limit,
        offset: offset,
        order: order,
        entries: entries,
    };
}
//# sourceMappingURL=fileVersions.generated.js.map