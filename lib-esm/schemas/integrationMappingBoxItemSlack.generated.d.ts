import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingBoxItemSlackTypeField = 'folder';
export declare class IntegrationMappingBoxItemSlack {
    /**
     * Type of the mapped item referenced in `id`. */
    readonly type: IntegrationMappingBoxItemSlackTypeField;
    /**
     * ID of the mapped item (of type referenced in `type`). */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<IntegrationMappingBoxItemSlack, 'type'> & Partial<Pick<IntegrationMappingBoxItemSlack, 'type'>>);
}
export interface IntegrationMappingBoxItemSlackInput {
    /**
     * Type of the mapped item referenced in `id`. */
    readonly type?: IntegrationMappingBoxItemSlackTypeField;
    /**
     * ID of the mapped item (of type referenced in `type`). */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export declare function serializeIntegrationMappingBoxItemSlackTypeField(val: IntegrationMappingBoxItemSlackTypeField): SerializedData;
export declare function deserializeIntegrationMappingBoxItemSlackTypeField(val: SerializedData): IntegrationMappingBoxItemSlackTypeField;
export declare function serializeIntegrationMappingBoxItemSlack(val: IntegrationMappingBoxItemSlack): SerializedData;
export declare function deserializeIntegrationMappingBoxItemSlack(val: SerializedData): IntegrationMappingBoxItemSlack;
export declare function serializeIntegrationMappingBoxItemSlackInput(val: IntegrationMappingBoxItemSlackInput): SerializedData;
export declare function deserializeIntegrationMappingBoxItemSlackInput(val: SerializedData): IntegrationMappingBoxItemSlackInput;
