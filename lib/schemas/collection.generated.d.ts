import { SerializedData } from '../serialization/json.js';
export type CollectionTypeField = 'collection';
export type CollectionNameField = 'Favorites' | string;
export type CollectionCollectionTypeField = 'favorites' | string;
export interface Collection {
    /**
     * The unique identifier for this collection. */
    readonly id?: string;
    /**
     * The value will always be `collection`. */
    readonly type?: CollectionTypeField;
    /**
     * The name of the collection. */
    readonly name?: CollectionNameField;
    /**
     * The type of the collection. This is used to
     * determine the proper visual treatment for
     * collections. */
    readonly collectionType?: CollectionCollectionTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeCollectionTypeField(val: CollectionTypeField): SerializedData;
export declare function deserializeCollectionTypeField(val: SerializedData): CollectionTypeField;
export declare function serializeCollectionNameField(val: CollectionNameField): SerializedData;
export declare function deserializeCollectionNameField(val: SerializedData): CollectionNameField;
export declare function serializeCollectionCollectionTypeField(val: CollectionCollectionTypeField): SerializedData;
export declare function deserializeCollectionCollectionTypeField(val: SerializedData): CollectionCollectionTypeField;
export declare function serializeCollection(val: Collection): SerializedData;
export declare function deserializeCollection(val: SerializedData): Collection;
//# sourceMappingURL=collection.generated.d.ts.map