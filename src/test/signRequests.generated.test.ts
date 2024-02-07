import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeSignRequest } from '../schemas.generated.js';
import { deserializeSignRequest } from '../schemas.generated.js';
import { serializeSignRequestCreateRequest } from '../schemas.generated.js';
import { deserializeSignRequestCreateRequest } from '../schemas.generated.js';
import { serializeSignRequestCreateSigner } from '../schemas.generated.js';
import { deserializeSignRequestCreateSigner } from '../schemas.generated.js';
import { serializeFolderMini } from '../schemas.generated.js';
import { deserializeFolderMini } from '../schemas.generated.js';
import { serializeFolderBaseTypeField } from '../schemas.generated.js';
import { deserializeFolderBaseTypeField } from '../schemas.generated.js';
import { serializeFileBase } from '../schemas.generated.js';
import { deserializeFileBase } from '../schemas.generated.js';
import { serializeFileBaseTypeField } from '../schemas.generated.js';
import { deserializeFileBaseTypeField } from '../schemas.generated.js';
import { serializeSignRequests } from '../schemas.generated.js';
import { deserializeSignRequests } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { SignRequest } from '../schemas.generated.js';
import { SignRequestCreateRequest } from '../schemas.generated.js';
import { SignRequestCreateSigner } from '../schemas.generated.js';
import { FolderMini } from '../schemas.generated.js';
import { FolderBaseTypeField } from '../schemas.generated.js';
import { FileBase } from '../schemas.generated.js';
import { FileBaseTypeField } from '../schemas.generated.js';
import { SignRequests } from '../schemas.generated.js';
import { DeleteFolderByIdQueryParams } from '../managers/folders.generated.js';
import { getUuid } from '../utils.js';
import { uploadNewFile } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
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
test('testCreateGetCancelAndListSignRequest', async function testCreateGetCancelAndListSignRequest(): Promise<any> {
  const signerEmail: string = ''.concat(getUuid(), '@box.com') as string;
  const fileToSign: FileFull = await uploadNewFile();
  const destinationFolder: FolderFull = await createNewFolder();
  const createdSignRequest: SignRequest =
    await client.signRequests.createSignRequest({
      signers: [{ email: signerEmail } satisfies SignRequestCreateSigner],
      parentFolder: {
        id: destinationFolder.id,
        type: 'folder' as FolderBaseTypeField,
      } satisfies FolderMini,
      sourceFiles: [
        {
          id: fileToSign.id,
          type: 'file' as FileBaseTypeField,
        } satisfies FileBase,
      ],
    } satisfies SignRequestCreateRequest);
  if (!(createdSignRequest.signFiles!.files![0].name == fileToSign.name)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(createdSignRequest.signers![1].email == signerEmail)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(createdSignRequest.parentFolder.id == destinationFolder.id)) {
    throw new Error(String('Assertion failed'));
  }
  const newSignRequest: SignRequest =
    await client.signRequests.getSignRequestById(createdSignRequest.id!);
  if (!(newSignRequest.signFiles!.files![0].name == fileToSign.name)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(newSignRequest.signers![1].email == signerEmail)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(newSignRequest.parentFolder.id == destinationFolder.id)) {
    throw new Error(String('Assertion failed'));
  }
  const cancelledSignRequest: SignRequest =
    await client.signRequests.cancelSignRequest(createdSignRequest.id!);
  if (!((toString(cancelledSignRequest.status) as string) == 'cancelled')) {
    throw new Error(String('Assertion failed'));
  }
  const signRequests: SignRequests =
    await client.signRequests.getSignRequests();
  if (
    !((toString(signRequests.entries![0].type!) as string) == 'sign-request')
  ) {
    throw new Error(String('Assertion failed'));
  }
  await client.folders.deleteFolderById(destinationFolder.id, {
    recursive: true,
  } satisfies DeleteFolderByIdQueryParams);
  await client.files.deleteFileById(fileToSign.id);
});
export {};
