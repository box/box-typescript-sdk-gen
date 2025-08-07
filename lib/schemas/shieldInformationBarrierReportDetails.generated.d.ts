import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierReportDetailsDetailsField {
    /**
     * Folder ID for locating this report. */
    readonly folderId?: string;
    readonly rawData?: SerializedData;
}
export interface ShieldInformationBarrierReportDetails {
    readonly details?: ShieldInformationBarrierReportDetailsDetailsField;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierReportDetailsDetailsField(val: ShieldInformationBarrierReportDetailsDetailsField): SerializedData;
export declare function deserializeShieldInformationBarrierReportDetailsDetailsField(val: SerializedData): ShieldInformationBarrierReportDetailsDetailsField;
export declare function serializeShieldInformationBarrierReportDetails(val: ShieldInformationBarrierReportDetails): SerializedData;
export declare function deserializeShieldInformationBarrierReportDetails(val: SerializedData): ShieldInformationBarrierReportDetails;
//# sourceMappingURL=shieldInformationBarrierReportDetails.generated.d.ts.map