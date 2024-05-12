import { serializeRetentionPolicy } from './retentionPolicy.generated.js';
import { deserializeRetentionPolicy } from './retentionPolicy.generated.js';
import { RetentionPolicy } from './retentionPolicy.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface RetentionPolicies {
  readonly entries?: readonly RetentionPolicy[];
  readonly limit?: number;
  readonly nextMarker?: string;
}
export function serializeRetentionPolicies(
  val: RetentionPolicies
): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: RetentionPolicy): SerializedData {
            return serializeRetentionPolicy(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
  };
}
export function deserializeRetentionPolicies(val: any): RetentionPolicies {
  const entries: undefined | readonly RetentionPolicy[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): RetentionPolicy {
          return deserializeRetentionPolicy(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
  } satisfies RetentionPolicies;
}
