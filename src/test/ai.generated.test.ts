import { serializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen } from '@/schemas/aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated';
import { deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen } from '@/schemas/aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated';
import { serializeGetAiAgentDefaultConfigQueryParamsModeField } from '@/managers/ai.generated';
import { deserializeGetAiAgentDefaultConfigQueryParamsModeField } from '@/managers/ai.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeAiResponseFull } from '@/schemas/aiResponseFull.generated';
import { deserializeAiResponseFull } from '@/schemas/aiResponseFull.generated';
import { serializeAiAsk } from '@/schemas/aiAsk.generated';
import { deserializeAiAsk } from '@/schemas/aiAsk.generated';
import { serializeAiAskModeField } from '@/schemas/aiAsk.generated';
import { deserializeAiAskModeField } from '@/schemas/aiAsk.generated';
import { serializeAiItemAsk } from '@/schemas/aiItemAsk.generated';
import { deserializeAiItemAsk } from '@/schemas/aiItemAsk.generated';
import { serializeAiItemAskTypeField } from '@/schemas/aiItemAsk.generated';
import { deserializeAiItemAskTypeField } from '@/schemas/aiItemAsk.generated';
import { serializeAiResponse } from '@/schemas/aiResponse.generated';
import { deserializeAiResponse } from '@/schemas/aiResponse.generated';
import { serializeAiTextGen } from '@/schemas/aiTextGen.generated';
import { deserializeAiTextGen } from '@/schemas/aiTextGen.generated';
import { serializeAiTextGenItemsField } from '@/schemas/aiTextGen.generated';
import { deserializeAiTextGenItemsField } from '@/schemas/aiTextGen.generated';
import { serializeAiTextGenItemsTypeField } from '@/schemas/aiTextGen.generated';
import { deserializeAiTextGenItemsTypeField } from '@/schemas/aiTextGen.generated';
import { serializeAiDialogueHistory } from '@/schemas/aiDialogueHistory.generated';
import { deserializeAiDialogueHistory } from '@/schemas/aiDialogueHistory.generated';
import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeAiExtract } from '@/schemas/aiExtract.generated';
import { deserializeAiExtract } from '@/schemas/aiExtract.generated';
import { serializeAiItemBase } from '@/schemas/aiItemBase.generated';
import { deserializeAiItemBase } from '@/schemas/aiItemBase.generated';
import { serializeAiExtractStructuredResponse } from '@/schemas/aiExtractStructuredResponse.generated';
import { deserializeAiExtractStructuredResponse } from '@/schemas/aiExtractStructuredResponse.generated';
import { serializeAiExtractStructured } from '@/schemas/aiExtractStructured.generated';
import { deserializeAiExtractStructured } from '@/schemas/aiExtractStructured.generated';
import { serializeAiExtractStructuredFieldsField } from '@/schemas/aiExtractStructured.generated';
import { deserializeAiExtractStructuredFieldsField } from '@/schemas/aiExtractStructured.generated';
import { serializeAiExtractStructuredFieldsOptionsField } from '@/schemas/aiExtractStructured.generated';
import { deserializeAiExtractStructuredFieldsOptionsField } from '@/schemas/aiExtractStructured.generated';
import { serializeMetadataTemplate } from '@/schemas/metadataTemplate.generated';
import { deserializeMetadataTemplate } from '@/schemas/metadataTemplate.generated';
import { serializeCreateMetadataTemplateRequestBody } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBody } from '@/managers/metadataTemplates.generated';
import { serializeCreateMetadataTemplateRequestBodyFieldsField } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBodyFieldsField } from '@/managers/metadataTemplates.generated';
import { serializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBodyFieldsTypeField } from '@/managers/metadataTemplates.generated';
import { serializeCreateMetadataTemplateRequestBodyFieldsOptionsField } from '@/managers/metadataTemplates.generated';
import { deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField } from '@/managers/metadataTemplates.generated';
import { serializeAiExtractStructuredMetadataTemplateField } from '@/schemas/aiExtractStructured.generated';
import { deserializeAiExtractStructuredMetadataTemplateField } from '@/schemas/aiExtractStructured.generated';
import { serializeDeleteMetadataTemplateScope } from '@/managers/metadataTemplates.generated';
import { deserializeDeleteMetadataTemplateScope } from '@/managers/metadataTemplates.generated';
import { serializeAiAgentAsk } from '@/schemas/aiAgentAsk.generated';
import { deserializeAiAgentAsk } from '@/schemas/aiAgentAsk.generated';
import { serializeAiAgentTextGen } from '@/schemas/aiAgentTextGen.generated';
import { deserializeAiAgentTextGen } from '@/schemas/aiAgentTextGen.generated';
import { serializeAiAgentExtract } from '@/schemas/aiAgentExtract.generated';
import { deserializeAiAgentExtract } from '@/schemas/aiAgentExtract.generated';
import { serializeAiAgentExtractStructured } from '@/schemas/aiAgentExtractStructured.generated';
import { deserializeAiAgentExtractStructured } from '@/schemas/aiAgentExtractStructured.generated';
import { serializeAiAgentLongTextTool } from '@/schemas/aiAgentLongTextTool.generated';
import { deserializeAiAgentLongTextTool } from '@/schemas/aiAgentLongTextTool.generated';
import { BoxClient } from '@/client.generated';
import { AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen } from '@/schemas/aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated';
import { GetAiAgentDefaultConfigQueryParams } from '@/managers/ai.generated';
import { GetAiAgentDefaultConfigQueryParamsModeField } from '@/managers/ai.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { AiResponseFull } from '@/schemas/aiResponseFull.generated';
import { AiAsk } from '@/schemas/aiAsk.generated';
import { AiAskModeField } from '@/schemas/aiAsk.generated';
import { AiItemAsk } from '@/schemas/aiItemAsk.generated';
import { AiItemAskTypeField } from '@/schemas/aiItemAsk.generated';
import { AiResponse } from '@/schemas/aiResponse.generated';
import { AiTextGen } from '@/schemas/aiTextGen.generated';
import { AiTextGenItemsField } from '@/schemas/aiTextGen.generated';
import { AiTextGenItemsTypeField } from '@/schemas/aiTextGen.generated';
import { AiDialogueHistory } from '@/schemas/aiDialogueHistory.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { AiExtract } from '@/schemas/aiExtract.generated';
import { AiItemBase } from '@/schemas/aiItemBase.generated';
import { AiExtractStructuredResponse } from '@/schemas/aiExtractStructuredResponse.generated';
import { AiExtractStructured } from '@/schemas/aiExtractStructured.generated';
import { AiExtractStructuredFieldsField } from '@/schemas/aiExtractStructured.generated';
import { AiExtractStructuredFieldsOptionsField } from '@/schemas/aiExtractStructured.generated';
import { MetadataTemplate } from '@/schemas/metadataTemplate.generated';
import { CreateMetadataTemplateRequestBody } from '@/managers/metadataTemplates.generated';
import { CreateMetadataTemplateRequestBodyFieldsField } from '@/managers/metadataTemplates.generated';
import { CreateMetadataTemplateRequestBodyFieldsTypeField } from '@/managers/metadataTemplates.generated';
import { CreateMetadataTemplateRequestBodyFieldsOptionsField } from '@/managers/metadataTemplates.generated';
import { AiExtractStructuredMetadataTemplateField } from '@/schemas/aiExtractStructured.generated';
import { DeleteMetadataTemplateScope } from '@/managers/metadataTemplates.generated';
import { getDefaultClient } from './commons.generated';
import { getUuid } from '@/internal/utils';
import { stringToByteStream } from '@/internal/utils';
import { delayInSeconds } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { dateTimeFromString } from '@/internal/utils';
import { dateTimeToString } from '@/internal/utils';
import { getValueFromObjectRawData } from '@/internal/utils';
import { uploadNewFile } from './commons.generated';
import { AiAgentAsk } from '@/schemas/aiAgentAsk.generated';
import { AiAgentTextGen } from '@/schemas/aiAgentTextGen.generated';
import { AiAgentExtract } from '@/schemas/aiAgentExtract.generated';
import { AiAgentExtractStructured } from '@/schemas/aiAgentExtractStructured.generated';
import { AiAgentLongTextTool } from '@/schemas/aiAgentLongTextTool.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testAskAISingleItem', async function testAskAISingleItem(): Promise<any> {
  const aiAgentConfig: AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen =
    await client.ai.getAiAgentDefaultConfig({
      mode: 'ask' as GetAiAgentDefaultConfigQueryParamsModeField,
      language: 'en-US',
    } satisfies GetAiAgentDefaultConfigQueryParams);
  const aiAskAgentConfig: AiAgentAsk = aiAgentConfig as AiAgentAsk;
  const fileToAsk: FileFull = await uploadNewFile();
  const response: undefined | AiResponseFull = await client.ai.createAiAsk({
    mode: 'single_item_qa' as AiAskModeField,
    prompt: 'which direction sun rises',
    items: [
      {
        id: fileToAsk.id,
        type: 'file' as AiItemAskTypeField,
        content: 'Sun rises in the East',
      } satisfies AiItemAsk,
    ],
    aiAgent: aiAskAgentConfig,
  } satisfies AiAsk);
  if (!(response!.answer.includes('East') as boolean)) {
    throw new Error('Assertion failed');
  }
  if (!(response!.completionReason == 'done')) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(fileToAsk.id);
});
test('testAskAIMultipleItems', async function testAskAIMultipleItems(): Promise<any> {
  const fileToAsk1: FileFull = await uploadNewFile();
  const fileToAsk2: FileFull = await uploadNewFile();
  const response: undefined | AiResponseFull = await client.ai.createAiAsk({
    mode: 'multiple_item_qa' as AiAskModeField,
    prompt: 'Which direction sun rises?',
    items: [
      {
        id: fileToAsk1.id,
        type: 'file' as AiItemAskTypeField,
        content: 'Earth goes around the sun',
      } satisfies AiItemAsk,
      {
        id: fileToAsk2.id,
        type: 'file' as AiItemAskTypeField,
        content: 'Sun rises in the East in the morning',
      } satisfies AiItemAsk,
    ],
  } satisfies AiAsk);
  if (!(response!.answer.includes('East') as boolean)) {
    throw new Error('Assertion failed');
  }
  if (!(response!.completionReason == 'done')) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(fileToAsk1.id);
  await client.files.deleteFileById(fileToAsk2.id);
});
test('testAITextGenWithDialogueHistory', async function testAITextGenWithDialogueHistory(): Promise<any> {
  const fileToAsk: FileFull = await uploadNewFile();
  const aiAgentConfig: AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen =
    await client.ai.getAiAgentDefaultConfig({
      mode: 'text_gen' as GetAiAgentDefaultConfigQueryParamsModeField,
      language: 'en-US',
    } satisfies GetAiAgentDefaultConfigQueryParams);
  const aiTextGenAgentConfig: AiAgentTextGen = aiAgentConfig as AiAgentTextGen;
  const response: AiResponse = await client.ai.createAiTextGen({
    prompt: 'Parapharse the document.s',
    items: [
      new AiTextGenItemsField({
        id: fileToAsk.id,
        type: 'file' as AiTextGenItemsTypeField,
        content:
          'The Earth goes around the sun. Sun rises in the East in the morning.',
      }),
    ],
    dialogueHistory: [
      {
        prompt: 'What does the earth go around?',
        answer: 'The sun',
        createdAt: dateTimeFromString('2021-01-01T00:00:00Z'),
      } satisfies AiDialogueHistory,
      {
        prompt: 'On Earth, where does the sun rise?',
        answer: 'East',
        createdAt: dateTimeFromString('2021-01-01T00:00:00Z'),
      } satisfies AiDialogueHistory,
    ],
    aiAgent: aiTextGenAgentConfig,
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
  const aiAgentConfig: AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen =
    await client.ai.getAiAgentDefaultConfig({
      mode: 'ask' as GetAiAgentDefaultConfigQueryParamsModeField,
      language: 'en-US',
    } satisfies GetAiAgentDefaultConfigQueryParams);
  if (!(aiAgentConfig.type == 'ai_agent_ask')) {
    throw new Error('Assertion failed');
  }
  const aiAgentAskConfig: AiAgentAsk = aiAgentConfig as AiAgentAsk;
  if (!!(aiAgentAskConfig.basicText!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.basicText!.promptTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!(aiAgentAskConfig.basicText!.numTokensForCompletion! > -1)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.basicText!.llmEndpointParams! == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.basicTextMulti!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.basicTextMulti!.promptTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!(aiAgentAskConfig.basicTextMulti!.numTokensForCompletion! > -1)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.basicTextMulti!.llmEndpointParams! == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.longText!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.longText!.promptTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!(aiAgentAskConfig.longText!.numTokensForCompletion! > -1)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.longText!.embeddings!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.longText!.embeddings!.strategy!.id! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.longText!.llmEndpointParams! == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.longTextMulti!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.longTextMulti!.promptTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!(aiAgentAskConfig.longTextMulti!.numTokensForCompletion! > -1)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.longTextMulti!.embeddings!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.longTextMulti!.embeddings!.strategy!.id! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentAskConfig.longTextMulti!.llmEndpointParams! == void 0)) {
    throw new Error('Assertion failed');
  }
});
test('testGettingAITextGenAgentConfig', async function testGettingAITextGenAgentConfig(): Promise<any> {
  const aiAgentConfig: AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen =
    await client.ai.getAiAgentDefaultConfig({
      mode: 'text_gen' as GetAiAgentDefaultConfigQueryParamsModeField,
      language: 'en-US',
    } satisfies GetAiAgentDefaultConfigQueryParams);
  if (!(aiAgentConfig.type == 'ai_agent_text_gen')) {
    throw new Error('Assertion failed');
  }
  const aiAgentTextGenConfig: AiAgentTextGen = aiAgentConfig as AiAgentTextGen;
  if (!!(aiAgentTextGenConfig.basicGen!.llmEndpointParams! == void 0)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentTextGenConfig.basicGen!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentTextGenConfig.basicGen!.promptTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!(aiAgentTextGenConfig.basicGen!.numTokensForCompletion! > -1)) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentTextGenConfig.basicGen!.contentTemplate! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentTextGenConfig.basicGen!.embeddings!.model! == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(aiAgentTextGenConfig.basicGen!.embeddings!.strategy!.id! == '')) {
    throw new Error('Assertion failed');
  }
});
test('testAIExtract', async function testAIExtract(): Promise<any> {
  const aiAgentConfig: AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen =
    await client.ai.getAiAgentDefaultConfig({
      mode: 'extract' as GetAiAgentDefaultConfigQueryParamsModeField,
      language: 'en-US',
    } satisfies GetAiAgentDefaultConfigQueryParams);
  const aiExtractAgentConfig: AiAgentExtract = aiAgentConfig as AiAgentExtract;
  const longTextConfigWithNoEmbeddings: AiAgentLongTextTool = {
    systemMessage: aiExtractAgentConfig.longText!.systemMessage,
    promptTemplate: aiExtractAgentConfig.longText!.promptTemplate,
    model: aiExtractAgentConfig.longText!.model,
    numTokensForCompletion:
      aiExtractAgentConfig.longText!.numTokensForCompletion,
    llmEndpointParams: aiExtractAgentConfig.longText!.llmEndpointParams,
  } satisfies AiAgentLongTextTool;
  const agentIgnoringOverridingEmbeddingsModel: AiAgentExtract =
    new AiAgentExtract({
      basicText: aiExtractAgentConfig.basicText,
      longText: longTextConfigWithNoEmbeddings,
    });
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: ''.concat(getUuid(), '.txt') as string,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: stringToByteStream(
      'My name is John Doe. I live in San Francisco. I was born in 1990. I work at Box.',
    ),
  } satisfies UploadFileRequestBody);
  const file: FileFull = uploadedFiles.entries![0];
  await delayInSeconds(5);
  const response: AiResponse = await client.ai.createAiExtract({
    prompt: 'firstName, lastName, location, yearOfBirth, company',
    items: [new AiItemBase({ id: file.id })],
    aiAgent: agentIgnoringOverridingEmbeddingsModel,
  } satisfies AiExtract);
  const expectedResponse: string =
    '{"firstName": "John", "lastName": "Doe", "location": "San Francisco", "yearOfBirth": "1990", "company": "Box"}';
  if (!(response.answer == expectedResponse)) {
    throw new Error('Assertion failed');
  }
  if (!(response.completionReason == 'done')) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(file.id);
});
test('testAIExtractStructuredWithFields', async function testAIExtractStructuredWithFields(): Promise<any> {
  const aiAgentConfig: AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen =
    await client.ai.getAiAgentDefaultConfig({
      mode: 'extract_structured' as GetAiAgentDefaultConfigQueryParamsModeField,
      language: 'en-US',
    } satisfies GetAiAgentDefaultConfigQueryParams);
  const aiExtractStructuredAgentConfig: AiAgentExtractStructured =
    aiAgentConfig as AiAgentExtractStructured;
  const longTextConfigWithNoEmbeddings: AiAgentLongTextTool = {
    systemMessage: aiExtractStructuredAgentConfig.longText!.systemMessage,
    promptTemplate: aiExtractStructuredAgentConfig.longText!.promptTemplate,
    model: aiExtractStructuredAgentConfig.longText!.model,
    numTokensForCompletion:
      aiExtractStructuredAgentConfig.longText!.numTokensForCompletion,
    llmEndpointParams:
      aiExtractStructuredAgentConfig.longText!.llmEndpointParams,
  } satisfies AiAgentLongTextTool;
  const agentIgnoringOverridingEmbeddingsModel: AiAgentExtractStructured =
    new AiAgentExtractStructured({
      basicText: aiExtractStructuredAgentConfig.basicText,
      longText: longTextConfigWithNoEmbeddings,
    });
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: ''.concat(getUuid(), '.txt') as string,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: stringToByteStream(
      'My name is John Doe. I was born in 4th July 1990. I am 34 years old. My hobby is guitar.',
    ),
  } satisfies UploadFileRequestBody);
  const file: FileFull = uploadedFiles.entries![0];
  await delayInSeconds(5);
  const response: AiExtractStructuredResponse =
    await client.ai.createAiExtractStructured({
      fields: [
        {
          key: 'firstName',
          displayName: 'First name',
          description: 'Person first name',
          prompt: 'What is the your first name?',
          type: 'string',
        } satisfies AiExtractStructuredFieldsField,
        {
          key: 'lastName',
          displayName: 'Last name',
          description: 'Person last name',
          prompt: 'What is the your last name?',
          type: 'string',
        } satisfies AiExtractStructuredFieldsField,
        {
          key: 'dateOfBirth',
          displayName: 'Birth date',
          description: 'Person date of birth',
          prompt: 'What is the date of your birth?',
          type: 'date',
        } satisfies AiExtractStructuredFieldsField,
        {
          key: 'age',
          displayName: 'Age',
          description: 'Person age',
          prompt: 'How old are you?',
          type: 'float',
        } satisfies AiExtractStructuredFieldsField,
        {
          key: 'hobby',
          displayName: 'Hobby',
          description: 'Person hobby',
          prompt: 'What is your hobby?',
          type: 'multiSelect',
          options: [
            { key: 'guitar' } satisfies AiExtractStructuredFieldsOptionsField,
            { key: 'books' } satisfies AiExtractStructuredFieldsOptionsField,
          ],
        } satisfies AiExtractStructuredFieldsField,
      ],
      items: [new AiItemBase({ id: file.id })],
      aiAgent: agentIgnoringOverridingEmbeddingsModel,
    } satisfies AiExtractStructured);
  if (
    !(
      (toString(
        getValueFromObjectRawData(response, 'answer.hobby'),
      ) as string) == (['guitar'].map(toString).join(',') as string)
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(
        getValueFromObjectRawData(response, 'answer.firstName'),
      ) as string) == 'John'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(
        getValueFromObjectRawData(response, 'answer.lastName'),
      ) as string) == 'Doe'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(
        getValueFromObjectRawData(response, 'answer.dateOfBirth'),
      ) as string) == '1990-07-04'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(getValueFromObjectRawData(response, 'answer.age')) as string) ==
      '34'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (!(response.completionReason == 'done')) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(file.id);
});
test('testAIExtractStructuredWithMetadataTemplate', async function testAIExtractStructuredWithMetadataTemplate(): Promise<any> {
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: ''.concat(getUuid(), '.txt') as string,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: stringToByteStream(
      'My name is John Doe. I was born in 4th July 1990. I am 34 years old. My hobby is guitar.',
    ),
  } satisfies UploadFileRequestBody);
  const file: FileFull = uploadedFiles.entries![0];
  await delayInSeconds(5);
  const templateKey: string = ''.concat('key', getUuid()) as string;
  const template: MetadataTemplate =
    await client.metadataTemplates.createMetadataTemplate({
      scope: 'enterprise',
      displayName: templateKey,
      templateKey: templateKey,
      fields: [
        {
          key: 'firstName',
          displayName: 'First name',
          description: 'Person first name',
          type: 'string' as CreateMetadataTemplateRequestBodyFieldsTypeField,
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          key: 'lastName',
          displayName: 'Last name',
          description: 'Person last name',
          type: 'string' as CreateMetadataTemplateRequestBodyFieldsTypeField,
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          key: 'dateOfBirth',
          displayName: 'Birth date',
          description: 'Person date of birth',
          type: 'date' as CreateMetadataTemplateRequestBodyFieldsTypeField,
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          key: 'age',
          displayName: 'Age',
          description: 'Person age',
          type: 'float' as CreateMetadataTemplateRequestBodyFieldsTypeField,
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
        {
          key: 'hobby',
          displayName: 'Hobby',
          description: 'Person hobby',
          type: 'multiSelect' as CreateMetadataTemplateRequestBodyFieldsTypeField,
          options: [
            {
              key: 'guitar',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
            {
              key: 'books',
            } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField,
          ],
        } satisfies CreateMetadataTemplateRequestBodyFieldsField,
      ],
    } satisfies CreateMetadataTemplateRequestBody);
  const response: AiExtractStructuredResponse =
    await client.ai.createAiExtractStructured({
      metadataTemplate: {
        templateKey: templateKey,
        scope: 'enterprise',
      } satisfies AiExtractStructuredMetadataTemplateField,
      items: [new AiItemBase({ id: file.id })],
    } satisfies AiExtractStructured);
  if (
    !(
      (toString(
        getValueFromObjectRawData(response, 'answer.firstName'),
      ) as string) == 'John'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(
        getValueFromObjectRawData(response, 'answer.lastName'),
      ) as string) == 'Doe'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(
        getValueFromObjectRawData(response, 'answer.dateOfBirth'),
      ) as string) == '1990-07-04T00:00:00Z'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(getValueFromObjectRawData(response, 'answer.age')) as string) ==
      '34'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(
        getValueFromObjectRawData(response, 'answer.hobby'),
      ) as string) == (['guitar'].map(toString).join(',') as string)
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (!(response.completionReason == 'done')) {
    throw new Error('Assertion failed');
  }
  await client.metadataTemplates.deleteMetadataTemplate(
    'enterprise' as DeleteMetadataTemplateScope,
    template.templateKey!,
  );
  await client.files.deleteFileById(file.id);
});
export {};
