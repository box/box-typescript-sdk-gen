import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBody } from '../managers/folders.generated.js';
import { serializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { deserializeCreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeTermsOfServices } from '../schemas.generated.js';
import { deserializeTermsOfServices } from '../schemas.generated.js';
import { serializeCreateTermsOfServiceRequestBody } from '../managers/termsOfServices.generated.js';
import { deserializeCreateTermsOfServiceRequestBody } from '../managers/termsOfServices.generated.js';
import { serializeCreateTermsOfServiceRequestBodyStatusField } from '../managers/termsOfServices.generated.js';
import { deserializeCreateTermsOfServiceRequestBodyStatusField } from '../managers/termsOfServices.generated.js';
import { serializeCreateTermsOfServiceRequestBodyTosTypeField } from '../managers/termsOfServices.generated.js';
import { deserializeCreateTermsOfServiceRequestBodyTosTypeField } from '../managers/termsOfServices.generated.js';
import { serializeClassificationTemplateFieldsOptionsField } from '../schemas.generated.js';
import { deserializeClassificationTemplateFieldsOptionsField } from '../schemas.generated.js';
import { serializeAddClassificationRequestBody } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBody } from '../managers/classifications.generated.js';
import { serializeAddClassificationRequestBodyOpField } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyOpField } from '../managers/classifications.generated.js';
import { serializeAddClassificationRequestBodyFieldKeyField } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyFieldKeyField } from '../managers/classifications.generated.js';
import { serializeAddClassificationRequestBodyDataField } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyDataField } from '../managers/classifications.generated.js';
import { serializeAddClassificationRequestBodyDataStaticConfigField } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyDataStaticConfigField } from '../managers/classifications.generated.js';
import { serializeAddClassificationRequestBodyDataStaticConfigClassificationField } from '../managers/classifications.generated.js';
import { deserializeAddClassificationRequestBodyDataStaticConfigClassificationField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBody } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBody } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyScopeField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyScopeField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyDisplayNameField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyDisplayNameField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyTemplateKeyField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyTemplateKeyField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyFieldsField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyFieldsField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyFieldsTypeField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyFieldsTypeField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyFieldsKeyField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyFieldsKeyField } from '../managers/classifications.generated.js';
import { serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField } from '../managers/classifications.generated.js';
import { deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField } from '../managers/classifications.generated.js';
import { serializeShieldInformationBarrier } from '../schemas.generated.js';
import { deserializeShieldInformationBarrier } from '../schemas.generated.js';
import { serializeShieldInformationBarriers } from '../schemas.generated.js';
import { deserializeShieldInformationBarriers } from '../schemas.generated.js';
import { serializeCreateShieldInformationBarrierRequestBody } from '../managers/shieldInformationBarriers.generated.js';
import { deserializeCreateShieldInformationBarrierRequestBody } from '../managers/shieldInformationBarriers.generated.js';
import { serializeEnterpriseBase } from '../schemas.generated.js';
import { deserializeEnterpriseBase } from '../schemas.generated.js';
import { serializeEnterpriseBaseTypeField } from '../schemas.generated.js';
import { deserializeEnterpriseBaseTypeField } from '../schemas.generated.js';
import { serializeClassificationTemplate } from '../schemas.generated.js';
import { deserializeClassificationTemplate } from '../schemas.generated.js';
import { serializeTermsOfService } from '../schemas.generated.js';
import { deserializeTermsOfService } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { CreateFolderRequestBody } from '../managers/folders.generated.js';
import { CreateFolderRequestBodyParentField } from '../managers/folders.generated.js';
import { FileFull } from '../schemas.generated.js';
import { ByteStream } from '../internal/utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { TermsOfServices } from '../schemas.generated.js';
import { CreateTermsOfServiceRequestBody } from '../managers/termsOfServices.generated.js';
import { CreateTermsOfServiceRequestBodyStatusField } from '../managers/termsOfServices.generated.js';
import { CreateTermsOfServiceRequestBodyTosTypeField } from '../managers/termsOfServices.generated.js';
import { ClassificationTemplateFieldsOptionsField } from '../schemas.generated.js';
import { AddClassificationRequestBody } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyOpField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyFieldKeyField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyDataField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyDataStaticConfigField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyDataStaticConfigClassificationField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBody } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyScopeField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyDisplayNameField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyTemplateKeyField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyFieldsField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyFieldsTypeField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyFieldsKeyField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyFieldsDisplayNameField } from '../managers/classifications.generated.js';
import { ShieldInformationBarrier } from '../schemas.generated.js';
import { ShieldInformationBarriers } from '../schemas.generated.js';
import { CreateShieldInformationBarrierRequestBody } from '../managers/shieldInformationBarriers.generated.js';
import { EnterpriseBase } from '../schemas.generated.js';
import { EnterpriseBaseTypeField } from '../schemas.generated.js';
import { decodeBase64 } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { BoxClient } from '../client.generated.js';
import { ClassificationTemplate } from '../schemas.generated.js';
import { TermsOfService } from '../schemas.generated.js';
import { BoxJwtAuth } from '../box/jwtAuth.generated.js';
import { JwtConfig } from '../box/jwtAuth.generated.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function getJwtAuth(): BoxJwtAuth {
  const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
  );
  const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
  return auth;
}
export function getDefaultClientWithUserSubject(userId: string): BoxClient {
  const auth: BoxJwtAuth = getJwtAuth();
  const authUser: BoxJwtAuth = auth.withUserSubject(userId);
  return new BoxClient({ auth: authUser });
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
    parent: { id: '0' } satisfies CreateFolderRequestBodyParentField,
  } satisfies CreateFolderRequestBody);
}
export async function uploadNewFile(): Promise<FileFull> {
  const client: BoxClient = getDefaultClient();
  const newFileName: string = ''.concat(getUuid(), '.pdf') as string;
  const fileContentStream: ByteStream = generateByteStream(1024 * 1024);
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: newFileName,
      parent: { id: '0' } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: fileContentStream,
  } satisfies UploadFileRequestBody);
  return uploadedFiles.entries![0];
}
export async function getOrCreateTermsOfServices(): Promise<TermsOfService> {
  const client: BoxClient = getDefaultClient();
  const tos: TermsOfServices = await client.termsOfServices.getTermsOfService();
  const numberOfTos: number = tos.entries!.length;
  if (numberOfTos >= 1) {
    const firstTos: TermsOfService = tos.entries![0];
    if ((toString(firstTos.tosType) as string) == 'managed') {
      return firstTos;
    }
  }
  if (numberOfTos >= 2) {
    const secondTos: TermsOfService = tos.entries![1];
    if ((toString(secondTos.tosType) as string) == 'managed') {
      return secondTos;
    }
  }
  return await client.termsOfServices.createTermsOfService({
    status: 'disabled' as CreateTermsOfServiceRequestBodyStatusField,
    tosType: 'managed' as CreateTermsOfServiceRequestBodyTosTypeField,
    text: 'Test TOS',
  } satisfies CreateTermsOfServiceRequestBody);
}
export async function getOrCreateClassification(
  classificationTemplate: ClassificationTemplate
): Promise<ClassificationTemplateFieldsOptionsField> {
  const client: BoxClient = getDefaultClient();
  const classifications: readonly ClassificationTemplateFieldsOptionsField[] =
    classificationTemplate.fields[0].options;
  const currentNumberOfClassifications: number = classifications.length;
  if (currentNumberOfClassifications == 0) {
    const classificationTemplateWithNewClassification: ClassificationTemplate =
      await client.classifications.addClassification([
        {
          op: 'addEnumOption' as AddClassificationRequestBodyOpField,
          fieldKey:
            'Box__Security__Classification__Key' as AddClassificationRequestBodyFieldKeyField,
          data: {
            key: getUuid(),
            staticConfig: {
              classification: {
                colorId: 3,
                classificationDefinition: 'Some description',
              } satisfies AddClassificationRequestBodyDataStaticConfigClassificationField,
            } satisfies AddClassificationRequestBodyDataStaticConfigField,
          } satisfies AddClassificationRequestBodyDataField,
        } satisfies AddClassificationRequestBody,
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
      scope: 'enterprise' as CreateClassificationTemplateRequestBodyScopeField,
      displayName:
        'Classification' as CreateClassificationTemplateRequestBodyDisplayNameField,
      templateKey:
        'securityClassification-6VMVochwUWo' as CreateClassificationTemplateRequestBodyTemplateKeyField,
      fields: [
        {
          type: 'enum' as CreateClassificationTemplateRequestBodyFieldsTypeField,
          key: 'Box__Security__Classification__Key' as CreateClassificationTemplateRequestBodyFieldsKeyField,
          displayName:
            'Classification' as CreateClassificationTemplateRequestBodyFieldsDisplayNameField,
          options: [],
        } satisfies CreateClassificationTemplateRequestBodyFieldsField,
      ],
    } satisfies CreateClassificationTemplateRequestBody);
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
      } satisfies CreateShieldInformationBarrierRequestBody
    );
  }
  return barriers.entries![numberOfBarriers - 1];
}
