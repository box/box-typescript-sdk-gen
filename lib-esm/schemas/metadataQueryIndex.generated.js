import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeMetadataQueryIndexStatusField(val) {
    return val;
}
export function deserializeMetadataQueryIndexStatusField(val) {
    if (val == 'building') {
        return val;
    }
    if (val == 'active') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize MetadataQueryIndexStatusField",
    });
}
export function serializeMetadataQueryIndexFieldsSortDirectionField(val) {
    return val;
}
export function deserializeMetadataQueryIndexFieldsSortDirectionField(val) {
    if (val == 'asc') {
        return val;
    }
    if (val == 'desc') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize MetadataQueryIndexFieldsSortDirectionField",
    });
}
export function serializeMetadataQueryIndexFieldsField(val) {
    return {
        ['key']: val.key,
        ['sort_direction']: val.sortDirection == void 0
            ? val.sortDirection
            : serializeMetadataQueryIndexFieldsSortDirectionField(val.sortDirection),
    };
}
export function deserializeMetadataQueryIndexFieldsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataQueryIndexFieldsField"',
        });
    }
    if (!(val.key == void 0) && !sdIsString(val.key)) {
        throw new BoxSdkError({
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
export function serializeMetadataQueryIndex(val) {
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
export function deserializeMetadataQueryIndex(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "MetadataQueryIndex"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "MetadataQueryIndex"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "MetadataQueryIndex" to be defined',
        });
    }
    if (!sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "MetadataQueryIndex"',
        });
    }
    const type = val.type;
    if (val.status == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "status" of type "MetadataQueryIndex" to be defined',
        });
    }
    const status = deserializeMetadataQueryIndexStatusField(val.status);
    if (!(val.fields == void 0) && !sdIsList(val.fields)) {
        throw new BoxSdkError({
            message: 'Expecting array for "fields" of type "MetadataQueryIndex"',
        });
    }
    const fields = val.fields == void 0
        ? void 0
        : sdIsList(val.fields)
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