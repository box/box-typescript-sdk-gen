import { BoxClientInput } from '../client.generated.js';
import { StoragePolicyAssignment } from '../schemas/storagePolicyAssignment.generated.js';
export declare const adminUserId: string;
export declare function getOrCreateStoragePolicyAssignment(clientInput: BoxClientInput, policyId: string, userId: string): Promise<StoragePolicyAssignment>;
export {};
