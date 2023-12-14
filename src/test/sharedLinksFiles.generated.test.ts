import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeUpdateFileAddSharedLinkRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileAddSharedLinkRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { serializeUpdateFileAddSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileAddSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { serializeUpdateFileAddSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileAddSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeUpdateFileUpdateSharedLinkRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileUpdateSharedLinkRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { serializeUpdateFileUpdateSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileUpdateSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { serializeUpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { BoxClient } from '../client.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { UpdateFileAddSharedLinkRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileAddSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileAddSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileAddSharedLinkQueryParams } from '../managers/sharedLinksFiles.generated.js';
import { FileFull } from '../schemas.generated.js';
import { GetFileGetSharedLinkQueryParams } from '../managers/sharedLinksFiles.generated.js';
import { GetSharedItemsQueryParams } from '../managers/sharedLinksFiles.generated.js';
import { GetSharedItemsHeaders } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileUpdateSharedLinkRequestBody } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileUpdateSharedLinkRequestBodySharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileUpdateSharedLinkQueryParams } from '../managers/sharedLinksFiles.generated.js';
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
  await client.sharedLinksFiles.updateFileAddSharedLink(
    fileId,
    {
      sharedLink: {
        access:
          'open' as UpdateFileAddSharedLinkRequestBodySharedLinkAccessField,
        password: 'Secret123@',
      } satisfies UpdateFileAddSharedLinkRequestBodySharedLinkField,
    } satisfies UpdateFileAddSharedLinkRequestBody,
    { fields: 'shared_link' } satisfies UpdateFileAddSharedLinkQueryParams
  );
  const fileFromApi: FileFull =
    await client.sharedLinksFiles.getFileGetSharedLink(fileId, {
      fields: 'shared_link',
    } satisfies GetFileGetSharedLinkQueryParams);
  if (!((toString(fileFromApi.sharedLink!.access) as string) == 'open')) {
    throw 'Assertion failed';
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = await getDefaultClientAsUser(userId);
  const fileFromSharedLinkPassword: FileFull =
    await userClient.sharedLinksFiles.getSharedItems(
      {} satisfies GetSharedItemsQueryParams,
      new GetSharedItemsHeaders({
        boxapi: ''.concat(
          'shared_link=',
          fileFromApi.sharedLink!.url,
          '&shared_link_password=Secret123@'
        ) as string,
      })
    );
  if (!(fileId == fileFromSharedLinkPassword.id)) {
    throw 'Assertion failed';
  }
  await expect(async () => {
    await userClient.sharedLinksFiles.getSharedItems(
      {} satisfies GetSharedItemsQueryParams,
      new GetSharedItemsHeaders({
        boxapi: ''.concat(
          'shared_link=',
          fileFromApi.sharedLink!.url,
          '&shared_link_password=incorrectPassword'
        ) as string,
      })
    );
  }).rejects.toThrow();
  const updatedFile: FileFull =
    await client.sharedLinksFiles.updateFileUpdateSharedLink(
      fileId,
      {
        sharedLink: {
          access:
            'collaborators' as UpdateFileUpdateSharedLinkRequestBodySharedLinkAccessField,
        } satisfies UpdateFileUpdateSharedLinkRequestBodySharedLinkField,
      } satisfies UpdateFileUpdateSharedLinkRequestBody,
      { fields: 'shared_link' } satisfies UpdateFileUpdateSharedLinkQueryParams
    );
  if (
    !((toString(updatedFile.sharedLink!.access) as string) == 'collaborators')
  ) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(fileId);
});
export {};
