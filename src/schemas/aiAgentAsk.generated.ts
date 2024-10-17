import { serializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { deserializeAiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { serializeAiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { deserializeAiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { AiAgentLongTextTool } from './aiAgentLongTextTool.generated.js';
import { AiAgentBasicTextTool } from './aiAgentBasicTextTool.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiAgentAskTypeField = 'ai_agent_ask';
export class AiAgentAsk {
  /**
   * The type of AI agent used to handle queries. */
  readonly type: AiAgentAskTypeField = 'ai_agent_ask' as AiAgentAskTypeField;
  readonly longText?: AiAgentLongTextTool;
  readonly basicText?: AiAgentBasicTextTool;
  readonly longTextMulti?: AiAgentLongTextTool;
  readonly basicTextMulti?: AiAgentBasicTextTool;
  readonly rawData?: SerializedData;
  constructor(
    fields: Omit<AiAgentAsk, 'type'> & Partial<Pick<AiAgentAsk, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.longText) {
      this.longText = fields.longText;
    }
    if (fields.basicText) {
      this.basicText = fields.basicText;
    }
    if (fields.longTextMulti) {
      this.longTextMulti = fields.longTextMulti;
    }
    if (fields.basicTextMulti) {
      this.basicTextMulti = fields.basicTextMulti;
    }
    if (fields.rawData) {
      this.rawData = fields.rawData;
    }
  }
}
export interface AiAgentAskInput {
  /**
   * The type of AI agent used to handle queries. */
  readonly type?: AiAgentAskTypeField;
  readonly longText?: AiAgentLongTextTool;
  readonly basicText?: AiAgentBasicTextTool;
  readonly longTextMulti?: AiAgentLongTextTool;
  readonly basicTextMulti?: AiAgentBasicTextTool;
  readonly rawData?: SerializedData;
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
    ['type']: serializeAiAgentAskTypeField(val.type),
    ['long_text']:
      val.longText == void 0
        ? void 0
        : serializeAiAgentLongTextTool(val.longText),
    ['basic_text']:
      val.basicText == void 0
        ? void 0
        : serializeAiAgentBasicTextTool(val.basicText),
    ['long_text_multi']:
      val.longTextMulti == void 0
        ? void 0
        : serializeAiAgentLongTextTool(val.longTextMulti),
    ['basic_text_multi']:
      val.basicTextMulti == void 0
        ? void 0
        : serializeAiAgentBasicTextTool(val.basicTextMulti),
  };
}
export function deserializeAiAgentAsk(val: SerializedData): AiAgentAsk {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "AiAgentAsk"' });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "AiAgentAsk" to be defined',
    });
  }
  const type: AiAgentAskTypeField = deserializeAiAgentAskTypeField(val.type);
  const longText: undefined | AiAgentLongTextTool =
    val.long_text == void 0
      ? void 0
      : deserializeAiAgentLongTextTool(val.long_text);
  const basicText: undefined | AiAgentBasicTextTool =
    val.basic_text == void 0
      ? void 0
      : deserializeAiAgentBasicTextTool(val.basic_text);
  const longTextMulti: undefined | AiAgentLongTextTool =
    val.long_text_multi == void 0
      ? void 0
      : deserializeAiAgentLongTextTool(val.long_text_multi);
  const basicTextMulti: undefined | AiAgentBasicTextTool =
    val.basic_text_multi == void 0
      ? void 0
      : deserializeAiAgentBasicTextTool(val.basic_text_multi);
  return {
    type: type,
    longText: longText,
    basicText: basicText,
    longTextMulti: longTextMulti,
    basicTextMulti: basicTextMulti,
  } satisfies AiAgentAsk;
}
export function serializeAiAgentAskInput(val: AiAgentAskInput): SerializedData {
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
        : serializeAiAgentBasicTextTool(val.basicText),
    ['long_text_multi']:
      val.longTextMulti == void 0
        ? void 0
        : serializeAiAgentLongTextTool(val.longTextMulti),
    ['basic_text_multi']:
      val.basicTextMulti == void 0
        ? void 0
        : serializeAiAgentBasicTextTool(val.basicTextMulti),
  };
}
export function deserializeAiAgentAskInput(
  val: SerializedData
): AiAgentAskInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "AiAgentAskInput"' });
  }
  const type: undefined | AiAgentAskTypeField =
    val.type == void 0 ? void 0 : deserializeAiAgentAskTypeField(val.type);
  const longText: undefined | AiAgentLongTextTool =
    val.long_text == void 0
      ? void 0
      : deserializeAiAgentLongTextTool(val.long_text);
  const basicText: undefined | AiAgentBasicTextTool =
    val.basic_text == void 0
      ? void 0
      : deserializeAiAgentBasicTextTool(val.basic_text);
  const longTextMulti: undefined | AiAgentLongTextTool =
    val.long_text_multi == void 0
      ? void 0
      : deserializeAiAgentLongTextTool(val.long_text_multi);
  const basicTextMulti: undefined | AiAgentBasicTextTool =
    val.basic_text_multi == void 0
      ? void 0
      : deserializeAiAgentBasicTextTool(val.basic_text_multi);
  return {
    type: type,
    longText: longText,
    basicText: basicText,
    longTextMulti: longTextMulti,
    basicTextMulti: basicTextMulti,
  } satisfies AiAgentAskInput;
}
