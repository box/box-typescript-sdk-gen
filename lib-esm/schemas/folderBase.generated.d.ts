import { SerializedData } from '../serialization/json.js';
export type FolderBaseTypeField = 'folder';
export declare class FolderBase {
    /**
     * The unique identifier that represent a folder.
     *
     * The ID for any folder can be determined
     * by visiting a folder in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/folders/123`
     * the `folder_id` is `123`. */
    readonly id: string;
    /**
     * The HTTP `etag` of this folder. This can be used within some API
     * endpoints in the `If-Match` and `If-None-Match` headers to only
     * perform changes on the folder if (no) changes have happened. */
    readonly etag?: string | null;
    /**
     * The value will always be `folder`. */
    readonly type: FolderBaseTypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<FolderBase, 'type'> & Partial<Pick<FolderBase, 'type'>>);
}
export interface FolderBaseInput {
    /**
     * The unique identifier that represent a folder.
     *
     * The ID for any folder can be determined
     * by visiting a folder in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/folders/123`
     * the `folder_id` is `123`. */
    readonly id: string;
    /**
     * The HTTP `etag` of this folder. This can be used within some API
     * endpoints in the `If-Match` and `If-None-Match` headers to only
     * perform changes on the folder if (no) changes have happened. */
    readonly etag?: string | null;
    /**
     * The value will always be `folder`. */
    readonly type?: FolderBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeFolderBaseTypeField(val: FolderBaseTypeField): SerializedData;
export declare function deserializeFolderBaseTypeField(val: SerializedData): FolderBaseTypeField;
export declare function serializeFolderBase(val: FolderBase): SerializedData;
export declare function deserializeFolderBase(val: SerializedData): FolderBase;
export declare function serializeFolderBaseInput(val: FolderBaseInput): SerializedData;
export declare function deserializeFolderBaseInput(val: SerializedData): FolderBaseInput;
