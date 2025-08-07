import { UserBase } from './userBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export declare class UserCollaborations extends UserBase {
    readonly name?: string;
    readonly login?: string;
    readonly isActive?: boolean;
    constructor(fields: UserCollaborations);
}
export declare function serializeUserCollaborations(val: UserCollaborations): SerializedData;
export declare function deserializeUserCollaborations(val: SerializedData): UserCollaborations;
//# sourceMappingURL=userCollaborations.generated.d.ts.map