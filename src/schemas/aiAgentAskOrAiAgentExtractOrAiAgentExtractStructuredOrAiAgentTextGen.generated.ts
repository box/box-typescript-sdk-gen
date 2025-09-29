import { serializeAiAgentAsk } from './aiAgentAsk.generated';
import { deserializeAiAgentAsk } from './aiAgentAsk.generated';
import { serializeAiAgentExtract } from './aiAgentExtract.generated';
import { deserializeAiAgentExtract } from './aiAgentExtract.generated';
import { serializeAiAgentExtractStructured } from './aiAgentExtractStructured.generated';
import { deserializeAiAgentExtractStructured } from './aiAgentExtractStructured.generated';
import { serializeAiAgentTextGen } from './aiAgentTextGen.generated';
import { deserializeAiAgentTextGen } from './aiAgentTextGen.generated';
import { AiAgentAsk } from './aiAgentAsk.generated';
import { AiAgentExtract } from './aiAgentExtract.generated';
import { AiAgentExtractStructured } from './aiAgentExtractStructured.generated';
import { AiAgentTextGen } from './aiAgentTextGen.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen =
  AiAgentAsk | AiAgentExtract | AiAgentExtractStructured | AiAgentTextGen;
export function serializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen(
  val: any,
): SerializedData {
  if (val.type == 'ai_agent_ask') {
    return serializeAiAgentAsk(val);
  }
  if (val.type == 'ai_agent_extract') {
    return serializeAiAgentExtract(val);
  }
  if (val.type == 'ai_agent_extract_structured') {
    return serializeAiAgentExtractStructured(val);
  }
  if (val.type == 'ai_agent_text_gen') {
    return serializeAiAgentTextGen(val);
  }
  throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen(
  val: SerializedData,
): AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen"',
    });
  }
  if (val.type == 'ai_agent_ask') {
    return deserializeAiAgentAsk(val);
  }
  if (val.type == 'ai_agent_extract') {
    return deserializeAiAgentExtract(val);
  }
  if (val.type == 'ai_agent_extract_structured') {
    return deserializeAiAgentExtractStructured(val);
  }
  if (val.type == 'ai_agent_text_gen') {
    return deserializeAiAgentTextGen(val);
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen",
  });
}
