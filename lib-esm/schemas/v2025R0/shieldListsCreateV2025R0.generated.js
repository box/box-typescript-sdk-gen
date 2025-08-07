import { serializeShieldListContentRequestV2025R0 } from './shieldListContentRequestV2025R0.generated.js';
import { deserializeShieldListContentRequestV2025R0 } from './shieldListContentRequestV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeShieldListsCreateV2025R0(val) {
    return {
        ['name']: val.name,
        ['description']: val.description,
        ['content']: serializeShieldListContentRequestV2025R0(val.content),
    };
}
export function deserializeShieldListsCreateV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldListsCreateV2025R0"',
        });
    }
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "ShieldListsCreateV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "ShieldListsCreateV2025R0"',
        });
    }
    const name = val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "ShieldListsCreateV2025R0"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (val.content == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "content" of type "ShieldListsCreateV2025R0" to be defined',
        });
    }
    const content = deserializeShieldListContentRequestV2025R0(val.content);
    return {
        name: name,
        description: description,
        content: content,
    };
}
//# sourceMappingURL=shieldListsCreateV2025R0.generated.js.map