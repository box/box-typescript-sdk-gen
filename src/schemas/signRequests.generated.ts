import { serializeSignRequest } from './signRequest.generated.js';
import { deserializeSignRequest } from './signRequest.generated.js';
import { SignRequest } from './signRequest.generated.js';
import { BoxSdkError } from '../box/errors.js';
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
export function deserializeSignRequests(val: SerializedData): SignRequests {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "SignRequests"' });
  }
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message: 'Expecting number for "limit" of type "SignRequests"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
    throw new BoxSdkError({
      message: 'Expecting string for "next_marker" of type "SignRequests"',
    });
  }
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message: 'Expecting array for "entries" of type "SignRequests"',
    });
  }
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
