import { serializeFileFullOrFolderMiniOrWebLink } from './fileFullOrFolderMiniOrWebLink.generated.js';
import { deserializeFileFullOrFolderMiniOrWebLink } from './fileFullOrFolderMiniOrWebLink.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeItemsOffsetPaginatedOrderDirectionField(val) {
    return val;
}
export function deserializeItemsOffsetPaginatedOrderDirectionField(val) {
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
        message: "Can't deserialize ItemsOffsetPaginatedOrderDirectionField",
    });
}
export function serializeItemsOffsetPaginatedOrderField(val) {
    return {
        ['by']: val.by,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeItemsOffsetPaginatedOrderDirectionField(val.direction),
    };
}
export function deserializeItemsOffsetPaginatedOrderField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ItemsOffsetPaginatedOrderField"',
        });
    }
    if (!(val.by == void 0) && !sdIsString(val.by)) {
        throw new BoxSdkError({
            message: 'Expecting string for "by" of type "ItemsOffsetPaginatedOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : val.by;
    const direction = val.direction == void 0
        ? void 0
        : deserializeItemsOffsetPaginatedOrderDirectionField(val.direction);
    return {
        by: by,
        direction: direction,
    };
}
export function serializeItemsOffsetPaginated(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['order']: val.order == void 0
            ? val.order
            : val.order.map(function (item) {
                return serializeItemsOffsetPaginatedOrderField(item);
            }),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeFileFullOrFolderMiniOrWebLink(item);
            }),
    };
}
export function deserializeItemsOffsetPaginated(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ItemsOffsetPaginated"',
        });
    }
    if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "ItemsOffsetPaginated"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "ItemsOffsetPaginated"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
        throw new BoxSdkError({
            message: 'Expecting number for "offset" of type "ItemsOffsetPaginated"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !sdIsList(val.order)) {
        throw new BoxSdkError({
            message: 'Expecting array for "order" of type "ItemsOffsetPaginated"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : sdIsList(val.order)
            ? val.order.map(function (itm) {
                return deserializeItemsOffsetPaginatedOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "ItemsOffsetPaginated"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeFileFullOrFolderMiniOrWebLink(itm);
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
//# sourceMappingURL=itemsOffsetPaginated.generated.js.map