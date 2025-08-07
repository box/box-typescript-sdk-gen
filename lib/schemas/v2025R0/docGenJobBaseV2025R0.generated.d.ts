import { SerializedData } from '../../serialization/json.js';
export type DocGenJobBaseV2025R0TypeField = 'docgen_job';
export declare class DocGenJobBaseV2025R0 {
    /**
     * The unique identifier that represent a Box Doc Gen job. */
    readonly id: string;
    /**
     * The value will always be `docgen_job`. */
    readonly type: DocGenJobBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<DocGenJobBaseV2025R0, 'type'> & Partial<Pick<DocGenJobBaseV2025R0, 'type'>>);
}
export interface DocGenJobBaseV2025R0Input {
    /**
     * The unique identifier that represent a Box Doc Gen job. */
    readonly id: string;
    /**
     * The value will always be `docgen_job`. */
    readonly type?: DocGenJobBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenJobBaseV2025R0TypeField(val: DocGenJobBaseV2025R0TypeField): SerializedData;
export declare function deserializeDocGenJobBaseV2025R0TypeField(val: SerializedData): DocGenJobBaseV2025R0TypeField;
export declare function serializeDocGenJobBaseV2025R0(val: DocGenJobBaseV2025R0): SerializedData;
export declare function deserializeDocGenJobBaseV2025R0(val: SerializedData): DocGenJobBaseV2025R0;
export declare function serializeDocGenJobBaseV2025R0Input(val: DocGenJobBaseV2025R0Input): SerializedData;
export declare function deserializeDocGenJobBaseV2025R0Input(val: SerializedData): DocGenJobBaseV2025R0Input;
//# sourceMappingURL=docGenJobBaseV2025R0.generated.d.ts.map