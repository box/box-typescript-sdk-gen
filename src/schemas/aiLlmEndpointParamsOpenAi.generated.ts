import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AiLlmEndpointParamsOpenAiTypeField = 'openai_params';
export class AiLlmEndpointParamsOpenAi {
  /**
   * The type of the AI LLM endpoint params object for OpenAI.
   * This parameter is **required**. */
  readonly type: AiLlmEndpointParamsOpenAiTypeField =
    'openai_params' as AiLlmEndpointParamsOpenAiTypeField;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random,
   * while lower values like 0.2 will make it more focused and deterministic.
   * We generally recommend altering this or `top_p` but not both. */
  readonly temperature?: number;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results
   * of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability
   * mass are considered. We generally recommend altering this or temperature but not both. */
  readonly topP?: number;
  /**
   * A number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the
   * text so far, decreasing the model's likelihood to repeat the same line verbatim. */
  readonly frequencyPenalty?: number;
  /**
   * A number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics. */
  readonly presencePenalty?: number;
  /**
   * Up to 4 sequences where the API will stop generating further tokens. */
  readonly stop?: string;
  readonly rawData?: SerializedData;
  constructor(
    fields: Omit<AiLlmEndpointParamsOpenAi, 'type'> &
      Partial<Pick<AiLlmEndpointParamsOpenAi, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.temperature) {
      this.temperature = fields.temperature;
    }
    if (fields.topP) {
      this.topP = fields.topP;
    }
    if (fields.frequencyPenalty) {
      this.frequencyPenalty = fields.frequencyPenalty;
    }
    if (fields.presencePenalty) {
      this.presencePenalty = fields.presencePenalty;
    }
    if (fields.stop) {
      this.stop = fields.stop;
    }
    if (fields.rawData) {
      this.rawData = fields.rawData;
    }
  }
}
export interface AiLlmEndpointParamsOpenAiInput {
  /**
   * The type of the AI LLM endpoint params object for OpenAI.
   * This parameter is **required**. */
  readonly type?: AiLlmEndpointParamsOpenAiTypeField;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random,
   * while lower values like 0.2 will make it more focused and deterministic.
   * We generally recommend altering this or `top_p` but not both. */
  readonly temperature?: number;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results
   * of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability
   * mass are considered. We generally recommend altering this or temperature but not both. */
  readonly topP?: number;
  /**
   * A number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the
   * text so far, decreasing the model's likelihood to repeat the same line verbatim. */
  readonly frequencyPenalty?: number;
  /**
   * A number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics. */
  readonly presencePenalty?: number;
  /**
   * Up to 4 sequences where the API will stop generating further tokens. */
  readonly stop?: string;
  readonly rawData?: SerializedData;
}
export function serializeAiLlmEndpointParamsOpenAiTypeField(
  val: AiLlmEndpointParamsOpenAiTypeField
): SerializedData {
  return val;
}
export function deserializeAiLlmEndpointParamsOpenAiTypeField(
  val: SerializedData
): AiLlmEndpointParamsOpenAiTypeField {
  if (val == 'openai_params') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize AiLlmEndpointParamsOpenAiTypeField",
  });
}
export function serializeAiLlmEndpointParamsOpenAi(
  val: AiLlmEndpointParamsOpenAi
): SerializedData {
  return {
    ['type']: serializeAiLlmEndpointParamsOpenAiTypeField(val.type),
    ['temperature']: val.temperature == void 0 ? void 0 : val.temperature,
    ['top_p']: val.topP == void 0 ? void 0 : val.topP,
    ['frequency_penalty']:
      val.frequencyPenalty == void 0 ? void 0 : val.frequencyPenalty,
    ['presence_penalty']:
      val.presencePenalty == void 0 ? void 0 : val.presencePenalty,
    ['stop']: val.stop == void 0 ? void 0 : val.stop,
  };
}
export function deserializeAiLlmEndpointParamsOpenAi(
  val: SerializedData
): AiLlmEndpointParamsOpenAi {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiLlmEndpointParamsOpenAi"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "AiLlmEndpointParamsOpenAi" to be defined',
    });
  }
  const type: AiLlmEndpointParamsOpenAiTypeField =
    deserializeAiLlmEndpointParamsOpenAiTypeField(val.type);
  if (!(val.temperature == void 0) && !sdIsNumber(val.temperature)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "temperature" of type "AiLlmEndpointParamsOpenAi"',
    });
  }
  const temperature: undefined | number =
    val.temperature == void 0 ? void 0 : val.temperature;
  if (!(val.top_p == void 0) && !sdIsNumber(val.top_p)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "top_p" of type "AiLlmEndpointParamsOpenAi"',
    });
  }
  const topP: undefined | number = val.top_p == void 0 ? void 0 : val.top_p;
  if (
    !(val.frequency_penalty == void 0) &&
    !sdIsNumber(val.frequency_penalty)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting number for "frequency_penalty" of type "AiLlmEndpointParamsOpenAi"',
    });
  }
  const frequencyPenalty: undefined | number =
    val.frequency_penalty == void 0 ? void 0 : val.frequency_penalty;
  if (!(val.presence_penalty == void 0) && !sdIsNumber(val.presence_penalty)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "presence_penalty" of type "AiLlmEndpointParamsOpenAi"',
    });
  }
  const presencePenalty: undefined | number =
    val.presence_penalty == void 0 ? void 0 : val.presence_penalty;
  if (!(val.stop == void 0) && !sdIsString(val.stop)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "stop" of type "AiLlmEndpointParamsOpenAi"',
    });
  }
  const stop: undefined | string = val.stop == void 0 ? void 0 : val.stop;
  return {
    type: type,
    temperature: temperature,
    topP: topP,
    frequencyPenalty: frequencyPenalty,
    presencePenalty: presencePenalty,
    stop: stop,
  } satisfies AiLlmEndpointParamsOpenAi;
}
export function serializeAiLlmEndpointParamsOpenAiInput(
  val: AiLlmEndpointParamsOpenAiInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeAiLlmEndpointParamsOpenAiTypeField(val.type),
    ['temperature']: val.temperature == void 0 ? void 0 : val.temperature,
    ['top_p']: val.topP == void 0 ? void 0 : val.topP,
    ['frequency_penalty']:
      val.frequencyPenalty == void 0 ? void 0 : val.frequencyPenalty,
    ['presence_penalty']:
      val.presencePenalty == void 0 ? void 0 : val.presencePenalty,
    ['stop']: val.stop == void 0 ? void 0 : val.stop,
  };
}
export function deserializeAiLlmEndpointParamsOpenAiInput(
  val: SerializedData
): AiLlmEndpointParamsOpenAiInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AiLlmEndpointParamsOpenAiInput"',
    });
  }
  const type: undefined | AiLlmEndpointParamsOpenAiTypeField =
    val.type == void 0
      ? void 0
      : deserializeAiLlmEndpointParamsOpenAiTypeField(val.type);
  if (!(val.temperature == void 0) && !sdIsNumber(val.temperature)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "temperature" of type "AiLlmEndpointParamsOpenAiInput"',
    });
  }
  const temperature: undefined | number =
    val.temperature == void 0 ? void 0 : val.temperature;
  if (!(val.top_p == void 0) && !sdIsNumber(val.top_p)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "top_p" of type "AiLlmEndpointParamsOpenAiInput"',
    });
  }
  const topP: undefined | number = val.top_p == void 0 ? void 0 : val.top_p;
  if (
    !(val.frequency_penalty == void 0) &&
    !sdIsNumber(val.frequency_penalty)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting number for "frequency_penalty" of type "AiLlmEndpointParamsOpenAiInput"',
    });
  }
  const frequencyPenalty: undefined | number =
    val.frequency_penalty == void 0 ? void 0 : val.frequency_penalty;
  if (!(val.presence_penalty == void 0) && !sdIsNumber(val.presence_penalty)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "presence_penalty" of type "AiLlmEndpointParamsOpenAiInput"',
    });
  }
  const presencePenalty: undefined | number =
    val.presence_penalty == void 0 ? void 0 : val.presence_penalty;
  if (!(val.stop == void 0) && !sdIsString(val.stop)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "stop" of type "AiLlmEndpointParamsOpenAiInput"',
    });
  }
  const stop: undefined | string = val.stop == void 0 ? void 0 : val.stop;
  return {
    type: type,
    temperature: temperature,
    topP: topP,
    frequencyPenalty: frequencyPenalty,
    presencePenalty: presencePenalty,
    stop: stop,
  } satisfies AiLlmEndpointParamsOpenAiInput;
}
