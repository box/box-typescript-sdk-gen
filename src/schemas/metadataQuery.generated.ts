import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type MetadataQueryOrderByDirectionField = 'ASC' | 'DESC';
export interface MetadataQueryOrderByField {
  readonly fieldKey?: string;
  readonly direction?: MetadataQueryOrderByDirectionField;
}
export interface MetadataQuery {
  readonly from: string;
  readonly query?: string;
  readonly queryParams?: {
    readonly [key: string]: string;
  };
  readonly ancestorFolderId: string;
  readonly orderBy?: readonly MetadataQueryOrderByField[];
  readonly limit?: number;
  readonly marker?: string;
  readonly fields?: readonly string[];
}
export function serializeMetadataQueryOrderByDirectionField(
  val: MetadataQueryOrderByDirectionField
): SerializedData {
  return val;
}
export function deserializeMetadataQueryOrderByDirectionField(
  val: SerializedData
): MetadataQueryOrderByDirectionField {
  if (val == 'ASC') {
    return val;
  }
  if (val == 'DESC') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize MetadataQueryOrderByDirectionField",
  });
}
export function serializeMetadataQueryOrderByField(
  val: MetadataQueryOrderByField
): SerializedData {
  return {
    ['field_key']: val.fieldKey == void 0 ? void 0 : val.fieldKey,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeMetadataQueryOrderByDirectionField(val.direction),
  };
}
export function deserializeMetadataQueryOrderByField(
  val: SerializedData
): MetadataQueryOrderByField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "MetadataQueryOrderByField"',
    });
  }
  if (!(val.field_key == void 0) && !sdIsString(val.field_key)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "field_key" of type "MetadataQueryOrderByField"',
    });
  }
  const fieldKey: undefined | string =
    val.field_key == void 0 ? void 0 : val.field_key;
  const direction: undefined | MetadataQueryOrderByDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeMetadataQueryOrderByDirectionField(val.direction);
  return {
    fieldKey: fieldKey,
    direction: direction,
  } satisfies MetadataQueryOrderByField;
}
export function serializeMetadataQuery(val: MetadataQuery): SerializedData {
  return {
    ['from']: val.from,
    ['query']: val.query == void 0 ? void 0 : val.query,
    ['query_params']: val.queryParams == void 0 ? void 0 : val.queryParams,
    ['ancestor_folder_id']: val.ancestorFolderId,
    ['order_by']:
      val.orderBy == void 0
        ? void 0
        : (val.orderBy.map(function (
            item: MetadataQueryOrderByField
          ): SerializedData {
            return serializeMetadataQueryOrderByField(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['marker']: val.marker == void 0 ? void 0 : val.marker,
    ['fields']:
      val.fields == void 0
        ? void 0
        : (val.fields.map(function (item: string): SerializedData {
            return item;
          }) as readonly any[]),
  };
}
export function deserializeMetadataQuery(val: SerializedData): MetadataQuery {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "MetadataQuery"' });
  }
  if (val.from == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "from" of type "MetadataQuery" to be defined',
    });
  }
  if (!sdIsString(val.from)) {
    throw new BoxSdkError({
      message: 'Expecting string for "from" of type "MetadataQuery"',
    });
  }
  const from: string = val.from;
  if (!(val.query == void 0) && !sdIsString(val.query)) {
    throw new BoxSdkError({
      message: 'Expecting string for "query" of type "MetadataQuery"',
    });
  }
  const query: undefined | string = val.query == void 0 ? void 0 : val.query;
  if (!(val.query_params == void 0) && !sdIsMap(val.query_params)) {
    throw new BoxSdkError({
      message: 'Expecting object for "query_params" of type "MetadataQuery"',
    });
  }
  const queryParams:
    | undefined
    | {
        readonly [key: string]: string;
      } =
    val.query_params == void 0
      ? void 0
      : sdIsMap(val.query_params)
      ? (Object.fromEntries(
          Object.entries(val.query_params).map(([k, v]: [string, any]) => [
            k,
            (function (v: any): any {
              if (!sdIsString(v)) {
                throw new BoxSdkError({
                  message: 'Expecting string for "MetadataQuery"',
                });
              }
              return v;
            })(v),
          ])
        ) as {
          readonly [key: string]: any;
        })
      : {};
  if (val.ancestor_folder_id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "ancestor_folder_id" of type "MetadataQuery" to be defined',
    });
  }
  if (!sdIsString(val.ancestor_folder_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "ancestor_folder_id" of type "MetadataQuery"',
    });
  }
  const ancestorFolderId: string = val.ancestor_folder_id;
  if (!(val.order_by == void 0) && !sdIsList(val.order_by)) {
    throw new BoxSdkError({
      message: 'Expecting array for "order_by" of type "MetadataQuery"',
    });
  }
  const orderBy: undefined | readonly MetadataQueryOrderByField[] =
    val.order_by == void 0
      ? void 0
      : sdIsList(val.order_by)
      ? (val.order_by.map(function (
          itm: SerializedData
        ): MetadataQueryOrderByField {
          return deserializeMetadataQueryOrderByField(itm);
        }) as readonly any[])
      : [];
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "MetadataQuery"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.marker == void 0) && !sdIsString(val.marker)) {
    throw new BoxSdkError({
      message: 'Expecting string for "marker" of type "MetadataQuery"',
    });
  }
  const marker: undefined | string = val.marker == void 0 ? void 0 : val.marker;
  if (!(val.fields == void 0) && !sdIsList(val.fields)) {
    throw new BoxSdkError({
      message: 'Expecting array for "fields" of type "MetadataQuery"',
    });
  }
  const fields: undefined | readonly string[] =
    val.fields == void 0
      ? void 0
      : sdIsList(val.fields)
      ? (val.fields.map(function (itm: SerializedData): string {
          if (!sdIsString(itm)) {
            throw new BoxSdkError({
              message: 'Expecting string for "MetadataQuery"',
            });
          }
          return itm;
        }) as readonly any[])
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
  } satisfies MetadataQuery;
}
