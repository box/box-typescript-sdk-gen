import { SerializedData } from '../serialization/json.js';
export interface UploadPartMini {
    /**
     * The unique ID of the chunk. */
    readonly partId?: string;
    /**
     * The offset of the chunk within the file
     * in bytes. The lower bound of the position
     * of the chunk within the file. */
    readonly offset?: number;
    /**
     * The size of the chunk in bytes. */
    readonly size?: number;
    readonly rawData?: SerializedData;
}
export declare function serializeUploadPartMini(val: UploadPartMini): SerializedData;
export declare function deserializeUploadPartMini(val: SerializedData): UploadPartMini;
//# sourceMappingURL=uploadPartMini.generated.d.ts.map