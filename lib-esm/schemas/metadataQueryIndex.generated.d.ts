import { SerializedData } from '../serialization/json.js';
export type MetadataQueryIndexStatusField = 'building' | 'active' | 'disabled' | string;
export type MetadataQueryIndexFieldsSortDirectionField = 'asc' | 'desc' | string;
export interface MetadataQueryIndexFieldsField {
    /**
     * The metadata template field key. */
    readonly key?: string;
    /**
     * The sort direction of the field. */
    readonly sortDirection?: MetadataQueryIndexFieldsSortDirectionField;
    readonly rawData?: SerializedData;
}
export interface MetadataQueryIndex {
    /**
     * The ID of the metadata query index. */
    readonly id?: string;
    /**
     * Value is always `metadata_query_index`. */
    readonly type: string;
    /**
     * The status of the metadata query index. */
    readonly status: MetadataQueryIndexStatusField;
    /**
     * A list of template fields which make up the index. */
    readonly fields?: readonly MetadataQueryIndexFieldsField[];
    readonly rawData?: SerializedData;
}
export declare function serializeMetadataQueryIndexStatusField(val: MetadataQueryIndexStatusField): SerializedData;
export declare function deserializeMetadataQueryIndexStatusField(val: SerializedData): MetadataQueryIndexStatusField;
export declare function serializeMetadataQueryIndexFieldsSortDirectionField(val: MetadataQueryIndexFieldsSortDirectionField): SerializedData;
export declare function deserializeMetadataQueryIndexFieldsSortDirectionField(val: SerializedData): MetadataQueryIndexFieldsSortDirectionField;
export declare function serializeMetadataQueryIndexFieldsField(val: MetadataQueryIndexFieldsField): SerializedData;
export declare function deserializeMetadataQueryIndexFieldsField(val: SerializedData): MetadataQueryIndexFieldsField;
export declare function serializeMetadataQueryIndex(val: MetadataQueryIndex): SerializedData;
export declare function deserializeMetadataQueryIndex(val: SerializedData): MetadataQueryIndex;
