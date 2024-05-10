import { serializeShieldInformationBarrier } from './shieldInformationBarrier.generated.js';
import { deserializeShieldInformationBarrier } from './shieldInformationBarrier.generated.js';
import { ShieldInformationBarrier } from './shieldInformationBarrier.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface ShieldInformationBarriers {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly ShieldInformationBarrier[];
}
export function serializeShieldInformationBarriers(
  val: ShieldInformationBarriers
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: ShieldInformationBarrier
          ): SerializedData {
            return serializeShieldInformationBarrier(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldInformationBarriers(
  val: any
): ShieldInformationBarriers {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly ShieldInformationBarrier[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): ShieldInformationBarrier {
          return deserializeShieldInformationBarrier(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies ShieldInformationBarriers;
}
