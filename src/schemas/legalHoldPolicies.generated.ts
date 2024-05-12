import { serializeLegalHoldPolicy } from './legalHoldPolicy.generated.js';
import { deserializeLegalHoldPolicy } from './legalHoldPolicy.generated.js';
import { LegalHoldPolicy } from './legalHoldPolicy.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface LegalHoldPolicies {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly LegalHoldPolicy[];
}
export function serializeLegalHoldPolicies(
  val: LegalHoldPolicies
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: LegalHoldPolicy): SerializedData {
            return serializeLegalHoldPolicy(item);
          }) as readonly any[]),
  };
}
export function deserializeLegalHoldPolicies(val: any): LegalHoldPolicies {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly LegalHoldPolicy[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): LegalHoldPolicy {
          return deserializeLegalHoldPolicy(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies LegalHoldPolicies;
}
