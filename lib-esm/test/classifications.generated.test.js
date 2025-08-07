import { UpdateClassificationRequestBody } from '../managers/classifications.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { getOrCreateClassificationTemplate } from './commons.generated.js';
import { getOrCreateClassification } from './commons.generated.js';
export const client = getDefaultClient();
test('testClassifications', async function testClassifications() {
    const classificationTemplate = await getOrCreateClassificationTemplate();
    const classification = await getOrCreateClassification(classificationTemplate);
    if (!!(classification.key == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(classification.staticConfig.classification.colorId == 100)) {
        throw new Error('Assertion failed');
    }
    if (!!(classification.staticConfig.classification.classificationDefinition ==
        '')) {
        throw new Error('Assertion failed');
    }
    const updatedClassificationName = getUuid();
    const updatedClassificationDescription = getUuid();
    const classificationTemplateWithUpdatedClassification = await client.classifications.updateClassification([
        new UpdateClassificationRequestBody({
            enumOptionKey: classification.key,
            data: {
                key: updatedClassificationName,
                staticConfig: {
                    classification: {
                        colorId: 2,
                        classificationDefinition: updatedClassificationDescription,
                    },
                },
            },
        }),
    ]);
    const updatedClassifications = classificationTemplateWithUpdatedClassification.fields[0].options;
    const updatedClassification = updatedClassifications[0];
    if (!(updatedClassification.key == updatedClassificationName)) {
        throw new Error('Assertion failed');
    }
    if (!(updatedClassification.staticConfig.classification.colorId == 2)) {
        throw new Error('Assertion failed');
    }
    if (!(updatedClassification.staticConfig.classification
        .classificationDefinition == updatedClassificationDescription)) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=classifications.generated.test.js.map