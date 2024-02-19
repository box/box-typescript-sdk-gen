import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeWebLink } from '../schemas.generated.js';
import { deserializeWebLink } from '../schemas.generated.js';
import { serializeCreateWebLinkRequestBody } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBody } from '../managers/webLinks.generated.js';
import { serializeCreateWebLinkRequestBodyParentField } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBodyParentField } from '../managers/webLinks.generated.js';
import { serializeAddShareLinkToWebLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeAddShareLinkToWebLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeAddShareLinkToWebLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeAddShareLinkToWebLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateSharedLinkOnWebLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateSharedLinkOnWebLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { WebLink } from '../schemas.generated.js';
import { CreateWebLinkRequestBody } from '../managers/webLinks.generated.js';
import { CreateWebLinkRequestBodyParentField } from '../managers/webLinks.generated.js';
import { AddShareLinkToWebLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { AddShareLinkToWebLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { AddShareLinkToWebLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { AddShareLinkToWebLinkQueryParams } from '../managers/sharedLinksWebLinks.generated.js';
import { GetSharedLinkForWebLinkQueryParams } from '../managers/sharedLinksWebLinks.generated.js';
import { FindWebLinkForSharedLinkQueryParams } from '../managers/sharedLinksWebLinks.generated.js';
import { FindWebLinkForSharedLinkHeaders } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateSharedLinkOnWebLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateSharedLinkOnWebLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateSharedLinkOnWebLinkQueryParams } from '../managers/sharedLinksWebLinks.generated.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientAsUser } from './commons.generated.js';
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
    { fields: 'shared_link' } satisfies AddShareLinkToWebLinkQueryParams
  );
  const webLinkFromApi: WebLink =
    await client.sharedLinksWebLinks.getSharedLinkForWebLink(webLinkId, {
      fields: 'shared_link',
    } satisfies GetSharedLinkForWebLinkQueryParams);
  if (!((toString(webLinkFromApi.sharedLink!.access) as string) == 'open')) {
    throw new Error('Assertion failed');
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = getDefaultClientAsUser(userId);
  const webLinkFromSharedLinkPassword: WebLink =
    await userClient.sharedLinksWebLinks.findWebLinkForSharedLink(
      {} satisfies FindWebLinkForSharedLinkQueryParams,
      new FindWebLinkForSharedLinkHeaders({
        boxapi: ''.concat(
          'shared_link=',
          webLinkFromApi.sharedLink!.url,
          '&shared_link_password=Secret123@'
        ) as string,
      })
    );
  if (!(webLinkId == webLinkFromSharedLinkPassword.id)) {
    throw new Error('Assertion failed');
  }
  await expect(async () => {
    await userClient.sharedLinksWebLinks.findWebLinkForSharedLink(
      {} satisfies FindWebLinkForSharedLinkQueryParams,
      new FindWebLinkForSharedLinkHeaders({
        boxapi: ''.concat(
          'shared_link=',
          webLinkFromApi.sharedLink!.url,
          '&shared_link_password=incorrectPassword'
        ) as string,
      })
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
      { fields: 'shared_link' } satisfies UpdateSharedLinkOnWebLinkQueryParams
    );
  if (
    !(
      (toString(updatedWebLink.sharedLink!.access) as string) == 'collaborators'
    )
  ) {
    throw new Error('Assertion failed');
  }
  await client.webLinks.deleteWebLinkById(webLinkId);
});
export {};
