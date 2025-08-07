import { SerializedData } from '../../serialization/json.js';
export interface DocGenDocumentGenerationDataV2025R0 {
    /**
     * File name of the output file. */
    readonly generatedFileName: string;
    readonly userInput: {
        readonly [key: string]: any;
    };
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenDocumentGenerationDataV2025R0(val: DocGenDocumentGenerationDataV2025R0): SerializedData;
export declare function deserializeDocGenDocumentGenerationDataV2025R0(val: SerializedData): DocGenDocumentGenerationDataV2025R0;
