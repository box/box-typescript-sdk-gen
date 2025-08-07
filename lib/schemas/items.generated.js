"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeItemsOrderDirectionField = serializeItemsOrderDirectionField;
exports.deserializeItemsOrderDirectionField = deserializeItemsOrderDirectionField;
exports.serializeItemsOrderField = serializeItemsOrderField;
exports.deserializeItemsOrderField = deserializeItemsOrderField;
exports.serializeItems = serializeItems;
exports.deserializeItems = deserializeItems;
const fileFullOrFolderMiniOrWebLink_generated_js_1 = require("./fileFullOrFolderMiniOrWebLink.generated.js");
const fileFullOrFolderMiniOrWebLink_generated_js_2 = require("./fileFullOrFolderMiniOrWebLink.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeItemsOrderDirectionField(val) {
    return val;
}
function deserializeItemsOrderDirectionField(val) {
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
        message: "Can't deserialize ItemsOrderDirectionField",
    });
}
function serializeItemsOrderField(val) {
    return {
        ['by']: val.by,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeItemsOrderDirectionField(val.direction),
    };
}
function deserializeItemsOrderField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "ItemsOrderField"' });
    }
    if (!(val.by == void 0) && !(0, json_js_2.sdIsString)(val.by)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "by" of type "ItemsOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : val.by;
    const direction = val.direction == void 0
        ? void 0
        : deserializeItemsOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
function serializeItems(val) {
    return {
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['prev_marker']: val.prevMarker,
        ['total_count']: val.totalCount,
        ['offset']: val.offset,
        ['order']: val.order == void 0
            ? val.order
            : val.order.map(function (item) {
                return serializeItemsOrderField(item);
            }),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, fileFullOrFolderMiniOrWebLink_generated_js_1.serializeFileFullOrFolderMiniOrWebLink)(item);
            }),
    };
}
function deserializeItems(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Items"' });
    }
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "Items"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "Items"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.prev_marker == void 0) && !(0, json_js_2.sdIsString)(val.prev_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prev_marker" of type "Items"',
        });
    }
    const prevMarker = val.prev_marker == void 0 ? void 0 : val.prev_marker;
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "Items"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "Items"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !(0, json_js_3.sdIsList)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "order" of type "Items"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.order)
            ? val.order.map(function (itm) {
                return deserializeItemsOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "Items"',
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
        limit: limit,
        nextMarker: nextMarker,
        prevMarker: prevMarker,
        totalCount: totalCount,
        offset: offset,
        order: order,
        entries: entries,
    };
}
//# sourceMappingURL=items.generated.js.map