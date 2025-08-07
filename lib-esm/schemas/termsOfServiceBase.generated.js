import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class TermsOfServiceBase {
    constructor(fields) {
        /**
         * The value will always be `terms_of_service`. */
        this.type = 'terms_of_service';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeTermsOfServiceBaseTypeField(val) {
    return val;
}
export function deserializeTermsOfServiceBaseTypeField(val) {
    if (val == 'terms_of_service') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TermsOfServiceBaseTypeField",
    });
}
export function serializeTermsOfServiceBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeTermsOfServiceBaseTypeField(val.type),
    };
}
export function deserializeTermsOfServiceBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceBase"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TermsOfServiceBase" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfServiceBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "TermsOfServiceBase" to be defined',
        });
    }
    const type = deserializeTermsOfServiceBaseTypeField(val.type);
    return { id: id, type: type };
}
export function serializeTermsOfServiceBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeTermsOfServiceBaseTypeField(val.type),
    };
}
export function deserializeTermsOfServiceBaseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TermsOfServiceBaseInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfServiceBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeTermsOfServiceBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=termsOfServiceBase.generated.js.map