"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeOutcome = serializeOutcome;
exports.deserializeOutcome = deserializeOutcome;
const collaboratorVariable_generated_js_1 = require("./collaboratorVariable.generated.js");
const collaboratorVariable_generated_js_2 = require("./collaboratorVariable.generated.js");
const completionRuleVariable_generated_js_1 = require("./completionRuleVariable.generated.js");
const completionRuleVariable_generated_js_2 = require("./completionRuleVariable.generated.js");
const roleVariable_generated_js_1 = require("./roleVariable.generated.js");
const roleVariable_generated_js_2 = require("./roleVariable.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeOutcome(val) {
    return {
        ['id']: val.id,
        ['collaborators']: val.collaborators == void 0
            ? val.collaborators
            : (0, collaboratorVariable_generated_js_1.serializeCollaboratorVariable)(val.collaborators),
        ['completion_rule']: val.completionRule == void 0
            ? val.completionRule
            : (0, completionRuleVariable_generated_js_1.serializeCompletionRuleVariable)(val.completionRule),
        ['file_collaborator_role']: val.fileCollaboratorRole == void 0
            ? val.fileCollaboratorRole
            : (0, roleVariable_generated_js_1.serializeRoleVariable)(val.fileCollaboratorRole),
        ['task_collaborators']: val.taskCollaborators == void 0
            ? val.taskCollaborators
            : (0, collaboratorVariable_generated_js_1.serializeCollaboratorVariable)(val.taskCollaborators),
        ['role']: val.role == void 0 ? val.role : (0, roleVariable_generated_js_1.serializeRoleVariable)(val.role),
    };
}
function deserializeOutcome(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Outcome"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "Outcome" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "Outcome"',
        });
    }
    const id = val.id;
    const collaborators = val.collaborators == void 0
        ? void 0
        : (0, collaboratorVariable_generated_js_2.deserializeCollaboratorVariable)(val.collaborators);
    const completionRule = val.completion_rule == void 0
        ? void 0
        : (0, completionRuleVariable_generated_js_2.deserializeCompletionRuleVariable)(val.completion_rule);
    const fileCollaboratorRole = val.file_collaborator_role == void 0
        ? void 0
        : (0, roleVariable_generated_js_2.deserializeRoleVariable)(val.file_collaborator_role);
    const taskCollaborators = val.task_collaborators == void 0
        ? void 0
        : (0, collaboratorVariable_generated_js_2.deserializeCollaboratorVariable)(val.task_collaborators);
    const role = val.role == void 0 ? void 0 : (0, roleVariable_generated_js_2.deserializeRoleVariable)(val.role);
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