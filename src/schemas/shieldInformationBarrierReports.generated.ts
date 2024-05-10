import { serializeShieldInformationBarrierReport } from './shieldInformationBarrierReport.generated.js';
import { deserializeShieldInformationBarrierReport } from './shieldInformationBarrierReport.generated.js';
import { ShieldInformationBarrierReport } from './shieldInformationBarrierReport.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface ShieldInformationBarrierReports {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly ShieldInformationBarrierReport[];
}
export function serializeShieldInformationBarrierReports(
  val: ShieldInformationBarrierReports
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: ShieldInformationBarrierReport
          ): SerializedData {
            return serializeShieldInformationBarrierReport(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldInformationBarrierReports(
  val: any
): ShieldInformationBarrierReports {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly ShieldInformationBarrierReport[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): ShieldInformationBarrierReport {
          return deserializeShieldInformationBarrierReport(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies ShieldInformationBarrierReports;
}
