import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { serializeWebhook } from '../schemas.generated.js';
import { deserializeWebhook } from '../schemas.generated.js';
import { serializeCreateWebhookRequestBodyArg } from '../managers/webhooks.generated.js';
import { deserializeCreateWebhookRequestBodyArg } from '../managers/webhooks.generated.js';
import { serializeCreateWebhookRequestBodyArgTargetField } from '../managers/webhooks.generated.js';
import { deserializeCreateWebhookRequestBodyArgTargetField } from '../managers/webhooks.generated.js';
import { serializeCreateWebhookRequestBodyArgTargetFieldTypeField } from '../managers/webhooks.generated.js';
import { deserializeCreateWebhookRequestBodyArgTargetFieldTypeField } from '../managers/webhooks.generated.js';
import { serializeCreateWebhookRequestBodyArgTriggersField } from '../managers/webhooks.generated.js';
import { deserializeCreateWebhookRequestBodyArgTriggersField } from '../managers/webhooks.generated.js';
import { serializeWebhooks } from '../schemas.generated.js';
import { deserializeWebhooks } from '../schemas.generated.js';
import { serializeUpdateWebhookByIdRequestBodyArg } from '../managers/webhooks.generated.js';
import { deserializeUpdateWebhookByIdRequestBodyArg } from '../managers/webhooks.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { Webhook } from '../schemas.generated.js';
import { CreateWebhookRequestBodyArg } from '../managers/webhooks.generated.js';
import { CreateWebhookRequestBodyArgTargetField } from '../managers/webhooks.generated.js';
import { CreateWebhookRequestBodyArgTargetFieldTypeField } from '../managers/webhooks.generated.js';
import { CreateWebhookRequestBodyArgTriggersField } from '../managers/webhooks.generated.js';
import { Webhooks } from '../schemas.generated.js';
import { UpdateWebhookByIdRequestBodyArg } from '../managers/webhooks.generated.js';
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
    parent: { id: '0' } satisfies CreateFolderRequestBodyArgParentField,
  } satisfies CreateFolderRequestBodyArg);
  const webhook: Webhook = await client.webhooks.createWebhook({
    target: {
      id: folder.id,
      type: 'folder' as CreateWebhookRequestBodyArgTargetFieldTypeField,
    } satisfies CreateWebhookRequestBodyArgTargetField,
    address: 'https://example.com/new-webhook',
    triggers: ['FILE.UPLOADED' as CreateWebhookRequestBodyArgTriggersField],
  } satisfies CreateWebhookRequestBodyArg);
  if (!(webhook.target!.id == folder.id)) {
    throw 'Assertion failed';
  }
  if (!((toString(webhook.target!.type) as string) == 'folder')) {
    throw 'Assertion failed';
  }
  if (!(webhook.triggers!.length == ['FILE.UPLOADED'].length)) {
    throw 'Assertion failed';
  }
  if (!(webhook.address == 'https://example.com/new-webhook')) {
    throw 'Assertion failed';
  }
  const webhooks: Webhooks = await client.webhooks.getWebhooks();
  if (!(webhooks.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const webhookFromApi: Webhook = await client.webhooks.getWebhookById(
    webhook.id!
  );
  if (!(webhook.id == webhookFromApi.id)) {
    throw 'Assertion failed';
  }
  if (!(webhook.target!.id == webhookFromApi.target!.id)) {
    throw 'Assertion failed';
  }
  if (!(webhook.address == webhookFromApi.address)) {
    throw 'Assertion failed';
  }
  const updatedWebhook: Webhook = await client.webhooks.updateWebhookById(
    webhook.id!,
    {
      address: 'https://example.com/updated-webhook',
    } satisfies UpdateWebhookByIdRequestBodyArg
  );
  if (!(updatedWebhook.id == webhook.id)) {
    throw 'Assertion failed';
  }
  if (!(updatedWebhook.address == 'https://example.com/updated-webhook')) {
    throw 'Assertion failed';
  }
  await client.webhooks.deleteWebhookById(webhook.id!);
  expect(async () => {
    await client.webhooks.deleteWebhookById(webhook.id!);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
