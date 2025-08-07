"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCommentItemField = serializeCommentItemField;
exports.deserializeCommentItemField = deserializeCommentItemField;
exports.serializeComment = serializeComment;
exports.deserializeComment = deserializeComment;
const commentBase_generated_js_1 = require("./commentBase.generated.js");
const commentBase_generated_js_2 = require("./commentBase.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeCommentItemField(val) {
    return { ['id']: val.id, ['type']: val.type };
}
function deserializeCommentItemField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CommentItemField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CommentItemField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.type == void 0) && !(0, json_js_2.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "CommentItemField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    return { id: id, type: type };
}
function serializeComment(val) {
    const base = (0, commentBase_generated_js_2.serializeCommentBase)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Comment"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['is_reply_comment']: val.isReplyComment,
        ['message']: val.message,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['item']: val.item == void 0 ? val.item : serializeCommentItemField(val.item),
    });
}
function deserializeComment(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Comment"' });
    }
    if (!(val.is_reply_comment == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_reply_comment)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_reply_comment" of type "Comment"',
        });
    }
    const isReplyComment = val.is_reply_comment == void 0 ? void 0 : val.is_reply_comment;
    if (!(val.message == void 0) && !(0, json_js_2.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "Comment"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "Comment"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "Comment"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    const item = val.item == void 0 ? void 0 : deserializeCommentItemField(val.item);
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "Comment"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : (0, commentBase_generated_js_1.deserializeCommentBaseTypeField)(val.type);
    return {
        isReplyComment: isReplyComment,
        message: message,
        createdBy: createdBy,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        item: item,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=comment.generated.js.map