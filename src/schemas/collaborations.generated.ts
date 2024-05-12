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
  readonly by?: string;
  readonly direction?: CollaborationsOrderDirectionField;
}
export interface Collaborations {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly CollaborationsOrderField[];
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
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "CollaborationsOrderDirectionField"',
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
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
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
  if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
    throw new BoxSdkError({
      message: 'Expecting number for "total_count" of type "Collaborations"',
    });
  }
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "Collaborations"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
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
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Collaborations;
}
