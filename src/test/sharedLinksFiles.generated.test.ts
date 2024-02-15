import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeAddShareLinkToFileRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { deserializeAddShareLinkToFileRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { serializeAddShareLinkToFileRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeAddShareLinkToFileRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { serializeAddShareLinkToFileRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeAddShareLinkToFileRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeUpdateSharedLinkOnFileRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateSharedLinkOnFileRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { serializeUpdateSharedLinkOnFileRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { BoxClient } from '../client.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { AddShareLinkToFileRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { AddShareLinkToFileRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { AddShareLinkToFileRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { AddShareLinkToFileQueryParams } from '../managers/sharedLinksFiles.generated.js';
import { FileFull } from '../schemas.generated.js';
import { GetSharedLinkForFileQueryParams } from '../managers/sharedLinksFiles.generated.js';
import { FindFileForSharedLinkQueryParams } from '../managers/sharedLinksFiles.generated.js';
import { FindFileForSharedLinkHeaders } from '../managers/sharedLinksFiles.generated.js';
import { UpdateSharedLinkOnFileRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { UpdateSharedLinkOnFileRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { UpdateSharedLinkOnFileRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { UpdateSharedLinkOnFileQueryParams } from '../managers/sharedLinksFiles.generated.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getDefaultClientAsUser } from './commons.generated.js';
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
test('testSharedLinksFiles', async function testSharedLinksFiles(): Promise<any> {
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: getUuid(),
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBody);
  const fileId: string = uploadedFiles.entries![0].id;
  await client.sharedLinksFiles.addShareLinkToFile(
    fileId,
    {
      sharedLink: {
        access: 'open' as AddShareLinkToFileRequestBodySharedLinkAccessField,
        password: 'Secret123@',
      } satisfies AddShareLinkToFileRequestBodySharedLinkField,
    } satisfies AddShareLinkToFileRequestBody,
    { fields: 'shared_link' } satisfies AddShareLinkToFileQueryParams
  );
  const fileFromApi: FileFull =
    await client.sharedLinksFiles.getSharedLinkForFile(fileId, {
      fields: 'shared_link',
    } satisfies GetSharedLinkForFileQueryParams);
  if (!((toString(fileFromApi.sharedLink!.access) as string) == 'open')) {
    throw new Error('Assertion failed');
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = await getDefaultClientAsUser(userId);
  const fileFromSharedLinkPassword: FileFull =
    await userClient.sharedLinksFiles.findFileForSharedLink(
      {} satisfies FindFileForSharedLinkQueryParams,
      new FindFileForSharedLinkHeaders({
        boxapi: ''.concat(
          'shared_link=',
          fileFromApi.sharedLink!.url,
          '&shared_link_password=Secret123@'
        ) as string,
      })
    );
  if (!(fileId == fileFromSharedLinkPassword.id)) {
    throw new Error('Assertion failed');
  }
  await expect(async () => {
    await userClient.sharedLinksFiles.findFileForSharedLink(
      {} satisfies FindFileForSharedLinkQueryParams,
      new FindFileForSharedLinkHeaders({
        boxapi: ''.concat(
          'shared_link=',
          fileFromApi.sharedLink!.url,
          '&shared_link_password=incorrectPassword'
        ) as string,
      })
    );
  }).rejects.toThrow();
  const updatedFile: FileFull =
    await client.sharedLinksFiles.updateSharedLinkOnFile(
      fileId,
      {
        sharedLink: {
          access:
            'collaborators' as UpdateSharedLinkOnFileRequestBodySharedLinkAccessField,
        } satisfies UpdateSharedLinkOnFileRequestBodySharedLinkField,
      } satisfies UpdateSharedLinkOnFileRequestBody,
      { fields: 'shared_link' } satisfies UpdateSharedLinkOnFileQueryParams
    );
  if (
    !((toString(updatedFile.sharedLink!.access) as string) == 'collaborators')
  ) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(fileId);
});
export {};
