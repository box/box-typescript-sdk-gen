import { serializeFileBase } from './fileBase.generated.js';
import { deserializeFileBase } from './fileBase.generated.js';
import { serializeFolderBase } from './folderBase.generated.js';
import { deserializeFolderBase } from './folderBase.generated.js';
import { serializeWebLinkBase } from './webLinkBase.generated.js';
import { deserializeWebLinkBase } from './webLinkBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileBaseOrFolderBaseOrWebLinkBase(val) {
    if (val.type == 'file') {
        return serializeFileBase(val);
    }
    if (val.type == 'folder') {
        return serializeFolderBase(val);
    }
    if (val.type == 'web_link') {
        return serializeWebLinkBase(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileBaseOrFolderBaseOrWebLinkBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileBaseOrFolderBaseOrWebLinkBase"',
        });
    }
    if (val.type == 'file') {
        return deserializeFileBase(val);
    }
    if (val.type == 'folder') {
        return deserializeFolderBase(val);
    }
    if (val.type == 'web_link') {
        return deserializeWebLinkBase(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize FileBaseOrFolderBaseOrWebLinkBase",
    });
}
//# sourceMappingURL=fileBaseOrFolderBaseOrWebLinkBase.generated.js.map