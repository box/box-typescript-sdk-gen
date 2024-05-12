import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface ShieldInformationBarrierReportDetailsDetailsField {
  readonly folderId?: string;
}
export interface ShieldInformationBarrierReportDetails {
  readonly details?: ShieldInformationBarrierReportDetailsDetailsField;
}
export function serializeShieldInformationBarrierReportDetailsDetailsField(
  val: ShieldInformationBarrierReportDetailsDetailsField
): SerializedData {
  return { ['folder_id']: val.folderId == void 0 ? void 0 : val.folderId };
}
export function deserializeShieldInformationBarrierReportDetailsDetailsField(
  val: any
): ShieldInformationBarrierReportDetailsDetailsField {
  const folderId: undefined | string =
    val.folder_id == void 0 ? void 0 : val.folder_id;
  return {
    folderId: folderId,
  } satisfies ShieldInformationBarrierReportDetailsDetailsField;
}
export function serializeShieldInformationBarrierReportDetails(
  val: ShieldInformationBarrierReportDetails
): SerializedData {
  return {
    ['details']:
      val.details == void 0
        ? void 0
        : serializeShieldInformationBarrierReportDetailsDetailsField(
            val.details
          ),
  };
}
export function deserializeShieldInformationBarrierReportDetails(
  val: any
): ShieldInformationBarrierReportDetails {
  const details: undefined | ShieldInformationBarrierReportDetailsDetailsField =
    val.details == void 0
      ? void 0
      : deserializeShieldInformationBarrierReportDetailsDetailsField(
          val.details
        );
  return { details: details } satisfies ShieldInformationBarrierReportDetails;
}
