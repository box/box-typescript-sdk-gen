import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type MetadataQueryIndexStatusField = 'building' | 'active' | 'disabled';
export type MetadataQueryIndexFieldsSortDirectionField = 'asc' | 'desc';
export interface MetadataQueryIndexFieldsField {
  readonly key?: string;
  readonly sortDirection?: MetadataQueryIndexFieldsSortDirectionField;
}
export interface MetadataQueryIndex {
  readonly id?: string;
  readonly type: string;
  readonly status: MetadataQueryIndexStatusField;
  readonly fields?: readonly MetadataQueryIndexFieldsField[];
}
export function serializeMetadataQueryIndexStatusField(
  val: MetadataQueryIndexStatusField
): SerializedData {
  return val;
}
export function deserializeMetadataQueryIndexStatusField(
  val: SerializedData
): MetadataQueryIndexStatusField {
  if (val == 'building') {
    return val;
  }
  if (val == 'active') {
    return val;
  }
  if (val == 'disabled') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize MetadataQueryIndexStatusField",
  });
}
export function serializeMetadataQueryIndexFieldsSortDirectionField(
  val: MetadataQueryIndexFieldsSortDirectionField
): SerializedData {
  return val;
}
export function deserializeMetadataQueryIndexFieldsSortDirectionField(
  val: SerializedData
): MetadataQueryIndexFieldsSortDirectionField {
  if (val == 'asc') {
    return val;
  }
  if (val == 'desc') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize MetadataQueryIndexFieldsSortDirectionField",
  });
}
export function serializeMetadataQueryIndexFieldsField(
  val: MetadataQueryIndexFieldsField
): SerializedData {
  return {
    ['key']: val.key == void 0 ? void 0 : val.key,
    ['sort_direction']:
      val.sortDirection == void 0
        ? void 0
        : serializeMetadataQueryIndexFieldsSortDirectionField(
            val.sortDirection
          ),
  };
}
export function deserializeMetadataQueryIndexFieldsField(
  val: SerializedData
): MetadataQueryIndexFieldsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "MetadataQueryIndexFieldsField"',
    });
  }
  if (!(val.key == void 0) && !sdIsString(val.key)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "key" of type "MetadataQueryIndexFieldsField"',
    });
  }
  const key: undefined | string = val.key == void 0 ? void 0 : val.key;
  const sortDirection: undefined | MetadataQueryIndexFieldsSortDirectionField =
    val.sort_direction == void 0
      ? void 0
      : deserializeMetadataQueryIndexFieldsSortDirectionField(
          val.sort_direction
        );
  return {
    key: key,
    sortDirection: sortDirection,
  } satisfies MetadataQueryIndexFieldsField;
}
export function serializeMetadataQueryIndex(
  val: MetadataQueryIndex
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type,
    ['status']: serializeMetadataQueryIndexStatusField(val.status),
    ['fields']:
      val.fields == void 0
        ? void 0
        : (val.fields.map(function (
            item: MetadataQueryIndexFieldsField
          ): SerializedData {
            return serializeMetadataQueryIndexFieldsField(item);
          }) as readonly any[]),
  };
}
export function deserializeMetadataQueryIndex(
  val: SerializedData
): MetadataQueryIndex {
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
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
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
  const type: string = val.type;
  if (val.status == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "status" of type "MetadataQueryIndex" to be defined',
    });
  }
  const status: MetadataQueryIndexStatusField =
    deserializeMetadataQueryIndexStatusField(val.status);
  if (!(val.fields == void 0) && !sdIsList(val.fields)) {
    throw new BoxSdkError({
      message: 'Expecting array for "fields" of type "MetadataQueryIndex"',
    });
  }
  const fields: undefined | readonly MetadataQueryIndexFieldsField[] =
    val.fields == void 0
      ? void 0
      : sdIsList(val.fields)
      ? (val.fields.map(function (
          itm: SerializedData
        ): MetadataQueryIndexFieldsField {
          return deserializeMetadataQueryIndexFieldsField(itm);
        }) as readonly any[])
      : [];
  return {
    id: id,
    type: type,
    status: status,
    fields: fields,
  } satisfies MetadataQueryIndex;
}
