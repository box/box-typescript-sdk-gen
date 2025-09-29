import { serializeClassificationTemplateFieldsOptionsField } from '@/schemas/classificationTemplate.generated';
import { deserializeClassificationTemplateFieldsOptionsField } from '@/schemas/classificationTemplate.generated';
import { serializeUpdateClassificationRequestBody } from '@/managers/classifications.generated';
import { deserializeUpdateClassificationRequestBody } from '@/managers/classifications.generated';
import { serializeUpdateClassificationRequestBodyDataField } from '@/managers/classifications.generated';
import { deserializeUpdateClassificationRequestBodyDataField } from '@/managers/classifications.generated';
import { serializeUpdateClassificationRequestBodyDataStaticConfigField } from '@/managers/classifications.generated';
import { deserializeUpdateClassificationRequestBodyDataStaticConfigField } from '@/managers/classifications.generated';
import { serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField } from '@/managers/classifications.generated';
import { deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField } from '@/managers/classifications.generated';
import { serializeClassificationTemplate } from '@/schemas/classificationTemplate.generated';
import { deserializeClassificationTemplate } from '@/schemas/classificationTemplate.generated';
import { BoxClient } from '@/client.generated';
import { ClassificationTemplateFieldsOptionsField } from '@/schemas/classificationTemplate.generated';
import { UpdateClassificationRequestBody } from '@/managers/classifications.generated';
import { UpdateClassificationRequestBodyDataField } from '@/managers/classifications.generated';
import { UpdateClassificationRequestBodyDataStaticConfigField } from '@/managers/classifications.generated';
import { UpdateClassificationRequestBodyDataStaticConfigClassificationField } from '@/managers/classifications.generated';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
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
test('testClassifications', async function testClassifications(): Promise<any> {
  const classificationTemplate: ClassificationTemplate =
    await getOrCreateClassificationTemplate();
  const classification: ClassificationTemplateFieldsOptionsField =
    await getOrCreateClassification(classificationTemplate);
  if (!!(classification.key == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(classification.staticConfig!.classification!.colorId == 100)) {
    throw new Error('Assertion failed');
  }
  if (
    !!(
      classification.staticConfig!.classification!.classificationDefinition ==
      ''
    )
  ) {
    throw new Error('Assertion failed');
  }
  const updatedClassificationName: string = getUuid();
  const updatedClassificationDescription: string = getUuid();
  const classificationTemplateWithUpdatedClassification: ClassificationTemplate =
    await client.classifications.updateClassification([
      new UpdateClassificationRequestBody({
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
      }),
    ]);
  const updatedClassifications: readonly ClassificationTemplateFieldsOptionsField[] =
    classificationTemplateWithUpdatedClassification.fields[0].options;
  const updatedClassification: ClassificationTemplateFieldsOptionsField =
    updatedClassifications[0];
  if (!(updatedClassification.key == updatedClassificationName)) {
    throw new Error('Assertion failed');
  }
  if (!(updatedClassification.staticConfig!.classification!.colorId == 2)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      updatedClassification.staticConfig!.classification!
        .classificationDefinition == updatedClassificationDescription
    )
  ) {
    throw new Error('Assertion failed');
  }
});
export {};
