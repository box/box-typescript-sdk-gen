import { SerializedData } from '../../serialization/json.js';
export type ShieldListContentDomainV2025R0TypeField = 'domain';
export declare class ShieldListContentDomainV2025R0 {
    /**
     * The type of content in the shield list. */
    readonly type: ShieldListContentDomainV2025R0TypeField;
    /**
     * List of domain. */
    readonly domains: readonly string[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<ShieldListContentDomainV2025R0, 'type'> & Partial<Pick<ShieldListContentDomainV2025R0, 'type'>>);
}
export interface ShieldListContentDomainV2025R0Input {
    /**
     * The type of content in the shield list. */
    readonly type?: ShieldListContentDomainV2025R0TypeField;
    /**
     * List of domain. */
    readonly domains: readonly string[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldListContentDomainV2025R0TypeField(val: ShieldListContentDomainV2025R0TypeField): SerializedData;
export declare function deserializeShieldListContentDomainV2025R0TypeField(val: SerializedData): ShieldListContentDomainV2025R0TypeField;
export declare function serializeShieldListContentDomainV2025R0(val: ShieldListContentDomainV2025R0): SerializedData;
export declare function deserializeShieldListContentDomainV2025R0(val: SerializedData): ShieldListContentDomainV2025R0;
export declare function serializeShieldListContentDomainV2025R0Input(val: ShieldListContentDomainV2025R0Input): SerializedData;
export declare function deserializeShieldListContentDomainV2025R0Input(val: SerializedData): ShieldListContentDomainV2025R0Input;
//# sourceMappingURL=shieldListContentDomainV2025R0.generated.d.ts.map