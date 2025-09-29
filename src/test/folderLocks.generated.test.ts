import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeFolderLocks } from '@/schemas/folderLocks.generated';
import { deserializeFolderLocks } from '@/schemas/folderLocks.generated';
import { serializeFolderLock } from '@/schemas/folderLock.generated';
import { deserializeFolderLock } from '@/schemas/folderLock.generated';
import { serializeCreateFolderLockRequestBody } from '@/managers/folderLocks.generated';
import { deserializeCreateFolderLockRequestBody } from '@/managers/folderLocks.generated';
import { serializeCreateFolderLockRequestBodyFolderField } from '@/managers/folderLocks.generated';
import { deserializeCreateFolderLockRequestBodyFolderField } from '@/managers/folderLocks.generated';
import { serializeCreateFolderLockRequestBodyLockedOperationsField } from '@/managers/folderLocks.generated';
import { deserializeCreateFolderLockRequestBodyLockedOperationsField } from '@/managers/folderLocks.generated';
import { BoxClient } from '@/client.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { FolderLocks } from '@/schemas/folderLocks.generated';
import { GetFolderLocksQueryParams } from '@/managers/folderLocks.generated';
import { FolderLock } from '@/schemas/folderLock.generated';
import { CreateFolderLockRequestBody } from '@/managers/folderLocks.generated';
import { CreateFolderLockRequestBodyFolderField } from '@/managers/folderLocks.generated';
import { CreateFolderLockRequestBodyLockedOperationsField } from '@/managers/folderLocks.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { createNewFolder } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testFolderLocks', async function testFolderLocks(): Promise<any> {
  const folder: FolderFull = await createNewFolder();
  const folderLocks: FolderLocks = await client.folderLocks.getFolderLocks({
    folderId: folder.id,
  } satisfies GetFolderLocksQueryParams);
  if (!(folderLocks.entries!.length == 0)) {
    throw new Error('Assertion failed');
  }
  const folderLock: FolderLock = await client.folderLocks.createFolderLock({
    folder: {
      id: folder.id,
      type: 'folder',
    } satisfies CreateFolderLockRequestBodyFolderField,
    lockedOperations: {
      move: true,
      delete: true,
    } satisfies CreateFolderLockRequestBodyLockedOperationsField,
  } satisfies CreateFolderLockRequestBody);
  if (!(folderLock.folder!.id == folder.id)) {
    throw new Error('Assertion failed');
  }
  if (!(folderLock.lockedOperations!.move == true)) {
    throw new Error('Assertion failed');
  }
  if (!(folderLock.lockedOperations!.delete == true)) {
    throw new Error('Assertion failed');
  }
  await client.folderLocks.deleteFolderLockById(folderLock.id!);
  await expect(async () => {
    await client.folderLocks.deleteFolderLockById(folderLock.id!);
  }).rejects.toThrow();
  const newFolderLocks: FolderLocks = await client.folderLocks.getFolderLocks({
    folderId: folder.id,
  } satisfies GetFolderLocksQueryParams);
  if (!(newFolderLocks.entries!.length == 0)) {
    throw new Error('Assertion failed');
  }
  await client.folders.deleteFolderById(folder.id);
});
export {};
