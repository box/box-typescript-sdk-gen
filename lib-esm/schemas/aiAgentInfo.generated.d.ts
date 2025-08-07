import { SerializedData } from '../serialization/json.js';
export interface AiAgentInfoModelsField {
    /**
     * The name of the model used for the request. */
    readonly name?: string;
    /**
     * The provider that owns the model used for the request. */
    readonly provider?: string;
    /**
     * The supported purpose utilized by the model used for the request. */
    readonly supportedPurpose?: string;
    readonly rawData?: SerializedData;
}
export interface AiAgentInfo {
    /**
     * The models used for the request. */
    readonly models?: readonly AiAgentInfoModelsField[];
    /**
     * The processor used for the request. */
    readonly processor?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeAiAgentInfoModelsField(val: AiAgentInfoModelsField): SerializedData;
export declare function deserializeAiAgentInfoModelsField(val: SerializedData): AiAgentInfoModelsField;
export declare function serializeAiAgentInfo(val: AiAgentInfo): SerializedData;
export declare function deserializeAiAgentInfo(val: SerializedData): AiAgentInfo;
