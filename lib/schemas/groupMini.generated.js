"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMini = void 0;
exports.serializeGroupMiniGroupTypeField = serializeGroupMiniGroupTypeField;
exports.deserializeGroupMiniGroupTypeField = deserializeGroupMiniGroupTypeField;
exports.serializeGroupMini = serializeGroupMini;
exports.deserializeGroupMini = deserializeGroupMini;
const groupBase_generated_js_1 = require("./groupBase.generated.js");
const groupBase_generated_js_2 = require("./groupBase.generated.js");
const groupBase_generated_js_3 = require("./groupBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GroupMini extends groupBase_generated_js_3.GroupBase {
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
exports.GroupMini = GroupMini;
function serializeGroupMiniGroupTypeField(val) {
    return val;
}
function deserializeGroupMiniGroupTypeField(val) {
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
        message: "Can't deserialize GroupMiniGroupTypeField",
    });
}
function serializeGroupMini(val) {
    const base = (0, groupBase_generated_js_2.serializeGroupBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "GroupMini"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['name']: val.name,
        ['group_type']: val.groupType == void 0
            ? val.groupType
            : serializeGroupMiniGroupTypeField(val.groupType),
    });
}
function deserializeGroupMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "GroupMini"' });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "GroupMini"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const groupType = val.group_type == void 0
        ? void 0
        : deserializeGroupMiniGroupTypeField(val.group_type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "GroupMini" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "GroupMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "GroupMini" to be defined',
        });
    }
    const type = (0, groupBase_generated_js_1.deserializeGroupBaseTypeField)(val.type);
    return {
        name: name,
        groupType: groupType,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=groupMini.generated.js.map