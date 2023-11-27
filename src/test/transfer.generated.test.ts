import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBodyArg } from '../managers/users.generated.js';
import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeTransferOwnedFolderRequestBodyArg } from '../managers/transfer.generated.js';
import { deserializeTransferOwnedFolderRequestBodyArg } from '../managers/transfer.generated.js';
import { serializeTransferOwnedFolderRequestBodyArgOwnedByField } from '../managers/transfer.generated.js';
import { deserializeTransferOwnedFolderRequestBodyArgOwnedByField } from '../managers/transfer.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBodyArg } from '../managers/users.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { TransferOwnedFolderRequestBodyArg } from '../managers/transfer.generated.js';
import { TransferOwnedFolderRequestBodyArgOwnedByField } from '../managers/transfer.generated.js';
import { TransferOwnedFolderQueryParamsArg } from '../managers/transfer.generated.js';
import { DeleteFolderByIdQueryParamsArg } from '../managers/folders.generated.js';
import { DeleteUserByIdQueryParamsArg } from '../managers/users.generated.js';
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
test('testTransferUserContent', async function testTransferUserContent(): Promise<any> {
  const newUserName: string = getUuid();
  const newUser: UserFull = await client.users.createUser({
    name: newUserName,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBodyArg);
  const currentUser: UserFull = await client.users.getUserMe();
  const transferedFolder: FolderFull =
    await client.transfer.transferOwnedFolder(
      newUser.id,
      {
        ownedBy: {
          id: currentUser.id,
        } satisfies TransferOwnedFolderRequestBodyArgOwnedByField,
      } satisfies TransferOwnedFolderRequestBodyArg,
      { notify: false } satisfies TransferOwnedFolderQueryParamsArg
    );
  if (!(transferedFolder.ownedBy!.id == currentUser.id)) {
    throw 'Assertion failed';
  }
  await client.folders.deleteFolderById(transferedFolder.id, {
    recursive: true,
  } satisfies DeleteFolderByIdQueryParamsArg);
  await client.users.deleteUserById(newUser.id, {
    notify: false,
    force: true,
  } satisfies DeleteUserByIdQueryParamsArg);
});
export {};