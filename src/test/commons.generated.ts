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
import { serializeClassificationTemplateFieldsFieldOptionsField } from '../schemas.generated.js';
import { deserializeClassificationTemplateFieldsFieldOptionsField } from '../schemas.generated.js';
import { serializeAddClassificationRequestBodyArg } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyArg } from '../managers/classifications.generated.js';
import { serializeAddClassificationRequestBodyArgOpField } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyArgOpField } from '../managers/classifications.generated.js';
import { serializeAddClassificationRequestBodyArgFieldKeyField } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyArgFieldKeyField } from '../managers/classifications.generated.js';
import { serializeAddClassificationRequestBodyArgDataField } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyArgDataField } from '../managers/classifications.generated.js';
import { serializeAddClassificationRequestBodyArgDataFieldStaticConfigField } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyArgDataFieldStaticConfigField } from '../managers/classifications.generated.js';
import { serializeAddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyArg } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyArg } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyArgScopeField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyArgScopeField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyArgDisplayNameField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyArgDisplayNameField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyArgTemplateKeyField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyArgTemplateKeyField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyArgFieldsField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyArgFieldsField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyArgFieldsFieldTypeField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldTypeField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyArgFieldsFieldKeyField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldKeyField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField } from '../managers/classifications.generated.js';
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
import { serializeClassificationTemplate } from '../schemas.generated.js';
import { deserializeClassificationTemplate } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBodyArg } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyArgParentField } from '../managers/folders.generated.js';
import { FileFull } from '../schemas.generated.js';
import { ByteStream } from '../utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { ClassificationTemplateFieldsFieldOptionsField } from '../schemas.generated.js';
import { AddClassificationRequestBodyArg } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgOpField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgFieldKeyField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgDataField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgDataFieldStaticConfigField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArg } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgScopeField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgDisplayNameField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgTemplateKeyField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgFieldsField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgFieldsFieldTypeField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgFieldsFieldKeyField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField } from '../managers/classifications.generated.js';
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
import { ClassificationTemplate } from '../schemas.generated.js';
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
export async function getOrCreateClassification(
  classificationTemplate: ClassificationTemplate
): Promise<any> {
  const client: BoxClient = getDefaultClient();
  const classifications: readonly ClassificationTemplateFieldsFieldOptionsField[] =
    classificationTemplate.fields[0].options;
  const currentNumberOfClassifications: number = classifications.length;
  if (currentNumberOfClassifications == 0) {
    const classificationTemplateWithNewClassification: ClassificationTemplate =
      await client.classifications.addClassification([
        {
          op: 'addEnumOption' as AddClassificationRequestBodyArgOpField,
          fieldKey:
            'Box__Security__Classification__Key' as AddClassificationRequestBodyArgFieldKeyField,
          data: {
            key: getUuid(),
            staticConfig: {
              classification: {
                colorId: 3,
                classificationDefinition: 'Some description',
              } satisfies AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField,
            } satisfies AddClassificationRequestBodyArgDataFieldStaticConfigField,
          } satisfies AddClassificationRequestBodyArgDataField,
        } satisfies AddClassificationRequestBodyArg,
      ]);
    return classificationTemplateWithNewClassification.fields[0].options[0];
  }
  return classifications[0];
}
export async function getOrCreateClassificationTemplate(): Promise<ClassificationTemplate> {
  const client: BoxClient = getDefaultClient();
  try {
    return await client.classifications.getClassificationTemplate();
  } catch (error) {
    return await client.classifications.createClassificationTemplate({
      scope:
        'enterprise' as CreateClassificationTemplateRequestBodyArgScopeField,
      displayName:
        'Classification' as CreateClassificationTemplateRequestBodyArgDisplayNameField,
      templateKey:
        'securityClassification-6VMVochwUWo' as CreateClassificationTemplateRequestBodyArgTemplateKeyField,
      fields: [
        {
          type: 'enum' as CreateClassificationTemplateRequestBodyArgFieldsFieldTypeField,
          key: 'Box__Security__Classification__Key' as CreateClassificationTemplateRequestBodyArgFieldsFieldKeyField,
          displayName:
            'Classification' as CreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField,
          options: [],
        } satisfies CreateClassificationTemplateRequestBodyArgFieldsField,
      ],
    } satisfies CreateClassificationTemplateRequestBodyArg);
  } finally {
  }
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
