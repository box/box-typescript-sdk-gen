import { UserBase } from './userBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export declare class UserIntegrationMappings extends UserBase {
    readonly name?: string;
    readonly login?: string;
    constructor(fields: UserIntegrationMappings);
}
export declare function serializeUserIntegrationMappings(val: UserIntegrationMappings): SerializedData;
export declare function deserializeUserIntegrationMappings(val: SerializedData): UserIntegrationMappings;
//# sourceMappingURL=userIntegrationMappings.generated.d.ts.map