import { serializeShieldInformationBarrierSegmentMember } from './shieldInformationBarrierSegmentMember.generated.js';
import { deserializeShieldInformationBarrierSegmentMember } from './shieldInformationBarrierSegmentMember.generated.js';
import { ShieldInformationBarrierSegmentMember } from './shieldInformationBarrierSegmentMember.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface ShieldInformationBarrierSegmentMembers {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly ShieldInformationBarrierSegmentMember[];
}
export function serializeShieldInformationBarrierSegmentMembers(
  val: ShieldInformationBarrierSegmentMembers
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: ShieldInformationBarrierSegmentMember
          ): SerializedData {
            return serializeShieldInformationBarrierSegmentMember(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldInformationBarrierSegmentMembers(
  val: any
): ShieldInformationBarrierSegmentMembers {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly ShieldInformationBarrierSegmentMember[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): ShieldInformationBarrierSegmentMember {
          return deserializeShieldInformationBarrierSegmentMember(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies ShieldInformationBarrierSegmentMembers;
}
