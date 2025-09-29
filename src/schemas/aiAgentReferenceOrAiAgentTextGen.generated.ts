import { serializeAiAgentReference } from './aiAgentReference.generated';
import { deserializeAiAgentReference } from './aiAgentReference.generated';
import { serializeAiAgentTextGen } from './aiAgentTextGen.generated';
import { deserializeAiAgentTextGen } from './aiAgentTextGen.generated';
import { AiAgentReference } from './aiAgentReference.generated';
import { AiAgentTextGen } from './aiAgentTextGen.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type AiAgentReferenceOrAiAgentTextGen =
  | AiAgentReference
  | AiAgentTextGen;
export function serializeAiAgentReferenceOrAiAgentTextGen(
  val: any,
): SerializedData {
  if (val.type == 'ai_agent_id') {
    return serializeAiAgentReference(val);
  }
  if (val.type == 'ai_agent_text_gen') {
    return serializeAiAgentTextGen(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentReferenceOrAiAgentTextGen(
  val: SerializedData,
): AiAgentReferenceOrAiAgentTextGen {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentReferenceOrAiAgentTextGen"',
    });
  }
  if (val.type == 'ai_agent_id') {
    return deserializeAiAgentReference(val);
  }
  if (val.type == 'ai_agent_text_gen') {
    return deserializeAiAgentTextGen(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize AiAgentReferenceOrAiAgentTextGen",
  });
}
