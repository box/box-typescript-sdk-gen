import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingBaseTypeField = 'integration_mapping';
export declare class IntegrationMappingBase {
    /**
     * A unique identifier of a folder mapping
     * (part of a composite key together
     * with `integration_type`). */
    readonly id: string;
    /**
     * Mapping type. */
    readonly type: IntegrationMappingBaseTypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<IntegrationMappingBase, 'type'> & Partial<Pick<IntegrationMappingBase, 'type'>>);
}
export interface IntegrationMappingBaseInput {
    /**
     * A unique identifier of a folder mapping
     * (part of a composite key together
     * with `integration_type`). */
    readonly id: string;
    /**
     * Mapping type. */
    readonly type?: IntegrationMappingBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeIntegrationMappingBaseTypeField(val: IntegrationMappingBaseTypeField): SerializedData;
export declare function deserializeIntegrationMappingBaseTypeField(val: SerializedData): IntegrationMappingBaseTypeField;
export declare function serializeIntegrationMappingBase(val: IntegrationMappingBase): SerializedData;
export declare function deserializeIntegrationMappingBase(val: SerializedData): IntegrationMappingBase;
export declare function serializeIntegrationMappingBaseInput(val: IntegrationMappingBaseInput): SerializedData;
export declare function deserializeIntegrationMappingBaseInput(val: SerializedData): IntegrationMappingBaseInput;
//# sourceMappingURL=integrationMappingBase.generated.d.ts.map