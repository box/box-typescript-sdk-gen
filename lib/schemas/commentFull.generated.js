"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCommentFull = serializeCommentFull;
exports.deserializeCommentFull = deserializeCommentFull;
const commentBase_generated_js_1 = require("./commentBase.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const comment_generated_js_1 = require("./comment.generated.js");
const comment_generated_js_2 = require("./comment.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeCommentFull(val) {
    const base = (0, comment_generated_js_2.serializeComment)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "CommentFull"' });
    }
    return Object.assign(Object.assign({}, base), { ['tagged_message']: val.taggedMessage });
}
function deserializeCommentFull(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "CommentFull"' });
    }
    if (!(val.tagged_message == void 0) && !(0, json_js_2.sdIsString)(val.tagged_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "tagged_message" of type "CommentFull"',
        });
    }
    const taggedMessage = val.tagged_message == void 0 ? void 0 : val.tagged_message;
    if (!(val.is_reply_comment == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_reply_comment)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_reply_comment" of type "CommentFull"',
        });
    }
    const isReplyComment = val.is_reply_comment == void 0 ? void 0 : val.is_reply_comment;
    if (!(val.message == void 0) && !(0, json_js_2.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "CommentFull"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_1.deserializeUserMini)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "CommentFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "CommentFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.modified_at);
    const item = val.item == void 0 ? void 0 : (0, comment_generated_js_1.deserializeCommentItemField)(val.item);
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CommentFull"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : (0, commentBase_generated_js_1.deserializeCommentBaseTypeField)(val.type);
    return {
        taggedMessage: taggedMessage,
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
//# sourceMappingURL=commentFull.generated.js.map