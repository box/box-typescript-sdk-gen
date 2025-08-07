import { SerializedData } from '../serialization/json.js';
export type GroupBaseTypeField = 'group';
export declare class GroupBase {
    /**
     * The unique identifier for this object. */
    readonly id: string;
    /**
     * The value will always be `group`. */
    readonly type: GroupBaseTypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<GroupBase, 'type'> & Partial<Pick<GroupBase, 'type'>>);
}
export interface GroupBaseInput {
    /**
     * The unique identifier for this object. */
    readonly id: string;
    /**
     * The value will always be `group`. */
    readonly type?: GroupBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeGroupBaseTypeField(val: GroupBaseTypeField): SerializedData;
export declare function deserializeGroupBaseTypeField(val: SerializedData): GroupBaseTypeField;
export declare function serializeGroupBase(val: GroupBase): SerializedData;
export declare function deserializeGroupBase(val: SerializedData): GroupBase;
export declare function serializeGroupBaseInput(val: GroupBaseInput): SerializedData;
export declare function deserializeGroupBaseInput(val: SerializedData): GroupBaseInput;
