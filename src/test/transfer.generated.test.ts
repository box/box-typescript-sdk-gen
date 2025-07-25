import { serializeUserFull } from '../schemas/userFull.generated.js';
import { deserializeUserFull } from '../schemas/userFull.generated.js';
import { serializeCreateUserRequestBody } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBody } from '../managers/users.generated.js';
import { serializeFolderFull } from '../schemas/folderFull.generated.js';
import { deserializeFolderFull } from '../schemas/folderFull.generated.js';
import { serializeTransferOwnedFolderRequestBody } from '../managers/transfer.generated.js';
import { deserializeTransferOwnedFolderRequestBody } from '../managers/transfer.generated.js';
import { serializeTransferOwnedFolderRequestBodyOwnedByField } from '../managers/transfer.generated.js';
import { deserializeTransferOwnedFolderRequestBodyOwnedByField } from '../managers/transfer.generated.js';
import { TransferOwnedFolderOptionalsInput } from '../managers/transfer.generated.js';
import { DeleteFolderByIdOptionalsInput } from '../managers/folders.generated.js';
import { DeleteUserByIdOptionalsInput } from '../managers/users.generated.js';
import { TransferOwnedFolderOptionals } from '../managers/transfer.generated.js';
import { DeleteFolderByIdOptionals } from '../managers/folders.generated.js';
import { DeleteUserByIdOptionals } from '../managers/users.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas/userFull.generated.js';
import { CreateUserRequestBody } from '../managers/users.generated.js';
import { FolderFull } from '../schemas/folderFull.generated.js';
import { TransferOwnedFolderRequestBody } from '../managers/transfer.generated.js';
import { TransferOwnedFolderRequestBodyOwnedByField } from '../managers/transfer.generated.js';
import { TransferOwnedFolderQueryParams } from '../managers/transfer.generated.js';
import { DeleteFolderByIdQueryParams } from '../managers/folders.generated.js';
import { DeleteUserByIdQueryParams } from '../managers/users.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
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
