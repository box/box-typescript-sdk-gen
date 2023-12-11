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
import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeClassification } from '../schemas.generated.js';
import { deserializeClassification } from '../schemas.generated.js';
import { serializeAddClassificationToFolderRequestBodyArg } from '../managers/folderClassifications.generated.js';
import { deserializeAddClassificationToFolderRequestBodyArg } from '../managers/folderClassifications.generated.js';
import { serializeUpdateClassificationOnFolderRequestBodyArg } from '../managers/folderClassifications.generated.js';
import { deserializeUpdateClassificationOnFolderRequestBodyArg } from '../managers/folderClassifications.generated.js';
import { serializeUpdateClassificationOnFolderRequestBodyArgOpField } from '../managers/folderClassifications.generated.js';
import { deserializeUpdateClassificationOnFolderRequestBodyArgOpField } from '../managers/folderClassifications.generated.js';
import { serializeUpdateClassificationOnFolderRequestBodyArgPathField } from '../managers/folderClassifications.generated.js';
import { deserializeUpdateClassificationOnFolderRequestBodyArgPathField } from '../managers/folderClassifications.generated.js';
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
import { FolderFull } from '../schemas.generated.js';
import { Classification } from '../schemas.generated.js';
import { AddClassificationToFolderRequestBodyArg } from '../managers/folderClassifications.generated.js';
import { UpdateClassificationOnFolderRequestBodyArg } from '../managers/folderClassifications.generated.js';
import { UpdateClassificationOnFolderRequestBodyArgOpField } from '../managers/folderClassifications.generated.js';
import { UpdateClassificationOnFolderRequestBodyArgPathField } from '../managers/folderClassifications.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
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
test('testFolderClassifications', async function testFolderClassifications(): Promise<any> {
  const classificationTemplate: ClassificationTemplate =
    await getOrCreateClassificationTemplate();
  const classification: any = await getOrCreateClassification(
    classificationTemplate
  );
  const folder: FolderFull = await createNewFolder();
  await expect(async () => {
    await client.folderClassifications.getClassificationOnFolder(folder.id);
  }).rejects.toThrow();
  const createdFolderClassification: Classification =
    await client.folderClassifications.addClassificationToFolder(folder.id, {
      boxSecurityClassificationKey: classification.key,
    } satisfies AddClassificationToFolderRequestBodyArg);
  if (
    !(
      createdFolderClassification.boxSecurityClassificationKey ==
      classification.key
    )
  ) {
    throw 'Assertion failed';
  }
  const folderClassification: Classification =
    await client.folderClassifications.getClassificationOnFolder(folder.id);
  if (
    !(folderClassification.boxSecurityClassificationKey == classification.key)
  ) {
    throw 'Assertion failed';
  }
  const secondClassification: any = await getOrCreateSecondClassification(
    classificationTemplate
  );
  const updatedFolderClassification: Classification =
    await client.folderClassifications.updateClassificationOnFolder(folder.id, [
      {
        op: 'replace' as UpdateClassificationOnFolderRequestBodyArgOpField,
        path: '/Box__Security__Classification__Key' as UpdateClassificationOnFolderRequestBodyArgPathField,
        value: secondClassification.key,
      } satisfies UpdateClassificationOnFolderRequestBodyArg,
    ]);
  if (
    !(
      updatedFolderClassification.boxSecurityClassificationKey ==
      secondClassification.key
    )
  ) {
    throw 'Assertion failed';
  }
  await client.folderClassifications.deleteClassificationFromFolder(folder.id);
  await expect(async () => {
    await client.folderClassifications.getClassificationOnFolder(folder.id);
  }).rejects.toThrow();
  await client.folders.deleteFolderById(folder.id);
});
export {};
