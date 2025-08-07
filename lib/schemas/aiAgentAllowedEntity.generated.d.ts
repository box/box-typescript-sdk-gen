import { UserBase } from './userBase.generated.js';
import { GroupBase } from './groupBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiAgentAllowedEntity = UserBase | GroupBase;
export declare function serializeAiAgentAllowedEntity(val: any): SerializedData;
export declare function deserializeAiAgentAllowedEntity(val: SerializedData): AiAgentAllowedEntity;
//# sourceMappingURL=aiAgentAllowedEntity.generated.d.ts.map