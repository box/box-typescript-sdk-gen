import { deserializeAiSingleAgentResponseTypeField } from './aiSingleAgentResponse.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { deserializeDateTime } from '../internal/utils.js';
import { deserializeAiAgentAllowedEntity } from './aiAgentAllowedEntity.generated.js';
import { serializeAiSingleAgentResponse } from './aiSingleAgentResponse.generated.js';
import { serializeAiStudioAgentAskResponse } from './aiStudioAgentAskResponse.generated.js';
import { deserializeAiStudioAgentAskResponse } from './aiStudioAgentAskResponse.generated.js';
import { serializeAiStudioAgentTextGenResponse } from './aiStudioAgentTextGenResponse.generated.js';
import { deserializeAiStudioAgentTextGenResponse } from './aiStudioAgentTextGenResponse.generated.js';
import { serializeAiStudioAgentExtractResponse } from './aiStudioAgentExtractResponse.generated.js';
import { deserializeAiStudioAgentExtractResponse } from './aiStudioAgentExtractResponse.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiSingleAgentResponseFull(val) {
    const base = serializeAiSingleAgentResponse(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiSingleAgentResponseFull"',
        });
    }
    return {
        ...base,
        ...{
            ['ask']: val.ask == void 0
                ? val.ask
                : serializeAiStudioAgentAskResponse(val.ask),
            ['text_gen']: val.textGen == void 0
                ? val.textGen
                : serializeAiStudioAgentTextGenResponse(val.textGen),
            ['extract']: val.extract == void 0
                ? val.extract
                : serializeAiStudioAgentExtractResponse(val.extract),
        },
    };
}
export function deserializeAiSingleAgentResponseFull(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiSingleAgentResponseFull"',
        });
    }
    const ask = val.ask == void 0 ? void 0 : deserializeAiStudioAgentAskResponse(val.ask);
    const textGen = val.text_gen == void 0
        ? void 0
        : deserializeAiStudioAgentTextGenResponse(val.text_gen);
    const extract = val.extract == void 0
        ? void 0
        : deserializeAiStudioAgentExtractResponse(val.extract);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AiSingleAgentResponseFull" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiSingleAgentResponseFull"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeAiSingleAgentResponseTypeField(val.type);
    if (val.origin == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "origin" of type "AiSingleAgentResponseFull" to be defined',
        });
    }
    if (!sdIsString(val.origin)) {
        throw new BoxSdkError({
            message: 'Expecting string for "origin" of type "AiSingleAgentResponseFull"',
        });
    }
    const origin = val.origin;
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "AiSingleAgentResponseFull" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "AiSingleAgentResponseFull"',
        });
    }
    const name = val.name;
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "AiSingleAgentResponseFull" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiSingleAgentResponseFull"',
        });
    }
    const accessState = val.access_state;
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiSingleAgentResponseFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    const modifiedBy = val.modified_by == void 0 ? void 0 : deserializeUserBase(val.modified_by);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "AiSingleAgentResponseFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (!(val.icon_reference == void 0) && !sdIsString(val.icon_reference)) {
        throw new BoxSdkError({
            message: 'Expecting string for "icon_reference" of type "AiSingleAgentResponseFull"',
        });
    }
    const iconReference = val.icon_reference == void 0 ? void 0 : val.icon_reference;
    if (!(val.allowed_entities == void 0) && !sdIsList(val.allowed_entities)) {
        throw new BoxSdkError({
            message: 'Expecting array for "allowed_entities" of type "AiSingleAgentResponseFull"',
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
        ask: ask,
        textGen: textGen,
        extract: extract,
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
//# sourceMappingURL=aiSingleAgentResponseFull.generated.js.map