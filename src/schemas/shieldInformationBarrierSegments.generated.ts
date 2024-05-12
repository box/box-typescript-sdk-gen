import { serializeShieldInformationBarrierSegment } from './shieldInformationBarrierSegment.generated.js';
import { deserializeShieldInformationBarrierSegment } from './shieldInformationBarrierSegment.generated.js';
import { ShieldInformationBarrierSegment } from './shieldInformationBarrierSegment.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface ShieldInformationBarrierSegments {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly ShieldInformationBarrierSegment[];
}
export function serializeShieldInformationBarrierSegments(
  val: ShieldInformationBarrierSegments
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: ShieldInformationBarrierSegment
          ): SerializedData {
            return serializeShieldInformationBarrierSegment(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldInformationBarrierSegments(
  val: any
): ShieldInformationBarrierSegments {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly ShieldInformationBarrierSegment[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): ShieldInformationBarrierSegment {
          return deserializeShieldInformationBarrierSegment(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies ShieldInformationBarrierSegments;
}
