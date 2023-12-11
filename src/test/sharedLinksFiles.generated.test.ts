import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeUpdateFileAddSharedLinkRequestBodyArg } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileAddSharedLinkRequestBodyArg } from '../managers/sharedLinksFiles.generated.js';
import { serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFiles.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeUpdateFileUpdateSharedLinkRequestBodyArg } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileUpdateSharedLinkRequestBodyArg } from '../managers/sharedLinksFiles.generated.js';
import { serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFiles.generated.js';
import { deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFiles.generated.js';
import { BoxClient } from '../client.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { UpdateFileAddSharedLinkRequestBodyArg } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileAddSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileAddSharedLinkQueryParamsArg } from '../managers/sharedLinksFiles.generated.js';
import { FileFull } from '../schemas.generated.js';
import { GetFileGetSharedLinkQueryParamsArg } from '../managers/sharedLinksFiles.generated.js';
import { GetSharedItemsQueryParamsArg } from '../managers/sharedLinksFiles.generated.js';
import { GetSharedItemsHeadersArg } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileUpdateSharedLinkRequestBodyArg } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField } from '../managers/sharedLinksFiles.generated.js';
import { UpdateFileUpdateSharedLinkQueryParamsArg } from '../managers/sharedLinksFiles.generated.js';
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
      parent: {
        id: '0',
      } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
    } satisfies UploadFileRequestBodyArgAttributesField,
    file: generateByteStream(10),
  } satisfies UploadFileRequestBodyArg);
  const fileId: string = uploadedFiles.entries![0].id;
  await client.sharedLinksFiles.updateFileAddSharedLink(
    fileId,
    {
      sharedLink: {
        access:
          'open' as UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField,
        password: 'Secret123@',
      } satisfies UpdateFileAddSharedLinkRequestBodyArgSharedLinkField,
    } satisfies UpdateFileAddSharedLinkRequestBodyArg,
    { fields: 'shared_link' } satisfies UpdateFileAddSharedLinkQueryParamsArg
  );
  const fileFromApi: FileFull =
    await client.sharedLinksFiles.getFileGetSharedLink(fileId, {
      fields: 'shared_link',
    } satisfies GetFileGetSharedLinkQueryParamsArg);
  if (!((toString(fileFromApi.sharedLink!.access) as string) == 'open')) {
    throw 'Assertion failed';
  }
  const userId: string = getEnvVar('USER_ID');
  const userClient: BoxClient = await getDefaultClientAsUser(userId);
  const fileFromSharedLinkPassword: FileFull =
    await userClient.sharedLinksFiles.getSharedItems(
      {} satisfies GetSharedItemsQueryParamsArg,
      new GetSharedItemsHeadersArg({
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
      {} satisfies GetSharedItemsQueryParamsArg,
      new GetSharedItemsHeadersArg({
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
            'collaborators' as UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField,
        } satisfies UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField,
      } satisfies UpdateFileUpdateSharedLinkRequestBodyArg,
      {
        fields: 'shared_link',
      } satisfies UpdateFileUpdateSharedLinkQueryParamsArg
    );
  if (
    !((toString(updatedFile.sharedLink!.access) as string) == 'collaborators')
  ) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(fileId);
});
export {};
