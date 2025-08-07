"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderMini = void 0;
exports.serializeFolderMini = serializeFolderMini;
exports.deserializeFolderMini = deserializeFolderMini;
const folderBase_generated_js_1 = require("./folderBase.generated.js");
const folderBase_generated_js_2 = require("./folderBase.generated.js");
const folderBase_generated_js_3 = require("./folderBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class FolderMini extends folderBase_generated_js_3.FolderBase {
    constructor(fields) {
        super(fields);
        if (fields.sequenceId !== undefined) {
            this.sequenceId = fields.sequenceId;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
    }
}
exports.FolderMini = FolderMini;
function serializeFolderMini(val) {
    const base = (0, folderBase_generated_js_2.serializeFolderBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FolderMini"' });
    }
    return Object.assign(Object.assign({}, base), { ['sequence_id']: val.sequenceId, ['name']: val.name });
}
function deserializeFolderMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FolderMini"' });
    }
    if (!(val.sequence_id == void 0) && !(0, json_js_1.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "FolderMini"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "FolderMini"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FolderMini" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FolderMini"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_1.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "FolderMini"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FolderMini" to be defined',
        });
    }
    const type = (0, folderBase_generated_js_1.deserializeFolderBaseTypeField)(val.type);
    return {
        sequenceId: sequenceId,
        name: name,
        id: id,
        etag: etag,
        type: type,
    };
}
//# sourceMappingURL=folderMini.generated.js.map