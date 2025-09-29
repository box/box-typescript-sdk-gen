import { serializeAiAgentAsk } from './aiAgentAsk.generated';
import { deserializeAiAgentAsk } from './aiAgentAsk.generated';
import { serializeAiAgentReference } from './aiAgentReference.generated';
import { deserializeAiAgentReference } from './aiAgentReference.generated';
import { AiAgentAsk } from './aiAgentAsk.generated';
import { AiAgentReference } from './aiAgentReference.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type AiAgentAskOrAiAgentReference = AiAgentAsk | AiAgentReference;
export function serializeAiAgentAskOrAiAgentReference(
  val: any,
): SerializedData {
  if (val.type == 'ai_agent_ask') {
    return serializeAiAgentAsk(val);
  }
  if (val.type == 'ai_agent_id') {
    return serializeAiAgentReference(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentAskOrAiAgentReference(
  val: SerializedData,
): AiAgentAskOrAiAgentReference {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentAskOrAiAgentReference"',
    });
  }
  if (val.type == 'ai_agent_ask') {
    return deserializeAiAgentAsk(val);
  }
  if (val.type == 'ai_agent_id') {
    return deserializeAiAgentReference(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize AiAgentAskOrAiAgentReference",
  });
}
