import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeWebLink } from '@/schemas/webLink.generated';
import { deserializeWebLink } from '@/schemas/webLink.generated';
import { serializeCreateWebLinkRequestBody } from '@/managers/webLinks.generated';
import { deserializeCreateWebLinkRequestBody } from '@/managers/webLinks.generated';
import { serializeCreateWebLinkRequestBodyParentField } from '@/managers/webLinks.generated';
import { deserializeCreateWebLinkRequestBodyParentField } from '@/managers/webLinks.generated';
import { serializeUpdateWebLinkByIdRequestBody } from '@/managers/webLinks.generated';
import { deserializeUpdateWebLinkByIdRequestBody } from '@/managers/webLinks.generated';
import { serializeUpdateWebLinkByIdRequestBodySharedLinkField } from '@/managers/webLinks.generated';
import { deserializeUpdateWebLinkByIdRequestBodySharedLinkField } from '@/managers/webLinks.generated';
import { serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField } from '@/managers/webLinks.generated';
import { deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField } from '@/managers/webLinks.generated';
import { UpdateWebLinkByIdOptionalsInput } from '@/managers/webLinks.generated';
import { UpdateWebLinkByIdOptionals } from '@/managers/webLinks.generated';
import { BoxClient } from '@/client.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { WebLink } from '@/schemas/webLink.generated';
import { CreateWebLinkRequestBody } from '@/managers/webLinks.generated';
import { CreateWebLinkRequestBodyParentField } from '@/managers/webLinks.generated';
import { UpdateWebLinkByIdRequestBody } from '@/managers/webLinks.generated';
import { UpdateWebLinkByIdRequestBodySharedLinkField } from '@/managers/webLinks.generated';
import { UpdateWebLinkByIdRequestBodySharedLinkAccessField } from '@/managers/webLinks.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
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
test('test_createGetDeleteWeblink', async function test_createGetDeleteWeblink(): Promise<any> {
  const url: string = 'https://www.box.com';
  const parent: FolderFull = await client.folders.getFolderById('0');
  const name: string = getUuid();
  const description: string = 'Weblink description';
  const password: string = 'super-secret-password';
  const weblink: WebLink = await client.webLinks.createWebLink({
    url: url,
    parent: { id: parent.id } satisfies CreateWebLinkRequestBodyParentField,
    name: name,
    description: description,
  } satisfies CreateWebLinkRequestBody);
  if (!(weblink.url == url)) {
    throw new Error('Assertion failed');
  }
  if (!(weblink.parent!.id == parent.id)) {
    throw new Error('Assertion failed');
  }
  if (!(weblink.name == name)) {
    throw new Error('Assertion failed');
  }
  if (!(weblink.description == description)) {
    throw new Error('Assertion failed');
  }
  const weblinkById: WebLink = await client.webLinks.getWebLinkById(weblink.id);
  if (!(weblinkById.id == weblink.id)) {
    throw new Error('Assertion failed');
  }
  if (!(weblinkById.url == url)) {
    throw new Error('Assertion failed');
  }
  const updatedName: string = getUuid();
  const updatedWeblink: WebLink = await client.webLinks.updateWebLinkById(
    weblink.id,
    {
      requestBody: {
        name: updatedName,
        sharedLink: {
          access: 'open' as UpdateWebLinkByIdRequestBodySharedLinkAccessField,
          password: password,
        } satisfies UpdateWebLinkByIdRequestBodySharedLinkField,
      } satisfies UpdateWebLinkByIdRequestBody,
    } satisfies UpdateWebLinkByIdOptionalsInput,
  );
  if (!(updatedWeblink.name == updatedName)) {
    throw new Error('Assertion failed');
  }
  if (!((toString(updatedWeblink.sharedLink!.access!) as string) == 'open')) {
    throw new Error('Assertion failed');
  }
  await client.webLinks.deleteWebLinkById(weblink.id);
  const deletedWeblink: WebLink = await client.webLinks.getWebLinkById(
    weblink.id,
  );
  if (!((toString(deletedWeblink.itemStatus!) as string) == 'trashed')) {
    throw new Error('Assertion failed');
  }
});
export {};
