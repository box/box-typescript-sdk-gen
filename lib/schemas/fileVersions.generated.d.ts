import { FileVersionFull } from './fileVersionFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export type FileVersionsOrderDirectionField = 'ASC' | 'DESC' | string;
export interface FileVersionsOrderField {
    /**
     * The field to order by. */
    readonly by?: string;
    /**
     * The direction to order by, either ascending or descending. */
    readonly direction?: FileVersionsOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface FileVersions {
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
    readonly order?: readonly FileVersionsOrderField[];
    /**
     * A list of file versions. */
    readonly entries?: readonly FileVersionFull[];
    readonly rawData?: SerializedData;
}
export declare function serializeFileVersionsOrderDirectionField(val: FileVersionsOrderDirectionField): SerializedData;
export declare function deserializeFileVersionsOrderDirectionField(val: SerializedData): FileVersionsOrderDirectionField;
export declare function serializeFileVersionsOrderField(val: FileVersionsOrderField): SerializedData;
export declare function deserializeFileVersionsOrderField(val: SerializedData): FileVersionsOrderField;
export declare function serializeFileVersions(val: FileVersions): SerializedData;
export declare function deserializeFileVersions(val: SerializedData): FileVersions;
//# sourceMappingURL=fileVersions.generated.d.ts.map