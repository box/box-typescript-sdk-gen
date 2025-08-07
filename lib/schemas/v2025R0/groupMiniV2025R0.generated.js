"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMiniV2025R0 = void 0;
exports.serializeGroupMiniV2025R0GroupTypeField = serializeGroupMiniV2025R0GroupTypeField;
exports.deserializeGroupMiniV2025R0GroupTypeField = deserializeGroupMiniV2025R0GroupTypeField;
exports.serializeGroupMiniV2025R0 = serializeGroupMiniV2025R0;
exports.deserializeGroupMiniV2025R0 = deserializeGroupMiniV2025R0;
const groupBaseV2025R0_generated_js_1 = require("./groupBaseV2025R0.generated.js");
const groupBaseV2025R0_generated_js_2 = require("./groupBaseV2025R0.generated.js");
const groupBaseV2025R0_generated_js_3 = require("./groupBaseV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class GroupMiniV2025R0 extends groupBaseV2025R0_generated_js_3.GroupBaseV2025R0 {
    constructor(fields) {
        super(fields);
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.groupType !== undefined) {
            this.groupType = fields.groupType;
        }
    }
}
exports.GroupMiniV2025R0 = GroupMiniV2025R0;
function serializeGroupMiniV2025R0GroupTypeField(val) {
    return val;
}
function deserializeGroupMiniV2025R0GroupTypeField(val) {
    if (val == 'managed_group') {
        return val;
    }
    if (val == 'all_users_group') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GroupMiniV2025R0GroupTypeField",
    });
}
function serializeGroupMiniV2025R0(val) {
    const base = (0, groupBaseV2025R0_generated_js_2.serializeGroupBaseV2025R0)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "GroupMiniV2025R0"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['name']: val.name,
        ['group_type']: val.groupType == void 0
            ? val.groupType
            : serializeGroupMiniV2025R0GroupTypeField(val.groupType),
    });
}
function deserializeGroupMiniV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "GroupMiniV2025R0"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "GroupMiniV2025R0"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const groupType = val.group_type == void 0
        ? void 0
        : deserializeGroupMiniV2025R0GroupTypeField(val.group_type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "GroupMiniV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "GroupMiniV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "GroupMiniV2025R0" to be defined',
        });
    }
    const type = (0, groupBaseV2025R0_generated_js_1.deserializeGroupBaseV2025R0TypeField)(val.type);
    return {
        name: name,
        groupType: groupType,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=groupMiniV2025R0.generated.js.map