"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadataQueryIndexStatusField = serializeMetadataQueryIndexStatusField;
exports.deserializeMetadataQueryIndexStatusField = deserializeMetadataQueryIndexStatusField;
exports.serializeMetadataQueryIndexFieldsSortDirectionField = serializeMetadataQueryIndexFieldsSortDirectionField;
exports.deserializeMetadataQueryIndexFieldsSortDirectionField = deserializeMetadataQueryIndexFieldsSortDirectionField;
exports.serializeMetadataQueryIndexFieldsField = serializeMetadataQueryIndexFieldsField;
exports.deserializeMetadataQueryIndexFieldsField = deserializeMetadataQueryIndexFieldsField;
exports.serializeMetadataQueryIndex = serializeMetadataQueryIndex;
exports.deserializeMetadataQueryIndex = deserializeMetadataQueryIndex;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeMetadataQueryIndexStatusField(val) {
    return val;
}
function deserializeMetadataQueryIndexStatusField(val) {
    if (val == 'building') {
        return val;
    }
    if (val == 'active') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize MetadataQueryIndexStatusField",
    });
}
function serializeMetadataQueryIndexFieldsSortDirectionField(val) {
    return val;
}
function deserializeMetadataQueryIndexFieldsSortDirectionField(val) {
    if (val == 'asc') {
        return val;
    }
    if (val == 'desc') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize MetadataQueryIndexFieldsSortDirectionField",
    });
}
function serializeMetadataQueryIndexFieldsField(val) {
    return {
        ['key']: val.key,
        ['sort_direction']: val.sortDirection == void 0
            ? val.sortDirection
            : serializeMetadataQueryIndexFieldsSortDirectionField(val.sortDirection),
    };
}
function deserializeMetadataQueryIndexFieldsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataQueryIndexFieldsField"',
        });
    }
    if (!(val.key == void 0) && !(0, json_js_1.sdIsString)(val.key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "key" of type "MetadataQueryIndexFieldsField"',
        });
    }
    const key = val.key == void 0 ? void 0 : val.key;
    const sortDirection = val.sort_direction == void 0
        ? void 0
        : deserializeMetadataQueryIndexFieldsSortDirectionField(val.sort_direction);
    return {
        key: key,
        sortDirection: sortDirection,
    };
}
function serializeMetadataQueryIndex(val) {
    return {
        ['id']: val.id,
        ['type']: val.type,
        ['status']: serializeMetadataQueryIndexStatusField(val.status),
        ['fields']: val.fields == void 0
            ? val.fields
            : val.fields.map(function (item) {
                return serializeMetadataQueryIndexFieldsField(item);
            }),
    };
}
function deserializeMetadataQueryIndex(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "MetadataQueryIndex"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataQueryIndex"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "MetadataQueryIndex" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "MetadataQueryIndex"',
        });
    }
    const type = val.type;
    if (val.status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "status" of type "MetadataQueryIndex" to be defined',
        });
    }
    const status = deserializeMetadataQueryIndexStatusField(val.status);
    if (!(val.fields == void 0) && !(0, json_js_2.sdIsList)(val.fields)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "fields" of type "MetadataQueryIndex"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.fields)
            ? val.fields.map(function (itm) {
                return deserializeMetadataQueryIndexFieldsField(itm);
            })
            : [];
    return {
        id: id,
        type: type,
        status: status,
        fields: fields,
    };
}
//# sourceMappingURL=metadataQueryIndex.generated.js.map