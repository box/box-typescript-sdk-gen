import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeAddShareLinkToFileRequestBody } from '@/managers/sharedLinksFiles.generated';
import { deserializeAddShareLinkToFileRequestBody } from '@/managers/sharedLinksFiles.generated';
import { serializeAddShareLinkToFileRequestBodySharedLinkField } from '@/managers/sharedLinksFiles.generated';
import { deserializeAddShareLinkToFileRequestBodySharedLinkField } from '@/managers/sharedLinksFiles.generated';
import { serializeAddShareLinkToFileRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFiles.generated';
import { deserializeAddShareLinkToFileRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFiles.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeUpdateSharedLinkOnFileRequestBody } from '@/managers/sharedLinksFiles.generated';
import { deserializeUpdateSharedLinkOnFileRequestBody } from '@/managers/sharedLinksFiles.generated';
import { serializeUpdateSharedLinkOnFileRequestBodySharedLinkField } from '@/managers/sharedLinksFiles.generated';
import { deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField } from '@/managers/sharedLinksFiles.generated';
import { serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFiles.generated';
import { deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFiles.generated';
import { serializeRemoveSharedLinkFromFileRequestBody } from '@/managers/sharedLinksFiles.generated';
import { deserializeRemoveSharedLinkFromFileRequestBody } from '@/managers/sharedLinksFiles.generated';
import { FindFileForSharedLinkHeadersInput } from '@/managers/sharedLinksFiles.generated';
import { BoxClient } from '@/client.generated';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { AddShareLinkToFileRequestBody } from '@/managers/sharedLinksFiles.generated';
import { AddShareLinkToFileRequestBodySharedLinkField } from '@/managers/sharedLinksFiles.generated';
import { AddShareLinkToFileRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFiles.generated';
import { AddShareLinkToFileQueryParams } from '@/managers/sharedLinksFiles.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { GetSharedLinkForFileQueryParams } from '@/managers/sharedLinksFiles.generated';
import { FindFileForSharedLinkQueryParams } from '@/managers/sharedLinksFiles.generated';
import { FindFileForSharedLinkHeaders } from '@/managers/sharedLinksFiles.generated';
import { UpdateSharedLinkOnFileRequestBody } from '@/managers/sharedLinksFiles.generated';
import { UpdateSharedLinkOnFileRequestBodySharedLinkField } from '@/managers/sharedLinksFiles.generated';
import { UpdateSharedLinkOnFileRequestBodySharedLinkAccessField } from '@/managers/sharedLinksFiles.generated';
import { UpdateSharedLinkOnFileQueryParams } from '@/managers/sharedLinksFiles.generated';
import { RemoveSharedLinkFromFileRequestBody } from '@/managers/sharedLinksFiles.generated';
import { RemoveSharedLinkFromFileQueryParams } from '@/managers/sharedLinksFiles.generated';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { createNull } from '@/internal/utils';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
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
    { fields: 'shared_link' } satisfies AddShareLinkToFileQueryParams,
  );
  const fileFromApi: FileFull =
    await client.sharedLinksFiles.getSharedLinkForFile(fileId, {
      fields: 'shared_link',
    } satisfies GetSharedLinkForFileQueryParams);
  if (!((toString(fileFromApi.sharedLink!.access) as string) == 'open')) {
    throw new Error('Assertion failed');
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = getDefaultClientWithUserSubject(userId);
  const fileFromSharedLinkPassword: FileFull =
    await userClient.sharedLinksFiles.findFileForSharedLink(
      {} satisfies FindFileForSharedLinkQueryParams,
      {
        boxapi: ''.concat(
          'shared_link=',
          fileFromApi.sharedLink!.url,
          '&shared_link_password=Secret123@',
        ) as string,
      } satisfies FindFileForSharedLinkHeadersInput,
    );
  if (!(fileId == fileFromSharedLinkPassword.id)) {
    throw new Error('Assertion failed');
  }
  await expect(async () => {
    await userClient.sharedLinksFiles.findFileForSharedLink(
      {} satisfies FindFileForSharedLinkQueryParams,
      {
        boxapi: ''.concat(
          'shared_link=',
          fileFromApi.sharedLink!.url,
          '&shared_link_password=incorrectPassword',
        ) as string,
      } satisfies FindFileForSharedLinkHeadersInput,
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
      { fields: 'shared_link' } satisfies UpdateSharedLinkOnFileQueryParams,
    );
  if (
    !((toString(updatedFile.sharedLink!.access) as string) == 'collaborators')
  ) {
    throw new Error('Assertion failed');
  }
  await client.sharedLinksFiles.removeSharedLinkFromFile(
    fileId,
    { sharedLink: createNull() } satisfies RemoveSharedLinkFromFileRequestBody,
    { fields: 'shared_link' } satisfies RemoveSharedLinkFromFileQueryParams,
  );
  const fileFromApiAfterRemove: FileFull =
    await client.sharedLinksFiles.getSharedLinkForFile(fileId, {
      fields: 'shared_link',
    } satisfies GetSharedLinkForFileQueryParams);
  if (!(fileFromApiAfterRemove.sharedLink == void 0)) {
    throw new Error('Assertion failed');
  }
  await client.files.deleteFileById(fileId);
});
export {};
