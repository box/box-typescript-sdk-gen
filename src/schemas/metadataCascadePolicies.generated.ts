import { serializeMetadataCascadePolicy } from './metadataCascadePolicy.generated.js';
import { deserializeMetadataCascadePolicy } from './metadataCascadePolicy.generated.js';
import { MetadataCascadePolicy } from './metadataCascadePolicy.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface MetadataCascadePolicies {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly MetadataCascadePolicy[];
}
export function serializeMetadataCascadePolicies(
  val: MetadataCascadePolicies
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: MetadataCascadePolicy
          ): SerializedData {
            return serializeMetadataCascadePolicy(item);
          }) as readonly any[]),
  };
}
export function deserializeMetadataCascadePolicies(
  val: any
): MetadataCascadePolicies {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly MetadataCascadePolicy[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): MetadataCascadePolicy {
          return deserializeMetadataCascadePolicy(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies MetadataCascadePolicies;
}
