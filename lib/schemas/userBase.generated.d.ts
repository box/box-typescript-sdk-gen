import { SerializedData } from '../serialization/json.js';
export type UserBaseTypeField = 'user';
export declare class UserBase {
    /**
     * The unique identifier for this user. */
    readonly id: string;
    /**
     * The value will always be `user`. */
    readonly type: UserBaseTypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<UserBase, 'type'> & Partial<Pick<UserBase, 'type'>>);
}
export interface UserBaseInput {
    /**
     * The unique identifier for this user. */
    readonly id: string;
    /**
     * The value will always be `user`. */
    readonly type?: UserBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeUserBaseTypeField(val: UserBaseTypeField): SerializedData;
export declare function deserializeUserBaseTypeField(val: SerializedData): UserBaseTypeField;
export declare function serializeUserBase(val: UserBase): SerializedData;
export declare function deserializeUserBase(val: SerializedData): UserBase;
export declare function serializeUserBaseInput(val: UserBaseInput): SerializedData;
export declare function deserializeUserBaseInput(val: SerializedData): UserBaseInput;
//# sourceMappingURL=userBase.generated.d.ts.map