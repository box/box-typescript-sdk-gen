import { SerializedData } from '../serialization/json.js';
export type ZipDownloadRequestItemsTypeField = 'file' | 'folder';
export interface ZipDownloadRequestItemsField {
    /**
     * The type of the item to add to the archive. */
    readonly type: ZipDownloadRequestItemsTypeField;
    /**
     * The identifier of the item to add to the archive. When this item is
     * a folder then this can not be the root folder with ID `0`. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface ZipDownloadRequest {
    /**
     * A list of items to add to the `zip` archive. These can
     * be folders or files. */
    readonly items: readonly ZipDownloadRequestItemsField[];
    /**
     * The optional name of the `zip` archive. This name will be appended by the
     * `.zip` file extension, for example `January Financials.zip`. */
    readonly downloadFileName?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeZipDownloadRequestItemsTypeField(val: ZipDownloadRequestItemsTypeField): SerializedData;
export declare function deserializeZipDownloadRequestItemsTypeField(val: SerializedData): ZipDownloadRequestItemsTypeField;
export declare function serializeZipDownloadRequestItemsField(val: ZipDownloadRequestItemsField): SerializedData;
export declare function deserializeZipDownloadRequestItemsField(val: SerializedData): ZipDownloadRequestItemsField;
export declare function serializeZipDownloadRequest(val: ZipDownloadRequest): SerializedData;
export declare function deserializeZipDownloadRequest(val: SerializedData): ZipDownloadRequest;
