import { serializeMetadata } from './metadata.generated.js';
import { deserializeMetadata } from './metadata.generated.js';
import { Metadata } from './metadata.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface Metadatas {
  readonly entries?: readonly Metadata[];
  readonly limit?: number;
}
export function serializeMetadatas(val: Metadatas): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Metadata): SerializedData {
            return serializeMetadata(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
  };
}
export function deserializeMetadatas(val: any): Metadatas {
  const entries: undefined | readonly Metadata[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): Metadata {
          return deserializeMetadata(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  return { entries: entries, limit: limit } satisfies Metadatas;
}
