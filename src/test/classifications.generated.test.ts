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
import { serializeUpdateClassificationRequestBodyArg } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyArg } from '../managers/classifications.generated.js';
import { serializeUpdateClassificationRequestBodyArgOpField } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyArgOpField } from '../managers/classifications.generated.js';
import { serializeUpdateClassificationRequestBodyArgFieldKeyField } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyArgFieldKeyField } from '../managers/classifications.generated.js';
import { serializeUpdateClassificationRequestBodyArgDataField } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyArgDataField } from '../managers/classifications.generated.js';
import { serializeUpdateClassificationRequestBodyArgDataFieldStaticConfigField } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyArgDataFieldStaticConfigField } from '../managers/classifications.generated.js';
import { serializeUpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField } from '../managers/classifications.generated.js';
import { serializeClassificationTemplate } from '../schemas.generated.js';
import { deserializeClassificationTemplate } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { CreateClassificationTemplateRequestBodyArg } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgScopeField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgDisplayNameField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgTemplateKeyField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgFieldsField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgFieldsFieldTypeField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgFieldsFieldKeyField } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField } from '../managers/classifications.generated.js';
import { ClassificationTemplateFieldsFieldOptionsField } from '../schemas.generated.js';
import { AddClassificationRequestBodyArg } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgOpField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgFieldKeyField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgDataField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgDataFieldStaticConfigField } from '../managers/classifications.generated.js';
import { AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArg } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArgOpField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArgFieldKeyField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArgDataField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArgDataFieldStaticConfigField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField } from '../managers/classifications.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { ClassificationTemplate } from '../schemas.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
export async function getOrCreateClassificationTemplate(): Promise<ClassificationTemplate> {
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
export async function getOrCreateClassification(
  classificationTemplate: ClassificationTemplate
): Promise<ClassificationTemplateFieldsFieldOptionsField> {
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
  return classifications[currentNumberOfClassifications - 1];
}
test('testClassifications', async function testClassifications(): Promise<any> {
  const classificationTemplate: ClassificationTemplate =
    await getOrCreateClassificationTemplate();
  const classification: ClassificationTemplateFieldsFieldOptionsField =
    await getOrCreateClassification(classificationTemplate);
  if (!!(classification.key == '')) {
    throw 'Assertion failed';
  }
  if (!!(classification.staticConfig!.classification!.colorId == 100)) {
    throw 'Assertion failed';
  }
  if (
    !!(
      classification.staticConfig!.classification!.classificationDefinition ==
      ''
    )
  ) {
    throw 'Assertion failed';
  }
  const updatedClassificationName: string = getUuid();
  const updatedClassificationDescription: string = getUuid();
  const classificationTemplateWithUpdatedClassification: ClassificationTemplate =
    await client.classifications.updateClassification([
      {
        op: 'editEnumOption' as UpdateClassificationRequestBodyArgOpField,
        fieldKey:
          'Box__Security__Classification__Key' as UpdateClassificationRequestBodyArgFieldKeyField,
        enumOptionKey: classification.key,
        data: {
          key: updatedClassificationName,
          staticConfig: {
            classification: {
              colorId: 2,
              classificationDefinition: updatedClassificationDescription,
            } satisfies UpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField,
          } satisfies UpdateClassificationRequestBodyArgDataFieldStaticConfigField,
        } satisfies UpdateClassificationRequestBodyArgDataField,
      } satisfies UpdateClassificationRequestBodyArg,
    ]);
  const updatedClassifications: readonly ClassificationTemplateFieldsFieldOptionsField[] =
    classificationTemplateWithUpdatedClassification.fields[0].options;
  const numberOfClassificationsAfterUpdate: number =
    updatedClassifications.length;
  const updatedClassification: ClassificationTemplateFieldsFieldOptionsField =
    updatedClassifications[numberOfClassificationsAfterUpdate - 1];
  if (!(updatedClassification.key == updatedClassificationName)) {
    throw 'Assertion failed';
  }
  if (!(updatedClassification.staticConfig!.classification!.colorId == 2)) {
    throw 'Assertion failed';
  }
  if (
    !(
      updatedClassification.staticConfig!.classification!
        .classificationDefinition == updatedClassificationDescription
    )
  ) {
    throw 'Assertion failed';
  }
});
export {};
