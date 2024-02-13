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
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeClassification } from '../schemas.generated.js';
import { deserializeClassification } from '../schemas.generated.js';
import { serializeAddClassificationToFileRequestBody } from '../managers/fileClassifications.generated.js';
import { deserializeAddClassificationToFileRequestBody } from '../managers/fileClassifications.generated.js';
import { serializeUpdateClassificationOnFileRequestBody } from '../managers/fileClassifications.generated.js';
import { deserializeUpdateClassificationOnFileRequestBody } from '../managers/fileClassifications.generated.js';
import { serializeUpdateClassificationOnFileRequestBodyOpField } from '../managers/fileClassifications.generated.js';
import { deserializeUpdateClassificationOnFileRequestBodyOpField } from '../managers/fileClassifications.generated.js';
import { serializeUpdateClassificationOnFileRequestBodyPathField } from '../managers/fileClassifications.generated.js';
import { deserializeUpdateClassificationOnFileRequestBodyPathField } from '../managers/fileClassifications.generated.js';
import { serializeClassificationTemplate } from '../schemas.generated.js';
import { deserializeClassificationTemplate } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { ClassificationTemplateFieldsOptionsField } from '../schemas.generated.js';
import { AddClassificationRequestBody } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyOpField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyFieldKeyField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyDataField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyDataStaticConfigField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyDataStaticConfigClassificationField } from '../managers/classifications.generated.js';
import { FileFull } from '../schemas.generated.js';
import { Classification } from '../schemas.generated.js';
import { AddClassificationToFileRequestBody } from '../managers/fileClassifications.generated.js';
import { UpdateClassificationOnFileRequestBody } from '../managers/fileClassifications.generated.js';
import { UpdateClassificationOnFileRequestBodyOpField } from '../managers/fileClassifications.generated.js';
import { UpdateClassificationOnFileRequestBodyPathField } from '../managers/fileClassifications.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { getOrCreateClassificationTemplate } from './commons.generated.js';
import { getOrCreateClassification } from './commons.generated.js';
import { ClassificationTemplate } from '../schemas.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
export async function getOrCreateSecondClassification(
  classificationTemplate: ClassificationTemplate
): Promise<ClassificationTemplateFieldsOptionsField> {
  const classifications: readonly ClassificationTemplateFieldsOptionsField[] =
    classificationTemplate.fields[0].options;
  const currentNumberOfClassifications: number = classifications.length;
  if (currentNumberOfClassifications == 1) {
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
                colorId: 4,
                classificationDefinition: 'Other description',
              } satisfies AddClassificationRequestBodyDataStaticConfigClassificationField,
            } satisfies AddClassificationRequestBodyDataStaticConfigField,
          } satisfies AddClassificationRequestBodyDataField,
        } satisfies AddClassificationRequestBody,
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
      boxSecurityClassificationKey: classification.key,
    } satisfies AddClassificationToFileRequestBody);
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
      {
        op: 'replace' as UpdateClassificationOnFileRequestBodyOpField,
        path: '/Box__Security__Classification__Key' as UpdateClassificationOnFileRequestBodyPathField,
        value: secondClassification.key,
      } satisfies UpdateClassificationOnFileRequestBody,
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
