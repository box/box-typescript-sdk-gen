"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const aiTextGen_generated_js_1 = require("../schemas/aiTextGen.generated.js");
const aiItemBase_generated_js_1 = require("../schemas/aiItemBase.generated.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
const commons_generated_js_2 = require("./commons.generated.js");
const aiAgentExtract_generated_js_1 = require("../schemas/aiAgentExtract.generated.js");
const aiAgentExtractStructured_generated_js_1 = require("../schemas/aiAgentExtractStructured.generated.js");
const utils_js_6 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testAskAISingleItem', function testAskAISingleItem() {
    return __awaiter(this, void 0, void 0, function* () {
        const aiAgentConfig = yield exports.client.ai.getAiAgentDefaultConfig({
            mode: 'ask',
            language: 'en-US',
        });
        const aiAskAgentConfig = aiAgentConfig;
        const fileToAsk = yield (0, commons_generated_js_2.uploadNewFile)();
        const response = yield exports.client.ai.createAiAsk({
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
        yield exports.client.files.deleteFileById(fileToAsk.id);
    });
});
test('testAskAIMultipleItems', function testAskAIMultipleItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToAsk1 = yield (0, commons_generated_js_2.uploadNewFile)();
        const fileToAsk2 = yield (0, commons_generated_js_2.uploadNewFile)();
        const response = yield exports.client.ai.createAiAsk({
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
        yield exports.client.files.deleteFileById(fileToAsk1.id);
        yield exports.client.files.deleteFileById(fileToAsk2.id);
    });
});
test('testAITextGenWithDialogueHistory', function testAITextGenWithDialogueHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToAsk = yield (0, commons_generated_js_2.uploadNewFile)();
        const aiAgentConfig = yield exports.client.ai.getAiAgentDefaultConfig({
            mode: 'text_gen',
            language: 'en-US',
        });
        const aiTextGenAgentConfig = aiAgentConfig;
        const response = yield exports.client.ai.createAiTextGen({
            prompt: 'Parapharse the document.s',
            items: [
                new aiTextGen_generated_js_1.AiTextGenItemsField({
                    id: fileToAsk.id,
                    type: 'file',
                    content: 'The Earth goes around the sun. Sun rises in the East in the morning.',
                }),
            ],
            dialogueHistory: [
                {
                    prompt: 'What does the earth go around?',
                    answer: 'The sun',
                    createdAt: (0, utils_js_4.dateTimeFromString)('2021-01-01T00:00:00Z'),
                },
                {
                    prompt: 'On Earth, where does the sun rise?',
                    answer: 'East',
                    createdAt: (0, utils_js_4.dateTimeFromString)('2021-01-01T00:00:00Z'),
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
        yield exports.client.files.deleteFileById(fileToAsk.id);
    });
});
test('testGettingAIAskAgentConfig', function testGettingAIAskAgentConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const aiAgentConfig = yield exports.client.ai.getAiAgentDefaultConfig({
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
});
test('testGettingAITextGenAgentConfig', function testGettingAITextGenAgentConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const aiAgentConfig = yield exports.client.ai.getAiAgentDefaultConfig({
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
});
test('testAIExtract', function testAIExtract() {
    return __awaiter(this, void 0, void 0, function* () {
        const aiAgentConfig = yield exports.client.ai.getAiAgentDefaultConfig({
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
        const agentIgnoringOverridingEmbeddingsModel = new aiAgentExtract_generated_js_1.AiAgentExtract({
            basicText: aiExtractAgentConfig.basicText,
            longText: longTextConfigWithNoEmbeddings,
        });
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: ''.concat((0, utils_js_1.getUuid)(), '.txt'),
                parent: { id: '0' },
            },
            file: (0, utils_js_2.stringToByteStream)('My name is John Doe. I live in San Francisco. I was born in 1990. I work at Box.'),
        });
        const file = uploadedFiles.entries[0];
        yield (0, utils_js_3.delayInSeconds)(5);
        const response = yield exports.client.ai.createAiExtract({
            prompt: 'firstName, lastName, location, yearOfBirth, company',
            items: [new aiItemBase_generated_js_1.AiItemBase({ id: file.id })],
            aiAgent: agentIgnoringOverridingEmbeddingsModel,
        });
        const expectedResponse = '{"firstName": "John", "lastName": "Doe", "location": "San Francisco", "yearOfBirth": "1990", "company": "Box"}';
        if (!(response.answer == expectedResponse)) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testAIExtractStructuredWithFields', function testAIExtractStructuredWithFields() {
    return __awaiter(this, void 0, void 0, function* () {
        const aiAgentConfig = yield exports.client.ai.getAiAgentDefaultConfig({
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
        const agentIgnoringOverridingEmbeddingsModel = new aiAgentExtractStructured_generated_js_1.AiAgentExtractStructured({
            basicText: aiExtractStructuredAgentConfig.basicText,
            longText: longTextConfigWithNoEmbeddings,
        });
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: ''.concat((0, utils_js_1.getUuid)(), '.txt'),
                parent: { id: '0' },
            },
            file: (0, utils_js_2.stringToByteStream)('My name is John Doe. I was born in 4th July 1990. I am 34 years old. My hobby is guitar.'),
        });
        const file = uploadedFiles.entries[0];
        yield (0, utils_js_3.delayInSeconds)(5);
        const response = yield exports.client.ai.createAiExtractStructured({
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
            items: [new aiItemBase_generated_js_1.AiItemBase({ id: file.id })],
            aiAgent: agentIgnoringOverridingEmbeddingsModel,
        });
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'answer.hobby')) == ['guitar'].map(utils_js_6.toString).join(','))) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'answer.firstName')) == 'John')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'answer.lastName')) == 'Doe')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'answer.dateOfBirth')) == '1990-07-04')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'answer.age')) ==
            '34')) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testAIExtractStructuredWithMetadataTemplate', function testAIExtractStructuredWithMetadataTemplate() {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: ''.concat((0, utils_js_1.getUuid)(), '.txt'),
                parent: { id: '0' },
            },
            file: (0, utils_js_2.stringToByteStream)('My name is John Doe. I was born in 4th July 1990. I am 34 years old. My hobby is guitar.'),
        });
        const file = uploadedFiles.entries[0];
        yield (0, utils_js_3.delayInSeconds)(5);
        const templateKey = ''.concat('key', (0, utils_js_1.getUuid)());
        const template = yield exports.client.metadataTemplates.createMetadataTemplate({
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
        const response = yield exports.client.ai.createAiExtractStructured({
            metadataTemplate: {
                templateKey: templateKey,
                scope: 'enterprise',
            },
            items: [new aiItemBase_generated_js_1.AiItemBase({ id: file.id })],
        });
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'answer.firstName')) == 'John')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'answer.lastName')) == 'Doe')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'answer.dateOfBirth')) == '1990-07-04T00:00:00Z')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'answer.age')) ==
            '34')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_6.toString)((0, utils_js_5.getValueFromObjectRawData)(response, 'answer.hobby')) == ['guitar'].map(utils_js_6.toString).join(','))) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=ai.generated.test.js.map