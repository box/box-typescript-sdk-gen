import { SerializedData } from '../../serialization/json.js';
export type WeblinkReferenceV2025R0TypeField = 'weblink';
export declare class WeblinkReferenceV2025R0 {
    /**
     * The value will always be `weblink`. */
    readonly type: WeblinkReferenceV2025R0TypeField;
    /**
     * ID of the weblink. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<WeblinkReferenceV2025R0, 'type'> & Partial<Pick<WeblinkReferenceV2025R0, 'type'>>);
}
export interface WeblinkReferenceV2025R0Input {
    /**
     * The value will always be `weblink`. */
    readonly type?: WeblinkReferenceV2025R0TypeField;
    /**
     * ID of the weblink. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export declare function serializeWeblinkReferenceV2025R0TypeField(val: WeblinkReferenceV2025R0TypeField): SerializedData;
export declare function deserializeWeblinkReferenceV2025R0TypeField(val: SerializedData): WeblinkReferenceV2025R0TypeField;
export declare function serializeWeblinkReferenceV2025R0(val: WeblinkReferenceV2025R0): SerializedData;
export declare function deserializeWeblinkReferenceV2025R0(val: SerializedData): WeblinkReferenceV2025R0;
export declare function serializeWeblinkReferenceV2025R0Input(val: WeblinkReferenceV2025R0Input): SerializedData;
export declare function deserializeWeblinkReferenceV2025R0Input(val: SerializedData): WeblinkReferenceV2025R0Input;
//# sourceMappingURL=weblinkReferenceV2025R0.generated.d.ts.map