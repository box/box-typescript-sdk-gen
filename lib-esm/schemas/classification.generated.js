import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeClassificationTemplateField(val) {
    return val;
}
export function deserializeClassificationTemplateField(val) {
    if (val == 'securityClassification-6VMVochwUWo') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ClassificationTemplateField",
    });
}
export function serializeClassification(val) {
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
export function deserializeClassification(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Classification"' });
    }
    if (!(val.Box__Security__Classification__Key == void 0) &&
        !sdIsString(val.Box__Security__Classification__Key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "Box__Security__Classification__Key" of type "Classification"',
        });
    }
    const boxSecurityClassificationKey = val.Box__Security__Classification__Key == void 0
        ? void 0
        : val.Box__Security__Classification__Key;
    if (!(val.$parent == void 0) && !sdIsString(val.$parent)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$parent" of type "Classification"',
        });
    }
    const parent = val.$parent == void 0 ? void 0 : val.$parent;
    const template = val.$template == void 0
        ? void 0
        : deserializeClassificationTemplateField(val.$template);
    if (!(val.$scope == void 0) && !sdIsString(val.$scope)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$scope" of type "Classification"',
        });
    }
    const scope = val.$scope == void 0 ? void 0 : val.$scope;
    if (!(val.$version == void 0) && !sdIsNumber(val.$version)) {
        throw new BoxSdkError({
            message: 'Expecting number for "$version" of type "Classification"',
        });
    }
    const version = val.$version == void 0 ? void 0 : val.$version;
    if (!(val.$type == void 0) && !sdIsString(val.$type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$type" of type "Classification"',
        });
    }
    const type = val.$type == void 0 ? void 0 : val.$type;
    if (!(val.$typeVersion == void 0) && !sdIsNumber(val.$typeVersion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "$typeVersion" of type "Classification"',
        });
    }
    const typeVersion = val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
    if (!(val.$canEdit == void 0) && !sdIsBoolean(val.$canEdit)) {
        throw new BoxSdkError({
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