import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeShieldInformationBarrier } from '../schemas.generated.js';
import { deserializeShieldInformationBarrier } from '../schemas.generated.js';
import { serializeShieldInformationBarriers } from '../schemas.generated.js';
import { deserializeShieldInformationBarriers } from '../schemas.generated.js';
import { serializeCreateShieldInformationBarrierRequestBodyArg } from '../managers/shieldInformationBarriers.generated.js';
import { deserializeCreateShieldInformationBarrierRequestBodyArg } from '../managers/shieldInformationBarriers.generated.js';
import { serializeEnterpriseBase } from '../schemas.generated.js';
import { deserializeEnterpriseBase } from '../schemas.generated.js';
import { serializeEnterpriseBaseTypeField } from '../schemas.generated.js';
import { deserializeEnterpriseBaseTypeField } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { FileFull } from '../schemas.generated.js';
import { ByteStream } from '../utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { ShieldInformationBarrier } from '../schemas.generated.js';
import { ShieldInformationBarriers } from '../schemas.generated.js';
import { CreateShieldInformationBarrierRequestBodyArg } from '../managers/shieldInformationBarriers.generated.js';
import { EnterpriseBase } from '../schemas.generated.js';
import { EnterpriseBaseTypeField } from '../schemas.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export function getJwtAuth(): BoxJwtAuth {
  const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
  );
  const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
  return auth;
}
export async function getDefaultClientAsUser(
  userId: string
): Promise<BoxClient> {
  const auth: BoxJwtAuth = getJwtAuth();
  await auth.asUser(userId);
  return new BoxClient({ auth: auth });
}
export function getDefaultClient(): BoxClient {
  const client: BoxClient = new BoxClient({ auth: getJwtAuth() });
  return client;
}
export async function createNewFolder(): Promise<FolderFull> {
  const client: BoxClient = getDefaultClient();
  const newFolderName: string = getUuid();
  return await client.folders.createFolder({
    name: newFolderName,
    parent: { id: '0' } satisfies CreateFolderRequestBodyArgParentField,
  } satisfies CreateFolderRequestBodyArg);
}
export async function uploadNewFile(): Promise<FileFull> {
  const client: BoxClient = getDefaultClient();
  const newFileName: string = ''.concat(getUuid(), '.pdf') as string;
  const fileContentStream: ByteStream = generateByteStream(1024 * 1024);
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: newFileName,
      parent: {
        id: '0',
      } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
    } satisfies UploadFileRequestBodyArgAttributesField,
    file: fileContentStream,
  } satisfies UploadFileRequestBodyArg);
  return uploadedFiles.entries![0];
}
export async function getOrCreateShieldInformationBarrier(
  client: BoxClient,
  enterpriseId: string
): Promise<ShieldInformationBarrier> {
  const barriers: ShieldInformationBarriers =
    await client.shieldInformationBarriers.getShieldInformationBarriers();
  const numberOfBarriers: number = barriers.entries!.length;
  if (numberOfBarriers == 0) {
    return await client.shieldInformationBarriers.createShieldInformationBarrier(
      {
        enterprise: {
          id: enterpriseId,
          type: 'enterprise' as EnterpriseBaseTypeField,
        } satisfies EnterpriseBase,
      } satisfies CreateShieldInformationBarrierRequestBodyArg
    );
  }
  return barriers.entries![numberOfBarriers - 1];
}
