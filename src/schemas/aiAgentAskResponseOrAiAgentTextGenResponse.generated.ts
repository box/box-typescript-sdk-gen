import { serializeAiAgentAskResponse } from './aiAgentAskResponse.generated.js';
import { deserializeAiAgentAskResponse } from './aiAgentAskResponse.generated.js';
import { serializeAiAgentTextGenResponse } from './aiAgentTextGenResponse.generated.js';
import { deserializeAiAgentTextGenResponse } from './aiAgentTextGenResponse.generated.js';
import { AiAgentAskResponse } from './aiAgentAskResponse.generated.js';
import { AiAgentTextGenResponse } from './aiAgentTextGenResponse.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiAgentAskResponseOrAiAgentTextGenResponse =
  | AiAgentAskResponse
  | AiAgentTextGenResponse;
export function serializeAiAgentAskResponseOrAiAgentTextGenResponse(
  val: any
): SerializedData {
  if (val.type == 'ai_agent_ask') {
    return serializeAiAgentAskResponse(val);
  }
  if (val.type == 'ai_agent_text_gen') {
    return serializeAiAgentTextGenResponse(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentAskResponseOrAiAgentTextGenResponse(
  val: SerializedData
): AiAgentAskResponseOrAiAgentTextGenResponse {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AiAgentAskResponseOrAiAgentTextGenResponse"',
    });
  }
  if (val.type == 'ai_agent_ask') {
    return deserializeAiAgentAskResponse(val);
  }
  if (val.type == 'ai_agent_text_gen') {
    return deserializeAiAgentTextGenResponse(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize AiAgentAskResponseOrAiAgentTextGenResponse",
  });
}
