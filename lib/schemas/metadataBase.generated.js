"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadataBase = serializeMetadataBase;
exports.deserializeMetadataBase = deserializeMetadataBase;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeMetadataBase(val) {
    return {
        ['$parent']: val.parent,
        ['$template']: val.template,
        ['$scope']: val.scope,
        ['$version']: val.version,
    };
}
function deserializeMetadataBase(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "MetadataBase"' });
    }
    if (!(val.$parent == void 0) && !(0, json_js_2.sdIsString)(val.$parent)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$parent" of type "MetadataBase"',
        });
    }
    const parent = val.$parent == void 0 ? void 0 : val.$parent;
    if (!(val.$template == void 0) && !(0, json_js_2.sdIsString)(val.$template)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$template" of type "MetadataBase"',
        });
    }
    const template = val.$template == void 0 ? void 0 : val.$template;
    if (!(val.$scope == void 0) && !(0, json_js_2.sdIsString)(val.$scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$scope" of type "MetadataBase"',
        });
    }
    const scope = val.$scope == void 0 ? void 0 : val.$scope;
    if (!(val.$version == void 0) && !(0, json_js_1.sdIsNumber)(val.$version)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "$version" of type "MetadataBase"',
        });
    }
    const version = val.$version == void 0 ? void 0 : val.$version;
    return {
        parent: parent,
        template: template,
        scope: scope,
        version: version,
    };
}
//# sourceMappingURL=metadataBase.generated.js.map