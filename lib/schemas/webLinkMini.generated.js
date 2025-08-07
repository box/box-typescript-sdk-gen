"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebLinkMini = void 0;
exports.serializeWebLinkMini = serializeWebLinkMini;
exports.deserializeWebLinkMini = deserializeWebLinkMini;
const webLinkBase_generated_js_1 = require("./webLinkBase.generated.js");
const webLinkBase_generated_js_2 = require("./webLinkBase.generated.js");
const webLinkBase_generated_js_3 = require("./webLinkBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class WebLinkMini extends webLinkBase_generated_js_3.WebLinkBase {
    constructor(fields) {
        super(fields);
        if (fields.url !== undefined) {
            this.url = fields.url;
        }
        if (fields.sequenceId !== undefined) {
            this.sequenceId = fields.sequenceId;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
    }
}
exports.WebLinkMini = WebLinkMini;
function serializeWebLinkMini(val) {
    const base = (0, webLinkBase_generated_js_2.serializeWebLinkBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "WebLinkMini"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['url']: val.url,
        ['sequence_id']: val.sequenceId,
        ['name']: val.name,
    });
}
function deserializeWebLinkMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "WebLinkMini"' });
    }
    if (!(val.url == void 0) && !(0, json_js_1.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "WebLinkMini"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    if (!(val.sequence_id == void 0) && !(0, json_js_1.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "WebLinkMini"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "WebLinkMini"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "WebLinkMini" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WebLinkMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "WebLinkMini" to be defined',
        });
    }
    const type = (0, webLinkBase_generated_js_1.deserializeWebLinkBaseTypeField)(val.type);
    if (!(val.etag == void 0) && !(0, json_js_1.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "WebLinkMini"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    return {
        url: url,
        sequenceId: sequenceId,
        name: name,
        id: id,
        type: type,
        etag: etag,
    };
}
//# sourceMappingURL=webLinkMini.generated.js.map