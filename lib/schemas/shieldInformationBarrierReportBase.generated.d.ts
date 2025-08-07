import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierReportBaseTypeField = 'shield_information_barrier_report';
export interface ShieldInformationBarrierReportBase {
    /**
     * The unique identifier for the shield information barrier report. */
    readonly id?: string;
    /**
     * The type of the shield information barrier report. */
    readonly type?: ShieldInformationBarrierReportBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierReportBaseTypeField(val: ShieldInformationBarrierReportBaseTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierReportBaseTypeField(val: SerializedData): ShieldInformationBarrierReportBaseTypeField;
export declare function serializeShieldInformationBarrierReportBase(val: ShieldInformationBarrierReportBase): SerializedData;
export declare function deserializeShieldInformationBarrierReportBase(val: SerializedData): ShieldInformationBarrierReportBase;
//# sourceMappingURL=shieldInformationBarrierReportBase.generated.d.ts.map