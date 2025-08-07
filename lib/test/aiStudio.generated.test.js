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
const aiStudioAgentAsk_generated_js_1 = require("../schemas/aiStudioAgentAsk.generated.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_1 = require("../internal/utils.js");
const aiAgentReference_generated_js_1 = require("../schemas/aiAgentReference.generated.js");
const utils_js_2 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testAiStudioCRUD', function testAiStudioCRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const agentName = (0, utils_js_1.getUuid)();
        const createdAgent = yield exports.client.aiStudio.createAiAgent({
            name: agentName,
            accessState: 'enabled',
            ask: new aiStudioAgentAsk_generated_js_1.AiStudioAgentAsk({
                accessState: 'enabled',
                description: 'desc1',
            }),
        });
        if (!(createdAgent.name == agentName)) {
            throw new Error('Assertion failed');
        }
        const agents = yield exports.client.aiStudio.getAiAgents();
        const numAgents = agents.entries.length;
        if (!((0, utils_js_2.toString)(agents.entries[0].type) == 'ai_agent')) {
            throw new Error('Assertion failed');
        }
        const retrievedAgent = yield exports.client.aiStudio.getAiAgentById(createdAgent.id, {
            queryParams: { fields: ['ask'] },
        });
        if (!(retrievedAgent.name == agentName)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(retrievedAgent.accessState) == 'enabled')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(retrievedAgent.ask.accessState) == 'enabled')) {
            throw new Error('Assertion failed');
        }
        if (!(retrievedAgent.ask.description == 'desc1')) {
            throw new Error('Assertion failed');
        }
        const updatedAgent = yield exports.client.aiStudio.updateAiAgentById(createdAgent.id, {
            name: agentName,
            accessState: 'enabled',
            ask: new aiStudioAgentAsk_generated_js_1.AiStudioAgentAsk({
                accessState: 'disabled',
                description: 'desc2',
            }),
        });
        if (!((0, utils_js_2.toString)(updatedAgent.accessState) == 'enabled')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(updatedAgent.ask.accessState) == 'disabled')) {
            throw new Error('Assertion failed');
        }
        if (!(updatedAgent.ask.description == 'desc2')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.aiStudio.deleteAiAgentById(createdAgent.id);
        const agentsAfterDelete = yield exports.client.aiStudio.getAiAgents();
        if (!(agentsAfterDelete.entries.length == numAgents - 1)) {
            throw new Error('Assertion failed');
        }
    });
});
test('testUseAIAgentReferenceInAIAsk', function testUseAIAgentReferenceInAIAsk() {
    return __awaiter(this, void 0, void 0, function* () {
        const agentName = (0, utils_js_1.getUuid)();
        const createdAgent = yield exports.client.aiStudio.createAiAgent({
            name: agentName,
            accessState: 'enabled',
            ask: new aiStudioAgentAsk_generated_js_1.AiStudioAgentAsk({
                accessState: 'enabled',
                description: 'desc1',
            }),
        });
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
            aiAgent: new aiAgentReference_generated_js_1.AiAgentReference({ id: createdAgent.id }),
        });
        if (!response.answer.includes('East')) {
            throw new Error('Assertion failed');
        }
        if (!(response.completionReason == 'done')) {
            throw new Error('Assertion failed');
        }
        if (!(response.aiAgentInfo.models.length > 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.files.deleteFileById(fileToAsk.id);
        yield exports.client.aiStudio.deleteAiAgentById(createdAgent.id);
    });
});
//# sourceMappingURL=aiStudio.generated.test.js.map