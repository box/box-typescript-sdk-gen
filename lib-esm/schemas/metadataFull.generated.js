import { serializeMetadata } from './metadata.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeMetadataFull(val) {
    const base = serializeMetadata(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "MetadataFull"' });
    }
    return {
        ...base,
        ...{
            ...{
                ['$canEdit']: val.canEdit,
                ['$id']: val.id,
                ['$type']: val.type,
                ['$typeVersion']: val.typeVersion,
            },
            ...val.extraData,
        },
    };
}
export function deserializeMetadataFull(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "MetadataFull"' });
    }
    if (!(val.$canEdit == void 0) && !sdIsBoolean(val.$canEdit)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "$canEdit" of type "MetadataFull"',
        });
    }
    const canEdit = val.$canEdit == void 0 ? void 0 : val.$canEdit;
    if (!(val.$id == void 0) && !sdIsString(val.$id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$id" of type "MetadataFull"',
        });
    }
    const id = val.$id == void 0 ? void 0 : val.$id;
    if (!(val.$type == void 0) && !sdIsString(val.$type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$type" of type "MetadataFull"',
        });
    }
    const type = val.$type == void 0 ? void 0 : val.$type;
    if (!(val.$typeVersion == void 0) && !sdIsNumber(val.$typeVersion)) {
        throw new BoxSdkError({
            message: 'Expecting number for "$typeVersion" of type "MetadataFull"',
        });
    }
    const typeVersion = val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
    if (!(val == void 0) && !sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting object for "extraData" of type "MetadataFull"',
        });
    }
    const extraData = val == void 0
        ? void 0
        : sdIsMap(val)
            ? Object.fromEntries(Object.entries(val).map(([k, v]) => [
                k,
                (function (v) {
                    return v;
                })(v),
            ]))
            : {};
    if (!(val.$parent == void 0) && !sdIsString(val.$parent)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$parent" of type "MetadataFull"',
        });
    }
    const parent = val.$parent == void 0 ? void 0 : val.$parent;
    if (!(val.$template == void 0) && !sdIsString(val.$template)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$template" of type "MetadataFull"',
        });
    }
    const template = val.$template == void 0 ? void 0 : val.$template;
    if (!(val.$scope == void 0) && !sdIsString(val.$scope)) {
        throw new BoxSdkError({
            message: 'Expecting string for "$scope" of type "MetadataFull"',
        });
    }
    const scope = val.$scope == void 0 ? void 0 : val.$scope;
    if (!(val.$version == void 0) && !sdIsNumber(val.$version)) {
        throw new BoxSdkError({
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