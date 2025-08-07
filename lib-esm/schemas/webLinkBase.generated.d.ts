import { SerializedData } from '../serialization/json.js';
export type WebLinkBaseTypeField = 'web_link';
export declare class WebLinkBase {
    /**
     * The unique identifier for this web link. */
    readonly id: string;
    /**
     * The value will always be `web_link`. */
    readonly type: WebLinkBaseTypeField;
    /**
     * The entity tag of this web link. Used with `If-Match`
     * headers. */
    readonly etag?: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<WebLinkBase, 'type'> & Partial<Pick<WebLinkBase, 'type'>>);
}
export interface WebLinkBaseInput {
    /**
     * The unique identifier for this web link. */
    readonly id: string;
    /**
     * The value will always be `web_link`. */
    readonly type?: WebLinkBaseTypeField;
    /**
     * The entity tag of this web link. Used with `If-Match`
     * headers. */
    readonly etag?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeWebLinkBaseTypeField(val: WebLinkBaseTypeField): SerializedData;
export declare function deserializeWebLinkBaseTypeField(val: SerializedData): WebLinkBaseTypeField;
export declare function serializeWebLinkBase(val: WebLinkBase): SerializedData;
export declare function deserializeWebLinkBase(val: SerializedData): WebLinkBase;
export declare function serializeWebLinkBaseInput(val: WebLinkBaseInput): SerializedData;
export declare function deserializeWebLinkBaseInput(val: SerializedData): WebLinkBaseInput;
