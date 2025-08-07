import { SerializedData } from '../../serialization/json.js';
export type FolderReferenceV2025R0TypeField = 'folder';
export declare class FolderReferenceV2025R0 {
    /**
     * The value will always be `folder`. */
    readonly type: FolderReferenceV2025R0TypeField;
    /**
     * ID of the folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<FolderReferenceV2025R0, 'type'> & Partial<Pick<FolderReferenceV2025R0, 'type'>>);
}
export interface FolderReferenceV2025R0Input {
    /**
     * The value will always be `folder`. */
    readonly type?: FolderReferenceV2025R0TypeField;
    /**
     * ID of the folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export declare function serializeFolderReferenceV2025R0TypeField(val: FolderReferenceV2025R0TypeField): SerializedData;
export declare function deserializeFolderReferenceV2025R0TypeField(val: SerializedData): FolderReferenceV2025R0TypeField;
export declare function serializeFolderReferenceV2025R0(val: FolderReferenceV2025R0): SerializedData;
export declare function deserializeFolderReferenceV2025R0(val: SerializedData): FolderReferenceV2025R0;
export declare function serializeFolderReferenceV2025R0Input(val: FolderReferenceV2025R0Input): SerializedData;
export declare function deserializeFolderReferenceV2025R0Input(val: SerializedData): FolderReferenceV2025R0Input;
