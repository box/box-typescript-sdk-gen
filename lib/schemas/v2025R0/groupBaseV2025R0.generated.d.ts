import { SerializedData } from '../../serialization/json.js';
export type GroupBaseV2025R0TypeField = 'group';
export declare class GroupBaseV2025R0 {
    /**
     * The unique identifier for this object. */
    readonly id: string;
    /**
     * The value will always be `group`. */
    readonly type: GroupBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<GroupBaseV2025R0, 'type'> & Partial<Pick<GroupBaseV2025R0, 'type'>>);
}
export interface GroupBaseV2025R0Input {
    /**
     * The unique identifier for this object. */
    readonly id: string;
    /**
     * The value will always be `group`. */
    readonly type?: GroupBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeGroupBaseV2025R0TypeField(val: GroupBaseV2025R0TypeField): SerializedData;
export declare function deserializeGroupBaseV2025R0TypeField(val: SerializedData): GroupBaseV2025R0TypeField;
export declare function serializeGroupBaseV2025R0(val: GroupBaseV2025R0): SerializedData;
export declare function deserializeGroupBaseV2025R0(val: SerializedData): GroupBaseV2025R0;
export declare function serializeGroupBaseV2025R0Input(val: GroupBaseV2025R0Input): SerializedData;
export declare function deserializeGroupBaseV2025R0Input(val: SerializedData): GroupBaseV2025R0Input;
//# sourceMappingURL=groupBaseV2025R0.generated.d.ts.map