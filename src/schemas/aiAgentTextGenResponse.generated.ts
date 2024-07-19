import { serializeAiAgentBasicGenTool } from './aiAgentBasicGenTool.generated.js';
import { deserializeAiAgentBasicGenTool } from './aiAgentBasicGenTool.generated.js';
import { AiAgentBasicGenTool } from './aiAgentBasicGenTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiAgentTextGenResponseTypeField = 'ai_agent_text_gen';
export interface AiAgentTextGenResponse {
  readonly type?: AiAgentTextGenResponseTypeField;
  readonly basicGen?: AiAgentBasicGenTool;
}
export function serializeAiAgentTextGenResponseTypeField(
  val: AiAgentTextGenResponseTypeField
): SerializedData {
  return val;
}
export function deserializeAiAgentTextGenResponseTypeField(
  val: SerializedData
): AiAgentTextGenResponseTypeField {
  if (val == 'ai_agent_text_gen') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize AiAgentTextGenResponseTypeField",
  });
}
export function serializeAiAgentTextGenResponse(
  val: AiAgentTextGenResponse
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeAiAgentTextGenResponseTypeField(val.type),
    ['basic_gen']:
      val.basicGen == void 0
        ? void 0
        : serializeAiAgentBasicGenTool(val.basicGen),
  };
}
export function deserializeAiAgentTextGenResponse(
  val: SerializedData
): AiAgentTextGenResponse {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiAgentTextGenResponse"',
    });
  }
  const type: undefined | AiAgentTextGenResponseTypeField =
    val.type == void 0
      ? void 0
      : deserializeAiAgentTextGenResponseTypeField(val.type);
  const basicGen: undefined | AiAgentBasicGenTool =
    val.basic_gen == void 0
      ? void 0
      : deserializeAiAgentBasicGenTool(val.basic_gen);
  return { type: type, basicGen: basicGen } satisfies AiAgentTextGenResponse;
}
