import { serializeAiAgentExtract } from './aiAgentExtract.generated';
import { deserializeAiAgentExtract } from './aiAgentExtract.generated';
import { serializeAiAgentReference } from './aiAgentReference.generated';
import { deserializeAiAgentReference } from './aiAgentReference.generated';
import { AiAgentExtract } from './aiAgentExtract.generated';
import { AiAgentReference } from './aiAgentReference.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type AiAgentExtractOrAiAgentReference =
  | AiAgentExtract
  | AiAgentReference;
export function serializeAiAgentExtractOrAiAgentReference(
  val: any,
): SerializedData {
  if (val.type == 'ai_agent_extract') {
    return serializeAiAgentExtract(val);
  }
  if (val.type == 'ai_agent_id') {
    return serializeAiAgentReference(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentExtractOrAiAgentReference(
  val: SerializedData,
): AiAgentExtractOrAiAgentReference {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentExtractOrAiAgentReference"',
    });
  }
  if (val.type == 'ai_agent_extract') {
    return deserializeAiAgentExtract(val);
  }
  if (val.type == 'ai_agent_id') {
    return deserializeAiAgentReference(val);
  }
  throw new BoxSdkError({
    message: "Can't deserialize AiAgentExtractOrAiAgentReference",
  });
}
