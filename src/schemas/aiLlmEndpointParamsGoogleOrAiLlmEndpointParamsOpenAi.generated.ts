import { serializeAiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated.js';
import { deserializeAiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated.js';
import { serializeAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated.js';
import { deserializeAiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated.js';
import { AiLlmEndpointParamsGoogle } from './aiLlmEndpointParamsGoogle.generated.js';
import { AiLlmEndpointParamsOpenAi } from './aiLlmEndpointParamsOpenAi.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi =
  | AiLlmEndpointParamsGoogle
  | AiLlmEndpointParamsOpenAi;
export function serializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi(
  val: any
): SerializedData {
  if (val.type == 'google_params') {
    return serializeAiLlmEndpointParamsGoogle(val);
  }
  if (val.type == 'openai_params') {
    return serializeAiLlmEndpointParamsOpenAi(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi(
  val: SerializedData
): AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi"',
    });
  }
  if (val.type == 'google_params') {
    return deserializeAiLlmEndpointParamsGoogle(val);
  }
  if (val.type == 'openai_params') {
    return deserializeAiLlmEndpointParamsOpenAi(val);
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi",
  });
}
