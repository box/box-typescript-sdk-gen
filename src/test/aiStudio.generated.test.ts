import { serializeAiSingleAgentResponseFull } from '@/schemas/aiSingleAgentResponseFull.generated';
import { deserializeAiSingleAgentResponseFull } from '@/schemas/aiSingleAgentResponseFull.generated';
import { serializeCreateAiAgent } from '@/schemas/createAiAgent.generated';
import { deserializeCreateAiAgent } from '@/schemas/createAiAgent.generated';
import { serializeAiStudioAgentAsk } from '@/schemas/aiStudioAgentAsk.generated';
import { deserializeAiStudioAgentAsk } from '@/schemas/aiStudioAgentAsk.generated';
import { serializeAiMultipleAgentResponse } from '@/schemas/aiMultipleAgentResponse.generated';
import { deserializeAiMultipleAgentResponse } from '@/schemas/aiMultipleAgentResponse.generated';
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
import { serializeAiAgentReference } from '@/schemas/aiAgentReference.generated';
import { deserializeAiAgentReference } from '@/schemas/aiAgentReference.generated';
import { CreateAiAgentInput } from '@/schemas/createAiAgent.generated';
import { GetAiAgentByIdOptionalsInput } from '@/managers/aiStudio.generated';
import { GetAiAgentByIdOptionals } from '@/managers/aiStudio.generated';
import { AiSingleAgentResponseFull } from '@/schemas/aiSingleAgentResponseFull.generated';
import { CreateAiAgent } from '@/schemas/createAiAgent.generated';
import { AiStudioAgentAsk } from '@/schemas/aiStudioAgentAsk.generated';
import { AiMultipleAgentResponse } from '@/schemas/aiMultipleAgentResponse.generated';
import { GetAiAgentByIdQueryParams } from '@/managers/aiStudio.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { AiResponseFull } from '@/schemas/aiResponseFull.generated';
import { AiAsk } from '@/schemas/aiAsk.generated';
import { AiAskModeField } from '@/schemas/aiAsk.generated';
import { AiItemAsk } from '@/schemas/aiItemAsk.generated';
import { AiItemAskTypeField } from '@/schemas/aiItemAsk.generated';
import { BoxDeveloperTokenAuth } from '@/box/developerTokenAuth.generated';
import { BoxClient } from '@/client.generated';
import { getDefaultClient } from './commons.generated';
import { uploadNewFile } from './commons.generated';
import { getUuid } from '@/internal/utils';
import { AiAgentReference } from '@/schemas/aiAgentReference.generated';
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
test('testAiStudioCRUD', async function testAiStudioCRUD(): Promise<any> {
  const agentName: string = getUuid();
  const createdAgent: AiSingleAgentResponseFull =
    await client.aiStudio.createAiAgent({
      name: agentName,
      accessState: 'enabled',
      ask: new AiStudioAgentAsk({
        accessState: 'enabled',
        description: 'desc1',
      }),
    } satisfies CreateAiAgentInput);
  if (!(createdAgent.name == agentName)) {
    throw new Error('Assertion failed');
  }
  const agents: AiMultipleAgentResponse = await client.aiStudio.getAiAgents();
  const numAgents: number = agents.entries.length;
  if (!((toString(agents.entries[0].type) as string) == 'ai_agent')) {
    throw new Error('Assertion failed');
  }
  const retrievedAgent: AiSingleAgentResponseFull =
    await client.aiStudio.getAiAgentById(createdAgent.id, {
      queryParams: { fields: ['ask'] } satisfies GetAiAgentByIdQueryParams,
    } satisfies GetAiAgentByIdOptionalsInput);
  if (!(retrievedAgent.name == agentName)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(retrievedAgent.accessState) as string) == 'enabled')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(retrievedAgent.ask!.accessState) as string) == 'enabled')) {
    throw new Error('Assertion failed');
  }
  if (!(retrievedAgent.ask!.description == 'desc1')) {
    throw new Error('Assertion failed');
  }
  const updatedAgent: AiSingleAgentResponseFull =
    await client.aiStudio.updateAiAgentById(createdAgent.id, {
      name: agentName,
      accessState: 'enabled',
      ask: new AiStudioAgentAsk({
        accessState: 'disabled',
        description: 'desc2',
      }),
    } satisfies CreateAiAgentInput);
  if (!((toString(updatedAgent.accessState) as string) == 'enabled')) {
    throw new Error('Assertion failed');
  }
  if (!((toString(updatedAgent.ask!.accessState) as string) == 'disabled')) {
    throw new Error('Assertion failed');
  }
  if (!(updatedAgent.ask!.description == 'desc2')) {
    throw new Error('Assertion failed');
  }
  await client.aiStudio.deleteAiAgentById(createdAgent.id);
  const agentsAfterDelete: AiMultipleAgentResponse =
    await client.aiStudio.getAiAgents();
  if (!(agentsAfterDelete.entries.length == numAgents - 1)) {
    throw new Error('Assertion failed');
  }
});
test('testUseAIAgentReferenceInAIAsk', async function testUseAIAgentReferenceInAIAsk(): Promise<any> {
  const agentName: string = getUuid();
  const createdAgent: AiSingleAgentResponseFull =
    await client.aiStudio.createAiAgent({
      name: agentName,
      accessState: 'enabled',
      ask: new AiStudioAgentAsk({
        accessState: 'enabled',
        description: 'desc1',
      }),
    } satisfies CreateAiAgentInput);
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
    aiAgent: new AiAgentReference({ id: createdAgent.id }),
  } satisfies AiAsk);
  if (!(response!.answer.includes('East') as boolean)) {
    throw new Error('Assertion failed');
  }
  if (!(response!.completionReason == 'done')) {
    throw new Error('Assertion failed');
  }
  if (!(response!.aiAgentInfo!.models!.length > 0)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(fileToAsk.id);
  await client.aiStudio.deleteAiAgentById(createdAgent.id);
});
export {};
