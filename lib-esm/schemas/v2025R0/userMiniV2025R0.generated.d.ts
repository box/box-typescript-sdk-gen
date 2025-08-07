import { UserBaseV2025R0 } from './userBaseV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export declare class UserMiniV2025R0 extends UserBaseV2025R0 {
    readonly name?: string;
    readonly login?: string;
    constructor(fields: UserMiniV2025R0);
}
export declare function serializeUserMiniV2025R0(val: UserMiniV2025R0): SerializedData;
export declare function deserializeUserMiniV2025R0(val: SerializedData): UserMiniV2025R0;
