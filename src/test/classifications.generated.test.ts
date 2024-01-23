import { serializeClassificationTemplateFieldsOptionsField } from '../schemas.generated.js';
import { deserializeClassificationTemplateFieldsOptionsField } from '../schemas.generated.js';
import { serializeUpdateClassificationRequestBody } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBody } from '../managers/classifications.generated.js';
import { serializeUpdateClassificationRequestBodyOpField } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyOpField } from '../managers/classifications.generated.js';
import { serializeUpdateClassificationRequestBodyFieldKeyField } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyFieldKeyField } from '../managers/classifications.generated.js';
import { serializeUpdateClassificationRequestBodyDataField } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyDataField } from '../managers/classifications.generated.js';
import { serializeUpdateClassificationRequestBodyDataStaticConfigField } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyDataStaticConfigField } from '../managers/classifications.generated.js';
import { serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField } from '../managers/classifications.generated.js';
import { deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField } from '../managers/classifications.generated.js';
import { serializeClassificationTemplate } from '../schemas.generated.js';
import { deserializeClassificationTemplate } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { ClassificationTemplateFieldsOptionsField } from '../schemas.generated.js';
import { UpdateClassificationRequestBody } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyOpField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyFieldKeyField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyDataField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyDataStaticConfigField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyDataStaticConfigClassificationField } from '../managers/classifications.generated.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
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
test('testClassifications', async function testClassifications(): Promise<any> {
  const classificationTemplate: ClassificationTemplate =
    await getOrCreateClassificationTemplate();
  const classification: ClassificationTemplateFieldsOptionsField =
    await getOrCreateClassification(classificationTemplate);
  if (!!(classification.key == '')) {
    throw new Error(String('Assertion failed'));
  }
  if (!!(classification.staticConfig!.classification!.colorId == 100)) {
    throw new Error(String('Assertion failed'));
  }
  if (
    !!(
      classification.staticConfig!.classification!.classificationDefinition ==
      ''
    )
  ) {
    throw new Error(String('Assertion failed'));
  }
  const updatedClassificationName: string = getUuid();
  const updatedClassificationDescription: string = getUuid();
  const classificationTemplateWithUpdatedClassification: ClassificationTemplate =
    await client.classifications.updateClassification([
      {
        op: 'editEnumOption' as UpdateClassificationRequestBodyOpField,
        fieldKey:
          'Box__Security__Classification__Key' as UpdateClassificationRequestBodyFieldKeyField,
        enumOptionKey: classification.key,
        data: {
          key: updatedClassificationName,
          staticConfig: {
            classification: {
              colorId: 2,
              classificationDefinition: updatedClassificationDescription,
            } satisfies UpdateClassificationRequestBodyDataStaticConfigClassificationField,
          } satisfies UpdateClassificationRequestBodyDataStaticConfigField,
        } satisfies UpdateClassificationRequestBodyDataField,
      } satisfies UpdateClassificationRequestBody,
    ]);
  const updatedClassifications: readonly ClassificationTemplateFieldsOptionsField[] =
    classificationTemplateWithUpdatedClassification.fields[0].options;
  const updatedClassification: ClassificationTemplateFieldsOptionsField =
    updatedClassifications[0];
  if (!(updatedClassification.key == updatedClassificationName)) {
    throw new Error(String('Assertion failed'));
  }
  if (!(updatedClassification.staticConfig!.classification!.colorId == 2)) {
    throw new Error(String('Assertion failed'));
  }
  if (
    !(
      updatedClassification.staticConfig!.classification!
        .classificationDefinition == updatedClassificationDescription
    )
  ) {
    throw new Error(String('Assertion failed'));
  }
});
export {};
