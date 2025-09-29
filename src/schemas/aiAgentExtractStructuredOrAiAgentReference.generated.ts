import { serializeAiAgentExtractStructured } from './aiAgentExtractStructured.generated';
import { deserializeAiAgentExtractStructured } from './aiAgentExtractStructured.generated';
import { serializeAiAgentReference } from './aiAgentReference.generated';
import { deserializeAiAgentReference } from './aiAgentReference.generated';
import { AiAgentExtractStructured } from './aiAgentExtractStructured.generated';
import { AiAgentReference } from './aiAgentReference.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type AiAgentExtractStructuredOrAiAgentReference =
  | AiAgentExtractStructured
  | AiAgentReference;
export function serializeAiAgentExtractStructuredOrAiAgentReference(
  val: any,
): SerializedData {
  if (val.type == 'ai_agent_extract_structured') {
    return serializeAiAgentExtractStructured(val);
  }
  if (val.type == 'ai_agent_id') {
    return serializeAiAgentReference(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentExtractStructuredOrAiAgentReference(
  val: SerializedData,
): AiAgentExtractStructuredOrAiAgentReference {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AiAgentExtractStructuredOrAiAgentReference"',
    });
  }
  if (val.type == 'ai_agent_extract_structured') {
    return deserializeAiAgentExtractStructured(val);
  }
  if (val.type == 'ai_agent_id') {
    return deserializeAiAgentReference(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize AiAgentExtractStructuredOrAiAgentReference",
  });
}
