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
import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeClassification } from '../schemas.generated.js';
import { deserializeClassification } from '../schemas.generated.js';
import { serializeAddClassificationToFileRequestBodyArg } from '../managers/fileClassifications.generated.js';
import { deserializeAddClassificationToFileRequestBodyArg } from '../managers/fileClassifications.generated.js';
import { serializeUpdateClassificationOnFileRequestBodyArg } from '../managers/fileClassifications.generated.js';
import { deserializeUpdateClassificationOnFileRequestBodyArg } from '../managers/fileClassifications.generated.js';
import { serializeUpdateClassificationOnFileRequestBodyArgOpField } from '../managers/fileClassifications.generated.js';
import { deserializeUpdateClassificationOnFileRequestBodyArgOpField } from '../managers/fileClassifications.generated.js';
import { serializeUpdateClassificationOnFileRequestBodyArgPathField } from '../managers/fileClassifications.generated.js';
import { deserializeUpdateClassificationOnFileRequestBodyArgPathField } from '../managers/fileClassifications.generated.js';
import { serializeClassificationTemplate } from '../schemas.generated.js';
import { deserializeClassificationTemplate } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { ClassificationTemplateFieldsFieldOptionsField } from '../schemas.generated.js';
import { AddClassificationRequestBodyArg } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgOpField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgFieldKeyField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgDataField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgDataFieldStaticConfigField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField } from '../managers/classifications.generated.js';
import { FileFull } from '../schemas.generated.js';
import { Classification } from '../schemas.generated.js';
import { AddClassificationToFileRequestBodyArg } from '../managers/fileClassifications.generated.js';
import { UpdateClassificationOnFileRequestBodyArg } from '../managers/fileClassifications.generated.js';
import { UpdateClassificationOnFileRequestBodyArgOpField } from '../managers/fileClassifications.generated.js';
import { UpdateClassificationOnFileRequestBodyArgPathField } from '../managers/fileClassifications.generated.js';
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
): Promise<any> {
  const classifications: readonly ClassificationTemplateFieldsFieldOptionsField[] =
    classificationTemplate.fields[0].options;
  const currentNumberOfClassifications: number = classifications.length;
  if (currentNumberOfClassifications == 1) {
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
                colorId: 4,
                classificationDefinition: 'Other description',
              } satisfies AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField,
            } satisfies AddClassificationRequestBodyArgDataFieldStaticConfigField,
          } satisfies AddClassificationRequestBodyArgDataField,
        } satisfies AddClassificationRequestBodyArg,
      ]);
    return classificationTemplateWithNewClassification.fields[0].options[1];
  }
  return classifications[1];
}
test('testFileClassifications', async function testFileClassifications(): Promise<any> {
  const classificationTemplate: ClassificationTemplate =
    await getOrCreateClassificationTemplate();
  const classification: any = await getOrCreateClassification(
    classificationTemplate
  );
  const file: FileFull = await uploadNewFile();
  await expect(async () => {
    await client.fileClassifications.getClassificationOnFile(file.id);
  }).rejects.toThrow();
  const createdFileClassification: Classification =
    await client.fileClassifications.addClassificationToFile(file.id, {
      boxSecurityClassificationKey: classification.key,
    } satisfies AddClassificationToFileRequestBodyArg);
  if (
    !(
      createdFileClassification.boxSecurityClassificationKey ==
      classification.key
    )
  ) {
    throw 'Assertion failed';
  }
  const fileClassification: Classification =
    await client.fileClassifications.getClassificationOnFile(file.id);
  if (
    !(fileClassification.boxSecurityClassificationKey == classification.key)
  ) {
    throw 'Assertion failed';
  }
  const secondClassification: any = await getOrCreateSecondClassification(
    classificationTemplate
  );
  const updatedFileClassification: Classification =
    await client.fileClassifications.updateClassificationOnFile(file.id, [
      {
        op: 'replace' as UpdateClassificationOnFileRequestBodyArgOpField,
        path: '/Box__Security__Classification__Key' as UpdateClassificationOnFileRequestBodyArgPathField,
        value: secondClassification.key,
      } satisfies UpdateClassificationOnFileRequestBodyArg,
    ]);
  if (
    !(
      updatedFileClassification.boxSecurityClassificationKey ==
      secondClassification.key
    )
  ) {
    throw 'Assertion failed';
  }
  await client.fileClassifications.deleteClassificationFromFile(file.id);
  await expect(async () => {
    await client.fileClassifications.getClassificationOnFile(file.id);
  }).rejects.toThrow();
  await client.files.deleteFileById(file.id);
});
export {};
