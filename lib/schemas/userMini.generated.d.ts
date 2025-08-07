import { UserBase } from './userBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export declare class UserMini extends UserBase {
    readonly name?: string;
    readonly login?: string;
    constructor(fields: UserMini);
}
export declare function serializeUserMini(val: UserMini): SerializedData;
export declare function deserializeUserMini(val: SerializedData): UserMini;
//# sourceMappingURL=userMini.generated.d.ts.map