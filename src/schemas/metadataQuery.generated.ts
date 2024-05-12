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
  val: any
): MetadataQueryOrderByDirectionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "MetadataQueryOrderByDirectionField"',
    });
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
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
  val: any
): MetadataQueryOrderByField {
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
export function deserializeMetadataQuery(val: any): MetadataQuery {
  const from: string = val.from;
  const query: undefined | string = val.query == void 0 ? void 0 : val.query;
  const queryParams:
    | undefined
    | {
        readonly [key: string]: string;
      } = val.query_params == void 0 ? void 0 : val.query_params;
  const ancestorFolderId: string = val.ancestor_folder_id;
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
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const marker: undefined | string = val.marker == void 0 ? void 0 : val.marker;
  const fields: undefined | readonly string[] =
    val.fields == void 0 ? void 0 : sdIsList(val.fields) ? val.fields : [];
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
