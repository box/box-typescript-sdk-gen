import { SerializedData } from '../serialization/json.js';
export type MetadataQueryOrderByDirectionField = 'ASC' | 'DESC' | string;
export interface MetadataQueryOrderByField {
    /**
     * The metadata template field to order by.
     *
     * The `field_key` represents the `key` value of a field from the
     * metadata template being searched for. */
    readonly fieldKey?: string;
    /**
     * The direction to order by, either ascending or descending.
     *
     * The `ordering` direction must be the same for each item in the
     * array. */
    readonly direction?: MetadataQueryOrderByDirectionField;
    readonly rawData?: SerializedData;
}
export interface MetadataQuery {
    /**
     * Specifies the template used in the query. Must be in the form
     * `scope.templateKey`. Not all templates can be used in this field,
     * most notably the built-in, Box-provided classification templates
     * can not be used in a query. */
    readonly from: string;
    /**
     * The query to perform. A query is a logical expression that is very similar
     * to a SQL `SELECT` statement. Values in the search query can be turned into
     * parameters specified in the `query_param` arguments list to prevent having
     * to manually insert search values into the query string.
     *
     * For example, a value of `:amount` would represent the `amount` value in
     * `query_params` object. */
    readonly query?: string;
    /**
     * Set of arguments corresponding to the parameters specified in the
     * `query`. The type of each parameter used in the `query_params` must match
     * the type of the corresponding metadata template field. */
    readonly queryParams?: {
        readonly [key: string]: any;
    };
    /**
     * The ID of the folder that you are restricting the query to. A
     * value of zero will return results from all folders you have access
     * to. A non-zero value will only return results found in the folder
     * corresponding to the ID or in any of its subfolders. */
    readonly ancestorFolderId: string;
    /**
     * A list of template fields and directions to sort the metadata query
     * results by.
     *
     * The ordering `direction` must be the same for each item in the array. */
    readonly orderBy?: readonly MetadataQueryOrderByField[];
    /**
     * A value between 0 and 100 that indicates the maximum number of results
     * to return for a single request. This only specifies a maximum
     * boundary and will not guarantee the minimum number of results
     * returned. */
    readonly limit?: number;
    /**
     * Marker to use for requesting the next page. */
    readonly marker?: string;
    /**
     * By default, this endpoint returns only the most basic info about the items for
     * which the query matches. This attribute can be used to specify a list of
     * additional attributes to return for any item, including its metadata.
     *
     * This attribute takes a list of item fields, metadata template identifiers,
     * or metadata template field identifiers.
     *
     * For example:
     *
     * * `created_by` will add the details of the user who created the item to
     * the response.
     * * `metadata.<scope>.<templateKey>` will return the mini-representation
     * of the metadata instance identified by the `scope` and `templateKey`.
     * * `metadata.<scope>.<templateKey>.<field>` will return all the mini-representation
     * of the metadata instance identified by the `scope` and `templateKey` plus
     * the field specified by the `field` name. Multiple fields for the same
     * `scope` and `templateKey` can be defined. */
    readonly fields?: readonly string[];
    readonly rawData?: SerializedData;
}
export declare function serializeMetadataQueryOrderByDirectionField(val: MetadataQueryOrderByDirectionField): SerializedData;
export declare function deserializeMetadataQueryOrderByDirectionField(val: SerializedData): MetadataQueryOrderByDirectionField;
export declare function serializeMetadataQueryOrderByField(val: MetadataQueryOrderByField): SerializedData;
export declare function deserializeMetadataQueryOrderByField(val: SerializedData): MetadataQueryOrderByField;
export declare function serializeMetadataQuery(val: MetadataQuery): SerializedData;
export declare function deserializeMetadataQuery(val: SerializedData): MetadataQuery;
//# sourceMappingURL=metadataQuery.generated.d.ts.map