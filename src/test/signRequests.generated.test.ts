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
import { serializeSignRequestPrefillTag } from '../schemas.generated.js';
import { deserializeSignRequestPrefillTag } from '../schemas.generated.js';
import { serializeFileBase } from '../schemas.generated.js';
import { deserializeFileBase } from '../schemas.generated.js';
import { serializeSignRequests } from '../schemas.generated.js';
import { deserializeSignRequests } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { SignRequest } from '../schemas.generated.js';
import { SignRequestCreateRequest } from '../schemas.generated.js';
import { SignRequestCreateSigner } from '../schemas.generated.js';
import { FolderMini } from '../schemas.generated.js';
import { SignRequestPrefillTag } from '../schemas.generated.js';
import { FileBase } from '../schemas.generated.js';
import { SignRequests } from '../schemas.generated.js';
import { DeleteFolderByIdQueryParams } from '../managers/folders.generated.js';
import { getUuid } from '../internal/utils.js';
import { dateFromString } from '../internal/utils.js';
import { dateToString } from '../internal/utils.js';
import { uploadNewFile } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { Date } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export const client: BoxClient = getDefaultClient();
test('testCreateGetCancelAndListSignRequest', async function testCreateGetCancelAndListSignRequest(): Promise<any> {
  const signerEmail: string = ''.concat(getUuid(), '@box.com') as string;
  const fileToSign: FileFull = await uploadNewFile();
  const destinationFolder: FolderFull = await createNewFolder();
  const createdSignRequest: SignRequest =
    await client.signRequests.createSignRequest({
      signers: [{ email: signerEmail } satisfies SignRequestCreateSigner],
      parentFolder: new FolderMini({ id: destinationFolder.id }),
      prefillTags: [
        {
          dateValue: dateFromString('2035-01-01'),
          documentTagId: '0',
        } satisfies SignRequestPrefillTag,
      ],
      sourceFiles: [new FileBase({ id: fileToSign.id })],
    } satisfies SignRequestCreateRequest);
  if (!(createdSignRequest.signFiles!.files![0].name == fileToSign.name)) {
    throw new Error('Assertion failed');
  }
  if (!(createdSignRequest.signers![1].email == signerEmail)) {
    throw new Error('Assertion failed');
  }
  if (!(createdSignRequest.parentFolder!.id == destinationFolder.id)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      dateToString(createdSignRequest.prefillTags![0].dateValue!) ==
      '2035-01-01'
    )
  ) {
    throw new Error('Assertion failed');
  }
  const newSignRequest: SignRequest =
    await client.signRequests.getSignRequestById(createdSignRequest.id!);
  if (!(newSignRequest.signFiles!.files![0].name == fileToSign.name)) {
    throw new Error('Assertion failed');
  }
  if (!(newSignRequest.signers![1].email == signerEmail)) {
    throw new Error('Assertion failed');
  }
  if (!(newSignRequest.parentFolder!.id == destinationFolder.id)) {
    throw new Error('Assertion failed');
  }
  const cancelledSignRequest: SignRequest =
    await client.signRequests.cancelSignRequest(createdSignRequest.id!);
  if (!((toString(cancelledSignRequest.status) as string) == 'cancelled')) {
    throw new Error('Assertion failed');
  }
  const signRequests: SignRequests =
    await client.signRequests.getSignRequests();
  if (
    !((toString(signRequests.entries![0].type!) as string) == 'sign-request')
  ) {
    throw new Error('Assertion failed');
  }
  await client.folders.deleteFolderById(destinationFolder.id, {
    recursive: true,
  } satisfies DeleteFolderByIdQueryParams);
  await client.files.deleteFileById(fileToSign.id);
});
test('testCreateSignRequestWithSignerGroupId', async function testCreateSignRequestWithSignerGroupId(): Promise<any> {
  const signer1Email: string = ''.concat(getUuid(), '@box.com') as string;
  const signer2Email: string = ''.concat(getUuid(), '@box.com') as string;
  const fileToSign: FileFull = await uploadNewFile();
  const destinationFolder: FolderFull = await createNewFolder();
  const createdSignRequest: SignRequest =
    await client.signRequests.createSignRequest({
      signers: [
        {
          email: signer1Email,
          signerGroupId: 'user',
        } satisfies SignRequestCreateSigner,
        {
          email: signer2Email,
          signerGroupId: 'user',
        } satisfies SignRequestCreateSigner,
      ],
      parentFolder: new FolderMini({ id: destinationFolder.id }),
      sourceFiles: [new FileBase({ id: fileToSign.id })],
    } satisfies SignRequestCreateRequest);
  if (!(createdSignRequest.signers!.length == 3)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      createdSignRequest.signers![1].signerGroupId ==
      createdSignRequest.signers![2].signerGroupId
    )
  ) {
    throw new Error('Assertion failed');
  }
  await client.folders.deleteFolderById(destinationFolder.id, {
    recursive: true,
  } satisfies DeleteFolderByIdQueryParams);
  await client.files.deleteFileById(fileToSign.id);
});
export {};
