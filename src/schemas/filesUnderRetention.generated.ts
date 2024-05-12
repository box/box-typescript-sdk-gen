import { serializeFileMini } from './fileMini.generated.js';
import { deserializeFileMini } from './fileMini.generated.js';
import { FileMini } from './fileMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface FilesUnderRetention {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly FileMini[];
}
export function serializeFilesUnderRetention(
  val: FilesUnderRetention
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileMini): SerializedData {
            return serializeFileMini(item);
          }) as readonly any[]),
  };
}
export function deserializeFilesUnderRetention(
  val: SerializedData
): FilesUnderRetention {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "FilesUnderRetention"',
    });
  }
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "FilesUnderRetention"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "next_marker" of type "FilesUnderRetention"',
    });
  }
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  if (!(val.prev_marker == void 0) && !sdIsString(val.prev_marker)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "prev_marker" of type "FilesUnderRetention"',
    });
  }
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "FilesUnderRetention"',
    });
  }
  const entries: undefined | readonly FileMini[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): FileMini {
          return deserializeFileMini(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies FilesUnderRetention;
}
