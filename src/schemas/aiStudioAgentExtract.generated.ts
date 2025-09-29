import { serializeAiStudioAgentLongTextTool } from './aiStudioAgentLongTextTool.generated';
import { deserializeAiStudioAgentLongTextTool } from './aiStudioAgentLongTextTool.generated';
import { serializeAiStudioAgentBasicTextTool } from './aiStudioAgentBasicTextTool.generated';
import { deserializeAiStudioAgentBasicTextTool } from './aiStudioAgentBasicTextTool.generated';
import { AiStudioAgentLongTextTool } from './aiStudioAgentLongTextTool.generated';
import { AiStudioAgentBasicTextTool } from './aiStudioAgentBasicTextTool.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type AiStudioAgentExtractTypeField = 'ai_agent_extract';
export class AiStudioAgentExtract {
  /**
   * The type of AI agent to be used for metadata extraction. */
  readonly type: AiStudioAgentExtractTypeField =
    'ai_agent_extract' as AiStudioAgentExtractTypeField;
  /**
   * The state of the AI Agent capability. Possible values are: `enabled` and `disabled`. */
  readonly accessState!: string;
  /**
   * The description of the AI agent. */
  readonly description!: string;
  /**
   * Custom instructions for the AI agent. */
  readonly customInstructions?: string | null;
  readonly longText?: AiStudioAgentLongTextTool;
  readonly basicText?: AiStudioAgentBasicTextTool;
  readonly basicImage?: AiStudioAgentBasicTextTool;
  readonly rawData?: SerializedData;
  constructor(
    fields: Omit<AiStudioAgentExtract, 'type'> &
      Partial<Pick<AiStudioAgentExtract, 'type'>>,
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
    if (fields.basicImage !== undefined) {
      this.basicImage = fields.basicImage;
    }
    if (fields.rawData !== undefined) {
      this.rawData = fields.rawData;
    }
  }
}
export interface AiStudioAgentExtractInput {
  /**
   * The type of AI agent to be used for metadata extraction. */
  readonly type?: AiStudioAgentExtractTypeField;
  /**
   * The state of the AI Agent capability. Possible values are: `enabled` and `disabled`. */
  readonly accessState: string;
  /**
   * The description of the AI agent. */
  readonly description: string;
  /**
   * Custom instructions for the AI agent. */
  readonly customInstructions?: string | null;
  readonly longText?: AiStudioAgentLongTextTool;
  readonly basicText?: AiStudioAgentBasicTextTool;
  readonly basicImage?: AiStudioAgentBasicTextTool;
  readonly rawData?: SerializedData;
}
export function serializeAiStudioAgentExtractTypeField(
  val: AiStudioAgentExtractTypeField,
): SerializedData {
  return val;
}
export function deserializeAiStudioAgentExtractTypeField(
  val: SerializedData,
): AiStudioAgentExtractTypeField {
  if (val == 'ai_agent_extract') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize AiStudioAgentExtractTypeField",
  });
}
export function serializeAiStudioAgentExtract(
  val: AiStudioAgentExtract,
): SerializedData {
  return {
    ['type']: serializeAiStudioAgentExtractTypeField(val.type),
    ['access_state']: val.accessState,
    ['description']: val.description,
    ['custom_instructions']: val.customInstructions,
    ['long_text']:
      val.longText == void 0
        ? val.longText
        : serializeAiStudioAgentLongTextTool(val.longText),
    ['basic_text']:
      val.basicText == void 0
        ? val.basicText
        : serializeAiStudioAgentBasicTextTool(val.basicText),
    ['basic_image']:
      val.basicImage == void 0
        ? val.basicImage
        : serializeAiStudioAgentBasicTextTool(val.basicImage),
  };
}
export function deserializeAiStudioAgentExtract(
  val: SerializedData,
): AiStudioAgentExtract {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiStudioAgentExtract"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "AiStudioAgentExtract" to be defined',
    });
  }
  const type: AiStudioAgentExtractTypeField =
    deserializeAiStudioAgentExtractTypeField(val.type);
  if (val.access_state == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "access_state" of type "AiStudioAgentExtract" to be defined',
    });
  }
  if (!sdIsString(val.access_state)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "access_state" of type "AiStudioAgentExtract"',
    });
  }
  const accessState: string = val.access_state;
  if (val.description == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "description" of type "AiStudioAgentExtract" to be defined',
    });
  }
  if (!sdIsString(val.description)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "description" of type "AiStudioAgentExtract"',
    });
  }
  const description: string = val.description;
  if (
    !(val.custom_instructions == void 0) &&
    !sdIsString(val.custom_instructions)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "custom_instructions" of type "AiStudioAgentExtract"',
    });
  }
  const customInstructions: undefined | string =
    val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
  const longText: undefined | AiStudioAgentLongTextTool =
    val.long_text == void 0
      ? void 0
      : deserializeAiStudioAgentLongTextTool(val.long_text);
  const basicText: undefined | AiStudioAgentBasicTextTool =
    val.basic_text == void 0
      ? void 0
      : deserializeAiStudioAgentBasicTextTool(val.basic_text);
  const basicImage: undefined | AiStudioAgentBasicTextTool =
    val.basic_image == void 0
      ? void 0
      : deserializeAiStudioAgentBasicTextTool(val.basic_image);
  return {
    type: type,
    accessState: accessState,
    description: description,
    customInstructions: customInstructions,
    longText: longText,
    basicText: basicText,
    basicImage: basicImage,
  } satisfies AiStudioAgentExtract;
}
export function serializeAiStudioAgentExtractInput(
  val: AiStudioAgentExtractInput,
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? val.type
        : serializeAiStudioAgentExtractTypeField(val.type),
    ['access_state']: val.accessState,
    ['description']: val.description,
    ['custom_instructions']: val.customInstructions,
    ['long_text']:
      val.longText == void 0
        ? val.longText
        : serializeAiStudioAgentLongTextTool(val.longText),
    ['basic_text']:
      val.basicText == void 0
        ? val.basicText
        : serializeAiStudioAgentBasicTextTool(val.basicText),
    ['basic_image']:
      val.basicImage == void 0
        ? val.basicImage
        : serializeAiStudioAgentBasicTextTool(val.basicImage),
  };
}
export function deserializeAiStudioAgentExtractInput(
  val: SerializedData,
): AiStudioAgentExtractInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiStudioAgentExtractInput"',
    });
  }
  const type: undefined | AiStudioAgentExtractTypeField =
    val.type == void 0
      ? void 0
      : deserializeAiStudioAgentExtractTypeField(val.type);
  if (val.access_state == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "access_state" of type "AiStudioAgentExtractInput" to be defined',
    });
  }
  if (!sdIsString(val.access_state)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "access_state" of type "AiStudioAgentExtractInput"',
    });
  }
  const accessState: string = val.access_state;
  if (val.description == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "description" of type "AiStudioAgentExtractInput" to be defined',
    });
  }
  if (!sdIsString(val.description)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "description" of type "AiStudioAgentExtractInput"',
    });
  }
  const description: string = val.description;
  if (
    !(val.custom_instructions == void 0) &&
    !sdIsString(val.custom_instructions)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "custom_instructions" of type "AiStudioAgentExtractInput"',
    });
  }
  const customInstructions: undefined | string =
    val.custom_instructions == void 0 ? void 0 : val.custom_instructions;
  const longText: undefined | AiStudioAgentLongTextTool =
    val.long_text == void 0
      ? void 0
      : deserializeAiStudioAgentLongTextTool(val.long_text);
  const basicText: undefined | AiStudioAgentBasicTextTool =
    val.basic_text == void 0
      ? void 0
      : deserializeAiStudioAgentBasicTextTool(val.basic_text);
  const basicImage: undefined | AiStudioAgentBasicTextTool =
    val.basic_image == void 0
      ? void 0
      : deserializeAiStudioAgentBasicTextTool(val.basic_image);
  return {
    type: type,
    accessState: accessState,
    description: description,
    customInstructions: customInstructions,
    longText: longText,
    basicText: basicText,
    basicImage: basicImage,
  } satisfies AiStudioAgentExtractInput;
}
