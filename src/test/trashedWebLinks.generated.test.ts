import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeWebLink } from '../schemas.generated.js';
import { deserializeWebLink } from '../schemas.generated.js';
import { serializeCreateWebLinkRequestBodyArg } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBodyArg } from '../managers/webLinks.generated.js';
import { serializeCreateWebLinkRequestBodyArgParentField } from '../managers/webLinks.generated.js';
import { deserializeCreateWebLinkRequestBodyArgParentField } from '../managers/webLinks.generated.js';
import { serializeTrashWebLink } from '../schemas.generated.js';
import { deserializeTrashWebLink } from '../schemas.generated.js';
import { serializeTrashWebLinkRestored } from '../schemas.generated.js';
import { deserializeTrashWebLinkRestored } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { WebLink } from '../schemas.generated.js';
import { CreateWebLinkRequestBodyArg } from '../managers/webLinks.generated.js';
import { CreateWebLinkRequestBodyArgParentField } from '../managers/webLinks.generated.js';
import { TrashWebLink } from '../schemas.generated.js';
import { TrashWebLinkRestored } from '../schemas.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
import { toString } from '../utils.js';
const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
  decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
);
const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
const client: BoxClient = new BoxClient({ auth: auth });
test('testTrashedWebLinks', async function testTrashedWebLinks(): Promise<any> {
  const url: string = 'https://www.box.com';
  const parent: FolderFull = await client.folders.getFolderById('0');
  const name: string = getUuid();
  const description: string = 'Weblink description';
  const weblink: WebLink = await client.webLinks.createWebLink({
    url: url,
    parent: { id: parent.id } satisfies CreateWebLinkRequestBodyArgParentField,
    name: name,
    description: description,
  } satisfies CreateWebLinkRequestBodyArg);
  await client.webLinks.deleteWebLinkById(weblink.id);
  const fromTrash: TrashWebLink = await client.trashedWebLinks.getWebLinkTrash(
    weblink.id
  );
  if (!(fromTrash.id == weblink.id)) {
    throw 'Assertion failed';
  }
  if (!(fromTrash.name == weblink.name)) {
    throw 'Assertion failed';
  }
  const fromApiAfterTrashed: WebLink = await client.webLinks.getWebLinkById(
    weblink.id
  );
  if (!((toString(fromApiAfterTrashed.itemStatus) as string) == 'trashed')) {
    throw 'Assertion failed';
  }
  const restoredWeblink: TrashWebLinkRestored =
    await client.trashedWebLinks.restoreWeblinkFromTrash(weblink.id);
  const fromApi: WebLink = await client.webLinks.getWebLinkById(weblink.id);
  if (!(restoredWeblink.id == fromApi.id)) {
    throw 'Assertion failed';
  }
  if (!(restoredWeblink.name == fromApi.name)) {
    throw 'Assertion failed';
  }
  await client.webLinks.deleteWebLinkById(weblink.id);
  await client.trashedWebLinks.deleteWebLinkTrash(weblink.id);
  expect(async () => {
    await client.trashedWebLinks.getWebLinkTrash(weblink.id);
  }).rejects.toThrow();
});
export {};
