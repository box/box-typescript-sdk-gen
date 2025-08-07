"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeWorkflowFull = serializeWorkflowFull;
exports.deserializeWorkflowFull = deserializeWorkflowFull;
const workflowMini_generated_js_1 = require("./workflowMini.generated.js");
const workflow_generated_js_1 = require("./workflow.generated.js");
const workflow_generated_js_2 = require("./workflow.generated.js");
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeWorkflowFull(val) {
    const base = (0, workflow_generated_js_2.serializeWorkflow)(val);
    if (!(0, json_js_4.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "WorkflowFull"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userBase_generated_js_1.serializeUserBase)(val.createdBy),
        ['modified_by']: val.modifiedBy == void 0
            ? val.modifiedBy
            : (0, userBase_generated_js_1.serializeUserBase)(val.modifiedBy),
    });
}
function deserializeWorkflowFull(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "WorkflowFull"' });
    }
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "WorkflowFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "WorkflowFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.modified_by);
    if (!(val.flows == void 0) && !(0, json_js_3.sdIsList)(val.flows)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "flows" of type "WorkflowFull"',
        });
    }
    const flows = val.flows == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.flows)
            ? val.flows.map(function (itm) {
                return (0, workflow_generated_js_1.deserializeWorkflowFlowsField)(itm);
            })
            : [];
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WorkflowFull"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : (0, workflowMini_generated_js_1.deserializeWorkflowMiniTypeField)(val.type);
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "WorkflowFull"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "WorkflowFull"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.is_enabled == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_enabled" of type "WorkflowFull"',
        });
    }
    const isEnabled = val.is_enabled == void 0 ? void 0 : val.is_enabled;
    return {
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        createdBy: createdBy,
        modifiedBy: modifiedBy,
        flows: flows,
        id: id,
        type: type,
        name: name,
        description: description,
        isEnabled: isEnabled,
    };
}
//# sourceMappingURL=workflowFull.generated.js.map