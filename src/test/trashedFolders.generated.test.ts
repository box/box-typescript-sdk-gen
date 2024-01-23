import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { serializeTrashFolder } from '../schemas.generated.js';
import { deserializeTrashFolder } from '../schemas.generated.js';
import { serializeTrashFolderRestored } from '../schemas.generated.js';
import { deserializeTrashFolderRestored } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBody } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { TrashFolder } from '../schemas.generated.js';
import { TrashFolderRestored } from '../schemas.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testTrashedFolders', async function testTrashedFolders(): Promise<any> {
  const folder: FolderFull = await client.folders.createFolder({
    name: getUuid(),
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
  await client.folders.deleteFolderById(folder.id);
  const fromTrash: TrashFolder =
    await client.trashedFolders.getTrashedFolderById(folder.id);
  if (!(fromTrash.id == folder.id)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(fromTrash.name == folder.name)) {
    throw new Error(String('Assertion failed'));
  }
  await expect(async () => {
    await client.folders.getFolderById(folder.id);
  }).rejects.toThrow();
  const restoredFolder: TrashFolderRestored =
    await client.trashedFolders.restoreFolderFromTrash(folder.id);
  const fromApi: FolderFull = await client.folders.getFolderById(folder.id);
  if (!(restoredFolder.id == fromApi.id)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(restoredFolder.name == fromApi.name)) {
    throw new Error(String('Assertion failed'));
  }
  await client.folders.deleteFolderById(folder.id);
  await client.trashedFolders.deleteTrashedFolderById(folder.id);
  await expect(async () => {
    await client.trashedFolders.getTrashedFolderById(folder.id);
  }).rejects.toThrow();
});
export {};
