import { AiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated.js';
import { AiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated.js';
import { AiLlmEndpointParamsAws } from './aiLlmEndpointParamsAws.generated.js';
import { AiLlmEndpointParamsIbm } from './aiLlmEndpointParamsIbm.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AiLlmEndpointParams = AiLlmEndpointParamsOpenAi | AiLlmEndpointParamsGoogle | AiLlmEndpointParamsAws | AiLlmEndpointParamsIbm;
export declare function serializeAiLlmEndpointParams(val: any): SerializedData;
export declare function deserializeAiLlmEndpointParams(val: SerializedData): AiLlmEndpointParams;
//# sourceMappingURL=aiLlmEndpointParams.generated.d.ts.map