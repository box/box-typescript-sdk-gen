import { serializeFileMini } from './fileMini.generated.js';
import { deserializeFileMini } from './fileMini.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileMiniOrFolderMini(val) {
    if (val.type == 'file') {
        return serializeFileMini(val);
    }
    if (val.type == 'folder') {
        return serializeFolderMini(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileMiniOrFolderMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileMiniOrFolderMini"',
        });
    }
    if (val.type == 'file') {
        return deserializeFileMini(val);
    }
    if (val.type == 'folder') {
        return deserializeFolderMini(val);
    }
    throw new BoxSdkError({ message: "Can't deserialize FileMiniOrFolderMini" });
}
//# sourceMappingURL=fileMiniOrFolderMini.generated.js.map