import { EnterpriseBase } from './enterpriseBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierTypeField = 'shield_information_barrier';
export type ShieldInformationBarrierStatusField = 'draft' | 'pending' | 'disabled' | 'enabled' | 'invalid' | string;
export interface ShieldInformationBarrier {
    /**
     * The unique identifier for the shield information barrier. */
    readonly id?: string;
    /**
     * The type of the shield information barrier. */
    readonly type?: ShieldInformationBarrierTypeField;
    /**
     * The `type` and `id` of enterprise this barrier is under. */
    readonly enterprise?: EnterpriseBase;
    /**
     * Status of the shield information barrier. */
    readonly status?: ShieldInformationBarrierStatusField;
    /**
     * ISO date time string when this
     * shield information barrier object was created. */
    readonly createdAt?: DateTime;
    /**
     * The user who created this shield information barrier. */
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this shield information barrier was updated. */
    readonly updatedAt?: DateTime;
    /**
     * The user that updated this shield information barrier. */
    readonly updatedBy?: UserBase;
    /**
     * ISO date time string when this shield information barrier was enabled. */
    readonly enabledAt?: DateTime;
    readonly enabledBy?: UserBase;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierTypeField(val: ShieldInformationBarrierTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierTypeField(val: SerializedData): ShieldInformationBarrierTypeField;
export declare function serializeShieldInformationBarrierStatusField(val: ShieldInformationBarrierStatusField): SerializedData;
export declare function deserializeShieldInformationBarrierStatusField(val: SerializedData): ShieldInformationBarrierStatusField;
export declare function serializeShieldInformationBarrier(val: ShieldInformationBarrier): SerializedData;
export declare function deserializeShieldInformationBarrier(val: SerializedData): ShieldInformationBarrier;
