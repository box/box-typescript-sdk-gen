"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBaseV2025R0 = void 0;
exports.serializeGroupBaseV2025R0TypeField = serializeGroupBaseV2025R0TypeField;
exports.deserializeGroupBaseV2025R0TypeField = deserializeGroupBaseV2025R0TypeField;
exports.serializeGroupBaseV2025R0 = serializeGroupBaseV2025R0;
exports.deserializeGroupBaseV2025R0 = deserializeGroupBaseV2025R0;
exports.serializeGroupBaseV2025R0Input = serializeGroupBaseV2025R0Input;
exports.deserializeGroupBaseV2025R0Input = deserializeGroupBaseV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class GroupBaseV2025R0 {
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
exports.GroupBaseV2025R0 = GroupBaseV2025R0;
function serializeGroupBaseV2025R0TypeField(val) {
    return val;
}
function deserializeGroupBaseV2025R0TypeField(val) {
    if (val == 'group') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GroupBaseV2025R0TypeField",
    });
}
function serializeGroupBaseV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeGroupBaseV2025R0TypeField(val.type),
    };
}
function deserializeGroupBaseV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "GroupBaseV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "GroupBaseV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "GroupBaseV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "GroupBaseV2025R0" to be defined',
        });
    }
    const type = deserializeGroupBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
function serializeGroupBaseV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeGroupBaseV2025R0TypeField(val.type),
    };
}
function deserializeGroupBaseV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "GroupBaseV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "GroupBaseV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "GroupBaseV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeGroupBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=groupBaseV2025R0.generated.js.map