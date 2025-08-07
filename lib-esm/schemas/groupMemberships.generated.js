import { serializeGroupMembership } from './groupMembership.generated.js';
import { deserializeGroupMembership } from './groupMembership.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeGroupMembershipsOrderDirectionField(val) {
    return val;
}
export function deserializeGroupMembershipsOrderDirectionField(val) {
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
        message: "Can't deserialize GroupMembershipsOrderDirectionField",
    });
}
export function serializeGroupMembershipsOrderField(val) {
    return {
        ['by']: val.by,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeGroupMembershipsOrderDirectionField(val.direction),
    };
}
export function deserializeGroupMembershipsOrderField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "GroupMembershipsOrderField"',
        });
    }
    if (!(val.by == void 0) && !sdIsString(val.by)) {
        throw new BoxSdkError({
            message: 'Expecting string for "by" of type "GroupMembershipsOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : val.by;
    const direction = val.direction == void 0
        ? void 0
        : deserializeGroupMembershipsOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
export function serializeGroupMemberships(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['order']: val.order == void 0
            ? val.order
            : val.order.map(function (item) {
                return serializeGroupMembershipsOrderField(item);
            }),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeGroupMembership(item);
            }),
    };
}
export function deserializeGroupMemberships(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "GroupMemberships"',
        });
    }
    if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "GroupMemberships"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "GroupMemberships"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
        throw new BoxSdkError({
            message: 'Expecting number for "offset" of type "GroupMemberships"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !sdIsList(val.order)) {
        throw new BoxSdkError({
            message: 'Expecting array for "order" of type "GroupMemberships"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : sdIsList(val.order)
            ? val.order.map(function (itm) {
                return deserializeGroupMembershipsOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "GroupMemberships"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeGroupMembership(itm);
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
//# sourceMappingURL=groupMemberships.generated.js.map