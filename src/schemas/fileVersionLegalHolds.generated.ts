import { serializeFileVersionLegalHold } from './fileVersionLegalHold.generated.js';
import { deserializeFileVersionLegalHold } from './fileVersionLegalHold.generated.js';
import { FileVersionLegalHold } from './fileVersionLegalHold.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface FileVersionLegalHolds {
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
   * A list of file version legal holds */
  readonly entries?: readonly FileVersionLegalHold[];
  readonly rawData?: SerializedData;
}
export function serializeFileVersionLegalHolds(
  val: FileVersionLegalHolds,
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: FileVersionLegalHold,
          ): SerializedData {
            return serializeFileVersionLegalHold(item);
          }) as readonly any[]),
  };
}
export function deserializeFileVersionLegalHolds(
  val: SerializedData,
): FileVersionLegalHolds {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FileVersionLegalHolds"',
    });
  }
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "FileVersionLegalHolds"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "next_marker" of type "FileVersionLegalHolds"',
    });
  }
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  if (!(val.prev_marker == void 0) && !sdIsString(val.prev_marker)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "prev_marker" of type "FileVersionLegalHolds"',
    });
  }
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "FileVersionLegalHolds"',
    });
  }
  const entries: undefined | readonly FileVersionLegalHold[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
        ? (val.entries.map(function (
            itm: SerializedData,
          ): FileVersionLegalHold {
            return deserializeFileVersionLegalHold(itm);
          }) as readonly any[])
        : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies FileVersionLegalHolds;
}
