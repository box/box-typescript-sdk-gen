import { deserializeUserBaseV2025R0TypeField } from './userBaseV2025R0.generated.js';
import { serializeUserBaseV2025R0 } from './userBaseV2025R0.generated.js';
import { UserBaseV2025R0 } from './userBaseV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class UserMiniV2025R0 extends UserBaseV2025R0 {
    constructor(fields) {
        super(fields);
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.login !== undefined) {
            this.login = fields.login;
        }
    }
}
export function serializeUserMiniV2025R0(val) {
    const base = serializeUserBaseV2025R0(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UserMiniV2025R0"' });
    }
    return { ...base, ...{ ['name']: val.name, ['login']: val.login } };
}
export function deserializeUserMiniV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "UserMiniV2025R0"' });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UserMiniV2025R0"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.login == void 0) && !sdIsString(val.login)) {
        throw new BoxSdkError({
            message: 'Expecting string for "login" of type "UserMiniV2025R0"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UserMiniV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UserMiniV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "UserMiniV2025R0" to be defined',
        });
    }
    const type = deserializeUserBaseV2025R0TypeField(val.type);
    return {
        name: name,
        login: login,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=userMiniV2025R0.generated.js.map