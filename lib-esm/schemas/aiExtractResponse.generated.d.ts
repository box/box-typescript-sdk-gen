import { SerializedData } from '../serialization/json.js';
export interface AiExtractResponse {
    readonly rawData?: SerializedData;
}
export declare function serializeAiExtractResponse(val: AiExtractResponse): SerializedData;
export declare function deserializeAiExtractResponse(val: SerializedData): AiExtractResponse;
