"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileVersionMini = void 0;
exports.serializeFileVersionMini = serializeFileVersionMini;
exports.deserializeFileVersionMini = deserializeFileVersionMini;
const fileVersionBase_generated_js_1 = require("./fileVersionBase.generated.js");
const fileVersionBase_generated_js_2 = require("./fileVersionBase.generated.js");
const fileVersionBase_generated_js_3 = require("./fileVersionBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class FileVersionMini extends fileVersionBase_generated_js_3.FileVersionBase {
    constructor(fields) {
        super(fields);
        if (fields.sha1 !== undefined) {
            this.sha1 = fields.sha1;
        }
    }
}
exports.FileVersionMini = FileVersionMini;
function serializeFileVersionMini(val) {
    const base = (0, fileVersionBase_generated_js_2.serializeFileVersionBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileVersionMini"' });
    }
    return Object.assign(Object.assign({}, base), { ['sha1']: val.sha1 });
}
function deserializeFileVersionMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileVersionMini"' });
    }
    if (!(val.sha1 == void 0) && !(0, json_js_1.sdIsString)(val.sha1)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sha1" of type "FileVersionMini"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileVersionMini" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileVersionMini" to be defined',
        });
    }
    const type = (0, fileVersionBase_generated_js_1.deserializeFileVersionBaseTypeField)(val.type);
    return { sha1: sha1, id: id, type: type };
}
//# sourceMappingURL=fileVersionMini.generated.js.map