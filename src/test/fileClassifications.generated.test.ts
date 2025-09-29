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
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeClassification } from '@/schemas/classification.generated';
import { deserializeClassification } from '@/schemas/classification.generated';
import { serializeAddClassificationToFileRequestBody } from '@/managers/fileClassifications.generated';
import { deserializeAddClassificationToFileRequestBody } from '@/managers/fileClassifications.generated';
import { serializeUpdateClassificationOnFileRequestBody } from '@/managers/fileClassifications.generated';
import { deserializeUpdateClassificationOnFileRequestBody } from '@/managers/fileClassifications.generated';
import { serializeClassificationTemplate } from '@/schemas/classificationTemplate.generated';
import { deserializeClassificationTemplate } from '@/schemas/classificationTemplate.generated';
import { ClassificationTemplateInput } from '@/schemas/classificationTemplate.generated';
import { AddClassificationToFileOptionalsInput } from '@/managers/fileClassifications.generated';
import { AddClassificationToFileOptionals } from '@/managers/fileClassifications.generated';
import { BoxClient } from '@/client.generated';
import { ClassificationTemplateFieldsOptionsField } from '@/schemas/classificationTemplate.generated';
import { AddClassificationRequestBody } from '@/managers/classifications.generated';
import { AddClassificationRequestBodyDataField } from '@/managers/classifications.generated';
import { AddClassificationRequestBodyDataStaticConfigField } from '@/managers/classifications.generated';
import { AddClassificationRequestBodyDataStaticConfigClassificationField } from '@/managers/classifications.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { Classification } from '@/schemas/classification.generated';
import { AddClassificationToFileRequestBody } from '@/managers/fileClassifications.generated';
import { UpdateClassificationOnFileRequestBody } from '@/managers/fileClassifications.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { uploadNewFile } from './commons.generated';
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
test('testFileClassifications', async function testFileClassifications(): Promise<any> {
  const classificationTemplate: ClassificationTemplate =
    await getOrCreateClassificationTemplate();
  const classification: ClassificationTemplateFieldsOptionsField =
    await getOrCreateClassification(classificationTemplate);
  const file: FileFull = await uploadNewFile();
  await expect(async () => {
    await client.fileClassifications.getClassificationOnFile(file.id);
  }).rejects.toThrow();
  const createdFileClassification: Classification =
    await client.fileClassifications.addClassificationToFile(file.id, {
      requestBody: {
        boxSecurityClassificationKey: classification.key,
      } satisfies AddClassificationToFileRequestBody,
    } satisfies AddClassificationToFileOptionalsInput);
  if (
    !(
      createdFileClassification.boxSecurityClassificationKey ==
      classification.key
    )
  ) {
    throw new Error('Assertion failed');
  }
  const fileClassification: Classification =
    await client.fileClassifications.getClassificationOnFile(file.id);
  if (
    !(fileClassification.boxSecurityClassificationKey == classification.key)
  ) {
    throw new Error('Assertion failed');
  }
  const secondClassification: ClassificationTemplateFieldsOptionsField =
    await getOrCreateSecondClassification(classificationTemplate);
  const updatedFileClassification: Classification =
    await client.fileClassifications.updateClassificationOnFile(file.id, [
      new UpdateClassificationOnFileRequestBody({
        value: secondClassification.key,
      }),
    ]);
  if (
    !(
      updatedFileClassification.boxSecurityClassificationKey ==
      secondClassification.key
    )
  ) {
    throw new Error('Assertion failed');
  }
  await client.fileClassifications.deleteClassificationFromFile(file.id);
  await expect(async () => {
    await client.fileClassifications.getClassificationOnFile(file.id);
  }).rejects.toThrow();
  await client.files.deleteFileById(file.id);
});
export {};
