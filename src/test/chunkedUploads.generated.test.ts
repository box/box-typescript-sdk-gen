import { serializeFile } from '../schemas.generated.js';
import { deserializeFile } from '../schemas.generated.js';
import { ByteStream } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { File } from '../schemas.generated.js';
const jwtConfig: any = JwtConfig.fromConfigJsonString(
  decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
);
const auth: any = new BoxJwtAuth({ config: jwtConfig });
const client: any = new BoxClient({ auth: auth });
test('testChunkedUpload', async function testChunkedUpload(): Promise<any> {
  const fileSize: any = 20 * 1024 * 1024;
  const fileByteStream: any = generateByteStream(fileSize);
  const fileName: any = getUuid();
  const parentFolderId: any = '0';
  const uploadedFile: any = await client.chunkedUploads.uploadBigFile(
    fileByteStream,
    fileName,
    fileSize,
    parentFolderId
  );
  if (!(uploadedFile.name == fileName)) {
    throw 'Assertion failed';
  }
  if (!(uploadedFile.size == fileSize)) {
    throw 'Assertion failed';
  }
  if (!(uploadedFile.parent.id == parentFolderId)) {
    throw 'Assertion failed';
  }
  await client.files.deleteFileById(uploadedFile.id);
});
export {};
