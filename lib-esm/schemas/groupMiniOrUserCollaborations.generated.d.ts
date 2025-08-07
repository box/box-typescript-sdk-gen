import { GroupMini } from './groupMini.generated.js';
import { UserCollaborations } from './userCollaborations.generated.js';
import { SerializedData } from '../serialization/json.js';
export type GroupMiniOrUserCollaborations = GroupMini | UserCollaborations;
export declare function serializeGroupMiniOrUserCollaborations(val: any): SerializedData;
export declare function deserializeGroupMiniOrUserCollaborations(val: SerializedData): GroupMiniOrUserCollaborations;
