import { UploadPart } from './uploadPart.generated.js';
import { SerializedData } from '../serialization/json.js';
export type UploadPartsOrderDirectionField = 'ASC' | 'DESC' | string;
export interface UploadPartsOrderField {
    /**
     * The field to order by. */
    readonly by?: string;
    /**
     * The direction to order by, either ascending or descending. */
    readonly direction?: UploadPartsOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface UploadParts {
    /**
     * One greater than the offset of the last entry in the entire collection.
     * The total number of entries in the collection may be less than
     * `total_count`.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly totalCount?: number;
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The 0-based offset of the first entry in this set. This will be the same
     * as the `offset` query parameter.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly offset?: number;
    /**
     * The order by which items are returned.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly order?: readonly UploadPartsOrderField[];
    /**
     * A list of uploaded chunks for an upload
     * session. */
    readonly entries?: readonly UploadPart[];
    readonly rawData?: SerializedData;
}
export declare function serializeUploadPartsOrderDirectionField(val: UploadPartsOrderDirectionField): SerializedData;
export declare function deserializeUploadPartsOrderDirectionField(val: SerializedData): UploadPartsOrderDirectionField;
export declare function serializeUploadPartsOrderField(val: UploadPartsOrderField): SerializedData;
export declare function deserializeUploadPartsOrderField(val: SerializedData): UploadPartsOrderField;
export declare function serializeUploadParts(val: UploadParts): SerializedData;
export declare function deserializeUploadParts(val: SerializedData): UploadParts;
