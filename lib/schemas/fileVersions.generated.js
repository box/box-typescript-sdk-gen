"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileVersionsOrderDirectionField = serializeFileVersionsOrderDirectionField;
exports.deserializeFileVersionsOrderDirectionField = deserializeFileVersionsOrderDirectionField;
exports.serializeFileVersionsOrderField = serializeFileVersionsOrderField;
exports.deserializeFileVersionsOrderField = deserializeFileVersionsOrderField;
exports.serializeFileVersions = serializeFileVersions;
exports.deserializeFileVersions = deserializeFileVersions;
const fileVersionFull_generated_js_1 = require("./fileVersionFull.generated.js");
const fileVersionFull_generated_js_2 = require("./fileVersionFull.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeFileVersionsOrderDirectionField(val) {
    return val;
}
function deserializeFileVersionsOrderDirectionField(val) {
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
        message: "Can't deserialize FileVersionsOrderDirectionField",
    });
}
function serializeFileVersionsOrderField(val) {
    return {
        ['by']: val.by,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeFileVersionsOrderDirectionField(val.direction),
    };
}
function deserializeFileVersionsOrderField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileVersionsOrderField"',
        });
    }
    if (!(val.by == void 0) && !(0, json_js_2.sdIsString)(val.by)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "by" of type "FileVersionsOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : val.by;
    const direction = val.direction == void 0
        ? void 0
        : deserializeFileVersionsOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
function serializeFileVersions(val) {
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
                return (0, fileVersionFull_generated_js_1.serializeFileVersionFull)(item);
            }),
    };
}
function deserializeFileVersions(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileVersions"' });
    }
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "FileVersions"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "FileVersions"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "FileVersions"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !(0, json_js_3.sdIsList)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "order" of type "FileVersions"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.order)
            ? val.order.map(function (itm) {
                return deserializeFileVersionsOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "FileVersions"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, fileVersionFull_generated_js_2.deserializeFileVersionFull)(itm);
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