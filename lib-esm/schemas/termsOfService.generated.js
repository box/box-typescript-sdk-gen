import { deserializeTermsOfServiceBaseTypeField } from './termsOfServiceBase.generated.js';
import { serializeTermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { TermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class TermsOfService extends TermsOfServiceBase {
    constructor(fields) {
        super(fields);
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.enterprise !== undefined) {
            this.enterprise = fields.enterprise;
        }
        if (fields.tosType !== undefined) {
            this.tosType = fields.tosType;
        }
        if (fields.text !== undefined) {
            this.text = fields.text;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
    }
}
export function serializeTermsOfServiceStatusField(val) {
    return val;
}
export function deserializeTermsOfServiceStatusField(val) {
    if (val == 'enabled') {
        return val;
    }
    if (val == 'disabled') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TermsOfServiceStatusField",
    });
}
export function serializeTermsOfServiceEnterpriseTypeField(val) {
    return val;
}
export function deserializeTermsOfServiceEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TermsOfServiceEnterpriseTypeField",
    });
}
export function serializeTermsOfServiceEnterpriseField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeTermsOfServiceEnterpriseTypeField(val.type),
        ['name']: val.name,
    };
}
export function deserializeTermsOfServiceEnterpriseField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceEnterpriseField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfServiceEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeTermsOfServiceEnterpriseTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "TermsOfServiceEnterpriseField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return {
        id: id,
        type: type,
        name: name,
    };
}
export function serializeTermsOfServiceTosTypeField(val) {
    return val;
}
export function deserializeTermsOfServiceTosTypeField(val) {
    if (val == 'managed') {
        return val;
    }
    if (val == 'external') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TermsOfServiceTosTypeField",
    });
}
export function serializeTermsOfService(val) {
    const base = serializeTermsOfServiceBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "TermsOfService"' });
    }
    return {
        ...base,
        ...{
            ['status']: val.status == void 0
                ? val.status
                : serializeTermsOfServiceStatusField(val.status),
            ['enterprise']: val.enterprise == void 0
                ? val.enterprise
                : serializeTermsOfServiceEnterpriseField(val.enterprise),
            ['tos_type']: val.tosType == void 0
                ? val.tosType
                : serializeTermsOfServiceTosTypeField(val.tosType),
            ['text']: val.text,
            ['created_at']: val.createdAt == void 0
                ? val.createdAt
                : serializeDateTime(val.createdAt),
            ['modified_at']: val.modifiedAt == void 0
                ? val.modifiedAt
                : serializeDateTime(val.modifiedAt),
        },
    };
}
export function deserializeTermsOfService(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "TermsOfService"' });
    }
    const status = val.status == void 0
        ? void 0
        : deserializeTermsOfServiceStatusField(val.status);
    const enterprise = val.enterprise == void 0
        ? void 0
        : deserializeTermsOfServiceEnterpriseField(val.enterprise);
    const tosType = val.tos_type == void 0
        ? void 0
        : deserializeTermsOfServiceTosTypeField(val.tos_type);
    if (!(val.text == void 0) && !sdIsString(val.text)) {
        throw new BoxSdkError({
            message: 'Expecting string for "text" of type "TermsOfService"',
        });
    }
    const text = val.text == void 0 ? void 0 : val.text;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "TermsOfService"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TermsOfService"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TermsOfService" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfService"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "TermsOfService" to be defined',
        });
    }
    const type = deserializeTermsOfServiceBaseTypeField(val.type);
    return {
        status: status,
        enterprise: enterprise,
        tosType: tosType,
        text: text,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=termsOfService.generated.js.map