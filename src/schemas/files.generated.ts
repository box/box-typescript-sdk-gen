import { serializeFileFull } from './fileFull.generated.js';
import { deserializeFileFull } from './fileFull.generated.js';
import { FileFull } from './fileFull.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface Files {
  readonly totalCount?: number;
  readonly entries?: readonly FileFull[];
}
export function serializeFiles(val: Files): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileFull): SerializedData {
            return serializeFileFull(item);
          }) as readonly any[]),
  };
}
export function deserializeFiles(val: any): Files {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly FileFull[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): FileFull {
          return deserializeFileFull(itm);
        }) as readonly any[])
      : [];
  return { totalCount: totalCount, entries: entries } satisfies Files;
}
