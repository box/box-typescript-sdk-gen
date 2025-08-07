"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeUsersOrderDirectionField = serializeUsersOrderDirectionField;
exports.deserializeUsersOrderDirectionField = deserializeUsersOrderDirectionField;
exports.serializeUsersOrderField = serializeUsersOrderField;
exports.deserializeUsersOrderField = deserializeUsersOrderField;
exports.serializeUsers = serializeUsers;
exports.deserializeUsers = deserializeUsers;
const userFull_generated_js_1 = require("./userFull.generated.js");
const userFull_generated_js_2 = require("./userFull.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeUsersOrderDirectionField(val) {
    return val;
}
function deserializeUsersOrderDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UsersOrderDirectionField",
    });
}
function serializeUsersOrderField(val) {
    return {
        ['by']: val.by,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeUsersOrderDirectionField(val.direction),
    };
}
function deserializeUsersOrderField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UsersOrderField"' });
    }
    if (!(val.by == void 0) && !(0, json_js_2.sdIsString)(val.by)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "by" of type "UsersOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : val.by;
    const direction = val.direction == void 0
        ? void 0
        : deserializeUsersOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
function serializeUsers(val) {
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
                return (0, userFull_generated_js_1.serializeUserFull)(item);
            }),
    };
}
function deserializeUsers(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Users"' });
    }
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "Users"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "Users"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.prev_marker == void 0) && !(0, json_js_2.sdIsString)(val.prev_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prev_marker" of type "Users"',
        });
    }
    const prevMarker = val.prev_marker == void 0 ? void 0 : val.prev_marker;
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "Users"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "Users"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !(0, json_js_3.sdIsList)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "order" of type "Users"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.order)
            ? val.order.map(function (itm) {
                return deserializeUsersOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "Users"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, userFull_generated_js_2.deserializeUserFull)(itm);
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