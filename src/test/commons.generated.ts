import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBody } from '@/managers/folders.generated';
import { serializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { deserializeCreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeTermsOfServices } from '@/schemas/termsOfServices.generated';
import { deserializeTermsOfServices } from '@/schemas/termsOfServices.generated';
import { serializeCreateTermsOfServiceRequestBody } from '@/managers/termsOfServices.generated';
import { deserializeCreateTermsOfServiceRequestBody } from '@/managers/termsOfServices.generated';
import { serializeCreateTermsOfServiceRequestBodyStatusField } from '@/managers/termsOfServices.generated';
import { deserializeCreateTermsOfServiceRequestBodyStatusField } from '@/managers/termsOfServices.generated';
import { serializeCreateTermsOfServiceRequestBodyTosTypeField } from '@/managers/termsOfServices.generated';
import { deserializeCreateTermsOfServiceRequestBodyTosTypeField } from '@/managers/termsOfServices.generated';
import { serializeClassificationTemplateFieldsOptionsField } from '@/schemas/classificationTemplate.generated';
import { deserializeClassificationTemplateFieldsOptionsField } from '@/schemas/classificationTemplate.generated';
import { serializeAddClassificationRequestBody } from '@/managers/classifications.generated';
import { deserializeAddClassificationRequestBody } from '@/managers/classifications.generated';
import { serializeAddClassificationRequestBodyDataField } from '@/managers/classifications.generated';
import { deserializeAddClassificationRequestBodyDataField } from '@/managers/classifications.generated';
import { serializeAddClassificationRequestBodyDataStaticConfigField } from '@/managers/classifications.generated';
import { deserializeAddClassificationRequestBodyDataStaticConfigField } from '@/managers/classifications.generated';
import { serializeAddClassificationRequestBodyDataStaticConfigClassificationField } from '@/managers/classifications.generated';
import { deserializeAddClassificationRequestBodyDataStaticConfigClassificationField } from '@/managers/classifications.generated';
import { serializeCreateClassificationTemplateRequestBody } from '@/managers/classifications.generated';
import { deserializeCreateClassificationTemplateRequestBody } from '@/managers/classifications.generated';
import { serializeCreateClassificationTemplateRequestBodyFieldsField } from '@/managers/classifications.generated';
import { deserializeCreateClassificationTemplateRequestBodyFieldsField } from '@/managers/classifications.generated';
import { serializeShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { deserializeShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { serializeShieldInformationBarriers } from '@/schemas/shieldInformationBarriers.generated';
import { deserializeShieldInformationBarriers } from '@/schemas/shieldInformationBarriers.generated';
import { serializeCreateShieldInformationBarrierRequestBody } from '@/managers/shieldInformationBarriers.generated';
import { deserializeCreateShieldInformationBarrierRequestBody } from '@/managers/shieldInformationBarriers.generated';
import { serializeEnterpriseBase } from '@/schemas/enterpriseBase.generated';
import { deserializeEnterpriseBase } from '@/schemas/enterpriseBase.generated';
import { serializeClassificationTemplate } from '@/schemas/classificationTemplate.generated';
import { deserializeClassificationTemplate } from '@/schemas/classificationTemplate.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeTermsOfService } from '@/schemas/termsOfService.generated';
import { deserializeTermsOfService } from '@/schemas/termsOfService.generated';
import { ClassificationTemplateInput } from '@/schemas/classificationTemplate.generated';
import { CreateClassificationTemplateRequestBodyInput } from '@/managers/classifications.generated';
import { BoxClientInput } from '@/client.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { CreateFolderRequestBody } from '@/managers/folders.generated';
import { CreateFolderRequestBodyParentField } from '@/managers/folders.generated';
import { ByteStream } from '@/internal/utils';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { TermsOfServices } from '@/schemas/termsOfServices.generated';
import { CreateTermsOfServiceRequestBody } from '@/managers/termsOfServices.generated';
import { CreateTermsOfServiceRequestBodyStatusField } from '@/managers/termsOfServices.generated';
import { CreateTermsOfServiceRequestBodyTosTypeField } from '@/managers/termsOfServices.generated';
import { ClassificationTemplateFieldsOptionsField } from '@/schemas/classificationTemplate.generated';
import { AddClassificationRequestBody } from '@/managers/classifications.generated';
import { AddClassificationRequestBodyDataField } from '@/managers/classifications.generated';
import { AddClassificationRequestBodyDataStaticConfigField } from '@/managers/classifications.generated';
import { AddClassificationRequestBodyDataStaticConfigClassificationField } from '@/managers/classifications.generated';
import { CreateClassificationTemplateRequestBody } from '@/managers/classifications.generated';
import { CreateClassificationTemplateRequestBodyFieldsField } from '@/managers/classifications.generated';
import { ShieldInformationBarrier } from '@/schemas/shieldInformationBarrier.generated';
import { ShieldInformationBarriers } from '@/schemas/shieldInformationBarriers.generated';
import { CreateShieldInformationBarrierRequestBody } from '@/managers/shieldInformationBarriers.generated';
import { EnterpriseBase } from '@/schemas/enterpriseBase.generated';
import { decodeBase64 } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { BoxClient } from '@/client.generated';
import { ClassificationTemplate } from '@/schemas/classificationTemplate.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { TermsOfService } from '@/schemas/termsOfService.generated';
import { Authentication } from '@/networking/auth.generated';
import { BoxCcgAuth } from '@/box/ccgAuth.generated';
import { CcgConfig } from '@/box/ccgAuth.generated';
import { isBrowser } from '@/internal/utils';
import { BoxJwtAuth } from '@/box/jwtAuth.generated';
import { JwtConfig } from '@/box/jwtAuth.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export function getCcgAuth(): BoxCcgAuth {
  const ccgConfig: CcgConfig = new CcgConfig({
    clientId: getEnvVar('CLIENT_ID'),
    clientSecret: getEnvVar('CLIENT_SECRET'),
    enterpriseId: getEnvVar('ENTERPRISE_ID'),
  });
  const auth: BoxCcgAuth = new BoxCcgAuth({ config: ccgConfig });
  return auth;
}
export function getJwtAuth(): BoxJwtAuth {
  const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')),
  );
  const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
  return auth;
}
export function getDefaultClientWithUserSubject(userId: string): BoxClient {
  if (isBrowser()) {
    const ccgAuth: BoxCcgAuth = getCcgAuth();
    const ccgAuthUser: BoxCcgAuth = ccgAuth.withUserSubject(userId);
    return new BoxClient({ auth: ccgAuthUser });
  }
  const auth: BoxJwtAuth = getJwtAuth();
  const authUser: BoxJwtAuth = auth.withUserSubject(userId);
  return new BoxClient({ auth: authUser });
}
export function getDefaultClient(): BoxClient {
  const client: BoxClient = new BoxClient({
    auth: isBrowser() ? getCcgAuth() : getJwtAuth(),
  });
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
  classificationTemplateInput: ClassificationTemplateInput,
): Promise<ClassificationTemplateFieldsOptionsField> {
  const classificationTemplate: ClassificationTemplate =
    new ClassificationTemplate({
      id: classificationTemplateInput.id,
      type: classificationTemplateInput.type,
      scope: classificationTemplateInput.scope,
      templateKey: classificationTemplateInput.templateKey,
      displayName: classificationTemplateInput.displayName,
      hidden: classificationTemplateInput.hidden,
      copyInstanceOnItemCopy:
        classificationTemplateInput.copyInstanceOnItemCopy,
      fields: classificationTemplateInput.fields,
    });
  const client: BoxClient = getDefaultClient();
  const classifications: readonly ClassificationTemplateFieldsOptionsField[] =
    classificationTemplate.fields[0].options;
  const currentNumberOfClassifications: number = classifications.length;
  if (currentNumberOfClassifications == 0) {
    const classificationTemplateWithNewClassification: ClassificationTemplate =
      await client.classifications.addClassification([
        new AddClassificationRequestBody({
          data: {
            key: getUuid(),
            staticConfig: {
              classification: {
                colorId: 3,
                classificationDefinition: 'Some description',
              } satisfies AddClassificationRequestBodyDataStaticConfigClassificationField,
            } satisfies AddClassificationRequestBodyDataStaticConfigField,
          } satisfies AddClassificationRequestBodyDataField,
        }),
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
      fields: [
        new CreateClassificationTemplateRequestBodyFieldsField({ options: [] }),
      ],
    } satisfies CreateClassificationTemplateRequestBodyInput);
  } finally {
  }
}
export async function getOrCreateShieldInformationBarrier(
  clientInput: BoxClientInput,
  enterpriseId: string,
): Promise<ShieldInformationBarrier> {
  const client: BoxClient = new BoxClient({
    auth: clientInput.auth,
    networkSession: clientInput.networkSession,
  });
  const barriers: ShieldInformationBarriers =
    await client.shieldInformationBarriers.getShieldInformationBarriers();
  const numberOfBarriers: number = barriers.entries!.length;
  if (numberOfBarriers == 0) {
    return await client.shieldInformationBarriers.createShieldInformationBarrier(
      {
        enterprise: { id: enterpriseId } satisfies EnterpriseBase,
      } satisfies CreateShieldInformationBarrierRequestBody,
    );
  }
  return barriers.entries![numberOfBarriers - 1];
}
