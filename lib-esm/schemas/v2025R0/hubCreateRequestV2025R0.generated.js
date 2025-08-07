import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeHubCreateRequestV2025R0(val) {
    return { ['title']: val.title, ['description']: val.description };
}
export function deserializeHubCreateRequestV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCreateRequestV2025R0"',
        });
    }
    if (val.title == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "title" of type "HubCreateRequestV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.title)) {
        throw new BoxSdkError({
            message: 'Expecting string for "title" of type "HubCreateRequestV2025R0"',
        });
    }
    const title = val.title;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "HubCreateRequestV2025R0"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    return {
        title: title,
        description: description,
    };
}
//# sourceMappingURL=hubCreateRequestV2025R0.generated.js.map