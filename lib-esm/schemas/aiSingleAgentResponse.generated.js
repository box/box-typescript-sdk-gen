import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeAiAgentAllowedEntity } from './aiAgentAllowedEntity.generated.js';
import { deserializeAiAgentAllowedEntity } from './aiAgentAllowedEntity.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiSingleAgentResponseTypeField(val) {
    return val;
}
export function deserializeAiSingleAgentResponseTypeField(val) {
    if (val == 'ai_agent') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiSingleAgentResponseTypeField",
    });
}
export function serializeAiSingleAgentResponse(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeAiSingleAgentResponseTypeField(val.type),
        ['origin']: val.origin,
        ['name']: val.name,
        ['access_state']: val.accessState,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserBase(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['modified_by']: val.modifiedBy == void 0
            ? val.modifiedBy
            : serializeUserBase(val.modifiedBy),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : serializeDateTime(val.modifiedAt),
        ['icon_reference']: val.iconReference,
        ['allowed_entities']: val.allowedEntities == void 0
            ? val.allowedEntities
            : val.allowedEntities.map(function (item) {
                return serializeAiAgentAllowedEntity(item);
            }),
    };
}
export function deserializeAiSingleAgentResponse(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiSingleAgentResponse"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AiSingleAgentResponse" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiSingleAgentResponse"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeAiSingleAgentResponseTypeField(val.type);
    if (val.origin == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "origin" of type "AiSingleAgentResponse" to be defined',
        });
    }
    if (!sdIsString(val.origin)) {
        throw new BoxSdkError({
            message: 'Expecting string for "origin" of type "AiSingleAgentResponse"',
        });
    }
    const origin = val.origin;
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "AiSingleAgentResponse" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "AiSingleAgentResponse"',
        });
    }
    const name = val.name;
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "AiSingleAgentResponse" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiSingleAgentResponse"',
        });
    }
    const accessState = val.access_state;
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiSingleAgentResponse"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    const modifiedBy = val.modified_by == void 0 ? void 0 : deserializeUserBase(val.modified_by);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "AiSingleAgentResponse"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (!(val.icon_reference == void 0) && !sdIsString(val.icon_reference)) {
        throw new BoxSdkError({
            message: 'Expecting string for "icon_reference" of type "AiSingleAgentResponse"',
        });
    }
    const iconReference = val.icon_reference == void 0 ? void 0 : val.icon_reference;
    if (!(val.allowed_entities == void 0) && !sdIsList(val.allowed_entities)) {
        throw new BoxSdkError({
            message: 'Expecting array for "allowed_entities" of type "AiSingleAgentResponse"',
        });
    }
    const allowedEntities = val.allowed_entities == void 0
        ? void 0
        : sdIsList(val.allowed_entities)
            ? val.allowed_entities.map(function (itm) {
                return deserializeAiAgentAllowedEntity(itm);
            })
            : [];
    return {
        id: id,
        type: type,
        origin: origin,
        name: name,
        accessState: accessState,
        createdBy: createdBy,
        createdAt: createdAt,
        modifiedBy: modifiedBy,
        modifiedAt: modifiedAt,
        iconReference: iconReference,
        allowedEntities: allowedEntities,
    };
}
//# sourceMappingURL=aiSingleAgentResponse.generated.js.map