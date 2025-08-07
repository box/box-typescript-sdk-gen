"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeUploadPartMini = serializeUploadPartMini;
exports.deserializeUploadPartMini = deserializeUploadPartMini;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeUploadPartMini(val) {
    return {
        ['part_id']: val.partId,
        ['offset']: val.offset,
        ['size']: val.size,
    };
}
function deserializeUploadPartMini(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UploadPartMini"' });
    }
    if (!(val.part_id == void 0) && !(0, json_js_2.sdIsString)(val.part_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "part_id" of type "UploadPartMini"',
        });
    }
    const partId = val.part_id == void 0 ? void 0 : val.part_id;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "UploadPartMini"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.size == void 0) && !(0, json_js_1.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "UploadPartMini"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    return {
        partId: partId,
        offset: offset,
        size: size,
    };
}
//# sourceMappingURL=uploadPartMini.generated.js.map