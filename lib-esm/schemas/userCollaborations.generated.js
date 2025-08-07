import { deserializeUserBaseTypeField } from './userBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class UserCollaborations extends UserBase {
    constructor(fields) {
        super(fields);
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.login !== undefined) {
            this.login = fields.login;
        }
        if (fields.isActive !== undefined) {
            this.isActive = fields.isActive;
        }
    }
}
export function serializeUserCollaborations(val) {
    const base = serializeUserBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UserCollaborations"',
        });
    }
    return {
        ...base,
        ...{
            ['name']: val.name,
            ['login']: val.login,
            ['is_active']: val.isActive,
        },
    };
}
export function deserializeUserCollaborations(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UserCollaborations"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UserCollaborations"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.login == void 0) && !sdIsString(val.login)) {
        throw new BoxSdkError({
            message: 'Expecting string for "login" of type "UserCollaborations"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    if (!(val.is_active == void 0) && !sdIsBoolean(val.is_active)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_active" of type "UserCollaborations"',
        });
    }
    const isActive = val.is_active == void 0 ? void 0 : val.is_active;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UserCollaborations" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UserCollaborations"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "UserCollaborations" to be defined',
        });
    }
    const type = deserializeUserBaseTypeField(val.type);
    return {
        name: name,
        login: login,
        isActive: isActive,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=userCollaborations.generated.js.map