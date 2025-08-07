"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeUploadPartsOrderDirectionField = serializeUploadPartsOrderDirectionField;
exports.deserializeUploadPartsOrderDirectionField = deserializeUploadPartsOrderDirectionField;
exports.serializeUploadPartsOrderField = serializeUploadPartsOrderField;
exports.deserializeUploadPartsOrderField = deserializeUploadPartsOrderField;
exports.serializeUploadParts = serializeUploadParts;
exports.deserializeUploadParts = deserializeUploadParts;
const uploadPart_generated_js_1 = require("./uploadPart.generated.js");
const uploadPart_generated_js_2 = require("./uploadPart.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeUploadPartsOrderDirectionField(val) {
    return val;
}
function deserializeUploadPartsOrderDirectionField(val) {
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
        message: "Can't deserialize UploadPartsOrderDirectionField",
    });
}
function serializeUploadPartsOrderField(val) {
    return {
        ['by']: val.by,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeUploadPartsOrderDirectionField(val.direction),
    };
}
function deserializeUploadPartsOrderField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UploadPartsOrderField"',
        });
    }
    if (!(val.by == void 0) && !(0, json_js_2.sdIsString)(val.by)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "by" of type "UploadPartsOrderField"',
        });
    }
    const by = val.by == void 0 ? void 0 : val.by;
    const direction = val.direction == void 0
        ? void 0
        : deserializeUploadPartsOrderDirectionField(val.direction);
    return { by: by, direction: direction };
}
function serializeUploadParts(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['order']: val.order == void 0
            ? val.order
            : val.order.map(function (item) {
                return serializeUploadPartsOrderField(item);
            }),
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, uploadPart_generated_js_1.serializeUploadPart)(item);
            }),
    };
}
function deserializeUploadParts(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UploadParts"' });
    }
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "UploadParts"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "UploadParts"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "UploadParts"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.order == void 0) && !(0, json_js_3.sdIsList)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "order" of type "UploadParts"',
        });
    }
    const order = val.order == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.order)
            ? val.order.map(function (itm) {
                return deserializeUploadPartsOrderField(itm);
            })
            : [];
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "UploadParts"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, uploadPart_generated_js_2.deserializeUploadPart)(itm);
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
//# sourceMappingURL=uploadParts.generated.js.map