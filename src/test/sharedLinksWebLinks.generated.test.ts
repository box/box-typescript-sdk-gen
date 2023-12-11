import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeWebLink } from '../schemas.generated.js';
import { deserializeWebLink } from '../schemas.generated.js';
import { serializeCreateWebLinkRequestBodyArg } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBodyArg } from '../managers/webLinks.generated.js';
import { serializeCreateWebLinkRequestBodyArgParentField } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBodyArgParentField } from '../managers/webLinks.generated.js';
import { serializeUpdateWebLinkAddSharedLinkRequestBodyArg } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkAddSharedLinkRequestBodyArg } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateWebLinkUpdateSharedLinkRequestBodyArg } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArg } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { serializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { deserializeUpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { WebLink } from '../schemas.generated.js';
import { CreateWebLinkRequestBodyArg } from '../managers/webLinks.generated.js';
import { CreateWebLinkRequestBodyArgParentField } from '../managers/webLinks.generated.js';
import { UpdateWebLinkAddSharedLinkRequestBodyArg } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkAddSharedLinkQueryParamsArg } from '../managers/sharedLinksWebLinks.generated.js';
import { GetWebLinkGetSharedLinkQueryParamsArg } from '../managers/sharedLinksWebLinks.generated.js';
import { GetSharedItemWebLinksQueryParamsArg } from '../managers/sharedLinksWebLinks.generated.js';
import { GetSharedItemWebLinksHeadersArg } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkUpdateSharedLinkRequestBodyArg } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksWebLinks.generated.js';
import { UpdateWebLinkUpdateSharedLinkQueryParamsArg } from '../managers/sharedLinksWebLinks.generated.js';
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
    parent: { id: parent.id } satisfies CreateWebLinkRequestBodyArgParentField,
    name: getUuid(),
    description: 'Weblink description',
  } satisfies CreateWebLinkRequestBodyArg);
  const webLinkId: string = webLink.id;
  await client.sharedLinksWebLinks.updateWebLinkAddSharedLink(
    webLinkId,
    {
      sharedLink: {
        access:
          'open' as UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkFieldAccessField,
        password: 'Secret123@',
      } satisfies UpdateWebLinkAddSharedLinkRequestBodyArgSharedLinkField,
    } satisfies UpdateWebLinkAddSharedLinkRequestBodyArg,
    { fields: 'shared_link' } satisfies UpdateWebLinkAddSharedLinkQueryParamsArg
  );
  const webLinkFromApi: WebLink =
    await client.sharedLinksWebLinks.getWebLinkGetSharedLink(webLinkId, {
      fields: 'shared_link',
    } satisfies GetWebLinkGetSharedLinkQueryParamsArg);
  if (!((toString(webLinkFromApi.sharedLink!.access) as string) == 'open')) {
    throw 'Assertion failed';
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = await getDefaultClientAsUser(userId);
  const webLinkFromSharedLinkPassword: WebLink =
    await userClient.sharedLinksWebLinks.getSharedItemWebLinks(
      {} satisfies GetSharedItemWebLinksQueryParamsArg,
      new GetSharedItemWebLinksHeadersArg({
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
      {} satisfies GetSharedItemWebLinksQueryParamsArg,
      new GetSharedItemWebLinksHeadersArg({
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
            'collaborators' as UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField,
        } satisfies UpdateWebLinkUpdateSharedLinkRequestBodyArgSharedLinkField,
      } satisfies UpdateWebLinkUpdateSharedLinkRequestBodyArg,
      {
        fields: 'shared_link',
      } satisfies UpdateWebLinkUpdateSharedLinkQueryParamsArg
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
