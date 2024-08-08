import { serializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { deserializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { serializeAiAgentBasicTextToolAsk } from './aiAgentBasicTextToolAsk.generated.js';
import { deserializeAiAgentBasicTextToolAsk } from './aiAgentBasicTextToolAsk.generated.js';
import { AiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { AiAgentBasicTextToolAsk } from './aiAgentBasicTextToolAsk.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiAgentAskTypeField = 'ai_agent_ask';
export interface AiAgentAsk {
  /**
   * The type of AI agent used to handle queries. */
  readonly type?: AiAgentAskTypeField;
  readonly longText?: AiAgentLongTextTool;
  readonly basicText?: AiAgentBasicTextToolAsk;
  readonly longTextMulti?: AiAgentLongTextTool;
  readonly basicTextMulti?: AiAgentBasicTextToolAsk;
}
export function serializeAiAgentAskTypeField(
  val: AiAgentAskTypeField
): SerializedData {
  return val;
}
export function deserializeAiAgentAskTypeField(
  val: SerializedData
): AiAgentAskTypeField {
  if (val == 'ai_agent_ask') {
    return val;
  }
  throw new BoxSdkError({ message: "Can't deserialize AiAgentAskTypeField" });
}
export function serializeAiAgentAsk(val: AiAgentAsk): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeAiAgentAskTypeField(val.type),
    ['long_text']:
      val.longText == void 0
        ? void 0
        : serializeAiAgentLongTextTool(val.longText),
    ['basic_text']:
      val.basicText == void 0
        ? void 0
        : serializeAiAgentBasicTextToolAsk(val.basicText),
    ['long_text_multi']:
      val.longTextMulti == void 0
        ? void 0
        : serializeAiAgentLongTextTool(val.longTextMulti),
    ['basic_text_multi']:
      val.basicTextMulti == void 0
        ? void 0
        : serializeAiAgentBasicTextToolAsk(val.basicTextMulti),
  };
}
export function deserializeAiAgentAsk(val: SerializedData): AiAgentAsk {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "AiAgentAsk"' });
  }
  const type: undefined | AiAgentAskTypeField =
    val.type == void 0 ? void 0 : deserializeAiAgentAskTypeField(val.type);
  const longText: undefined | AiAgentLongTextTool =
    val.long_text == void 0
      ? void 0
      : deserializeAiAgentLongTextTool(val.long_text);
  const basicText: undefined | AiAgentBasicTextToolAsk =
    val.basic_text == void 0
      ? void 0
      : deserializeAiAgentBasicTextToolAsk(val.basic_text);
  const longTextMulti: undefined | AiAgentLongTextTool =
    val.long_text_multi == void 0
      ? void 0
      : deserializeAiAgentLongTextTool(val.long_text_multi);
  const basicTextMulti: undefined | AiAgentBasicTextToolAsk =
    val.basic_text_multi == void 0
      ? void 0
      : deserializeAiAgentBasicTextToolAsk(val.basic_text_multi);
  return {
    type: type,
    longText: longText,
    basicText: basicText,
    longTextMulti: longTextMulti,
    basicTextMulti: basicTextMulti,
  } satisfies AiAgentAsk;
}
