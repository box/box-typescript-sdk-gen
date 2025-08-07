"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileConflict = void 0;
exports.serializeFileConflict = serializeFileConflict;
exports.deserializeFileConflict = deserializeFileConflict;
const fileBase_generated_js_1 = require("./fileBase.generated.js");
const fileMini_generated_js_1 = require("./fileMini.generated.js");
const fileVersionMini_generated_js_1 = require("./fileVersionMini.generated.js");
const fileMini_generated_js_2 = require("./fileMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class FileConflict extends fileMini_generated_js_2.FileMini {
    constructor(fields) {
        super(fields);
    }
}
exports.FileConflict = FileConflict;
function serializeFileConflict(val) {
    const base = (0, fileMini_generated_js_1.serializeFileMini)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileConflict"' });
    }
    return Object.assign(Object.assign({}, base), {});
}
function deserializeFileConflict(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileConflict"' });
    }
    if (!(val.sequence_id == void 0) && !(0, json_js_1.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "FileConflict"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "FileConflict"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.sha1 == void 0) && !(0, json_js_1.sdIsString)(val.sha1)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sha1" of type "FileConflict"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    const fileVersion = val.file_version == void 0
        ? void 0
        : (0, fileVersionMini_generated_js_1.deserializeFileVersionMini)(val.file_version);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileConflict" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileConflict"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_1.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "FileConflict"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileConflict" to be defined',
        });
    }
    const type = (0, fileBase_generated_js_1.deserializeFileBaseTypeField)(val.type);
    return {
        sequenceId: sequenceId,
        name: name,
        sha1: sha1,
        fileVersion: fileVersion,
        id: id,
        etag: etag,
        type: type,
    };
}
//# sourceMappingURL=fileConflict.generated.js.map