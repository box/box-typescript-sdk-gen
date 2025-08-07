import { serializeFileFull } from './fileFull.generated.js';
import { deserializeFileFull } from './fileFull.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeWebLink } from './webLink.generated.js';
import { deserializeWebLink } from './webLink.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileFullOrFolderMiniOrWebLink(val) {
    if (val.type == 'file') {
        return serializeFileFull(val);
    }
    if (val.type == 'folder') {
        return serializeFolderMini(val);
    }
    if (val.type == 'web_link') {
        return serializeWebLink(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileFullOrFolderMiniOrWebLink(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileFullOrFolderMiniOrWebLink"',
        });
    }
    if (val.type == 'file') {
        return deserializeFileFull(val);
    }
    if (val.type == 'folder') {
        return deserializeFolderMini(val);
    }
    if (val.type == 'web_link') {
        return deserializeWebLink(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize FileFullOrFolderMiniOrWebLink",
    });
}
//# sourceMappingURL=fileFullOrFolderMiniOrWebLink.generated.js.map