import { SerializedData } from '../serialization/json.js';
export interface MetadataError {
    /**
     * A Box-specific error code. */
    readonly code?: string;
    /**
     * A short message describing the error. */
    readonly message?: string;
    /**
     * A unique identifier for this response, which can be used
     * when contacting Box support. */
    readonly requestId?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeMetadataError(val: MetadataError): SerializedData;
export declare function deserializeMetadataError(val: SerializedData): MetadataError;
//# sourceMappingURL=metadataError.generated.d.ts.map