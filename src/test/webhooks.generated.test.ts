import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { serializeWebhook } from '../schemas.generated.js';
import { deserializeWebhook } from '../schemas.generated.js';
import { serializeCreateWebhookRequestBody } from '../managers/webhooks.generated.js';
import { deserializeCreateWebhookRequestBody } from '../managers/webhooks.generated.js';
import { serializeCreateWebhookRequestBodyTargetField } from '../managers/webhooks.generated.js';
import { deserializeCreateWebhookRequestBodyTargetField } from '../managers/webhooks.generated.js';
import { serializeCreateWebhookRequestBodyTargetTypeField } from '../managers/webhooks.generated.js';
import { deserializeCreateWebhookRequestBodyTargetTypeField } from '../managers/webhooks.generated.js';
import { serializeCreateWebhookRequestBodyTriggersField } from '../managers/webhooks.generated.js';
import { deserializeCreateWebhookRequestBodyTriggersField } from '../managers/webhooks.generated.js';
import { serializeWebhooks } from '../schemas.generated.js';
import { deserializeWebhooks } from '../schemas.generated.js';
import { serializeUpdateWebhookByIdRequestBody } from '../managers/webhooks.generated.js';
import { deserializeUpdateWebhookByIdRequestBody } from '../managers/webhooks.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBody } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { Webhook } from '../schemas.generated.js';
import { CreateWebhookRequestBody } from '../managers/webhooks.generated.js';
import { CreateWebhookRequestBodyTargetField } from '../managers/webhooks.generated.js';
import { CreateWebhookRequestBodyTargetTypeField } from '../managers/webhooks.generated.js';
import { CreateWebhookRequestBodyTriggersField } from '../managers/webhooks.generated.js';
import { Webhooks } from '../schemas.generated.js';
import { UpdateWebhookByIdRequestBody } from '../managers/webhooks.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testWebhooksCRUD', async function testWebhooksCRUD(): Promise<any> {
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  const webhook: Webhook = await client.webhooks.createWebhook({
    target: {
      id: folder.id,
      type: 'folder' as CreateWebhookRequestBodyTargetTypeField,
    } satisfies CreateWebhookRequestBodyTargetField,
    address: 'https://example.com/new-webhook',
    triggers: ['FILE.UPLOADED' as CreateWebhookRequestBodyTriggersField],
  } satisfies CreateWebhookRequestBody);
  if (!(webhook.target!.id == folder.id)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(webhook.target!.type) as string) == 'folder')) {
    throw new Error('Assertion failed');
  }
  if (!(webhook.triggers!.length == ['FILE.UPLOADED'].length)) {
    throw new Error('Assertion failed');
  }
  if (!(webhook.address == 'https://example.com/new-webhook')) {
    throw new Error('Assertion failed');
  }
  const webhooks: Webhooks = await client.webhooks.getWebhooks();
  if (!(webhooks.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const webhookFromApi: Webhook = await client.webhooks.getWebhookById(
    webhook.id!
  );
  if (!(webhook.id == webhookFromApi.id)) {
    throw new Error('Assertion failed');
  }
  if (!(webhook.target!.id == webhookFromApi.target!.id)) {
    throw new Error('Assertion failed');
  }
  if (!(webhook.address == webhookFromApi.address)) {
    throw new Error('Assertion failed');
  }
  const updatedWebhook: Webhook = await client.webhooks.updateWebhookById(
    webhook.id!,
    {
      address: 'https://example.com/updated-webhook',
    } satisfies UpdateWebhookByIdRequestBody
  );
  if (!(updatedWebhook.id == webhook.id)) {
    throw new Error('Assertion failed');
  }
  if (!(updatedWebhook.address == 'https://example.com/updated-webhook')) {
    throw new Error('Assertion failed');
  }
  await client.webhooks.deleteWebhookById(webhook.id!);
  await expect(async () => {
    await client.webhooks.deleteWebhookById(webhook.id!);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
