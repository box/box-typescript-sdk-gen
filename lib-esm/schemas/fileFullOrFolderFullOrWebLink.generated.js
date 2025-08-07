import { serializeFileFull } from './fileFull.generated.js';
import { deserializeFileFull } from './fileFull.generated.js';
import { serializeFolderFull } from './folderFull.generated.js';
import { deserializeFolderFull } from './folderFull.generated.js';
import { serializeWebLink } from './webLink.generated.js';
import { deserializeWebLink } from './webLink.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileFullOrFolderFullOrWebLink(val) {
    if (val.type == 'file') {
        return serializeFileFull(val);
    }
    if (val.type == 'folder') {
        return serializeFolderFull(val);
    }
    if (val.type == 'web_link') {
        return serializeWebLink(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileFullOrFolderFullOrWebLink(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileFullOrFolderFullOrWebLink"',
        });
    }
    if (val.type == 'file') {
        return deserializeFileFull(val);
    }
    if (val.type == 'folder') {
        return deserializeFolderFull(val);
    }
    if (val.type == 'web_link') {
        return deserializeWebLink(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize FileFullOrFolderFullOrWebLink",
    });
}
//# sourceMappingURL=fileFullOrFolderFullOrWebLink.generated.js.map