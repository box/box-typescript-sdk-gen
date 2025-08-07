import { SerializedData } from '../../serialization/json.js';
export type ShieldListContentIntegrationV2025R0TypeField = 'integration';
export interface ShieldListContentIntegrationV2025R0IntegrationsField {
    /**
     * The ID of the integration. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export declare class ShieldListContentIntegrationV2025R0 {
    /**
     * The type of content in the shield list. */
    readonly type: ShieldListContentIntegrationV2025R0TypeField;
    /**
     * List of integration. */
    readonly integrations: readonly ShieldListContentIntegrationV2025R0IntegrationsField[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<ShieldListContentIntegrationV2025R0, 'type'> & Partial<Pick<ShieldListContentIntegrationV2025R0, 'type'>>);
}
export interface ShieldListContentIntegrationV2025R0Input {
    /**
     * The type of content in the shield list. */
    readonly type?: ShieldListContentIntegrationV2025R0TypeField;
    /**
     * List of integration. */
    readonly integrations: readonly ShieldListContentIntegrationV2025R0IntegrationsField[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldListContentIntegrationV2025R0TypeField(val: ShieldListContentIntegrationV2025R0TypeField): SerializedData;
export declare function deserializeShieldListContentIntegrationV2025R0TypeField(val: SerializedData): ShieldListContentIntegrationV2025R0TypeField;
export declare function serializeShieldListContentIntegrationV2025R0IntegrationsField(val: ShieldListContentIntegrationV2025R0IntegrationsField): SerializedData;
export declare function deserializeShieldListContentIntegrationV2025R0IntegrationsField(val: SerializedData): ShieldListContentIntegrationV2025R0IntegrationsField;
export declare function serializeShieldListContentIntegrationV2025R0(val: ShieldListContentIntegrationV2025R0): SerializedData;
export declare function deserializeShieldListContentIntegrationV2025R0(val: SerializedData): ShieldListContentIntegrationV2025R0;
export declare function serializeShieldListContentIntegrationV2025R0Input(val: ShieldListContentIntegrationV2025R0Input): SerializedData;
export declare function deserializeShieldListContentIntegrationV2025R0Input(val: SerializedData): ShieldListContentIntegrationV2025R0Input;
