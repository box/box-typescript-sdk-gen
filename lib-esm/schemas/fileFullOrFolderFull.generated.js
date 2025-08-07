import { serializeFileFull } from './fileFull.generated.js';
import { deserializeFileFull } from './fileFull.generated.js';
import { serializeFolderFull } from './folderFull.generated.js';
import { deserializeFolderFull } from './folderFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileFullOrFolderFull(val) {
    if (val.type == 'file') {
        return serializeFileFull(val);
    }
    if (val.type == 'folder') {
        return serializeFolderFull(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileFullOrFolderFull(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileFullOrFolderFull"',
        });
    }
    if (val.type == 'file') {
        return deserializeFileFull(val);
    }
    if (val.type == 'folder') {
        return deserializeFolderFull(val);
    }
    throw new BoxSdkError({ message: "Can't deserialize FileFullOrFolderFull" });
}
//# sourceMappingURL=fileFullOrFolderFull.generated.js.map