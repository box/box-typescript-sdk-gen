import { FileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { FileVersionBaseV2025R0 } from './fileVersionBaseV2025R0.generated.js';
import { DocGenDocumentGenerationDataV2025R0 } from './docGenDocumentGenerationDataV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export type DocGenBatchCreateRequestV2025R0DestinationFolderTypeField = 'folder';
export declare class DocGenBatchCreateRequestV2025R0DestinationFolderField {
    /**
     * The value will always be `folder`. */
    readonly type: DocGenBatchCreateRequestV2025R0DestinationFolderTypeField;
    /**
     * ID of the folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<DocGenBatchCreateRequestV2025R0DestinationFolderField, 'type'> & Partial<Pick<DocGenBatchCreateRequestV2025R0DestinationFolderField, 'type'>>);
}
export interface DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput {
    /**
     * The value will always be `folder`. */
    readonly type?: DocGenBatchCreateRequestV2025R0DestinationFolderTypeField;
    /**
     * ID of the folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface DocGenBatchCreateRequestV2025R0 {
    readonly file: FileReferenceV2025R0;
    readonly fileVersion?: FileVersionBaseV2025R0;
    /**
     * Source of input. The value has to be `api` for all the API-based document generation requests. */
    readonly inputSource: string;
    readonly destinationFolder: DocGenBatchCreateRequestV2025R0DestinationFolderField;
    /**
     * Type of the output file. */
    readonly outputType: string;
    readonly documentGenerationData: readonly DocGenDocumentGenerationDataV2025R0[];
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val: DocGenBatchCreateRequestV2025R0DestinationFolderTypeField): SerializedData;
export declare function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val: SerializedData): DocGenBatchCreateRequestV2025R0DestinationFolderTypeField;
export declare function serializeDocGenBatchCreateRequestV2025R0DestinationFolderField(val: DocGenBatchCreateRequestV2025R0DestinationFolderField): SerializedData;
export declare function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderField(val: SerializedData): DocGenBatchCreateRequestV2025R0DestinationFolderField;
export declare function serializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput(val: DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput): SerializedData;
export declare function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput(val: SerializedData): DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput;
export declare function serializeDocGenBatchCreateRequestV2025R0(val: DocGenBatchCreateRequestV2025R0): SerializedData;
export declare function deserializeDocGenBatchCreateRequestV2025R0(val: SerializedData): DocGenBatchCreateRequestV2025R0;
//# sourceMappingURL=docGenBatchCreateRequestV2025R0.generated.d.ts.map