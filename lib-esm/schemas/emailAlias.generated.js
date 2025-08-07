import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeEmailAliasTypeField(val) {
    return val;
}
export function deserializeEmailAliasTypeField(val) {
    if (val == 'email_alias') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize EmailAliasTypeField" });
}
export function serializeEmailAlias(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeEmailAliasTypeField(val.type),
        ['email']: val.email,
        ['is_confirmed']: val.isConfirmed,
    };
}
export function deserializeEmailAlias(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "EmailAlias"' });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "EmailAlias"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeEmailAliasTypeField(val.type);
    if (!(val.email == void 0) && !sdIsString(val.email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "email" of type "EmailAlias"',
        });
    }
    const email = val.email == void 0 ? void 0 : val.email;
    if (!(val.is_confirmed == void 0) && !sdIsBoolean(val.is_confirmed)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_confirmed" of type "EmailAlias"',
        });
    }
    const isConfirmed = val.is_confirmed == void 0 ? void 0 : val.is_confirmed;
    return {
        id: id,
        type: type,
        email: email,
        isConfirmed: isConfirmed,
    };
}
//# sourceMappingURL=emailAlias.generated.js.map