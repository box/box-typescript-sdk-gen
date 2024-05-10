import { serializeSignRequest } from './signRequest.generated.js';
import { deserializeSignRequest } from './signRequest.generated.js';
import { SignRequest } from './signRequest.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface SignRequests {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly SignRequest[];
}
export function serializeSignRequests(val: SignRequests): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: SignRequest): SerializedData {
            return serializeSignRequest(item);
          }) as readonly any[]),
  };
}
export function deserializeSignRequests(val: any): SignRequests {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly SignRequest[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): SignRequest {
          return deserializeSignRequest(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies SignRequests;
}
