import { serializeFile } from './file.generated.js';
import { deserializeFile } from './file.generated.js';
import { serializeFolder } from './folder.generated.js';
import { deserializeFolder } from './folder.generated.js';
import { serializeWebLink } from './webLink.generated.js';
import { deserializeWebLink } from './webLink.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileOrFolderOrWebLink(val) {
    if (val.type == 'file') {
        return serializeFile(val);
    }
    if (val.type == 'folder') {
        return serializeFolder(val);
    }
    if (val.type == 'web_link') {
        return serializeWebLink(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileOrFolderOrWebLink(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileOrFolderOrWebLink"',
        });
    }
    if (val.type == 'file') {
        return deserializeFile(val);
    }
    if (val.type == 'folder') {
        return deserializeFolder(val);
    }
    if (val.type == 'web_link') {
        return deserializeWebLink(val);
    }
    throw new BoxSdkError({ message: "Can't deserialize FileOrFolderOrWebLink" });
}
//# sourceMappingURL=fileOrFolderOrWebLink.generated.js.map