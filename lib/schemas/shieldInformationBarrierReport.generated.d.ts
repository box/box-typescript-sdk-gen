import { ShieldInformationBarrierReportBase } from './shieldInformationBarrierReportBase.generated.js';
import { ShieldInformationBarrierReference } from './shieldInformationBarrierReference.generated.js';
import { ShieldInformationBarrierReportDetails } from './shieldInformationBarrierReportDetails.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierReportStatusField = 'pending' | 'error' | 'done' | 'cancelled' | string;
export type ShieldInformationBarrierReport = ShieldInformationBarrierReportBase & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierReference;
    /**
     * Status of the shield information report. */
    readonly status?: ShieldInformationBarrierReportStatusField;
    readonly details?: ShieldInformationBarrierReportDetails;
    /**
     * ISO date time string when this
     * shield information barrier report object was created. */
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this
     * shield information barrier report was updated. */
    readonly updatedAt?: DateTime;
};
export declare function serializeShieldInformationBarrierReportStatusField(val: ShieldInformationBarrierReportStatusField): SerializedData;
export declare function deserializeShieldInformationBarrierReportStatusField(val: SerializedData): ShieldInformationBarrierReportStatusField;
export declare function serializeShieldInformationBarrierReport(val: ShieldInformationBarrierReport): SerializedData;
export declare function deserializeShieldInformationBarrierReport(val: SerializedData): ShieldInformationBarrierReport;
//# sourceMappingURL=shieldInformationBarrierReport.generated.d.ts.map