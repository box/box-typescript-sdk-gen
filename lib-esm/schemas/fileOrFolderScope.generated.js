import { serializeFileMiniOrFolderMini } from './fileMiniOrFolderMini.generated.js';
import { deserializeFileMiniOrFolderMini } from './fileMiniOrFolderMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileOrFolderScopeScopeField(val) {
    return val;
}
export function deserializeFileOrFolderScopeScopeField(val) {
    if (val == 'annotation_edit') {
        return val;
    }
    if (val == 'annotation_view_all') {
        return val;
    }
    if (val == 'annotation_view_self') {
        return val;
    }
    if (val == 'base_explorer') {
        return val;
    }
    if (val == 'base_picker') {
        return val;
    }
    if (val == 'base_preview') {
        return val;
    }
    if (val == 'base_upload') {
        return val;
    }
    if (val == 'item_delete') {
        return val;
    }
    if (val == 'item_download') {
        return val;
    }
    if (val == 'item_preview') {
        return val;
    }
    if (val == 'item_rename') {
        return val;
    }
    if (val == 'item_share') {
        return val;
    }
    if (val == 'item_upload') {
        return val;
    }
    if (val == 'item_read') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FileOrFolderScopeScopeField",
    });
}
export function serializeFileOrFolderScope(val) {
    return {
        ['scope']: val.scope == void 0
            ? val.scope
            : serializeFileOrFolderScopeScopeField(val.scope),
        ['object']: val.object == void 0
            ? val.object
            : serializeFileMiniOrFolderMini(val.object),
    };
}
export function deserializeFileOrFolderScope(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileOrFolderScope"',
        });
    }
    const scope = val.scope == void 0
        ? void 0
        : deserializeFileOrFolderScopeScopeField(val.scope);
    const object = val.object == void 0 ? void 0 : deserializeFileMiniOrFolderMini(val.object);
    return { scope: scope, object: object };
}
//# sourceMappingURL=fileOrFolderScope.generated.js.map