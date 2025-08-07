import { serializeUserFull } from './userFull.generated.js';
import { deserializeUserFull } from './userFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeUsersOrderDirectionField(val) {
    return val;
}
export function deserializeUsersOrderDirectionField(val) {
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
        message: "Can't deserialize UsersOrderDirectionField",
    });
}
export function serializeUsersOrderField(val) {
    return {
        ['by']: val.by,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeUsersOrderDirectionField(val.direction),
    };
}
export function deserializeUsersOrderField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UsersOrderField"' });
    }
    if (!(val.by == void 0) && !sdIsString(val.by)) {
        throw new BoxSdkError({
            message: 'Expecting string for "by" of type "UsersOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : val.by;
    const direction = val.direction == void 0
        ? void 0
        : deserializeUsersOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
export function serializeUsers(val) {
    return {
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['prev_marker']: val.prevMarker,
        ['total_count']: val.totalCount,
        ['offset']: val.offset,
        ['order']: val.order == void 0
            ? val.order
            : val.order.map(function (item) {
                return serializeUsersOrderField(item);
            }),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeUserFull(item);
            }),
    };
}
export function deserializeUsers(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Users"' });
    }
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "Users"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
        throw new BoxSdkError({
            message: 'Expecting string for "next_marker" of type "Users"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.prev_marker == void 0) && !sdIsString(val.prev_marker)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prev_marker" of type "Users"',
        });
    }
    const prevMarker = val.prev_marker == void 0 ? void 0 : val.prev_marker;
    if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "Users"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
        throw new BoxSdkError({
            message: 'Expecting number for "offset" of type "Users"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !sdIsList(val.order)) {
        throw new BoxSdkError({
            message: 'Expecting array for "order" of type "Users"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : sdIsList(val.order)
            ? val.order.map(function (itm) {
                return deserializeUsersOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "Users"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeUserFull(itm);
            })
            : [];
    return {
        limit: limit,
        nextMarker: nextMarker,
        prevMarker: prevMarker,
        totalCount: totalCount,
        offset: offset,
        order: order,
        entries: entries,
    };
}
//# sourceMappingURL=users.generated.js.map