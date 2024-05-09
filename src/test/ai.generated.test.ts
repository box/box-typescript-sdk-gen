import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeAiResponse } from '../schemas.generated.js';
import { deserializeAiResponse } from '../schemas.generated.js';
import { serializeAiAsk } from '../schemas.generated.js';
import { deserializeAiAsk } from '../schemas.generated.js';
import { serializeAiAskModeField } from '../schemas.generated.js';
import { deserializeAiAskModeField } from '../schemas.generated.js';
import { serializeAiAskItemsField } from '../schemas.generated.js';
import { deserializeAiAskItemsField } from '../schemas.generated.js';
import { serializeAiAskItemsTypeField } from '../schemas.generated.js';
import { deserializeAiAskItemsTypeField } from '../schemas.generated.js';
import { serializeAiTextGen } from '../schemas.generated.js';
import { deserializeAiTextGen } from '../schemas.generated.js';
import { serializeAiTextGenItemsField } from '../schemas.generated.js';
import { deserializeAiTextGenItemsField } from '../schemas.generated.js';
import { serializeAiTextGenItemsTypeField } from '../schemas.generated.js';
import { deserializeAiTextGenItemsTypeField } from '../schemas.generated.js';
import { serializeAiTextGenDialogueHistoryField } from '../schemas.generated.js';
import { deserializeAiTextGenDialogueHistoryField } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas.generated.js';
import { AiResponse } from '../schemas.generated.js';
import { AiAsk } from '../schemas.generated.js';
import { AiAskModeField } from '../schemas.generated.js';
import { AiAskItemsField } from '../schemas.generated.js';
import { AiAskItemsTypeField } from '../schemas.generated.js';
import { AiTextGen } from '../schemas.generated.js';
import { AiTextGenItemsField } from '../schemas.generated.js';
import { AiTextGenItemsTypeField } from '../schemas.generated.js';
import { AiTextGenDialogueHistoryField } from '../schemas.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { dateTimeFromString } from '../internal/utils.js';
import { dateTimeToString } from '../internal/utils.js';
import { uploadNewFile } from './commons.generated.js';
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
export {};
