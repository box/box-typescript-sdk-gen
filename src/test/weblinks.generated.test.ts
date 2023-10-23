import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeWebLink } from '../schemas.generated.js';
import { deserializeWebLink } from '../schemas.generated.js';
import { serializeCreateWebLinkRequestBodyArg } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBodyArg } from '../managers/webLinks.generated.js';
import { serializeUpdateWebLinkByIdRequestBodyArg } from '../managers/webLinks.generated.js';
import { deserializeUpdateWebLinkByIdRequestBodyArg } from '../managers/webLinks.generated.js';
import { serializeUpdateWebLinkByIdRequestBodyArgSharedLinkField } from '../managers/webLinks.generated.js';
import { deserializeUpdateWebLinkByIdRequestBodyArgSharedLinkField } from '../managers/webLinks.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { WebLink } from '../schemas.generated.js';
import { CreateWebLinkRequestBodyArg } from '../managers/webLinks.generated.js';
import { UpdateWebLinkByIdRequestBodyArg } from '../managers/webLinks.generated.js';
import { UpdateWebLinkByIdRequestBodyArgSharedLinkField } from '../managers/webLinks.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
const client: any = getDefaultClient();
test('test_create_get_delete_weblink', async function test_create_get_delete_weblink(): Promise<any> {
  const url: any = 'https://www.box.com';
  const parent: any = await client.folders.getFolderById('0');
  const name: any = getUuid();
  const description: any = 'Weblink description';
  const sharedAccess: any = 'open';
  const password: any = 'super-secret-password';
  const weblink: any = await client.webLinks.createWebLink({
    url: url,
    parent: parent,
    name: name,
    description: description,
  } satisfies CreateWebLinkRequestBodyArg);
  if (!(weblink.url == url)) {
    throw 'Assertion failed';
  }
  if (!(weblink.parent!.id == parent.id)) {
    throw 'Assertion failed';
  }
  if (!(weblink.name == name)) {
    throw 'Assertion failed';
  }
  if (!(weblink.description == description)) {
    throw 'Assertion failed';
  }
  const weblinkById: any = await client.webLinks.getWebLinkById(weblink.id);
  if (!(weblinkById.id == weblink.id)) {
    throw 'Assertion failed';
  }
  if (!(weblinkById.url == url)) {
    throw 'Assertion failed';
  }
  const updatedName: any = getUuid();
  const updatedWeblink: any = await client.webLinks.updateWebLinkById(
    weblink.id,
    {
      name: updatedName,
      sharedLink: {
        access: sharedAccess,
        password: password,
      } satisfies UpdateWebLinkByIdRequestBodyArgSharedLinkField,
    } satisfies UpdateWebLinkByIdRequestBodyArg
  );
  if (!(updatedWeblink.name == updatedName)) {
    throw 'Assertion failed';
  }
  if (!(updatedWeblink.sharedLink!.access == sharedAccess)) {
    throw 'Assertion failed';
  }
  await client.webLinks.deleteWebLinkById(weblink.id);
  const deletedWeblink: any = await client.webLinks.getWebLinkById(weblink.id);
  if (!(deletedWeblink.itemStatus == 'trashed')) {
    throw 'Assertion failed';
  }
});
export {};
