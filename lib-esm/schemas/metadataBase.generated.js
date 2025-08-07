import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeMetadataBase(val) {
    return {
        ['$parent']: val.parent,
        ['$template']: val.template,
        ['$scope']: val.scope,
        ['$version']: val.version,
    };
}
export function deserializeMetadataBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "MetadataBase"' });
    }
    if (!(val.$parent == void 0) && !sdIsString(val.$parent)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$parent" of type "MetadataBase"',
        });
    }
    const parent = val.$parent == void 0 ? void 0 : val.$parent;
    if (!(val.$template == void 0) && !sdIsString(val.$template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$template" of type "MetadataBase"',
        });
    }
    const template = val.$template == void 0 ? void 0 : val.$template;
    if (!(val.$scope == void 0) && !sdIsString(val.$scope)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$scope" of type "MetadataBase"',
        });
    }
    const scope = val.$scope == void 0 ? void 0 : val.$scope;
    if (!(val.$version == void 0) && !sdIsNumber(val.$version)) {
        throw new BoxSdkError({
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