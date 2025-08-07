"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeClassificationTemplateField = serializeClassificationTemplateField;
exports.deserializeClassificationTemplateField = deserializeClassificationTemplateField;
exports.serializeClassification = serializeClassification;
exports.deserializeClassification = deserializeClassification;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeClassificationTemplateField(val) {
    return val;
}
function deserializeClassificationTemplateField(val) {
    if (val == 'securityClassification-6VMVochwUWo') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ClassificationTemplateField",
    });
}
function serializeClassification(val) {
    return {
        ['Box__Security__Classification__Key']: val.boxSecurityClassificationKey,
        ['$parent']: val.parent,
        ['$template']: val.template == void 0
            ? val.template
            : serializeClassificationTemplateField(val.template),
        ['$scope']: val.scope,
        ['$version']: val.version,
        ['$type']: val.type,
        ['$typeVersion']: val.typeVersion,
        ['$canEdit']: val.canEdit,
    };
}
function deserializeClassification(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Classification"' });
    }
    if (!(val.Box__Security__Classification__Key == void 0) &&
        !(0, json_js_3.sdIsString)(val.Box__Security__Classification__Key)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "Box__Security__Classification__Key" of type "Classification"',
        });
    }
    const boxSecurityClassificationKey = val.Box__Security__Classification__Key == void 0
        ? void 0
        : val.Box__Security__Classification__Key;
    if (!(val.$parent == void 0) && !(0, json_js_3.sdIsString)(val.$parent)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$parent" of type "Classification"',
        });
    }
    const parent = val.$parent == void 0 ? void 0 : val.$parent;
    const template = val.$template == void 0
        ? void 0
        : deserializeClassificationTemplateField(val.$template);
    if (!(val.$scope == void 0) && !(0, json_js_3.sdIsString)(val.$scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$scope" of type "Classification"',
        });
    }
    const scope = val.$scope == void 0 ? void 0 : val.$scope;
    if (!(val.$version == void 0) && !(0, json_js_2.sdIsNumber)(val.$version)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "$version" of type "Classification"',
        });
    }
    const version = val.$version == void 0 ? void 0 : val.$version;
    if (!(val.$type == void 0) && !(0, json_js_3.sdIsString)(val.$type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "$type" of type "Classification"',
        });
    }
    const type = val.$type == void 0 ? void 0 : val.$type;
    if (!(val.$typeVersion == void 0) && !(0, json_js_2.sdIsNumber)(val.$typeVersion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "$typeVersion" of type "Classification"',
        });
    }
    const typeVersion = val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
    if (!(val.$canEdit == void 0) && !(0, json_js_1.sdIsBoolean)(val.$canEdit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "$canEdit" of type "Classification"',
        });
    }
    const canEdit = val.$canEdit == void 0 ? void 0 : val.$canEdit;
    return {
        boxSecurityClassificationKey: boxSecurityClassificationKey,
        parent: parent,
        template: template,
        scope: scope,
        version: version,
        type: type,
        typeVersion: typeVersion,
        canEdit: canEdit,
    };
}
//# sourceMappingURL=classification.generated.js.map