import { serializeAiStudioAgentLongTextToolResponse } from './aiStudioAgentLongTextToolResponse.generated.js';
import { deserializeAiStudioAgentLongTextToolResponse } from './aiStudioAgentLongTextToolResponse.generated.js';
import { serializeAiStudioAgentBasicTextToolResponse } from './aiStudioAgentBasicTextToolResponse.generated.js';
import { deserializeAiStudioAgentBasicTextToolResponse } from './aiStudioAgentBasicTextToolResponse.generated.js';
import { AiStudioAgentLongTextToolResponse } from './aiStudioAgentLongTextToolResponse.generated.js';
import { AiStudioAgentBasicTextToolResponse } from './aiStudioAgentBasicTextToolResponse.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiStudioAgentAskResponseTypeField = 'ai_agent_ask';
export class AiStudioAgentAskResponse {
  /**
   * The type of AI agent used to handle queries. */
  readonly type: AiStudioAgentAskResponseTypeField =
    'ai_agent_ask' as AiStudioAgentAskResponseTypeField;
  /**
   * The state of the AI Agent capability. Possible values are: `enabled` and `disabled`. */
  readonly accessState!: string;
  /**
   * The description of the AI Agent. */
  readonly description!: string;
  /**
   * Custom instructions for the agent. */
  readonly customInstructions?: string | null;
  readonly longText?: AiStudioAgentLongTextToolResponse;
  readonly basicText?: AiStudioAgentBasicTextToolResponse;
  readonly longTextMulti?: AiStudioAgentLongTextToolResponse;
  readonly basicTextMulti?: AiStudioAgentBasicTextToolResponse;
  readonly rawData?: SerializedData;
  constructor(
    fields: Omit<AiStudioAgentAskResponse, 'type'> &
      Partial<Pick<AiStudioAgentAskResponse, 'type'>>,
  ) {
    if (fields.type !== undefined) {
      this.type = fields.type;
    }
    if (fields.accessState !== undefined) {
      this.accessState = fields.accessState;
    }
    if (fields.description !== undefined) {
      this.description = fields.description;
    }
    if (fields.customInstructions !== undefined) {
      this.customInstructions = fields.customInstructions;
    }
    if (fields.longText !== undefined) {
      this.longText = fields.longText;
    }
    if (fields.basicText !== undefined) {
      this.basicText = fields.basicText;
    }
    if (fields.longTextMulti !== undefined) {
      this.longTextMulti = fields.longTextMulti;
    }
    if (fields.basicTextMulti !== undefined) {
      this.basicTextMulti = fields.basicTextMulti;
    }
    if (fields.rawData !== undefined) {
      this.rawData = fields.rawData;
    }
  }
}
export interface AiStudioAgentAskResponseInput {
  /**
   * The type of AI agent used to handle queries. */
  readonly type?: AiStudioAgentAskResponseTypeField;
  /**
   * The state of the AI Agent capability. Possible values are: `enabled` and `disabled`. */
  readonly accessState: string;
  /**
   * The description of the AI Agent. */
  readonly description: string;
  /**
   * Custom instructions for the agent. */
  readonly customInstructions?: string | null;
  readonly longText?: AiStudioAgentLongTextToolResponse;
  readonly basicText?: AiStudioAgentBasicTextToolResponse;
  readonly longTextMulti?: AiStudioAgentLongTextToolResponse;
  readonly basicTextMulti?: AiStudioAgentBasicTextToolResponse;
  readonly rawData?: SerializedData;
}
export function serializeAiStudioAgentAskResponseTypeField(
  val: AiStudioAgentAskResponseTypeField,
): SerializedData {
  return val;
}
export function deserializeAiStudioAgentAskResponseTypeField(
  val: SerializedData,
): AiStudioAgentAskResponseTypeField {
  if (val == 'ai_agent_ask') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize AiStudioAgentAskResponseTypeField",
  });
}
export function serializeAiStudioAgentAskResponse(
  val: AiStudioAgentAskResponse,
): SerializedData {
  return {
    ['type']: serializeAiStudioAgentAskResponseTypeField(val.type),
    ['access_state']: val.accessState,
    ['description']: val.description,
    ['custom_instructions']: val.customInstructions,
    ['long_text']:
      val.longText == void 0
        ? val.longText
        : serializeAiStudioAgentLongTextToolResponse(val.longText),
    ['basic_text']:
      val.basicText == void 0
        ? val.basicText
        : serializeAiStudioAgentBasicTextToolResponse(val.basicText),
    ['long_text_multi']:
      val.longTextMulti == void 0
        ? val.longTextMulti
        : serializeAiStudioAgentLongTextToolResponse(val.longTextMulti),
    ['basic_text_multi']:
      val.basicTextMulti == void 0
        ? val.basicTextMulti
        : serializeAiStudioAgentBasicTextToolResponse(val.basicTextMulti),
  };
}
export function deserializeAiStudioAgentAskResponse(
  val: SerializedData,
): AiStudioAgentAskResponse {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiStudioAgentAskResponse"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "AiStudioAgentAskResponse" to be defined',
    });
  }
  const type: AiStudioAgentAskResponseTypeField =
    deserializeAiStudioAgentAskResponseTypeField(val.type);
  if (val.access_state == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "access_state" of type "AiStudioAgentAskResponse" to be defined',
    });
  }
  if (!sdIsString(val.access_state)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "access_state" of type "AiStudioAgentAskResponse"',
    });
  }
  const accessState: string = val.access_state;
  if (val.description == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "description" of type "AiStudioAgentAskResponse" to be defined',
    });
  }
  if (!sdIsString(val.description)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "description" of type "AiStudioAgentAskResponse"',
    });
  }
  const description: string = val.description;
  if (
    !(val.custom_instructions == void 0) &&
    !sdIsString(val.custom_instructions)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "custom_instructions" of type "AiStudioAgentAskResponse"',
    });
  }
  const customInstructions: undefined | string =
    val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
  const longText: undefined | AiStudioAgentLongTextToolResponse =
    val.long_text == void 0
      ? void 0
      : deserializeAiStudioAgentLongTextToolResponse(val.long_text);
  const basicText: undefined | AiStudioAgentBasicTextToolResponse =
    val.basic_text == void 0
      ? void 0
      : deserializeAiStudioAgentBasicTextToolResponse(val.basic_text);
  const longTextMulti: undefined | AiStudioAgentLongTextToolResponse =
    val.long_text_multi == void 0
      ? void 0
      : deserializeAiStudioAgentLongTextToolResponse(val.long_text_multi);
  const basicTextMulti: undefined | AiStudioAgentBasicTextToolResponse =
    val.basic_text_multi == void 0
      ? void 0
      : deserializeAiStudioAgentBasicTextToolResponse(val.basic_text_multi);
  return {
    type: type,
    accessState: accessState,
    description: description,
    customInstructions: customInstructions,
    longText: longText,
    basicText: basicText,
    longTextMulti: longTextMulti,
    basicTextMulti: basicTextMulti,
  } satisfies AiStudioAgentAskResponse;
}
export function serializeAiStudioAgentAskResponseInput(
  val: AiStudioAgentAskResponseInput,
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? val.type
        : serializeAiStudioAgentAskResponseTypeField(val.type),
    ['access_state']: val.accessState,
    ['description']: val.description,
    ['custom_instructions']: val.customInstructions,
    ['long_text']:
      val.longText == void 0
        ? val.longText
        : serializeAiStudioAgentLongTextToolResponse(val.longText),
    ['basic_text']:
      val.basicText == void 0
        ? val.basicText
        : serializeAiStudioAgentBasicTextToolResponse(val.basicText),
    ['long_text_multi']:
      val.longTextMulti == void 0
        ? val.longTextMulti
        : serializeAiStudioAgentLongTextToolResponse(val.longTextMulti),
    ['basic_text_multi']:
      val.basicTextMulti == void 0
        ? val.basicTextMulti
        : serializeAiStudioAgentBasicTextToolResponse(val.basicTextMulti),
  };
}
export function deserializeAiStudioAgentAskResponseInput(
  val: SerializedData,
): AiStudioAgentAskResponseInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiStudioAgentAskResponseInput"',
    });
  }
  const type: undefined | AiStudioAgentAskResponseTypeField =
    val.type == void 0
      ? void 0
      : deserializeAiStudioAgentAskResponseTypeField(val.type);
  if (val.access_state == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "access_state" of type "AiStudioAgentAskResponseInput" to be defined',
    });
  }
  if (!sdIsString(val.access_state)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "access_state" of type "AiStudioAgentAskResponseInput"',
    });
  }
  const accessState: string = val.access_state;
  if (val.description == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "description" of type "AiStudioAgentAskResponseInput" to be defined',
    });
  }
  if (!sdIsString(val.description)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "description" of type "AiStudioAgentAskResponseInput"',
    });
  }
  const description: string = val.description;
  if (
    !(val.custom_instructions == void 0) &&
    !sdIsString(val.custom_instructions)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "custom_instructions" of type "AiStudioAgentAskResponseInput"',
    });
  }
  const customInstructions: undefined | string =
    val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
  const longText: undefined | AiStudioAgentLongTextToolResponse =
    val.long_text == void 0
      ? void 0
      : deserializeAiStudioAgentLongTextToolResponse(val.long_text);
  const basicText: undefined | AiStudioAgentBasicTextToolResponse =
    val.basic_text == void 0
      ? void 0
      : deserializeAiStudioAgentBasicTextToolResponse(val.basic_text);
  const longTextMulti: undefined | AiStudioAgentLongTextToolResponse =
    val.long_text_multi == void 0
      ? void 0
      : deserializeAiStudioAgentLongTextToolResponse(val.long_text_multi);
  const basicTextMulti: undefined | AiStudioAgentBasicTextToolResponse =
    val.basic_text_multi == void 0
      ? void 0
      : deserializeAiStudioAgentBasicTextToolResponse(val.basic_text_multi);
  return {
    type: type,
    accessState: accessState,
    description: description,
    customInstructions: customInstructions,
    longText: longText,
    basicText: basicText,
    longTextMulti: longTextMulti,
    basicTextMulti: basicTextMulti,
  } satisfies AiStudioAgentAskResponseInput;
}
