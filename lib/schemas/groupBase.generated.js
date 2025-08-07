"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBase = void 0;
exports.serializeGroupBaseTypeField = serializeGroupBaseTypeField;
exports.deserializeGroupBaseTypeField = deserializeGroupBaseTypeField;
exports.serializeGroupBase = serializeGroupBase;
exports.deserializeGroupBase = deserializeGroupBase;
exports.serializeGroupBaseInput = serializeGroupBaseInput;
exports.deserializeGroupBaseInput = deserializeGroupBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GroupBase {
    constructor(fields) {
        /**
         * The value will always be `group`. */
        this.type = 'group';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.GroupBase = GroupBase;
function serializeGroupBaseTypeField(val) {
    return val;
}
function deserializeGroupBaseTypeField(val) {
    if (val == 'group') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize GroupBaseTypeField" });
}
function serializeGroupBase(val) {
    return { ['id']: val.id, ['type']: serializeGroupBaseTypeField(val.type) };
}
function deserializeGroupBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "GroupBase"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "GroupBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "GroupBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "GroupBase" to be defined',
        });
    }
    const type = deserializeGroupBaseTypeField(val.type);
    return { id: id, type: type };
}
function serializeGroupBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeGroupBaseTypeField(val.type),
    };
}
function deserializeGroupBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "GroupBaseInput"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "GroupBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "GroupBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeGroupBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=groupBase.generated.js.map