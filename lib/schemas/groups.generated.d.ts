import { GroupFull } from './groupFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export type GroupsOrderDirectionField = 'ASC' | 'DESC' | string;
export interface GroupsOrderField {
    /**
     * The field to order by. */
    readonly by?: string;
    /**
     * The direction to order by, either ascending or descending. */
    readonly direction?: GroupsOrderDirectionField;
    readonly rawData?: SerializedData;
}
export interface Groups {
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
    readonly order?: readonly GroupsOrderField[];
    /**
     * A list of groups. */
    readonly entries?: readonly GroupFull[];
    readonly rawData?: SerializedData;
}
export declare function serializeGroupsOrderDirectionField(val: GroupsOrderDirectionField): SerializedData;
export declare function deserializeGroupsOrderDirectionField(val: SerializedData): GroupsOrderDirectionField;
export declare function serializeGroupsOrderField(val: GroupsOrderField): SerializedData;
export declare function deserializeGroupsOrderField(val: SerializedData): GroupsOrderField;
export declare function serializeGroups(val: Groups): SerializedData;
export declare function deserializeGroups(val: SerializedData): Groups;
//# sourceMappingURL=groups.generated.d.ts.map