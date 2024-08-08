import { serializeFileFull } from '../schemas/fileFull.generated.js';
import { deserializeFileFull } from '../schemas/fileFull.generated.js';
import { serializeAiResponse } from '../schemas/aiResponse.generated.js';
import { deserializeAiResponse } from '../schemas/aiResponse.generated.js';
import { serializeAiAsk } from '../schemas/aiAsk.generated.js';
import { deserializeAiAsk } from '../schemas/aiAsk.generated.js';
import { serializeAiAskModeField } from '../schemas/aiAsk.generated.js';
import { deserializeAiAskModeField } from '../schemas/aiAsk.generated.js';
import { serializeAiAskItemsField } from '../schemas/aiAsk.generated.js';
import { deserializeAiAskItemsField } from '../schemas/aiAsk.generated.js';
import { serializeAiAskItemsTypeField } from '../schemas/aiAsk.generated.js';
import { deserializeAiAskItemsTypeField } from '../schemas/aiAsk.generated.js';
import { serializeAiTextGen } from '../schemas/aiTextGen.generated.js';
import { deserializeAiTextGen } from '../schemas/aiTextGen.generated.js';
import { serializeAiTextGenItemsField } from '../schemas/aiTextGen.generated.js';
import { deserializeAiTextGenItemsField } from '../schemas/aiTextGen.generated.js';
import { serializeAiTextGenItemsTypeField } from '../schemas/aiTextGen.generated.js';
import { deserializeAiTextGenItemsTypeField } from '../schemas/aiTextGen.generated.js';
import { serializeAiTextGenDialogueHistoryField } from '../schemas/aiTextGen.generated.js';
import { deserializeAiTextGenDialogueHistoryField } from '../schemas/aiTextGen.generated.js';
import { serializeAiAgentAskOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentTextGen.generated.js';
import { deserializeAiAgentAskOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentTextGen.generated.js';
import { serializeGetAiAgentDefaultConfigQueryParamsModeField } from '../managers/ai.generated.js';
import { deserializeGetAiAgentDefaultConfigQueryParamsModeField } from '../managers/ai.generated.js';
import { serializeAiAgentAsk } from '../schemas/aiAgentAsk.generated.js';
import { deserializeAiAgentAsk } from '../schemas/aiAgentAsk.generated.js';
import { serializeAiAgentTextGen } from '../schemas/aiAgentTextGen.generated.js';
import { deserializeAiAgentTextGen } from '../schemas/aiAgentTextGen.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas/fileFull.generated.js';
import { AiResponse } from '../schemas/aiResponse.generated.js';
import { AiAsk } from '../schemas/aiAsk.generated.js';
import { AiAskModeField } from '../schemas/aiAsk.generated.js';
import { AiAskItemsField } from '../schemas/aiAsk.generated.js';
import { AiAskItemsTypeField } from '../schemas/aiAsk.generated.js';
import { AiTextGen } from '../schemas/aiTextGen.generated.js';
import { AiTextGenItemsField } from '../schemas/aiTextGen.generated.js';
import { AiTextGenItemsTypeField } from '../schemas/aiTextGen.generated.js';
import { AiTextGenDialogueHistoryField } from '../schemas/aiTextGen.generated.js';
import { AiAgentAskOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentTextGen.generated.js';
import { GetAiAgentDefaultConfigQueryParams } from '../managers/ai.generated.js';
import { GetAiAgentDefaultConfigQueryParamsModeField } from '../managers/ai.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { dateTimeFromString } from '../internal/utils.js';
import { dateTimeToString } from '../internal/utils.js';
import { uploadNewFile } from './commons.generated.js';
import { AiAgentAsk } from '../schemas/aiAgentAsk.generated.js';
import { AiAgentTextGen } from '../schemas/aiAgentTextGen.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export const client: BoxClient = getDefaultClient();
test('testAskAISingleItem', async function testAskAISingleItem(): Promise<any> {
  const fileToAsk: FileFull = await uploadNewFile();
  const response: AiResponse = await client.ai.createAiAsk({
    mode: 'single_item_qa' as AiAskModeField,
    prompt: 'which direction sun rises',
    items: [
      new AiAskItemsField({
        id: fileToAsk.id,
        type: 'file' as AiAskItemsTypeField,
        content: 'Sun rises in the East',
      }),
    ],
  } satisfies AiAsk);
  if (!(response.answer.includes('East') as boolean)) {
    throw new Error('Assertion failed');
  }
  if (!(response.completionReason == 'done')) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(fileToAsk.id);
});
test('testAskAIMultipleItems', async function testAskAIMultipleItems(): Promise<any> {
  const fileToAsk1: FileFull = await uploadNewFile();
  const fileToAsk2: FileFull = await uploadNewFile();
  const response: AiResponse = await client.ai.createAiAsk({
    mode: 'multiple_item_qa' as AiAskModeField,
    prompt: 'Which direction sun rises?',
    items: [
      new AiAskItemsField({
        id: fileToAsk1.id,
        type: 'file' as AiAskItemsTypeField,
        content: 'Earth goes around the sun',
      }),
      new AiAskItemsField({
        id: fileToAsk2.id,
        type: 'file' as AiAskItemsTypeField,
        content: 'Sun rises in the East in the morning',
      }),
    ],
  } satisfies AiAsk);
  if (!(response.answer.includes('East') as boolean)) {
    throw new Error('Assertion failed');
  }
  if (!(response.completionReason == 'done')) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(fileToAsk1.id);
  await client.files.deleteFileById(fileToAsk2.id);
});
test('testAITextGenWithDialogueHistory', async function testAITextGenWithDialogueHistory(): Promise<any> {
  const fileToAsk: FileFull = await uploadNewFile();
  const response: AiResponse = await client.ai.createAiTextGen({
    prompt: 'Parapharse the document.s',
    items: [
      {
        id: fileToAsk.id,
        type: 'file' as AiTextGenItemsTypeField,
        content:
          'The Earth goes around the sun. Sun rises in the East in the morning.',
      } satisfies AiTextGenItemsField,
    ],
    dialogueHistory: [
      {
        prompt: 'What does the earth go around?',
        answer: 'The sun',
        createdAt: dateTimeFromString('2021-01-01T00:00:00Z'),
      } satisfies AiTextGenDialogueHistoryField,
      {
        prompt: 'On Earth, where does the sun rise?',
        answer: 'East',
        createdAt: dateTimeFromString('2021-01-01T00:00:00Z'),
      } satisfies AiTextGenDialogueHistoryField,
    ],
  } satisfies AiTextGen);
  if (!(response.answer.includes('sun') as boolean)) {
    throw new Error('Assertion failed');
  }
  if (!(response.completionReason == 'done')) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(fileToAsk.id);
});
test('testGettingAIAskAgentConfig', async function testGettingAIAskAgentConfig(): Promise<any> {
  const aiAskConfig: AiAgentAskOrAiAgentTextGen =
    await client.ai.getAiAgentDefaultConfig({
      mode: 'ask' as GetAiAgentDefaultConfigQueryParamsModeField,
      language: 'en-US',
    } satisfies GetAiAgentDefaultConfigQueryParams);
  if (!(aiAskConfig.type == 'ai_agent_ask')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.basicText!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.basicText!.promptTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.basicText!.systemMessage! == '')) {
    throw new Error('Assertion failed');
  }
  if (!(aiAskConfig.basicText!.numTokensForCompletion! > -1)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.basicText!.llmEndpointParams! == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.basicTextMulti!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.basicTextMulti!.promptTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!(aiAskConfig.basicTextMulti!.numTokensForCompletion! > -1)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.basicTextMulti!.llmEndpointParams! == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longText!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longText!.promptTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longText!.systemMessage! == '')) {
    throw new Error('Assertion failed');
  }
  if (!(aiAskConfig.longText!.numTokensForCompletion! > -1)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longText!.embeddings!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longText!.embeddings!.strategy!.id! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longText!.llmEndpointParams! == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longTextMulti!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longTextMulti!.promptTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!(aiAskConfig.longTextMulti!.numTokensForCompletion! > -1)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longTextMulti!.embeddings!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longTextMulti!.embeddings!.strategy!.id! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAskConfig.longTextMulti!.llmEndpointParams! == void 0)) {
    throw new Error('Assertion failed');
  }
});
test('testGettingAITextGenAgentConfig', async function testGettingAITextGenAgentConfig(): Promise<any> {
  const aiTextGenConfig: AiAgentAskOrAiAgentTextGen =
    await client.ai.getAiAgentDefaultConfig({
      mode: 'text_gen' as GetAiAgentDefaultConfigQueryParamsModeField,
      language: 'en-US',
    } satisfies GetAiAgentDefaultConfigQueryParams);
  if (!(aiTextGenConfig.type == 'ai_agent_text_gen')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiTextGenConfig.basicGen!.llmEndpointParams! == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiTextGenConfig.basicGen!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiTextGenConfig.basicGen!.promptTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiTextGenConfig.basicGen!.systemMessage! == '')) {
    throw new Error('Assertion failed');
  }
  if (!(aiTextGenConfig.basicGen!.numTokensForCompletion! > -1)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiTextGenConfig.basicGen!.contentTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiTextGenConfig.basicGen!.embeddings!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiTextGenConfig.basicGen!.embeddings!.strategy!.id! == '')) {
    throw new Error('Assertion failed');
  }
});
export {};
