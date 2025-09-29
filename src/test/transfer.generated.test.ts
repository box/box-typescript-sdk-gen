import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeCreateUserRequestBody } from '@/managers/users.generated';
import { deserializeCreateUserRequestBody } from '@/managers/users.generated';
import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeTransferOwnedFolderRequestBody } from '@/managers/transfer.generated';
import { deserializeTransferOwnedFolderRequestBody } from '@/managers/transfer.generated';
import { serializeTransferOwnedFolderRequestBodyOwnedByField } from '@/managers/transfer.generated';
import { deserializeTransferOwnedFolderRequestBodyOwnedByField } from '@/managers/transfer.generated';
import { TransferOwnedFolderOptionalsInput } from '@/managers/transfer.generated';
import { DeleteFolderByIdOptionalsInput } from '@/managers/folders.generated';
import { DeleteUserByIdOptionalsInput } from '@/managers/users.generated';
import { TransferOwnedFolderOptionals } from '@/managers/transfer.generated';
import { DeleteFolderByIdOptionals } from '@/managers/folders.generated';
import { DeleteUserByIdOptionals } from '@/managers/users.generated';
import { BoxClient } from '@/client.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { CreateUserRequestBody } from '@/managers/users.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { TransferOwnedFolderRequestBody } from '@/managers/transfer.generated';
import { TransferOwnedFolderRequestBodyOwnedByField } from '@/managers/transfer.generated';
import { TransferOwnedFolderQueryParams } from '@/managers/transfer.generated';
import { DeleteFolderByIdQueryParams } from '@/managers/folders.generated';
import { DeleteUserByIdQueryParams } from '@/managers/users.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testTransferUserContent', async function testTransferUserContent(): Promise<any> {
  const sourceUserName: string = getUuid();
  const sourceUser: UserFull = await client.users.createUser({
    name: sourceUserName,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const targetUser: UserFull = await client.users.getUserMe();
  const transferredFolder: FolderFull =
    await client.transfer.transferOwnedFolder(
      sourceUser.id,
      {
        ownedBy: {
          id: targetUser.id,
        } satisfies TransferOwnedFolderRequestBodyOwnedByField,
      } satisfies TransferOwnedFolderRequestBody,
      {
        queryParams: { notify: false } satisfies TransferOwnedFolderQueryParams,
      } satisfies TransferOwnedFolderOptionalsInput,
    );
  if (!(transferredFolder.ownedBy!.id == targetUser.id)) {
    throw new Error('Assertion failed');
  }
  await client.folders.deleteFolderById(transferredFolder.id, {
    queryParams: { recursive: true } satisfies DeleteFolderByIdQueryParams,
  } satisfies DeleteFolderByIdOptionalsInput);
  await client.users.deleteUserById(sourceUser.id, {
    queryParams: {
      notify: false,
      force: true,
    } satisfies DeleteUserByIdQueryParams,
  } satisfies DeleteUserByIdOptionalsInput);
});
export {};
