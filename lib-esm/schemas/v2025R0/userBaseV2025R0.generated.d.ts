import { SerializedData } from '../../serialization/json.js';
export type UserBaseV2025R0TypeField = 'user';
export declare class UserBaseV2025R0 {
    /**
     * The unique identifier for this user. */
    readonly id: string;
    /**
     * The value will always be `user`. */
    readonly type: UserBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<UserBaseV2025R0, 'type'> & Partial<Pick<UserBaseV2025R0, 'type'>>);
}
export interface UserBaseV2025R0Input {
    /**
     * The unique identifier for this user. */
    readonly id: string;
    /**
     * The value will always be `user`. */
    readonly type?: UserBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeUserBaseV2025R0TypeField(val: UserBaseV2025R0TypeField): SerializedData;
export declare function deserializeUserBaseV2025R0TypeField(val: SerializedData): UserBaseV2025R0TypeField;
export declare function serializeUserBaseV2025R0(val: UserBaseV2025R0): SerializedData;
export declare function deserializeUserBaseV2025R0(val: SerializedData): UserBaseV2025R0;
export declare function serializeUserBaseV2025R0Input(val: UserBaseV2025R0Input): SerializedData;
export declare function deserializeUserBaseV2025R0Input(val: SerializedData): UserBaseV2025R0Input;
