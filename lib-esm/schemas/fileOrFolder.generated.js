import { serializeFile } from './file.generated.js';
import { deserializeFile } from './file.generated.js';
import { serializeFolder } from './folder.generated.js';
import { deserializeFolder } from './folder.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileOrFolder(val) {
    if (val.type == 'file') {
        return serializeFile(val);
    }
    if (val.type == 'folder') {
        return serializeFolder(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeFileOrFolder(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FileOrFolder"' });
    }
    if (val.type == 'file') {
        return deserializeFile(val);
    }
    if (val.type == 'folder') {
        return deserializeFolder(val);
    }
    throw new BoxSdkError({ message: "Can't deserialize FileOrFolder" });
}
//# sourceMappingURL=fileOrFolder.generated.js.map