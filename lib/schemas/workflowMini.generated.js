"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeWorkflowMiniTypeField = serializeWorkflowMiniTypeField;
exports.deserializeWorkflowMiniTypeField = deserializeWorkflowMiniTypeField;
exports.serializeWorkflowMini = serializeWorkflowMini;
exports.deserializeWorkflowMini = deserializeWorkflowMini;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeWorkflowMiniTypeField(val) {
    return val;
}
function deserializeWorkflowMiniTypeField(val) {
    if (val == 'workflow') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize WorkflowMiniTypeField" });
}
function serializeWorkflowMini(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeWorkflowMiniTypeField(val.type),
        ['name']: val.name,
        ['description']: val.description,
        ['is_enabled']: val.isEnabled,
    };
}
function deserializeWorkflowMini(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "WorkflowMini"' });
    }
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WorkflowMini"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "WorkflowMini"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "WorkflowMini"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.is_enabled == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_enabled" of type "WorkflowMini"',
        });
    }
    const isEnabled = val.is_enabled == void 0 ? void 0 : val.is_enabled;
    return {
        id: id,
        type: type,
        name: name,
        description: description,
        isEnabled: isEnabled,
    };
}
//# sourceMappingURL=workflowMini.generated.js.map