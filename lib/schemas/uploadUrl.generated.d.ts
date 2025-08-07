import { SerializedData } from '../serialization/json.js';
export interface UploadUrl {
    /**
     * A URL for an upload session that can be used to upload
     * the file. */
    readonly uploadUrl?: string;
    /**
     * An optional access token to use to upload the file. */
    readonly uploadToken?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeUploadUrl(val: UploadUrl): SerializedData;
export declare function deserializeUploadUrl(val: SerializedData): UploadUrl;
//# sourceMappingURL=uploadUrl.generated.d.ts.map