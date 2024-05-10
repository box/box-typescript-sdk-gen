import { serializeRealtimeServer } from './realtimeServer.generated.js';
import { deserializeRealtimeServer } from './realtimeServer.generated.js';
import { RealtimeServer } from './realtimeServer.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface RealtimeServers {
  readonly chunkSize?: number;
  readonly entries?: readonly RealtimeServer[];
}
export function serializeRealtimeServers(val: RealtimeServers): SerializedData {
  return {
    ['chunk_size']: val.chunkSize == void 0 ? void 0 : val.chunkSize,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: RealtimeServer): SerializedData {
            return serializeRealtimeServer(item);
          }) as readonly any[]),
  };
}
export function deserializeRealtimeServers(val: any): RealtimeServers {
  const chunkSize: undefined | number =
    val.chunk_size == void 0 ? void 0 : val.chunk_size;
  const entries: undefined | readonly RealtimeServer[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): RealtimeServer {
          return deserializeRealtimeServer(itm);
        }) as readonly any[])
      : [];
  return { chunkSize: chunkSize, entries: entries } satisfies RealtimeServers;
}
