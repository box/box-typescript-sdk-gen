import { SerializedData } from '../serialization/json.js';
export type FolderReferenceTypeField = 'folder';
export declare class FolderReference {
    /**
     * The value will always be `folder`. */
    readonly type: FolderReferenceTypeField;
    /**
     * ID of the folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<FolderReference, 'type'> & Partial<Pick<FolderReference, 'type'>>);
}
export interface FolderReferenceInput {
    /**
     * The value will always be `folder`. */
    readonly type?: FolderReferenceTypeField;
    /**
     * ID of the folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export declare function serializeFolderReferenceTypeField(val: FolderReferenceTypeField): SerializedData;
export declare function deserializeFolderReferenceTypeField(val: SerializedData): FolderReferenceTypeField;
export declare function serializeFolderReference(val: FolderReference): SerializedData;
export declare function deserializeFolderReference(val: SerializedData): FolderReference;
export declare function serializeFolderReferenceInput(val: FolderReferenceInput): SerializedData;
export declare function deserializeFolderReferenceInput(val: SerializedData): FolderReferenceInput;
