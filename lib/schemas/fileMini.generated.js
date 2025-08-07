"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMini = void 0;
exports.serializeFileMini = serializeFileMini;
exports.deserializeFileMini = deserializeFileMini;
const fileBase_generated_js_1 = require("./fileBase.generated.js");
const fileBase_generated_js_2 = require("./fileBase.generated.js");
const fileVersionMini_generated_js_1 = require("./fileVersionMini.generated.js");
const fileVersionMini_generated_js_2 = require("./fileVersionMini.generated.js");
const fileBase_generated_js_3 = require("./fileBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class FileMini extends fileBase_generated_js_3.FileBase {
    constructor(fields) {
        super(fields);
        if (fields.sequenceId !== undefined) {
            this.sequenceId = fields.sequenceId;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.sha1 !== undefined) {
            this.sha1 = fields.sha1;
        }
        if (fields.fileVersion !== undefined) {
            this.fileVersion = fields.fileVersion;
        }
    }
}
exports.FileMini = FileMini;
function serializeFileMini(val) {
    const base = (0, fileBase_generated_js_2.serializeFileBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileMini"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['sequence_id']: val.sequenceId,
        ['name']: val.name,
        ['sha1']: val.sha1,
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : (0, fileVersionMini_generated_js_1.serializeFileVersionMini)(val.fileVersion),
    });
}
function deserializeFileMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileMini"' });
    }
    if (!(val.sequence_id == void 0) && !(0, json_js_1.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "FileMini"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "FileMini"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.sha1 == void 0) && !(0, json_js_1.sdIsString)(val.sha1)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sha1" of type "FileMini"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    const fileVersion = val.file_version == void 0
        ? void 0
        : (0, fileVersionMini_generated_js_2.deserializeFileVersionMini)(val.file_version);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileMini" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileMini"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_1.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "FileMini"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileMini" to be defined',
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
//# sourceMappingURL=fileMini.generated.js.map