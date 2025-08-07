import { CollaboratorVariable } from './collaboratorVariable.generated.js';
import { CompletionRuleVariable } from './completionRuleVariable.generated.js';
import { RoleVariable } from './roleVariable.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Outcome {
    /**
     * ID of a specific outcome. */
    readonly id: string;
    readonly collaborators?: CollaboratorVariable;
    readonly completionRule?: CompletionRuleVariable;
    readonly fileCollaboratorRole?: RoleVariable;
    readonly taskCollaborators?: CollaboratorVariable;
    readonly role?: RoleVariable;
    readonly rawData?: SerializedData;
}
export declare function serializeOutcome(val: Outcome): SerializedData;
export declare function deserializeOutcome(val: SerializedData): Outcome;
//# sourceMappingURL=outcome.generated.d.ts.map