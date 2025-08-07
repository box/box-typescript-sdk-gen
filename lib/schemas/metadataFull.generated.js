"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadataFull = serializeMetadataFull;
exports.deserializeMetadataFull = deserializeMetadataFull;
const metadata_generated_js_1 = require("./metadata.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeMetadataFull(val) {
    const base = (0, metadata_generated_js_1.serializeMetadata)(val);
    if (!(0, json_js_4.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "MetadataFull"' });
    }
    return Object.assign(Object.assign({}, base), Object.assign({
        ['$canEdit']: val.canEdit,
        ['$id']: val.id,
        ['$type']: val.type,
        ['$typeVersion']: val.typeVersion,
    }, val.extraData));
}
function deserializeMetadataFull(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "MetadataFull"' });
    }
    if (!(val.$canEdit == void 0) && !(0, json_js_1.sdIsBoolean)(val.$canEdit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "$canEdit" of type "MetadataFull"',
        });
    }
    const canEdit = val.$canEdit == void 0 ? void 0 : val.$canEdit;
    if (!(val.$id == void 0) && !(0, json_js_3.sdIsString)(val.$id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$id" of type "MetadataFull"',
        });
    }
    const id = val.$id == void 0 ? void 0 : val.$id;
    if (!(val.$type == void 0) && !(0, json_js_3.sdIsString)(val.$type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$type" of type "MetadataFull"',
        });
    }
    const type = val.$type == void 0 ? void 0 : val.$type;
    if (!(val.$typeVersion == void 0) && !(0, json_js_2.sdIsNumber)(val.$typeVersion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "$typeVersion" of type "MetadataFull"',
        });
    }
    const typeVersion = val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
    if (!(val == void 0) && !(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting object for "extraData" of type "MetadataFull"',
        });
    }
    const extraData = val == void 0
        ? void 0
        : (0, json_js_4.sdIsMap)(val)
            ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
                k,
                (function (v) {
                    return v;
                })(v),
            ]))
            : {};
    if (!(val.$parent == void 0) && !(0, json_js_3.sdIsString)(val.$parent)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$parent" of type "MetadataFull"',
        });
    }
    const parent = val.$parent == void 0 ? void 0 : val.$parent;
    if (!(val.$template == void 0) && !(0, json_js_3.sdIsString)(val.$template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$template" of type "MetadataFull"',
        });
    }
    const template = val.$template == void 0 ? void 0 : val.$template;
    if (!(val.$scope == void 0) && !(0, json_js_3.sdIsString)(val.$scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$scope" of type "MetadataFull"',
        });
    }
    const scope = val.$scope == void 0 ? void 0 : val.$scope;
    if (!(val.$version == void 0) && !(0, json_js_2.sdIsNumber)(val.$version)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "$version" of type "MetadataFull"',
        });
    }
    const version = val.$version == void 0 ? void 0 : val.$version;
    return {
        canEdit: canEdit,
        id: id,
        type: type,
        typeVersion: typeVersion,
        extraData: extraData,
        parent: parent,
        template: template,
        scope: scope,
        version: version,
    };
}
//# sourceMappingURL=metadataFull.generated.js.map