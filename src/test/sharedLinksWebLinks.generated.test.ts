import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeWebLink } from '@/schemas/webLink.generated';
import { deserializeWebLink } from '@/schemas/webLink.generated';
import { serializeCreateWebLinkRequestBody } from '@/managers/webLinks.generated';
import { deserializeCreateWebLinkRequestBody } from '@/managers/webLinks.generated';
import { serializeCreateWebLinkRequestBodyParentField } from '@/managers/webLinks.generated';
import { deserializeCreateWebLinkRequestBodyParentField } from '@/managers/webLinks.generated';
import { serializeAddShareLinkToWebLinkRequestBody } from '@/managers/sharedLinksWebLinks.generated';
import { deserializeAddShareLinkToWebLinkRequestBody } from '@/managers/sharedLinksWebLinks.generated';
import { serializeAddShareLinkToWebLinkRequestBodySharedLinkField } from '@/managers/sharedLinksWebLinks.generated';
import { deserializeAddShareLinkToWebLinkRequestBodySharedLinkField } from '@/managers/sharedLinksWebLinks.generated';
import { serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField } from '@/managers/sharedLinksWebLinks.generated';
import { deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField } from '@/managers/sharedLinksWebLinks.generated';
import { serializeUpdateSharedLinkOnWebLinkRequestBody } from '@/managers/sharedLinksWebLinks.generated';
import { deserializeUpdateSharedLinkOnWebLinkRequestBody } from '@/managers/sharedLinksWebLinks.generated';
import { serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField } from '@/managers/sharedLinksWebLinks.generated';
import { deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField } from '@/managers/sharedLinksWebLinks.generated';
import { serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField } from '@/managers/sharedLinksWebLinks.generated';
import { deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField } from '@/managers/sharedLinksWebLinks.generated';
import { serializeRemoveSharedLinkFromWebLinkRequestBody } from '@/managers/sharedLinksWebLinks.generated';
import { deserializeRemoveSharedLinkFromWebLinkRequestBody } from '@/managers/sharedLinksWebLinks.generated';
import { FindWebLinkForSharedLinkHeadersInput } from '@/managers/sharedLinksWebLinks.generated';
import { BoxClient } from '@/client.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { WebLink } from '@/schemas/webLink.generated';
import { CreateWebLinkRequestBody } from '@/managers/webLinks.generated';
import { CreateWebLinkRequestBodyParentField } from '@/managers/webLinks.generated';
import { AddShareLinkToWebLinkRequestBody } from '@/managers/sharedLinksWebLinks.generated';
import { AddShareLinkToWebLinkRequestBodySharedLinkField } from '@/managers/sharedLinksWebLinks.generated';
import { AddShareLinkToWebLinkRequestBodySharedLinkAccessField } from '@/managers/sharedLinksWebLinks.generated';
import { AddShareLinkToWebLinkQueryParams } from '@/managers/sharedLinksWebLinks.generated';
import { GetSharedLinkForWebLinkQueryParams } from '@/managers/sharedLinksWebLinks.generated';
import { FindWebLinkForSharedLinkQueryParams } from '@/managers/sharedLinksWebLinks.generated';
import { FindWebLinkForSharedLinkHeaders } from '@/managers/sharedLinksWebLinks.generated';
import { UpdateSharedLinkOnWebLinkRequestBody } from '@/managers/sharedLinksWebLinks.generated';
import { UpdateSharedLinkOnWebLinkRequestBodySharedLinkField } from '@/managers/sharedLinksWebLinks.generated';
import { UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField } from '@/managers/sharedLinksWebLinks.generated';
import { UpdateSharedLinkOnWebLinkQueryParams } from '@/managers/sharedLinksWebLinks.generated';
import { RemoveSharedLinkFromWebLinkRequestBody } from '@/managers/sharedLinksWebLinks.generated';
import { RemoveSharedLinkFromWebLinkQueryParams } from '@/managers/sharedLinksWebLinks.generated';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { createNull } from '@/internal/utils';
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
test('testSharedLinksWebLinks', async function testSharedLinksWebLinks(): Promise<any> {
  const parent: FolderFull = await client.folders.getFolderById('0');
  const webLink: WebLink = await client.webLinks.createWebLink({
    url: 'https://www.box.com',
    parent: { id: parent.id } satisfies CreateWebLinkRequestBodyParentField,
    name: getUuid(),
    description: 'Weblink description',
  } satisfies CreateWebLinkRequestBody);
  const webLinkId: string = webLink.id;
  await client.sharedLinksWebLinks.addShareLinkToWebLink(
    webLinkId,
    {
      sharedLink: {
        access: 'open' as AddShareLinkToWebLinkRequestBodySharedLinkAccessField,
        password: 'Secret123@',
      } satisfies AddShareLinkToWebLinkRequestBodySharedLinkField,
    } satisfies AddShareLinkToWebLinkRequestBody,
    { fields: 'shared_link' } satisfies AddShareLinkToWebLinkQueryParams,
  );
  const webLinkFromApi: WebLink =
    await client.sharedLinksWebLinks.getSharedLinkForWebLink(webLinkId, {
      fields: 'shared_link',
    } satisfies GetSharedLinkForWebLinkQueryParams);
  if (!((toString(webLinkFromApi.sharedLink!.access) as string) == 'open')) {
    throw new Error('Assertion failed');
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = getDefaultClientWithUserSubject(userId);
  const webLinkFromSharedLinkPassword: WebLink =
    await userClient.sharedLinksWebLinks.findWebLinkForSharedLink(
      {} satisfies FindWebLinkForSharedLinkQueryParams,
      {
        boxapi: ''.concat(
          'shared_link=',
          webLinkFromApi.sharedLink!.url,
          '&shared_link_password=Secret123@',
        ) as string,
      } satisfies FindWebLinkForSharedLinkHeadersInput,
    );
  if (!(webLinkId == webLinkFromSharedLinkPassword.id)) {
    throw new Error('Assertion failed');
  }
  await expect(async () => {
    await userClient.sharedLinksWebLinks.findWebLinkForSharedLink(
      {} satisfies FindWebLinkForSharedLinkQueryParams,
      {
        boxapi: ''.concat(
          'shared_link=',
          webLinkFromApi.sharedLink!.url,
          '&shared_link_password=incorrectPassword',
        ) as string,
      } satisfies FindWebLinkForSharedLinkHeadersInput,
    );
  }).rejects.toThrow();
  const updatedWebLink: WebLink =
    await client.sharedLinksWebLinks.updateSharedLinkOnWebLink(
      webLinkId,
      {
        sharedLink: {
          access:
            'collaborators' as UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField,
        } satisfies UpdateSharedLinkOnWebLinkRequestBodySharedLinkField,
      } satisfies UpdateSharedLinkOnWebLinkRequestBody,
      { fields: 'shared_link' } satisfies UpdateSharedLinkOnWebLinkQueryParams,
    );
  if (
    !(
      (toString(updatedWebLink.sharedLink!.access) as string) == 'collaborators'
    )
  ) {
    throw new Error('Assertion failed');
  }
  await client.sharedLinksWebLinks.removeSharedLinkFromWebLink(
    webLinkId,
    {
      sharedLink: createNull(),
    } satisfies RemoveSharedLinkFromWebLinkRequestBody,
    { fields: 'shared_link' } satisfies RemoveSharedLinkFromWebLinkQueryParams,
  );
  const webLinkFromApiAfterRemove: WebLink =
    await client.sharedLinksWebLinks.getSharedLinkForWebLink(webLinkId, {
      fields: 'shared_link',
    } satisfies GetSharedLinkForWebLinkQueryParams);
  if (!(webLinkFromApiAfterRemove.sharedLink == void 0)) {
    throw new Error('Assertion failed');
  }
  await client.webLinks.deleteWebLinkById(webLinkId);
});
export {};
