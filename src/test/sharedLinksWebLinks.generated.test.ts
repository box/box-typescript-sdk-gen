import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeWebLink } from '../schemas.generated.js';
import { deserializeWebLink } from '../schemas.generated.js';
import { serializeCreateWebLinkRequestBody } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBody } from '../managers/webLinks.generated.js';
import { serializeCreateWebLinkRequestBodyParentField } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBodyParentField } from '../managers/webLinks.generated.js';
import { serializeUpdateWebLinkAddSharedLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkAddSharedLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateWebLinkUpdateSharedLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkUpdateSharedLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { WebLink } from '../schemas.generated.js';
import { CreateWebLinkRequestBody } from '../managers/webLinks.generated.js';
import { CreateWebLinkRequestBodyParentField } from '../managers/webLinks.generated.js';
import { UpdateWebLinkAddSharedLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkAddSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkAddSharedLinkQueryParams } from '../managers/sharedLinksWebLinks.generated.js';
import { GetWebLinkGetSharedLinkQueryParams } from '../managers/sharedLinksWebLinks.generated.js';
import { GetSharedItemWebLinksQueryParams } from '../managers/sharedLinksWebLinks.generated.js';
import { GetSharedItemWebLinksHeaders } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkUpdateSharedLinkRequestBody } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkUpdateSharedLinkQueryParams } from '../managers/sharedLinksWebLinks.generated.js';
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
  await client.sharedLinksWebLinks.updateWebLinkAddSharedLink(
    webLinkId,
    {
      sharedLink: {
        access:
          'open' as UpdateWebLinkAddSharedLinkRequestBodySharedLinkAccessField,
        password: 'Secret123@',
      } satisfies UpdateWebLinkAddSharedLinkRequestBodySharedLinkField,
    } satisfies UpdateWebLinkAddSharedLinkRequestBody,
    { fields: 'shared_link' } satisfies UpdateWebLinkAddSharedLinkQueryParams
  );
  const webLinkFromApi: WebLink =
    await client.sharedLinksWebLinks.getWebLinkGetSharedLink(webLinkId, {
      fields: 'shared_link',
    } satisfies GetWebLinkGetSharedLinkQueryParams);
  if (!((toString(webLinkFromApi.sharedLink!.access) as string) == 'open')) {
    throw 'Assertion failed';
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = await getDefaultClientAsUser(userId);
  const webLinkFromSharedLinkPassword: WebLink =
    await userClient.sharedLinksWebLinks.getSharedItemWebLinks(
      {} satisfies GetSharedItemWebLinksQueryParams,
      new GetSharedItemWebLinksHeaders({
        boxapi: ''.concat(
          'shared_link=',
          webLinkFromApi.sharedLink!.url,
          '&shared_link_password=Secret123@'
        ) as string,
      })
    );
  if (!(webLinkId == webLinkFromSharedLinkPassword.id)) {
    throw 'Assertion failed';
  }
  await expect(async () => {
    await userClient.sharedLinksWebLinks.getSharedItemWebLinks(
      {} satisfies GetSharedItemWebLinksQueryParams,
      new GetSharedItemWebLinksHeaders({
        boxapi: ''.concat(
          'shared_link=',
          webLinkFromApi.sharedLink!.url,
          '&shared_link_password=incorrectPassword'
        ) as string,
      })
    );
  }).rejects.toThrow();
  const updatedWebLink: WebLink =
    await client.sharedLinksWebLinks.updateWebLinkUpdateSharedLink(
      webLinkId,
      {
        sharedLink: {
          access:
            'collaborators' as UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkAccessField,
        } satisfies UpdateWebLinkUpdateSharedLinkRequestBodySharedLinkField,
      } satisfies UpdateWebLinkUpdateSharedLinkRequestBody,
      {
        fields: 'shared_link',
      } satisfies UpdateWebLinkUpdateSharedLinkQueryParams
    );
  if (
    !(
      (toString(updatedWebLink.sharedLink!.access) as string) == 'collaborators'
    )
  ) {
    throw 'Assertion failed';
  }
  await client.webLinks.deleteWebLinkById(webLinkId);
});
export {};
