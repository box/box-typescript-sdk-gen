import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeFile } from '../schemas.generated.js';
import { deserializeFile } from '../schemas.generated.js';
import { serializeUploadFileVersionRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileVersionRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { ByteStream } from '../utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { File } from '../schemas.generated.js';
import { UploadFileVersionRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileVersionRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { readByteStream } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
const jwtConfig: any = JwtConfig.fromConfigJsonString(
  decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
);
const auth: any = new BoxJwtAuth({ config: jwtConfig });
const client: any = new BoxClient({ auth: auth });
test('test_upload_file_and_file_version', async function test_upload_file_and_file_version(): Promise<any> {
  const newFileName: any = getUuid();
  const fileContentStream: any = generateByteStream(1048576);
  const uploadedFiles: any = await client.uploads.uploadFile({
    attributes: {
      name: newFileName,
      parent: {
        id: '0',
      } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
    } satisfies UploadFileRequestBodyArgAttributesField,
    file: fileContentStream,
  } satisfies UploadFileRequestBodyArg);
  const uploadedFile: any = uploadedFiles.entries[0];
  if (!(uploadedFile.name == newFileName)) {
    throw 'Assertion failed';
  }
  const newFileVersionName: any = getUuid();
  const newFileContentStream: any = generateByteStream(1048576);
  const uploadedFilesVersion: any = await client.uploads.uploadFileVersion(
    uploadedFile.id,
    {
      attributes: {
        name: newFileVersionName,
      } satisfies UploadFileVersionRequestBodyArgAttributesField,
      file: newFileContentStream,
    } satisfies UploadFileVersionRequestBodyArg
  );
  const newFileVersion: any = uploadedFilesVersion.entries[0];
  if (!(newFileVersion.name == newFileVersionName)) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(newFileVersion.id);
});
export {};
