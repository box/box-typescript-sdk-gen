import { SerializedData } from '../serialization/json.js';
export type FileBaseTypeField = 'file';
export declare class FileBase {
    /**
     * The unique identifier that represent a file.
     *
     * The ID for any file can be determined
     * by visiting a file in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/files/123`
     * the `file_id` is `123`. */
    readonly id: string;
    /**
     * The HTTP `etag` of this file. This can be used within some API
     * endpoints in the `If-Match` and `If-None-Match` headers to only
     * perform changes on the file if (no) changes have happened. */
    readonly etag?: string | null;
    /**
     * The value will always be `file`. */
    readonly type: FileBaseTypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<FileBase, 'type'> & Partial<Pick<FileBase, 'type'>>);
}
export interface FileBaseInput {
    /**
     * The unique identifier that represent a file.
     *
     * The ID for any file can be determined
     * by visiting a file in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/files/123`
     * the `file_id` is `123`. */
    readonly id: string;
    /**
     * The HTTP `etag` of this file. This can be used within some API
     * endpoints in the `If-Match` and `If-None-Match` headers to only
     * perform changes on the file if (no) changes have happened. */
    readonly etag?: string | null;
    /**
     * The value will always be `file`. */
    readonly type?: FileBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeFileBaseTypeField(val: FileBaseTypeField): SerializedData;
export declare function deserializeFileBaseTypeField(val: SerializedData): FileBaseTypeField;
export declare function serializeFileBase(val: FileBase): SerializedData;
export declare function deserializeFileBase(val: SerializedData): FileBase;
export declare function serializeFileBaseInput(val: FileBaseInput): SerializedData;
export declare function deserializeFileBaseInput(val: SerializedData): FileBaseInput;
