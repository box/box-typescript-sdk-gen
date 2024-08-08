import { serializeCollaboration } from './collaboration.generated.js';
import { deserializeCollaboration } from './collaboration.generated.js';
import { Collaboration } from './collaboration.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type CollaborationsOrderDirectionField = 'ASC' | 'DESC';
export interface CollaborationsOrderField {
  /**
   * The field to order by */
  readonly by?: string;
  /**
   * The direction to order by, either ascending or descending */
  readonly direction?: CollaborationsOrderDirectionField;
}
export interface Collaborations {
  /**
   * The limit that was used for these entries. This will be the same as the
   * `limit` query parameter unless that value exceeded the maximum value
   * allowed. The maximum value varies by API. */
  readonly limit?: number;
  /**
   * The marker for the start of the next page of results. */
  readonly nextMarker?: string;
  /**
   * The marker for the start of the previous page of results. */
  readonly prevMarker?: string;
  /**
   * One greater than the offset of the last entry in the entire collection.
   * The total number of entries in the collection may be less than
   * `total_count`.
   *
   * This field is only returned for calls that use offset-based pagination.
   * For marker-based paginated APIs, this field will be omitted. */
  readonly totalCount?: number;
  /**
   * The 0-based offset of the first entry in this set. This will be the same
   * as the `offset` query parameter.
   *
   * This field is only returned for calls that use offset-based pagination.
   * For marker-based paginated APIs, this field will be omitted. */
  readonly offset?: number;
  /**
   * The order by which items are returned.
   *
   * This field is only returned for calls that use offset-based pagination.
   * For marker-based paginated APIs, this field will be omitted. */
  readonly order?: readonly CollaborationsOrderField[];
  /**
   * A list of collaborations */
  readonly entries?: readonly Collaboration[];
}
export function serializeCollaborationsOrderDirectionField(
  val: CollaborationsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeCollaborationsOrderDirectionField(
  val: SerializedData
): CollaborationsOrderDirectionField {
  if (val == 'ASC') {
    return val;
  }
  if (val == 'DESC') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize CollaborationsOrderDirectionField",
  });
}
export function serializeCollaborationsOrderField(
  val: CollaborationsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeCollaborationsOrderDirectionField(val.direction),
  };
}
export function deserializeCollaborationsOrderField(
  val: SerializedData
): CollaborationsOrderField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CollaborationsOrderField"',
    });
  }
  if (!(val.by == void 0) && !sdIsString(val.by)) {
    throw new BoxSdkError({
      message: 'Expecting string for "by" of type "CollaborationsOrderField"',
    });
  }
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | CollaborationsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeCollaborationsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies CollaborationsOrderField;
}
export function serializeCollaborations(val: Collaborations): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (
            item: CollaborationsOrderField
          ): SerializedData {
            return serializeCollaborationsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Collaboration): SerializedData {
            return serializeCollaboration(item);
          }) as readonly any[]),
  };
}
export function deserializeCollaborations(val: SerializedData): Collaborations {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "Collaborations"' });
  }
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "Collaborations"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
    throw new BoxSdkError({
      message: 'Expecting string for "next_marker" of type "Collaborations"',
    });
  }
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  if (!(val.prev_marker == void 0) && !sdIsString(val.prev_marker)) {
    throw new BoxSdkError({
      message: 'Expecting string for "prev_marker" of type "Collaborations"',
    });
  }
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
    throw new BoxSdkError({
      message: 'Expecting number for "total_count" of type "Collaborations"',
    });
  }
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  if (!(val.offset == void 0) && !sdIsNumber(val.offset)) {
    throw new BoxSdkError({
      message: 'Expecting number for "offset" of type "Collaborations"',
    });
  }
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  if (!(val.order == void 0) && !sdIsList(val.order)) {
    throw new BoxSdkError({
      message: 'Expecting array for "order" of type "Collaborations"',
    });
  }
  const order: undefined | readonly CollaborationsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (
          itm: SerializedData
        ): CollaborationsOrderField {
          return deserializeCollaborationsOrderField(itm);
        }) as readonly any[])
      : [];
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "Collaborations"',
    });
  }
  const entries: undefined | readonly Collaboration[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): Collaboration {
          return deserializeCollaboration(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    totalCount: totalCount,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Collaborations;
}
