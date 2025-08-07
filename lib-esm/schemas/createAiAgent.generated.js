import { serializeAiAgentAllowedEntity } from './aiAgentAllowedEntity.generated.js';
import { deserializeAiAgentAllowedEntity } from './aiAgentAllowedEntity.generated.js';
import { serializeAiStudioAgentAsk } from './aiStudioAgentAsk.generated.js';
import { deserializeAiStudioAgentAsk } from './aiStudioAgentAsk.generated.js';
import { serializeAiStudioAgentTextGen } from './aiStudioAgentTextGen.generated.js';
import { deserializeAiStudioAgentTextGen } from './aiStudioAgentTextGen.generated.js';
import { serializeAiStudioAgentExtract } from './aiStudioAgentExtract.generated.js';
import { deserializeAiStudioAgentExtract } from './aiStudioAgentExtract.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateAiAgent {
    constructor(fields) {
        /**
         * The type of agent used to handle queries. */
        this.type = 'ai_agent';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.accessState !== undefined) {
            this.accessState = fields.accessState;
        }
        if (fields.iconReference !== undefined) {
            this.iconReference = fields.iconReference;
        }
        if (fields.allowedEntities !== undefined) {
            this.allowedEntities = fields.allowedEntities;
        }
        if (fields.ask !== undefined) {
            this.ask = fields.ask;
        }
        if (fields.textGen !== undefined) {
            this.textGen = fields.textGen;
        }
        if (fields.extract !== undefined) {
            this.extract = fields.extract;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeCreateAiAgentTypeField(val) {
    return val;
}
export function deserializeCreateAiAgentTypeField(val) {
    if (val == 'ai_agent') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateAiAgentTypeField",
    });
}
export function serializeCreateAiAgent(val) {
    return {
        ['type']: serializeCreateAiAgentTypeField(val.type),
        ['name']: val.name,
        ['access_state']: val.accessState,
        ['icon_reference']: val.iconReference,
        ['allowed_entities']: val.allowedEntities == void 0
            ? val.allowedEntities
            : val.allowedEntities.map(function (item) {
                return serializeAiAgentAllowedEntity(item);
            }),
        ['ask']: val.ask == void 0 ? val.ask : serializeAiStudioAgentAsk(val.ask),
        ['text_gen']: val.textGen == void 0
            ? val.textGen
            : serializeAiStudioAgentTextGen(val.textGen),
        ['extract']: val.extract == void 0
            ? val.extract
            : serializeAiStudioAgentExtract(val.extract),
    };
}
export function deserializeCreateAiAgent(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "CreateAiAgent"' });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateAiAgent" to be defined',
        });
    }
    const type = deserializeCreateAiAgentTypeField(val.type);
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "CreateAiAgent" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CreateAiAgent"',
        });
    }
    const name = val.name;
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "CreateAiAgent" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "CreateAiAgent"',
        });
    }
    const accessState = val.access_state;
    if (!(val.icon_reference == void 0) && !sdIsString(val.icon_reference)) {
        throw new BoxSdkError({
            message: 'Expecting string for "icon_reference" of type "CreateAiAgent"',
        });
    }
    const iconReference = val.icon_reference == void 0 ? void 0 : val.icon_reference;
    if (!(val.allowed_entities == void 0) && !sdIsList(val.allowed_entities)) {
        throw new BoxSdkError({
            message: 'Expecting array for "allowed_entities" of type "CreateAiAgent"',
        });
    }
    const allowedEntities = val.allowed_entities == void 0
        ? void 0
        : sdIsList(val.allowed_entities)
            ? val.allowed_entities.map(function (itm) {
                return deserializeAiAgentAllowedEntity(itm);
            })
            : [];
    const ask = val.ask == void 0 ? void 0 : deserializeAiStudioAgentAsk(val.ask);
    const textGen = val.text_gen == void 0
        ? void 0
        : deserializeAiStudioAgentTextGen(val.text_gen);
    const extract = val.extract == void 0
        ? void 0
        : deserializeAiStudioAgentExtract(val.extract);
    return {
        type: type,
        name: name,
        accessState: accessState,
        iconReference: iconReference,
        allowedEntities: allowedEntities,
        ask: ask,
        textGen: textGen,
        extract: extract,
    };
}
export function serializeCreateAiAgentInput(val) {
    return {
        ['type']: val.type == void 0 ? val.type : serializeCreateAiAgentTypeField(val.type),
        ['name']: val.name,
        ['access_state']: val.accessState,
        ['icon_reference']: val.iconReference,
        ['allowed_entities']: val.allowedEntities == void 0
            ? val.allowedEntities
            : val.allowedEntities.map(function (item) {
                return serializeAiAgentAllowedEntity(item);
            }),
        ['ask']: val.ask == void 0 ? val.ask : serializeAiStudioAgentAsk(val.ask),
        ['text_gen']: val.textGen == void 0
            ? val.textGen
            : serializeAiStudioAgentTextGen(val.textGen),
        ['extract']: val.extract == void 0
            ? val.extract
            : serializeAiStudioAgentExtract(val.extract),
    };
}
export function deserializeCreateAiAgentInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateAiAgentInput"',
        });
    }
    const type = val.type == void 0 ? void 0 : deserializeCreateAiAgentTypeField(val.type);
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "CreateAiAgentInput" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CreateAiAgentInput"',
        });
    }
    const name = val.name;
    if (val.access_state == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "access_state" of type "CreateAiAgentInput" to be defined',
        });
    }
    if (!sdIsString(val.access_state)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_state" of type "CreateAiAgentInput"',
        });
    }
    const accessState = val.access_state;
    if (!(val.icon_reference == void 0) && !sdIsString(val.icon_reference)) {
        throw new BoxSdkError({
            message: 'Expecting string for "icon_reference" of type "CreateAiAgentInput"',
        });
    }
    const iconReference = val.icon_reference == void 0 ? void 0 : val.icon_reference;
    if (!(val.allowed_entities == void 0) && !sdIsList(val.allowed_entities)) {
        throw new BoxSdkError({
            message: 'Expecting array for "allowed_entities" of type "CreateAiAgentInput"',
        });
    }
    const allowedEntities = val.allowed_entities == void 0
        ? void 0
        : sdIsList(val.allowed_entities)
            ? val.allowed_entities.map(function (itm) {
                return deserializeAiAgentAllowedEntity(itm);
            })
            : [];
    const ask = val.ask == void 0 ? void 0 : deserializeAiStudioAgentAsk(val.ask);
    const textGen = val.text_gen == void 0
        ? void 0
        : deserializeAiStudioAgentTextGen(val.text_gen);
    const extract = val.extract == void 0
        ? void 0
        : deserializeAiStudioAgentExtract(val.extract);
    return {
        type: type,
        name: name,
        accessState: accessState,
        iconReference: iconReference,
        allowedEntities: allowedEntities,
        ask: ask,
        textGen: textGen,
        extract: extract,
    };
}
//# sourceMappingURL=createAiAgent.generated.js.map