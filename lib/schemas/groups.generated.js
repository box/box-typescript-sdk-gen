"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeGroupsOrderDirectionField = serializeGroupsOrderDirectionField;
exports.deserializeGroupsOrderDirectionField = deserializeGroupsOrderDirectionField;
exports.serializeGroupsOrderField = serializeGroupsOrderField;
exports.deserializeGroupsOrderField = deserializeGroupsOrderField;
exports.serializeGroups = serializeGroups;
exports.deserializeGroups = deserializeGroups;
const groupFull_generated_js_1 = require("./groupFull.generated.js");
const groupFull_generated_js_2 = require("./groupFull.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeGroupsOrderDirectionField(val) {
    return val;
}
function deserializeGroupsOrderDirectionField(val) {
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
        message: "Can't deserialize GroupsOrderDirectionField",
    });
}
function serializeGroupsOrderField(val) {
    return {
        ['by']: val.by,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeGroupsOrderDirectionField(val.direction),
    };
}
function deserializeGroupsOrderField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "GroupsOrderField"',
        });
    }
    if (!(val.by == void 0) && !(0, json_js_2.sdIsString)(val.by)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "by" of type "GroupsOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : val.by;
    const direction = val.direction == void 0
        ? void 0
        : deserializeGroupsOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
function serializeGroups(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['order']: val.order == void 0
            ? val.order
            : val.order.map(function (item) {
                return serializeGroupsOrderField(item);
            }),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, groupFull_generated_js_1.serializeGroupFull)(item);
            }),
    };
}
function deserializeGroups(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Groups"' });
    }
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "Groups"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "Groups"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "Groups"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !(0, json_js_3.sdIsList)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "order" of type "Groups"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.order)
            ? val.order.map(function (itm) {
                return deserializeGroupsOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "Groups"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, groupFull_generated_js_2.deserializeGroupFull)(itm);
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
//# sourceMappingURL=groups.generated.js.map