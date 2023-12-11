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
import { serializeClassificationTemplateFieldsFieldOptionsField } from '../schemas.generated.js';
import { deserializeClassificationTemplateFieldsFieldOptionsField } from '../schemas.generated.js';
import { serializeClassificationTemplate } from '../schemas.generated.js';
import { deserializeClassificationTemplate } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { UpdateClassificationRequestBodyArg } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArgOpField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArgFieldKeyField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArgDataField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArgDataFieldStaticConfigField } from '../managers/classifications.generated.js';
import { UpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField } from '../managers/classifications.generated.js';
import { ClassificationTemplateFieldsFieldOptionsField } from '../schemas.generated.js';
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
  const classification: any = await getOrCreateClassification(
    classificationTemplate
  );
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
  const updatedClassification: any = updatedClassifications[0];
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
