import { serializeShieldInformationBarrierSegmentRestriction } from './shieldInformationBarrierSegmentRestriction.generated.js';
import { deserializeShieldInformationBarrierSegmentRestriction } from './shieldInformationBarrierSegmentRestriction.generated.js';
import { ShieldInformationBarrierSegmentRestriction } from './shieldInformationBarrierSegmentRestriction.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface ShieldInformationBarrierSegmentRestrictions {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly ShieldInformationBarrierSegmentRestriction[];
}
export function serializeShieldInformationBarrierSegmentRestrictions(
  val: ShieldInformationBarrierSegmentRestrictions
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: ShieldInformationBarrierSegmentRestriction
          ): SerializedData {
            return serializeShieldInformationBarrierSegmentRestriction(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldInformationBarrierSegmentRestrictions(
  val: any
): ShieldInformationBarrierSegmentRestrictions {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries:
    | undefined
    | readonly ShieldInformationBarrierSegmentRestriction[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): ShieldInformationBarrierSegmentRestriction {
          return deserializeShieldInformationBarrierSegmentRestriction(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies ShieldInformationBarrierSegmentRestrictions;
}
