import { AiTextGenItemsField } from '../schemas/aiTextGen.generated.js';
import { AiItemBase } from '../schemas/aiItemBase.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { getUuid } from '../internal/utils.js';
import { stringToByteStream } from '../internal/utils.js';
import { delayInSeconds } from '../internal/utils.js';
import { dateTimeFromString } from '../internal/utils.js';
import { getValueFromObjectRawData } from '../internal/utils.js';
import { uploadNewFile } from './commons.generated.js';
import { AiAgentExtract } from '../schemas/aiAgentExtract.generated.js';
import { AiAgentExtractStructured } from '../schemas/aiAgentExtractStructured.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testAskAISingleItem', async function testAskAISingleItem() {
    const aiAgentConfig = await client.ai.getAiAgentDefaultConfig({
        mode: 'ask',
        language: 'en-US',
    });
    const aiAskAgentConfig = aiAgentConfig;
    const fileToAsk = await uploadNewFile();
    const response = await client.ai.createAiAsk({
        mode: 'single_item_qa',
        prompt: 'which direction sun rises',
        items: [
            {
                id: fileToAsk.id,
                type: 'file',
                content: 'Sun rises in the East',
            },
        ],
        aiAgent: aiAskAgentConfig,
    });
    if (!response.answer.includes('East')) {
        throw new Error('Assertion failed');
    }
    if (!(response.completionReason == 'done')) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(fileToAsk.id);
});
test('testAskAIMultipleItems', async function testAskAIMultipleItems() {
    const fileToAsk1 = await uploadNewFile();
    const fileToAsk2 = await uploadNewFile();
    const response = await client.ai.createAiAsk({
        mode: 'multiple_item_qa',
        prompt: 'Which direction sun rises?',
        items: [
            {
                id: fileToAsk1.id,
                type: 'file',
                content: 'Earth goes around the sun',
            },
            {
                id: fileToAsk2.id,
                type: 'file',
                content: 'Sun rises in the East in the morning',
            },
        ],
    });
    if (!response.answer.includes('East')) {
        throw new Error('Assertion failed');
    }
    if (!(response.completionReason == 'done')) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(fileToAsk1.id);
    await client.files.deleteFileById(fileToAsk2.id);
});
test('testAITextGenWithDialogueHistory', async function testAITextGenWithDialogueHistory() {
    const fileToAsk = await uploadNewFile();
    const aiAgentConfig = await client.ai.getAiAgentDefaultConfig({
        mode: 'text_gen',
        language: 'en-US',
    });
    const aiTextGenAgentConfig = aiAgentConfig;
    const response = await client.ai.createAiTextGen({
        prompt: 'Parapharse the document.s',
        items: [
            new AiTextGenItemsField({
                id: fileToAsk.id,
                type: 'file',
                content: 'The Earth goes around the sun. Sun rises in the East in the morning.',
            }),
        ],
        dialogueHistory: [
            {
                prompt: 'What does the earth go around?',
                answer: 'The sun',
                createdAt: dateTimeFromString('2021-01-01T00:00:00Z'),
            },
            {
                prompt: 'On Earth, where does the sun rise?',
                answer: 'East',
                createdAt: dateTimeFromString('2021-01-01T00:00:00Z'),
            },
        ],
        aiAgent: aiTextGenAgentConfig,
    });
    if (!response.answer.includes('sun')) {
        throw new Error('Assertion failed');
    }
    if (!(response.completionReason == 'done')) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(fileToAsk.id);
});
test('testGettingAIAskAgentConfig', async function testGettingAIAskAgentConfig() {
    const aiAgentConfig = await client.ai.getAiAgentDefaultConfig({
        mode: 'ask',
        language: 'en-US',
    });
    if (!(aiAgentConfig.type == 'ai_agent_ask')) {
        throw new Error('Assertion failed');
    }
    const aiAgentAskConfig = aiAgentConfig;
    if (!!(aiAgentAskConfig.basicText.model == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.basicText.promptTemplate == '')) {
        throw new Error('Assertion failed');
    }
    if (!(aiAgentAskConfig.basicText.numTokensForCompletion > -1)) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.basicText.llmEndpointParams == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.basicTextMulti.model == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.basicTextMulti.promptTemplate == '')) {
        throw new Error('Assertion failed');
    }
    if (!(aiAgentAskConfig.basicTextMulti.numTokensForCompletion > -1)) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.basicTextMulti.llmEndpointParams == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.longText.model == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.longText.promptTemplate == '')) {
        throw new Error('Assertion failed');
    }
    if (!(aiAgentAskConfig.longText.numTokensForCompletion > -1)) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.longText.embeddings.model == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.longText.embeddings.strategy.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.longText.llmEndpointParams == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.longTextMulti.model == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.longTextMulti.promptTemplate == '')) {
        throw new Error('Assertion failed');
    }
    if (!(aiAgentAskConfig.longTextMulti.numTokensForCompletion > -1)) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.longTextMulti.embeddings.model == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.longTextMulti.embeddings.strategy.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentAskConfig.longTextMulti.llmEndpointParams == void 0)) {
        throw new Error('Assertion failed');
    }
});
test('testGettingAITextGenAgentConfig', async function testGettingAITextGenAgentConfig() {
    const aiAgentConfig = await client.ai.getAiAgentDefaultConfig({
        mode: 'text_gen',
        language: 'en-US',
    });
    if (!(aiAgentConfig.type == 'ai_agent_text_gen')) {
        throw new Error('Assertion failed');
    }
    const aiAgentTextGenConfig = aiAgentConfig;
    if (!!(aiAgentTextGenConfig.basicGen.llmEndpointParams == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentTextGenConfig.basicGen.model == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentTextGenConfig.basicGen.promptTemplate == '')) {
        throw new Error('Assertion failed');
    }
    if (!(aiAgentTextGenConfig.basicGen.numTokensForCompletion > -1)) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentTextGenConfig.basicGen.contentTemplate == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentTextGenConfig.basicGen.embeddings.model == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(aiAgentTextGenConfig.basicGen.embeddings.strategy.id == '')) {
        throw new Error('Assertion failed');
    }
});
test('testAIExtract', async function testAIExtract() {
    const aiAgentConfig = await client.ai.getAiAgentDefaultConfig({
        mode: 'extract',
        language: 'en-US',
    });
    const aiExtractAgentConfig = aiAgentConfig;
    const longTextConfigWithNoEmbeddings = {
        systemMessage: aiExtractAgentConfig.longText.systemMessage,
        promptTemplate: aiExtractAgentConfig.longText.promptTemplate,
        model: aiExtractAgentConfig.longText.model,
        numTokensForCompletion: aiExtractAgentConfig.longText.numTokensForCompletion,
        llmEndpointParams: aiExtractAgentConfig.longText.llmEndpointParams,
    };
    const agentIgnoringOverridingEmbeddingsModel = new AiAgentExtract({
        basicText: aiExtractAgentConfig.basicText,
        longText: longTextConfigWithNoEmbeddings,
    });
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: ''.concat(getUuid(), '.txt'),
            parent: { id: '0' },
        },
        file: stringToByteStream('My name is John Doe. I live in San Francisco. I was born in 1990. I work at Box.'),
    });
    const file = uploadedFiles.entries[0];
    await delayInSeconds(5);
    const response = await client.ai.createAiExtract({
        prompt: 'firstName, lastName, location, yearOfBirth, company',
        items: [new AiItemBase({ id: file.id })],
        aiAgent: agentIgnoringOverridingEmbeddingsModel,
    });
    const expectedResponse = '{"firstName": "John", "lastName": "Doe", "location": "San Francisco", "yearOfBirth": "1990", "company": "Box"}';
    if (!(response.answer == expectedResponse)) {
        throw new Error('Assertion failed');
    }
    if (!(response.completionReason == 'done')) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(file.id);
});
test('testAIExtractStructuredWithFields', async function testAIExtractStructuredWithFields() {
    const aiAgentConfig = await client.ai.getAiAgentDefaultConfig({
        mode: 'extract_structured',
        language: 'en-US',
    });
    const aiExtractStructuredAgentConfig = aiAgentConfig;
    const longTextConfigWithNoEmbeddings = {
        systemMessage: aiExtractStructuredAgentConfig.longText.systemMessage,
        promptTemplate: aiExtractStructuredAgentConfig.longText.promptTemplate,
        model: aiExtractStructuredAgentConfig.longText.model,
        numTokensForCompletion: aiExtractStructuredAgentConfig.longText.numTokensForCompletion,
        llmEndpointParams: aiExtractStructuredAgentConfig.longText.llmEndpointParams,
    };
    const agentIgnoringOverridingEmbeddingsModel = new AiAgentExtractStructured({
        basicText: aiExtractStructuredAgentConfig.basicText,
        longText: longTextConfigWithNoEmbeddings,
    });
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: ''.concat(getUuid(), '.txt'),
            parent: { id: '0' },
        },
        file: stringToByteStream('My name is John Doe. I was born in 4th July 1990. I am 34 years old. My hobby is guitar.'),
    });
    const file = uploadedFiles.entries[0];
    await delayInSeconds(5);
    const response = await client.ai.createAiExtractStructured({
        fields: [
            {
                key: 'firstName',
                displayName: 'First name',
                description: 'Person first name',
                prompt: 'What is the your first name?',
                type: 'string',
            },
            {
                key: 'lastName',
                displayName: 'Last name',
                description: 'Person last name',
                prompt: 'What is the your last name?',
                type: 'string',
            },
            {
                key: 'dateOfBirth',
                displayName: 'Birth date',
                description: 'Person date of birth',
                prompt: 'What is the date of your birth?',
                type: 'date',
            },
            {
                key: 'age',
                displayName: 'Age',
                description: 'Person age',
                prompt: 'How old are you?',
                type: 'float',
            },
            {
                key: 'hobby',
                displayName: 'Hobby',
                description: 'Person hobby',
                prompt: 'What is your hobby?',
                type: 'multiSelect',
                options: [
                    { key: 'guitar' },
                    { key: 'books' },
                ],
            },
        ],
        items: [new AiItemBase({ id: file.id })],
        aiAgent: agentIgnoringOverridingEmbeddingsModel,
    });
    if (!(toString(getValueFromObjectRawData(response, 'answer.hobby')) == ['guitar'].map(toString).join(','))) {
        throw new Error('Assertion failed');
    }
    if (!(toString(getValueFromObjectRawData(response, 'answer.firstName')) == 'John')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(getValueFromObjectRawData(response, 'answer.lastName')) == 'Doe')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(getValueFromObjectRawData(response, 'answer.dateOfBirth')) == '1990-07-04')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(getValueFromObjectRawData(response, 'answer.age')) ==
        '34')) {
        throw new Error('Assertion failed');
    }
    if (!(response.completionReason == 'done')) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(file.id);
});
test('testAIExtractStructuredWithMetadataTemplate', async function testAIExtractStructuredWithMetadataTemplate() {
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: ''.concat(getUuid(), '.txt'),
            parent: { id: '0' },
        },
        file: stringToByteStream('My name is John Doe. I was born in 4th July 1990. I am 34 years old. My hobby is guitar.'),
    });
    const file = uploadedFiles.entries[0];
    await delayInSeconds(5);
    const templateKey = ''.concat('key', getUuid());
    const template = await client.metadataTemplates.createMetadataTemplate({
        scope: 'enterprise',
        displayName: templateKey,
        templateKey: templateKey,
        fields: [
            {
                key: 'firstName',
                displayName: 'First name',
                description: 'Person first name',
                type: 'string',
            },
            {
                key: 'lastName',
                displayName: 'Last name',
                description: 'Person last name',
                type: 'string',
            },
            {
                key: 'dateOfBirth',
                displayName: 'Birth date',
                description: 'Person date of birth',
                type: 'date',
            },
            {
                key: 'age',
                displayName: 'Age',
                description: 'Person age',
                type: 'float',
            },
            {
                key: 'hobby',
                displayName: 'Hobby',
                description: 'Person hobby',
                type: 'multiSelect',
                options: [
                    {
                        key: 'guitar',
                    },
                    {
                        key: 'books',
                    },
                ],
            },
        ],
    });
    const response = await client.ai.createAiExtractStructured({
        metadataTemplate: {
            templateKey: templateKey,
            scope: 'enterprise',
        },
        items: [new AiItemBase({ id: file.id })],
    });
    if (!(toString(getValueFromObjectRawData(response, 'answer.firstName')) == 'John')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(getValueFromObjectRawData(response, 'answer.lastName')) == 'Doe')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(getValueFromObjectRawData(response, 'answer.dateOfBirth')) == '1990-07-04T00:00:00Z')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(getValueFromObjectRawData(response, 'answer.age')) ==
        '34')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(getValueFromObjectRawData(response, 'answer.hobby')) == ['guitar'].map(toString).join(','))) {
        throw new Error('Assertion failed');
    }
    if (!(response.completionReason == 'done')) {
        throw new Error('Assertion failed');
    }
    await client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=ai.generated.test.js.map