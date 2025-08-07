import { deserializeUserBaseTypeField } from './userBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class UserIntegrationMappings extends UserBase {
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
export function serializeUserIntegrationMappings(val) {
    const base = serializeUserBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UserIntegrationMappings"',
        });
    }
    return { ...base, ...{ ['name']: val.name, ['login']: val.login } };
}
export function deserializeUserIntegrationMappings(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UserIntegrationMappings"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UserIntegrationMappings"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.login == void 0) && !sdIsString(val.login)) {
        throw new BoxSdkError({
            message: 'Expecting string for "login" of type "UserIntegrationMappings"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UserIntegrationMappings" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UserIntegrationMappings"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "UserIntegrationMappings" to be defined',
        });
    }
    const type = deserializeUserBaseTypeField(val.type);
    return {
        name: name,
        login: login,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=userIntegrationMappings.generated.js.map