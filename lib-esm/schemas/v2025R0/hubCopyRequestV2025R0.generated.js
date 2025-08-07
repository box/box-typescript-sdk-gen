import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeHubCopyRequestV2025R0(val) {
    return { ['title']: val.title, ['description']: val.description };
}
export function deserializeHubCopyRequestV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCopyRequestV2025R0"',
        });
    }
    if (!(val.title == void 0) && !sdIsString(val.title)) {
        throw new BoxSdkError({
            message: 'Expecting string for "title" of type "HubCopyRequestV2025R0"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "HubCopyRequestV2025R0"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    return {
        title: title,
        description: description,
    };
}
//# sourceMappingURL=hubCopyRequestV2025R0.generated.js.map