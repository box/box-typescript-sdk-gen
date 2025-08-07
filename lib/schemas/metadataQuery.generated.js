"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadataQueryOrderByDirectionField = serializeMetadataQueryOrderByDirectionField;
exports.deserializeMetadataQueryOrderByDirectionField = deserializeMetadataQueryOrderByDirectionField;
exports.serializeMetadataQueryOrderByField = serializeMetadataQueryOrderByField;
exports.deserializeMetadataQueryOrderByField = deserializeMetadataQueryOrderByField;
exports.serializeMetadataQuery = serializeMetadataQuery;
exports.deserializeMetadataQuery = deserializeMetadataQuery;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeMetadataQueryOrderByDirectionField(val) {
    return val;
}
function deserializeMetadataQueryOrderByDirectionField(val) {
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
        message: "Can't deserialize MetadataQueryOrderByDirectionField",
    });
}
function serializeMetadataQueryOrderByField(val) {
    return {
        ['field_key']: val.fieldKey,
        ['direction']: val.direction == void 0
            ? val.direction
            : serializeMetadataQueryOrderByDirectionField(val.direction),
    };
}
function deserializeMetadataQueryOrderByField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataQueryOrderByField"',
        });
    }
    if (!(val.field_key == void 0) && !(0, json_js_2.sdIsString)(val.field_key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "field_key" of type "MetadataQueryOrderByField"',
        });
    }
    const fieldKey = val.field_key == void 0 ? void 0 : val.field_key;
    const direction = val.direction == void 0
        ? void 0
        : deserializeMetadataQueryOrderByDirectionField(val.direction);
    return {
        fieldKey: fieldKey,
        direction: direction,
    };
}
function serializeMetadataQuery(val) {
    return {
        ['from']: val.from,
        ['query']: val.query,
        ['query_params']: val.queryParams == void 0
            ? val.queryParams
            : Object.fromEntries(Object.entries(val.queryParams).map(([k, v]) => [
                k,
                (function (v) {
                    return v;
                })(v),
            ])),
        ['ancestor_folder_id']: val.ancestorFolderId,
        ['order_by']: val.orderBy == void 0
            ? val.orderBy
            : val.orderBy.map(function (item) {
                return serializeMetadataQueryOrderByField(item);
            }),
        ['limit']: val.limit,
        ['marker']: val.marker,
        ['fields']: val.fields == void 0
            ? val.fields
            : val.fields.map(function (item) {
                return item;
            }),
    };
}
function deserializeMetadataQuery(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "MetadataQuery"' });
    }
    if (val.from == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "from" of type "MetadataQuery" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.from)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "from" of type "MetadataQuery"',
        });
    }
    const from = val.from;
    if (!(val.query == void 0) && !(0, json_js_2.sdIsString)(val.query)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "query" of type "MetadataQuery"',
        });
    }
    const query = val.query == void 0 ? void 0 : val.query;
    if (!(val.query_params == void 0) && !(0, json_js_4.sdIsMap)(val.query_params)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting object for "query_params" of type "MetadataQuery"',
        });
    }
    const queryParams = val.query_params == void 0
        ? void 0
        : (0, json_js_4.sdIsMap)(val.query_params)
            ? Object.fromEntries(Object.entries(val.query_params).map(([k, v]) => [
                k,
                (function (v) {
                    return v;
                })(v),
            ]))
            : {};
    if (val.ancestor_folder_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "ancestor_folder_id" of type "MetadataQuery" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.ancestor_folder_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "ancestor_folder_id" of type "MetadataQuery"',
        });
    }
    const ancestorFolderId = val.ancestor_folder_id;
    if (!(val.order_by == void 0) && !(0, json_js_3.sdIsList)(val.order_by)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "order_by" of type "MetadataQuery"',
        });
    }
    const orderBy = val.order_by == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.order_by)
            ? val.order_by.map(function (itm) {
                return deserializeMetadataQueryOrderByField(itm);
            })
            : [];
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "MetadataQuery"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.marker == void 0) && !(0, json_js_2.sdIsString)(val.marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "marker" of type "MetadataQuery"',
        });
    }
    const marker = val.marker == void 0 ? void 0 : val.marker;
    if (!(val.fields == void 0) && !(0, json_js_3.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "MetadataQuery"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.fields)
            ? val.fields.map(function (itm) {
                if (!(0, json_js_2.sdIsString)(itm)) {
                    throw new errors_js_1.BoxSdkError({
                        message: 'Expecting string for "MetadataQuery"',
                    });
                }
                return itm;
            })
            : [];
    return {
        from: from,
        query: query,
        queryParams: queryParams,
        ancestorFolderId: ancestorFolderId,
        orderBy: orderBy,
        limit: limit,
        marker: marker,
        fields: fields,
    };
}
//# sourceMappingURL=metadataQuery.generated.js.map