"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
exports.serializeGroup = serializeGroup;
exports.deserializeGroup = deserializeGroup;
const groupBase_generated_js_1 = require("./groupBase.generated.js");
const groupMini_generated_js_1 = require("./groupMini.generated.js");
const groupMini_generated_js_2 = require("./groupMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const groupMini_generated_js_3 = require("./groupMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class Group extends groupMini_generated_js_3.GroupMini {
    constructor(fields) {
        super(fields);
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
    }
}
exports.Group = Group;
function serializeGroup(val) {
    const base = (0, groupMini_generated_js_2.serializeGroupMini)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Group"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
    });
}
function deserializeGroup(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Group"' });
    }
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "Group"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_1.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "Group"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "Group"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const groupType = val.group_type == void 0
        ? void 0
        : (0, groupMini_generated_js_1.deserializeGroupMiniGroupTypeField)(val.group_type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "Group" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "Group"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "Group" to be defined',
        });
    }
    const type = (0, groupBase_generated_js_1.deserializeGroupBaseTypeField)(val.type);
    return {
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        name: name,
        groupType: groupType,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=group.generated.js.map