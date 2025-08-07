import { AddClassificationRequestBody } from '../managers/classifications.generated.js';
import { UpdateClassificationOnFileRequestBody } from '../managers/fileClassifications.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { getOrCreateClassificationTemplate } from './commons.generated.js';
import { getOrCreateClassification } from './commons.generated.js';
import { ClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
export const client = getDefaultClient();
export async function getOrCreateSecondClassification(classificationTemplateInput) {
    const classificationTemplate = new ClassificationTemplate({
        id: classificationTemplateInput.id,
        type: classificationTemplateInput.type,
        scope: classificationTemplateInput.scope,
        templateKey: classificationTemplateInput.templateKey,
        displayName: classificationTemplateInput.displayName,
        hidden: classificationTemplateInput.hidden,
        copyInstanceOnItemCopy: classificationTemplateInput.copyInstanceOnItemCopy,
        fields: classificationTemplateInput.fields,
    });
    const classifications = classificationTemplate.fields[0].options;
    const currentNumberOfClassifications = classifications.length;
    if (currentNumberOfClassifications == 1) {
        const classificationTemplateWithNewClassification = await client.classifications.addClassification([
            new AddClassificationRequestBody({
                data: {
                    key: getUuid(),
                    staticConfig: {
                        classification: {
                            colorId: 4,
                            classificationDefinition: 'Other description',
                        },
                    },
                },
            }),
        ]);
        return classificationTemplateWithNewClassification.fields[0].options[1];
    }
    return classifications[1];
}
test('testFileClassifications', async function testFileClassifications() {
    const classificationTemplate = await getOrCreateClassificationTemplate();
    const classification = await getOrCreateClassification(classificationTemplate);
    const file = await uploadNewFile();
    await expect(async () => {
        await client.fileClassifications.getClassificationOnFile(file.id);
    }).rejects.toThrow();
    const createdFileClassification = await client.fileClassifications.addClassificationToFile(file.id, {
        requestBody: {
            boxSecurityClassificationKey: classification.key,
        },
    });
    if (!(createdFileClassification.boxSecurityClassificationKey ==
        classification.key)) {
        throw new Error('Assertion failed');
    }
    const fileClassification = await client.fileClassifications.getClassificationOnFile(file.id);
    if (!(fileClassification.boxSecurityClassificationKey == classification.key)) {
        throw new Error('Assertion failed');
    }
    const secondClassification = await getOrCreateSecondClassification(classificationTemplate);
    const updatedFileClassification = await client.fileClassifications.updateClassificationOnFile(file.id, [
        new UpdateClassificationOnFileRequestBody({
            value: secondClassification.key,
        }),
    ]);
    if (!(updatedFileClassification.boxSecurityClassificationKey ==
        secondClassification.key)) {
        throw new Error('Assertion failed');
    }
    await client.fileClassifications.deleteClassificationFromFile(file.id);
    await expect(async () => {
        await client.fileClassifications.getClassificationOnFile(file.id);
    }).rejects.toThrow();
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=fileClassifications.generated.test.js.map