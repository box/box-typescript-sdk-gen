import { serializeCollaboratorVariable } from './collaboratorVariable.generated.js';
import { deserializeCollaboratorVariable } from './collaboratorVariable.generated.js';
import { serializeCompletionRuleVariable } from './completionRuleVariable.generated.js';
import { deserializeCompletionRuleVariable } from './completionRuleVariable.generated.js';
import { serializeRoleVariable } from './roleVariable.generated.js';
import { deserializeRoleVariable } from './roleVariable.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeOutcome(val) {
    return {
        ['id']: val.id,
        ['collaborators']: val.collaborators == void 0
            ? val.collaborators
            : serializeCollaboratorVariable(val.collaborators),
        ['completion_rule']: val.completionRule == void 0
            ? val.completionRule
            : serializeCompletionRuleVariable(val.completionRule),
        ['file_collaborator_role']: val.fileCollaboratorRole == void 0
            ? val.fileCollaboratorRole
            : serializeRoleVariable(val.fileCollaboratorRole),
        ['task_collaborators']: val.taskCollaborators == void 0
            ? val.taskCollaborators
            : serializeCollaboratorVariable(val.taskCollaborators),
        ['role']: val.role == void 0 ? val.role : serializeRoleVariable(val.role),
    };
}
export function deserializeOutcome(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Outcome"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "Outcome" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "Outcome"',
        });
    }
    const id = val.id;
    const collaborators = val.collaborators == void 0
        ? void 0
        : deserializeCollaboratorVariable(val.collaborators);
    const completionRule = val.completion_rule == void 0
        ? void 0
        : deserializeCompletionRuleVariable(val.completion_rule);
    const fileCollaboratorRole = val.file_collaborator_role == void 0
        ? void 0
        : deserializeRoleVariable(val.file_collaborator_role);
    const taskCollaborators = val.task_collaborators == void 0
        ? void 0
        : deserializeCollaboratorVariable(val.task_collaborators);
    const role = val.role == void 0 ? void 0 : deserializeRoleVariable(val.role);
    return {
        id: id,
        collaborators: collaborators,
        completionRule: completionRule,
        fileCollaboratorRole: fileCollaboratorRole,
        taskCollaborators: taskCollaborators,
        role: role,
    };
}
//# sourceMappingURL=outcome.generated.js.map