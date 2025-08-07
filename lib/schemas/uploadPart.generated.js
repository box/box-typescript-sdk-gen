"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeUploadPart = serializeUploadPart;
exports.deserializeUploadPart = deserializeUploadPart;
const uploadPartMini_generated_js_1 = require("./uploadPartMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeUploadPart(val) {
    const base = (0, uploadPartMini_generated_js_1.serializeUploadPartMini)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UploadPart"' });
    }
    return Object.assign(Object.assign({}, base), { ['sha1']: val.sha1 });
}
function deserializeUploadPart(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UploadPart"' });
    }
    if (!(val.sha1 == void 0) && !(0, json_js_2.sdIsString)(val.sha1)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sha1" of type "UploadPart"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    if (!(val.part_id == void 0) && !(0, json_js_2.sdIsString)(val.part_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "part_id" of type "UploadPart"',
        });
    }
    const partId = val.part_id == void 0 ? void 0 : val.part_id;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "UploadPart"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.size == void 0) && !(0, json_js_1.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "UploadPart"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    return {
        sha1: sha1,
        partId: partId,
        offset: offset,
        size: size,
    };
}
//# sourceMappingURL=uploadPart.generated.js.map