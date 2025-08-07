import { serializeFileOrFolder } from './fileOrFolder.generated.js';
import { deserializeFileOrFolder } from './fileOrFolder.generated.js';
import { serializeEvent } from './event.generated.js';
import { deserializeEvent } from './event.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeSkillInvocationTypeField(val) {
    return val;
}
export function deserializeSkillInvocationTypeField(val) {
    if (val == 'skill_invocation') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SkillInvocationTypeField",
    });
}
export function serializeSkillInvocationSkillTypeField(val) {
    return val;
}
export function deserializeSkillInvocationSkillTypeField(val) {
    if (val == 'skill') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SkillInvocationSkillTypeField",
    });
}
export function serializeSkillInvocationSkillField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeSkillInvocationSkillTypeField(val.type),
        ['name']: val.name,
        ['api_key']: val.apiKey,
    };
}
export function deserializeSkillInvocationSkillField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SkillInvocationSkillField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "SkillInvocationSkillField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeSkillInvocationSkillTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "SkillInvocationSkillField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.api_key == void 0) && !sdIsString(val.api_key)) {
        throw new BoxSdkError({
            message: 'Expecting string for "api_key" of type "SkillInvocationSkillField"',
        });
    }
    const apiKey = val.api_key == void 0 ? void 0 : val.api_key;
    return {
        id: id,
        type: type,
        name: name,
        apiKey: apiKey,
    };
}
export function serializeSkillInvocationTokenReadTokenTypeField(val) {
    return val;
}
export function deserializeSkillInvocationTokenReadTokenTypeField(val) {
    if (val == 'bearer') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SkillInvocationTokenReadTokenTypeField",
    });
}
export function serializeSkillInvocationTokenReadField(val) {
    return {
        ['access_token']: val.accessToken,
        ['expires_in']: val.expiresIn,
        ['token_type']: val.tokenType == void 0
            ? val.tokenType
            : serializeSkillInvocationTokenReadTokenTypeField(val.tokenType),
        ['restricted_to']: val.restrictedTo,
    };
}
export function deserializeSkillInvocationTokenReadField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SkillInvocationTokenReadField"',
        });
    }
    if (!(val.access_token == void 0) && !sdIsString(val.access_token)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_token" of type "SkillInvocationTokenReadField"',
        });
    }
    const accessToken = val.access_token == void 0 ? void 0 : val.access_token;
    if (!(val.expires_in == void 0) && !sdIsNumber(val.expires_in)) {
        throw new BoxSdkError({
            message: 'Expecting number for "expires_in" of type "SkillInvocationTokenReadField"',
        });
    }
    const expiresIn = val.expires_in == void 0 ? void 0 : val.expires_in;
    const tokenType = val.token_type == void 0
        ? void 0
        : deserializeSkillInvocationTokenReadTokenTypeField(val.token_type);
    if (!(val.restricted_to == void 0) && !sdIsString(val.restricted_to)) {
        throw new BoxSdkError({
            message: 'Expecting string for "restricted_to" of type "SkillInvocationTokenReadField"',
        });
    }
    const restrictedTo = val.restricted_to == void 0 ? void 0 : val.restricted_to;
    return {
        accessToken: accessToken,
        expiresIn: expiresIn,
        tokenType: tokenType,
        restrictedTo: restrictedTo,
    };
}
export function serializeSkillInvocationTokenWriteTokenTypeField(val) {
    return val;
}
export function deserializeSkillInvocationTokenWriteTokenTypeField(val) {
    if (val == 'bearer') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SkillInvocationTokenWriteTokenTypeField",
    });
}
export function serializeSkillInvocationTokenWriteField(val) {
    return {
        ['access_token']: val.accessToken,
        ['expires_in']: val.expiresIn,
        ['token_type']: val.tokenType == void 0
            ? val.tokenType
            : serializeSkillInvocationTokenWriteTokenTypeField(val.tokenType),
        ['restricted_to']: val.restrictedTo,
    };
}
export function deserializeSkillInvocationTokenWriteField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SkillInvocationTokenWriteField"',
        });
    }
    if (!(val.access_token == void 0) && !sdIsString(val.access_token)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_token" of type "SkillInvocationTokenWriteField"',
        });
    }
    const accessToken = val.access_token == void 0 ? void 0 : val.access_token;
    if (!(val.expires_in == void 0) && !sdIsNumber(val.expires_in)) {
        throw new BoxSdkError({
            message: 'Expecting number for "expires_in" of type "SkillInvocationTokenWriteField"',
        });
    }
    const expiresIn = val.expires_in == void 0 ? void 0 : val.expires_in;
    const tokenType = val.token_type == void 0
        ? void 0
        : deserializeSkillInvocationTokenWriteTokenTypeField(val.token_type);
    if (!(val.restricted_to == void 0) && !sdIsString(val.restricted_to)) {
        throw new BoxSdkError({
            message: 'Expecting string for "restricted_to" of type "SkillInvocationTokenWriteField"',
        });
    }
    const restrictedTo = val.restricted_to == void 0 ? void 0 : val.restricted_to;
    return {
        accessToken: accessToken,
        expiresIn: expiresIn,
        tokenType: tokenType,
        restrictedTo: restrictedTo,
    };
}
export function serializeSkillInvocationTokenField(val) {
    return {
        ['read']: val.read == void 0
            ? val.read
            : serializeSkillInvocationTokenReadField(val.read),
        ['write']: val.write == void 0
            ? val.write
            : serializeSkillInvocationTokenWriteField(val.write),
    };
}
export function deserializeSkillInvocationTokenField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SkillInvocationTokenField"',
        });
    }
    const read = val.read == void 0
        ? void 0
        : deserializeSkillInvocationTokenReadField(val.read);
    const write = val.write == void 0
        ? void 0
        : deserializeSkillInvocationTokenWriteField(val.write);
    return { read: read, write: write };
}
export function serializeSkillInvocationStatusStateField(val) {
    return val;
}
export function deserializeSkillInvocationStatusStateField(val) {
    if (val == 'invoked') {
        return val;
    }
    if (val == 'processing') {
        return val;
    }
    if (val == 'success') {
        return val;
    }
    if (val == 'transient_failure') {
        return val;
    }
    if (val == 'permanent_failure') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SkillInvocationStatusStateField",
    });
}
export function serializeSkillInvocationStatusField(val) {
    return {
        ['state']: val.state == void 0
            ? val.state
            : serializeSkillInvocationStatusStateField(val.state),
        ['message']: val.message,
        ['error_code']: val.errorCode,
        ['additional_info']: val.additionalInfo,
    };
}
export function deserializeSkillInvocationStatusField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SkillInvocationStatusField"',
        });
    }
    const state = val.state == void 0
        ? void 0
        : deserializeSkillInvocationStatusStateField(val.state);
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "SkillInvocationStatusField"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.error_code == void 0) && !sdIsString(val.error_code)) {
        throw new BoxSdkError({
            message: 'Expecting string for "error_code" of type "SkillInvocationStatusField"',
        });
    }
    const errorCode = val.error_code == void 0 ? void 0 : val.error_code;
    if (!(val.additional_info == void 0) && !sdIsString(val.additional_info)) {
        throw new BoxSdkError({
            message: 'Expecting string for "additional_info" of type "SkillInvocationStatusField"',
        });
    }
    const additionalInfo = val.additional_info == void 0 ? void 0 : val.additional_info;
    return {
        state: state,
        message: message,
        errorCode: errorCode,
        additionalInfo: additionalInfo,
    };
}
export function serializeSkillInvocationEnterpriseTypeField(val) {
    return val;
}
export function deserializeSkillInvocationEnterpriseTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SkillInvocationEnterpriseTypeField",
    });
}
export function serializeSkillInvocationEnterpriseField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeSkillInvocationEnterpriseTypeField(val.type),
        ['name']: val.name,
    };
}
export function deserializeSkillInvocationEnterpriseField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SkillInvocationEnterpriseField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "SkillInvocationEnterpriseField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeSkillInvocationEnterpriseTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "SkillInvocationEnterpriseField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return {
        id: id,
        type: type,
        name: name,
    };
}
export function serializeSkillInvocation(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeSkillInvocationTypeField(val.type),
        ['id']: val.id,
        ['skill']: val.skill == void 0
            ? val.skill
            : serializeSkillInvocationSkillField(val.skill),
        ['token']: val.token == void 0
            ? val.token
            : serializeSkillInvocationTokenField(val.token),
        ['status']: val.status == void 0
            ? val.status
            : serializeSkillInvocationStatusField(val.status),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['trigger']: val.trigger,
        ['enterprise']: val.enterprise == void 0
            ? val.enterprise
            : serializeSkillInvocationEnterpriseField(val.enterprise),
        ['source']: val.source == void 0 ? val.source : serializeFileOrFolder(val.source),
        ['event']: val.event == void 0 ? val.event : serializeEvent(val.event),
    };
}
export function deserializeSkillInvocation(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "SkillInvocation"' });
    }
    const type = val.type == void 0 ? void 0 : deserializeSkillInvocationTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "SkillInvocation"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const skill = val.skill == void 0
        ? void 0
        : deserializeSkillInvocationSkillField(val.skill);
    const token = val.token == void 0
        ? void 0
        : deserializeSkillInvocationTokenField(val.token);
    const status = val.status == void 0
        ? void 0
        : deserializeSkillInvocationStatusField(val.status);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "SkillInvocation"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.trigger == void 0) && !sdIsString(val.trigger)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trigger" of type "SkillInvocation"',
        });
    }
    const trigger = val.trigger == void 0 ? void 0 : val.trigger;
    const enterprise = val.enterprise == void 0
        ? void 0
        : deserializeSkillInvocationEnterpriseField(val.enterprise);
    const source = val.source == void 0 ? void 0 : deserializeFileOrFolder(val.source);
    const event = val.event == void 0 ? void 0 : deserializeEvent(val.event);
    return {
        type: type,
        id: id,
        skill: skill,
        token: token,
        status: status,
        createdAt: createdAt,
        trigger: trigger,
        enterprise: enterprise,
        source: source,
        event: event,
    };
}
//# sourceMappingURL=skillInvocation.generated.js.map