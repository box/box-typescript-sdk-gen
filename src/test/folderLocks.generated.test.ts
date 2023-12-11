import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeFolderLocks } from '../schemas.generated.js';
import { deserializeFolderLocks } from '../schemas.generated.js';
import { serializeFolderLock } from '../schemas.generated.js';
import { deserializeFolderLock } from '../schemas.generated.js';
import { serializeCreateFolderLockRequestBodyArg } from '../managers/folderLocks.generated.js';
import { deserializeCreateFolderLockRequestBodyArg } from '../managers/folderLocks.generated.js';
import { serializeCreateFolderLockRequestBodyArgFolderField } from '../managers/folderLocks.generated.js';
import { deserializeCreateFolderLockRequestBodyArgFolderField } from '../managers/folderLocks.generated.js';
import { serializeCreateFolderLockRequestBodyArgLockedOperationsField } from '../managers/folderLocks.generated.js';
import { deserializeCreateFolderLockRequestBodyArgLockedOperationsField } from '../managers/folderLocks.generated.js';
import { BoxClient } from '../client.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { FolderLocks } from '../schemas.generated.js';
import { GetFolderLocksQueryParamsArg } from '../managers/folderLocks.generated.js';
import { FolderLock } from '../schemas.generated.js';
import { CreateFolderLockRequestBodyArg } from '../managers/folderLocks.generated.js';
import { CreateFolderLockRequestBodyArgFolderField } from '../managers/folderLocks.generated.js';
import { CreateFolderLockRequestBodyArgLockedOperationsField } from '../managers/folderLocks.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testFolderLocks', async function testFolderLocks(): Promise<any> {
  const folder: FolderFull = await createNewFolder();
  const folderLocks: FolderLocks = await client.folderLocks.getFolderLocks({
    folderId: folder.id,
  } satisfies GetFolderLocksQueryParamsArg);
  if (!(folderLocks.entries!.length == 0)) {
    throw 'Assertion failed';
  }
  const folderLock: FolderLock = await client.folderLocks.createFolderLock({
    folder: {
      id: folder.id,
      type: 'folder',
    } satisfies CreateFolderLockRequestBodyArgFolderField,
    lockedOperations: {
      move: true,
      delete: true,
    } satisfies CreateFolderLockRequestBodyArgLockedOperationsField,
  } satisfies CreateFolderLockRequestBodyArg);
  if (!(folderLock.folder!.id == folder.id)) {
    throw 'Assertion failed';
  }
  if (!(folderLock.lockedOperations!.move == true)) {
    throw 'Assertion failed';
  }
  if (!(folderLock.lockedOperations!.delete == true)) {
    throw 'Assertion failed';
  }
  await client.folderLocks.deleteFolderLockById(folderLock.id!);
  await expect(async () => {
    await client.folderLocks.deleteFolderLockById(folderLock.id!);
  }).rejects.toThrow();
  const newFolderLocks: FolderLocks = await client.folderLocks.getFolderLocks({
    folderId: folder.id,
  } satisfies GetFolderLocksQueryParamsArg);
  if (!(newFolderLocks.entries!.length == 0)) {
    throw 'Assertion failed';
  }
  await client.folders.deleteFolderById(folder.id);
});
export {};
