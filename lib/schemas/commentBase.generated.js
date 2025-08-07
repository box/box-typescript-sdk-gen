"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCommentBaseTypeField = serializeCommentBaseTypeField;
exports.deserializeCommentBaseTypeField = deserializeCommentBaseTypeField;
exports.serializeCommentBase = serializeCommentBase;
exports.deserializeCommentBase = deserializeCommentBase;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeCommentBaseTypeField(val) {
    return val;
}
function deserializeCommentBaseTypeField(val) {
    if (val == 'comment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize CommentBaseTypeField" });
}
function serializeCommentBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeCommentBaseTypeField(val.type),
    };
}
function deserializeCommentBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "CommentBase"' });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CommentBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=commentBase.generated.js.map