import { SerializedData } from '../../serialization/json.js';
export type DocGenTagV2025R0TagTypeField = 'text' | 'arithmetic' | 'conditional' | 'for-loop' | 'table-loop' | 'image' | string;
export interface DocGenTagV2025R0 {
    /**
     * The content of the tag. */
    readonly tagContent: string;
    /**
     * Type of the tag. */
    readonly tagType: DocGenTagV2025R0TagTypeField;
    /**
     * List of the paths. */
    readonly jsonPaths: readonly string[];
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenTagV2025R0TagTypeField(val: DocGenTagV2025R0TagTypeField): SerializedData;
export declare function deserializeDocGenTagV2025R0TagTypeField(val: SerializedData): DocGenTagV2025R0TagTypeField;
export declare function serializeDocGenTagV2025R0(val: DocGenTagV2025R0): SerializedData;
export declare function deserializeDocGenTagV2025R0(val: SerializedData): DocGenTagV2025R0;
