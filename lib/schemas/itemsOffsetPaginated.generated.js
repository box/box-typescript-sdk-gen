"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeItemsOffsetPaginatedOrderDirectionField = serializeItemsOffsetPaginatedOrderDirectionField;
exports.deserializeItemsOffsetPaginatedOrderDirectionField = deserializeItemsOffsetPaginatedOrderDirectionField;
exports.serializeItemsOffsetPaginatedOrderField = serializeItemsOffsetPaginatedOrderField;
exports.deserializeItemsOffsetPaginatedOrderField = deserializeItemsOffsetPaginatedOrderField;
exports.serializeItemsOffsetPaginated = serializeItemsOffsetPaginated;
exports.deserializeItemsOffsetPaginated = deserializeItemsOffsetPaginated;
const fileFullOrFolderMiniOrWebLink_generated_js_1 = require("./fileFullOrFolderMiniOrWebLink.generated.js");
const fileFullOrFolderMiniOrWebLink_generated_js_2 = require("./fileFullOrFolderMiniOrWebLink.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeItemsOffsetPaginatedOrderDirectionField(val) {
    return val;
}
function deserializeItemsOffsetPaginatedOrderDirectionField(val) {
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
        message: "Can't deserialize ItemsOffsetPaginatedOrderDirectionField",
    });
}
function serializeItemsOffsetPaginatedOrderField(val) {
    return {
        ['by']: val.by,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeItemsOffsetPaginatedOrderDirectionField(val.direction),
    };
}
function deserializeItemsOffsetPaginatedOrderField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ItemsOffsetPaginatedOrderField"',
        });
    }
    if (!(val.by == void 0) && !(0, json_js_2.sdIsString)(val.by)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeItemsOffsetPaginated(val) {
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
                return (0, fileFullOrFolderMiniOrWebLink_generated_js_1.serializeFileFullOrFolderMiniOrWebLink)(item);
            }),
    };
}
function deserializeItemsOffsetPaginated(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ItemsOffsetPaginated"',
        });
    }
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "ItemsOffsetPaginated"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "ItemsOffsetPaginated"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "ItemsOffsetPaginated"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !(0, json_js_3.sdIsList)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "order" of type "ItemsOffsetPaginated"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.order)
            ? val.order.map(function (itm) {
                return deserializeItemsOffsetPaginatedOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "ItemsOffsetPaginated"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, fileFullOrFolderMiniOrWebLink_generated_js_2.deserializeFileFullOrFolderMiniOrWebLink)(itm);
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