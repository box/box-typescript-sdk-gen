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
import { serializeFolderFull } from '@/schemas/folderFull.generated';
import { deserializeFolderFull } from '@/schemas/folderFull.generated';
import { serializeClassification } from '@/schemas/classification.generated';
import { deserializeClassification } from '@/schemas/classification.generated';
import { serializeAddClassificationToFolderRequestBody } from '@/managers/folderClassifications.generated';
import { deserializeAddClassificationToFolderRequestBody } from '@/managers/folderClassifications.generated';
import { serializeUpdateClassificationOnFolderRequestBody } from '@/managers/folderClassifications.generated';
import { deserializeUpdateClassificationOnFolderRequestBody } from '@/managers/folderClassifications.generated';
import { serializeClassificationTemplate } from '@/schemas/classificationTemplate.generated';
import { deserializeClassificationTemplate } from '@/schemas/classificationTemplate.generated';
import { ClassificationTemplateInput } from '@/schemas/classificationTemplate.generated';
import { AddClassificationToFolderOptionalsInput } from '@/managers/folderClassifications.generated';
import { AddClassificationToFolderOptionals } from '@/managers/folderClassifications.generated';
import { BoxClient } from '@/client.generated';
import { ClassificationTemplateFieldsOptionsField } from '@/schemas/classificationTemplate.generated';
import { AddClassificationRequestBody } from '@/managers/classifications.generated';
import { AddClassificationRequestBodyDataField } from '@/managers/classifications.generated';
import { AddClassificationRequestBodyDataStaticConfigField } from '@/managers/classifications.generated';
import { AddClassificationRequestBodyDataStaticConfigClassificationField } from '@/managers/classifications.generated';
import { FolderFull } from '@/schemas/folderFull.generated';
import { Classification } from '@/schemas/classification.generated';
import { AddClassificationToFolderRequestBody } from '@/managers/folderClassifications.generated';
import { UpdateClassificationOnFolderRequestBody } from '@/managers/folderClassifications.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { createNewFolder } from './commons.generated';
import { getOrCreateClassificationTemplate } from './commons.generated';
import { getOrCreateClassification } from './commons.generated';
import { ClassificationTemplate } from '@/schemas/classificationTemplate.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
export async function getOrCreateSecondClassification(
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
  const classifications: readonly ClassificationTemplateFieldsOptionsField[] =
    classificationTemplate.fields[0].options;
  const currentNumberOfClassifications: number = classifications.length;
  if (currentNumberOfClassifications == 1) {
    const classificationTemplateWithNewClassification: ClassificationTemplate =
      await client.classifications.addClassification([
        new AddClassificationRequestBody({
          data: {
            key: getUuid(),
            staticConfig: {
              classification: {
                colorId: 4,
                classificationDefinition: 'Other description',
              } satisfies AddClassificationRequestBodyDataStaticConfigClassificationField,
            } satisfies AddClassificationRequestBodyDataStaticConfigField,
          } satisfies AddClassificationRequestBodyDataField,
        }),
      ]);
    return classificationTemplateWithNewClassification.fields[0].options[1];
  }
  return classifications[1];
}
test('testFolderClassifications', async function testFolderClassifications(): Promise<any> {
  const classificationTemplate: ClassificationTemplate =
    await getOrCreateClassificationTemplate();
  const classification: ClassificationTemplateFieldsOptionsField =
    await getOrCreateClassification(classificationTemplate);
  const folder: FolderFull = await createNewFolder();
  await expect(async () => {
    await client.folderClassifications.getClassificationOnFolder(folder.id);
  }).rejects.toThrow();
  const createdFolderClassification: Classification =
    await client.folderClassifications.addClassificationToFolder(folder.id, {
      requestBody: {
        boxSecurityClassificationKey: classification.key,
      } satisfies AddClassificationToFolderRequestBody,
    } satisfies AddClassificationToFolderOptionalsInput);
  if (
    !(
      createdFolderClassification.boxSecurityClassificationKey ==
      classification.key
    )
  ) {
    throw new Error('Assertion failed');
  }
  const folderClassification: Classification =
    await client.folderClassifications.getClassificationOnFolder(folder.id);
  if (
    !(folderClassification.boxSecurityClassificationKey == classification.key)
  ) {
    throw new Error('Assertion failed');
  }
  const secondClassification: ClassificationTemplateFieldsOptionsField =
    await getOrCreateSecondClassification(classificationTemplate);
  const updatedFolderClassification: Classification =
    await client.folderClassifications.updateClassificationOnFolder(folder.id, [
      new UpdateClassificationOnFolderRequestBody({
        value: secondClassification.key,
      }),
    ]);
  if (
    !(
      updatedFolderClassification.boxSecurityClassificationKey ==
      secondClassification.key
    )
  ) {
    throw new Error('Assertion failed');
  }
  await client.folderClassifications.deleteClassificationFromFolder(folder.id);
  await expect(async () => {
    await client.folderClassifications.getClassificationOnFolder(folder.id);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
