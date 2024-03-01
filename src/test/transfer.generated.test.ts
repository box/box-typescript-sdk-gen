import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBody } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBody } from '../managers/users.generated.js';
import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeTransferOwnedFolderRequestBody } from '../managers/transfer.generated.js';
import { deserializeTransferOwnedFolderRequestBody } from '../managers/transfer.generated.js';
import { serializeTransferOwnedFolderRequestBodyOwnedByField } from '../managers/transfer.generated.js';
import { deserializeTransferOwnedFolderRequestBodyOwnedByField } from '../managers/transfer.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBody } from '../managers/users.generated.js';
import { FolderFull } from '../schemas.generated.js';
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
  const newUserName: string = getUuid();
  const newUser: UserFull = await client.users.createUser({
    name: newUserName,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const currentUser: UserFull = await client.users.getUserMe();
  const transferedFolder: FolderFull =
    await client.transfer.transferOwnedFolder(
      newUser.id,
      {
        ownedBy: {
          id: currentUser.id,
        } satisfies TransferOwnedFolderRequestBodyOwnedByField,
      } satisfies TransferOwnedFolderRequestBody,
      { notify: false } satisfies TransferOwnedFolderQueryParams
    );
  if (!(transferedFolder.ownedBy!.id == currentUser.id)) {
    throw new Error('Assertion failed');
  }
  await client.folders.deleteFolderById(transferedFolder.id, {
    recursive: true,
  } satisfies DeleteFolderByIdQueryParams);
  await client.users.deleteUserById(newUser.id, {
    notify: false,
    force: true,
  } satisfies DeleteUserByIdQueryParams);
});
export {};
