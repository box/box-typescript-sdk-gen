import { serializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { deserializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { serializeFolderReferenceV2025R0 } from './folderReferenceV2025R0.generated.js';
import { deserializeFolderReferenceV2025R0 } from './folderReferenceV2025R0.generated.js';
import { serializeWeblinkReferenceV2025R0 } from './weblinkReferenceV2025R0.generated.js';
import { deserializeWeblinkReferenceV2025R0 } from './weblinkReferenceV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeHubItemReferenceV2025R0(val) {
    if (val.type == 'file') {
        return serializeFileReferenceV2025R0(val);
    }
    if (val.type == 'folder') {
        return serializeFolderReferenceV2025R0(val);
    }
    if (val.type == 'weblink') {
        return serializeWeblinkReferenceV2025R0(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeHubItemReferenceV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubItemReferenceV2025R0"',
        });
    }
    if (val.type == 'file') {
        return deserializeFileReferenceV2025R0(val);
    }
    if (val.type == 'folder') {
        return deserializeFolderReferenceV2025R0(val);
    }
    if (val.type == 'weblink') {
        return deserializeWeblinkReferenceV2025R0(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize HubItemReferenceV2025R0",
    });
}
//# sourceMappingURL=hubItemReferenceV2025R0.generated.js.map