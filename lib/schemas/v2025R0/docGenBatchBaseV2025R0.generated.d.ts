import { SerializedData } from '../../serialization/json.js';
export type DocGenBatchBaseV2025R0TypeField = 'docgen_batch';
export declare class DocGenBatchBaseV2025R0 {
    /**
     * The unique identifier that represents a Box Doc Gen batch. */
    readonly id: string;
    /**
     * The value will always be `docgen_batch`. */
    readonly type: DocGenBatchBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<DocGenBatchBaseV2025R0, 'type'> & Partial<Pick<DocGenBatchBaseV2025R0, 'type'>>);
}
export interface DocGenBatchBaseV2025R0Input {
    /**
     * The unique identifier that represents a Box Doc Gen batch. */
    readonly id: string;
    /**
     * The value will always be `docgen_batch`. */
    readonly type?: DocGenBatchBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenBatchBaseV2025R0TypeField(val: DocGenBatchBaseV2025R0TypeField): SerializedData;
export declare function deserializeDocGenBatchBaseV2025R0TypeField(val: SerializedData): DocGenBatchBaseV2025R0TypeField;
export declare function serializeDocGenBatchBaseV2025R0(val: DocGenBatchBaseV2025R0): SerializedData;
export declare function deserializeDocGenBatchBaseV2025R0(val: SerializedData): DocGenBatchBaseV2025R0;
export declare function serializeDocGenBatchBaseV2025R0Input(val: DocGenBatchBaseV2025R0Input): SerializedData;
export declare function deserializeDocGenBatchBaseV2025R0Input(val: SerializedData): DocGenBatchBaseV2025R0Input;
//# sourceMappingURL=docGenBatchBaseV2025R0.generated.d.ts.map