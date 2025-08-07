import { UserFull } from './userFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export type UsersOrderDirectionField = 'ASC' | 'DESC' | string;
export interface UsersOrderField {
    /**
     * The field to order by. */
    readonly by?: string;
    /**
     * The direction to order by, either ascending or descending. */
    readonly direction?: UsersOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface Users {
    /**
     * The limit that was used for these entries. This will be the same as the
     * `limit` query parameter unless that value exceeded the maximum value
     * allowed. The maximum value varies by API. */
    readonly limit?: number;
    /**
     * The marker for the start of the next page of results. */
    readonly nextMarker?: string | null;
    /**
     * The marker for the start of the previous page of results. */
    readonly prevMarker?: string | null;
    /**
     * One greater than the offset of the last entry in the entire collection.
     * The total number of entries in the collection may be less than
     * `total_count`.
     *
     * This field is only returned for calls that use offset-based pagination.
     * For marker-based paginated APIs, this field will be omitted. */
    readonly totalCount?: number;
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
    readonly order?: readonly UsersOrderField[];
    /**
     * A list of users. */
    readonly entries?: readonly UserFull[];
    readonly rawData?: SerializedData;
}
export declare function serializeUsersOrderDirectionField(val: UsersOrderDirectionField): SerializedData;
export declare function deserializeUsersOrderDirectionField(val: SerializedData): UsersOrderDirectionField;
export declare function serializeUsersOrderField(val: UsersOrderField): SerializedData;
export declare function deserializeUsersOrderField(val: SerializedData): UsersOrderField;
export declare function serializeUsers(val: Users): SerializedData;
export declare function deserializeUsers(val: SerializedData): Users;
