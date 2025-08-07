import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AiAgentReference {
    constructor(fields) {
        /**
         * The type of AI agent used to handle queries. */
        this.type = 'ai_agent_id';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeAiAgentReferenceTypeField(val) {
    return val;
}
export function deserializeAiAgentReferenceTypeField(val) {
    if (val == 'ai_agent_id') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiAgentReferenceTypeField",
    });
}
export function serializeAiAgentReference(val) {
    return {
        ['type']: serializeAiAgentReferenceTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeAiAgentReference(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentReference"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiAgentReference" to be defined',
        });
    }
    const type = deserializeAiAgentReferenceTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiAgentReference"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
export function serializeAiAgentReferenceInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiAgentReferenceTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeAiAgentReferenceInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentReferenceInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiAgentReferenceTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiAgentReferenceInput"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
//# sourceMappingURL=aiAgentReference.generated.js.map